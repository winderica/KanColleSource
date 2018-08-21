const function278 = function (t, e, i) {
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
    var o = i(54), r = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._shutter = new o.Shutter, e.addChild(e._shutter), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "shutter", {
            get: function () {
                return this._shutter
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function () {
            this.shutter.initializeDark(), this.shutter.close(0)
        }, e.prototype.start = function (t) {
            this._model = t
        }, e
    }(PIXI.Container);
    e.BattleResultSceneBase = r
}