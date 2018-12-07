const function1133 = function (t, e, i) {
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
    var o = i(3), r = i(1), s = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._btn = new a(e), i.addChild(i._btn), i
        }

        return n(e, t), e.prototype.initialize = function () {
            this._btn.initialize()
        }, e.prototype.activate = function () {
            this._btn.activate()
        }, e.prototype.update = function (t) {
            this._btn.update(t), 0 == t ? this._btn.position.set(801, 667) : this._btn.position.set(207, 666)
        }, e.prototype.deactivate = function () {
            this._btn.deactivate()
        }, e.prototype.dispose = function () {
            this._btn.dispose()
        }, e
    }(PIXI.Container);
    e.TabContainer = s;
    var a = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._onClick = function () {
                null != i._cb_onClick && i._cb_onClick()
            }, i._cb_onClick = e, i._over = new PIXI.Sprite, i.addChild(i._over), i.interactive = !0, i
        }

        return n(e, t), e.prototype.initialize = function () {
        }, e.prototype.update = function (t) {
            0 == t ? (this._texture = o.ITEM_ISHOP.getTexture(6), this._over.texture = o.ITEM_ISHOP.getTexture(7)) : (this._texture = o.ITEM_ISHOP.getTexture(4), this._over.texture = o.ITEM_ISHOP.getTexture(5))
        }, e.prototype.activate = function () {
            1 != this.buttonMode && (this.buttonMode = !0, this.on(r.EventType.CLICK, this._onClick), this._startTween())
        }, e.prototype.deactivate = function () {
            this.buttonMode = !1, this.off(r.EventType.CLICK, this._onClick), this._stopTween()
        }, e.prototype.dispose = function () {
            this.deactivate()
        }, e.prototype._startTween = function () {
            null == this._t && (this._over.alpha = 0, this._t = createjs.Tween.get(this._over, { loop: !0 }).to({ alpha: 1 }, 500).to({ alpha: 0 }, 500))
        }, e.prototype._stopTween = function () {
            null != this._t && (this._over.alpha = 0, this._t.setPaused(!0), this._t = null)
        }, e
    }(PIXI.Sprite)
}