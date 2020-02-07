const function13 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = i(28),
        r = i(25),
        s = i(106),
        a = i(69),
        _ = function () {
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
            }, t.getPath = function (e, i, _) {
                "album_status" == _ ? i = !1 : "banner_g" == _ ? i = !0 : "banner2_g" == _ ? i = !0 : "banner3_g" == _ ? i = !0 : 1 == o.ShipUtil.isEnemy(e) && (i = !1);
                var u = _ + (i ? "_dmg" : ""),
                    l = "ship_" + u,
                    c = s.SuffixUtil.create(e, l),
                    h = r.MathUtil.zeroPadding(e, 4),
                    p = "";
                if ("full" == _) {
                    var d = n.default.model.ship_graph.get(e);
                    null != d && (p = "_" + d.unique_key)
                }
                return n.default.settings.path_root + "resources/ship/" + u + "/" + (h + t.hSuffix(e, _)) + "_" + c + p + ".png" + a.VersionUtil.getResourceVersion(0, parseInt(h))
            }, t.clearMemoryCache = function () {
                for (var t = Object.keys(PIXI.utils.TextureCache), e = t.filter(function (t) {
                        return /^resources\/ship\/.+/.test(t)
                    }), i = 0, n = e; i < n.length; i++) {
                    var o = n[i],
                        r = PIXI.utils.TextureCache[o];
                    r && r.destroy(!0), delete PIXI.utils.TextureCache[o]
                }
            }, t.prototype.add = function (e, i, n) {
                var o = t.getPath(e, i, n);
                return this._url_list.push(o), this
            }, t.prototype.getSpecificAlbumImageLoadList = function (t) {
                switch (t) {
                    case 5026:
                    case 5027:
                        return {
                            typeList: ["character_up", "character_full"], hasTaiha: !1
                        };
                    case 5256:
                    case 5269:
                        return {
                            typeList: ["character_up", "character_full"], hasTaiha: !0
                        };
                    case 5275:
                    case 5276:
                    case 5277:
                    case 5278:
                    case 5279:
                    case 5280:
                    case 5281:
                    case 5282:
                    case 5283:
                    case 5284:
                    case 5285:
                    case 5286:
                    case 5287:
                    case 5288:
                    case 5289:
                    case 5290:
                    case 5291:
                    case 5292:
                    case 5293:
                    case 5294:
                    case 5295:
                    case 5296:
                    case 5297:
                    case 5298:
                    case 5299:
                    case 5300:
                    case 5301:
                    case 5302:
                    case 5303:
                    case 5304:
                    case 5305:
                    case 5306:
                        return {
                            typeList: ["character_up", "character_full"], hasTaiha: !1
                        };
                    case 5357:
                        return {
                            typeList: ["character_up", "character_full"], hasTaiha: !0
                        };
                    default:
                        return {
                            typeList: null, hasTaiha: null
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
    e.ShipLoader = _
}