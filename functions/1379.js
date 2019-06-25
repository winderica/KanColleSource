const function1379 = function (t, e, i) {
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
    var o = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._chara = [];
            for (var i = 0; i < 3; i++) {
                var n = new PIXI.Container;
                e._chara.push(n), e.addChild(n)
            }
            return e._explosion = new PIXI.Container, e.addChild(e._explosion), e
        }
        return n(e, t), Object.defineProperty(e.prototype, "chara", {
            get: function () {
                return this._chara
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "explosion", {
            get: function () {
                return this._explosion
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.dispose = function () {
            for (var t = 0; t < 3; t++) this._chara[t].removeChildren(), this._chara[t] = null;
            this._explosion.removeChildren(), this.removeChildren(), this._chara = null, this._explosion = null
        }, e
    }(PIXI.Container);
    e.CutinColoradoAttackCanvas = o
}