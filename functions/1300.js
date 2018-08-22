const function1300 = function (t, e, i) {
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
    var o = i(18), r = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._layer = new PIXI.Container, e._layer.y = -30, e.addChild(e._layer), e._img3 = new PIXI.Sprite, e._layer.addChild(e._img3), e._img2 = new PIXI.Sprite, e._layer.addChild(e._img2), e._img1 = new PIXI.Sprite, e._layer.addChild(e._img1), e._basePos1 = new PIXI.Point, e._basePos2 = new PIXI.Point, e._basePos3 = new PIXI.Point, e._tweens = [], e
        }

        return n(e, t), e.prototype.initialize = function (t) {
            switch (t) {
                case 1:
                    this._img1.texture = o.MAP_COMMON.getTexture(84), this._img2.texture = o.MAP_COMMON.getTexture(85);
                    break;
                case 0:
                    this._img1.texture = o.MAP_COMMON.getTexture(86), this._img2.texture = o.MAP_COMMON.getTexture(88);
                    break;
                case 2:
                    this._img1.texture = o.MAP_COMMON.getTexture(87), this._img2.texture = o.MAP_COMMON.getTexture(89);
                    break;
                case 3:
                    this._img1.texture = o.MAP_COMMON.getTexture(90), this._img2.texture = o.MAP_COMMON.getTexture(91);
                    break;
                default:
                    this._img1.texture = PIXI.Texture.EMPTY, this._img2.texture = PIXI.Texture.EMPTY
            }
            3 != t ? (this._img3.texture = PIXI.Texture.EMPTY, this._basePos1.x = 0, this._basePos1.y = 0, this._basePos2.x = -15, this._basePos2.y = -15, this._basePos3.x = 0, this._basePos3.y = 0) : (this._img3.texture = o.MAP_COMMON.getTexture(92), this._basePos1.x = -5, this._basePos1.y = -25, this._basePos2.x = -40, this._basePos2.y = -50, this._basePos3.x = -45, this._basePos3.y = 0), this._img1.x = this._basePos1.x, this._img1.y = this._basePos1.y, this._img2.x = this._basePos2.x, this._img2.y = this._basePos2.y, this._img3.x = this._basePos3.x, this._img3.y = this._basePos3.y
        }, e.prototype.activate = function () {
            this._stopTweens(), this._startAnimation()
        }, e.prototype.deactivate = function () {
            this._stopTweens()
        }, e.prototype._startAnimation = function () {
            var t = this, e = 6 * Math.random() - 3, i = 6 * Math.random() - 3;
            this._tweens.push(createjs.Tween.get(this._img3).to({
                x: this._basePos3.x + e,
                y: this._basePos3.y + i
            }, 250, createjs.Ease.sineInOut)), e = 6 * Math.random() - 3, i = 6 * Math.random() - 3, this._tweens.push(createjs.Tween.get(this._img2).to({
                x: this._basePos2.x + e,
                y: this._basePos2.y + i
            }, 250, createjs.Ease.sineInOut)), e = 6 * Math.random() - 3, i = 6 * Math.random() - 3, this._tweens.push(createjs.Tween.get(this._img1).to({
                x: this._basePos1.x + e,
                y: this._basePos1.y + i
            }, 250, createjs.Ease.sineInOut).call(function () {
                t._startAnimation()
            }))
        }, e.prototype._stopTweens = function () {
            for (var t = 0, e = this._tweens; t < e.length; t++) {
                var i = e[t];
                null != i && i.setPaused(!0)
            }
            this._tweens = []
        }, e
    }(PIXI.Container);
    e.MapPlane = r
}