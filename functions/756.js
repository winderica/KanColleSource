const function756 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(9),
        r = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype.playDrop = function (t) {
                throw new Error("Method not implemented.")
            }, e.prototype.playAdd = function () {
                throw new Error("Method not implemented.")
            }, e.prototype.stop = function () {
                throw new Error("Method not implemented.")
            }, e.prototype.playRemove = function () {
                throw new Error("Method not implemented.")
            }, e.prototype.dispose = function () {
                throw new Error("Method not implemented.")
            }, e.prototype.updateRandomTexture = function () {
                throw new Error("Method not implemented.")
            }, e
        }(PIXI.Container);
    e.Material = r;
    var s = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i.DURATION = 1 / 30 * 1e3;
            var n = new PIXI.Sprite,
                r = new PIXI.Sprite(o.COMMON_MISC.getTexture(146));
            return i._dustBaseY = 15, r.anchor.set(.5, .5), r.position.set(11, i._dustBaseY), r.alpha = 0, n.alpha = 0, i.addChild(n, r), i._materialName = e, i._material = n, i._dust = r, i
        }
        return n(e, t), e.prototype.clone = function () {
            return new e(this._materialName)
        }, e.prototype.dispose = function () {
            this.stop(), this._material = null, this._dust = null, this.removeChildren()
        }, e.prototype.stop = function () {
            createjs.Tween.removeTweens(this._material), createjs.Tween.removeTweens(this._dust)
        }, e.prototype.playAdd = function () {
            this.stop(), this._dust.alpha = 0, createjs.Tween.get(this._material).to({
                x: .75,
                y: -209,
                alpha: 1,
                rotation: 0
            }).to({
                x: 0,
                y: 0
            }, 9 * this.DURATION).to({
                x: 5,
                y: -2,
                rotation: Math.PI / 180 * 10.5
            }, 3 * this.DURATION).to({
                x: 0,
                y: 0,
                rotation: 0
            })
        }, e.prototype.playRemove = function () {
            this.stop();
            var t = 5 * this.DURATION,
                e = 4 * this.DURATION;
            createjs.Tween.get(this._material).to({
                x: 0,
                y: 0,
                rotation: 0,
                alpha: 1
            }).wait(t).to({
                alpha: 0
            }), createjs.Tween.get(this._dust.scale).to({
                x: 0,
                y: 0
            }).to({
                x: 1,
                y: 1
            }, t), createjs.Tween.get(this._dust).to({
                alpha: 1
            }).wait(t).to({
                alpha: 0
            }, e + 2 * this.DURATION), createjs.Tween.get(this._dust).to({
                y: this._dustBaseY
            }).wait(t).to({
                y: this._dustBaseY - 4
            }, e, createjs.Ease.getBackIn(2.5))
        }, e.prototype.playDrop = function (t) {
            this.stop(), createjs.Tween.get(this._material).to({
                y: 300,
                rotation: Math.PI / 180 * (30 * Math.random() - 15)
            }, 100).call(function () {
                t()
            })
        }, e.prototype.updateRandomTexture = function () {
            var t;
            switch (this._materialName) {
                case 0:
                    t = [14, 15, 16, 17];
                    break;
                case 1:
                    t = [4, 5, 6, 7];
                    break;
                case 2:
                    t = [8, 9, 10, 11];
                    break;
                default:
                    throw new Error("Undefined material name.")
            }
            var e = Math.floor(t.length * Math.random());
            this._material.texture = o.COMMON_MISC.getTexture(t[e])
        }, e
    }(r);
    e.SupplyMaterial = s
}