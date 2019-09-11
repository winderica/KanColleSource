const function1011 = function (t, e, i) {
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
    var o = i(1012),
        r = i(1013),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._bg = new PIXI.Sprite, e.addChild(e._bg), e._area_layer = new PIXI.Container, e.addChild(e._area_layer), e._arrow_layer = new PIXI.Container, e.addChild(e._arrow_layer), e._base = new PIXI.Container, e.addChild(e._base), e._plate = new PIXI.Container, e.addChild(e._plate), e._label_layer = new PIXI.Container, e.addChild(e._label_layer), e._mini_text_layer = new PIXI.Sprite, e.addChild(e._mini_text_layer), e._title1 = new PIXI.Sprite(o.SALLY_STRATEGYMAP.getTexture(27)), e._title2 = new PIXI.Sprite, e._title1.position.set(-9, -42), e._title2.y = -26, e.addChild(e._title1), e.addChild(e._title2), e
            }
            return n(e, t), e.prototype.update = function (t) {
                this._bg.texture = this._getBGTexture(t), this._bg.y = 5, this._createAreaAnimation(t), this._createArrowAnimation(t), this._createAirBase(t), this._createPlate(t), this._createLabelAnimation(t), this._createMiniTextAnimation(t), this._title2.texture = this._getTitleTexture(t), this._title2.x = Math.round(141 - this._title2.width / 2), this._title2.y = -21
            }, e.prototype.dispose = function () {
                this._cleanArea(), this._cleanArrow(), this._cleanLabel()
            }, e.prototype._getBGTexture = function (t) {
                switch (t) {
                    case 451:
                        return o.SALLY_STRATEGYMAP.getTexture(23);
                    case 452:
                        return o.SALLY_STRATEGYMAP.getTexture(24);
                    case 453:
                        return r.SALLY_STRATEGYMAP_S.getTexture(7);
                    default:
                        return PIXI.Texture.EMPTY
                }
            }, e.prototype._createAreaAnimation = function (t) {
                switch (this._cleanArea(), t) {
                    case 451:
                        return this._createArea(1, 70, o.SALLY_STRATEGYMAP.getTexture(0)), this._createArea(42, 21, o.SALLY_STRATEGYMAP.getTexture(1)), void this._createArea(30, 165, o.SALLY_STRATEGYMAP.getTexture(2));
                    case 452:
                        return this._createArea(53, 116, o.SALLY_STRATEGYMAP.getTexture(3)), void this._createArea(147, 71, o.SALLY_STRATEGYMAP.getTexture(4));
                    case 453:
                        return this._createArea(126, 130, r.SALLY_STRATEGYMAP_S.getTexture(0)), void this._createArea(105, 6, r.SALLY_STRATEGYMAP_S.getTexture(1));
                    default:
                        return
                }
            }, e.prototype._createArrowAnimation = function (t) {
                switch (this._cleanArrow(), t) {
                    case 451:
                        return this._createArrow(37, 120, o.SALLY_STRATEGYMAP.getTexture(5), o.SALLY_STRATEGYMAP.getTexture(6)), this._createArrow(97, 72, o.SALLY_STRATEGYMAP.getTexture(7), o.SALLY_STRATEGYMAP.getTexture(8)), void this._createArrow(85, 158, o.SALLY_STRATEGYMAP.getTexture(9), o.SALLY_STRATEGYMAP.getTexture(10));
                    case 452:
                        return this._createArrow(10, 105, o.SALLY_STRATEGYMAP.getTexture(11), o.SALLY_STRATEGYMAP.getTexture(12)), void this._createArrow(130, 115, o.SALLY_STRATEGYMAP.getTexture(13), o.SALLY_STRATEGYMAP.getTexture(14));
                    case 453:
                        return void this._createArrow(24, 54, r.SALLY_STRATEGYMAP_S.getTexture(2), r.SALLY_STRATEGYMAP_S.getTexture(3));
                    default:
                        return
                }
            }, e.prototype._createArea = function (t, e, i) {
                var n = new a(i);
                n.x = t, n.y = e, this._area_layer.addChild(n)
            }, e.prototype._cleanArea = function () {
                for (var t = 0, e = this._area_layer.children; t < e.length; t++) {
                    e[t].dispose()
                }
                this._area_layer.removeChildren()
            }, e.prototype._createArrow = function (t, e, i, n) {
                var o = new _(i, n);
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
                switch (t) {
                    case 451:
                        return void i(o.SALLY_STRATEGYMAP.getTexture(17), 108, 143);
                    case 452:
                        return void i(o.SALLY_STRATEGYMAP.getTexture(18), 132, 178);
                    case 453:
                        return void i(r.SALLY_STRATEGYMAP_S.getTexture(4), 122, 160);
                    default:
                        return
                }
            }, e.prototype._createLabelAnimation = function (t) {
                switch (this._cleanLabel(), t) {
                    case 451:
                        return void this._createLabel(47, 80, o.SALLY_STRATEGYMAP.getTexture(19), o.SALLY_STRATEGYMAP.getTexture(20));
                    case 452:
                        return void this._createLabel(27, 91, o.SALLY_STRATEGYMAP.getTexture(21), o.SALLY_STRATEGYMAP.getTexture(22));
                    case 453:
                        return void this._createLabel(19, 118, r.SALLY_STRATEGYMAP_S.getTexture(5), r.SALLY_STRATEGYMAP_S.getTexture(6));
                    default:
                        return
                }
            }, e.prototype._createLabel = function (t, e, i, n) {
                var o = new l(i, n);
                o.x = t, o.y = e, this._label_layer.addChild(o)
            }, e.prototype._cleanLabel = function () {
                for (var t = 0, e = this._label_layer.children; t < e.length; t++) {
                    e[t].dispose()
                }
                this._label_layer.removeChildren()
            }, e.prototype._createMiniTextAnimation = function (t) {
                switch (this._cleanMiniText(), t) {
                    case 452:
                    case 453:
                        return void this._createLabel(192, 281, o.SALLY_STRATEGYMAP.getTexture(28), o.SALLY_STRATEGYMAP.getTexture(29));
                    default:
                        return
                }
            }, e.prototype._createMiniText = function (t, e, i, n) {
                var o = new u(i, n);
                o.x = t, o.y = e, this._mini_text_layer.addChild(o)
            }, e.prototype._cleanMiniText = function () {
                for (var t = 0, e = this._mini_text_layer.children; t < e.length; t++) {
                    e[t].dispose()
                }
                this._mini_text_layer.removeChildren()
            }, e.prototype._getTitleTexture = function (t) {
                switch (t) {
                    case 451:
                        return o.SALLY_STRATEGYMAP.getTexture(25);
                    case 452:
                        return o.SALLY_STRATEGYMAP.getTexture(26);
                    case 453:
                        return r.SALLY_STRATEGYMAP_S.getTexture(8);
                    default:
                        return PIXI.Texture.EMPTY
                }
            }, e
        }(PIXI.Container);
    e.StrategyMap = s;
    var a = function (t) {
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
                }).to({
                    alpha: 1
                }, 1200).to({
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
                }).wait(600).to({
                    alpha: 1
                }, 0).wait(600).to({
                    alpha: 0
                }, 0))
            }, e.prototype._stopAnimation = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e
        }(PIXI.Sprite),
        u = function (t) {
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