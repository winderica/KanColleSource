const function677 = function (t, e, i) {
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
    var o = i(3), r = i(9), s = i(1), a = function (t) {
        function e(e) {
            var i = t.call(this) || this, n = o.ORGANIZE_MAIN.getTexture(43),
                a = new PIXI.Sprite(r.COMMON_MISC.getTexture(75));
            i.icon_d2_on = new PIXI.Sprite(r.COMMON_MISC.getTexture(77));
            var _ = new PIXI.Sprite(n);
            return _.position.set(-39, -21), i.addChild(a, _, i.icon_d2_on), i.tween = createjs.Tween.get(_).to({
                x: -39,
                y: -21,
                alpha: 1
            }).to({ x: -57 }, 600, createjs.Ease.cubicIn).wait(200).to({ alpha: 0 }, 300).wait(400), i.tween.loop = !0, i.tween.play(null), i.icon_d2_on.on(s.EventType.MOUSEDOWN, e), i.icon_d2_on.interactive = !0, i.icon_d2_on.buttonMode = !0, i
        }

        return n(e, t), e.prototype.dispose = function () {
            createjs.Tween.removeTweens(this.tween.target), this.tween.setPaused(!0), this.icon_d2_on.removeAllListeners(s.EventType.MOUSEDOWN), this.icon_d2_on = null, this.tween = null, this.removeChildren()
        }, e.prototype.hideOn = function () {
            this.icon_d2_on.visible = !1
        }, e.prototype.showOn = function () {
            this.icon_d2_on.visible = !0
        }, e
    }(PIXI.Container);
    e.CombineGuideView = a
}