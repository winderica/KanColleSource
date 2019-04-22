const function994 = function (t, e, i) {
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
    var o = i(995),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._bg = new PIXI.Sprite, e.addChild(e._bg), e._area_layer = new PIXI.Container, e.addChild(e._area_layer), e._arrow_layer = new PIXI.Container, e.addChild(e._arrow_layer), e._base = new PIXI.Container, e.addChild(e._base), e._plate = new PIXI.Container, e.addChild(e._plate), e._label_layer = new PIXI.Container, e.addChild(e._label_layer), e._mini_text_layer = new PIXI.Sprite, e.addChild(e._mini_text_layer), e._title1 = new PIXI.Sprite(o.SALLY_STRATEGYMAP.getTexture(38)), e._title2 = new PIXI.Sprite, e._title1.position.set(61, -47), e._title2.y = -26, e.addChild(e._title1), e.addChild(e._title2), e
            }
            return n(e, t), e.prototype.update = function (t) {
                this._bg.texture = this._getBGTexture(t), this._createAreaAnimation(t), this._createArrowAnimation(t), this._createAirBase(t), this._createPlate(t), this._createLabelAnimation(t), this._createMiniTextAnimation(t), this._title2.texture = this._getTitleTexture(t), this._title2.x = Math.round(141 - this._title2.width / 2)
            }, e.prototype.dispose = function () {
                this._cleanArea(), this._cleanArrow(), this._cleanLabel()
            }, e.prototype._getBGTexture = function (t) {
                switch (t) {
                    case 431:
                        return o.SALLY_STRATEGYMAP.getTexture(33);
                    case 432:
                    case 433:
                        return o.SALLY_STRATEGYMAP.getTexture(34);
                    default:
                        return PIXI.Texture.EMPTY
                }
            }, e.prototype._createAreaAnimation = function (t) {
                this._cleanArea(), 431 == t ? this._createArea(128, 136, o.SALLY_STRATEGYMAP.getTexture(0)) : 432 == t ? (this._createArea(147, 106, o.SALLY_STRATEGYMAP.getTexture(1)), this._createArea(163, 35, o.SALLY_STRATEGYMAP.getTexture(2)), this._createArea(109, 84, o.SALLY_STRATEGYMAP.getTexture(3)), this._createArea(26, 78, o.SALLY_STRATEGYMAP.getTexture(4))) : 433 == t && (this._createArea(148, 16, o.SALLY_STRATEGYMAP.getTexture(5)), this._createArea(82, 81, o.SALLY_STRATEGYMAP.getTexture(6)), this._createArea(30, 91, o.SALLY_STRATEGYMAP.getTexture(7)), this._createArea(81, 27, o.SALLY_STRATEGYMAP.getTexture(8)))
            }, e.prototype._createArrowAnimation = function (t) {
                this._cleanArrow(), 431 == t ? this._createArrow(70, 80, o.SALLY_STRATEGYMAP.getTexture(9), o.SALLY_STRATEGYMAP.getTexture(10)) : 432 == t ? (this._createArrow(38, 105, o.SALLY_STRATEGYMAP.getTexture(11), o.SALLY_STRATEGYMAP.getTexture(12)), this._createArrow(111, 2, o.SALLY_STRATEGYMAP.getTexture(13), o.SALLY_STRATEGYMAP.getTexture(14))) : 433 == t && (this._createArrow(94, 8, o.SALLY_STRATEGYMAP.getTexture(15), o.SALLY_STRATEGYMAP.getTexture(16)), this._createArrow(24, 51, o.SALLY_STRATEGYMAP.getTexture(17), o.SALLY_STRATEGYMAP.getTexture(18)), this._createArrow(1, 144, o.SALLY_STRATEGYMAP.getTexture(19), o.SALLY_STRATEGYMAP.getTexture(20)))
            }, e.prototype._createArea = function (t, e, i) {
                var n = new s(i);
                n.x = t, n.y = e, this._area_layer.addChild(n)
            }, e.prototype._cleanArea = function () {
                for (var t = 0, e = this._area_layer.children; t < e.length; t++) {
                    e[t].dispose()
                }
                this._area_layer.removeChildren()
            }, e.prototype._createArrow = function (t, e, i, n) {
                var o = new a(i, n);
                o.x = t, o.y = e, this._arrow_layer.addChild(o)
            }, e.prototype._cleanArrow = function () {
                for (var t = 0, e = this._arrow_layer.children; t < e.length; t++) {
                    e[t].dispose()
                }
                this._arrow_layer.removeChildren()
            }, e.prototype._createAirBase = function (t) {
                this._base.removeChildren()
            }, e.prototype._createPlate = function (t) {
                var e = this;
                this._plate.removeChildren();
                var i = function (t, i, n) {
                    var o = new PIXI.Sprite(t);
                    o.position.set(i, n), e._plate.addChild(o)
                };
                431 == t ? i(o.SALLY_STRATEGYMAP.getTexture(23), 101, 150) : 432 == t ? (i(o.SALLY_STRATEGYMAP.getTexture(24), 25, 121), i(o.SALLY_STRATEGYMAP.getTexture(25), 157, 19)) : 433 == t && i(o.SALLY_STRATEGYMAP.getTexture(26), 179, 37)
            }, e.prototype._createLabelAnimation = function (t) {
                this._cleanLabel(), 431 == t ? this._createLabel(15, 116, o.SALLY_STRATEGYMAP.getTexture(27), o.SALLY_STRATEGYMAP.getTexture(28)) : 432 == t ? this._createLabel(75, 128, o.SALLY_STRATEGYMAP.getTexture(29), o.SALLY_STRATEGYMAP.getTexture(30)) : 433 == t && this._createLabel(56, 116, o.SALLY_STRATEGYMAP.getTexture(31), o.SALLY_STRATEGYMAP.getTexture(32))
            }, e.prototype._createLabel = function (t, e, i, n) {
                var o = new _(i, n);
                o.x = t, o.y = e, this._label_layer.addChild(o)
            }, e.prototype._cleanLabel = function () {
                for (var t = 0, e = this._label_layer.children; t < e.length; t++) {
                    e[t].dispose()
                }
                this._label_layer.removeChildren()
            }, e.prototype._createMiniTextAnimation = function (t) {
                this._cleanMiniText(), 432 != t && 433 != t || this._createLabel(192, 281, o.SALLY_STRATEGYMAP.getTexture(39), o.SALLY_STRATEGYMAP.getTexture(40))
            }, e.prototype._createMiniText = function (t, e, i, n) {
                var o = new l(i, n);
                o.x = t, o.y = e, this._mini_text_layer.addChild(o)
            }, e.prototype._cleanMiniText = function () {
                for (var t = 0, e = this._mini_text_layer.children; t < e.length; t++) {
                    e[t].dispose()
                }
                this._mini_text_layer.removeChildren()
            }, e.prototype._getTitleTexture = function (t) {
                switch (t) {
                    case 431:
                        return o.SALLY_STRATEGYMAP.getTexture(35);
                    case 432:
                        return o.SALLY_STRATEGYMAP.getTexture(36);
                    case 433:
                        return o.SALLY_STRATEGYMAP.getTexture(37);
                    default:
                        return PIXI.Texture.EMPTY
                }
            }, e
        }(PIXI.Container);
    e.StrategyMap = r;
    var s = function (t) {
            function e(e) {
                var i = t.call(this, e) || this;
                return i._startAnimation(), i
            }
            return n(e, t), e.prototype.dispose = function () {
                this._stopAnimation()
            }, e.prototype._startAnimation = function () {
                null == this._t && (this.alpha = .5, this._t = createjs.Tween.get(this, {
                    loop: !0
                }).to({
                    alpha: 1
                }, 1800).to({
                    alpha: .5
                }, 0))
            }, e.prototype._stopAnimation = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e
        }(PIXI.Sprite),
        a = function (t) {
            function e(e, i) {
                var n = t.call(this, e) || this;
                return n._over = new PIXI.Sprite(i), n.addChild(n._over), n._startAnimation(), n
            }
            return n(e, t), e.prototype.dispose = function () {
                this._stopAnimation()
            }, e.prototype._startAnimation = function () {
                null == this._t && (this._over.alpha = 0, this._t = createjs.Tween.get(this._over, {
                    loop: !0
                }).to({
                    alpha: 1
                }, 1200).to({
                    alpha: 0
                }, 0))
            }, e.prototype._stopAnimation = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e
        }(PIXI.Sprite),
        _ = function (t) {
            function e(e, i) {
                var n = t.call(this, e) || this;
                return n._over = new PIXI.Sprite(i), n.addChild(n._over), n._startAnimation(), n
            }
            return n(e, t), e.prototype.dispose = function () {
                this._stopAnimation()
            }, e.prototype._startAnimation = function () {
                null == this._t && (this._over.alpha = 0, this._t = createjs.Tween.get(this._over, {
                    loop: !0
                }).wait(600).to({
                    alpha: 1
                }, 0).wait(600).to({
                    alpha: 0
                }, 0))
            }, e.prototype._stopAnimation = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e
        }(PIXI.Sprite),
        l = function (t) {
            function e(e, i) {
                var n = t.call(this, e) || this;
                return n._over = new PIXI.Sprite(i), n.addChild(n._over), n._startAnimation(), n
            }
            return n(e, t), e.prototype.dispose = function () {
                this._stopAnimation()
            }, e.prototype._startAnimation = function () {
                null == this._t && (this._over.alpha = 0, this._t = createjs.Tween.get(this._over, {
                    loop: !0
                }).wait(800).to({
                    alpha: 1
                }, 0).wait(800).to({
                    alpha: 0
                }, 0))
            }, e.prototype._stopAnimation = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e
        }(PIXI.Sprite)
}