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
    var o = i(4), r = i(3), s = i(27), a = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._message1 = new o.TextBox(22, 1381651), i._message1.position.set(167, 96), i.addChild(i._message1), i._message2 = new o.TextBox(22, 1381651), i._message2.position.set(167, 126), i.addChild(i._message2), i._btn_shigen = new s.BtnBase(11, e), i._btn_shigen.position.set(146, 180), i.addChild(i._btn_shigen), i._btn_kanmi = new s.BtnBase(13, e), i._btn_kanmi.position.set(284, 180), i.addChild(i._btn_kanmi), i._btn_shizai = new s.BtnBase(12, e), i._btn_shizai.position.set(422, 180), i.addChild(i._btn_shizai), i._btn_back = new s.BtnBase(-1, e), i._btn_back.position.set(585, 278), i.addChild(i._btn_back), i
        }

        return n(e, t), e.prototype.initialize = function () {
            this.texture = r.ITEM_ILIST_PRESENTBOX.getTexture(9), this._message1.text = "\u300c\u30d7\u30ec\u30bc\u30f3\u30c8\u7bb1\u300d\u3092\u958b\u5c01\u3057\u307e\u3059\u3002", this._message1.x = 339 - this._message1.width / 2, this._message2.text = "\u4e0b\u8a18\u306e\u30c1\u30e7\u30a4\u30b9\u304c\u53ef\u80fd\u3067\u3059\u3002", this._message2.x = 339 - this._message2.width / 2;
            var t = r.ITEM_ILIST_PRESENTBOX.getTexture(3);
            this._btn_shigen.initialize(t), t = r.ITEM_ILIST_PRESENTBOX.getTexture(4), this._btn_kanmi.initialize(t), t = r.ITEM_ILIST_PRESENTBOX.getTexture(5), this._btn_shizai.initialize(t), t = r.ITEM_ILIST_PRESENTBOX.getTexture(0), this._btn_back.initialize(t)
        }, e.prototype.activate = function () {
            this._btn_shigen.activate(), this._btn_kanmi.activate(), this._btn_shizai.activate(), this._btn_back.activate()
        }, e.prototype.deactivate = function () {
            this._btn_shigen.deactivate(), this._btn_kanmi.deactivate(), this._btn_shizai.deactivate(), this._btn_back.deactivate()
        }, e.prototype.dispose = function () {
            this.removeChildren(), this._message1.destroy(), this._message2.destroy(), this._btn_shigen.dispose(), this._btn_kanmi.dispose(), this._btn_shizai.dispose(), this._btn_back.dispose()
        }, e
    }(PIXI.Sprite);
    e.TopView = a
}