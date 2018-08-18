const function1029 = function (t, e, i) {
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
    var o = i(38), r = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._beek = new PIXI.Sprite, e._beek.y = 402, e.addChild(e._beek), e
        }

        return n(e, t), e.prototype.initialize = function () {
            this.texture = o.SALLY_EXPEDITION.getTexture(40), this._beek.texture = o.SALLY_EXPEDITION.getTexture(39), this._beek.visible = !1
        }, e.prototype.update = function (t) {
            this._beek.x = t - 16, this._beek.visible = !0
        }, e
    }(PIXI.Sprite);
    e.ExpeditionListFrame = r
}