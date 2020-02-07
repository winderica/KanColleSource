const function60 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = i(25),
        r = i(106),
        s = i(69),
        a = function () {
            function t() {
                this._keys = [], this._loader = new PIXI.loaders.Loader
            }
            return t.clearMemoryCache = function () {
                var e = new RegExp("^f\\d{3}_[a-z]?\\d{3}.*\\.png");
                t._clearMemoryCache(e);
                var i = new RegExp("^resources/furniture/(movable|normal|thumbnail|picture|outside)/.+");
                t._clearMemoryCache(i)
            }, t._clearMemoryCache = function (e) {
                for (var i = Object.keys(PIXI.utils.TextureCache).filter(function (t) {
                        return e.test(t)
                    }), n = 0, o = i; n < o.length; n++) {
                    var r = o[n],
                        s = PIXI.utils.TextureCache[r];
                    s && s.destroy(!0), delete PIXI.utils.TextureCache[r]
                }
                t._loaded = t._loaded.filter(function (t) {
                    return 0 == e.test(t)
                })
            }, t.getPath = function (t, e) {
                var i = o.MathUtil.zeroPadding(t, 3);
                if ("normal" == e && n.default.model.furniture.isActive(t)) {
                    var s = r.SuffixUtil.create(t, "furniture_movable");
                    return n.default.settings.path_root + "resources/furniture/movable/" + i + "_" + s + ".json"
                }
                var s = r.SuffixUtil.create(t, "furniture_" + e);
                return n.default.settings.path_root + "resources/furniture/" + e + "/" + i + "_" + s + ".png"
            }, t.getVersionQuery = function (t) {
                var e = s.VersionUtil.get(2, t);
                return null != e && "" != e && "1" != e ? "version=" + e : ""
            }, t.prototype.add = function (e, i) {
                var n = t.getPath(e, i);
                return null == t._loaded && (t._loaded = []), t._loaded.indexOf(n) >= 0 ? this : (t._loaded.push(n), this._keys.push(n), this._loader = this._loader.add(n), this)
            }, t.prototype.load = function (t) {
                var e = this;
                return void 0 === t && (t = null), this._cb_onComplete = t, this._keys.length > 0 ? this._loader = this._loader.load(function () {
                    return e._onComplete()
                }) : this._onComplete(), this
            }, t.prototype._onComplete = function () {
                this._cb_onComplete(), this._loader = null, this._cb_onComplete = null
            }, t
        }();
    e.FurnitureLoader = a
}