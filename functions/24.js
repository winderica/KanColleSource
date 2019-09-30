const function24 = function (t, e, i) {
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
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), Object.defineProperty(e.prototype, "scaleX", {
            get: function () {
                return this.scale.x
            },
            set: function (t) {
                this.scale.x = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "scaleY", {
            get: function () {
                return this.scale.y
            },
            set: function (t) {
                this.scale.y = t
            },
            enumerable: !0,
            configurable: !0
        }), e
    }(PIXI.Container);
    e.Container = o
}