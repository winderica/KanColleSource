const function1410 = function (t, e, i) {
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
    var o = i(22),
        r = i(2),
        s = i(1411),
        a = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._banner = e, n._large = i, n
            }
            return n(e, t), e.prototype._start = function () {
                if (null == this._banner) return void this._endTask();
                this._effect()
            }, e.prototype._effect = function () {
                var t = this,
                    e = new s.SearchLight;
                e.initialize(this._large), 1 == this._banner.friend ? e.x = o.BannerSize.W + 15 : (e.x = -15, e.scale.x = -1), e.y = o.BannerSize.H / 2, this._banner.addChild(e), e.getAnimationTask().start(function () {
                    t._banner.removeChild(e), t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._banner = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.TaskSearchLightAnimation = a
}