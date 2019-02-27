const function1018 = function (t, e, i) {
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
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._txt1 = new o.TextBox(16, 4999235), e._txt2 = new o.TextBox(16, 4999235), e._txt3 = new o.TextBox(16, 4999235), e.addChild(e._txt1), e.addChild(e._txt2), e.addChild(e._txt3), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._txt1.text = "\u73fe\u5728\u306e\u6f14\u7fd2\u5019\u88dc\u306f", this._txt2.text = "\u6f14\u7fd2\u8266\u968a\u3010\u7b2c\u4e00\u7fa4\u3011", this._txt3.text = "\u3088\u308a\u62bd\u51fa\u3055\u308c\u305f\u3082\u306e\u3067\u3059\u3002", this._txt2.x = this._txt1.width
            }, e.prototype.update = function (t) {
                0 == t ? (this._txt2.style.fill = 6595904, this._txt2.text = "\u6f14\u7fd2\u8266\u968a\u3010\u7b2c\u4e00\u7fa4\u3011") : 1 == t ? (this._txt2.style.fill = 4236648, this._txt2.text = "\u6f14\u7fd2\u8266\u968a\u3010\u7b2c\u4e8c\u7fa4\u3011") : (this._txt2.style.fill = 4232101, this._txt2.text = "\u3010\u5168\u4f53\u3011"), this._txt3.x = this._txt2.x + this._txt2.width
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._txt1.destroy(), this._txt1 = null, this._txt2.destroy(), this._txt2 = null, this._txt3.destroy(), this._txt3 = null
            }, e
        }(PIXI.Container);
    e.CompSubTitle = r
}