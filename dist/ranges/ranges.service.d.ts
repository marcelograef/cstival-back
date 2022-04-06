import { Repository } from 'typeorm';
import { Ranges } from './ranges.entity';
export declare class RangesService {
    private rangesRepository;
    constructor(rangesRepository: Repository<Ranges>);
    getRanges(query: {
        key: string;
        situation: string;
    }): Promise<Ranges[]>;
    findOne(id: string): Promise<Ranges>;
    create(body: any): Promise<any>;
}
