const function196 = function (t, e, i) {
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
    var o = i(21), r = function (t) {
        function e() {
            var e = t.call(this) || this, i = o.COMMON_MAIN.getTexture(32), n = new PIXI.Sprite(i),
                r = new PIXI.Sprite(i), s = new PIXI.Sprite(i), a = new PIXI.Sprite(i), _ = new PIXI.Sprite(i),
                l = new PIXI.Sprite(i);
            return e.addChild(n, r, s, a, _, l), a.scale.x = _.scale.x = l.scale.x = -1, n.anchor.set(.5, .613793103448276), r.anchor.set(.5, .613793103448276), s.anchor.set(.5, .613793103448276), a.anchor.set(.5, .613793103448276), _.anchor.set(.5, .613793103448276), l.anchor.set(.5, .613793103448276), n.alpha = r.alpha = s.alpha = 0, a.alpha = _.alpha = l.alpha = 0, e.kemuri_L_0 = n, e.kemuri_L_1 = r, e.kemuri_L_2 = s, e.kemuri_R_0 = a, e.kemuri_R_1 = _, e.kemuri_R_2 = l, e.stop(), e
        }

        return n(e, t), e.prototype.play = function (t) {
            switch (t) {
                case 75:
                    this._play(1e3);
                    break;
                case 50:
                    this._play(500);
                    break;
                case 25:
                    this._play(200);
                    break;
                default:
                    this.stop()
            }
        }, e.prototype._play = function (t) {
            this.stop();
            var e = createjs.Tween.get(this.kemuri_L_0).wait(t).to({
                x: -18,
                y: 29,
                width: 3.15,
                height: 3.9,
                alpha: 1
            }).to({ x: -17.325, y: 39, width: 118.5, height: 143.175 }, 400).to({
                x: -18,
                y: 39,
                width: 139.5,
                height: 168.525,
                alpha: 0
            }, 400).wait(400), i = createjs.Tween.get(this.kemuri_L_1).wait(t).wait(200).to({
                x: -42,
                y: 5,
                width: 3.15,
                height: 3.9,
                alpha: 1
            }).to({ x: -42, y: 5, width: 180, height: 218 }, 400).to({
                x: -42,
                y: 5,
                width: 225,
                height: 271.875,
                alpha: 0
            }, 400).wait(200), n = createjs.Tween.get(this.kemuri_L_2).wait(t).wait(500).to({
                x: -42,
                y: -27,
                width: 3.15,
                height: 3.9,
                alpha: 1
            }).to({ x: -42, y: -27, width: 180, height: 218 }, 300).to({
                x: -42,
                y: -27,
                width: 225,
                height: 271.875,
                alpha: 0
            }, 400), o = createjs.Tween.get(this.kemuri_R_0).wait(t).to({
                x: 246,
                y: 39,
                width: 3.15,
                height: 3.9,
                alpha: 1
            }).to({ x: 266, y: 29, width: 118.5, height: 143.175 }, 400).to({
                x: 282,
                y: 11,
                width: 139.5,
                height: 168.525,
                alpha: 0
            }, 400).wait(400), r = createjs.Tween.get(this.kemuri_R_1).wait(t).wait(200).to({
                x: 288,
                y: 5,
                width: 2.1,
                height: 2.6,
                alpha: 1
            }).to({ x: 288, y: 5, width: 180, height: 217.5 }, 400).to({
                x: 288,
                y: 5,
                width: 225,
                height: 271.875,
                alpha: 0
            }, 400).wait(200), s = createjs.Tween.get(this.kemuri_R_2).wait(t).wait(500).to({
                x: 288,
                y: -27,
                width: 3.15,
                height: 3.9,
                alpha: 1
            }).to({ x: 288, y: -27, width: 180, height: 217.5 }, 300).to({
                x: 288,
                y: -27,
                width: 225,
                height: 271.875,
                alpha: 0
            }, 400);
            e.loop = i.loop = n.loop = !0, o.loop = r.loop = s.loop = !0, this.tweenKemuri_L_0 = e, this.tweenKemuri_L_1 = i, this.tweenKemuri_L_2 = n, this.tweenKemuri_R_0 = o, this.tweenKemuri_R_1 = r, this.tweenKemuri_R_2 = s, this.visible = !0
        }, e.prototype.stop = function () {
            this.kemuri_L_0.width = this.kemuri_L_0.texture.width, this.kemuri_L_0.height = this.kemuri_L_0.texture.height, this.kemuri_L_1.width = this.kemuri_L_1.texture.width, this.kemuri_L_1.height = this.kemuri_L_1.texture.height, this.kemuri_L_2.width = this.kemuri_L_2.texture.width, this.kemuri_L_2.height = this.kemuri_L_2.texture.height, this.kemuri_R_0.width = this.kemuri_R_0.texture.width, this.kemuri_R_0.height = this.kemuri_R_0.texture.height, this.kemuri_R_1.width = this.kemuri_R_1.texture.width, this.kemuri_R_1.height = this.kemuri_R_1.texture.height, this.kemuri_R_2.width = this.kemuri_R_2.texture.width, this.kemuri_R_2.height = this.kemuri_R_2.texture.height, null != this.tweenKemuri_L_0 && (this.tweenKemuri_L_0.setPaused(!0), createjs.Tween.removeTweens(this.tweenKemuri_L_0.target)), null != this.tweenKemuri_L_1 && (this.tweenKemuri_L_1.setPaused(!0), createjs.Tween.removeTweens(this.tweenKemuri_L_1.target)), null != this.tweenKemuri_L_2 && (this.tweenKemuri_L_2.setPaused(!0), createjs.Tween.removeTweens(this.tweenKemuri_L_2.target)), null != this.tweenKemuri_R_0 && (this.tweenKemuri_R_0.setPaused(!0), createjs.Tween.removeTweens(this.tweenKemuri_R_0.target)), null != this.tweenKemuri_R_1 && (this.tweenKemuri_R_1.setPaused(!0), createjs.Tween.removeTweens(this.tweenKemuri_R_1.target)), null != this.tweenKemuri_R_2 && (this.tweenKemuri_R_2.setPaused(!0), createjs.Tween.removeTweens(this.tweenKemuri_R_2.target)), this.kemuri_L_0.alpha = this.kemuri_L_1.alpha = this.kemuri_L_2.alpha = 0, this.kemuri_R_0.alpha = this.kemuri_R_1.alpha = this.kemuri_R_2.alpha = 0, this.tweenKemuri_L_0 = null, this.tweenKemuri_L_1 = null, this.tweenKemuri_L_2 = null, this.tweenKemuri_R_0 = null, this.tweenKemuri_R_1 = null, this.tweenKemuri_R_2 = null, this.visible = !1
        }, e.prototype.dispose = function () {
            this.stop(), this.removeChild(this.kemuri_L_0), this.removeChild(this.kemuri_L_1), this.removeChild(this.kemuri_L_2), this.removeChild(this.kemuri_R_0), this.removeChild(this.kemuri_R_1), this.removeChild(this.kemuri_R_2), this.kemuri_L_0 = null, this.kemuri_L_1 = null, this.kemuri_L_2 = null, this.kemuri_R_0 = null, this.kemuri_R_1 = null, this.kemuri_R_2 = null
        }, e
    }(PIXI.Container);
    e.BannerSmoke = r
}