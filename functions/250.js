const function250 = function (t, e, i) {
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
    var o = i(2),
        r = i(54),
        s = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._scene = e, n._record = i, n._damage_cutin = new r.PhaseDamageCutin(e), n
            }
            return n(e, t), e.prototype._start = function () {}, e.prototype._endTask = function () {
                var e = this;
                this._damage_cutin.start(function () {
                    e._aaCutin = null, t.prototype._endTask.call(e)
                })
            }, e
        }(o.TaskBase);
    e.PhaseAirBase = s
}