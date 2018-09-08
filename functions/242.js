const function242 = function (t, e, i) {
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
    var o = i(9), r = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._bg = new PIXI.Sprite, e.addChild(e._bg), e._gear = new PIXI.Sprite, e._gear.anchor.set(.5), e._gear.position.set(32, 45), e.addChild(e._gear), e._text = new PIXI.Sprite, e._text.x = 60, e.addChild(e._text), e
        }

        return n(e, t), e.prototype.initialize = function (t) {
            0 == t ? (this._bg.texture = o.COMMON_MISC.getTexture(176), this._gear.texture = o.COMMON_MISC.getTexture(178)) : (this._bg.texture = o.COMMON_MISC.getTexture(177), this._gear.texture = o.COMMON_MISC.getTexture(179))
        }, e.prototype.update = function (t) {
            this._text.texture = t, this._text.y = Math.round(45 - this._text.height / 2)
        }, e.prototype.activate = function () {
            null == this._t && (this._t = createjs.Tween.get(this._gear, { loop: !0 }).to({ rotation: 2 * Math.PI }, 6e3))
        }, e.prototype.deactivate = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null)
        }, e.prototype.dispose = function () {
            this.deactivate()
        }, e
    }(PIXI.Container);
    e.PhaseTitle = r
}