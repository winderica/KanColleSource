const function452 = function (t, e, i) {
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
    var o = i(1347),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._chara = new PIXI.Container, e._box = new o.CutinStatusBox, e.addChild(e._chara), e.addChild(e._box), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "chara", {
                get: function () {
                    return this._chara
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "box", {
                get: function () {
                    return this._box
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function () {
                this.removeChildren(), this._chara.removeChildren(), this._box.dispose()
            }, e
        }(PIXI.Container);
    e.CutinCanvas = r
}