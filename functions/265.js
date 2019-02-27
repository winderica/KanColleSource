const function265 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(0),
        r = i(2),
        s = i(68),
        a = i(7),
        _ = i(28),
        l = i(13),
        u = function () {
            function t(t, e) {
                var i = this;
                this._onImageLoadComplete = function (t, e) {
                    null != t && i._cb_onLoadCompleteResources(t.resources), null != i._cb_onTaskComplete && i._cb_onTaskComplete(), i._cb_onLoadCompleteInfo = null, i._cb_onLoadCompleteResources = null, i._cb_onTaskComplete = null, i._keys = null, i._version_map = null
                }, this._cb_onLoadCompleteInfo = t, this._cb_onLoadCompleteResources = e, this._keys = [], this._version_map = {}
            }
            return Object.defineProperty(t.prototype, "count", {
                get: function () {
                    return this._keys.length
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.add = function (t) {
                if (-1 == this._keys.indexOf(t)) {
                    this._keys.push(t);
                    var e = s.GaugeSetModel.getMapId(t);
                    this._version_map[t] = l.UIImageLoader.getResourceVersionMap(e)
                }
                return this
            }, t.prototype.load = function (t) {
                var e = this;
                void 0 === t && (t = null), this._cb_onTaskComplete = t;
                for (var i = {}, n = new _.SerialTask, o = 0, r = this._keys; o < r.length; o++) {
                    var s = r[o],
                        a = this._version_map[s];
                    n.add(new p(s, a, i))
                }
                n.start(function () {
                    e._onInfoLoadComplete(i)
                })
            }, t
        }();
    e.GaugeLoader = u;
    var c = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype._onInfoLoadComplete = function (t) {
            var e = new PIXI.loaders.Loader(o.default.settings.path_root),
                i = [];
            for (var n in t) {
                var r = t[n];
                this._cb_onLoadCompleteInfo(n, r);
                var s = this._version_map[n] ? "?version=" + this._version_map[n] : "",
                    a = r.image_path; - 1 == i.indexOf(a) && null == PIXI.utils.TextureCache[a] && (i.push(a), e.add(a, "resources/gauge/" + a + ".png" + s)), a = r.image_light_path, -1 == i.indexOf(a) && null == PIXI.utils.TextureCache[a] && (i.push(a), e.add(a, "resources/gauge/" + a + ".png" + s))
            }
            0 == i.length ? this._onImageLoadComplete(null, null) : e.load(this._onImageLoadComplete)
        }, e
    }(u);
    e.HorizontalGaugeLoader = c;
    var h = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype._onInfoLoadComplete = function (t) {
            var e = new PIXI.loaders.Loader(o.default.settings.path_root),
                i = [];
            for (var n in t) {
                var r = t[n];
                this._cb_onLoadCompleteInfo(n, r);
                var s = r.vertical;
                if (null != s) {
                    var a = this._version_map[n] ? "?version=" + this._version_map[n] : "",
                        _ = s.image_path; - 1 == i.indexOf(_) && null == PIXI.utils.TextureCache[_] && (i.push(_), e.add(_, "resources/gauge/" + _ + ".png" + a)), _ = r.vertical.image_light_path, -1 == i.indexOf(_) && null == PIXI.utils.TextureCache[_] && (i.push(_), e.add(_, "resources/gauge/" + _ + ".png?" + a))
                }
            }
            0 == i.length ? this._onImageLoadComplete(null, null) : e.load(this._onImageLoadComplete)
        }, e
    }(u);
    e.VerticalGaugeLoader = h;
    var p = function (t) {
        function e(e, i, n) {
            var o = t.call(this) || this;
            return o._onLoadComplete = function (t) {
                if (200 == a.ObjUtil.getNumber(t, "status")) {
                    var e = a.ObjUtil.getObject(t, "data");
                    null != e && (o._dic[o._key] = new s.GaugeSetModel(e)), o._endTask()
                } else o._failedEnd()
            }, o._onLoadFailed = function (t) {
                o._failedEnd()
            }, o._key = e, o._version = i, o._dic = n, o
        }
        return n(e, t), e.prototype._start = function () {
            var t = this._version ? "?version=" + this._version : "",
                e = o.default.settings.path_root + "resources/gauge/" + this._key + ".json" + t;
            axios.get(e).then(this._onLoadComplete).catch(this._onLoadFailed)
        }, e
    }(r.TaskBase)
}