const function1442 = function (t, e, i) {
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
    var o = i(1443), r = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._rader_f = new o.Rader(!0), e._rader_f.position.set(112, 603), e._rader_e = new o.Rader(!1), e._rader_e.position.set(1088, 117), e.resetChildren(), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "rader_f", {
            get: function () {
                return this._rader_f
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "rader_e", {
            get: function () {
                return this._rader_e
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function (t) {
            this._rader_f.y = t ? 642 : 603, this._rader_f.initialize(), this._rader_e.initialize()
        }, e.prototype.resetChildren = function () {
            this.addChild(this._rader_f), this.addChild(this._rader_e)
        }, e
    }(PIXI.Container);
    e.RaderLayer = r
}