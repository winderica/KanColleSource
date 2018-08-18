const function24 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0), o = function () {
        function t(e) {
            var i = this;
            if (this._cb_onProgress = null, this._onLoadComplete = function (t, e) {
                i._cb_onComplete(t, e), i._cb_onComplete = null, null != i._cb_onProgress && i._loader.off("progress", i._cb_onProgress), i._cb_onProgress = null, i._keys = null, i._loader = null
            }, this._category = e, this._keys = [], this._loader = new PIXI.loaders.Loader, null != t._version_data && t._version_data[e]) {
                var n = t._version_data[e];
                this._loader.defaultQueryString = "version=" + n
            }
        }

        return t.setVersionData = function (t) {
            this._version_data = t
        }, t.getPath = function (t, e) {
            return null == e || "" == e ? n.default.settings.path_root + "img/" + t : n.default.settings.path_root + "img/" + e + "/" + t
        }, t.prototype.add = function (e, i) {
            void 0 === i && (i = null);
            var n = t.getPath(e, this._category);
            return null == t._loaded && (t._loaded = []), -1 == t._loaded.indexOf(n) && (t._loaded.push(n), this._keys.push(n), this._loader = null == i ? this._loader.add(n) : this._loader.add(i, n)), this
        }, t.prototype.load = function (t, e) {
            return void 0 === t && (t = null), void 0 === e && (e = null), this._cb_onComplete = t, this._cb_onProgress = e, null != e && this._loader.on("progress", this._cb_onProgress), this._keys.length > 0 ? this._loader = this._loader.load(this._onLoadComplete) : this._onLoadComplete(this._loader, null), this
        }, t._version_data = null, t
    }();
    e.UIImageLoader = o
}