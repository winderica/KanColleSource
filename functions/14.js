const function14 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0), o = i(29), r = i(22), s = i(102), a = i(76), _ = function () {
        function t() {
            null == t._queue && (t._queue = []), this._url_list = []
        }

        return t.getPath = function (t, e, i) {
            "album_status" == i ? e = !1 : "banner_g" == i ? e = !0 : 1 == o.ShipUtil.isEnemy(t) && (e = !1);
            var _ = i + (e ? "_dmg" : ""), u = "ship_" + _, l = s.SuffixUtil.create(t, u),
                c = r.MathUtil.zeroPadding(t, 4);
            return n.default.settings.path_root + "resources/ship/" + _ + "/" + c + "_" + l + ".png" + a.VersionUtil.getResourceVersion(0, parseInt(c))
        }, t.prototype.add = function (e, i, n) {
            var o = t.getPath(e, i, n);
            return this._url_list.push(o), this
        }, t.prototype.getSpecificAlbumImageLoadList = function (t) {
            switch (t) {
                case 754:
                case 755:
                case 984:
                case 1003:
                case 1004:
                case 1005:
                case 1006:
                case 1007:
                case 1008:
                case 1009:
                case 1010:
                case 1011:
                case 1012:
                case 1013:
                case 1014:
                case 1015:
                case 1016:
                case 1017:
                case 1018:
                case 1019:
                case 1020:
                case 1021:
                case 1022:
                case 1023:
                case 1024:
                case 1025:
                case 1026:
                case 1027:
                case 1028:
                case 1029:
                case 1030:
                case 1031:
                case 1032:
                case 1033:
                case 1034:
                    return ["character_up", "character_full"];
                default:
                    return null
            }
        }, t.prototype.needCard = function (t) {
            return null === t || t.indexOf("card") > -1
        }, t.prototype.needCharaFull = function (t) {
            return null === t || t.indexOf("character_full") > -1
        }, t.prototype.needCharaUp = function (t) {
            return null === t || t.indexOf("character_full") > -1
        }, t.prototype.load = function (e) {
            void 0 === e && (e = null), this._cb_onComplete = e, t._queue.indexOf(this) >= 0 || (t._queue.push(this), 1 == t._queue.length && this._load())
        }, t.prototype._load = function () {
            var t = this;
            if (this._url_list = this._url_list.filter(function (t, e, i) {
                return !PIXI.utils.TextureCache[t] && i.indexOf(t) === e
            }), 0 == this._url_list.length) return void this._onLoadComplete();
            for (var e = new PIXI.loaders.Loader, i = 0, n = this._url_list; i < n.length; i++) {
                var o = n[i];
                e.add(o)
            }
            e.load(function () {
                t._onLoadComplete()
            })
        }, t.prototype._onLoadComplete = function () {
            if (this._cb_onComplete(), this._cb_onComplete = null, t._queue.shift() != this) throw new Error("ShipLoader Error");
            t._queue.length > 0 && t._queue[0]._load()
        }, t
    }();
    e.ShipLoader = _
}