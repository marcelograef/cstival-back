import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ranges } from './ranges.entity';

@Injectable()
export class RangesService {
  constructor(
    @InjectRepository(Ranges)
    private rangesRepository: Repository<Ranges>,
  ) {}

  getRanges(query: { key: string; situation: string }): Promise<Ranges[]> {
    return this.rangesRepository.find(query);
  }

  findOne(id: string): Promise<Ranges> {
    return this.rangesRepository.findOne(id);
  }

  async create(body): Promise<any> {
    const { key, situation, bluff, call, fold, raise, info } = body;

    const range = await this.rangesRepository.find({ key, situation });

    console.log('UPDATE -----');

    if (range.length > 0) {
      console.log({ info });
      console.log('UPDATE -----');
      console.log({ range });
      return this.rangesRepository.update(
        { key, situation },
        {
          key,
          situation,
          bluff,
          call,
          fold,
          raise,
          info: JSON.stringify(info),
        },
      );
    } else {
      console.log('CREATE');
      const query = `Insert into ranges (\`key\`,situation,bluff,\`call\`,fold,raise,info) values ("${key}","${situation}","${
        bluff ? bluff : ''
      }","${call ? call : ''}","${fold ? fold : ''}","${raise ? raise : ''}","${
        info ? JSON.stringify(info).replace(/\"/gm, "'") : ''
      }")`;
      return this.rangesRepository.query(query);
    }
  }
}
