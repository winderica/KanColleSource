const function70 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = i(25),
        r = function () {
            function t() {
                null == t._queue && (t._queue = []), this._url_list = []
            }
            return t.getPath = function (t, e) {
                var i = o.MathUtil.zeroPadding(t, 3);
                return 0 == e ? null : 1 == e ? n.default.settings.path_root + "resources/useitem/card/" + i + ".png" : 2 == e ? n.default.settings.path_root + "resources/useitem/card_/" + i + ".png" : ""
            }, t.prototype.add = function (e, i) {
                if (0 == i) return this;
                var n = t.getPath(e, i);
                return this._url_list.push(n), this
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
                if (this._cb_onComplete(), this._cb_onComplete = null, t._queue.shift() != this) throw new Error("UseitemLoader Error");
                t._queue.length > 0 && t._queue[0]._load()
            }, t
        }();
    e.UseitemLoader = r
}