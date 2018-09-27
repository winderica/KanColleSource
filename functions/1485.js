const function1485 = function (t, e, i) {
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
    var o = i(2), r = i(6), s = i(177), a = function (t) {
        function e(e, i, n, o) {
            void 0 === o && (o = 0);
            var r = t.call(this) || this;
            return r._layer = e, r._x = i, r._y = n, r._delay = o, r
        }

        return n(e, t), e.prototype._start = function () {
            this._wait()
        }, e.prototype._wait = function () {
            var t = this;
            this._delay > 0 ? createjs.Tween.get(null).wait(this._delay).call(function () {
                t._explode()
            }) : this._explode()
        }, e.prototype._explode = function () {
            var t = this, e = new s.Explosion;
            e.x = this._x, e.y = this._y, this._layer.addChild(e), r.SE.play("102"), e.play(function () {
                t._layer.removeChild(e), t._endTask()
            })
        }, e
    }(o.TaskBase);
    e.TaskExplosion = a
}