(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@xlayers/sketch-lib')) :
    typeof define === 'function' && define.amd ? define('@xlayers/svg-codegen', ['exports', '@angular/core', '@xlayers/sketch-lib'], factory) :
    (global = global || self, factory((global.xlayers = global.xlayers || {}, global.xlayers['svg-codegen'] = {}), global.ng.core, global.sketchLib));
}(this, (function (exports, core, sketchLib) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ SvgContextService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SvgContextService_Factory() { return new SvgContextService(); }, token: SvgContextService, providedIn: "root" });
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SvgAggregatorService.ctorParameters = function () { return [
            { type: sketchLib.FormatService },
            { type: SvgContextService }
        ]; };
        /** @nocollapse */ SvgAggregatorService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SvgAggregatorService_Factory() { return new SvgAggregatorService(core.ɵɵinject(sketchLib.FormatService), core.ɵɵinject(SvgContextService)); }, token: SvgAggregatorService, providedIn: "root" });
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SvgParserService.ctorParameters = function () { return [
            { type: sketchLib.ShapeService },
            { type: sketchLib.StyleService },
            { type: sketchLib.LayerService },
            { type: sketchLib.SymbolService },
            { type: SvgContextService }
        ]; };
        /** @nocollapse */ SvgParserService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SvgParserService_Factory() { return new SvgParserService(core.ɵɵinject(sketchLib.ShapeService), core.ɵɵinject(sketchLib.StyleService), core.ɵɵinject(sketchLib.LayerService), core.ɵɵinject(sketchLib.SymbolService), core.ɵɵinject(SvgContextService)); }, token: SvgParserService, providedIn: "root" });
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SvgCodeGenService.ctorParameters = function () { return [
            { type: SvgContextService },
            { type: SvgParserService },
            { type: SvgAggregatorService }
        ]; };
        /** @nocollapse */ SvgCodeGenService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SvgCodeGenService_Factory() { return new SvgCodeGenService(core.ɵɵinject(SvgContextService), core.ɵɵinject(SvgParserService), core.ɵɵinject(SvgAggregatorService)); }, token: SvgCodeGenService, providedIn: "root" });
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
            { type: core.NgModule, args: [{
                        imports: [sketchLib.SketchLibModule]
                    },] }
        ];
        return SvgCodeGenModule;
    }());

    exports.SvgAggregatorService = SvgAggregatorService;
    exports.SvgCodeGenModule = SvgCodeGenModule;
    exports.SvgCodeGenService = SvgCodeGenService;
    exports.SvgContextService = SvgContextService;
    exports.SvgParserService = SvgParserService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=xlayers-svg-codegen.umd.js.map
