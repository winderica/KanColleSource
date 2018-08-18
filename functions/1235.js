const function1235 = function (t, e, i) {
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
    var o = i(2), r = i(18), s = function (t) {
        function e(e, i, n) {
            var o = t.call(this) || this;
            return o._ship = e, o._type = i, o._directionType = n, o
        }

        return n(e, t), e.prototype._start = function () {
            var t = this, e = new a;
            e.initialize(this._type, this._directionType), e.alpha = 0, this._ship.addChild(e), createjs.Tween.get(e).to({
                y: -23,
                alpha: 1
            }, 100).wait(2e3).to({ y: 0, alpha: 0 }, 100).call(function () {
                t._ship.removeChild(e), t._endTask()
            })
        }, e
    }(o.TaskBase);
    e.AnimBalloon = s;
    var a = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._img = new PIXI.Sprite, e.addChild(e._img), e
        }

        return n(e, t), e.prototype.initialize = function (t, e) {
            1 == t ? this._initializeFoundEnemy(e) : 2 == t && this._initializeFoundTarget(e), 3 == t && this._initializePatrol(e), this._addOffset(e)
        }, e.prototype._initializeFoundEnemy = function (t) {
            0 == t ? (this._img.texture = r.MAP_COMMON.getTexture(45), this._img.position.set(-66, -77)) : 1 == t ? (this._img.texture = r.MAP_COMMON.getTexture(27), this._img.position.set(-15, -68)) : 2 == t ? (this._img.texture = r.MAP_COMMON.getTexture(26), this._img.position.set(0, -36)) : 7 == t && (this._img.texture = r.MAP_COMMON.getTexture(28), this._img.position.set(-114, -68))
        }, e.prototype._initializeFoundTarget = function (t) {
            1 == t ? (this._img.texture = r.MAP_COMMON.getTexture(29), this._img.position.set(-15, -68)) : 7 == t && (this._img.texture = r.MAP_COMMON.getTexture(30), this._img.position.set(-140, -66))
        }, e.prototype._initializePatrol = function (t) {
            1 == t ? (this._img.texture = r.MAP_COMMON.getTexture(31), this._img.position.set(-14, -66)) : 7 == t && (this._img.texture = r.MAP_COMMON.getTexture(32), this._img.position.set(-114, -66))
        }, e.prototype._addOffset = function (t) {
            0 == t ? (this._img.x += -3, this._img.y += -9) : 1 == t ? (this._img.x += 21, this._img.y += -6) : 2 == t ? (this._img.x += 39, this._img.y += 9) : 3 == t || 4 == t || 5 == t || 6 == t || 7 == t && (this._img.x += -21, this._img.y += -6)
        }, e
    }(PIXI.Container)
}