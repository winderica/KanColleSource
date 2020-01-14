const function742 = function (t, e, i) {
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
    var o = i(3),
        r = i(4),
        s = i(58),
        a = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._onClickYes = function () {
                    e.onClickYES()
                }, e._onClickNo = function () {
                    e.onClickNO()
                }, e.text = new r.TextBox(24, 5523516);
                var i = o.ORGANIZE_MAIN.getTexture(28),
                    n = o.ORGANIZE_MAIN.getTexture(14),
                    a = o.ORGANIZE_MAIN.getTexture(7);
                return e.message = new PIXI.Sprite(i), e.buttonYes = new s.SimpleButton(n, n), e.buttonNo = new s.SimpleButton(a, a), e.text.position.set(Math.floor(435 - .5 * e.text.width), Math.floor(138 - .5 * e.text.height)), e.buttonYes.position.set(171, 213), e.buttonNo.position.set(385, 213), e.buttonYes.onClick = e._onClickYes, e.buttonNo.onClick = e._onClickNo, e.addChild(e.message, e.text, e.buttonYes, e.buttonNo), e
            }
            return n(e, t), e.prototype.update = function (t) {
                this.text.text = t + " \u2192 " + (t - 1)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this.buttonYes.dispose(), this.buttonNo.dispose(), this.text.destroy(), this.onClickYES = null, this.onClickNO = null, this.message = null, this.buttonYes = null, this.buttonNo = null, this.text = null
            }, e
        }(PIXI.Container);
    e.ExtensionPresetConfirm = a
}