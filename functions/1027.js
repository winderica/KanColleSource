const function1027 = function (t, e, i) {
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
        r = i(1028),
        s = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._enabled = !1, i._btn1 = new r.BtnMatchingSelect(e), i._btn2 = new r.BtnMatchingSelect(e), i._btn3 = new r.BtnMatchingSelect(e), i._txt1 = new o.TextBox(19, 4999235), i._txt = new o.TextBox(15, 4999235), i
            }
            return n(e, t), e.prototype.initialize = function () {
                this._btn1.initialize(0), this._btn2.initialize(1), this._btn3.initialize(2), this._txt1.text = "\u3088\u308a\u6b21\u56de\u6f14\u7fd2\u5019\u88dc\u3092\u66f4\u65b0\u5f8c\u306b\u8a2d\u5b9a\u3002", this._txt1.position.set(141, 7), this.addChild(this._btn1), this.addChild(this._btn2), this.addChild(this._btn3), this.addChild(this._txt1), this.addChild(this._txt)
            }, e.prototype.update = function (t, e) {
                this._enabled = t, 1 == t ? (this._btn1.position.set(0, 0), this._btn2.position.set(150, 0), this._btn3.position.set(300, 0), this._txt1.visible = !1, this._txt.position.set(445, 9), 0 == e ? (this._btn1.setSelected(!0), this._btn2.setSelected(!1), this._btn3.setSelected(!1)) : 1 == e ? (this._btn1.setSelected(!1), this._btn2.setSelected(!0), this._btn3.setSelected(!1)) : (this._btn1.setSelected(!1), this._btn2.setSelected(!1), this._btn3.setSelected(!0)), this._txt.text = "\u6f14\u7fd2\u76f8\u624b\u306f\u4e00\u65e5\u4e8c\u56de\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002") : (this._btn1.setSelected(!1), this._btn2.setSelected(!1), this._btn3.setSelected(!1), this._btn1.deactivate(), this._btn2.deactivate(), this._btn3.deactivate(), this._btn1.visible = !1, this._btn2.visible = !1, this._btn3.visible = !1, 0 == e ? (this._btn1.visible = !0, this._btn1.position.set(0, 0)) : 1 == e ? (this._btn2.visible = !0, this._btn2.position.set(0, 0)) : (this._btn3.visible = !0, this._btn3.position.set(0, 0)), this._txt1.visible = !0, this._txt.position.set(490, 10), this._txt.text = "\u66f4\u65b0\u5f8c\u306b\u8a2d\u5b9a\u5909\u66f4\u53ef\u80fd\u3067\u3059\u3002")
            }, e.prototype.activate = function () {
                1 == this._enabled && (this._btn1.activate(), this._btn2.activate(), this._btn3.activate())
            }, e.prototype.deactivate = function () {
                this._btn1.deactivate(), this._btn2.deactivate(), this._btn3.deactivate()
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._btn1.dispose(), this._btn2.dispose(), this._btn3.dispose(), this._txt1.destroy(), this._txt.destroy()
            }, e
        }(PIXI.Container);
    e.CompMatchingSelectBtns = s
}