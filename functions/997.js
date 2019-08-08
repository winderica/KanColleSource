const function997 = function (t, e, i) {
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
        r = i(80),
        s = i(30),
        a = i(1),
        _ = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._flg = !1, e._overed = !1, e._updateTexture = function () {
                    e._flg = !e._flg, 1 == e._flg || 1 == e._overed ? e._icon.texture = s.SALLY_COMMON.getTexture(42) : e._icon.texture = s.SALLY_COMMON.getTexture(41)
                }, e._onMouseOver = function () {
                    e._overed = !0, e._updateTexture(), e._over.visible = !0
                }, e._onMouseOut = function () {
                    e._overed = !1, e._updateTexture(), e._over.visible = !1
                }, e._onClick = function () {
                    o.default.scene.change(24, new r.ItemSceneModel)
                }, e._icon = new PIXI.Sprite, e._over = new PIXI.Sprite, e._over.position.set(-187, -40), e._over.visible = !1, e._icon.interactive = !0, e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._icon.texture = s.SALLY_COMMON.getTexture(41), this._over.texture = s.SALLY_COMMON.getTexture(45), this.addChild(this._over), this.addChild(this._icon)
            }, e.prototype.activate = function () {
                var t = this;
                null == this._t && (this._icon.buttonMode = !0, this._icon.on(a.EventType.MOUSEOVER, this._onMouseOver), this._icon.on(a.EventType.MOUSEOUT, this._onMouseOut), this._icon.on(a.EventType.CLICK, this._onClick), this._t = createjs.Tween.get(this, {
                    loop: !0
                }).wait(300).call(function () {
                    t._updateTexture()
                }))
            }, e.prototype.deactivate = function () {
                this._icon.off(a.EventType.MOUSEOVER, this._onMouseOver), this._icon.off(a.EventType.MOUSEOUT, this._onMouseOut), this._icon.off(a.EventType.CLICK, this._onClick), null != this._t && (this._t.setPaused(!0), this._t = null), this._icon.buttonMode = !1
            }, e
        }(PIXI.Container);
    e.BtnShop2 = _
}