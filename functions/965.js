const function965 = function (t, e, i) {
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
    var o = i(42), r = i(360), s = function (t) {
        function e(e) {
            var i = t.call(this, e) || this;
            return i._overlay = new PIXI.Sprite, i.addChild(i._overlay), i._t = createjs.Tween.get(i._overlay, { loop: !0 }).to({ alpha: 0 }, 600).to({ alpha: 1 }, 600), i._t.setPaused(!0), i
        }

        return n(e, t), e.prototype.initialize = function (e) {
            this._overlay.texture = o.SALLY_EVENT.getTexture(3), this.texture = o.SALLY_EVENT.getTexture(2), t.prototype.initialize.call(this, e)
        }, e.prototype.dispose = function () {
            t.prototype.dispose.call(this), this._t.setPaused(!1), this._t = null
        }, e.prototype._update = function (t) {
            1 == this.selected ? (this._t.setPaused(!0), this._overlay.alpha = 1) : 1 == t ? (this._t.setPaused(!0), this._overlay.alpha = 1) : this._t.setPaused(!1)
        }, e
    }(r.AreaIconBtn);
    e.EventAreaIconBtn = s
}