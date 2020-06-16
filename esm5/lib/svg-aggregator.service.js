/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormatService } from '@xlayers/sketch-lib';
import { SvgContextService } from './svg-context.service';
import * as i0 from "@angular/core";
import * as i1 from "@xlayers/sketch-lib";
import * as i2 from "./svg-context.service";
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
        var openTag = tslib_1.__spread(['<svg'], attributes).join(' ');
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
        return tslib_1.__spread(this.generateXmlHeaderAttribute(options), [
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
    /** @nocollapse */ SvgAggregatorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SvgAggregatorService_Factory() { return new SvgAggregatorService(i0.ɵɵinject(i1.FormatService), i0.ɵɵinject(i2.SvgContextService)); }, token: SvgAggregatorService, providedIn: "root" });
    return SvgAggregatorService;
}());
export { SvgAggregatorService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWFnZ3JlZ2F0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4bGF5ZXJzL3N2Zy1jb2RlZ2VuLyIsInNvdXJjZXMiOlsibGliL3N2Zy1hZ2dyZWdhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUcxRDtJQUlFLDhCQUNtQixhQUE0QixFQUNyQyxVQUE2QjtRQURwQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUNyQyxlQUFVLEdBQVYsVUFBVSxDQUFtQjtJQUNwQyxDQUFDOzs7Ozs7SUFFSix3Q0FBUzs7Ozs7SUFBVCxVQUFVLE9BQXNCLEVBQUUsT0FBMEI7O1lBQ3BELE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDM0MsT0FBTztZQUNMO2dCQUNFLElBQUksRUFBRSxLQUFLO2dCQUNYLFFBQVEsRUFBRSxLQUFLO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO2dCQUN2RSxHQUFHLEVBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFNO2FBQzdEO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7OztJQUVPLHlDQUFVOzs7Ozs7OztJQUFsQixVQUNFLE9BQXNCLEVBQ3RCLEtBQThCLEVBQzlCLE1BQWMsRUFDZCxPQUEwQjtRQUo1QixpQkFnQkM7O1lBVk8sVUFBVSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQzs7WUFDaEUsT0FBTyxHQUFHLGtCQUFDLE1BQU0sR0FBSyxVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNqRCxPQUNGLE9BQU8sV0FDUCxLQUFLO2FBQ0osR0FBRzs7OztRQUFDLFVBQUEsSUFBSTtZQUNQLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQUksSUFBSSxDQUFDLElBQUksU0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBSSxDQUFDO1FBQTVFLENBQTRFLEVBQzdFO2FBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUNOLENBQUM7SUFDTixDQUFDOzs7Ozs7OztJQUVPLG1EQUFvQjs7Ozs7OztJQUE1QixVQUNFLE9BQXNCLEVBQ3RCLE1BQWMsRUFDZCxPQUEwQjtRQUUxQix3QkFDSyxJQUFJLENBQUMsMEJBQTBCLENBQUMsT0FBTyxDQUFDO1lBQzNDLGFBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFHO1lBQzFELGNBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFHO1dBQzVEO0lBQ0osQ0FBQzs7Ozs7O0lBRU8seURBQTBCOzs7OztJQUFsQyxVQUFtQyxPQUEwQjtRQUMzRCxPQUFPLE9BQU8sQ0FBQyxZQUFZO1lBQ3pCLENBQUMsQ0FBQztnQkFDRSxlQUFlO2dCQUNmLHNDQUFvQztnQkFDcEMsOENBQTRDO2FBQzdDO1lBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNULENBQUM7O2dCQTNERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQU5RLGFBQWE7Z0JBQ2IsaUJBQWlCOzs7K0JBRjFCO0NBaUVDLEFBNURELElBNERDO1NBekRZLG9CQUFvQjs7Ozs7O0lBRTdCLDZDQUE2Qzs7Ozs7SUFDN0MsMENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtYXRTZXJ2aWNlIH0gZnJvbSAnQHhsYXllcnMvc2tldGNoLWxpYic7XHJcbmltcG9ydCB7IFN2Z0NvbnRleHRTZXJ2aWNlIH0gZnJvbSAnLi9zdmctY29udGV4dC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3ZnQ29kZUdlbk9wdGlvbnMsIFN2Z0NvZGVHZW5Db250ZXh0UGF0aCB9IGZyb20gJy4vc3ZnLWNvZGVnZW4nO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU3ZnQWdncmVnYXRvclNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBmb3JtYXRTZXJ2aWNlOiBGb3JtYXRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzdmdDb250ZXh0OiBTdmdDb250ZXh0U2VydmljZVxyXG4gICkge31cclxuXHJcbiAgYWdncmVnYXRlKGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIsIG9wdGlvbnM6IFN2Z0NvZGVHZW5PcHRpb25zKSB7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5zdmdDb250ZXh0Lm9mKGN1cnJlbnQpO1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAge1xyXG4gICAgICAgIGtpbmQ6ICdzdmcnLFxyXG4gICAgICAgIGxhbmd1YWdlOiAnc3ZnJyxcclxuICAgICAgICB2YWx1ZTogdGhpcy5yZW5kZXJGaWxlKGN1cnJlbnQsIGNvbnRleHQucGF0aHMsIGNvbnRleHQub2Zmc2V0LCBvcHRpb25zKSxcclxuICAgICAgICB1cmk6IGAke3RoaXMuZm9ybWF0U2VydmljZS5ub3JtYWxpemVOYW1lKGN1cnJlbnQubmFtZSl9LnN2Z2BcclxuICAgICAgfVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyRmlsZShcclxuICAgIGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIsXHJcbiAgICBwYXRoczogU3ZnQ29kZUdlbkNvbnRleHRQYXRoW10sXHJcbiAgICBvZmZzZXQ6IG51bWJlcixcclxuICAgIG9wdGlvbnM6IFN2Z0NvZGVHZW5PcHRpb25zXHJcbiAgKSB7XHJcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gdGhpcy5nZW5lcmF0ZVhtbEF0dHJpYnV0ZShjdXJyZW50LCBvZmZzZXQsIG9wdGlvbnMpO1xyXG4gICAgY29uc3Qgb3BlblRhZyA9IFsnPHN2ZycsIC4uLmF0dHJpYnV0ZXNdLmpvaW4oJyAnKTtcclxuICAgIHJldHVybiBgXFxcclxuJHtvcGVuVGFnfT5cclxuJHtwYXRoc1xyXG4gIC5tYXAocGF0aCA9PlxyXG4gICAgdGhpcy5mb3JtYXRTZXJ2aWNlLmluZGVudCgxLCBgPCR7cGF0aC50eXBlfSAke3BhdGguYXR0cmlidXRlcy5qb2luKCcgJyl9Lz5gKVxyXG4gIClcclxuICAuam9pbignXFxuJyl9XHJcbjwvc3ZnPmA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdlbmVyYXRlWG1sQXR0cmlidXRlKFxyXG4gICAgY3VycmVudDogU2tldGNoTVNMYXllcixcclxuICAgIG9mZnNldDogbnVtYmVyLFxyXG4gICAgb3B0aW9uczogU3ZnQ29kZUdlbk9wdGlvbnNcclxuICApIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIC4uLnRoaXMuZ2VuZXJhdGVYbWxIZWFkZXJBdHRyaWJ1dGUob3B0aW9ucyksXHJcbiAgICAgIGB3aWR0aD1cIiR7KGN1cnJlbnQuZnJhbWUud2lkdGggKyBvZmZzZXQgKiAyKS50b0ZpeGVkKDIpfVwiYCxcclxuICAgICAgYGhlaWdodD1cIiR7KGN1cnJlbnQuZnJhbWUuaGVpZ2h0ICsgb2Zmc2V0ICogMikudG9GaXhlZCgyKX1cImBcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdlbmVyYXRlWG1sSGVhZGVyQXR0cmlidXRlKG9wdGlvbnM6IFN2Z0NvZGVHZW5PcHRpb25zKSB7XHJcbiAgICByZXR1cm4gb3B0aW9ucy54bWxOYW1lc3BhY2VcclxuICAgICAgPyBbXHJcbiAgICAgICAgICAndmVyc2lvbj1cIjEuMVwiJyxcclxuICAgICAgICAgIGB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJgLFxyXG4gICAgICAgICAgYHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiYFxyXG4gICAgICAgIF1cclxuICAgICAgOiBbXTtcclxuICB9XHJcbn1cclxuIl19