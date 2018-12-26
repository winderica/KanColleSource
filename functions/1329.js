const function1329 = function (t, e, i) {
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
        s = i(2),
        a = i(8),
        _ = i(23),
        l = i(12),
        u = i(15),
        c = i(25),
        h = i(6),
        p = i(9),
        d = i(177),
        f = function (t) {
            function e(e, i, n, s) {
                void 0 === s && (s = null);
                var u = t.call(this) || this;
                return u._preLoadSlotitemCard = function () {
                    var t = new c.SlotLoader,
                        e = u._getSlotitemMstID(u._repairitem);
                    t.add(e, "card"), t.load(u._showCard)
                }, u._showCard = function () {
                    var t = u._getSlotitemMstID(u._repairitem),
                        e = r.default.resources.getSlotitem(t, "card");
                    u._card = new l.Sprite(e), u._card.anchor.set(.5), u._card.scale.set(2), u._card.position.set(600, 360), u._card.alpha = 0;
                    var i = new l.Sprite(e);
                    i.anchor.set(.5), i.scale.set(2), i.position.set(600, 360), i.alpha = 0, u._layer.addChild(u._card), u._layer.addChild(i), createjs.Tween.get(u._card).to({
                        scaleX: 1,
                        scaleY: 1,
                        alpha: 1
                    }, 700), createjs.Tween.get(i).wait(200).to({
                        scaleX: 1,
                        scaleY: 1,
                        alpha: 1
                    }, 500).call(function () {
                        u._layer.removeChild(i), h.SE.play("229")
                    }).wait(1100).call(u._showFlash)
                }, u._showFlash = function () {
                    var t = new l.Sprite(p.COMMON_MISC.getTexture(68));
                    t.anchor.set(.5), t.position.set(600, 360), t.alpha = 0, u._layer.addChild(t), createjs.Tween.get(t).to({
                        scaleX: 1.5,
                        scaleY: 1.5,
                        alpha: 1
                    }, 800).to({
                        scaleX: 2.3,
                        scaleY: 2.3,
                        alpha: 1
                    }, 900).call(function () {
                        u._layer.removeChild(t)
                    }), u._white = new a.AreaBox(1, 16777215), u._white.alpha = 0, u._layer.addChild(u._white), createjs.Tween.get(u._white).wait(500).to({
                        alpha: 1
                    }, 1200).call(function () {
                        u._layer.removeChild(u._card)
                    });
                    var e = d.BATTLE_CUTIN_GOUCHIN.getTexture(10);
                    u._text = new PIXI.Sprite(e), u._text.anchor.set(.5), u._text.position.set(o.default.width + u._text.width / 2, 360), u._layer.addChild(u._text);
                    var i = createjs.Tween.get(u._text).to({
                        x: 600
                    }, 600);
                    2 == u._repairitem ? u._showSubText() : i.wait(1100).call(u._hideText)
                }, u._hideText = function () {
                    createjs.Tween.get(u._text).to({
                        x: -u._text.width / 2
                    }, 600).call(function () {
                        u._layer.removeChild(u._text)
                    }).wait(500).call(u._showShip)
                }, u._showShip = function () {
                    var t = 2 != u._repairitem,
                        e = new PIXI.Sprite;
                    e.texture = r.default.resources.getShip(u._mst_id, t, "full");
                    var i = r.default.model.ship_graph.get(u._mst_id).getBattleOffset(t);
                    e.position.set(i.x - 120 - 252, i.y - 120 - 518), e.alpha = 0;
                    var n = new _.Container;
                    n.addChild(e), n.position.set(o.default.width / 2, o.default.height / 2), n.scale.set(.4), u._layer.addChild(n), createjs.Tween.get(e).to({
                        alpha: 1
                    }, 600).wait(500).to({
                        alpha: 0
                    }, 600), createjs.Tween.get(n).to({
                        scaleX: .7,
                        scaleY: .7
                    }, 300).to({
                        scaleX: .8,
                        scaleY: .8
                    }, 1100).to({
                        scaleX: 1.2,
                        scaleY: 1.2
                    }, 300).wait(300).call(function () {
                        u._layer.removeChild(n), u._endAnim()
                    })
                }, u._layer = e, u._mst_id = i, u._repairitem = n, u._preEnd = s, u
            }
            return n(e, t), e.prototype._start = function () {
                this._preLoadShip()
            }, e.prototype._preLoadShip = function () {
                var t = new u.ShipLoader,
                    e = 2 != this._repairitem;
                t.add(this._mst_id, e, "full"), t.load(this._preLoadSlotitemCard)
            }, e.prototype._showSubText = function () {
                var t = this,
                    e = new l.Sprite(d.BATTLE_CUTIN_GOUCHIN.getTexture(3));
                e.anchor.set(.5), e.position.set(600, 486), e.scale.y = 0, this._layer.addChild(e), createjs.Tween.get(e).to({
                    scaleY: 1
                }, 200).wait(2600).to({
                    scaleY: 0
                }, 200).call(function () {
                    t._layer.removeChild(e)
                });
                var i = new PIXI.Sprite(d.BATTLE_CUTIN_GOUCHIN.getTexture(8));
                i.anchor.set(.5), i.position.set(o.default.width + i.width / 2, o.default.height / 2 + 126), this._layer.addChild(i), createjs.Tween.get(i).wait(200).to({
                    x: o.default.width / 2
                }, 300).wait(700).to({
                    x: -i.width / 2
                }, 300).call(function () {
                    t._layer.removeChild(i)
                });
                var n = new PIXI.Sprite(d.BATTLE_CUTIN_GOUCHIN.getTexture(9));
                n.anchor.set(.5), n.position.set(o.default.width + n.width / 2, o.default.height / 2 + 126), this._layer.addChild(n), createjs.Tween.get(n).wait(1500).to({
                    x: o.default.width / 2
                }, 300).wait(400).call(this._hideText).to({
                    x: -n.width / 2
                }, 300).call(function () {
                    t._layer.removeChild(n)
                })
            }, e.prototype._endAnim = function () {
                var t = this;
                null != this._preEnd && this._preEnd(), createjs.Tween.get(this._white).to({
                    alpha: 0
                }, 500).call(function () {
                    t._layer.removeChild(t._white), t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._layer = null, this._card = null, this._white = null, this._text = null, t.prototype._endTask.call(this)
            }, e.prototype._getSlotitemMstID = function (t) {
                return 1 == t ? 42 : 2 == t ? 43 : -1
            }, e
        }(s.TaskBase);
    e.TaskGouchinCutinRepair = f
}