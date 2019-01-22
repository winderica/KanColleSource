const function1470 = function (t, e, i) {
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
    var o = i(6),
        r = i(9),
        s = i(36),
        a = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._anim2 = function () {
                    o.SE.play("222"), e._t = createjs.Tween.get(e._message).to({
                        x: 38,
                        alpha: 1
                    }, 200).to({
                        x: 0
                    }, 66).wait(700).to({
                        x: -38
                    }, 66).to({
                        x: -132,
                        alpha: 0
                    }, 200).call(function () {
                        e._t = null, e.emit("complete")
                    })
                }, e._bg = new PIXI.Sprite, e._bg.anchor.set(.5), e._bg.alpha = 0, e._message = new PIXI.Sprite, e._message.anchor.set(.5), e._message.alpha = 0, e._message.x = 132, e.addChild(e._bg), e.addChild(e._message), e
            }
            return n(e, t), e.prototype.initializeForShip = function (t) {
                void 0 === t && (t = !1), this._bg.texture = r.COMMON_MISC.getTexture(120);
                var e = 31;
                this._message.texture = s.BATTLE_RESULT_MAIN.getTexture(e), 1 == t && (this._message.y = -30, e = 25, this._sub_message = new PIXI.Sprite(s.BATTLE_RESULT_MAIN.getTexture(e)), this._sub_message.anchor.set(.5), this._sub_message.position.y = 80, this._message.addChild(this._sub_message))
            }, e.prototype.initializeForSlot = function () {
                this._bg.texture = r.COMMON_MISC.getTexture(120);
                this._message.texture = s.BATTLE_RESULT_MAIN.getTexture(26)
            }, e.prototype.initializeForUseitem = function (t) {
                this._bg.texture = r.COMMON_MISC.getTexture(120);
                var e = -1;
                60 == t ? e = 27 : 62 == t ? e = 28 : 68 == t ? e = 29 : 72 == t ? e = 30 : 85 != t && 86 != t && 87 != t && 88 != t || (e = 21), this._message.texture = -1 == e ? PIXI.Texture.EMPTY : s.BATTLE_RESULT_MAIN.getTexture(e)
            }, e.prototype.dispose = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e.prototype.play = function () {
                var t = this;
                if (null == this._t) {
                    var e = s.BATTLE_RESULT_MAIN.getTexture(24),
                        i = new PIXI.Sprite(e);
                    i.anchor.set(.5), i.alpha = 0, this.addChild(i), this._t = createjs.Tween.get(i).to({
                        alpha: 1
                    }, 200).call(function () {
                        t._bg.alpha = 1
                    }).to({
                        alpha: 0
                    }, 266).call(this._anim2)
                }
            }, e
        }(PIXI.Container);
    e.BonusTelop = a
}