/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class SvgContextService {
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
/** @nocollapse */ SvgContextService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SvgContextService_Factory() { return new SvgContextService(); }, token: SvgContextService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWNvbnRleHQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4bGF5ZXJzL3N2Zy1jb2RlZ2VuLyIsInNvdXJjZXMiOlsibGliL3N2Zy1jb250ZXh0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBQzVCLFFBQVEsQ0FBQyxPQUFzQjtRQUM3QixPQUFPLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxtQkFBQSxPQUFPLENBQUMsTUFBTSxFQUFVLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7OztJQUVELEVBQUUsQ0FBQyxPQUFzQjtRQUN2QixPQUFPLENBQUMsbUJBQUEsT0FBTyxFQUFPLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRUQsR0FBRyxDQUFDLE9BQXNCLEVBQUUsVUFBNkI7UUFDdkQsQ0FBQyxtQkFBQSxPQUFPLEVBQU8sQ0FBQyxDQUFDLEdBQUcscUJBQVEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBSyxVQUFVLENBQUUsQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVELEtBQUssQ0FBQyxPQUFzQjtRQUMxQixPQUFPLENBQUMsbUJBQUEsT0FBTyxFQUFPLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDOUIsQ0FBQzs7O1lBbEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ZnQ29kZUdlbkNvbnRleHQgfSBmcm9tICcuL3N2Zy1jb2RlZ2VuJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFN2Z0NvbnRleHRTZXJ2aWNlIHtcclxuICBpZGVudGlmeShjdXJyZW50OiBTa2V0Y2hNU0xheWVyKSB7XHJcbiAgICByZXR1cm4gWyd0cmlhbmdsZScsICdzaGFwZVBhdGgnXS5pbmNsdWRlcyhjdXJyZW50Ll9jbGFzcyBhcyBzdHJpbmcpO1xyXG4gIH1cclxuXHJcbiAgb2YoY3VycmVudDogU2tldGNoTVNMYXllcikge1xyXG4gICAgcmV0dXJuIChjdXJyZW50IGFzIGFueSkuc3ZnO1xyXG4gIH1cclxuXHJcbiAgcHV0KGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIsIG5ld0NvbnRleHQ6IFN2Z0NvZGVHZW5Db250ZXh0KSB7XHJcbiAgICAoY3VycmVudCBhcyBhbnkpLnN2ZyA9IHsgLi4udGhpcy5vZihjdXJyZW50KSwgLi4ubmV3Q29udGV4dCB9O1xyXG4gIH1cclxuXHJcbiAgY2xlYXIoY3VycmVudDogU2tldGNoTVNMYXllcikge1xyXG4gICAgZGVsZXRlIChjdXJyZW50IGFzIGFueSkuc3ZnO1xyXG4gIH1cclxufVxyXG4iXX0=