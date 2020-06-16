/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SvgContextService } from './svg-context.service';
import { SvgAggregatorService } from './svg-aggregator.service';
import { SvgParserService } from './svg-parser.service';
import * as i0 from "@angular/core";
import * as i1 from "./svg-context.service";
import * as i2 from "./svg-parser.service";
import * as i3 from "./svg-aggregator.service";
export class SvgCodeGenService {
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
/** @nocollapse */ SvgCodeGenService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SvgCodeGenService_Factory() { return new SvgCodeGenService(i0.ɵɵinject(i1.SvgContextService), i0.ɵɵinject(i2.SvgParserService), i0.ɵɵinject(i3.SvgAggregatorService)); }, token: SvgCodeGenService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWNvZGVnZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4bGF5ZXJzL3N2Zy1jb2RlZ2VuLyIsInNvdXJjZXMiOlsibGliL3N2Zy1jb2RlZ2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7O0FBTXhELE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQUM1QixZQUNVLFVBQTZCLEVBQzdCLFNBQTJCLEVBQzNCLG9CQUEwQztRQUYxQyxlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUM3QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ2pELENBQUM7Ozs7Ozs7SUFFSixPQUFPLENBQ0wsT0FBc0IsRUFDdEIsSUFBa0IsRUFDbEIsT0FBMkI7UUFFM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLE9BQXNCLEVBQUUsT0FBMkI7UUFDM0QsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUN4QyxPQUFPLEVBQ1AsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FDN0IsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLE9BQXNCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsT0FBc0I7UUFDNUIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFTyxjQUFjLENBQUMsT0FBMEI7UUFDL0MsdUJBQ0UsWUFBWSxFQUFFLElBQUksSUFDZixPQUFPLEVBQ1Y7SUFDSixDQUFDOzs7WUF0Q0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUFEsaUJBQWlCO1lBRWpCLGdCQUFnQjtZQURoQixvQkFBb0I7Ozs7Ozs7O0lBU3pCLHVDQUFxQzs7Ozs7SUFDckMsc0NBQW1DOzs7OztJQUNuQyxpREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN2Z0NvbnRleHRTZXJ2aWNlIH0gZnJvbSAnLi9zdmctY29udGV4dC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3ZnQWdncmVnYXRvclNlcnZpY2UgfSBmcm9tICcuL3N2Zy1hZ2dyZWdhdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdmdQYXJzZXJTZXJ2aWNlIH0gZnJvbSAnLi9zdmctcGFyc2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdmdDb2RlR2VuT3B0aW9ucyB9IGZyb20gJy4vc3ZnLWNvZGVnZW4nO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU3ZnQ29kZUdlblNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzdmdDb250ZXh0OiBTdmdDb250ZXh0U2VydmljZSxcclxuICAgIHByaXZhdGUgc3ZnUGFyc2VyOiBTdmdQYXJzZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzdmdBZ2dyZXRhdG9yU2VydmljZTogU3ZnQWdncmVnYXRvclNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIGNvbXB1dGUoXHJcbiAgICBjdXJyZW50OiBTa2V0Y2hNU0xheWVyLFxyXG4gICAgZGF0YTogU2tldGNoTVNEYXRhLFxyXG4gICAgb3B0aW9ucz86IFN2Z0NvZGVHZW5PcHRpb25zXHJcbiAgKSB7XHJcbiAgICB0aGlzLnN2Z1BhcnNlci5jb21wdXRlKGN1cnJlbnQsIGRhdGEsIHRoaXMuY29tcGlsZU9wdGlvbnMob3B0aW9ucykpO1xyXG4gIH1cclxuXHJcbiAgYWdncmVnYXRlKGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIsIG9wdGlvbnM/OiBTdmdDb2RlR2VuT3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHRoaXMuc3ZnQWdncmV0YXRvclNlcnZpY2UuYWdncmVnYXRlKFxyXG4gICAgICBjdXJyZW50LFxyXG4gICAgICB0aGlzLmNvbXBpbGVPcHRpb25zKG9wdGlvbnMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaWRlbnRpZnkoY3VycmVudDogU2tldGNoTVNMYXllcikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3ZnQ29udGV4dC5pZGVudGlmeShjdXJyZW50KTtcclxuICB9XHJcblxyXG4gIGNvbnRleHQoY3VycmVudDogU2tldGNoTVNMYXllcikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3ZnQ29udGV4dC5vZihjdXJyZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29tcGlsZU9wdGlvbnMob3B0aW9uczogU3ZnQ29kZUdlbk9wdGlvbnMpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHhtbE5hbWVzcGFjZTogdHJ1ZSxcclxuICAgICAgLi4ub3B0aW9uc1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19