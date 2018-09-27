const function702 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0), o = i(5), r = i(18), s = i(17), a = i(6), _ = i(703), u = i(315), l = i(316), c = i(317),
        h = i(157), p = function () {
            function t(t) {
                var e = this;
                switch (this._gScale = .5, this.endUpdate = function () {
                    e.hide(), null != e._callback && e._callback()
                }, this._OrganizeView = t, this._mainLayer = new PIXI.Container, r.MAMIYA_IRAKO_SEASON) {
                    case 2:
                        this._kiraPos_m = [new PIXI.Point(586, 40), new PIXI.Point(544, 100), new PIXI.Point(652, 114), new PIXI.Point(534, 234), new PIXI.Point(613, 276), new PIXI.Point(681, 241), new PIXI.Point(534, 366), new PIXI.Point(652, 378), new PIXI.Point(562, 439), new PIXI.Point(667, 474), new PIXI.Point(526, 544), new PIXI.Point(573, 690)], this._kiraPos_i = [new PIXI.Point(550, 66), new PIXI.Point(504, 82), new PIXI.Point(615, 127), new PIXI.Point(453, 226), new PIXI.Point(570, 261), new PIXI.Point(669, 207), new PIXI.Point(528, 348), new PIXI.Point(708, 375), new PIXI.Point(570, 463), new PIXI.Point(643, 556), new PIXI.Point(544, 589), new PIXI.Point(520, 693)], this._gScale = .4;
                        break;
                    case 4:
                        this._kiraPos_m = [new PIXI.Point(615, 30), new PIXI.Point(544, 100), new PIXI.Point(652, 114), new PIXI.Point(534, 234), new PIXI.Point(613, 276), new PIXI.Point(681, 241), new PIXI.Point(534, 366), new PIXI.Point(652, 378), new PIXI.Point(562, 439), new PIXI.Point(622, 474), new PIXI.Point(555, 544), new PIXI.Point(600, 690)], this._kiraPos_i = [new PIXI.Point(550, 66), new PIXI.Point(504, 82), new PIXI.Point(615, 127), new PIXI.Point(453, 226), new PIXI.Point(570, 261), new PIXI.Point(669, 207), new PIXI.Point(543, 348), new PIXI.Point(633, 375), new PIXI.Point(570, 463), new PIXI.Point(465, 556), new PIXI.Point(559, 589), new PIXI.Point(580, 693)], this._gScale = .4;
                        break;
                    default:
                        this._kiraPos_m = [new PIXI.Point(586, 40), new PIXI.Point(544, 100), new PIXI.Point(652, 114), new PIXI.Point(534, 234), new PIXI.Point(613, 276), new PIXI.Point(681, 241), new PIXI.Point(534, 366), new PIXI.Point(652, 378), new PIXI.Point(502, 439), new PIXI.Point(628, 474), new PIXI.Point(526, 544), new PIXI.Point(543, 675)], this._kiraPos_i = [new PIXI.Point(550, 66), new PIXI.Point(504, 82), new PIXI.Point(615, 127), new PIXI.Point(453, 226), new PIXI.Point(570, 261), new PIXI.Point(669, 207), new PIXI.Point(498, 348), new PIXI.Point(693, 375), new PIXI.Point(492, 463), new PIXI.Point(583, 556), new PIXI.Point(499, 589), new PIXI.Point(415, 693)], this._gScale = .5
                }
            }

            return Object.defineProperty(t.prototype, "mainLayer", {
                get: function () {
                    return this._mainLayer
                }, enumerable: !0, configurable: !0
            }), t.prototype.dispose = function () {
                this._mainLayer.removeChildren(0, this._mainLayer.children.length), this._mainLayer = null, this._callback = null, this._gScale = null, this._kiraPos_m = null, this._kiraPos_i = null, this._get_flash = null, this._white = null, this._txt_supply = null, this._kirakira = null, this._ship = null
            }, t.prototype.preLoad = function (t) {
                var e = this, i = new s.UIImageLoader("organize");
                i.add("organize_mamiya_animation_common.json"), i.load(function () {
                    n.default.settings.renderer.plugins.prepare.upload(_.ORGANIZE_MAMIYA_ANIMATION_COMMON.getTexture(0).baseTexture, function () {
                        var i = new s.UIImageLoader("organize");
                        switch (r.MAMIYA_IRAKO_SEASON) {
                            case 2:
                                i.add("organize_mamiya_animation_xmas.json");
                                break;
                            case 4:
                                i.add("organize_mamiya_animation_summer.json");
                                break;
                            default:
                                i.add("organize_mamiya_animation_default.json")
                        }
                        i.load(function () {
                            var i;
                            switch (r.MAMIYA_IRAKO_SEASON) {
                                case 2:
                                    i = l.ORGANIZE_MAMIYA_ANIMATION_XMAS.getTexture(0).baseTexture;
                                    break;
                                case 4:
                                    i = c.ORGANIZE_MAMIYA_ANIMATION_SUMMER.getTexture(0).baseTexture;
                                    break;
                                default:
                                    i = u.ORGANIZE_MAMIYA_ANIMATION_DEFAULT.getTexture(0).baseTexture
                            }
                            n.default.settings.renderer.plugins.prepare.upload(i, function () {
                                e._get_flash = new PIXI.Sprite(_.ORGANIZE_MAMIYA_ANIMATION_COMMON.getTexture(0)), e._get_flash.visible = !1, e._get_flash.anchor.set(.5), e._get_flash.position.set(o.default.width / 2, o.default.height / 2), e._white = new PIXI.Graphics, e._white.visible = !1, e._white.beginFill(16777215, 1), e._white.drawRect(0, 0, o.default.width, o.default.height), e._white.endFill(), e._txt_supply = new PIXI.Sprite(_.ORGANIZE_MAMIYA_ANIMATION_COMMON.getTexture(2)), e._txt_supply.visible = !1, e._txt_supply.anchor.set(.5), e._ship = [];
                                var i = new PIXI.Sprite(h.OrganizeConst.getMamiyaOption().res_mamiya);
                                i.visible = !1, i.anchor.set(.5), e._ship.push(i);
                                var n = new PIXI.Sprite(h.OrganizeConst.getMamiyaOption().res_irako);
                                n.visible = !1, n.anchor.set(.5), e._ship.push(n), e._kirakira = [];
                                for (var r = 0; r < h.OrganizeConst.MAMIYA_MAX_EFFECT; r++) {
                                    var s = new PIXI.Sprite(_.ORGANIZE_MAMIYA_ANIMATION_COMMON.getTexture(1));
                                    s.anchor.set(.5), e._kirakira.push(s)
                                }
                                e._mainLayer.addChild(e._get_flash, e._white, e._ship[0], e._ship[1], e._txt_supply);
                                for (var r = 0; r < h.OrganizeConst.MAMIYA_MAX_EFFECT; r++) e._kirakira[r].visible = !1, e._mainLayer.addChild(e._kirakira[r]);
                                null != t && t()
                            })
                        })
                    })
                })
            }, t.prototype.play = function (t, e, i) {
                var n = this;
                this._txt_supply.position.set(1600, 487), this._ship[0].position.set(600, 1100), this._ship[1].position.set(600, 1100), this._ship[0].alpha = 0, this._ship[1].alpha = 0, this._ship[0].scale.set(3), this._ship[1].scale.set(3), this._white.alpha = 0, this._get_flash.alpha = 0, this._get_flash.scale.set(.3);
                for (var o = 0; o < h.OrganizeConst.MAMIYA_MAX_EFFECT; o++) this._kirakira[o].scale.set(0);
                var r = function () {
                    switch (t) {
                        case 1:
                            h.OrganizeConst.getMamiyaOption().playVoiceAnimationMamiya();
                            break;
                        case 2:
                            h.OrganizeConst.getMamiyaOption().playVoiceAnimationIrako();
                            break;
                        case 3:
                            h.OrganizeConst.getMamiyaOption().playVoiceAnimationMamiyaIrako()
                    }
                };
                this._callback = i;
                var s, _, u;
                switch (t) {
                    case 1:
                    case 2:
                        s = function () {
                            n._ship[t - 1].visible = !0, createjs.Tween.get(n._ship[t - 1].scale).wait(400).to({
                                x: n._gScale,
                                y: n._gScale
                            }, 500), createjs.Tween.get(n._ship[t - 1]).wait(400).to({ y: 360, alpha: 1 }, 500)
                        }, _ = function () {
                            for (var e = 0; e < h.OrganizeConst.MAMIYA_MAX_EFFECT / 2; e++) {
                                var i = 1 == t ? n._kiraPos_m[e] : n._kiraPos_i[e];
                                n._kirakira[e].position.set(i.x, i.y), n._kirakira[e].visible = !0, createjs.Tween.get(n._kirakira[e].scale).wait(100 * e).to({
                                    x: 1,
                                    y: 1
                                }, 200).to({ x: 0, y: 0 }, 200)
                            }
                        }, u = function () {
                            for (var e = 0; e < h.OrganizeConst.MAMIYA_MAX_EFFECT / 2; e++) n._kirakira[e].visible = !1;
                            createjs.Tween.get(n._ship[t - 1].scale).to({
                                x: 3,
                                y: 3
                            }, 1e3), createjs.Tween.get(n._ship[t - 1]).to({
                                x: 600,
                                y: 1100,
                                alpha: 0
                            }, 1e3).set({ visible: !1 })
                        };
                        break;
                    case 3:
                        this._ship[0].visible = !0, this._ship[1].visible = !0, this._ship[0].position.set(25, 1100), this._ship[1].position.set(1275, 1100), s = function () {
                            createjs.Tween.get(n._ship[0].scale).wait(400).to({
                                x: n._gScale,
                                y: n._gScale
                            }, 500), createjs.Tween.get(n._ship[1].scale).wait(400).to({
                                x: n._gScale,
                                y: n._gScale
                            }, 500), createjs.Tween.get(n._ship[0]).wait(400).to({
                                x: 420,
                                y: 360,
                                alpha: 1
                            }, 500), createjs.Tween.get(n._ship[1]).wait(400).to({ x: 780, y: 360, alpha: 1 }, 500)
                        }, _ = function () {
                            for (var t = 0; t < h.OrganizeConst.MAMIYA_MAX_EFFECT / 2; t++) n._kirakira[t].position.set(n._kiraPos_m[t].x - 195, n._kiraPos_m[t].y), n._kirakira[t].visible = !0, createjs.Tween.get(n._kirakira[t].scale).wait(100 * t).to({
                                x: 1,
                                y: 1
                            }, 200).to({ x: 0, y: 0 }, 200);
                            for (var t = h.OrganizeConst.MAMIYA_MAX_EFFECT / 2; t < h.OrganizeConst.MAMIYA_MAX_EFFECT; t++) n._kirakira[t].position.set(n._kiraPos_i[t - 12].x + 195, n._kiraPos_i[t - 12].y), n._kirakira[t].visible = !0, createjs.Tween.get(n._kirakira[t].scale).wait(100 * (t - 12)).to({
                                x: 1,
                                y: 1
                            }, 200).to({ x: 0, y: 0 }, 200)
                        }, u = function () {
                            for (var t = 0; t < h.OrganizeConst.MAMIYA_MAX_EFFECT / 2; t++) n._kirakira[t].visible = !1;
                            createjs.Tween.get(n._ship[0].scale).to({
                                x: 3,
                                y: 3
                            }, 1e3), createjs.Tween.get(n._ship[0]).to({
                                x: 25,
                                y: 1100,
                                alpha: 0
                            }, 1e3).set({ visible: !1 }), createjs.Tween.get(n._ship[1].scale).to({
                                x: 3,
                                y: 3
                            }, 1e3), createjs.Tween.get(n._ship[1]).to({
                                x: 1275,
                                y: 1100,
                                alpha: 0
                            }, 1e3).set({ visible: !1 })
                        }
                }
                createjs.Tween.get(null).call(function () {
                    n._get_flash.visible = !0, createjs.Tween.get(n._get_flash.scale).to({
                        x: 2,
                        y: 2
                    }, 500), createjs.Tween.get(n._get_flash).to({ alpha: 1 }, 500), createjs.Tween.get(n._white).wait(400).set({ visible: !0 }).to({ alpha: 1 }, 300).call(function () {
                        n._OrganizeView.visible = !1, n._get_flash.visible = !1, a.SE.play("229"), createjs.Tween.get(n._txt_supply).wait(100).set({ visible: !0 }).to({ x: 680 }, 600, createjs.Ease.sineOut).to({ x: 570 }, 733)
                    })
                }).wait(2133).call(function () {
                    createjs.Tween.get(n._txt_supply).to({ x: -400 }, 700, createjs.Ease.sineIn).set({ visible: !1 }).call(function () {
                        r()
                    }), s()
                }).wait(1e3).call(function () {
                    _()
                }).wait(h.OrganizeConst.MAMIYA_EFFECT_WAIT).call(function () {
                    n._white.alpha = 1, null != e && e(), u(), n._OrganizeView.visible = !0, createjs.Tween.get(n._white).to({ alpha: 0 }, 1e3).set({ visible: !1 })
                }).wait(1e3).call(this.endUpdate)
            }, t.prototype.hide = function () {
                this._mainLayer.removeChildren(0, this._mainLayer.children.length)
            }, t
        }();
    e.TaskAnimationMamiyaIrako = p
}