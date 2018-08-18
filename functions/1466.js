const function1466 = function (t, e, i) {
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
    var o = i(12), r = i(124), s = i(258), a = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype._initializeMapImages = function () {
            this._maps = [];
            for (var t = 0; t < 7; t++) {
                var e = new PIXI.Sprite;
                e.texture = [r.BATTLE_RESULT_EVENT.getTexture(12), r.BATTLE_RESULT_EVENT.getTexture(14), r.BATTLE_RESULT_EVENT.getTexture(16), r.BATTLE_RESULT_EVENT.getTexture(18), r.BATTLE_RESULT_EVENT.getTexture(19), r.BATTLE_RESULT_EVENT.getTexture(20), r.BATTLE_RESULT_EVENT.getTexture(21)][t], e.x = [270, 440, 609, 777, 291, 489, 686][t], e.y = t < 4 ? 6 : 168, e.alpha = 0, this._layer.addChild(e), this._maps.push(e)
            }
        }, e.prototype._createMapShowTweens = function () {
            return this.__createMapShowTweens(600)
        }, e.prototype._initializeStampImages = function () {
            this._stamps = [];
            for (var t = 0; t < 6; t++) {
                var e = new o.Sprite;
                e.anchor.set(.5), e.texture = 3 == t ? r.BATTLE_RESULT_EVENT.getTexture(7) : 5 == t ? r.BATTLE_RESULT_EVENT.getTexture(9) : r.BATTLE_RESULT_EVENT.getTexture(5), e.x = [387, 557, 726, 894, 437, 633][t], e.y = t < 4 ? 120 : 311, e.scale.set(2), e.alpha = 0, this._layer.addChild(e), this._stamps.push(e)
            }
        }, e.prototype._createStampShowTweens = function () {
            return this.__createStampShowTweens(600)
        }, e.prototype._showText = function () {
            this.__showText(new _)
        }, e.prototype._createStampLast = function () {
            var t = r.BATTLE_RESULT_EVENT.getTexture(10), e = new o.Sprite(t);
            return e.anchor.set(.5), e.position.set(974, 419), e.width % 2 != 0 && (e.x += .5), e.height % 2 != 0 && (e.y += .5), e.alpha = 0, e
        }, e
    }(s.TaskEventEndingBase);
    e.TaskEventEnding397 = a;
    var _ = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype.initialize = function () {
            this._text1.texture = r.BATTLE_RESULT_EVENT.getTexture(42), this._text1.position.set(123, 348), this._text2.texture = r.BATTLE_RESULT_EVENT.getTexture(43), this._text2.position.set(218, 575), this._text3.texture = PIXI.Texture.EMPTY
        }, e
    }(s.TextsBase)
}