/*
 * the function called by `522.js`
 * furniture graph
 */
const function75 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0),
        o = i(23),
        r = i(101),
        s = i(76),
        a = function () {
            function t() {
                this._loaders = [], this._added_list = []
            }

            // get url
            t.getPath = function (t, e) {
                var i = o.MathUtil.zeroPadding(t, 3);
                if ("normal" == e && n.default.model.furniture.isActive(t)) {
                    var s = r.SuffixUtil.create(t, "furniture_movable");
                    return n.default.settings.path_root + "resources/furniture/movable/" + i + "_" + s + ".json"
                }
                var s = r.SuffixUtil.create(t, "furniture_" + e);
                return n.default.settings.path_root + "resources/furniture/" + e + "/" + i + "_" + s + ".png"
            };
            // get version
            t.getVersionQuery = function (t) {
                // case2: furniture graph
                var e = s.VersionUtil.get(2, t);
                return null != e && "" != e && "1" != e ? "version=" + e : ""
            };
            // push url and requester
            t.prototype.add = function (e, i) {
                var n = t.getPath(e, i);
                if (-1 != this._added_list.indexOf(n))
                    return this;
                null == t._loaded && (t._loaded = []);
                if (-1 != t._loaded.indexOf(n))
                    return this;
                t._loaded.push(n);
                this._added_list.push(n);
                var o = new PIXI.loaders.Loader;
                o.defaultQueryString = t.getVersionQuery(e);
                o.add(n);
                this._loaders.push(o);
                return this
            };
            // load furniture graph
            t.prototype.load = function (t) {
                void 0 === t && (t = null);
                // callback on complete
                this._cb_onComplete = t;
                this._load();
                return this
            };
            // load
            t.prototype._load = function () {
                var t = this;
                if (0 == this._loaders.length)
                    this._onComplete();
                else {
                    this._loaders.shift().load(function () { // callback on loaded, call itself recursively
                        t._load()
                    })
                }
            };
            // on complete
            t.prototype._onComplete = function () {
                this._cb_onComplete();
                this._loaders = null;
                this._cb_onComplete = null
            };
            return t
        }();
    e.FurnitureLoader = a
}