/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { LayerService, ShapeService, SymbolService } from '@xlayers/sketch-lib';
import { StyleService } from '@xlayers/sketch-lib';
import { SvgContextService } from './svg-context.service';
import * as i0 from "@angular/core";
import * as i1 from "@xlayers/sketch-lib";
import * as i2 from "./svg-context.service";
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
                { type: 'path', attributes: tslib_1.__spread(config, [fillStyle, "d=\"" + segments + "\""]) }
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
                    attributes: tslib_1.__spread(config, [fillStyle, "points=\"" + segments + "\""])
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
    /** @nocollapse */ SvgParserService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SvgParserService_Factory() { return new SvgParserService(i0.ɵɵinject(i1.ShapeService), i0.ɵɵinject(i1.StyleService), i0.ɵɵinject(i1.LayerService), i0.ɵɵinject(i1.SymbolService), i0.ɵɵinject(i2.SvgContextService)); }, token: SvgParserService, providedIn: "root" });
    return SvgParserService;
}());
export { SvgParserService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLXBhcnNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhsYXllcnMvc3ZnLWNvZGVnZW4vIiwic291cmNlcyI6WyJsaWIvc3ZnLXBhcnNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFFMUQ7SUFJRSwwQkFDVSxLQUFtQixFQUNuQixLQUFtQixFQUNWLFlBQTBCLEVBQzFCLGFBQTRCLEVBQ3JDLFVBQTZCO1FBSjdCLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbkIsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUNWLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQ3JDLGVBQVUsR0FBVixVQUFVLENBQW1CO0lBQ3BDLENBQUM7Ozs7Ozs7SUFFSixrQ0FBTzs7Ozs7O0lBQVAsVUFDRSxPQUFzQixFQUN0QixJQUFrQixFQUNsQixPQUEwQjtRQUUxQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7Ozs7SUFFTywrQkFBSTs7Ozs7OztJQUFaLFVBQ0UsT0FBc0IsRUFDdEIsSUFBa0IsRUFDbEIsT0FBMEI7UUFINUIsaUJBWUM7UUFQQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3ZDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsS0FBSztnQkFDMUIsS0FBSSxDQUFDLEtBQUssQ0FB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M0Isd0NBQTJDOzs7OztJQUMzQyx5Q0FBNkM7Ozs7O0lBQzdDLHNDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTGF5ZXJTZXJ2aWNlLCBTaGFwZVNlcnZpY2UsIFN5bWJvbFNlcnZpY2UgfSBmcm9tICdAeGxheWVycy9za2V0Y2gtbGliJztcclxuaW1wb3J0IHsgU3R5bGVTZXJ2aWNlIH0gZnJvbSAnQHhsYXllcnMvc2tldGNoLWxpYic7XHJcblxyXG5pbXBvcnQgeyBTdmdDb2RlR2VuT3B0aW9ucyB9IGZyb20gJy4vc3ZnLWNvZGVnZW4nO1xyXG5pbXBvcnQgeyBTdmdDb250ZXh0U2VydmljZSB9IGZyb20gJy4vc3ZnLWNvbnRleHQuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdmdQYXJzZXJTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgc2hhcGU6IFNoYXBlU2VydmljZSxcclxuICAgIHByaXZhdGUgc3R5bGU6IFN0eWxlU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGF5ZXJTZXJ2aWNlOiBMYXllclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHN5bWJvbFNlcnZpY2U6IFN5bWJvbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN2Z0NvbnRleHQ6IFN2Z0NvbnRleHRTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBjb21wdXRlKFxyXG4gICAgY3VycmVudDogU2tldGNoTVNMYXllcixcclxuICAgIGRhdGE6IFNrZXRjaE1TRGF0YSxcclxuICAgIG9wdGlvbnM6IFN2Z0NvZGVHZW5PcHRpb25zXHJcbiAgKSB7XHJcbiAgICB0aGlzLnZpc2l0KGN1cnJlbnQsIGRhdGEsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB3YWxrKFxyXG4gICAgY3VycmVudDogU2tldGNoTVNMYXllcixcclxuICAgIGRhdGE6IFNrZXRjaE1TRGF0YSxcclxuICAgIG9wdGlvbnM6IFN2Z0NvZGVHZW5PcHRpb25zXHJcbiAgKSB7XHJcbiAgICBpZiAodGhpcy5sYXllclNlcnZpY2UuaWRlbnRpZnkoY3VycmVudCkpIHtcclxuICAgICAgY3VycmVudC5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgdGhpcy52aXNpdChsYXllciwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnN5bWJvbFNlcnZpY2UuaWRlbnRpZnkoY3VycmVudCkpIHtcclxuICAgICAgdGhpcy52aXNpdFN5bWJvbChjdXJyZW50LCBkYXRhLCBvcHRpb25zKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmlzaXQoXHJcbiAgICBjdXJyZW50OiBTa2V0Y2hNU0xheWVyLFxyXG4gICAgZGF0YTogU2tldGNoTVNEYXRhLFxyXG4gICAgb3B0aW9uczogU3ZnQ29kZUdlbk9wdGlvbnNcclxuICApIHtcclxuICAgIGlmIChvcHRpb25zLmZvcmNlKSB7XHJcbiAgICAgIHRoaXMuc3ZnQ29udGV4dC5jbGVhcihjdXJyZW50KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN2Z0NvbnRleHQuaWRlbnRpZnkoY3VycmVudCkpIHtcclxuICAgICAgaWYgKCF0aGlzLnN2Z0NvbnRleHQub2YoY3VycmVudCkpIHtcclxuICAgICAgICB0aGlzLnZpc2l0Q29udGVudChjdXJyZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy53YWxrKGN1cnJlbnQsIGRhdGEsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2aXNpdFN5bWJvbChcclxuICAgIGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIsXHJcbiAgICBkYXRhOiBTa2V0Y2hNU0RhdGEsXHJcbiAgICBvcHRpb25zOiBTdmdDb2RlR2VuT3B0aW9uc1xyXG4gICkge1xyXG4gICAgY29uc3Qgc3ltYm9sTWFzdGVyID0gdGhpcy5zeW1ib2xTZXJ2aWNlLmxvb2t1cChjdXJyZW50LCBkYXRhKTtcclxuICAgIGlmIChzeW1ib2xNYXN0ZXIpIHtcclxuICAgICAgdGhpcy5jb21wdXRlKHN5bWJvbE1hc3RlciwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZpc2l0Q29udGVudChjdXJyZW50OiBTa2V0Y2hNU0xheWVyKSB7XHJcbiAgICBzd2l0Y2ggKGN1cnJlbnQuX2NsYXNzIGFzIHN0cmluZykge1xyXG4gICAgICBjYXNlICdzaGFwZVBhdGgnOlxyXG4gICAgICAgIHRoaXMudmlzaXRTaGFwZVBhdGgoY3VycmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdzaGFwZUdyb3VwJzpcclxuICAgICAgICB0aGlzLnZpc2l0U2hhcGVHcm91cChjdXJyZW50KTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ3RyaWFuZ2xlJzpcclxuICAgICAgICB0aGlzLnZpc2l0VHJpYW5nbGVTaGFwZShjdXJyZW50KTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZpc2l0U2hhcGVQYXRoKGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIpIHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IFtdO1xyXG4gICAgbGV0IG9mZnNldCA9IDA7XHJcblxyXG4gICAgLy8gVE9ETzogU3VwcG9ydCBtdWx0aXBsZSBib3JkZXJcclxuICAgIGlmIChcclxuICAgICAgY3VycmVudC5zdHlsZS5ib3JkZXJzICYmXHJcbiAgICAgIGN1cnJlbnQuc3R5bGUuYm9yZGVycy5sZW5ndGggPiAwICYmXHJcbiAgICAgIGN1cnJlbnQuc3R5bGUuYm9yZGVyc1swXS50aGlja25lc3NcclxuICAgICkge1xyXG4gICAgICBjb25maWcucHVzaChgc3Ryb2tlLXdpZHRoPVwiJHtjdXJyZW50LnN0eWxlLmJvcmRlcnNbMF0udGhpY2tuZXNzfVwiYCk7XHJcbiAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5zdHlsZS5wYXJzZUNvbG9yQXNIZXgoY3VycmVudC5zdHlsZS5ib3JkZXJzWzBdLmNvbG9yKTtcclxuXHJcbiAgICAgIGNvbmZpZy5wdXNoKGBzdHJva2U9XCIke2NvbG9yfVwiYCk7XHJcbiAgICAgIG9mZnNldCA9IGN1cnJlbnQuc3R5bGUuYm9yZGVyc1swXS50aGlja25lc3M7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzogbW92ZSB0byBAdHlwZXMvc2tldGNoYXBwXHJcbiAgICBjb25zdCBvcmlnaW4gPSB0aGlzLnNoYXBlLnBhcnNlUG9pbnQoXHJcbiAgICAgIChjdXJyZW50IGFzIGFueSkucG9pbnRzWzBdLnBvaW50LFxyXG4gICAgICBvZmZzZXQsXHJcbiAgICAgIGN1cnJlbnRcclxuICAgICk7XHJcbiAgICBjb25zdCBzZWdtZW50cyA9IChjdXJyZW50IGFzIGFueSkucG9pbnRzLnNsaWNlKDEpLm1hcChjdXJ2ZVBvaW50ID0+IHtcclxuICAgICAgY29uc3QgY3VydmVGcm9tID0gdGhpcy5zaGFwZS5wYXJzZVBvaW50KFxyXG4gICAgICAgIGN1cnZlUG9pbnQuY3VydmVGcm9tLFxyXG4gICAgICAgIG9mZnNldCxcclxuICAgICAgICBjdXJyZW50XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGN1cnZlVG8gPSB0aGlzLnNoYXBlLnBhcnNlUG9pbnQoXHJcbiAgICAgICAgY3VydmVQb2ludC5jdXJ2ZVRvLFxyXG4gICAgICAgIG9mZnNldCxcclxuICAgICAgICBjdXJyZW50XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGN1cnJQb2ludCA9IHRoaXMuc2hhcGUucGFyc2VQb2ludChcclxuICAgICAgICBjdXJ2ZVBvaW50LnBvaW50LFxyXG4gICAgICAgIG9mZnNldCxcclxuICAgICAgICBjdXJyZW50XHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChjdXJ2ZVRvLnggPT09IGN1cnZlRnJvbS54ICYmIGN1cnZlVG8ueSA9PT0gY3VydmVGcm9tLnkpIHtcclxuICAgICAgICByZXR1cm4gYEwgJHtjdXJyUG9pbnQueH0gJHtjdXJyUG9pbnQueX1gO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBgUyAke2N1cnZlVG8ueH0gJHtjdXJ2ZVRvLnl9LCAke2N1cnJQb2ludC54fSAke2N1cnJQb2ludC55fWA7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZWdtZW50cy51bnNoaWZ0KGBNJHtvcmlnaW4ueH0gJHtvcmlnaW4ueX1gKTtcclxuXHJcbiAgICBpZiAoKGN1cnJlbnQgYXMgYW55KS5pc0Nsb3NlZCkge1xyXG4gICAgICBzZWdtZW50cy5wdXNoKCd6Jyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBmaWxsU3R5bGUgPSB0aGlzLmV4dHJhY3RGaWxsU3R5bGUoY3VycmVudCk7XHJcblxyXG4gICAgdGhpcy5zdmdDb250ZXh0LnB1dChjdXJyZW50LCB7XHJcbiAgICAgIG9mZnNldCxcclxuICAgICAgcGF0aHM6IFtcclxuICAgICAgICB7IHR5cGU6ICdwYXRoJywgYXR0cmlidXRlczogWy4uLmNvbmZpZywgZmlsbFN0eWxlLCBgZD1cIiR7c2VnbWVudHN9XCJgXSB9XHJcbiAgICAgIF1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2aXNpdFRyaWFuZ2xlU2hhcGUoY3VycmVudDogU2tldGNoTVNMYXllcikge1xyXG4gICAgY29uc3QgY29uZmlnID0gW107XHJcbiAgICBsZXQgb2Zmc2V0ID0gMDtcclxuXHJcbiAgICAvLyBUT0RPOiBTdXBwb3J0IG11bHRpcGxlIGJvcmRlclxyXG4gICAgaWYgKFxyXG4gICAgICBjdXJyZW50LnN0eWxlLmJvcmRlcnMgJiZcclxuICAgICAgY3VycmVudC5zdHlsZS5ib3JkZXJzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgY3VycmVudC5zdHlsZS5ib3JkZXJzWzBdLnRoaWNrbmVzc1xyXG4gICAgKSB7XHJcbiAgICAgIGNvbmZpZy5wdXNoKGBzdHJva2Utd2lkdGg9XCIke2N1cnJlbnQuc3R5bGUuYm9yZGVyc1swXS50aGlja25lc3MgLyAyfVwiYCk7XHJcbiAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5zdHlsZS5wYXJzZUNvbG9yQXNIZXgoY3VycmVudC5zdHlsZS5ib3JkZXJzWzBdLmNvbG9yKTtcclxuICAgICAgY29uZmlnLnB1c2goYHN0cm9rZT1cIiR7Y29sb3J9XCJgKTtcclxuICAgICAgb2Zmc2V0ID0gY3VycmVudC5zdHlsZS5ib3JkZXJzWzBdLnRoaWNrbmVzcztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWdtZW50cyA9IChjdXJyZW50IGFzIGFueSkucG9pbnRzXHJcbiAgICAgIC5tYXAoY3VydmVQb2ludCA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VyclBvaW50ID0gdGhpcy5zaGFwZS5wYXJzZVBvaW50KFxyXG4gICAgICAgICAgY3VydmVQb2ludC5wb2ludCxcclxuICAgICAgICAgIG9mZnNldCAvIDIsXHJcbiAgICAgICAgICBjdXJyZW50XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gYCR7Y3VyclBvaW50Lnh9LCAke2N1cnJQb2ludC55fWA7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5qb2luKCcgJyk7XHJcblxyXG4gICAgY29uc3QgZmlsbFN0eWxlID0gdGhpcy5leHRyYWN0RmlsbFN0eWxlKGN1cnJlbnQpO1xyXG5cclxuICAgIHRoaXMuc3ZnQ29udGV4dC5wdXQoY3VycmVudCwge1xyXG4gICAgICBvZmZzZXQsXHJcbiAgICAgIHBhdGhzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTogJ3BvbHlnb24nLFxyXG4gICAgICAgICAgYXR0cmlidXRlczogWy4uLmNvbmZpZywgZmlsbFN0eWxlLCBgcG9pbnRzPVwiJHtzZWdtZW50c31cImBdXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmlzaXRTaGFwZUdyb3VwKGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnQpO1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gMDtcclxuICAgIGNvbnN0IHBhdGhzID0gY3VycmVudC5sYXllcnMubWFwKGxheWVyID0+IHtcclxuICAgICAgLy8gVE9ETzogbW92ZSB0byBAdHlwZXMvc2tldGNoYXBwXHJcbiAgICAgIGNvbnN0IG9yaWdpbiA9IHRoaXMuc2hhcGUucGFyc2VQb2ludChcclxuICAgICAgICAobGF5ZXIgYXMgYW55KS5wb2ludHNbMF0ucG9pbnQsXHJcbiAgICAgICAgb2Zmc2V0LFxyXG4gICAgICAgIGxheWVyXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHNlZ21lbnRzID0gKGxheWVyIGFzIGFueSkucG9pbnRzLnNsaWNlKDEpLm1hcChjdXJ2ZVBvaW50ID0+IHtcclxuICAgICAgICBjb25zdCBjdXJ2ZUZyb20gPSB0aGlzLnNoYXBlLnBhcnNlUG9pbnQoXHJcbiAgICAgICAgICBjdXJ2ZVBvaW50LmN1cnZlRnJvbSxcclxuICAgICAgICAgIG9mZnNldCxcclxuICAgICAgICAgIGxheWVyXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5zaGFwZS5wYXJzZVBvaW50KFxyXG4gICAgICAgICAgY3VydmVQb2ludC5jdXJ2ZVRvLFxyXG4gICAgICAgICAgb2Zmc2V0LFxyXG4gICAgICAgICAgbGF5ZXJcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGN1cnJQb2ludCA9IHRoaXMuc2hhcGUucGFyc2VQb2ludChcclxuICAgICAgICAgIGN1cnZlUG9pbnQucG9pbnQsXHJcbiAgICAgICAgICBvZmZzZXQsXHJcbiAgICAgICAgICBsYXllclxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKGN1cnZlVG8ueCA9PT0gY3VydmVGcm9tLnggJiYgY3VydmVUby55ID09PSBjdXJ2ZUZyb20ueSkge1xyXG4gICAgICAgICAgcmV0dXJuIGBMICR7bGF5ZXIuZnJhbWUueCArIGN1cnJQb2ludC54fSAke2xheWVyLmZyYW1lLnkgK1xyXG4gICAgICAgICAgICBjdXJyUG9pbnQueX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYFMgJHtsYXllci5mcmFtZS54ICsgY3VydmVUby54fSAke2xheWVyLmZyYW1lLnkgK1xyXG4gICAgICAgICAgY3VydmVUby55fSwgJHtsYXllci5mcmFtZS54ICsgY3VyclBvaW50Lnh9ICR7bGF5ZXIuZnJhbWUueSArXHJcbiAgICAgICAgICBjdXJyUG9pbnQueX1gO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNlZ21lbnRzLnVuc2hpZnQoXHJcbiAgICAgICAgYE0ke2xheWVyLmZyYW1lLnggKyBvcmlnaW4ueH0gJHtsYXllci5mcmFtZS55ICsgb3JpZ2luLnl9YFxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gVE9ETzogaXNDbG9zZWQgdG8gdHlwZVxyXG4gICAgICBpZiAoKGxheWVyIGFzIGFueSkuaXNDbG9zZWQpIHtcclxuICAgICAgICBzZWdtZW50cy5wdXNoKCd6Jyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBzZWdtZW50cy5qb2luKCcgJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBmaWxsU3R5bGUgPSB0aGlzLmV4dHJhY3RGaWxsU3R5bGUoY3VycmVudCk7XHJcblxyXG4gICAgdGhpcy5zdmdDb250ZXh0LnB1dChjdXJyZW50LCB7XHJcbiAgICAgIG9mZnNldCxcclxuICAgICAgcGF0aHM6IFtcclxuICAgICAgICB7IHR5cGU6ICdwYXRoJywgYXR0cmlidXRlczogW2ZpbGxTdHlsZSwgYGQ9XCIke3BhdGhzLmpvaW4oJyAnKX1cImBdIH1cclxuICAgICAgXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4dHJhY3RGaWxsU3R5bGUoY3VycmVudDogU2tldGNoTVNMYXllcikge1xyXG4gICAgY29uc3Qgb2JqID0gKGN1cnJlbnQgYXMgYW55KS5zdHlsZS5maWxscztcclxuXHJcbiAgICBpZiAob2JqICYmIG9iai5sZW5ndGggPiAwKSB7XHJcbiAgICAgIC8vIHdlIG9ubHkgc3VwcG9ydCBvbmUgZmlsbDogdGFrZSB0aGUgZmlyc3Qgb25lIVxyXG4gICAgICAvLyBpZ25vcmUgdGhlIG90aGVyIGZpbGxzXHJcbiAgICAgIGNvbnN0IGZpcnN0RmlsbCA9IG9ialswXTtcclxuXHJcbiAgICAgIGlmIChmaXJzdEZpbGwuaXNFbmFibGVkKSB7XHJcbiAgICAgICAgY29uc3QgZmlsbENvbG9yID0gdGhpcy5zdHlsZS5wYXJzZUNvbG9yQXNSZ2JhKGZpcnN0RmlsbC5jb2xvcik7XHJcblxyXG4gICAgICAgIHJldHVybiBgZmlsbD1cIiR7ZmlsbENvbG9yfVwiYDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAnZmlsbD1cIm5vbmVcIic7XHJcbiAgfVxyXG59XHJcbiJdfQ==