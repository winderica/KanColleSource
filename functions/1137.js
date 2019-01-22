const function1137 = function (t, e, i) {
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
        r = i(406),
        s = i(27),
        a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i.texture = r.ITEM_ILIST_SETSUBUN.getTexture(21), i._bg_ship = new PIXI.Sprite, i._bg_ship.position.set(114, 144), i.addChild(i._bg_ship);
                var n = r.ITEM_ILIST_SETSUBUN.getTexture(10);
                return i._btn_shizai = new s.BtnBase(81, e), i._btn_shizai.initialize(n), i._btn_shizai.position.set(161, 93), i.addChild(i._btn_shizai), i._btn_kagu = new s.BtnBase(82, e), i._btn_kagu.position.set(319, 93), i.addChild(i._btn_kagu), n = r.ITEM_ILIST_SETSUBUN.getTexture(13), i._btn_rikukou = new s.BtnBase(83, e), i._btn_rikukou.initialize(n), i._btn_rikukou.position.set(480, 93), i.addChild(i._btn_rikukou), i._btn_ginga = new s.BtnBase(84, e), i._btn_ginga.position.set(641, 93), i.addChild(i._btn_ginga), n = r.ITEM_ILIST_SETSUBUN.getTexture(6), i._btn_back = new s.BtnBase(-1, e), i._btn_back.initialize(n), i._btn_back.position.set(345, 259), i.addChild(i._btn_back), i._shizai_count = new PIXI.Sprite(r.ITEM_ILIST_SETSUBUN.getTexture(16)), i._shizai_count.position.set(140, 113), i.addChild(i._shizai_count), i._kagu_count = new PIXI.Sprite(r.ITEM_ILIST_SETSUBUN.getTexture(17)), i._kagu_count.position.set(298, 113), i.addChild(i._kagu_count), i._rikukou_count = new PIXI.Sprite(r.ITEM_ILIST_SETSUBUN.getTexture(18)), i._rikukou_count.position.set(457, 113), i.addChild(i._rikukou_count), i._ginga_count = new PIXI.Sprite(r.ITEM_ILIST_SETSUBUN.getTexture(19)), i._ginga_count.position.set(620, 113), i.addChild(i._ginga_count), i._rikukou_txt = new PIXI.Sprite(r.ITEM_ILIST_SETSUBUN.getTexture(27)), i._rikukou_txt.position.set(470, 223), i.addChild(i._rikukou_txt), i._ginga_txt = new PIXI.Sprite(r.ITEM_ILIST_SETSUBUN.getTexture(28)), i._ginga_txt.position.set(631, 223), i.addChild(i._ginga_txt), i._icon = new PIXI.Sprite(r.ITEM_ILIST_SETSUBUN.getTexture(20)), i._icon.position.set(450, 259), i.addChild(i._icon), i
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this._btn_shizai.dispose(), this._btn_kagu.dispose(), this._btn_rikukou.dispose(), this._btn_ginga.dispose(), this._btn_back.dispose()
            }, e.prototype.initialize = function () {
                var t;
                o.default.model.furniture.getData(412).has() ? (t = r.ITEM_ILIST_SETSUBUN.getTexture(12), this._btn_kagu.deactivate()) : t = r.ITEM_ILIST_SETSUBUN.getTexture(11), this._btn_kagu.initialize(t), 1 == o.default.model.basic.getCFlag() ? (t = r.ITEM_ILIST_SETSUBUN.getTexture(15), this._btn_ginga.deactivate()) : t = r.ITEM_ILIST_SETSUBUN.getTexture(14), this._btn_ginga.initialize(t);
                for (var e = o.default.model.ship.getAll(), i = o.default.model.deck.get(1).getShipModel(0), n = i.getClassType(), s = i.shipTypeID, a = !1, _ = !1, l = !1, u = !1, c = !1, h = 0, p = e; h < p.length; h++) {
                    var d = p[h];
                    "\u307f\u306d\u3050\u3082" == d.yomi && (a = !0), "\u3055\u304e\u308a" == d.yomi && (_ = !0), "\u3046\u3089\u306a\u307f" == d.yomi && (l = !0), "\u3048\u3068\u308d\u3075" == d.yomi && (u = !0), "\u30b3\u30de\u30f3\u30c0\u30f3\u30fb\u30c6\u30b9\u30c8" == d.yomi && (c = !0)
                }
                18 != n && 23 != n && 30 != n || !a ? "\u3042\u307e\u304e\u308a" != i.yomi && "\u3055\u304e\u308a" != i.yomi && 10 != n && 66 != n && 28 != n || !_ ? 2 != s && 9 != s || !l ? 1 != s && 7 != s || !u ? 16 != s && 11 != s && 18 != s || !c ? (this._bg_ship.texture = r.ITEM_ILIST_SETSUBUN.getTexture(3), this._bg_ship.position.set(-212, -25), o.default.sound.voice.play("9999", 323)) : (this._bg_ship.texture = r.ITEM_ILIST_SETSUBUN.getTexture(2), this._bg_ship.position.set(-232, -35), o.default.sound.voice.play("9999", 322)) : (this._bg_ship.texture = r.ITEM_ILIST_SETSUBUN.getTexture(1), this._bg_ship.position.set(-97, 32), o.default.sound.voice.play("9999", 321)) : (this._bg_ship.texture = r.ITEM_ILIST_SETSUBUN.getTexture(0), this._bg_ship.position.set(-124, -74), o.default.sound.voice.play("9999", 320)) : (this._bg_ship.texture = r.ITEM_ILIST_SETSUBUN.getTexture(5), this._bg_ship.position.set(-120, -7), o.default.sound.voice.play("9999", 325)) : (this._bg_ship.texture = r.ITEM_ILIST_SETSUBUN.getTexture(4), this._bg_ship.position.set(-153, -8), o.default.sound.voice.play("9999", 324))
            }, e.prototype.activate = function () {
                this.visible = !0, this._btn_shizai.activate(), this._btn_rikukou.activate(), this._btn_back.activate(), o.default.model.furniture.getData(412).has() || this._btn_kagu.activate(), 0 == o.default.model.basic.getCFlag() && this._btn_ginga.activate()
            }, e.prototype.deactivate = function () {
                this.visible = !1, this._btn_shizai.deactivate(), this._btn_kagu.deactivate(), this._btn_rikukou.deactivate(), this._btn_ginga.deactivate(), this._btn_back.deactivate()
            }, e
        }(PIXI.Sprite);
    e.TopView = a
}