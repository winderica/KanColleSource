const function708 = function (t, e, i) {
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
        r = i(58),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._onMouseOver = function () {
                    e.balloon.alpha = 1
                }, e._onMouseOut = function () {
                    e.balloon.alpha = 0
                }, e._onClick = function () {
                    e.onClick()
                };
                var i = o.ORGANIZE_MAIN.getTexture(53),
                    n = o.ORGANIZE_MAIN.getTexture(54),
                    s = o.ORGANIZE_MAIN.getTexture(38);
                return e.iconText = new r.SimpleButton(i, n), e.balloon = new PIXI.Sprite(s), e.balloon.alpha = 0, e.balloon.x = -28, e.balloon.y = -37, e.iconText.onMouseOver = e._onMouseOver, e.iconText.onMouseOut = e._onMouseOut, e.iconText.onClick = e._onClick, e.addChild(e.iconText, e.balloon), e
            }
            return n(e, t), e.prototype.update = function (t) {
                this.iconText.interactive = !1, t && (this.iconText.interactive = !0)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this.iconText.onMouseOver = this._onMouseOver = null, this.iconText.onMouseOut = this._onMouseOut = null, this.iconText.onClick = this._onClick = null, this.iconText.dispose(), this.iconText = null, this.balloon = null, this.onClick = null
            }, e
        }(PIXI.Container);
    e.BreakDeckView = s
}