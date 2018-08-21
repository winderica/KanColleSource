const function1320 = function (t, e, i) {
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
    var o = i(5), r = i(0), s = i(2), a = i(8), _ = i(12), u = i(14), l = i(24), c = i(6), h = i(174), p = i(1321),
        d = i(1322), f = i(1323), y = function (t) {
            function e(e, i, n, o) {
                void 0 === o && (o = null);
                var r = t.call(this) || this;
                return r._repairEffect = function () {
                    new f.TaskGouchinCutinRepair(r._layer, r._mst_id, r._repairitem, r._callPreEnd).start(function () {
                        r._endTask()
                    })
                }, r._callPreEnd = function () {
                    r._layer.removeChild(r._view), null != r._preEnd && (r._preEnd(), r._preEnd = null)
                }, r._layer = e, r._mst_id = i, r._repairitem = n, r._preEnd = o, r._view = new p.GouchinCutinView, r
            }

            return n(e, t), e.prototype._start = function () {
                this._loadResouce()
            }, e.prototype._loadResouce = function () {
                var t = this, e = new l.UIImageLoader("battle");
                e.add("battle_cutin_gouchin.json"), e.load(function () {
                    var e = r.default.model.ship.getMst(t._mst_id);
                    t._loadCardBGResource(e.rarity)
                })
            }, e.prototype._loadCardBGResource = function (t) {
                var e = this, i = "";
                i = t <= 1 ? "c1" : 2 == t ? "c2" : 3 == t ? "c3" : 4 == t ? "r1" : 5 == t ? "r2" : 6 == t ? "sr1" : 7 == t ? "sr2" : "sr3";
                var n = r.default.settings.path_root + "img/common/ship_bg/card/" + i + ".png",
                    o = new PIXI.loaders.Loader;
                o.add(n), o.load(function (t) {
                    var i = t.resources[n];
                    e._view.card_bg.texture = i.texture, e._loadShipResource()
                })
            }, e.prototype._loadShipResource = function () {
                var t = this, e = new u.ShipLoader;
                e.add(this._mst_id, !0, "full"), e.load(function () {
                    var e = new a.AreaBox(1, 16777215);
                    t._layer.addChild(e), t._view.initialize(), t._layer.addChild(t._view), createjs.Tween.get(t._view.bg).to({ alpha: 1 }, 400).call(function () {
                        t._layer.removeChild(e), t._dropWaterAnim()
                    })
                })
            }, e.prototype._dropWaterAnim = function () {
                var t = this, e = h.BATTLE_CUTIN_GOUCHIN.getTexture(11), i = new _.Sprite(e);
                i.anchor.set(.5), i.alpha = 0, i.position.set(o.default.width / 2, 120), this._view.layer_effect.addChild(i), createjs.Tween.get(i).to({
                    y: 200,
                    alpha: 1
                }, 100).to({ y: 600 }, 500).call(function () {
                    t._showRipple()
                }).to({ scaleX: .77, scaleY: .59, alpha: 0 }, 100).call(function () {
                    t._view.layer_effect.removeChild(i), t._showShip()
                })
            }, e.prototype._showRipple = function () {
                var t = this, e = h.BATTLE_CUTIN_GOUCHIN.getTexture(12), i = new _.Sprite(e);
                i.anchor.set(.5), i.scale.set(.25), i.alpha = 0, i.position.set(o.default.width / 2, 608), this._view.layer_effect.addChild(i), createjs.Tween.get(i).to({
                    scaleX: .69,
                    scaleY: .69,
                    alpha: 1
                }, 100).to({ scaleX: 1.56, scaleY: 1.56 }, 200).to({
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                }, 100).call(function () {
                    t._view.layer_effect.removeChild(i)
                })
            }, e.prototype._showShip = function () {
                var t = this;
                this._view.layer_mask.position.set(o.default.width / 2, o.default.height / 2), createjs.Tween.get(this._view.layer_mask).wait(100).to({ alpha: 1 }, 433);
                var e = this._createShipSprite();
                this._view.layer_ship.addChild(e), createjs.Tween.get(e).wait(266).to({
                    x: 450,
                    y: 60,
                    scaleX: .5,
                    scaleY: .5,
                    alpha: 1
                }, 900).call(function () {
                    t._view.layer_ship.removeChild(e)
                });
                var i = this._createShipSprite();
                this._view.layer_ship.addChild(i), createjs.Tween.get(i).wait(100).to({
                    x: 450,
                    y: 60,
                    scaleX: .5,
                    scaleY: .5,
                    alpha: 1
                }, 1e3).call(function () {
                    t._showLine()
                }).wait(633).call(function () {
                    t._playVoice()
                }), createjs.Tween.get(null).wait(800).call(function () {
                    c.SE.play("109")
                })
            }, e.prototype._getShipImage = function () {
                var t = new PIXI.Sprite;
                t.texture = r.default.resources.getShip(this._mst_id, !0, "full");
                var e = r.default.model.ship_graph.get(this._mst_id).getBattleOffset(!0);
                return t.x = -120 + e.x, t.y = -120 + e.y, t
            }, e.prototype._createShipSprite = function () {
                var t = new _.Sprite;
                return t.alpha = 0, t.position.set(330, -368), t.scale.set(1.25), t.addChild(this._getShipImage()), t
            }, e.prototype._showLine = function () {
                var t = this, e = new _.Sprite(h.BATTLE_CUTIN_GOUCHIN.getTexture(2));
                e.anchor.set(0, .5), e.position.set(o.default.width, o.default.height / 2), e.scale.y = 0, this._view.bg.addChild(e), createjs.Tween.get(e).to({
                    x: 0,
                    scaleY: 1
                }, 200).wait(700).to({ x: -o.default.width, scaleY: 0 }, 200).call(function () {
                    t._view.bg.removeChild(e)
                })
            }, e.prototype._playVoice = function () {
                var t = this, e = this._mst_id.toString();
                r.default.sound.voice.play(e, 22), createjs.Tween.get(this._view.layer_ship).wait(600).to({
                    y: 750,
                    alpha: 0
                }, 1700).call(function () {
                    t._view.layer_ship.removeChildren(), t._view.layer_ship.visible = !1
                }), createjs.Tween.get(this._view.layer_mask).call(function () {
                    t._view.playMask()
                }).to({ rotation: -30 / 180 * Math.PI }, 1e3, createjs.Ease.sineIn).call(function () {
                }).to({ y: o.default.height + o.default.height / 2, alpha: 0 }, 3e3).call(function () {
                    t._view.layer_mask.visible = !1
                }), 0 == this._repairitem ? createjs.Tween.get(null).wait(1300).call(function () {
                    t._textEffect()
                }) : createjs.Tween.get(null).wait(4e3).call(this._repairEffect)
            }, e.prototype._textEffect = function () {
                var t = this;
                new d.TaskGouchinCutinText(this._view.layer_text).start(function () {
                    t._endAnim()
                })
            }, e.prototype._endAnim = function () {
                var t = this, e = new a.AreaBox(1, 16777215);
                e.alpha = 0, this._layer.addChild(e), createjs.Tween.get(e).to({ alpha: 1 }, 566).call(this._callPreEnd).to({ alpha: 0 }, 500).call(function () {
                    t._layer.removeChild(e), t._endTask()
                })
            }, e
        }(s.TaskBase);
    e.TaskGouchinCutin = y
}