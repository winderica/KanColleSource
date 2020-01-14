const function1188 = function (t, e, i) {
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
        r = i(413),
        s = i(27),
        a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i.texture = r.ITEM_ILIST_SETSUBUN.getTexture(23), i._bg_ship = new PIXI.Sprite, i._bg_ship.position.set(114, 144), i.addChild(i._bg_ship);
                var n = r.ITEM_ILIST_SETSUBUN.getTexture(12);
                i._btn_reward1 = new s.BtnBase(81, e), i._btn_reward1.initialize(n), i._btn_reward1.position.set(161, 93), i.addChild(i._btn_reward1);
                var o = r.ITEM_ILIST_SETSUBUN.getTexture(13);
                i._btn_reward2 = new s.BtnBase(83, e), i._btn_reward2.initialize(o), i._btn_reward2.position.set(319, 93), i.addChild(i._btn_reward2), i._btn_reward3 = new s.BtnBase(82, e), i._btn_reward3.position.set(480, 93), i.addChild(i._btn_reward3), i._btn_reward4 = new s.BtnBase(84, e), i._btn_reward4.position.set(641, 93), i.addChild(i._btn_reward4);
                var a = r.ITEM_ILIST_SETSUBUN.getTexture(8);
                return i._btn_back = new s.BtnBase(-1, e), i._btn_back.initialize(a), i._btn_back.position.set(345, 259), i.addChild(i._btn_back), i._reward1_count = new PIXI.Sprite(r.ITEM_ILIST_SETSUBUN.getTexture(18)), i._reward1_count.position.set(140, 113), i.addChild(i._reward1_count), i._reward2_count = new PIXI.Sprite(r.ITEM_ILIST_SETSUBUN.getTexture(19)), i._reward2_count.position.set(298, 113), i.addChild(i._reward2_count), i._reward3_count = new PIXI.Sprite(r.ITEM_ILIST_SETSUBUN.getTexture(20)), i._reward3_count.position.set(457, 113), i.addChild(i._reward3_count), i._reward4_count = new PIXI.Sprite(r.ITEM_ILIST_SETSUBUN.getTexture(21)), i._reward4_count.position.set(620, 113), i.addChild(i._reward4_count), i._reward1_txt = new PIXI.Sprite(r.ITEM_ILIST_SETSUBUN.getTexture(29)), i._reward1_txt.position.set(310, 223), i.addChild(i._reward1_txt), i._reward3_txt = new PIXI.Sprite(r.ITEM_ILIST_SETSUBUN.getTexture(30)), i._reward3_txt.position.set(631, 223), i.addChild(i._reward3_txt), i._icon = new PIXI.Sprite(r.ITEM_ILIST_SETSUBUN.getTexture(22)), i._icon.position.set(450, 259), i.addChild(i._icon), i
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this._btn_reward1.dispose(), this._btn_reward2.dispose(), this._btn_reward3.dispose(), this._btn_reward4.dispose(), this._btn_back.dispose()
            }, e.prototype.initialize = function () {
                var t;
                1 == o.default.model.basic.getCFlag() ? (t = r.ITEM_ILIST_SETSUBUN.getTexture(15), this._btn_reward3.deactivate()) : t = r.ITEM_ILIST_SETSUBUN.getTexture(14), this._btn_reward3.initialize(t), 1 == o.default.model.basic.getCFlag2() ? (t = r.ITEM_ILIST_SETSUBUN.getTexture(17), this._btn_reward4.deactivate()) : t = r.ITEM_ILIST_SETSUBUN.getTexture(16), this._btn_reward4.initialize(t);
                for (var e = o.default.model.ship.getAll(), i = o.default.model.deck.get(1).getShipModel(0), n = i.getClassType(), s = i.shipTypeID, a = !1, _ = !1, u = !1, l = !1, c = !1, h = !1, p = !1, d = 0, f = e; d < f.length; d++) {
                    var y = f[d];
                    "\u307f\u306d\u3050\u3082" == y.yomi && (a = !0), "\u3055\u304e\u308a" == y.yomi && (_ = !0), "\u3046\u3089\u306a\u307f" == y.yomi && (u = !0), "\u307e\u3064\u308f" == y.yomi && (l = !0), "\u30b3\u30de\u30f3\u30c0\u30f3\u30fb\u30c6\u30b9\u30c8" == y.yomi && (c = !0), "\u304b\u3056\u3050\u3082" == y.yomi && (h = !0), "\u30c7\u30fb\u30ed\u30a4\u30c6\u30eb" == y.yomi && (p = !0)
                }
                h && 38 == n ? (this._bg_ship.texture = r.ITEM_ILIST_SETSUBUN.getTexture(6), this._bg_ship.position.set(-129, -43), o.default.sound.voice.play("9999", 326)) : !p || "\u30c7\u30fb\u30ed\u30a4\u30c6\u30eb" != i.yomi && "\u30d1\u30fc\u30b9" != i.yomi && "\u30d2\u30e5\u30fc\u30b9\u30c8\u30f3" != i.yomi && "\u30b4\u30c8\u30e9\u30f3\u30c9" != i.yomi && "\u3057\u3093\u3057\u3085\u3046\u307e\u308b" != i.yomi && "\u30a2\u30c8\u30e9\u30f3\u30bf" != i.yomi ? a && [18, 23, 30].indexOf(n) >= 0 ? (this._bg_ship.texture = r.ITEM_ILIST_SETSUBUN.getTexture(4), this._bg_ship.position.set(-153, -8), o.default.sound.voice.play("9999", 324)) : _ && ("\u3042\u307e\u304e\u308a" == i.yomi || "\u3055\u304e\u308a" == i.yomi || [10, 66, 28].indexOf(n) >= 0) ? (this._bg_ship.texture = r.ITEM_ILIST_SETSUBUN.getTexture(5), this._bg_ship.position.set(-120, -7), o.default.sound.voice.play("9999", 325)) : 2 != s && 9 != s || !u ? 1 != s && 7 != s || !l ? 16 != s && 11 != s && 18 != s || !c ? (this._bg_ship.texture = r.ITEM_ILIST_SETSUBUN.getTexture(3), this._bg_ship.position.set(-212, -25), o.default.sound.voice.play("9999", 323)) : (this._bg_ship.texture = r.ITEM_ILIST_SETSUBUN.getTexture(2), this._bg_ship.position.set(-232, -35), o.default.sound.voice.play("9999", 322)) : (this._bg_ship.texture = r.ITEM_ILIST_SETSUBUN.getTexture(1), this._bg_ship.position.set(-94, 26), o.default.sound.voice.play("9999", 328)) : (this._bg_ship.texture = r.ITEM_ILIST_SETSUBUN.getTexture(0), this._bg_ship.position.set(-124, -74), o.default.sound.voice.play("9999", 320)) : (this._bg_ship.texture = r.ITEM_ILIST_SETSUBUN.getTexture(7), this._bg_ship.position.set(-131, -14), o.default.sound.voice.play("9999", 327))
            }, e.prototype.activate = function () {
                this.visible = !0, this._btn_reward1.activate(), this._btn_reward2.activate(), this._btn_back.activate(), 0 == o.default.model.basic.getCFlag() && this._btn_reward3.activate(), 0 == o.default.model.basic.getCFlag2() && this._btn_reward4.activate()
            }, e.prototype.deactivate = function () {
                this.visible = !1, this._btn_reward1.deactivate(), this._btn_reward2.deactivate(), this._btn_reward3.deactivate(), this._btn_reward4.deactivate(), this._btn_back.deactivate()
            }, e
        }(PIXI.Sprite);
    e.TopView = a
}