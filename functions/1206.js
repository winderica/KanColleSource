const function1206 = function (t, e, i) {
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
        s = i(111),
        a = i(1207),
        _ = i(1208),
        u = i(1210),
        l = i(1211),
        c = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._onSelect = function (t) {
                    r.SE.play("239"), n._now_selected = t;
                    var e = o.default.model.useItem.getCount(52);
                    n._detail.update(t, e), n._exchange_btn.enabled = n._getExchangeBtnEnabled(t, e)
                }, n._onBack = function () {
                    n._now_selected = null, null != n._cb_onBack && n._cb_onBack()
                }, n._onExchange = function () {
                    null != n._cb_onExchange && n._cb_onExchange(n._now_selected)
                }, n._cb_onBack = e, n._cb_onExchange = i, n._header = new h, n._header.position.set(648, 147), n.addChild(n._header), n._list = new a.FShopListPanel(n._onSelect), n._list.position.set(187, 183), n.addChild(n._list), n._detail = new _.FShopDetailPanel, n._detail.position.set(643, 213), n.addChild(n._detail), n._back_btn = new u.BackBtn, n._back_btn.position.set(202, 654), n.addChild(n._back_btn), n._exchange_btn = new l.ExchangeBtn, n._exchange_btn.position.set(666, 643), n.addChild(n._exchange_btn), n
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this._type = t, this._list.initialize(), this._detail.initialize(), this._back_btn.initialize(this._onBack), this._exchange_btn.initialize(this._onExchange), this.update()
            }, e.prototype.update = function () {
                this._header.update(this._type);
                var t = o.default.model.furniture.getOnSaleList(this._type);
                this._list.update(t), this._detail.update(null, 0), this._exchange_btn.enabled = !1
            }, e.prototype.activate = function () {
                this._list.activate(), this._back_btn.activate(), this._exchange_btn.activate()
            }, e.prototype.deactivate = function () {
                this._list.deactivate(), this._back_btn.deactivate(), this._exchange_btn.deactivate()
            }, e.prototype.dispose = function () {
                this._list.dispose(), this._detail.dispose(), this._back_btn.dispose(), this._exchange_btn.dispose(), this._cb_onBack = null, this._cb_onExchange = null
            }, e.prototype._getExchangeBtnEnabled = function (t, e) {
                if (1 == t.has()) return !1;
                var i = o.default.model.useItem.getCount(44);
                if (i < t.price) {
                    if (1 != t.isHighGrade()) return !1;
                    if (i < t.getDiscountPrice() || e < 1) return !1
                }
                return !(1 == t.isNeedCraftsman() && e < 1)
            }, e
        }(PIXI.Container);
    e.FShopListView = c;
    var h = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype.update = function (t) {
            var e;
            switch (t) {
                case 0:
                    e = 45;
                    break;
                case 1:
                    e = 46;
                    break;
                case 2:
                    e = 47;
                    break;
                case 3:
                    e = 48;
                    break;
                case 4:
                    e = 49;
                    break;
                case 5:
                    e = 50;
                    break;
                default:
                    return void(this.texture = PIXI.Texture.EMPTY)
            }
            this.texture = s.ITEM_FSHOP.getTexture(e)
        }, e
    }(PIXI.Sprite)
}