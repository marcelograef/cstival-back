export declare class RangeState {
    bluff?: string;
    call?: string;
    raise?: string;
    fold?: string;
    info?: RangeInfo;
}
export interface RangeInfo {
    span01?: string;
    span02?: string;
    messages?: string[];
}
