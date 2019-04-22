const function1472 = function (t, e, i) {
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
        r = i(1473),
        s = i(1477),
        a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._scene = e, i
            }
            return n(e, t), e.prototype._start = function () {
                this._normalBonus()
            }, e.prototype._normalBonus = function () {
                var t = this;
                new r.TaskNormalBonus(this._scene).start(function () {
                    t._scene.view.dispose(), t._mapBonus()
                })
            }, e.prototype._mapBonus = function () {
                var t = this,
                    e = this._scene.layer_bonus,
                    i = this._scene.data.getMapBonus();
                new s.TaskEventBonus(e, i).start(function () {
                    t._endTask()
                })
            }, e
        }(o.TaskBase);
    e.PhaseBonus = a
}