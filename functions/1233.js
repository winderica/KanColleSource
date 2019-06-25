const function1233 = function (t, e, i) {
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
        r = i(138),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._bg = new PIXI.Sprite, e._text = new o.TextBox(39, 16774898), e._text.anchor.set(.5, 0), e.addChild(e._bg), e.addChild(e._text), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "bg", {
                get: function () {
                    return this._bg
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "text", {
                get: function () {
                    return this._text
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t) {
                void 0 === t && (t = ""), this._bg.texture = r.PRAC_MAIN.getTexture(7), this._text.position.set(this._bg.width / 2, 9), this.update(t)
            }, e.prototype.update = function (t) {
                this._text.text = t
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._text.destroy()
            }, e
        }(PIXI.Container);
    e.PracticeTitleBar = s
}