/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { SvgContextService } from './svg-context.service';
import { SvgAggregatorService } from './svg-aggregator.service';
import { SvgParserService } from './svg-parser.service';
import * as i0 from "@angular/core";
import * as i1 from "./svg-context.service";
import * as i2 from "./svg-parser.service";
import * as i3 from "./svg-aggregator.service";
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
        return tslib_1.__assign({ xmlNamespace: true }, options);
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
    /** @nocollapse */ SvgCodeGenService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SvgCodeGenService_Factory() { return new SvgCodeGenService(i0.ɵɵinject(i1.SvgContextService), i0.ɵɵinject(i2.SvgParserService), i0.ɵɵinject(i3.SvgAggregatorService)); }, token: SvgCodeGenService, providedIn: "root" });
    return SvgCodeGenService;
}());
export { SvgCodeGenService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWNvZGVnZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4bGF5ZXJzL3N2Zy1jb2RlZ2VuLyIsInNvdXJjZXMiOlsibGliL3N2Zy1jb2RlZ2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztBQUd4RDtJQUlFLDJCQUNVLFVBQTZCLEVBQzdCLFNBQTJCLEVBQzNCLG9CQUEwQztRQUYxQyxlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUM3QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ2pELENBQUM7Ozs7Ozs7SUFFSixtQ0FBTzs7Ozs7O0lBQVAsVUFDRSxPQUFzQixFQUN0QixJQUFrQixFQUNsQixPQUEyQjtRQUUzQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7Ozs7SUFFRCxxQ0FBUzs7Ozs7SUFBVCxVQUFVLE9BQXNCLEVBQUUsT0FBMkI7UUFDM0QsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUN4QyxPQUFPLEVBQ1AsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FDN0IsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsb0NBQVE7Ozs7SUFBUixVQUFTLE9BQXNCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxtQ0FBTzs7OztJQUFQLFVBQVEsT0FBc0I7UUFDNUIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFTywwQ0FBYzs7Ozs7SUFBdEIsVUFBdUIsT0FBMEI7UUFDL0MsMEJBQ0UsWUFBWSxFQUFFLElBQUksSUFDZixPQUFPLEVBQ1Y7SUFDSixDQUFDOztnQkF0Q0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFQUSxpQkFBaUI7Z0JBRWpCLGdCQUFnQjtnQkFEaEIsb0JBQW9COzs7NEJBRjdCO0NBNkNDLEFBdkNELElBdUNDO1NBcENZLGlCQUFpQjs7Ozs7O0lBRTFCLHVDQUFxQzs7Ozs7SUFDckMsc0NBQW1DOzs7OztJQUNuQyxpREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN2Z0NvbnRleHRTZXJ2aWNlIH0gZnJvbSAnLi9zdmctY29udGV4dC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3ZnQWdncmVnYXRvclNlcnZpY2UgfSBmcm9tICcuL3N2Zy1hZ2dyZWdhdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdmdQYXJzZXJTZXJ2aWNlIH0gZnJvbSAnLi9zdmctcGFyc2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdmdDb2RlR2VuT3B0aW9ucyB9IGZyb20gJy4vc3ZnLWNvZGVnZW4nO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU3ZnQ29kZUdlblNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzdmdDb250ZXh0OiBTdmdDb250ZXh0U2VydmljZSxcclxuICAgIHByaXZhdGUgc3ZnUGFyc2VyOiBTdmdQYXJzZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzdmdBZ2dyZXRhdG9yU2VydmljZTogU3ZnQWdncmVnYXRvclNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIGNvbXB1dGUoXHJcbiAgICBjdXJyZW50OiBTa2V0Y2hNU0xheWVyLFxyXG4gICAgZGF0YTogU2tldGNoTVNEYXRhLFxyXG4gICAgb3B0aW9ucz86IFN2Z0NvZGVHZW5PcHRpb25zXHJcbiAgKSB7XHJcbiAgICB0aGlzLnN2Z1BhcnNlci5jb21wdXRlKGN1cnJlbnQsIGRhdGEsIHRoaXMuY29tcGlsZU9wdGlvbnMob3B0aW9ucykpO1xyXG4gIH1cclxuXHJcbiAgYWdncmVnYXRlKGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIsIG9wdGlvbnM/OiBTdmdDb2RlR2VuT3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHRoaXMuc3ZnQWdncmV0YXRvclNlcnZpY2UuYWdncmVnYXRlKFxyXG4gICAgICBjdXJyZW50LFxyXG4gICAgICB0aGlzLmNvbXBpbGVPcHRpb25zKG9wdGlvbnMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaWRlbnRpZnkoY3VycmVudDogU2tldGNoTVNMYXllcikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3ZnQ29udGV4dC5pZGVudGlmeShjdXJyZW50KTtcclxuICB9XHJcblxyXG4gIGNvbnRleHQoY3VycmVudDogU2tldGNoTVNMYXllcikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3ZnQ29udGV4dC5vZihjdXJyZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29tcGlsZU9wdGlvbnMob3B0aW9uczogU3ZnQ29kZUdlbk9wdGlvbnMpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHhtbE5hbWVzcGFjZTogdHJ1ZSxcclxuICAgICAgLi4ub3B0aW9uc1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19