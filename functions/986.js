const function986 = function (t, e, i) {
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
    var o = i(987), r = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._bg = new PIXI.Sprite, e.addChild(e._bg), e._area_layer = new PIXI.Container, e.addChild(e._area_layer), e._arrow_layer = new PIXI.Container, e.addChild(e._arrow_layer), e._base = new PIXI.Container, e.addChild(e._base), e._plate = new PIXI.Container, e.addChild(e._plate), e._label_layer = new PIXI.Container, e.addChild(e._label_layer), e._mini_text_layer = new PIXI.Sprite, e.addChild(e._mini_text_layer), e._title = new PIXI.Sprite, e._title.y = -47, e.addChild(e._title), e
        }

        return n(e, t), e.prototype.update = function (t) {
            this._bg.texture = this._getBGTexture(t), this._createAreaAnimation(t), this._createArrowAnimation(t), this._createAirBase(t), this._createPlate(t), this._createLabelAnimation(t), this._createMiniTextAnimation(t), this._title.texture = this._getTitleTexture(t), this._title.x = Math.round(141 - this._title.width / 2)
        }, e.prototype.dispose = function () {
            this._cleanArea(), this._cleanArrow(), this._cleanLabel()
        }, e.prototype._getBGTexture = function (t) {
            switch (t) {
                case 411:
                case 412:
                    return o.SALLY_STRATEGYMAP.getTexture(62);
                case 413:
                    return o.SALLY_STRATEGYMAP.getTexture(63);
                case 414:
                    return o.SALLY_STRATEGYMAP.getTexture(64);
                case 415:
                    return o.SALLY_STRATEGYMAP.getTexture(65);
                case 416:
                    return o.SALLY_STRATEGYMAP.getTexture(66);
                case 417:
                    return o.SALLY_STRATEGYMAP.getTexture(67);
                default:
                    return PIXI.Texture.EMPTY
            }
        }, e.prototype._createAreaAnimation = function (t) {
            this._cleanArea(), 412 == t ? (this._createArea(120, 14, o.SALLY_STRATEGYMAP.getTexture(0)), this._createArea(192, 114, o.SALLY_STRATEGYMAP.getTexture(1))) : 413 == t ? this._createArea(86, 77, o.SALLY_STRATEGYMAP.getTexture(2)) : 414 == t ? this._createArea(101, 63, o.SALLY_STRATEGYMAP.getTexture(3)) : 415 == t ? this._createArea(105, 80, o.SALLY_STRATEGYMAP.getTexture(4)) : 416 == t ? (this._createArea(138, 57, o.SALLY_STRATEGYMAP.getTexture(5)), this._createArea(188, 80, o.SALLY_STRATEGYMAP.getTexture(6)), this._createArea(180, 138, o.SALLY_STRATEGYMAP.getTexture(7))) : 417 == t && (this._createArea(84, 6, o.SALLY_STRATEGYMAP.getTexture(8)), this._createArea(126, 54, o.SALLY_STRATEGYMAP.getTexture(9)))
        }, e.prototype._createArrowAnimation = function (t) {
            this._cleanArrow(), 411 == t ? (this._createArrow(45, 87, o.SALLY_STRATEGYMAP.getTexture(10), o.SALLY_STRATEGYMAP.getTexture(11)), this._createArrow(89, 96, o.SALLY_STRATEGYMAP.getTexture(12), o.SALLY_STRATEGYMAP.getTexture(13)), this._createArrow(106, 162, o.SALLY_STRATEGYMAP.getTexture(14), o.SALLY_STRATEGYMAP.getTexture(15))) : 412 == t ? (this._createArrow(32, 81, o.SALLY_STRATEGYMAP.getTexture(16), o.SALLY_STRATEGYMAP.getTexture(17)), this._createArrow(46, 150, o.SALLY_STRATEGYMAP.getTexture(18), o.SALLY_STRATEGYMAP.getTexture(19))) : 413 == t ? this._createArrow(129, 11, o.SALLY_STRATEGYMAP.getTexture(20), o.SALLY_STRATEGYMAP.getTexture(21)) : 414 == t ? (this._createArrow(65, 71, o.SALLY_STRATEGYMAP.getTexture(22), o.SALLY_STRATEGYMAP.getTexture(23)), this._createArrow(48, 164, o.SALLY_STRATEGYMAP.getTexture(24), o.SALLY_STRATEGYMAP.getTexture(25))) : 415 == t ? (this._createArrow(36, 45, o.SALLY_STRATEGYMAP.getTexture(26), o.SALLY_STRATEGYMAP.getTexture(27)), this._createArrow(105, 122, o.SALLY_STRATEGYMAP.getTexture(28), o.SALLY_STRATEGYMAP.getTexture(29))) : 416 == t ? (this._createArrow(54, 99, o.SALLY_STRATEGYMAP.getTexture(30), o.SALLY_STRATEGYMAP.getTexture(31)), this._createArrow(102, 158, o.SALLY_STRATEGYMAP.getTexture(32), o.SALLY_STRATEGYMAP.getTexture(33))) : 417 == t && (this._createArrow(75, 164, o.SALLY_STRATEGYMAP.getTexture(34), o.SALLY_STRATEGYMAP.getTexture(35)), this._createArrow(23, 125, o.SALLY_STRATEGYMAP.getTexture(36), o.SALLY_STRATEGYMAP.getTexture(37)), this._createArrow(114, 5, o.SALLY_STRATEGYMAP.getTexture(38), o.SALLY_STRATEGYMAP.getTexture(39)), this._createArrow(16, 108, o.SALLY_STRATEGYMAP.getTexture(40), o.SALLY_STRATEGYMAP.getTexture(41)))
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
            this._base.removeChildren();
            var e = null;
            switch (t) {
                case 411:
                case 412:
                    e = new PIXI.Point(76, 216);
                    break;
                case 413:
                    e = new PIXI.Point(68, 158);
                    break;
                case 414:
                    e = new PIXI.Point(86, 65);
                    break;
                case 415:
                    e = new PIXI.Point(137, 126);
                    break;
                case 416:
                    e = new PIXI.Point(101, 158)
            }
            if (null != e) {
                var i = new PIXI.Sprite(o.SALLY_STRATEGYMAP.getTexture(42));
                i.position.set(e.x, e.y), this._base.addChild(i)
            }
        }, e.prototype._createPlate = function (t) {
            var e = this;
            this._plate.removeChildren();
            var i = function (t, i, n) {
                var r = o.SALLY_STRATEGYMAP.getTexture(t), s = new PIXI.Sprite(r);
                s.position.set(i, n), e._plate.addChild(s)
            };
            411 == t ? i(43, 113, 173) : 412 == t ? (i(44, 9, 173), i(45, 129, 173)) : 413 == t ? i(46, 155, 8) : 414 == t ? (i(44, 113, 42), i(45, 71, 179)) : 415 == t ? i(47, 116, 171) : 416 == t && (i(44, 138, 156), i(47, 42, 111))
        }, e.prototype._createLabelAnimation = function (t) {
            this._cleanLabel(), 411 == t ? this._createLabel(32, 101, o.SALLY_STRATEGYMAP.getTexture(48), o.SALLY_STRATEGYMAP.getTexture(49)) : 412 == t ? this._createLabel(53, 102, o.SALLY_STRATEGYMAP.getTexture(50), o.SALLY_STRATEGYMAP.getTexture(51)) : 413 == t ? this._createLabel(66, 80, o.SALLY_STRATEGYMAP.getTexture(52), o.SALLY_STRATEGYMAP.getTexture(53)) : 414 == t ? this._createLabel(62, 104, o.SALLY_STRATEGYMAP.getTexture(54), o.SALLY_STRATEGYMAP.getTexture(55)) : 415 == t ? this._createLabel(81, 42, o.SALLY_STRATEGYMAP.getTexture(56), o.SALLY_STRATEGYMAP.getTexture(57)) : 416 == t ? this._createLabel(24, 64, o.SALLY_STRATEGYMAP.getTexture(58), o.SALLY_STRATEGYMAP.getTexture(59)) : 417 == t && this._createLabel(35, 92, o.SALLY_STRATEGYMAP.getTexture(60), o.SALLY_STRATEGYMAP.getTexture(61))
        }, e.prototype._createLabel = function (t, e, i, n) {
            var o = new _(i, n);
            o.x = t, o.y = e, this._label_layer.addChild(o)
        }, e.prototype._cleanLabel = function () {
            for (var t = 0, e = this._label_layer.children; t < e.length; t++) {
                e[t].dispose()
            }
            this._label_layer.removeChildren()
        }, e.prototype._createMiniTextAnimation = function (t) {
            this._cleanMiniText(), 412 != t && 413 != t && 414 != t && 417 != t || this._createLabel(192, 281, o.SALLY_STRATEGYMAP.getTexture(75), o.SALLY_STRATEGYMAP.getTexture(76))
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
                case 411:
                    return o.SALLY_STRATEGYMAP.getTexture(68);
                case 412:
                    return o.SALLY_STRATEGYMAP.getTexture(69);
                case 413:
                    return o.SALLY_STRATEGYMAP.getTexture(70);
                case 414:
                    return o.SALLY_STRATEGYMAP.getTexture(71);
                case 415:
                    return o.SALLY_STRATEGYMAP.getTexture(72);
                case 416:
                    return o.SALLY_STRATEGYMAP.getTexture(73);
                case 417:
                    return o.SALLY_STRATEGYMAP.getTexture(74);
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
            null == this._t && (this.alpha = .5, this._t = createjs.Tween.get(this, { loop: !0 }).to({ alpha: 1 }, 1800).to({ alpha: .5 }, 0))
        }, e.prototype._stopAnimation = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null)
        }, e
    }(PIXI.Sprite), a = function (t) {
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
    }(PIXI.Sprite), _ = function (t) {
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