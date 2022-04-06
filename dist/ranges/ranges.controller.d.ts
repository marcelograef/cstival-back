import { Ranges } from './ranges.entity';
import { RangesService } from './ranges.service';
export declare class RangesController {
    private readonly appService;
    constructor(appService: RangesService);
    createRange(body: any): Promise<string>;
    updateRange(body: any): Promise<string>;
    getRanges(query: any): Promise<Ranges[]>;
    createRangesFromJson(body: any): Promise<string>;
}
