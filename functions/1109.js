const function1109 = function (t, e, i) {
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
    var o = i(129),
        r = i(89),
        s = i(1110),
        a = i(1111),
        _ = i(1148),
        u = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._onChangeSceneState = function (t) {
                    i._showView(t)
                }, i._purchasedItems = e, i._header = new PIXI.Sprite, i._header.position.set(0, 102), i.addChild(i._header), i._tabs = new s.TabContainer(i._onChangeSceneState), i._tabs.position.set(181, 160), i.addChild(i._tabs), i
            }
            return n(e, t), e.prototype.initialize = function () {
                this._header.texture = o.ITEM_ILIST.getTexture(35), this._tabs.initialize()
            }, e.prototype.update = function () {
                this._showView(0)
            }, e.prototype.updateForPurchasedView = function () {
                this._showView(1)
            }, e.prototype.activate = function () {
                this._tabs.activate()
            }, e.prototype.deactivate = function () {
                this._tabs.deactivate()
            }, e.prototype.dispose = function () {
                this._tabs.dispose(), null != this._ownedView && (this._ownedView.dispose(), this._ownedView = null), null != this._purchasedView && (this._purchasedView.dispose(), this._purchasedView = null), this._purchasedItems = null
            }, e.prototype._removeView = function () {
                null != this._current && (this.removeChild(this._current), this._current.deactivate(), this._current = null)
            }, e.prototype._showView = function (t) {
                this._removeView(), this._tabs.update(t), 0 == t ? (null == this._ownedView && (this._ownedView = new a.OwnedItemListMain, this._ownedView.initialize()), this._current = this._ownedView) : 1 == t && (null == this._purchasedView && (this._purchasedView = new _.PurchasedItemListMain(this._purchasedItems), this._purchasedView.initialize()), this._current = this._purchasedView), this._current.update(), this._current.activate(), this.addChild(this._current)
            }, e
        }(r.ViewBase);
    e.ItemListMain = u
}