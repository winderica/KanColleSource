const function1291 = function (t, e, i) {
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
    var o = i(5),
        r = i(17),
        s = i(4),
        a = i(30),
        _ = i(42),
        l = i(20),
        u = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.SPACE = 10, e._bg = new PIXI.Sprite, e._bg.position.set(35, 35), e._icon = new PIXI.Sprite, e._icon.anchor.set(1), e._icon.position.set(o.default.width / 2, 82), e._text = new s.TextBox(30, 16774898), e._text.anchor.set(0, 0), e._text.position.set(o.default.width / 2, 48), e.addChild(e._bg), e.addChild(e._icon), e.addChild(e._text), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "bg", {
                get: function () {
                    return this._bg
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "icon", {
                get: function () {
                    return this._icon
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "text", {
                get: function () {
                    return this._text
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                this._bg.texture = l.MAP_COMMON.getTexture(25)
            }, e.prototype.update = function (t, e) {
                void 0 === e && (e = ""), t == r.EVENT_AREA_ID ? this._updateForEventMap(e) : this._update(t, e), this._text.position.x = o.default.width / 2 - Math.floor(this._text.width / 2) + this.SPACE + this.icon.width, this.icon.position.set(this._text.x - this.SPACE, 82)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._text.destroy()
            }, e.prototype._update = function (t, e) {
                void 0 === e && (e = "");
                var i;
                switch (t) {
                    case 1:
                        i = a.SALLY_COMMON.getTexture(1);
                        break;
                    case 2:
                        i = a.SALLY_COMMON.getTexture(3);
                        break;
                    case 3:
                        i = a.SALLY_COMMON.getTexture(5);
                        break;
                    case 4:
                        i = a.SALLY_COMMON.getTexture(9);
                        break;
                    case 5:
                        i = a.SALLY_COMMON.getTexture(11);
                        break;
                    case 6:
                        i = a.SALLY_COMMON.getTexture(13);
                        break;
                    case 7:
                        i = a.SALLY_COMMON.getTexture(7);
                        break;
                    default:
                        i = PIXI.Texture.EMPTY
                }
                this._icon.texture = i, this._text.text = e
            }, e.prototype._updateForEventMap = function (t) {
                void 0 === t && (t = "");
                this._icon.texture = _.SALLY_EVENT.getTexture(0), this._text.text = t
            }, e
        }(PIXI.Container);
    e.CompUpperBar = u
}