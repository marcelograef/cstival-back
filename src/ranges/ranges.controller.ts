import { Controller, Post, Body, Get, Param, Query, Put } from '@nestjs/common';
import { RangeState } from './dto/ranges.dto';
import { Ranges } from './ranges.entity';
import { RangesService } from './ranges.service';

@Controller('Ranges')
export class RangesController {
  constructor(private readonly appService: RangesService) {}

  @Post()
  createRange(@Body() body): Promise<string> {
    console.log({ body });
    this.appService.create(body);
    return Promise.resolve('OK');
  }

  @Put()
  updateRange(@Body() body): Promise<string> {
    console.log({ body });
    this.appService.create(body);
    return Promise.resolve('OK');
  }

  @Get()
  getRanges(@Query() query): Promise<Ranges[]> {
    const { key, situation } = query;
    return this.appService.getRanges({ key, situation });
  }

  @Get('rrr')
  createRangesFromJson(@Body() body): Promise<string> {
    const { data, key } = body;
    Object.keys(data).forEach((k) => {
      this.appService.create({ key, situation: k, ...data[k] });
    });
    return Promise.resolve('OK');
  }
}
