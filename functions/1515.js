const function1515 = function (t, e, i) {
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
        r = i(1516),
        s = i(485),
        a = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype._initializeBGStampLineImages = function () {
                this._BGStampLineVisible = !1
            }, e.prototype._initializeMapImages = function () {
                this._maps = [];
                for (var t = 0; t < 6; t++) {
                    var e = new PIXI.Sprite;
                    e.texture = [r.BATTLE_RESULT_EVENT_ED2_ATBEXGSDNCHAYFNU.getTexture(2), r.BATTLE_RESULT_EVENT_ED2_ATBEXGSDNCHAYFNU.getTexture(3), r.BATTLE_RESULT_EVENT_ED2_ATBEXGSDNCHAYFNU.getTexture(4), r.BATTLE_RESULT_EVENT_ED2_ATBEXGSDNCHAYFNU.getTexture(5), r.BATTLE_RESULT_EVENT_ED2_ATBEXGSDNCHAYFNU.getTexture(6), r.BATTLE_RESULT_EVENT_ED2_ATBEXGSDNCHAYFNU.getTexture(7)][t], e.x = t < 4 ? 175 + 210 * t : 370 + 210 * (t - 4), e.y = t < 4 ? 14 : 224, e.alpha = 0, this._layer.addChild(e), this._maps.push(e)
                }
            }, e.prototype._createMapShowTweens = function () {
                return this.__createMapShowTweens(700)
            }, e.prototype._initializeStampImages = function () {
                this._stamps = [];
                for (var t = 0; t < 5; t++) {
                    var e = new o.Sprite;
                    e.anchor.set(.5), e.texture = r.BATTLE_RESULT_EVENT_ED2_ATBEXGSDNCHAYFNU.getTexture(0), e.x = t < 4 ? 175 + 210 * t + 156 : 370 + 210 * (t - 4) + 156, e.y = t < 4 ? 176.5 : 386.5, e.scale.set(2), e.alpha = 0, this._layer.addChild(e), this._stamps.push(e)
                }
            }, e.prototype._createStampShowTweens = function () {
                return this.__createStampShowTweens(700)
            }, e.prototype._showText = function () {
                this.__showText(new _)
            }, e.prototype._createStampLast = function () {
                var t = r.BATTLE_RESULT_EVENT_ED2_ATBEXGSDNCHAYFNU.getTexture(1),
                    e = new o.Sprite(t);
                return e.anchor.set(.5), e.position.set(842, 411.5), e.alpha = 0, e
            }, e
        }(s.TaskEventEndingBase);
    e.TaskEventEnding2 = a;
    var _ = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype.initialize = function () {
            this._text1.texture = r.BATTLE_RESULT_EVENT_ED2_ATBEXGSDNCHAYFNU.getTexture(8), this._text1.position.set(108, 353), this._text2.texture = r.BATTLE_RESULT_EVENT_ED2_ATBEXGSDNCHAYFNU.getTexture(9), this._text2.position.set(243, 609)
        }, e
    }(s.TextsBase)
}