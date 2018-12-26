const function1483 = function (t, e, i) {
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
    var o = i(12),
        r = i(1484),
        s = i(480),
        a = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype._initializeMapImages = function () {
                this._maps = [];
                for (var t = 0; t < 5; t++) {
                    var e = new PIXI.Sprite;
                    e.texture = [r.BATTLE_RESULT_EVENT_ED2_FFRSEMSNCTMCUSTP.getTexture(3), r.BATTLE_RESULT_EVENT_ED2_FFRSEMSNCTMCUSTP.getTexture(4), r.BATTLE_RESULT_EVENT_ED2_FFRSEMSNCTMCUSTP.getTexture(5), r.BATTLE_RESULT_EVENT_ED2_FFRSEMSNCTMCUSTP.getTexture(6), r.BATTLE_RESULT_EVENT_ED2_FFRSEMSNCTMCUSTP.getTexture(7)][t], e.x = 158 + 172 * t, e.y = 112, 4 == t && (e.y = 90), e.alpha = 0, this._layer.addChild(e), this._maps.push(e)
                }
            }, e.prototype._createMapShowTweens = function () {
                return this.__createMapShowTweens(700)
            }, e.prototype._initializeStampImages = function () {
                this._stamps = [];
                for (var t = 0; t < 4; t++) {
                    var e = new o.Sprite;
                    e.anchor.set(.5), e.texture = 2 == t ? r.BATTLE_RESULT_EVENT_ED2_FFRSEMSNCTMCUSTP.getTexture(1) : r.BATTLE_RESULT_EVENT_ED2_FFRSEMSNCTMCUSTP.getTexture(0), e.x = 272.5 + 172 * t, e.y = 223.5, 2 == t && (e.x = 615, e.y = 220), e.scale.set(2), e.alpha = 0, this._layer.addChild(e), this._stamps.push(e)
                }
            }, e.prototype._createStampShowTweens = function () {
                return this.__createStampShowTweens(700)
            }, e.prototype._showText = function () {
                this.__showText(new _)
            }, e.prototype._createStampLast = function () {
                var t = r.BATTLE_RESULT_EVENT_ED2_FFRSEMSNCTMCUSTP.getTexture(2),
                    e = new o.Sprite(t);
                return e.anchor.set(.5), e.position.set(1058.5, 266), e.alpha = 0, e
            }, e
        }(s.TaskEventEndingBase);
    e.TaskEventEnding425 = a;
    var _ = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype.initialize = function () {
            this._text1.texture = r.BATTLE_RESULT_EVENT_ED2_FFRSEMSNCTMCUSTP.getTexture(8), this._text1.position.set(59, 253), this._text2.texture = r.BATTLE_RESULT_EVENT_ED2_FFRSEMSNCTMCUSTP.getTexture(9), this._text2.position.set(213, 513), this._text3.texture = PIXI.Texture.EMPTY, this._text3.position.set(240, 590)
        }, e
    }(s.TextsBase)
}