const function1213 = function (t, e, i) {
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
    var o = i(5), r = i(19), s = i(135), a = i(1214), _ = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i._friend = e, i._circle = new PIXI.Sprite, i._circle.anchor.set(.5, .5), i._circle.scale.set(.1), i._circle.visible = !1, i._content = new a.Content(e), i._content.alpha = 0, i.addChild(i._circle), i.addChild(i._content);
            var n = new PIXI.Graphics;
            return n.beginFill(65280, .5), i._drawGraphics(n), n.endFill(), i.addChild(n), i.mask = n, i._friend ? (i.circle.position.set(255, 311), i.content.position.set(-150, 0)) : (i.circle.position.set(345, 311), i.content.position.set(150, 0)), i
        }

        return n(e, t), Object.defineProperty(e.prototype, "circle", {
            get: function () {
                return this._circle
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "content", {
            get: function () {
                return this._content
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function (t, e) {
            this._friend ? this._circle.texture = s.PRAC_MAIN.getTexture(3) : this._circle.texture = s.PRAC_MAIN.getTexture(4), this._content.initialize(t, e)
        }, e.prototype.getAnimationTask = function () {
            var t = new r.TweenTask;
            t.addTween(createjs.Tween.get(this._content.medal).to({ alpha: 1 }, 100));
            for (var e = this._content.elements, i = this._friend ? 0 : 173, n = 0; n < e.length; n++) {
                var o = e[n];
                0 != o.visible && t.addTween(createjs.Tween.get(o).wait(300 + 100 * n).to({
                    x: i,
                    alpha: 1
                }, 200, createjs.Ease.sineIn))
            }
            return t
        }, e.prototype._drawGraphics = function (t) {
            this._friend ? (t.moveTo(0, 0), t.lineTo(0, o.default.height), t.lineTo(o.default.width / 2 - 128, o.default.height), t.lineTo(o.default.width / 2 + 128, 0)) : (t.moveTo(128, 0), t.lineTo(o.default.width / 2, 0), t.lineTo(o.default.width / 2, o.default.height), t.lineTo(-128, o.default.height))
        }, e
    }(PIXI.Container);
    e.Panel = _
}