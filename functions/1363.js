const function1363 = function (t, e, i) {
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
    var o = i(2),
        r = i(12),
        s = i(182),
        a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._ready2 = function () {
                    i._gray = new r.Sprite(s.BATTLE_CUTIN_GOUCHIN.getTexture(7)), i._gray.anchor.set(.5), i._gray.position.set(600, 300), i._gray.alpha = 0, i._gray_lost = new r.Sprite(s.BATTLE_CUTIN_GOUCHIN.getTexture(5)), i._gray_lost.anchor.set(.5), i._gray_lost.position.set(600, 420), i._gray_lost.alpha = 0, i._hideText()
                }, i._layer = e, i
            }
            return n(e, t), e.prototype._start = function () {
                this._ready()
            }, e.prototype._ready = function () {
                this._blue = new r.Sprite(s.BATTLE_CUTIN_GOUCHIN.getTexture(6)), this._blue.anchor.set(.5), this._blue.scale.set(.58), this._blue.position.set(600, 330), this._blue.alpha = 0, this._blue_lost = new r.Sprite(s.BATTLE_CUTIN_GOUCHIN.getTexture(4)), this._blue_lost.anchor.set(.5), this._blue_lost.scale.set(.58), this._blue_lost.position.set(600, 390), this._blue_lost.alpha = 0, this._showText()
            }, e.prototype._showText = function () {
                this._layer.addChild(this._blue), this._layer.addChild(this._blue_lost), createjs.Tween.get(this._blue).to({
                    y: 300,
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1
                }, 300), createjs.Tween.get(this._blue_lost).to({
                    y: 420,
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1
                }, 300).wait(500).call(this._ready2)
            }, e.prototype._hideText = function () {
                var t = this;
                this._layer.addChild(this._gray), this._layer.addChild(this._gray_lost), createjs.Tween.get(this._gray).to({
                    alpha: 1
                }, 500).call(function () {
                    t._layer.removeChild(t._blue)
                }).wait(500).to({
                    alpha: 0
                }, 300).call(function () {
                    t._layer.removeChild(t._gray)
                }), createjs.Tween.get(this._gray_lost).to({
                    alpha: 1
                }, 500).call(function () {
                    t._layer.removeChild(t._blue_lost)
                }).wait(500).to({
                    alpha: 0
                }, 300).call(function () {
                    t._layer.removeChild(t._gray_lost)
                }).wait(500).call(function () {
                    t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._layer = null, this._blue = null, this._blue_lost = null, this._gray = null, this._gray_lost = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.TaskGouchinCutinText = a
}