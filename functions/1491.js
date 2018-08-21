const function1491 = function (t, e, i) {
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
            return e._img = new PIXI.Sprite, e._img.visible = !1, e.addChild(e._img), e
        }

        return n(e, t), e.prototype.createShowTween = function (t, e, i, n) {
            return void 0 === n && (n = 0), this._img.alpha = 0, this._img.visible = !0, this._img.texture = t, null != e ? (this._img.x = e.x, this._img.y = e.y) : this._img.position.set(0), createjs.Tween.get(this._img).wait(n).to({ alpha: 1 }, i)
        }, e.prototype.createHideTween = function (t, e) {
            var i = this;
            void 0 === e && (e = 0);
            var n = createjs.Tween.get(this._img).wait(e);
            return 1 == this._img.visible && n.to({ alpha: 0 }, t).call(function () {
                i._img.visible = !1
            }), n
        }, e.prototype.dispose = function () {
            this.removeChildren(), this._img = null
        }, e
    }(PIXI.Container);
    e.LayerMVP = o
}