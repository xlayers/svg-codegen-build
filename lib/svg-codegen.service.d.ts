/// <reference types="sketchapp" />
import { SvgContextService } from './svg-context.service';
import { SvgAggregatorService } from './svg-aggregator.service';
import { SvgParserService } from './svg-parser.service';
import { SvgCodeGenOptions } from './svg-codegen';
export declare class SvgCodeGenService {
    private svgContext;
    private svgParser;
    private svgAggretatorService;
    constructor(svgContext: SvgContextService, svgParser: SvgParserService, svgAggretatorService: SvgAggregatorService);
    compute(current: SketchMSLayer, data: SketchMSData, options?: SvgCodeGenOptions): void;
    aggregate(current: SketchMSLayer, options?: SvgCodeGenOptions): {
        kind: string;
        language: string;
        value: string;
        uri: string;
    }[];
    identify(current: SketchMSLayer): boolean;
    context(current: SketchMSLayer): any;
    private compileOptions;
}
