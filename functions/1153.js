const function1153 = function (t, e, i) {
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
        r = i(407),
        s = i(25),
        a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._message1 = new o.TextBox(22, 1381651), i._message1.position.set(177, 81), i.addChild(i._message1), i._message2 = new o.TextBox(22, 1381651), i._message2.position.set(177, 110), i.addChild(i._message2), i._btn_sashimi = new s.BtnBase(31, e), i._btn_sashimi.position.set(114, 144), i.addChild(i._btn_sashimi), i._btn_shio = new s.BtnBase(32, e), i._btn_shio.position.set(267, 144), i.addChild(i._btn_shio), i._btn_kaba = new s.BtnBase(33, e), i._btn_kaba.position.set(420, 144), i.addChild(i._btn_kaba), i._btn_back = new s.BtnBase(-1, e), i._btn_back.position.set(653, 273), i.addChild(i._btn_back), i
            }
            return n(e, t), e.prototype.initialize = function () {
                this.texture = r.ITEM_ILIST_SANMA.getTexture(13), this._message1.text = "\u300c\u79cb\u5200\u9b5a\u300d\u3092\u8abf\u7406\u3057\u307e\u3059\u3002", this._message1.x = Math.floor(338 - this._message1.width / 2), this._message2.text = "\u4e0b\u8a18\u306e\u8abf\u7406\u6cd5\u304c\u9078\u629e\u53ef\u80fd\u3067\u3059\u3002", this._message2.x = Math.floor(338 - this._message2.width / 2);
                var t = r.ITEM_ILIST_SANMA.getTexture(4);
                this._btn_sashimi.initialize(t), t = r.ITEM_ILIST_SANMA.getTexture(5), this._btn_shio.initialize(t), t = r.ITEM_ILIST_SANMA.getTexture(6), this._btn_kaba.initialize(t), t = r.ITEM_ILIST_SANMA.getTexture(0), this._btn_back.initialize(t)
            }, e.prototype.activate = function () {
                this._btn_sashimi.activate(), this._btn_shio.activate(), this._btn_kaba.activate(), this._btn_back.activate()
            }, e.prototype.deactivate = function () {
                this._btn_sashimi.deactivate(), this._btn_shio.deactivate(), this._btn_kaba.deactivate(), this._btn_back.deactivate()
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._message1.destroy(), this._message2.destroy(), this._btn_sashimi.dispose(), this._btn_shio.dispose(), this._btn_kaba.dispose(), this._btn_back.dispose()
            }, e
        }(PIXI.Sprite);
    e.TopView = a
}