const function1351 = function (t, e, i) {
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
    var o = i(18),
        r = i(12),
        s = i(16),
        a = i(184),
        _ = i(142),
        l = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._bg = new o.FadeBox(.7, 8900331), e._bg.hide(0), e.addChild(e._bg), e._chara = new PIXI.Container, e.addChild(e._chara), e._telop_bg = new a.TelopBG, e._telop_bg.position.set(600, 150), e._telop_bg.alpha = 0, e.addChild(e._telop_bg), e._slot_bg1 = new a.TelopBG, e.addChild(e._slot_bg1), e._slot1 = new r.Sprite, e._slot1.anchor.set(.5), e._slot1.scale.set(.9), e._slot1.alpha = 0, e.addChild(e._slot1), e._slot_bg2 = new a.TelopBG, e.addChild(e._slot_bg2), e._slot2 = new r.Sprite, e._slot2.anchor.set(.5), e._slot2.scale.set(.9), e._slot2.alpha = 0, e._slot1_text = new r.Sprite, e._slot1_text.scale.set(.76), e._slot1_text.alpha = 0, e._slot2_text = new r.Sprite, e._slot2_text.scale.set(.76), e._slot2_text.alpha = 0, e._telop = new r.Sprite, e._telop.anchor.set(.5), e._telop.position.set(600, 150), e._telop.alpha = 0, e._plane = new _.Plane(.88), e.addChild(e._slot2), e.addChild(e._slot1_text), e.addChild(e._slot2_text), e.addChild(e._telop), e.addChild(e._plane);
                var i = new PIXI.Graphics;
                return i.beginFill(0), i.drawRect(0, 321, 1200, 138), i.endFill(), e.addChild(i), e._slot1.mask = i, i = new PIXI.Graphics, i.beginFill(0), i.drawRect(0, 530, 1200, 138), i.endFill(), e.addChild(i), e._slot2.mask = i, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "bg", {
                get: function () {
                    return this._bg
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "chara", {
                get: function () {
                    return this._chara
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "telop_bg", {
                get: function () {
                    return this._telop_bg
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "slot_bg1", {
                get: function () {
                    return this._slot_bg1
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "slot1", {
                get: function () {
                    return this._slot1
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "slot_bg2", {
                get: function () {
                    return this._slot_bg2
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "slot2", {
                get: function () {
                    return this._slot2
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "slot1_text", {
                get: function () {
                    return this._slot1_text
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "slot2_text", {
                get: function () {
                    return this._slot2_text
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "telop", {
                get: function () {
                    return this._telop
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "plane", {
                get: function () {
                    return this._plane
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t, e) {
                switch (this._telop_bg.initialize(t, !0), this._slot_bg1.initialize(t, !0), this._slot_bg2.initialize(t, !0), 1 == t ? (this._slot_bg1.position.set(0 - this._slot_bg1.width / 2, 390), this._slot_bg2.position.set(1200 + this._slot_bg2.width / 2, 600)) : (this._slot_bg1.position.set(1200 + this._slot_bg1.width / 2, 390), this._slot_bg2.position.set(0 - this._slot_bg2.width / 2, 600)), e) {
                    case 1:
                        this._telop.texture = s.BATTLE_MAIN.getTexture(141);
                        break;
                    case 2:
                        this._telop.texture = s.BATTLE_MAIN.getTexture(135);
                        break;
                    default:
                        this._telop.texture = s.BATTLE_MAIN.getTexture(139)
                }
            }, e.prototype.dispose = function () {
                this.removeChildren()
            }, e
        }(PIXI.Container);
    e.CutinDanchakuCanvas = l
}