const function527 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(262), o = i(262), r = function () {
        function t() {
            var t = this;
            this._onLoadCompleteInfo = function (e, i) {
                t._info_dic[e] = i
            }, this._onLoadCompleteResources = function (e) {
                for (var i in e) 0 == t._dic.hasOwnProperty(i) && (t._dic[i] = e[i])
            }, this._info_dic = {}, this._dic = {}
        }

        return t.prototype.createLoaderHorizontal = function () {
            return new n.HorizontalGaugeLoader(this._onLoadCompleteInfo, this._onLoadCompleteResources)
        }, t.prototype.createLoaderVertical = function () {
            return new o.VerticalGaugeLoader(this._onLoadCompleteInfo, this._onLoadCompleteResources)
        }, t.prototype.getGaugeInfo = function (t) {
            return 1 == this._info_dic.hasOwnProperty(t) ? this._info_dic[t] : null
        }, t.prototype.getTexture = function (t) {
            if (1 == this._dic.hasOwnProperty(t)) {
                var e = this._dic[t];
                if (null != e && null != e.texture && void 0 != e.texture) return e.texture
            }
            return PIXI.Texture.EMPTY
        }, t
    }();
    e.GaugeRManager = r
}