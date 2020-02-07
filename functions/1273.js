const function1273 = function (t, e, i) {
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
    var o = i(18),
        r = i(132),
        s = i(51),
        a = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._bg = new r.MapBG, e._black = new o.FadeBox(1), e._shutter = new s.Shutter, e.addChild(e._bg), e.addChild(e._black), e.addChild(e._shutter), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "bg", {
                get: function () {
                    return this._bg
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "black", {
                get: function () {
                    return this._black
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "shutter", {
                get: function () {
                    return this._shutter
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                this._shutter.initializeLight()
            }, e
        }(PIXI.Container);
    e.ViewMain = a
}