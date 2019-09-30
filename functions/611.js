const function611 = function (t, e, i) {
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
        r = i(1),
        s = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._timer = -1, n._flg = !0, n.dispose = function () {
                    n._stopAnimation(), n.interactive = n.buttonMode = !1, n.off(r.EventType.MOUSEOVER, n._onOver), n.off(r.EventType.MOUSEOUT, n._onOut), n.off(r.EventType.CLICK, n._onClick)
                }, n._startAnimation = function () {
                    null != n._texture_light && n._timer < 0 && (n._timer = setInterval(n._onTimer, 1500))
                }, n._stopAnimation = function () {
                    n._timer >= 0 && (clearInterval(n._timer), n._timer = -1)
                }, n._onOver = function () {
                    n._stopAnimation(), n.texture = n._texture_on
                }, n._onOut = function () {
                    n.texture = n._texture_normal, n._startAnimation()
                }, n._onTimer = function () {
                    1 == n._flg ? n.texture = n._texture_light : n.texture = n._texture_normal, n._flg = !n._flg
                }, n._onClick = function () {
                    22 != n._type && o.default.scene.change(n._type, n._model)
                }, n._type = e, n._model = i, n
            }
            return n(e, t), e.prototype.setUp = function (t, e, i, n) {
                void 0 === n && (n = PIXI.Texture.EMPTY), this._texture_normal = t, this._texture_on = e, this._texture_light = i, this._onOut()
            }, e.prototype.initialize = function (t, e, i, n) {
                void 0 === n && (n = PIXI.Texture.EMPTY), this.setUp(t, e, i, n), this.interactive = this.buttonMode = !0, this.on(r.EventType.MOUSEOVER, this._onOver), this.on(r.EventType.MOUSEOUT, this._onOut), 22 != this._type && this.on(r.EventType.CLICK, this._onClick)
            }, e
        }(PIXI.Sprite);
    e.UpperBtn = s
}