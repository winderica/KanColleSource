const function1130 = function (t, e, i) {
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
    var o = i(30),
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
                    null != i._cb_onClick && i._cb_onClick(t, i._voice_id)
                }, i._bg = new PIXI.Sprite, i._bg.position.set(0, 0), i.addChild(i._bg), i._icon = new o.Sprite, i._icon.position.set(18.5, 18.5), i._icon.anchor.set(.5), i.addChild(i._icon), i._category = new PIXI.Sprite, i._category.position.set(0, 0), i.addChild(i._category), i._t = createjs.Tween.get(i._icon, {
                    loop: !0
                }).to({
                    scaleX: 1.5,
                    scaleY: 1.5
                }, 1e3).to({
                    scaleX: 1,
                    scaleY: 1
                }, 1e3), i._t.setPaused(!0), i._cb_onClick = e, i._bg.interactive = !0, i
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this._voice_id = null === t ? -1 : t.api_voice_id, this._icon.texture = r.ALBUM_MAIN.getTexture(12);
                var e = 4;
                this._category.position.set(23, 20), null !== t && 2 === t.api_icon_id && (e = 3, this._category.position.set(20, 20)), this._category.texture = r.ALBUM_MAIN.getTexture(e), this._update(!1)
            }, e.prototype._update = function (t) {
                0 == t ? (this._bg.texture = r.ALBUM_MAIN.getTexture(1), this._icon.visible = !0, this._t.setPaused(!1)) : (this._bg.texture = r.ALBUM_MAIN.getTexture(13), this._icon.visible = !1, this._t.setPaused(!0))
            }, e.prototype.activate = function () {
                1 != this.buttonMode && (this._bg.buttonMode = !0, this._bg.on(s.EventType.MOUSEOVER, this._onMouseOver), this._bg.on(s.EventType.MOUSEOUT, this._onMouseOut), this._bg.on(s.EventType.CLICK, this._onClick))
            }, e.prototype.deactivate = function () {
                this._bg.buttonMode = !1, this._bg.off(s.EventType.MOUSEOVER, this._onMouseOver), this._bg.off(s.EventType.MOUSEOUT, this._onMouseOut), this._bg.off(s.EventType.CLICK, this._onClick)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this.deactivate(), this._t.setPaused(!0), createjs.Tween.removeTweens(this._icon), this._bg = null, this._icon = null, this._category = null, this._t = null, this._cb_onClick = null, this._voice_id = null
            }, e
        }(PIXI.Container);
    e.extraVoiceBtn = a
}