/*
 * the function called by `522.js`
 * equipment graph
 */
const function24 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0),
        o = i(260),
        r = i(23),
        s = i(101),
        a = i(76),
        _ = function () {
            function t() {
                null == t._queue && (t._queue = []), this._url_list = []
            }

            /*
             * get url
             * `t`: equipment (mst) id
             * `e`: graph type?
             */
            t.getPath = function (t, e) {
                var i = "slot_" + e,
                    o = s.SuffixUtil.create(t, i),
                    _ = r.MathUtil.zeroPadding(t, 3);
                return n.default.settings.path_root + "resources/slot/" + e + "/" + _ + "_" + o + ".png" + a.VersionUtil.getResourceVersion(1, parseInt(_))
            };
            // push url
            t.prototype.add = function (e, i) {
                // replace some enemy equipment graphs
                "item_up" == i && (1 == o.ITEMUP_REPLACE.hasOwnProperty(e.toString()) ? e = o.ITEMUP_REPLACE[e] :
                    e > 500 && (e -= 500));
                var n = t.getPath(e, i);
                this._url_list.push(n);
                return this
            };
            // push to loading queue and load if there is only one item in queue
            t.prototype.load = function (e) {
                void 0 === e && (e = null);
                this._cb_onComplete = e;
                t._queue.indexOf(this) >= 0 || (t._queue.push(this), 1 == t._queue.length && this._load())
            };
            // load recursively
            t.prototype._load = function () {
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
            };
            // callback on loaded
            t.prototype._onLoadComplete = function () {
                this._cb_onComplete();
                this._cb_onComplete = null;
                if (t._queue.shift() != this) throw new Error("SlotLoader Error");
                t._queue.length > 0 && t._queue[0]._load()
            };
            return t
        }();
    e.SlotLoader = _
}