/*
 * the function called by `522.js`
 * gauge creator
 */
const function523 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    // different instances to get avoid of interference？
    var n = i(268), o = i(268), r = function () {
        function t() {
            var t = this;
            this._onLoadCompleteInfo = function (e, i) {
                t._info_dic[e] = i
            };
            this._onLoadCompleteResources = function (e) {
                for (var i in e) 0 == t._dic.hasOwnProperty(i) && (t._dic[i] = e[i])
            };
            this._info_dic = {}, this._dic = {}
        }

        // horizontal gauge?
        t.prototype.createLoaderHorizontal = function () {
            return new n.HorizontalGaugeLoader(this._onLoadCompleteInfo, this._onLoadCompleteResources)
        };
        // vertical gauge?
        t.prototype.createLoaderVertical = function () {
            return new o.VerticalGaugeLoader(this._onLoadCompleteInfo, this._onLoadCompleteResources)
        };
        // get gauge info
        t.prototype.getGaugeInfo = function (t) {
            return 1 == this._info_dic.hasOwnProperty(t) ? this._info_dic[t] : null
        };
        // get graph
        t.prototype.getTexture = function (t) {
            if (1 == this._dic.hasOwnProperty(t)) {
                var e = this._dic[t];
                if (null != e && null != e.texture && void 0 != e.texture) return e.texture
            }
            return PIXI.Texture.EMPTY
        };
        return t
    }();
    e.GaugeRManager = r
}