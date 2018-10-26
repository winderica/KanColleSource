const function357 = function (t, e, i) {
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
    var o = i(17), r = i(1), s = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._onGo = function (t, e) {
                void 0 === t && (t = 0), null != i._cb && i._cb(t, e)
            }, i._onCancel = function () {
                null != i._cb && 1 == i._cancelArea.buttonMode && i._cb(0, -1)
            }, i._cb = e, i._cancelArea = new o.FadeBox(.2), i._cancelArea.hide(0), i._cancelArea.interactive = !0, i.addChild(i._cancelArea), i
        }

        return n(e, t), Object.defineProperty(e.prototype, "cancelArea", {
            get: function () {
                return this._cancelArea
            }, enumerable: !0, configurable: !0
        }), e.prototype.activate = function () {
            this._cancelArea.buttonMode = !0, this._cancelArea.on(r.EventType.CLICK, this._onCancel)
        }, e.prototype.deactivate = function () {
            this._cancelArea.buttonMode = !1, this._cancelArea.off(r.EventType.CLICK, this._onCancel)
        }, e.prototype.dispose = function () {
            this.deactivate(), this.removeChildren(), this._cancelArea = null, this._cb = null
        }, e
    }(PIXI.Container);
    e.ContainerDeckSelectBase = s
}