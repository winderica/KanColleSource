const function113 = function (t, e, i) {
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
            e.texture = o.COMMON_MAIN.getTexture(26);
            var i = o.COMMON_MAIN.getTexture(27), n = new PIXI.Sprite(i), r = new PIXI.Sprite(i);
            n.alpha = 0, r.alpha = 0, r.position.set(0, 15), e.addChild(n, r);
            var s = createjs.Tween.get(n).to({ alpha: 0 }).wait(250).to({ alpha: 1 }).wait(250).to({ alpha: 0 }).wait(250),
                a = createjs.Tween.get(r).to({ alpha: 0 }).wait(250).to({ alpha: 0 }).wait(250).to({ alpha: 1 }).wait(250);
            return s.loop = a.loop = !0, s.play(null), a.play(null), e.tweenIcon_arrow_on_0 = s, e.tweenIcon_arrow_on_1 = a, e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.tweenIcon_arrow_on_0.setPaused(!0), this.tweenIcon_arrow_on_1.setPaused(!0), createjs.Tween.removeTweens(this.tweenIcon_arrow_on_0.target), createjs.Tween.removeTweens(this.tweenIcon_arrow_on_1.target), this.tweenIcon_arrow_on_0 = null, this.tweenIcon_arrow_on_1 = null, this.removeChildren()
        }, e
    }(PIXI.Sprite);
    e.DownArrowAnimationView = r;
    var s = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.texture = o.COMMON_MAIN.getTexture(26), e
        }

        return n(e, t), e
    }(PIXI.Sprite);
    e.DisableDownArrowAnimationView = s
}