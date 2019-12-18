const function15 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = function () {
            function t(e) {
                var i = this;
                this._cb_onProgress = null, this._onLoadComplete = function (t, e) {
                    i._cb_onComplete(t, e), i._cb_onComplete = null, null != i._cb_onProgress && i._loader.off("progress", i._cb_onProgress), i._cb_onProgress = null, i._keys = null, i._loader = null
                }, this._category = e, this._keys = [], this._loader = new PIXI.loaders.Loader;
                var n = t.getVersion(e);
                null != n && (this._loader.defaultQueryString = "version=" + n)
            }
            return t.setVersionData = function (t) {
                this._version_data = t
            }, t.getPath = function (t, e) {
                return null == e || "" == e ? n.default.settings.path_root + "img/" + t : n.default.settings.path_root + "img/" + e + "/" + t
            }, t.getVersion = function (e) {
                return null == t._version_data ? null : null == t._version_data[e] ? null : t._version_data[e]
            }, t.getResourceVersionMap = function (e) {
                if (null == t._version_data) return null;
                if (null == t._version_data.resources) return null;
                var i = t._version_data.resources;
                return null == i.map ? null : (i = i.map, null == i[e.toString()] ? null : i[e.toString()])
            }, t.clearMemoryCache = function (e) {
                var i = new RegExp("^img\\/" + e + "\\/.+");
                t._clearMemoryCache(i);
                var n = new RegExp("^" + e + "_.+_\\d+");
                t._clearMemoryCache(n)
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
            }, t.prototype.add = function (e, i) {
                void 0 === i && (i = null);
                var n = t.getPath(e, this._category);
                return null == t._loaded && (t._loaded = []), t._loaded.indexOf(n) >= 0 ? this : (t._loaded.push(n), this._keys.push(n), this._loader = null == i ? this._loader.add(n) : this._loader.add(i, n), this)
            }, t.prototype.load = function (t, e) {
                return void 0 === t && (t = null), void 0 === e && (e = null), this._cb_onComplete = t, this._cb_onProgress = e, null != e && this._loader.on("progress", this._cb_onProgress), this._keys.length > 0 ? this._loader = this._loader.load(this._onLoadComplete) : this._onLoadComplete(this._loader, null), this
            }, t._version_data = null, t
        }();
    e.UIImageLoader = o
}