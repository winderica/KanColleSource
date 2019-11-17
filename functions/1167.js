const function1167 = function (t, e, i) {
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
        r = i(411),
        s = i(25),
        a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._message1 = new o.TextBox(22, 1381651), i._message1.position.set(177, 63), i.addChild(i._message1), i._message2 = new o.TextBox(22, 1381651), i._message2.position.set(177, 93), i.addChild(i._message2), i._btn_sashimi = new s.BtnBase(91, e), i._btn_sashimi.position.set(101, 144), i.addChild(i._btn_sashimi), i._btn_tsumire = new s.BtnBase(92, e), i._btn_tsumire.position.set(284, 138), i.addChild(i._btn_tsumire), i._btn_sushi = new s.BtnBase(93, e), i._btn_sushi.position.set(417, 164), i.addChild(i._btn_sushi), i._btn_back = new s.BtnBase(-1, e), i._btn_back.position.set(653, 254), i.addChild(i._btn_back), i
            }
            return n(e, t), e.prototype.initialize = function () {
                this.texture = r.ITEM_ILIST_IWASHI.getTexture(13), this._message1.text = "\u300c\u9c2f\u300d\u3092\u8abf\u7406\u3057\u307e\u3059\u3002", this._message1.x = Math.floor(338 - this._message1.width / 2), this._message2.text = "\u4e0b\u8a18\u306e\u8abf\u7406\u6cd5\u304c\u9078\u629e\u53ef\u80fd\u3067\u3059\u3002", this._message2.x = Math.floor(338 - this._message2.width / 2);
                var t = r.ITEM_ILIST_IWASHI.getTexture(4);
                this._btn_sashimi.initialize(t), t = r.ITEM_ILIST_IWASHI.getTexture(5), this._btn_tsumire.initialize(t), t = r.ITEM_ILIST_IWASHI.getTexture(6), this._btn_sushi.initialize(t), t = r.ITEM_ILIST_IWASHI.getTexture(0), this._btn_back.initialize(t)
            }, e.prototype.activate = function () {
                this._btn_sashimi.activate(), this._btn_tsumire.activate(), this._btn_sushi.activate(), this._btn_back.activate()
            }, e.prototype.deactivate = function () {
                this._btn_sashimi.deactivate(), this._btn_tsumire.deactivate(), this._btn_sushi.deactivate(), this._btn_back.deactivate()
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._message1.destroy(), this._message2.destroy(), this._btn_sashimi.dispose(), this._btn_tsumire.dispose(), this._btn_sushi.dispose(), this._btn_back.dispose()
            }, e
        }(PIXI.Sprite);
    e.TopView = a
}