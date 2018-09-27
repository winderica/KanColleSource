const function85 = function (t, e, i) {
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
    var o = i(3), r = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._text = new PIXI.Sprite, e._text.y = 11, e.addChild(e._text), e
        }

        return n(e, t), e.prototype.initialize = function (t, e) {
            this.texture = o.COMMON_MAIN.getTexture(64), this._text.texture = t, this._text.x = e
        }, e.prototype.dispose = function () {
            this.removeChildren()
        }, e
    }(PIXI.Sprite);
    e.TitleBar = r
}