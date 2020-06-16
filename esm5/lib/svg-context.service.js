/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
        ((/** @type {?} */ (current))).svg = tslib_1.__assign({}, this.of(current), newContext);
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
    /** @nocollapse */ SvgContextService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SvgContextService_Factory() { return new SvgContextService(); }, token: SvgContextService, providedIn: "root" });
    return SvgContextService;
}());
export { SvgContextService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWNvbnRleHQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4bGF5ZXJzL3N2Zy1jb2RlZ2VuLyIsInNvdXJjZXMiOlsibGliL3N2Zy1jb250ZXh0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUczQztJQUFBO0tBbUJDOzs7OztJQWZDLG9DQUFROzs7O0lBQVIsVUFBUyxPQUFzQjtRQUM3QixPQUFPLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxtQkFBQSxPQUFPLENBQUMsTUFBTSxFQUFVLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7OztJQUVELDhCQUFFOzs7O0lBQUYsVUFBRyxPQUFzQjtRQUN2QixPQUFPLENBQUMsbUJBQUEsT0FBTyxFQUFPLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRUQsK0JBQUc7Ozs7O0lBQUgsVUFBSSxPQUFzQixFQUFFLFVBQTZCO1FBQ3ZELENBQUMsbUJBQUEsT0FBTyxFQUFPLENBQUMsQ0FBQyxHQUFHLHdCQUFRLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUssVUFBVSxDQUFFLENBQUM7SUFDaEUsQ0FBQzs7Ozs7SUFFRCxpQ0FBSzs7OztJQUFMLFVBQU0sT0FBc0I7UUFDMUIsT0FBTyxDQUFDLG1CQUFBLE9BQU8sRUFBTyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQzlCLENBQUM7O2dCQWxCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7NEJBTEQ7Q0FzQkMsQUFuQkQsSUFtQkM7U0FoQlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdmdDb2RlR2VuQ29udGV4dCB9IGZyb20gJy4vc3ZnLWNvZGVnZW4nO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU3ZnQ29udGV4dFNlcnZpY2Uge1xyXG4gIGlkZW50aWZ5KGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIpIHtcclxuICAgIHJldHVybiBbJ3RyaWFuZ2xlJywgJ3NoYXBlUGF0aCddLmluY2x1ZGVzKGN1cnJlbnQuX2NsYXNzIGFzIHN0cmluZyk7XHJcbiAgfVxyXG5cclxuICBvZihjdXJyZW50OiBTa2V0Y2hNU0xheWVyKSB7XHJcbiAgICByZXR1cm4gKGN1cnJlbnQgYXMgYW55KS5zdmc7XHJcbiAgfVxyXG5cclxuICBwdXQoY3VycmVudDogU2tldGNoTVNMYXllciwgbmV3Q29udGV4dDogU3ZnQ29kZUdlbkNvbnRleHQpIHtcclxuICAgIChjdXJyZW50IGFzIGFueSkuc3ZnID0geyAuLi50aGlzLm9mKGN1cnJlbnQpLCAuLi5uZXdDb250ZXh0IH07XHJcbiAgfVxyXG5cclxuICBjbGVhcihjdXJyZW50OiBTa2V0Y2hNU0xheWVyKSB7XHJcbiAgICBkZWxldGUgKGN1cnJlbnQgYXMgYW55KS5zdmc7XHJcbiAgfVxyXG59XHJcbiJdfQ==