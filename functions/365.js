const function365 = function (t, e, i) {
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
    var o = i(971), r = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), e.prototype.initialize = function () {
            this.alpha = 0, this.visible = !1
        }, e.prototype.update = function (t) {
            var e = this._getTextureNo(t);
            e < 0 ? (this.texture = PIXI.Texture.EMPTY, this.visible = !1) : (this.texture = o.SALLY_ALERT.getTexture(e), this.visible = !0)
        }, e.prototype.activate = function () {
            0 == this.alpha && createjs.Tween.get(this).to({ alpha: 1 }, 300)
        }, e.prototype._getTextureNo = function (t) {
            return 0 == t ? -1 : [-1, 0, 11, 22, 32, 36, 37, 38, 39, 40, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35][t]
        }, e
    }(PIXI.Sprite);
    e.CompAlertBalloon = r
}