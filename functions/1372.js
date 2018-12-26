const function1372 = function (t, e, i) {
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
    var o = i(24),
        r = i(2),
        s = i(1373),
        a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._banner = e, i
            }
            return n(e, t), e.prototype._start = function () {
                var t = this;
                if (null == this._banner) return void this._endTask();
                this._banner.moveFront(function () {
                    t._antiAircraft()
                })
            }, e.prototype._antiAircraft = function () {
                var t = this,
                    e = this._banner.friend,
                    i = new s.AntiAircraftFire;
                i.initialize(), i.x = e ? o.BannerSize.W : 0, i.rotation = (e ? -60 : 240) / 180 * Math.PI, this._banner.addChild(i), i.getAnimationTask().start(function () {
                    t._banner.removeChild(i), t._banner.moveDefault(), t._banner.once("complete_moveDefault", function () {
                        t._endTask()
                    })
                })
            }, e.prototype._endTask = function () {
                this._banner = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.TaskBannerFlareFire = a
}