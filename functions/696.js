const function696 = function (t, e, i) {
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
            var e = t.call(this) || this,
                i = [5.5, 5.15],
                n = [
                    [9.1, 0],
                    [7.25, 0],
                    [4.6, 4.1],
                    [1.95, 0],
                    [.05, 0],
                    [3.55, 5.25],
                    [0, 10.4],
                    [1.85, 10.4],
                    [4.5, 6.3],
                    [7.25, 10.4],
                    [9.15, 10.4],
                    [5.5, 5.15]
                ];
            return e.beginFill(4999235, 1), e.moveTo(i[0], i[1]), n.forEach(function (t) {
                e.lineTo(t[0], t[1])
            }), e.endFill(), e
        }
        return n(e, t), e.prototype.dispose = function () {
            this.clear()
        }, e
    }(PIXI.Graphics);
    e.CrossCharacter = o
}