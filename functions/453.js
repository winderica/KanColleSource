const function453 = function (t, e, i) {
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
    var o = i(2), r = i(6), s = function (t) {
        function e(e, i, n, o) {
            var r = t.call(this) || this;
            return r._onComplete = function () {
                r._layer.removeChild(r._planes), r._planes.stopFluctuations(), r._planes.dispose(), r._endTask()
            }, r._layer = e, r._planes = i, r._to_pos = n, r._cb_onDamaged = o, r
        }

        return n(e, t), e.prototype._start = function () {
            var t = this;
            this._planes.startFluctuations(), this._planes.scale.set(0), this._layer.addChild(this._planes), r.SE.play("115"), createjs.Tween.get(this._planes.scale).to({
                x: 1,
                y: 1
            }, 250).call(function () {
                var e = t._to_pos, i = t._planes.friend ? 1275 : -75;
                t._planes.play(e, i, 2500, t._cb_onDamaged, t._onComplete)
            })
        }, e.prototype._endTask = function () {
            this._layer = null, this._planes = null, this._to_pos = null, this._cb_onDamaged = null, t.prototype._endTask.call(this)
        }, e
    }(o.TaskBase);
    e.TaskPlane = s
}