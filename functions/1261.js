const function1261 = function (t, e, i) {
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
        r = i(19),
        s = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o._wait = function () {
                    o._layer.removeChild(o._plane), createjs.Tween.get(null).wait(200).call(function () {
                        o._endTask()
                    })
                }, o.run = function () {
                    o._timer <= 0 && o._isTurn || (o._movePlane(), o._timer -= 1e3 / 60, o._timer <= 0 && !o._isTurn && (o._timer = o._baseTime, o._isTurn = !o._isTurn))
                }, o._layer = e, o._from = i, o._to = n, o._baseTime = 1500, o._timer = o._baseTime, o
            }
            return n(e, t), e.prototype._start = function () {
                var t = this;
                this._plane = new PIXI.Sprite;
                var e = this._to.x > this._from.x ? 1 : -1,
                    i = this._to.x > this._from.x ? -.1 : .1;
                this._plane.texture = r.MAP_COMMON.getTexture(106), this._plane.anchor.set(.5, 1), this._plane.scale.set(e, 1), this._layer.addChild(this._plane), createjs.Tween.get(this._plane.scale).wait(1200).to({
                    x: -1 * this._plane.scale.x,
                    y: 1
                }, 600).wait(3e3 - 3e3 * (.4 + .2)).to({
                    x: i,
                    y: .1
                }, 200).call(function () {
                    t._wait()
                }), this._bezierTween = createjs.Tween.get(null).wait(3e3).addEventListener("change", function () {
                    t.run()
                })
            }, e.prototype._movePlane = function () {
                var t = (this._baseTime - this._timer) / this._baseTime,
                    e = this._isTurn ? 1 * t : 1 * t - 1;
                this._plane.position.x = this._from.x + .9 * this._to.x - .9 * this._to.x * e * e, this._plane.position.y = this._from.y + .9 * this._to.y - .9 * this._to.y * e * e, 0 != e && (this._plane.position.y += ((Math.abs(e) - .5) * (Math.abs(e) - .5) * 38 * 4 - 38) * (Math.abs(e) / e))
            }, e.prototype._endTask = function () {
                this._bezierTween = null, this._plane = null, this._layer = null, this._from = null, this._to = null, this._baseTime = null, this._timer = null, this._isTurn = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.AnimPlane = s
}