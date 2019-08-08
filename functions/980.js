const function980 = function (t, e, i) {
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
    var o = i(43),
        r = i(1),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._onSelect = function (t) {
                    null != e._cb_onSelect && e._cb_onSelect(t)
                }, e._onBack = function () {
                    null != e._cb_onBack && e._cb_onBack()
                }, e._title = new PIXI.Sprite, e._title.position.set(-350, -201), e.addChild(e._title), e._btn_kou = new _(4, e._onSelect), e._btn_kou.position.set(-353, -53), e._btn_otsu = new _(3, e._onSelect), e._btn_otsu.position.set(-183, -53), e._btn_hei = new _(2, e._onSelect), e._btn_hei.position.set(-15, -53), e._btn_tei = new _(1, e._onSelect), e._btn_tei.position.set(152, -53), e._btn_back = new u(e._onBack), e.addChild(e._btn_kou), e.addChild(e._btn_otsu), e.addChild(e._btn_hei), e.addChild(e._btn_tei), e.addChild(e._btn_back), e
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                this._title.texture = o.SALLY_EVENT.getTexture(34), this._btn_kou.initialize(), this._btn_kou.enabled = this._getEnabled(4, t, e), this._btn_otsu.initialize(), this._btn_otsu.enabled = this._getEnabled(3, t, e), this._btn_hei.initialize(), this._btn_hei.enabled = this._getEnabled(2, t, e), this._btn_tei.initialize(), this._btn_tei.enabled = this._getEnabled(1, t, e), this._btn_back.initialize(t), this._btn_back.x = 263 - this._btn_back.width / 2, this._btn_back.y = 152 - this._btn_back.height / 2
            }, e.prototype.activate = function (t, e) {
                this._cb_onSelect = t, this._cb_onBack = e, this._btn_kou.activate(), this._btn_otsu.activate(), this._btn_hei.activate(), this._btn_tei.activate(), this._btn_back.activate()
            }, e.prototype.deactivate = function () {
                this._btn_kou.deactivate(), this._btn_otsu.deactivate(), this._btn_hei.deactivate(), this._btn_tei.deactivate(), this._btn_back.deactivate()
            }, e.prototype.dispose = function () {
                this._btn_kou.dispose(), this._btn_otsu.dispose(), this._btn_hei.dispose(), this._btn_tei.dispose(), this._btn_back.dispose(), this._title = null, this._btn_kou = null, this._btn_otsu = null, this._btn_hei = null, this._btn_tei = null, this._cb_onSelect = null, this._cb_onBack = null
            }, e.prototype.showCircle = function (t, e) {
                void 0 === e && (e = null), this._getBtn(t).showCircle(e)
            }, e.prototype._getBtn = function (t) {
                return t == this._btn_kou.type ? this._btn_kou : t == this._btn_otsu.type ? this._btn_otsu : t == this._btn_hei.type ? this._btn_hei : t == this._btn_tei.type ? this._btn_tei : null
            }, e.prototype._getEnabled = function (t, e, i) {
                return t != e && !(i.indexOf(t) < 0)
            }, e
        }(PIXI.Container);
    e.OperationSelectView = s;
    var a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._enabled = !0, i._type = e, i._content = new PIXI.Sprite, i.addChild(i._content), i._label = new PIXI.Sprite, i.addChild(i._label), i._circle = new PIXI.Sprite, i._circle.position.set(-32, -39), i._circle.alpha = 0, i._circle.visible = !1, i.addChild(i._circle), i
            }
            return n(e, t), Object.defineProperty(e.prototype, "type", {
                get: function () {
                    return this._type
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                this._update(!1), this._label.texture = this._getTextureLabel(), this._circle.texture = o.SALLY_EVENT.getTexture(50)
            }, e.prototype._update = function (t) {
                0 == this._enabled ? this._content.texture = this._getTextureOff() : this._content.texture = 1 == t ? this._getTextureOn() : this._getTexture()
            }, e.prototype._getTexture = function () {
                return 4 == this._type ? o.SALLY_EVENT.getTexture(47) : 3 == this._type ? o.SALLY_EVENT.getTexture(51) : 2 == this._type ? o.SALLY_EVENT.getTexture(44) : 1 == this._type ? o.SALLY_EVENT.getTexture(54) : PIXI.Texture.EMPTY
            }, e.prototype._getTextureOn = function () {
                return 4 == this._type ? o.SALLY_EVENT.getTexture(49) : 3 == this._type ? o.SALLY_EVENT.getTexture(53) : 2 == this._type ? o.SALLY_EVENT.getTexture(46) : 1 == this._type ? o.SALLY_EVENT.getTexture(56) : PIXI.Texture.EMPTY
            }, e.prototype._getTextureOff = function () {
                return 4 == this._type ? o.SALLY_EVENT.getTexture(48) : 3 == this._type ? o.SALLY_EVENT.getTexture(52) : 2 == this._type ? o.SALLY_EVENT.getTexture(45) : 1 == this._type ? o.SALLY_EVENT.getTexture(55) : PIXI.Texture.EMPTY
            }, e.prototype._getTextureLabel = function () {
                return 4 == this._type ? (this._label.position.set(0, 111), o.SALLY_EVENT.getTexture(40)) : 3 == this._type ? (this._label.position.set(6, 111), o.SALLY_EVENT.getTexture(39)) : 2 == this._type ? (this._label.position.set(23, 111), o.SALLY_EVENT.getTexture(38)) : 1 == this._type ? (this._label.position.set(0, 111), o.SALLY_EVENT.getTexture(41)) : PIXI.Texture.EMPTY
            }, e
        }(PIXI.Container),
        _ = function (t) {
            function e(e, i) {
                var n = t.call(this, e) || this;
                return n._onMouseOver = function () {
                    n._update(!0)
                }, n._onMouseOut = function () {
                    n._update(!1)
                }, n._onClick = function () {
                    null != n._cb_onClick && n._cb_onClick(n.type)
                }, n._cb_onClick = i, n
            }
            return n(e, t), Object.defineProperty(e.prototype, "enabled", {
                get: function () {
                    return this._enabled
                },
                set: function (t) {
                    this._enabled != t && (1 == t ? 1 == this.interactive && this._activate() : this.deactivate()), this._enabled = t, this._update(!1)
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.activate = function () {
                1 != this._content.interactive && (this._content.interactive = !0, this._activate())
            }, e.prototype.deactivate = function () {
                this._content.off(r.EventType.MOUSEOVER, this._onMouseOver), this._content.off(r.EventType.MOUSEOUT, this._onMouseOut), this._content.off(r.EventType.CLICK, this._onClick), this._content.interactive = !1, this._content.buttonMode = !1
            }, e.prototype.dispose = function () {
                this.deactivate()
            }, e.prototype.showCircle = function (t) {
                if (void 0 === t && (t = null), 1 == this._circle.visible) return void(null != t && t());
                this._circle.alpha = 0, this._circle.visible = !0;
                var e = createjs.Tween.get(this._circle).to({
                    alpha: 1
                }, 500).wait(500);
                null != t && e.call(t)
            }, e.prototype._activate = function () {
                0 != this._enabled && (this._content.on(r.EventType.MOUSEOVER, this._onMouseOver), this._content.on(r.EventType.MOUSEOUT, this._onMouseOut), this._content.on(r.EventType.CLICK, this._onClick), this._content.buttonMode = !0)
            }, e
        }(a),
        u = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._onMouseOver = function () {
                    i._update(!0)
                }, i._onMouseOut = function () {
                    i._update(!1)
                }, i._onClick = function () {
                    null != i._cb_onClick && i._cb_onClick()
                }, i._cb_onClick = e, i
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this._selected_type = t, this._update(!1)
            }, e.prototype.activate = function () {
                1 != this.interactive && (this.on(r.EventType.MOUSEOVER, this._onMouseOver), this.on(r.EventType.MOUSEOUT, this._onMouseOut), this.once(r.EventType.CLICK, this._onClick), this.interactive = !0, this.buttonMode = !0)
            }, e.prototype.deactivate = function () {
                this.off(r.EventType.MOUSEOVER, this._onMouseOver), this.off(r.EventType.MOUSEOUT, this._onMouseOut), this.off(r.EventType.CLICK, this._onClick), this.interactive = !1, this.buttonMode = !1
            }, e.prototype.dispose = function () {
                this.deactivate(), this._stoptAnim()
            }, e.prototype._update = function (t) {
                1 == t ? (this._stoptAnim(), 0 == this._selected_type ? this.texture = o.SALLY_EVENT.getTexture(37) : this.texture = o.SALLY_EVENT.getTexture(43)) : 0 == this._selected_type ? (this.texture = o.SALLY_EVENT.getTexture(36), this._startAnim()) : this.texture = o.SALLY_EVENT.getTexture(42)
            }, e.prototype._startAnim = function () {
                null == this._t && (this.alpha = 1, this._t = createjs.Tween.get(this, {
                    loop: !0
                }).to({
                    alpha: .5
                }, 700).wait(100).to({
                    alpha: 1
                }, 700).wait(800))
            }, e.prototype._stoptAnim = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null, this.alpha = 1)
            }, e
        }(PIXI.Sprite)
}