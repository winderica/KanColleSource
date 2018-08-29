/*
 * the function called by `523.js`
 * gauge graph
 */
const function268 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function (e, i) {
            function n() {
                this.constructor = e
            }

            t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
        }
    }();
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(0), r = i(17), s = i(2), a = i(77), _ = i(7), u = i(28),
        l = function () {
            function t(t, e) {
                var i = this;
                // callback
                this._onImageLoadComplete = function (t, e) {
                    null != t && i._cb_onLoadCompleteResources(t.resources);
                    null != i._cb_onTaskComplete && i._cb_onTaskComplete();
                    i._cb_onLoadCompleteInfo = null;
                    i._cb_onLoadCompleteResources = null;
                    i._cb_onTaskComplete = null;
                    i._keys = null
                };
                this._cb_onLoadCompleteInfo = t;
                this._cb_onLoadCompleteResources = e;
                this._keys = []
            }

            // number of gauge info to load
            Object.defineProperty(t.prototype, "count", {
                get: function () {
                    return this._keys.length
                }, enumerable: !0, configurable: !0
            });
            // push url
            t.prototype.add = function (t) {
                return -1 == this._keys.indexOf(t) && this._keys.push(t), this
            };
            // load gauge info
            t.prototype.load = function (t) {
                var e = this;
                void 0 === t && (t = null), this._cb_onTaskComplete = t;
                for (var i = {}, n = new u.SerialTask, o = 0, r = this._keys; o < r.length; o++) {
                    var s = r[o];
                    // `i` is changed in `p`
                    n.add(new p(s, i))
                }
                n.start(function () {
                    e._onInfoLoadComplete(i)
                })
            };
            return t
        }();
    e.GaugeLoader = l;
    // class c extends l
    var c = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        n(e, t);
        // load graph when info is loaded
        e.prototype._onInfoLoadComplete = function (t) {
            var e = new PIXI.loaders.Loader(o.default.settings.path_root), i = [];
            for (var n in t) {
                var s = t[n];
                this._cb_onLoadCompleteInfo(n, s);
                var a = s.image_path;
                -1 == i.indexOf(a) && (i.push(a), e.add(a, "resources/gauge/" + a + ".png?" + r.START_TIME));
                a = s.image_light_path;
                -1 == i.indexOf(a) && (i.push(a), e.add(a, "resources/gauge/" + a + ".png?" + r.START_TIME))
            }
            0 == i.length ? this._onImageLoadComplete(null, null) : e.load(this._onImageLoadComplete)
        };
        return e
    }(l);
    e.HorizontalGaugeLoader = c;
    // class h extends l
    var h = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        n(e, t);
        // load graph when info is loaded
        e.prototype._onInfoLoadComplete = function (t) {
            var e = new PIXI.loaders.Loader(o.default.settings.path_root), i = [];
            for (var n in t) {
                var s = t[n];
                this._cb_onLoadCompleteInfo(n, s);
                var a = s.vertical;
                if (null != a) {
                    var _ = a.image_path;
                    -1 == i.indexOf(_) && (i.push(_), e.add(_, "resources/gauge/" + _ + ".png?" + r.START_TIME));
                    _ = s.vertical.image_light_path;
                    -1 == i.indexOf(_) && (i.push(_), e.add(_, "resources/gauge/" + _ + ".png?" + r.START_TIME));
                }
            }
            0 == i.length ? this._onImageLoadComplete(null, null) : e.load(this._onImageLoadComplete)
        };
        return e
    }(l);
    e.VerticalGaugeLoader = h;

    // class p extends s.TaskBase
    var p = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            n._onLoadComplete = function (t) {
                if (200 == _.ObjUtil.getNumber(t, "status")) {
                    var e = _.ObjUtil.getObject(t, "data");
                    // set data
                    null != e && (n._dic[n._key] = new a.GaugeSetModel(e));
                    n._endTask()
                } else n._failedEnd()
            };
            n._onLoadFailed = function (t) {
                n._failedEnd()
            };
            n._key = e;
            n._dic = i;
            return n
        }

        n(e, t);
        // start requesting
        e.prototype._start = function () {
            var t = o.default.settings.path_root + "resources/gauge/" + this._key + ".json?" + r.START_TIME;
            axios.get(t).then(this._onLoadComplete).catch(this._onLoadFailed)
        };
        return e
    }(s.TaskBase)
}