const function363 = function (t, e, i) {
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
    var o = i(364), r = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._rader = new o.Rader, e._rader.x = -188, e._rader.y = -225, e.addChild(e._rader), e
        }

        return n(e, t), e.prototype.initialize = function () {
            this._rader.initialize()
        }, e.prototype.update = function (t) {
            this._rader.update(t)
        }, e.prototype.dispose = function () {
            this._rader.dispose()
        }, e
    }(PIXI.Container);
    e.RaderCanvas = r
}