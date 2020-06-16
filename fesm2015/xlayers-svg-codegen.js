import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { FormatService, ShapeService, StyleService, LayerService, SymbolService, SketchLibModule } from '@xlayers/sketch-lib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SvgContextService {
    /**
     * @param {?} current
     * @return {?}
     */
    identify(current) {
        return ['triangle', 'shapePath'].includes((/** @type {?} */ (current._class)));
    }
    /**
     * @param {?} current
     * @return {?}
     */
    of(current) {
        return ((/** @type {?} */ (current))).svg;
    }
    /**
     * @param {?} current
     * @param {?} newContext
     * @return {?}
     */
    put(current, newContext) {
        ((/** @type {?} */ (current))).svg = Object.assign({}, this.of(current), newContext);
    }
    /**
     * @param {?} current
     * @return {?}
     */
    clear(current) {
        delete ((/** @type {?} */ (current))).svg;
    }
}
SvgContextService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ SvgContextService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SvgContextService_Factory() { return new SvgContextService(); }, token: SvgContextService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SvgAggregatorService {
    /**
     * @param {?} formatService
     * @param {?} svgContext
     */
    constructor(formatService, svgContext) {
        this.formatService = formatService;
        this.svgContext = svgContext;
    }
    /**
     * @param {?} current
     * @param {?} options
     * @return {?}
     */
    aggregate(current, options) {
        /** @type {?} */
        const context = this.svgContext.of(current);
        return [
            {
                kind: 'svg',
                language: 'svg',
                value: this.renderFile(current, context.paths, context.offset, options),
                uri: `${this.formatService.normalizeName(current.name)}.svg`
            }
        ];
    }
    /**
     * @private
     * @param {?} current
     * @param {?} paths
     * @param {?} offset
     * @param {?} options
     * @return {?}
     */
    renderFile(current, paths, offset, options) {
        /** @type {?} */
        const attributes = this.generateXmlAttribute(current, offset, options);
        /** @type {?} */
        const openTag = ['<svg', ...attributes].join(' ');
        return `\
${openTag}>
${paths
            .map((/**
         * @param {?} path
         * @return {?}
         */
        path => this.formatService.indent(1, `<${path.type} ${path.attributes.join(' ')}/>`)))
            .join('\n')}
</svg>`;
    }
    /**
     * @private
     * @param {?} current
     * @param {?} offset
     * @param {?} options
     * @return {?}
     */
    generateXmlAttribute(current, offset, options) {
        return [
            ...this.generateXmlHeaderAttribute(options),
            `width="${(current.frame.width + offset * 2).toFixed(2)}"`,
            `height="${(current.frame.height + offset * 2).toFixed(2)}"`
        ];
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    generateXmlHeaderAttribute(options) {
        return options.xmlNamespace
            ? [
                'version="1.1"',
                `xmlns="http://www.w3.org/2000/svg"`,
                `xmlns:xlink="http://www.w3.org/1999/xlink"`
            ]
            : [];
    }
}
SvgAggregatorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SvgAggregatorService.ctorParameters = () => [
    { type: FormatService },
    { type: SvgContextService }
];
/** @nocollapse */ SvgAggregatorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SvgAggregatorService_Factory() { return new SvgAggregatorService(ɵɵinject(FormatService), ɵɵinject(SvgContextService)); }, token: SvgAggregatorService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SvgAggregatorService.prototype.formatService;
    /**
     * @type {?}
     * @private
     */
    SvgAggregatorService.prototype.svgContext;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SvgParserService {
    /**
     * @param {?} shape
     * @param {?} style
     * @param {?} layerService
     * @param {?} symbolService
     * @param {?} svgContext
     */
    constructor(shape, style, layerService, symbolService, svgContext) {
        this.shape = shape;
        this.style = style;
        this.layerService = layerService;
        this.symbolService = symbolService;
        this.svgContext = svgContext;
    }
    /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    compute(current, data, options) {
        this.visit(current, data, options);
    }
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    walk(current, data, options) {
        if (this.layerService.identify(current)) {
            current.layers.forEach((/**
             * @param {?} layer
             * @return {?}
             */
            layer => {
                this.visit(layer, data, options);
            }));
        }
        else if (this.symbolService.identify(current)) {
            this.visitSymbol(current, data, options);
        }
    }
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    visit(current, data, options) {
        if (options.force) {
            this.svgContext.clear(current);
        }
        if (this.svgContext.identify(current)) {
            if (!this.svgContext.of(current)) {
                this.visitContent(current);
            }
        }
        this.walk(current, data, options);
    }
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    visitSymbol(current, data, options) {
        /** @type {?} */
        const symbolMaster = this.symbolService.lookup(current, data);
        if (symbolMaster) {
            this.compute(symbolMaster, data, options);
        }
    }
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    visitContent(current) {
        switch ((/** @type {?} */ (current._class))) {
            case 'shapePath':
                this.visitShapePath(current);
                break;
            case 'shapeGroup':
                this.visitShapeGroup(current);
                break;
            case 'triangle':
                this.visitTriangleShape(current);
                break;
            default:
                break;
        }
    }
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    visitShapePath(current) {
        /** @type {?} */
        const config = [];
        /** @type {?} */
        let offset = 0;
        // TODO: Support multiple border
        if (current.style.borders &&
            current.style.borders.length > 0 &&
            current.style.borders[0].thickness) {
            config.push(`stroke-width="${current.style.borders[0].thickness}"`);
            /** @type {?} */
            const color = this.style.parseColorAsHex(current.style.borders[0].color);
            config.push(`stroke="${color}"`);
            offset = current.style.borders[0].thickness;
        }
        // TODO: move to @types/sketchapp
        /** @type {?} */
        const origin = this.shape.parsePoint(((/** @type {?} */ (current))).points[0].point, offset, current);
        /** @type {?} */
        const segments = ((/** @type {?} */ (current))).points.slice(1).map((/**
         * @param {?} curvePoint
         * @return {?}
         */
        curvePoint => {
            /** @type {?} */
            const curveFrom = this.shape.parsePoint(curvePoint.curveFrom, offset, current);
            /** @type {?} */
            const curveTo = this.shape.parsePoint(curvePoint.curveTo, offset, current);
            /** @type {?} */
            const currPoint = this.shape.parsePoint(curvePoint.point, offset, current);
            if (curveTo.x === curveFrom.x && curveTo.y === curveFrom.y) {
                return `L ${currPoint.x} ${currPoint.y}`;
            }
            return `S ${curveTo.x} ${curveTo.y}, ${currPoint.x} ${currPoint.y}`;
        }));
        segments.unshift(`M${origin.x} ${origin.y}`);
        if (((/** @type {?} */ (current))).isClosed) {
            segments.push('z');
        }
        /** @type {?} */
        const fillStyle = this.extractFillStyle(current);
        this.svgContext.put(current, {
            offset,
            paths: [
                { type: 'path', attributes: [...config, fillStyle, `d="${segments}"`] }
            ]
        });
    }
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    visitTriangleShape(current) {
        /** @type {?} */
        const config = [];
        /** @type {?} */
        let offset = 0;
        // TODO: Support multiple border
        if (current.style.borders &&
            current.style.borders.length > 0 &&
            current.style.borders[0].thickness) {
            config.push(`stroke-width="${current.style.borders[0].thickness / 2}"`);
            /** @type {?} */
            const color = this.style.parseColorAsHex(current.style.borders[0].color);
            config.push(`stroke="${color}"`);
            offset = current.style.borders[0].thickness;
        }
        /** @type {?} */
        const segments = ((/** @type {?} */ (current))).points
            .map((/**
         * @param {?} curvePoint
         * @return {?}
         */
        curvePoint => {
            /** @type {?} */
            const currPoint = this.shape.parsePoint(curvePoint.point, offset / 2, current);
            return `${currPoint.x}, ${currPoint.y}`;
        }))
            .join(' ');
        /** @type {?} */
        const fillStyle = this.extractFillStyle(current);
        this.svgContext.put(current, {
            offset,
            paths: [
                {
                    type: 'polygon',
                    attributes: [...config, fillStyle, `points="${segments}"`]
                }
            ]
        });
    }
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    visitShapeGroup(current) {
        console.log(current);
        /** @type {?} */
        const offset = 0;
        /** @type {?} */
        const paths = current.layers.map((/**
         * @param {?} layer
         * @return {?}
         */
        layer => {
            // TODO: move to @types/sketchapp
            /** @type {?} */
            const origin = this.shape.parsePoint(((/** @type {?} */ (layer))).points[0].point, offset, layer);
            /** @type {?} */
            const segments = ((/** @type {?} */ (layer))).points.slice(1).map((/**
             * @param {?} curvePoint
             * @return {?}
             */
            curvePoint => {
                /** @type {?} */
                const curveFrom = this.shape.parsePoint(curvePoint.curveFrom, offset, layer);
                /** @type {?} */
                const curveTo = this.shape.parsePoint(curvePoint.curveTo, offset, layer);
                /** @type {?} */
                const currPoint = this.shape.parsePoint(curvePoint.point, offset, layer);
                if (curveTo.x === curveFrom.x && curveTo.y === curveFrom.y) {
                    return `L ${layer.frame.x + currPoint.x} ${layer.frame.y +
                        currPoint.y}`;
                }
                return `S ${layer.frame.x + curveTo.x} ${layer.frame.y +
                    curveTo.y}, ${layer.frame.x + currPoint.x} ${layer.frame.y +
                    currPoint.y}`;
            }));
            segments.unshift(`M${layer.frame.x + origin.x} ${layer.frame.y + origin.y}`);
            // TODO: isClosed to type
            if (((/** @type {?} */ (layer))).isClosed) {
                segments.push('z');
            }
            return segments.join(' ');
        }));
        /** @type {?} */
        const fillStyle = this.extractFillStyle(current);
        this.svgContext.put(current, {
            offset,
            paths: [
                { type: 'path', attributes: [fillStyle, `d="${paths.join(' ')}"`] }
            ]
        });
    }
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    extractFillStyle(current) {
        /** @type {?} */
        const obj = ((/** @type {?} */ (current))).style.fills;
        if (obj && obj.length > 0) {
            // we only support one fill: take the first one!
            // ignore the other fills
            /** @type {?} */
            const firstFill = obj[0];
            if (firstFill.isEnabled) {
                /** @type {?} */
                const fillColor = this.style.parseColorAsRgba(firstFill.color);
                return `fill="${fillColor}"`;
            }
        }
        return 'fill="none"';
    }
}
SvgParserService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SvgParserService.ctorParameters = () => [
    { type: ShapeService },
    { type: StyleService },
    { type: LayerService },
    { type: SymbolService },
    { type: SvgContextService }
];
/** @nocollapse */ SvgParserService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SvgParserService_Factory() { return new SvgParserService(ɵɵinject(ShapeService), ɵɵinject(StyleService), ɵɵinject(LayerService), ɵɵinject(SymbolService), ɵɵinject(SvgContextService)); }, token: SvgParserService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SvgParserService.prototype.shape;
    /**
     * @type {?}
     * @private
     */
    SvgParserService.prototype.style;
    /**
     * @type {?}
     * @private
     */
    SvgParserService.prototype.layerService;
    /**
     * @type {?}
     * @private
     */
    SvgParserService.prototype.symbolService;
    /**
     * @type {?}
     * @private
     */
    SvgParserService.prototype.svgContext;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SvgCodeGenService {
    /**
     * @param {?} svgContext
     * @param {?} svgParser
     * @param {?} svgAggretatorService
     */
    constructor(svgContext, svgParser, svgAggretatorService) {
        this.svgContext = svgContext;
        this.svgParser = svgParser;
        this.svgAggretatorService = svgAggretatorService;
    }
    /**
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    compute(current, data, options) {
        this.svgParser.compute(current, data, this.compileOptions(options));
    }
    /**
     * @param {?} current
     * @param {?=} options
     * @return {?}
     */
    aggregate(current, options) {
        return this.svgAggretatorService.aggregate(current, this.compileOptions(options));
    }
    /**
     * @param {?} current
     * @return {?}
     */
    identify(current) {
        return this.svgContext.identify(current);
    }
    /**
     * @param {?} current
     * @return {?}
     */
    context(current) {
        return this.svgContext.of(current);
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    compileOptions(options) {
        return Object.assign({ xmlNamespace: true }, options);
    }
}
SvgCodeGenService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SvgCodeGenService.ctorParameters = () => [
    { type: SvgContextService },
    { type: SvgParserService },
    { type: SvgAggregatorService }
];
/** @nocollapse */ SvgCodeGenService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SvgCodeGenService_Factory() { return new SvgCodeGenService(ɵɵinject(SvgContextService), ɵɵinject(SvgParserService), ɵɵinject(SvgAggregatorService)); }, token: SvgCodeGenService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SvgCodeGenService.prototype.svgContext;
    /**
     * @type {?}
     * @private
     */
    SvgCodeGenService.prototype.svgParser;
    /**
     * @type {?}
     * @private
     */
    SvgCodeGenService.prototype.svgAggretatorService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SvgCodeGenModule {
}
SvgCodeGenModule.decorators = [
    { type: NgModule, args: [{
                imports: [SketchLibModule]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SvgAggregatorService, SvgCodeGenModule, SvgCodeGenService, SvgContextService, SvgParserService };
//# sourceMappingURL=xlayers-svg-codegen.js.map
