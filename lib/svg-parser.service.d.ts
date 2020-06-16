/// <reference types="sketchapp" />
import { LayerService, ShapeService, SymbolService } from '@xlayers/sketch-lib';
import { StyleService } from '@xlayers/sketch-lib';
import { SvgCodeGenOptions } from './svg-codegen';
import { SvgContextService } from './svg-context.service';
export declare class SvgParserService {
    private shape;
    private style;
    private readonly layerService;
    private readonly symbolService;
    private svgContext;
    constructor(shape: ShapeService, style: StyleService, layerService: LayerService, symbolService: SymbolService, svgContext: SvgContextService);
    compute(current: SketchMSLayer, data: SketchMSData, options: SvgCodeGenOptions): void;
    private walk;
    private visit;
    private visitSymbol;
    private visitContent;
    private visitShapePath;
    private visitTriangleShape;
    private visitShapeGroup;
    private extractFillStyle;
}
