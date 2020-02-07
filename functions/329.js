const function329 = function (t, e, i) {
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
    var o = i(57),
        r = function (t) {
            function e(e) {
                var i = t.call(this) || this,
                    n = null,
                    r = null;
                switch (e) {
                    case 1:
                        n = o.ORGANIZE_MAIN.getTexture(55), r = o.ORGANIZE_MAIN.getTexture(56);
                        break;
                    case 2:
                        n = o.ORGANIZE_MAIN.getTexture(51), r = o.ORGANIZE_MAIN.getTexture(52)
                }
                return i.txt_txt1 = new PIXI.Sprite(n), i.txt_txt2 = new PIXI.Sprite(r), i.txt_txt2.anchor.set(1, 1), i.txt_txt2.position.set(540, 42), i.addChild(i.txt_txt1, i.txt_txt2), i
            }
            return n(e, t), e.prototype.hideTxt2 = function () {
                this.txt_txt2.visible = !1
            }, e.prototype.showTxt2 = function () {
                this.txt_txt2.visible = !0
            }, e.prototype.dispose = function () {
                this.txt_txt1 = null, this.txt_txt2 = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.PresetTitle = r
}