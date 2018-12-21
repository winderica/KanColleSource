const function1118 = function (t, e, i) {
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
    var o = i(4), r = i(3), s = i(33), a = i(401), _ = i(402), l = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._message = new o.TextBox(18, 4999235), n._message.position.set(230, 33), n.addChild(n._message), n._icon = new _.MedalIcon, n._icon.position.set(308, 116), n.addChild(n._icon), n._btn_yes = new s.BtnBase(e, i), n._btn_yes.position.set(179, 215), n.addChild(n._btn_yes), n._btn_no = new s.BtnBase(-1, i), n._btn_no.position.set(389, 215), n.addChild(n._btn_no), 0 == e ? n._message.text = "\u52f2\u7ae0\u3092\u300c\u8cc7\u6e90\u300d\u306b\u4ea4\u63db\u3057\u307e\u3059\u3002\n\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f" : 2 == e && (n._message.text = "\u52f2\u7ae0\u3092\u300c\u6539\u4fee\u8cc7\u6750\u300d\u306b\u4ea4\u63db\u3057\u307e\u3059\u3002\n\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f"), n
        }

        return n(e, t), e.prototype.initialize = function (t) {
            this.texture = r.ITEM_ILIST_MEDAL.getTexture(7), this._initialize(t, 1)
        }, e.prototype.dispose = function () {
            t.prototype.dispose.call(this), this._message.destroy()
        }, e
    }(a.ConfirmViewBase);
    e.ConfirmView = l
}