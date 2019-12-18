const function1018 = function (t, e, i) {
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
    var o = i(1019),
        r = i(1020),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._bg = new PIXI.Sprite, e.addChild(e._bg), e._area_layer = new PIXI.Container, e.addChild(e._area_layer), e._arrow_layer = new PIXI.Container, e.addChild(e._arrow_layer), e._base = new PIXI.Container, e.addChild(e._base), e._plate = new PIXI.Container, e.addChild(e._plate), e._label_layer = new PIXI.Container, e.addChild(e._label_layer), e._mini_text_layer = new PIXI.Sprite, e.addChild(e._mini_text_layer), e._title1 = new PIXI.Sprite(o.SALLY_STRATEGYMAP.getTexture(38)), e._title2 = new PIXI.Sprite, e._title1.position.set(32, -42), e._title2.y = -26, e.addChild(e._title1), e.addChild(e._title2), e
            }
            return n(e, t), e.prototype.update = function (t) {
                this._bg.texture = this._getBGTexture(t), this._bg.y = 5, this._createAreaAnimation(t), this._createArrowAnimation(t), this._createAirBase(t), this._createPlate(t), this._createLabelAnimation(t), this._createMiniTextAnimation(t);
                this._title2.texture = this._getTitleTexture(t), this._title2.x = function (t) {
                    switch (t) {
                        case 461:
                            return 20;
                        case 462:
                            return 7;
                        case 463:
                            return 29;
                        case 464:
                            return 60;
                        case 465:
                            return 62;
                        case 466:
                            return 9;
                        default:
                            return 0
                    }
                }(t), this._title2.y = -22
            }, e.prototype.dispose = function () {
                this._cleanArea(), this._cleanArrow(), this._cleanLabel()
            }, e.prototype._getBGTexture = function (t) {
                switch (t) {
                    case 461:
                        return o.SALLY_STRATEGYMAP.getTexture(30);
                    case 462:
                        return o.SALLY_STRATEGYMAP.getTexture(31);
                    case 463:
                        return o.SALLY_STRATEGYMAP.getTexture(32);
                    case 464:
                        return o.SALLY_STRATEGYMAP.getTexture(33);
                    case 465:
                        return r.SALLY_STRATEGYMAP_S.getTexture(14);
                    case 466:
                        return r.SALLY_STRATEGYMAP_S.getTexture(15);
                    default:
                        return PIXI.Texture.EMPTY
                }
            }, e.prototype._createAreaAnimation = function (t) {
                switch (this._cleanArea(), t) {
                    case 461:
                        return void this._createArea(126, 106, o.SALLY_STRATEGYMAP.getTexture(0));
                    case 462:
                        return this._createArea(0, 99, o.SALLY_STRATEGYMAP.getTexture(1)), void this._createArea(182, 185, o.SALLY_STRATEGYMAP.getTexture(2));
                    case 463:
                        return void this._createArea(22, 66, o.SALLY_STRATEGYMAP.getTexture(3));
                    case 464:
                        return void this._createArea(-1, 86, o.SALLY_STRATEGYMAP.getTexture(4));
                    case 465:
                        return this._createArea(115, 115, r.SALLY_STRATEGYMAP_S.getTexture(0)), void this._createArea(145, 51, r.SALLY_STRATEGYMAP_S.getTexture(1));
                    case 466:
                        return this._createArea(125, 10, r.SALLY_STRATEGYMAP_S.getTexture(2)), void this._createArea(123, 97, r.SALLY_STRATEGYMAP_S.getTexture(3));
                    default:
                        return
                }
            }, e.prototype._createArrowAnimation = function (t) {
                switch (this._cleanArrow(), t) {
                    case 461:
                        return void this._createArrow(168, 5, o.SALLY_STRATEGYMAP.getTexture(5), o.SALLY_STRATEGYMAP.getTexture(6));
                    case 462:
                        return this._createArrow(136, 49, o.SALLY_STRATEGYMAP.getTexture(7), o.SALLY_STRATEGYMAP.getTexture(8)), void this._createArrow(31, 50, o.SALLY_STRATEGYMAP.getTexture(9), o.SALLY_STRATEGYMAP.getTexture(10));
                    case 463:
                        return void this._createArrow(74, 10, o.SALLY_STRATEGYMAP.getTexture(11), o.SALLY_STRATEGYMAP.getTexture(12));
                    case 464:
                        return this._createArrow(85, 114, o.SALLY_STRATEGYMAP.getTexture(13), o.SALLY_STRATEGYMAP.getTexture(14)), void this._createArrow(25, 10, o.SALLY_STRATEGYMAP.getTexture(15), o.SALLY_STRATEGYMAP.getTexture(16));
                    case 465:
                        return void this._createArrow(76, 75, r.SALLY_STRATEGYMAP_S.getTexture(4), r.SALLY_STRATEGYMAP_S.getTexture(5));
                    case 466:
                        return void this._createArrow(28, 57, r.SALLY_STRATEGYMAP_S.getTexture(6), r.SALLY_STRATEGYMAP_S.getTexture(7));
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
                    case 461:
                        return void i(o.SALLY_STRATEGYMAP.getTexture(18), 206, 79);
                    case 462:
                        return void i(o.SALLY_STRATEGYMAP.getTexture(19), 121, 43);
                    case 463:
                        return void i(o.SALLY_STRATEGYMAP.getTexture(20), 159, 45);
                    case 464:
                        return void i(o.SALLY_STRATEGYMAP.getTexture(21), 71, 43);
                    case 465:
                        return void i(r.SALLY_STRATEGYMAP_S.getTexture(8), 94, 92);
                    case 466:
                        return void i(r.SALLY_STRATEGYMAP_S.getTexture(9), 58, 53);
                    default:
                        return
                }
            }, e.prototype._createLabelAnimation = function (t) {
                switch (this._cleanLabel(), t) {
                    case 461:
                        return void this._createLabel(62, 109, o.SALLY_STRATEGYMAP.getTexture(22), o.SALLY_STRATEGYMAP.getTexture(23));
                    case 462:
                        return void this._createLabel(5, 123, o.SALLY_STRATEGYMAP.getTexture(24), o.SALLY_STRATEGYMAP.getTexture(25));
                    case 463:
                        return void this._createLabel(25, 207, o.SALLY_STRATEGYMAP.getTexture(26), o.SALLY_STRATEGYMAP.getTexture(27));
                    case 464:
                        return void this._createLabel(52, 194, o.SALLY_STRATEGYMAP.getTexture(28), o.SALLY_STRATEGYMAP.getTexture(29));
                    case 465:
                        return void this._createLabel(59, 200, r.SALLY_STRATEGYMAP_S.getTexture(10), r.SALLY_STRATEGYMAP_S.getTexture(11));
                    case 466:
                        return void this._createLabel(21, 109, r.SALLY_STRATEGYMAP_S.getTexture(12), r.SALLY_STRATEGYMAP_S.getTexture(13));
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
                    case 463:
                    case 464:
                    case 465:
                    case 466:
                        return void this._createLabel(192, 286, o.SALLY_STRATEGYMAP.getTexture(39), o.SALLY_STRATEGYMAP.getTexture(40));
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
                    case 461:
                        return o.SALLY_STRATEGYMAP.getTexture(34);
                    case 462:
                        return o.SALLY_STRATEGYMAP.getTexture(35);
                    case 463:
                        return o.SALLY_STRATEGYMAP.getTexture(36);
                    case 464:
                        return o.SALLY_STRATEGYMAP.getTexture(37);
                    case 465:
                        return r.SALLY_STRATEGYMAP_S.getTexture(16);
                    case 466:
                        return r.SALLY_STRATEGYMAP_S.getTexture(17);
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