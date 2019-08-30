const function1136 = function (t, e, i) {
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
    var o = i(4),
        r = i(3),
        s = i(33),
        a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._message = new o.TextBox(18, 4999235), i._message.position.set(176, 47), i.addChild(i._message), i._message1 = new o.TextBox(18, 4999235), i._message1.position.set(237, 92), i.addChild(i._message1), i._message2 = new o.TextBox(18, 4999235), i._message2.position.set(399, 92), i.addChild(i._message2), i._message3 = new o.TextBox(18, 4999235), i._message3.position.set(237, 122), i.addChild(i._message3), i._message4 = new o.TextBox(18, 4999235), i._message4.position.set(399, 122), i.addChild(i._message4), i._message5 = new o.TextBox(18, 4999235), i._message5.position.set(323, 161), i.addChild(i._message5), i._btn_yes = new s.BtnBase(0, e), i._btn_yes.position.set(191, 219), i.addChild(i._btn_yes), i._btn_back = new s.BtnBase(-1, e), i._btn_back.position.set(399, 219), i.addChild(i._btn_back), i
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this.texture = r.ITEM_ILIST_MEDAL_KOU.getTexture(2), this._message.text = "\u7532\u7a2e\u52f2\u7ae0\u306f\u3001\u4e0b\u8a18\u306e\u7269\u8cc7\u3068\u4ea4\u63db\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002", this._message1.text = "\u71c3\u6599\xd710,000", this._message2.text = "\u6539\u4fee\u8cc7\u6750\xd710", this._message3.text = "\u958b\u767a\u8cc7\u6e90\xd710", this._message4.text = "\u5bb6\u5177\u7bb1(\u5927)\xd710", this._message5.text = "\u4ea4\u63db\u3057\u307e\u3059\u304b\uff1f";
                var e = r.ITEM_ILIST_MEDAL_KOU.getTexture(1);
                this._btn_yes.initialize(e), e = r.ITEM_ILIST_MEDAL_KOU.getTexture(0), this._btn_back.initialize(e)
            }, e.prototype.activate = function () {
                this._btn_yes.activate(), this._btn_back.activate()
            }, e.prototype.deactivate = function () {
                this._btn_yes.deactivate(), this._btn_back.deactivate()
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._message.destroy(), this._message1.destroy(), this._message2.destroy(), this._message3.destroy(), this._message4.destroy(), this._message5.destroy(), this._btn_yes.dispose(), this._btn_back.dispose()
            }, e
        }(PIXI.Sprite);
    e.TopView = a
}