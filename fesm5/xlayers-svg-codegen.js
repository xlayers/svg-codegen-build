import { __assign, __spread } from 'tslib';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { FormatService, ShapeService, StyleService, LayerService, SymbolService, SketchLibModule } from '@xlayers/sketch-lib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SvgContextService = /** @class */ (function () {
    function SvgContextService() {
    }
    /**
     * @param {?} current
     * @return {?}
     */
    SvgContextService.prototype.identify = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        return ['triangle', 'shapePath'].includes((/** @type {?} */ (current._class)));
    };
    /**
     * @param {?} current
     * @return {?}
     */
    SvgContextService.prototype.of = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        return ((/** @type {?} */ (current))).svg;
    };
    /**
     * @param {?} current
     * @param {?} newContext
     * @return {?}
     */
    SvgContextService.prototype.put = /**
     * @param {?} current
     * @param {?} newContext
     * @return {?}
     */
    function (current, newContext) {
        ((/** @type {?} */ (current))).svg = __assign({}, this.of(current), newContext);
    };
    /**
     * @param {?} current
     * @return {?}
     */
    SvgContextService.prototype.clear = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        delete ((/** @type {?} */ (current))).svg;
    };
    SvgContextService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ SvgContextService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SvgContextService_Factory() { return new SvgContextService(); }, token: SvgContextService, providedIn: "root" });
    return SvgContextService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SvgAggregatorService = /** @class */ (function () {
    function SvgAggregatorService(formatService, svgContext) {
        this.formatService = formatService;
        this.svgContext = svgContext;
    }
    /**
     * @param {?} current
     * @param {?} options
     * @return {?}
     */
    SvgAggregatorService.prototype.aggregate = /**
     * @param {?} current
     * @param {?} options
     * @return {?}
     */
    function (current, options) {
        /** @type {?} */
        var context = this.svgContext.of(current);
        return [
            {
                kind: 'svg',
                language: 'svg',
                value: this.renderFile(current, context.paths, context.offset, options),
                uri: this.formatService.normalizeName(current.name) + ".svg"
            }
        ];
    };
    /**
     * @private
     * @param {?} current
     * @param {?} paths
     * @param {?} offset
     * @param {?} options
     * @return {?}
     */
    SvgAggregatorService.prototype.renderFile = /**
     * @private
     * @param {?} current
     * @param {?} paths
     * @param {?} offset
     * @param {?} options
     * @return {?}
     */
    function (current, paths, offset, options) {
        var _this = this;
        /** @type {?} */
        var attributes = this.generateXmlAttribute(current, offset, options);
        /** @type {?} */
        var openTag = __spread(['<svg'], attributes).join(' ');
        return openTag + ">\n" + paths
            .map((/**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            return _this.formatService.indent(1, "<" + path.type + " " + path.attributes.join(' ') + "/>");
        }))
            .join('\n') + "\n</svg>";
    };
    /**
     * @private
     * @param {?} current
     * @param {?} offset
     * @param {?} options
     * @return {?}
     */
    SvgAggregatorService.prototype.generateXmlAttribute = /**
     * @private
     * @param {?} current
     * @param {?} offset
     * @param {?} options
     * @return {?}
     */
    function (current, offset, options) {
        return __spread(this.generateXmlHeaderAttribute(options), [
            "width=\"" + (current.frame.width + offset * 2).toFixed(2) + "\"",
            "height=\"" + (current.frame.height + offset * 2).toFixed(2) + "\""
        ]);
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    SvgAggregatorService.prototype.generateXmlHeaderAttribute = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return options.xmlNamespace
            ? [
                'version="1.1"',
                "xmlns=\"http://www.w3.org/2000/svg\"",
                "xmlns:xlink=\"http://www.w3.org/1999/xlink\""
            ]
            : [];
    };
    SvgAggregatorService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SvgAggregatorService.ctorParameters = function () { return [
        { type: FormatService },
        { type: SvgContextService }
    ]; };
    /** @nocollapse */ SvgAggregatorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SvgAggregatorService_Factory() { return new SvgAggregatorService(ɵɵinject(FormatService), ɵɵinject(SvgContextService)); }, token: SvgAggregatorService, providedIn: "root" });
    return SvgAggregatorService;
}());
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
var SvgParserService = /** @class */ (function () {
    function SvgParserService(shape, style, layerService, symbolService, svgContext) {
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
    SvgParserService.prototype.compute = /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        this.visit(current, data, options);
    };
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    SvgParserService.prototype.walk = /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        var _this = this;
        if (this.layerService.identify(current)) {
            current.layers.forEach((/**
             * @param {?} layer
             * @return {?}
             */
            function (layer) {
                _this.visit(layer, data, options);
            }));
        }
        else if (this.symbolService.identify(current)) {
            this.visitSymbol(current, data, options);
        }
    };
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    SvgParserService.prototype.visit = /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        if (options.force) {
            this.svgContext.clear(current);
        }
        if (this.svgContext.identify(current)) {
            if (!this.svgContext.of(current)) {
                this.visitContent(current);
            }
        }
        this.walk(current, data, options);
    };
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    SvgParserService.prototype.visitSymbol = /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        /** @type {?} */
        var symbolMaster = this.symbolService.lookup(current, data);
        if (symbolMaster) {
            this.compute(symbolMaster, data, options);
        }
    };
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    SvgParserService.prototype.visitContent = /**
     * @private
     * @param {?} current
     * @return {?}
     */
    function (current) {
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
    };
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    SvgParserService.prototype.visitShapePath = /**
     * @private
     * @param {?} current
     * @return {?}
     */
    function (current) {
        var _this = this;
        /** @type {?} */
        var config = [];
        /** @type {?} */
        var offset = 0;
        // TODO: Support multiple border
        if (current.style.borders &&
            current.style.borders.length > 0 &&
            current.style.borders[0].thickness) {
            config.push("stroke-width=\"" + current.style.borders[0].thickness + "\"");
            /** @type {?} */
            var color = this.style.parseColorAsHex(current.style.borders[0].color);
            config.push("stroke=\"" + color + "\"");
            offset = current.style.borders[0].thickness;
        }
        // TODO: move to @types/sketchapp
        /** @type {?} */
        var origin = this.shape.parsePoint(((/** @type {?} */ (current))).points[0].point, offset, current);
        /** @type {?} */
        var segments = ((/** @type {?} */ (current))).points.slice(1).map((/**
         * @param {?} curvePoint
         * @return {?}
         */
        function (curvePoint) {
            /** @type {?} */
            var curveFrom = _this.shape.parsePoint(curvePoint.curveFrom, offset, current);
            /** @type {?} */
            var curveTo = _this.shape.parsePoint(curvePoint.curveTo, offset, current);
            /** @type {?} */
            var currPoint = _this.shape.parsePoint(curvePoint.point, offset, current);
            if (curveTo.x === curveFrom.x && curveTo.y === curveFrom.y) {
                return "L " + currPoint.x + " " + currPoint.y;
            }
            return "S " + curveTo.x + " " + curveTo.y + ", " + currPoint.x + " " + currPoint.y;
        }));
        segments.unshift("M" + origin.x + " " + origin.y);
        if (((/** @type {?} */ (current))).isClosed) {
            segments.push('z');
        }
        /** @type {?} */
        var fillStyle = this.extractFillStyle(current);
        this.svgContext.put(current, {
            offset: offset,
            paths: [
                { type: 'path', attributes: __spread(config, [fillStyle, "d=\"" + segments + "\""]) }
            ]
        });
    };
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    SvgParserService.prototype.visitTriangleShape = /**
     * @private
     * @param {?} current
     * @return {?}
     */
    function (current) {
        var _this = this;
        /** @type {?} */
        var config = [];
        /** @type {?} */
        var offset = 0;
        // TODO: Support multiple border
        if (current.style.borders &&
            current.style.borders.length > 0 &&
            current.style.borders[0].thickness) {
            config.push("stroke-width=\"" + current.style.borders[0].thickness / 2 + "\"");
            /** @type {?} */
            var color = this.style.parseColorAsHex(current.style.borders[0].color);
            config.push("stroke=\"" + color + "\"");
            offset = current.style.borders[0].thickness;
        }
        /** @type {?} */
        var segments = ((/** @type {?} */ (current))).points
            .map((/**
         * @param {?} curvePoint
         * @return {?}
         */
        function (curvePoint) {
            /** @type {?} */
            var currPoint = _this.shape.parsePoint(curvePoint.point, offset / 2, current);
            return currPoint.x + ", " + currPoint.y;
        }))
            .join(' ');
        /** @type {?} */
        var fillStyle = this.extractFillStyle(current);
        this.svgContext.put(current, {
            offset: offset,
            paths: [
                {
                    type: 'polygon',
                    attributes: __spread(config, [fillStyle, "points=\"" + segments + "\""])
                }
            ]
        });
    };
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    SvgParserService.prototype.visitShapeGroup = /**
     * @private
     * @param {?} current
     * @return {?}
     */
    function (current) {
        var _this = this;
        console.log(current);
        /** @type {?} */
        var offset = 0;
        /** @type {?} */
        var paths = current.layers.map((/**
         * @param {?} layer
         * @return {?}
         */
        function (layer) {
            // TODO: move to @types/sketchapp
            /** @type {?} */
            var origin = _this.shape.parsePoint(((/** @type {?} */ (layer))).points[0].point, offset, layer);
            /** @type {?} */
            var segments = ((/** @type {?} */ (layer))).points.slice(1).map((/**
             * @param {?} curvePoint
             * @return {?}
             */
            function (curvePoint) {
                /** @type {?} */
                var curveFrom = _this.shape.parsePoint(curvePoint.curveFrom, offset, layer);
                /** @type {?} */
                var curveTo = _this.shape.parsePoint(curvePoint.curveTo, offset, layer);
                /** @type {?} */
                var currPoint = _this.shape.parsePoint(curvePoint.point, offset, layer);
                if (curveTo.x === curveFrom.x && curveTo.y === curveFrom.y) {
                    return "L " + (layer.frame.x + currPoint.x) + " " + (layer.frame.y +
                        currPoint.y);
                }
                return "S " + (layer.frame.x + curveTo.x) + " " + (layer.frame.y +
                    curveTo.y) + ", " + (layer.frame.x + currPoint.x) + " " + (layer.frame.y +
                    currPoint.y);
            }));
            segments.unshift("M" + (layer.frame.x + origin.x) + " " + (layer.frame.y + origin.y));
            // TODO: isClosed to type
            if (((/** @type {?} */ (layer))).isClosed) {
                segments.push('z');
            }
            return segments.join(' ');
        }));
        /** @type {?} */
        var fillStyle = this.extractFillStyle(current);
        this.svgContext.put(current, {
            offset: offset,
            paths: [
                { type: 'path', attributes: [fillStyle, "d=\"" + paths.join(' ') + "\""] }
            ]
        });
    };
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    SvgParserService.prototype.extractFillStyle = /**
     * @private
     * @param {?} current
     * @return {?}
     */
    function (current) {
        /** @type {?} */
        var obj = ((/** @type {?} */ (current))).style.fills;
        if (obj && obj.length > 0) {
            // we only support one fill: take the first one!
            // ignore the other fills
            /** @type {?} */
            var firstFill = obj[0];
            if (firstFill.isEnabled) {
                /** @type {?} */
                var fillColor = this.style.parseColorAsRgba(firstFill.color);
                return "fill=\"" + fillColor + "\"";
            }
        }
        return 'fill="none"';
    };
    SvgParserService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SvgParserService.ctorParameters = function () { return [
        { type: ShapeService },
        { type: StyleService },
        { type: LayerService },
        { type: SymbolService },
        { type: SvgContextService }
    ]; };
    /** @nocollapse */ SvgParserService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SvgParserService_Factory() { return new SvgParserService(ɵɵinject(ShapeService), ɵɵinject(StyleService), ɵɵinject(LayerService), ɵɵinject(SymbolService), ɵɵinject(SvgContextService)); }, token: SvgParserService, providedIn: "root" });
    return SvgParserService;
}());
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
var SvgCodeGenService = /** @class */ (function () {
    function SvgCodeGenService(svgContext, svgParser, svgAggretatorService) {
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
    SvgCodeGenService.prototype.compute = /**
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    function (current, data, options) {
        this.svgParser.compute(current, data, this.compileOptions(options));
    };
    /**
     * @param {?} current
     * @param {?=} options
     * @return {?}
     */
    SvgCodeGenService.prototype.aggregate = /**
     * @param {?} current
     * @param {?=} options
     * @return {?}
     */
    function (current, options) {
        return this.svgAggretatorService.aggregate(current, this.compileOptions(options));
    };
    /**
     * @param {?} current
     * @return {?}
     */
    SvgCodeGenService.prototype.identify = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        return this.svgContext.identify(current);
    };
    /**
     * @param {?} current
     * @return {?}
     */
    SvgCodeGenService.prototype.context = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        return this.svgContext.of(current);
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    SvgCodeGenService.prototype.compileOptions = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return __assign({ xmlNamespace: true }, options);
    };
    SvgCodeGenService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SvgCodeGenService.ctorParameters = function () { return [
        { type: SvgContextService },
        { type: SvgParserService },
        { type: SvgAggregatorService }
    ]; };
    /** @nocollapse */ SvgCodeGenService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SvgCodeGenService_Factory() { return new SvgCodeGenService(ɵɵinject(SvgContextService), ɵɵinject(SvgParserService), ɵɵinject(SvgAggregatorService)); }, token: SvgCodeGenService, providedIn: "root" });
    return SvgCodeGenService;
}());
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
var SvgCodeGenModule = /** @class */ (function () {
    function SvgCodeGenModule() {
    }
    SvgCodeGenModule.decorators = [
        { type: NgModule, args: [{
                    imports: [SketchLibModule]
                },] }
    ];
    return SvgCodeGenModule;
}());

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
