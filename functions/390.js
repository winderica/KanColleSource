const function390 = function (t, e, i) {
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
    var o = i(32),
        r = i(3),
        s = i(1),
        a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._onMouseOver = function () {
                    i._update(!0)
                }, i._onMouseOut = function () {
                    i._update(!1)
                }, i._onClick = function (t) {
                    null != i._cb_onClick && i._cb_onClick(t)
                }, i._bg = new PIXI.Sprite, i._bg.position.set(-12, -12), i.addChild(i._bg), i._icon = new o.Sprite, i._icon.position.set(18.5, 18.5), i._icon.anchor.set(.5), i._icon.scale.set(.5), i.addChild(i._icon), i._t = createjs.Tween.get(i._icon, {
                    loop: !0
                }).to({
                    scaleX: .8,
                    scaleY: .8
                }, 1e3).to({
                    scaleX: .5,
                    scaleY: .5
                }, 1e3), i._t.setPaused(!0), i._cb_onClick = e, i.interactive = !0, i
            }
            return n(e, t), e.prototype.initialize = function () {
                this._icon.texture = r.ALBUM_MAIN.getTexture(9), this._update(!1)
            }, e.prototype.activate = function () {
                1 != this.buttonMode && (this.buttonMode = !0, this.on(s.EventType.MOUSEOVER, this._onMouseOver), this.on(s.EventType.MOUSEOUT, this._onMouseOut), this.on(s.EventType.CLICK, this._onClick))
            }, e.prototype.deactivate = function () {
                this.buttonMode = !1, this.off(s.EventType.MOUSEOVER, this._onMouseOver), this.off(s.EventType.MOUSEOUT, this._onMouseOut), this.off(s.EventType.CLICK, this._onClick)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this.deactivate(), this._t.setPaused(!0), createjs.Tween.removeTweens(this._icon), this._bg = null, this._icon = null, this._t = null, this._cb_onClick = null
            }, e.prototype._update = function (t) {
                0 == t ? (this._bg.texture = r.ALBUM_MAIN.getTexture(2), this._icon.visible = !0, this._t.setPaused(!1)) : (this._bg.texture = r.ALBUM_MAIN.getTexture(10), this._icon.visible = !1, this._t.setPaused(!0))
            }, e
        }(PIXI.Container);
    e.MovieBtn = a
}