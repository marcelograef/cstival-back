import { Module } from '@nestjs/common';
import { RangesModule } from './ranges.module';
import { RangesService } from './ranges.service';
import { RangesController } from './ranges.controller';

@Module({
  imports: [RangesModule],
  providers: [RangesService],
  controllers: [RangesController],
})
export class RangeHttpModule {}
