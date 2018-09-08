const function1117 = function (t, e, i) {
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
            return n._message1 = new o.TextBox(22, 1381651), n._message1.position.set(92, 81), n.addChild(n._message1), n._message2 = new o.TextBox(22, 1381651), n._message2.position.set(92, 111), n.addChild(n._message2), n._icon = new PIXI.Sprite, n._icon.position.set(152, 165), n.addChild(n._icon), n._btn_yes = new s.BtnBase(e, i), n._btn_yes.position.set(129, 267), n.addChild(n._btn_yes), n._btn_back = new s.BtnBase(-1, i), n._btn_back.position.set(279, 267), n.addChild(n._btn_back), n
        }

        return n(e, t), e.prototype.initialize = function (t) {
            this.texture = r.ITEM_ILIST_PRESENTBOX.getTexture(10), this._message1.text = "\u300c\u30d7\u30ec\u30bc\u30f3\u30c8\u7bb1\u300d\u3092\u958b\u5c01\u3057\u307e\u3059\u3002", this._message1.x = 264 - this._message1.width / 2, this._message2.text = "\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f", this._message2.x = 264 - this._message2.width / 2, 11 == t ? this._icon.texture = r.ITEM_ILIST_PRESENTBOX.getTexture(7) : 13 == t ? this._icon.texture = r.ITEM_ILIST_PRESENTBOX.getTexture(6) : 12 == t && (this._icon.texture = r.ITEM_ILIST_PRESENTBOX.getTexture(8));
            var e = r.ITEM_ILIST_PRESENTBOX.getTexture(2);
            this._btn_yes.initialize(e), e = r.ITEM_ILIST_PRESENTBOX.getTexture(1), this._btn_back.initialize(e)
        }, e.prototype.activate = function () {
            this._btn_yes.activate(), this._btn_back.activate()
        }, e.prototype.deactivate = function () {
            this._btn_yes.deactivate(), this._btn_back.deactivate()
        }, e.prototype.dispose = function () {
            this._btn_yes.dispose(), this._btn_back.dispose()
        }, e
    }(PIXI.Sprite);
    e.ConfirmView = a
}