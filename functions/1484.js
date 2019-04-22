const function1484 = function (t, e, i) {
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
        r = i(1485),
        s = i(480),
        a = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype._initializeMapImages = function () {
                this._maps = [];
                for (var t = 0; t < 2; t++) {
                    var e = new PIXI.Sprite;
                    e.texture = [r.BATTLE_RESULT_EVENT_ED1_NMHFCTIIVPILQGMX.getTexture(2), r.BATTLE_RESULT_EVENT_ED1_NMHFCTIIVPILQGMX.getTexture(3)][t], e.x = 339 + 287 * t, e.y = 84, e.alpha = 0, this._layer.addChild(e), this._maps.push(e)
                }
            }, e.prototype._createMapShowTweens = function () {
                return this.__createMapShowTweens(700)
            }, e.prototype._initializeStampImages = function () {
                this._stamps = [];
                for (var t = 0; t < 1; t++) {
                    var e = new o.Sprite;
                    e.anchor.set(.5), e.texture = r.BATTLE_RESULT_EVENT_ED1_NMHFCTIIVPILQGMX.getTexture(0), e.x = 547.5 + 287 * t, e.y = 288.5, e.scale.set(2), e.alpha = 0, this._layer.addChild(e), this._stamps.push(e)
                }
            }, e.prototype._createStampShowTweens = function () {
                return this.__createStampShowTweens(700)
            }, e.prototype._showText = function () {
                this.__showText(new _)
            }, e.prototype._createStampLast = function () {
                var t = r.BATTLE_RESULT_EVENT_ED1_NMHFCTIIVPILQGMX.getTexture(1),
                    e = new o.Sprite(t);
                return e.anchor.set(.5), e.position.set(929.5, 329.5), e.alpha = 0, e
            }, e
        }(s.TaskEventEndingBase);
    e.TaskEventEnding432 = a;
    var _ = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype.initialize = function () {
            this._text1.texture = r.BATTLE_RESULT_EVENT_ED1_NMHFCTIIVPILQGMX.getTexture(4), this._text1.position.set(147, 290), this._text2.texture = r.BATTLE_RESULT_EVENT_ED1_NMHFCTIIVPILQGMX.getTexture(5), this._text2.position.set(298, 535), this._text3.texture = r.BATTLE_RESULT_EVENT_ED1_NMHFCTIIVPILQGMX.getTexture(7), this._text3.position.set(319, 596)
        }, e
    }(s.TextsBase)
}