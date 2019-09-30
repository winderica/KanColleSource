const function1160 = function (t, e, i) {
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
        s = i(134),
        a = i(91),
        _ = i(1161),
        l = i(1162),
        u = i(1163),
        c = i(1164),
        h = i(1168),
        p = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._count = 0, n._onChangePage = function () {
                    var t = n._views.indexOf(n._current);
                    n._showView(t ? 0 : 1)
                }, n._onSelect = function (t, e) {
                    r.SE.play("214");
                    var i = 10;
                    27 == e.id && (i = 10, i -= n._purchasedItems.getCount(27), i -= o.default.model.useItem.getCount(73));
                    var s = new c.TaskPurchaseConfirm(t, e, i);
                    n.addChild(s.layer), s.start(function () {
                        s.count > 0 && null != n._cb_onPurchased && n._cb_onPurchased()
                    })
                }, n._purchasedItems = e, n._cb_onPurchased = i, n._header = new PIXI.Sprite, n._header.position.set(226, 114), n.addChild(n._header), n._tab = new _.TabContainer(n._onChangePage), n.addChild(n._tab), n._views = [], n._views.push(new l.NormalItemShopMain(n._onSelect)), n._views.push(new u.SpecialItemShopMain(n._onSelect)), n
            }
            return n(e, t), e.prototype.initialize = function () {
                this._header.texture = s.ITEM_ISHOP.getTexture(35);
                for (var t = 0, e = this._views; t < e.length; t++) {
                    e[t].initialize()
                }
            }, e.prototype.update = function () {
                this._count = 0, this._showView(0)
            }, e.prototype.activate = function () {
                null != this._current && this._current.activate(), this._tab.activate()
            }, e.prototype.deactivate = function () {
                null != this._current && this._current.deactivate(), this._tab.deactivate()
            }, e.prototype.dispose = function () {
                this._purchasedItems = null, this._tab.dispose(), this._removeView();
                for (var t = 0, e = this._views; t < e.length; t++) {
                    e[t].dispose()
                }
            }, e.prototype._removeView = function () {
                null != this._current && (this.removeChild(this._current), this._current.deactivate(), this._current = null, this._tab.deactivate())
            }, e.prototype._showView = function (t) {
                this._removeView(), this._tab.update(t), this._tab.activate(), this._current = this._views[t], this._current.update(), this._current.activate(), this.addChild(this._current), this._count += 0 == t ? 1 : 0;
                var e = o.default.view.overLayer;
                new h.TaskWelcomeCutin(e, t, this._count).start()
            }, e
        }(a.ViewBase);
    e.ItemShopMain = p
}