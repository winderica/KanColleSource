const function1432 = function (t, e, i) {
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
    var o = i(16), r = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype.showSanshiki = function (t, e) {
            var i = this, n = o.BATTLE_MAIN.getTexture(134), r = new PIXI.Sprite(n);
            r.x = t.x + 215, r.y = t.y + 14, r.alpha = 0, this.addChild(r), createjs.Tween.get(r).wait(e).to({ alpha: 1 }, 300).wait(600).to({ alpha: 0 }, 300).call(function () {
                i.removeChild(r)
            })
        }, e.prototype.showDanmaku = function (t, e) {
            var i = this, n = o.BATTLE_MAIN.getTexture(132), r = new PIXI.Sprite(n);
            r.x = t.x + 215, r.y = t.y + 14, r.alpha = 0, this.addChild(r), createjs.Tween.get(r).wait(e).to({ alpha: 1 }, 300).wait(600).to({ alpha: 0 }, 300).call(function () {
                i.removeChild(r)
            })
        }, e.prototype.dispose = function () {
        }, e
    }(PIXI.Container);
    e.BannerInfoLayer = r
}