const function202 = function (t, e, i) {
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
    var o = i(32), r = function (t) {
        function e(e) {
            void 0 === e && (e = null);
            var i = t.call(this) || this;
            return i._img = new PIXI.Sprite, i.addChild(i._img), null != e && i.update(e), i
        }

        return n(e, t), e.prototype.update = function (t) {
            this._img.texture = t, this._img.x = -Math.round(this._img.width / 2), this._img.y = -Math.round(this._img.height / 2)
        }, e
    }(o.Container);
    e.CenteringSprite = r
}