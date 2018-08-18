const function8 = function (t, e, i) {
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
    var o = i(5), r = function (t) {
        function e(e, i, n, r) {
            void 0 === i && (i = 0), void 0 === n && (n = o.default.width), void 0 === r && (r = o.default.height);
            var s = t.call(this) || this;
            return s.beginFill(i, e), s.drawRect(0, 0, n, r), s.endFill(), s.interactive = !0, s
        }

        return n(e, t), e
    }(PIXI.Graphics);
    e.AreaBox = r
}