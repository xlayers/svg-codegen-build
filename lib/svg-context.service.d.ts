/// <reference types="sketchapp" />
import { SvgCodeGenContext } from './svg-codegen';
export declare class SvgContextService {
    identify(current: SketchMSLayer): boolean;
    of(current: SketchMSLayer): any;
    put(current: SketchMSLayer, newContext: SvgCodeGenContext): void;
    clear(current: SketchMSLayer): void;
}
