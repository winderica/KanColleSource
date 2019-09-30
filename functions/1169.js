const function1169 = function (t, e, i) {
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
        r = i(6),
        s = i(110),
        a = i(91),
        _ = i(1170),
        l = i(1172),
        u = i(1178),
        c = i(1179),
        h = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._onSelect = function (t) {
                    r.SE.play("240"), null == e._sub_view && (e._sub_view = new l.FShopListView(e._onUnSelect, e._onExchange), e.addChild(e._sub_view)), e._sub_view.initialize(t), e._sub_view.activate(), e._sub_view.visible = !0, e._main_view.deactivate(), e._main_view.visible = !1
                }, e._onUnSelect = function () {
                    e._main_view.activate(), e._main_view.visible = !0, e._sub_view.deactivate(), e._sub_view.visible = !1
                }, e._onExchange = function (t) {
                    var i = o.default.view.overLayer,
                        n = new c.TaskExchange(i, t);
                    n.start(function () {
                        1 == n.result && (e.update(), null != e._sub_view && 1 == e._sub_view.visible && e._sub_view.update())
                    })
                }, e._header = new PIXI.Sprite, e._header.position.set(0, 102), e.addChild(e._header), e._main_view = new _.FurnitureShopMainView(e._onSelect), e.addChild(e._main_view), e._coin = new u.CoinBox, e._coin.position.set(984, 640), e.addChild(e._coin), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._header.texture = s.ITEM_FSHOP.getTexture(55), this._main_view.initialize(), this._coin.initialize(), this.update()
            }, e.prototype.update = function () {
                var t = o.default.model.useItem.getCount(44);
                this._coin.update(t)
            }, e.prototype.activate = function () {
                1 == this._main_view.visible && this._main_view.activate()
            }, e.prototype.deactivate = function () {
                this._main_view.deactivate(), this._main_view.visible = !0, null != this._sub_view && (this._sub_view.visible = !1)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._main_view.dispose(), null != this._sub_view && this._sub_view.dispose(), this._coin.dispose()
            }, e
        }(a.ViewBase);
    e.FurnitureShopMain = h
}