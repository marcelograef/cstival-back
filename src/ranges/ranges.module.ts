import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RangesController } from './ranges.controller';
import { Ranges } from './ranges.entity';
import { RangesService } from './ranges.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ranges])],

  controllers: [RangesController],
  providers: [RangesService],
  exports: [TypeOrmModule],
})
export class RangesModule {}
