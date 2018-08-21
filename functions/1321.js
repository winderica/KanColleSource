const function1321 = function (t, e, i) {
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
    var o = i(5), r = i(0), s = i(174), a = function (t) {
        function e() {
            var e = t.call(this) || this;
            e.count = 50, e.col = 16777215, e._updateMask = function (t) {
                e._circleMask.clear(), e._circleMask.beginFill(e.col);
                for (var i = 0; i < e.count; i++) e._circle_list[i].radius = e.rndScale[i] * t.target.target.val, e._circleMask.drawShape(e._circle_list[i]);
                e._circleMask.endFill(), r.default.settings.renderer.render(e._circleMask, e._renderTex, !0, null, !0)
            }, e._bg = new PIXI.Sprite, e._bg.alpha = 0, e._layer_effect = new PIXI.Container, e._card_bg = new PIXI.Sprite, e._card_bg.anchor.set(.5), e._card_bg.alpha = 1, e._layer_ship = new PIXI.Container, e._grad = new PIXI.Sprite, e._layer_text = new PIXI.Container, e._layer_mask = new PIXI.Container, e._layer_mask.alpha = 0, e._renderTex = PIXI.RenderTexture.create(327, 450), e._renderSprite = new PIXI.Sprite(e._renderTex), e._renderSprite.anchor.set(.5), e._card_bg.mask = e._renderSprite, e._layer_mask.addChild(e._card_bg), e._layer_mask.addChild(e._renderSprite), e.rndPos = [], e.rndScale = [];
            for (var i = 0; i < e.count; i++) e.rndPos.push(new PIXI.Point(Math.floor(327 * Math.random()), Math.floor(450 * Math.random()))), e.rndScale.push(100 * Math.floor(2 * Math.random()));
            e.addChild(e._bg), e.addChild(e._layer_effect), e.addChild(e._layer_mask), e.addChild(e._layer_ship), e.addChild(e._grad), e.addChild(e._layer_text), e._circle_list = [];
            for (var i = 0; i < e.count; i++) e._circle_list.push(new PIXI.Circle(e.rndPos[i].x, e.rndPos[i].y, e.rndScale[i]));
            return e._circleMask = new PIXI.Graphics, e._circleMask.beginFill(e.col), e._circleMask.drawRect(0, 0, 327, 450), e._circleMask.endFill(), r.default.settings.renderer.render(e._circleMask, e._renderTex, !0, null, !1), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "bg", {
            get: function () {
                return this._bg
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "layer_effect", {
            get: function () {
                return this._layer_effect
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "card_bg", {
            get: function () {
                return this._card_bg
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "layer_ship", {
            get: function () {
                return this._layer_ship
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "layer_text", {
            get: function () {
                return this._layer_text
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "layer_mask", {
            get: function () {
                return this._layer_mask
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function () {
            this._bg.texture = s.BATTLE_CUTIN_GOUCHIN.getTexture(0), this._grad.texture = s.BATTLE_CUTIN_GOUCHIN.getTexture(1), this._grad.y = o.default.height - this._grad.height
        }, e.prototype.playMask = function () {
            var t = { val: 1 };
            createjs.Tween.get(t, { onChange: this._updateMask }).to({ val: 0 }, 1800)
        }, e
    }(PIXI.Container);
    e.GouchinCutinView = a
}