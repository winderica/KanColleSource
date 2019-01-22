const function15 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = i(22),
        r = i(103),
        s = i(79),
        a = function () {
            function t() {
                null == t._queue && (t._queue = []), this._url_list = []
            }
            return t.hSuffix = function (e, i) {
                if (null == t.hasai || e != t.hasai) return "";
                switch (i) {
                    case "banner":
                    case "banner_g":
                    case "full":
                        return "_d";
                    default:
                        return ""
                }
            }, t.getPath = function (e, i, a) {
                "album_status" == a ? i = !1 : "banner_g" == a ? i = !0 : "banner2_g" == a ? i = !0 : "banner3_g" == a && (i = !0);
                var _ = a + (i ? "_dmg" : ""),
                    l = "ship_" + _,
                    u = r.SuffixUtil.create(e, l),
                    c = o.MathUtil.zeroPadding(e, 4),
                    h = "";
                if ("full" == a) {
                    var p = n.default.model.ship_graph.get(e);
                    null != p && (h = "_" + p.unique_key)
                }
                return n.default.settings.path_root + "resources/ship/" + _ + "/" + (c + t.hSuffix(e, a)) + "_" + u + h + ".png" + s.VersionUtil.getResourceVersion(0, parseInt(c))
            }, t.prototype.add = function (e, i, n) {
                var o = t.getPath(e, i, n);
                return this._url_list.push(o), this
            }, t.prototype.getSpecificAlbumImageLoadList = function (t) {
                switch (t) {
                    case 754:
                    case 755:
                        return {
                            typeList: ["character_up", "character_full"],
                            hasTaiha: !1
                        };
                    case 984:
                    case 997:
                        return {
                            typeList: ["character_up", "character_full"],
                            hasTaiha: !0
                        };
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
                        return {
                            typeList: ["character_up", "character_full"],
                            hasTaiha: !1
                        };
                    case 1085:
                        return {
                            typeList: ["character_up", "character_full"],
                            hasTaiha: !0
                        };
                    default:
                        return {
                            typeList: null,
                            hasTaiha: null
                        }
                }
            }, t.prototype.needCard = function (t) {
                return null === t || t.indexOf("card") > -1
            }, t.prototype.needCharaFull = function (t) {
                return null === t || t.indexOf("character_full") > -1
            }, t.prototype.needCharaUp = function (t) {
                return null === t || t.indexOf("character_up") > -1
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
            }, t.hasai = null, t
        }();
    e.ShipLoader = a
}