const function1110 = function (t, e, i) {
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
        r = i(47),
        s = i(204),
        a = i(10),
        _ = i(397),
        l = i(398),
        u = i(399),
        c = i(241),
        h = i(1111),
        p = i(1112),
        d = i(1114),
        f = i(1115),
        y = i(1116),
        m = i(400),
        g = i(402),
        v = i(1119),
        b = i(1163),
        w = i(1172),
        x = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._initialize = function (t) {
                    e._selected_state = t;
                    var i, n = o.default.model.basic.getUISkinID();
                    101 == n || 102 == n ? (i = new PIXI.Sprite(_.ITEM_MENU_1.getTexture(6)), e._tabs.y = 193) : 201 == n ? (i = new PIXI.Sprite(l.ITEM_MENU_2.getTexture(6)), e._tabs.y = 190) : 301 != n && 311 != n || (i = new PIXI.Sprite(u.ITEM_MENU_3.getTexture(12)), e._tabs.y = 187), e._bg.addChild(i), i = new PIXI.Sprite(a.COMMON_MISC.getTexture(48)), i.position.set(171, 103), e._bg.addChild(i), e._tabs.initialize(n), e._mini_chara.initialize(), e._back_btn.initialize(e._onBack), e._showView(e._selected_state)
                }, e._activate = function () {
                    e._tabs.activate(), e._mini_chara.activate(), e._back_btn.activate()
                }, e._dispose = function () {
                    e._removeView(), null != e._ilist && (e._ilist.dispose(), e._ilist = null), null != e._ishop && (e._ishop.dispose(), e._ishop = null), null != e._fshop && (e._fshop.dispose(), e._fshop = null), e._tabs.dispose(), e._tabs = null, e._mini_chara.dispose(), e._mini_chara = null, e._back_btn.dispose(), e._back_btn = null, e._purchasedItems = null, e.removeChildren()
                }, e._onChangeSceneState = function (t) {
                    e._showView(t)
                }, e._onPurchased = function () {
                    new c.PayItemAPI(e._purchasedItems).start(function () {
                        e._showView(0, !0)
                    })
                }, e._onBack = function () {
                    o.default.scene.change(0)
                }, e._purchasedItems = new h.PurchasedItemModelHolder, e._bg = new PIXI.Container, e.addChild(e._bg), e._tabs = new m.TabContainer(e._onChangeSceneState), e.addChild(e._tabs), e._mini_chara = new g.MiniChara, e._mini_chara.position.set(-16, 444), e.addChild(e._mini_chara), e._back_btn = new s.BackBtn, e._back_btn.position.set(0, 653), e.addChild(e._back_btn), e
            }
            return n(e, t), e.prototype.getPreInitializeTask = function (t, e) {
                return new p.TaskItemScenePreInitialize(this._purchasedItems, e, this._initialize)
            }, e.prototype.getInitializeTask = function (t) {
                return new d.TaskItemSceneInitialize(this._activate)
            }, e.prototype.getFinalizeTask = function () {
                return new f.TaskItemSceneFinalize(this._dispose)
            }, e.prototype._removeView = function () {
                null != this._current && (this.removeChild(this._current), this._current.deactivate(), this._current = null)
            }, e.prototype._showView = function (t, e) {
                if (void 0 === e && (e = !1), this._removeView(), this._tabs.update(t), 0 == t ? (null == this._ilist && (this._ilist = new v.ItemListMain(this._purchasedItems), this._ilist.initialize()), this._current = this._ilist) : 1 == t ? (null == this._ishop && (this._ishop = new b.ItemShopMain(this._purchasedItems, this._onPurchased), this._ishop.initialize()), this._current = this._ishop) : 2 == t && (null == this._fshop && (this._fshop = new w.FurnitureShopMain, this._fshop.initialize()), this._current = this._fshop), 0 == t && 1 == e) {
                    this._ilist.updateForPurchasedView();
                    var i = o.default.view.overLayer;
                    new y.TaskPurchased(i).start()
                } else this._current.update();
                this._current.activate(), this.addChild(this._current)
            }, e
        }(r.SceneBase);
    e.ItemScene = x
}