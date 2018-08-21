const function290 = function (t, e, i) {
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
    var o = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.dispose = function () {
                e.deactivate()
            }, e._onTimer = function () {
                e.rotation += Math.PI / 180 * 2
            }, e
        }

        return n(e, t), e.prototype.setUp = function (t) {
            this.texture = t, this.pivot.set(this.width / 2, this.height / 2)
        }, e.prototype.activate = function () {
            null == this._t && (this._t = createjs.Tween.get(this, { loop: !0 }).wait(1e3).call(this._onTimer))
        }, e.prototype.deactivate = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null)
        }, e
    }(PIXI.Sprite);
    e.Gear = o
}