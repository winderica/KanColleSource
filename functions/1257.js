const function1257 = function (t, e, i) {
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
    var o = i(125), r = i(172), s = i(1), a = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._enabled = !1, e._bg = new PIXI.Sprite, e.addChild(e._bg), e._btn = new _, e._btn.position.set(17, 143), e.addChild(e._btn), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "enabled", {
            get: function () {
                return this._enabled
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function (t, e, i, n) {
            this._bg.texture = this._getTexture(t, e), this._enabled = !(13 == e && i < 5) && !(14 == e && i < 4), 1 == this._enabled ? this._btn.initialize(e, n) : this.visible = !1
        }, e.prototype.activate = function () {
            1 == this._enabled && this._btn.activate()
        }, e.prototype.deactivate = function () {
            this._btn.deactivate()
        }, e.prototype.dispose = function () {
            this._btn.dispose()
        }, e.prototype._getTexture = function (t, e) {
            switch (t) {
                case 1:
                    switch (e) {
                        case 11:
                            return r.SALLY_JIN.getTexture(14);
                        case 12:
                            return r.SALLY_JIN.getTexture(15);
                        case 13:
                            return r.SALLY_JIN.getTexture(16);
                        case 14:
                            return r.SALLY_JIN.getTexture(17)
                    }
                    break;
                case 2:
                    switch (e) {
                        case 11:
                            return r.SALLY_JIN.getTexture(34);
                        case 12:
                            return r.SALLY_JIN.getTexture(35);
                        case 13:
                            return r.SALLY_JIN.getTexture(36);
                        case 14:
                            return r.SALLY_JIN.getTexture(37)
                    }
                    break;
                case 3:
                    switch (e) {
                        case 11:
                            return r.SALLY_JIN.getTexture(39);
                        case 12:
                            return r.SALLY_JIN.getTexture(40);
                        case 13:
                            return r.SALLY_JIN.getTexture(41);
                        case 14:
                            return r.SALLY_JIN.getTexture(42)
                    }
            }
            return PIXI.Texture.EMPTY
        }, e
    }(PIXI.Container);
    e.FormationBoxCombined = a;
    var _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._onMouseOver = function () {
                e._update(!0)
            }, e._onMouseOut = function () {
                e._update(!1)
            }, e._onClick = function () {
                null != e._cb_onClick && e._cb_onClick(e._type)
            }, e.interactive = !0, e
        }

        return n(e, t), e.prototype.initialize = function (t, e) {
            this._type = t, this._cb_onClick = e, this._update(!1)
        }, e.prototype.activate = function () {
            if (1 != this.buttonMode) {
                this.buttonMode = !0, this.on(s.EventType.MOUSEOVER, this._onMouseOver), this.on(s.EventType.MOUSEOUT, this._onMouseOut), this.on(s.EventType.CLICK, this._onClick);
                var t = o.InteractiveUtil.isOnMouse(this);
                this._update(t)
            }
        }, e.prototype.deactivate = function () {
            this.buttonMode = !1, this.off(s.EventType.MOUSEOVER, this._onMouseOver), this.off(s.EventType.MOUSEOUT, this._onMouseOut), this.off(s.EventType.CLICK, this._onClick)
        }, e.prototype.dispose = function () {
            1 == this.buttonMode && this.deactivate(), this._cb_onClick = null
        }, e.prototype._update = function (t) {
            this.texture = 0 == t ? this._getTexture() : this._getTextureOn()
        }, e.prototype._getTexture = function () {
            switch (this._type) {
                case 11:
                    return r.SALLY_JIN.getTexture(19);
                case 12:
                    return r.SALLY_JIN.getTexture(21);
                case 13:
                    return r.SALLY_JIN.getTexture(23);
                case 14:
                    return r.SALLY_JIN.getTexture(25);
                default:
                    return PIXI.Texture.EMPTY
            }
        }, e.prototype._getTextureOn = function () {
            switch (this._type) {
                case 11:
                    return r.SALLY_JIN.getTexture(20);
                case 12:
                    return r.SALLY_JIN.getTexture(22);
                case 13:
                    return r.SALLY_JIN.getTexture(24);
                case 14:
                    return r.SALLY_JIN.getTexture(26);
                default:
                    return PIXI.Texture.EMPTY
            }
        }, e
    }(PIXI.Sprite)
}