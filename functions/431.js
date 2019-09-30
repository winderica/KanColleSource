const function431 = function (t, e, i) {
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
        r = i(0),
        s = i(6),
        a = i(10),
        _ = i(4),
        l = i(60),
        u = i(432),
        c = i(40),
        h = i(23),
        p = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.showButton = function () {
                    e.btn = new c.GearBtnHome, e.btn.position.set(1130, 648), e.btn.initialize(), e.btn.activate(), e.addChild(e.btn), e._whiteMask.interactive = !0
                }, e._CMB_getbg = new l.RarityBG, e._whiteMask = new PIXI.Graphics, e._whiteMask.beginFill(16777215), e._whiteMask.drawRect(0, 0, o.default.width, o.default.height), e._IsFinished = !1, e._IsAnime = !1, e.alpha = 0, e._whiteMask.interactive = !1, e._whiteMask.buttonMode = !1, e._whiteMask.alpha = 1, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "whiteMask", {
                get: function () {
                    return this._whiteMask
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "IsFinished", {
                get: function () {
                    return this._IsFinished
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "IsAnime", {
                get: function () {
                    return this._IsAnime
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.preload = function (t, e, i) {
                this._ItemID_before = t, this._ItemID_after = e;
                var n = r.default.model.slot.getMst(e),
                    o = n.rarity;
                this._CMB_getbg.initiailzeForSlotitem(o, function () {
                    var n = new h.SlotLoader;
                    n.add(t, "card"), n.add(e, "card"), n.load(function () {
                        null != i && i()
                    })
                })
            }, e.prototype.initialize = function (t) {
                this._scene = t, this._IsFinished = !1, this._IsAnime = !1, this._CMB_getbg.visible = !0, this._CMB_getbg.alpha = .01, this._CMB_getbg.position.set(0, 0), this.addChild(this._CMB_getbg), this._ItemCard_after = new PIXI.Sprite, this._ItemCard_after_texture = r.default.resources.getSlotitem(this._ItemID_after, "card"), this._ItemCard_after.texture = this._ItemCard_after_texture, this._ItemCard_after.visible = !0, this._ItemCard_after.alpha = .01, this._ItemCard_after.anchor.set(.5, .5), this._ItemCard_after.position.set(600, 243), this._ItemCard_after.width = 234, this._ItemCard_after.height = 234, this.addChild(this._ItemCard_after), this._ItemCard_before = new PIXI.Sprite, this._ItemCard_before_texture = r.default.resources.getSlotitem(this._ItemID_before, "card"), this._ItemCard_before.texture = this._ItemCard_before_texture, this._ItemCard_before.visible = !0, this._ItemCard_before.alpha = .01, this._ItemCard_before.anchor.set(.5, .5), this._ItemCard_before.position.set(600, 525), this.addChild(this._ItemCard_before), this._revampRingParticleLayer = new u.RevampRingParticleLayer, this.addChild(this._revampRingParticleLayer), this._CMM_mes_j_bg = new PIXI.Sprite(a.COMMON_MISC.getTexture(120)), this._CMM_mes_j_bg.visible = !0, this._CMM_mes_j_bg.alpha = .01, this._CMM_mes_j_bg.position.set(0, 720), this.addChild(this._CMM_mes_j_bg), this._message = new _.TextBox(27, 16777215), this._message.visible = !0, this._message.alpha = .01, this._message.text = "", this._message.position.set(600 - Math.floor(this._message.width / 2), 645), this.addChild(this._message), this._whiteMask.interactive = !1, this._whiteMask.buttonMode = !1, this.addChild(this._whiteMask)
            }, e.prototype._scene0 = function () {
                var t = this;
                this._IsAnime = !0, this._tween = createjs.Tween.get(this).wait(10).to({
                    alpha: 1
                }, 1e3).call(function () {
                    t._scene.visible = !1, t._CMB_getbg.alpha = 1, t._ItemCard_before.alpha = 1, t._ItemCard_after.alpha = .01, t._CMM_mes_j_bg.alpha = 1, t._message.alpha = .01, t._tween = null, t._tween2 = createjs.Tween.get(t._whiteMask).wait(100).to({
                        alpha: .75
                    }, 250).call(function () {
                        t._tween2 = null, t._scene1()
                    })
                })
            }, e.prototype._scene1 = function () {
                var t = this;
                this._whiteMask.interactive = !0, this._tween2 = createjs.Tween.get(this._whiteMask).to({
                    alpha: 0
                }, 750).call(function () {
                    t._tween2 = null
                }), this._tween = createjs.Tween.get(this._ItemCard_before).to({
                    y: 243
                }, 1e3).wait(1e3).to({
                    x: 408,
                    width: 351,
                    height: 351
                }, 1e3, createjs.Ease.sineOut).call(function () {
                    t._ItemCard_before.texture = t._ItemCard_after_texture
                }).to({
                    x: 792
                }, 0).to({
                    x: 600,
                    width: 390,
                    height: 390
                }, 1e3, createjs.Ease.sineIn).call(function () {
                    t._tween = null
                }), this._tween1 = createjs.Tween.get(this._ItemCard_after).wait(1e3).wait(1e3).to({
                    x: 792,
                    width: 351,
                    height: 351,
                    alpha: 1
                }, 1e3, createjs.Ease.sineOut).call(function () {
                    t._ItemCard_after.texture = t._ItemCard_before_texture
                }).to({
                    x: 408
                }, 0).to({
                    x: 600,
                    width: 234,
                    height: 234,
                    alpha: 0
                }, 1e3, createjs.Ease.sineIn).call(function () {
                    t._tween1 = null
                }), this._tween2 = createjs.Tween.get(this._CMM_mes_j_bg).wait(500).to({
                    y: 480
                }, 500).call(function () {
                    t._tween2 = null, t._message.text = " \u88c5\u5099\u6539\u4fee\u4e2d\u2026", t._message.position.set(600 - Math.floor(t._message.width / 2), 600), t._tween2 = createjs.Tween.get(t._message).to({
                        alpha: 1
                    }, 250).wait(2500).to({
                        alpha: 0
                    }, 250).call(function () {
                        var e = r.default.model.slot.getMst(t._ItemID_after),
                            i = "";
                        switch (e.mstID) {
                            case 344:
                                i = "\n"
                        }
                        t._message.text = e.name + "\u306b" + i + "\u88c5\u5099\u304c\u6539\u4fee\u66f4\u65b0\u3055\u308c\u307e\u3057\u305f\uff01", t._message.position.set(600 - Math.floor(t._message.width / 2), 600), t._revampRingParticleLayer.initialize()
                    }).to({
                        alpha: 1
                    }, 250).wait(1e3).call(function () {
                        r.default.sound.voice.play("9999", 308), s.SE.play("210")
                    }).wait(5e3).call(function () {
                        t._tween2 = null, t.showButton(), t._IsAnime = !1
                    })
                })
            }, e.prototype.dispose = function () {
                var t = this;
                this._revampRingParticleLayer.dispose(), null != this.btn && (this.btn.dispose(), this.btn = null), this._tween = createjs.Tween.get(this).wait(10).call(function () {
                    t._scene.visible = !0
                }).to({
                    alpha: 0
                }, 500).call(function () {
                    t.removeChildren(), t._message.destroy(), t._message = null, t._tween = null, t._whiteMask.alpha = 1, t._whiteMask.interactive = !1, t._IsFinished = !0, t._IsAnime = !1
                })
            }, e
        }(PIXI.Container);
    e.RevampItemChange = p
}