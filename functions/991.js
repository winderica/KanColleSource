const function991 = function (t, e, i) {
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
    var o = i(992), r = i(993), s = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._bg = new PIXI.Sprite, e.addChild(e._bg), e._area_layer = new PIXI.Container, e.addChild(e._area_layer), e._arrow_layer = new PIXI.Container, e.addChild(e._arrow_layer), e._base = new PIXI.Container, e.addChild(e._base), e._plate = new PIXI.Container, e.addChild(e._plate), e._label_layer = new PIXI.Container, e.addChild(e._label_layer), e._mini_text_layer = new PIXI.Sprite, e.addChild(e._mini_text_layer), e._title1 = new PIXI.Sprite(o.SALLY_STRATEGYMAP.getTexture(34)), e._title2 = new PIXI.Sprite, e._title1.position.set(58, -47), e._title2.y = -26, e.addChild(e._title1), e.addChild(e._title2), e
        }

        return n(e, t), e.prototype.update = function (t) {
            this._bg.texture = this._getBGTexture(t), this._createAreaAnimation(t), this._createArrowAnimation(t), this._createAirBase(t), this._createPlate(t), this._createLabelAnimation(t), this._createMiniTextAnimation(t), this._title2.texture = this._getTitleTexture(t), this._title2.x = Math.round(141 - this._title2.width / 2)
        }, e.prototype.dispose = function () {
            this._cleanArea(), this._cleanArrow(), this._cleanLabel()
        }, e.prototype._getBGTexture = function (t) {
            switch (t) {
                case 421:
                    return o.SALLY_STRATEGYMAP.getTexture(28);
                case 422:
                    return o.SALLY_STRATEGYMAP.getTexture(29);
                case 423:
                    return o.SALLY_STRATEGYMAP.getTexture(30);
                case 424:
                    return r.SALLY_STRATEGYMAP_S.getTexture(23);
                case 425:
                    return r.SALLY_STRATEGYMAP_S.getTexture(24);
                default:
                    return PIXI.Texture.EMPTY
            }
        }, e.prototype._createAreaAnimation = function (t) {
            this._cleanArea(), 421 == t ? this._createArea(128, 132, o.SALLY_STRATEGYMAP.getTexture(0)) : 422 == t ? (this._createArea(54, 37, o.SALLY_STRATEGYMAP.getTexture(1)), this._createArea(23, 98, o.SALLY_STRATEGYMAP.getTexture(2))) : 423 == t ? (this._createArea(0, 111, o.SALLY_STRATEGYMAP.getTexture(3)), this._createArea(40, 61, o.SALLY_STRATEGYMAP.getTexture(4))) : 424 == t ? (this._createArea(0, 1, r.SALLY_STRATEGYMAP_S.getTexture(0)), this._createArea(34, 45, r.SALLY_STRATEGYMAP_S.getTexture(1)), this._createArea(85, 63, r.SALLY_STRATEGYMAP_S.getTexture(2)), this._createArea(8, 135, r.SALLY_STRATEGYMAP_S.getTexture(3))) : 425 == t && (this._createArea(0, 0, r.SALLY_STRATEGYMAP_S.getTexture(4)), this._createArea(45, 94, r.SALLY_STRATEGYMAP_S.getTexture(5)), this._createArea(19, 144, r.SALLY_STRATEGYMAP_S.getTexture(6)), this._createArea(113, 146, r.SALLY_STRATEGYMAP_S.getTexture(7)))
        }, e.prototype._createArrowAnimation = function (t) {
            this._cleanArrow(), 421 == t ? (this._createArrow(18, 114, o.SALLY_STRATEGYMAP.getTexture(5), o.SALLY_STRATEGYMAP.getTexture(6)), this._createArrow(173, 15, o.SALLY_STRATEGYMAP.getTexture(7), o.SALLY_STRATEGYMAP.getTexture(8))) : 422 == t ? (this._createArrow(86, 151, o.SALLY_STRATEGYMAP.getTexture(9), o.SALLY_STRATEGYMAP.getTexture(10)), this._createArrow(103, 91, o.SALLY_STRATEGYMAP.getTexture(11), o.SALLY_STRATEGYMAP.getTexture(12))) : 423 == t ? (this._createArrow(68, 67, o.SALLY_STRATEGYMAP.getTexture(13), o.SALLY_STRATEGYMAP.getTexture(14)), this._createArrow(90, 36, o.SALLY_STRATEGYMAP.getTexture(15), o.SALLY_STRATEGYMAP.getTexture(16))) : 424 == t ? (this._createArrow(21, 41, r.SALLY_STRATEGYMAP_S.getTexture(8), r.SALLY_STRATEGYMAP_S.getTexture(9)), this._createArrow(83, 129, r.SALLY_STRATEGYMAP_S.getTexture(10), r.SALLY_STRATEGYMAP_S.getTexture(11))) : 425 == t && (this._createArrow(49, 36, r.SALLY_STRATEGYMAP_S.getTexture(12), r.SALLY_STRATEGYMAP_S.getTexture(13)), this._createArrow(38, 151, r.SALLY_STRATEGYMAP_S.getTexture(14), r.SALLY_STRATEGYMAP_S.getTexture(15)))
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
            421 == t ? i(o.SALLY_STRATEGYMAP.getTexture(19), 111, 95) : 422 == t ? i(o.SALLY_STRATEGYMAP.getTexture(20), 147, 132) : 423 == t ? i(o.SALLY_STRATEGYMAP.getTexture(21), 207, 47) : 424 == t ? i(r.SALLY_STRATEGYMAP_S.getTexture(16), 179, 166) : 425 == t && (i(r.SALLY_STRATEGYMAP_S.getTexture(17), 109, 196), i(r.SALLY_STRATEGYMAP_S.getTexture(18), 169, 32))
        }, e.prototype._createLabelAnimation = function (t) {
            this._cleanLabel(), 421 == t ? this._createLabel(4, 219, o.SALLY_STRATEGYMAP.getTexture(22), o.SALLY_STRATEGYMAP.getTexture(23)) : 422 == t ? this._createLabel(55, 196, o.SALLY_STRATEGYMAP.getTexture(24), o.SALLY_STRATEGYMAP.getTexture(25)) : 423 == t ? this._createLabel(41, 114, o.SALLY_STRATEGYMAP.getTexture(26), o.SALLY_STRATEGYMAP.getTexture(27)) : 424 == t ? this._createLabel(47, 108, r.SALLY_STRATEGYMAP_S.getTexture(19), r.SALLY_STRATEGYMAP_S.getTexture(20)) : 425 == t && this._createLabel(38, 105, r.SALLY_STRATEGYMAP_S.getTexture(21), r.SALLY_STRATEGYMAP_S.getTexture(22))
        }, e.prototype._createLabel = function (t, e, i, n) {
            var o = new l(i, n);
            o.x = t, o.y = e, this._label_layer.addChild(o)
        }, e.prototype._cleanLabel = function () {
            for (var t = 0, e = this._label_layer.children; t < e.length; t++) {
                e[t].dispose()
            }
            this._label_layer.removeChildren()
        }, e.prototype._createMiniTextAnimation = function (t) {
            this._cleanMiniText(), 423 != t && 424 != t && 425 != t || this._createLabel(192, 281, o.SALLY_STRATEGYMAP.getTexture(35), o.SALLY_STRATEGYMAP.getTexture(36))
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
                case 421:
                    return o.SALLY_STRATEGYMAP.getTexture(31);
                case 422:
                    return o.SALLY_STRATEGYMAP.getTexture(32);
                case 423:
                    return o.SALLY_STRATEGYMAP.getTexture(33);
                case 424:
                    return r.SALLY_STRATEGYMAP_S.getTexture(25);
                case 425:
                    return r.SALLY_STRATEGYMAP_S.getTexture(26);
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
            null == this._t && (this.alpha = .5, this._t = createjs.Tween.get(this, { loop: !0 }).to({ alpha: 1 }, 1800).to({ alpha: .5 }, 0))
        }, e.prototype._stopAnimation = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null)
        }, e
    }(PIXI.Sprite), _ = function (t) {
        function e(e, i) {
            var n = t.call(this, e) || this;
            return n._over = new PIXI.Sprite(i), n.addChild(n._over), n._startAnimation(), n
        }

        return n(e, t), e.prototype.dispose = function () {
            this._stopAnimation()
        }, e.prototype._startAnimation = function () {
            null == this._t && (this._over.alpha = 0, this._t = createjs.Tween.get(this._over, { loop: !0 }).to({ alpha: 1 }, 1200).to({ alpha: 0 }, 0))
        }, e.prototype._stopAnimation = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null)
        }, e
    }(PIXI.Sprite), l = function (t) {
        function e(e, i) {
            var n = t.call(this, e) || this;
            return n._over = new PIXI.Sprite(i), n.addChild(n._over), n._startAnimation(), n
        }

        return n(e, t), e.prototype.dispose = function () {
            this._stopAnimation()
        }, e.prototype._startAnimation = function () {
            null == this._t && (this._over.alpha = 0, this._t = createjs.Tween.get(this._over, { loop: !0 }).wait(600).to({ alpha: 1 }, 0).wait(600).to({ alpha: 0 }, 0))
        }, e.prototype._stopAnimation = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null)
        }, e
    }(PIXI.Sprite), u = function (t) {
        function e(e, i) {
            var n = t.call(this, e) || this;
            return n._over = new PIXI.Sprite(i), n.addChild(n._over), n._startAnimation(), n
        }

        return n(e, t), e.prototype.dispose = function () {
            this._stopAnimation()
        }, e.prototype._startAnimation = function () {
            null == this._t && (this._over.alpha = 0, this._t = createjs.Tween.get(this._over, { loop: !0 }).wait(800).to({ alpha: 1 }, 0).wait(800).to({ alpha: 0 }, 0))
        }, e.prototype._stopAnimation = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null)
        }, e
    }(PIXI.Sprite)
}