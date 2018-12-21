const function1131 = function (t, e, i) {
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
    var o = i(4), r = i(3), s = i(33), a = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._message = new o.TextBox(22, 1381651), n._message.position.set(123, 77), n.addChild(n._message), n._icon = new PIXI.Sprite, n._icon.position.set(152, 144), n.addChild(n._icon), n._btn_yes = new s.BtnBase(e, i), n._btn_yes.position.set(129, 260), n.addChild(n._btn_yes), n._btn_back = new s.BtnBase(-1, i), n._btn_back.position.set(279, 260), n.addChild(n._btn_back), n
        }

        return n(e, t), e.prototype.initialize = function (t) {
            this.texture = r.ITEM_ILIST_HISHIMOCHI.getTexture(10), this._message.text = "\u300c\u83f1\u9905\u300d\u3092\u4ea4\u63db\u3057\u307e\u3059\u304b\uff1f", 21 == t ? this._icon.texture = r.ITEM_ILIST_HISHIMOCHI.getTexture(7) : 23 == t ? this._icon.texture = r.ITEM_ILIST_HISHIMOCHI.getTexture(6) : 22 == t && (this._icon.texture = r.ITEM_ILIST_HISHIMOCHI.getTexture(8));
            var e = r.ITEM_ILIST_HISHIMOCHI.getTexture(2);
            this._btn_yes.initialize(e), e = r.ITEM_ILIST_HISHIMOCHI.getTexture(1), this._btn_back.initialize(e)
        }, e.prototype.activate = function () {
            this._btn_yes.activate(), this._btn_back.activate()
        }, e.prototype.deactivate = function () {
            this._btn_yes.deactivate(), this._btn_back.deactivate()
        }, e.prototype.dispose = function () {
            this.removeChildren(), this._message.destroy(), this._btn_yes.dispose(), this._btn_back.dispose()
        }, e
    }(PIXI.Sprite);
    e.ConfirmView = a
}