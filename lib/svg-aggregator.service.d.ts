/// <reference types="sketchapp" />
import { FormatService } from '@xlayers/sketch-lib';
import { SvgContextService } from './svg-context.service';
import { SvgCodeGenOptions } from './svg-codegen';
export declare class SvgAggregatorService {
    private readonly formatService;
    private svgContext;
    constructor(formatService: FormatService, svgContext: SvgContextService);
    aggregate(current: SketchMSLayer, options: SvgCodeGenOptions): {
        kind: string;
        language: string;
        value: string;
        uri: string;
    }[];
    private renderFile;
    private generateXmlAttribute;
    private generateXmlHeaderAttribute;
}
