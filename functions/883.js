const function883 = function (t, e, i) {
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
    var o = i(314), r = function (t) {
        function e() {
            var e = t.call(this) || this;
            e.MAX_CIRCLE = 5, e.onUpdate = function () {
                for (var t = 0; t < e.effectCircles.length; t++) {
                    var i = e.effectCircles[t];
                    if (!i.isAnimation && !(Math.floor(100 * Math.random()) >= 10)) {
                        i.play();
                        break
                    }
                }
            };
            var i = o.ARSENAL_ANIMATION.getTexture(1);
            e.effectCircles = new Array;
            for (var n = 0; n < e.MAX_CIRCLE; n++) {
                var r = new s(i);
                e.effectCircles.push(r), r.texture = i, e.addChild(r)
            }
            return e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.stop();
            for (var t = 0; t < this.effectCircles.length; t++) this.effectCircles[t].dispose(), this.effectCircles[t] = null;
            this.effectCircles = null, this.removeChildren()
        }, e.prototype.play = function () {
            createjs.Tween.removeTweens(this);
            var t = createjs.Tween.get(this, { onChange: this.onUpdate });
            t.loop = !0, t.play(null)
        }, e.prototype.stop = function () {
            createjs.Tween.removeTweens(this);
            for (var t = 0; t < this.effectCircles.length; t++) this.effectCircles[t].stop(), this.effectCircles[t].reset()
        }, e
    }(PIXI.Container);
    e.MaterialCircleRollAnimation = r;
    var s = function (t) {
        function e(e) {
            var i = t.call(this, e) || this;
            return i.update = function (t) {
                var e = t.target.target.time, n = t.target.target.alpha;
                i.rotation = i._rotationSpeed * e, i.alpha = n
            }, i.anchor.set(.5, .5), i._isAnimation = !1, i.reset(), i
        }

        return n(e, t), Object.defineProperty(e.prototype, "isAnimation", {
            get: function () {
                return this._isAnimation
            }, enumerable: !0, configurable: !0
        }), e.prototype.dispose = function () {
            this.stop(), this._isAnimation = null, this._rotationSpeed = null, this._time = null, this._tween = null
        }, e.prototype.reset = function () {
            var t = .2 * Math.random() + .8;
            this.scale.set(t, t), this._rotationSpeed = Math.PI / 180 * (180 * Math.random() - 90), this._time = 200 + 400 * Math.random(), this.x = 450 * Math.random() - 225, this.y = 450 * Math.random() - 158, this.alpha = 0
        }, e.prototype.play = function () {
            var t = this;
            this._isAnimation = !0;
            var e = { time: 0, alpha: 0 };
            null != this._tween && this._tween.removeAllEventListeners(), this.reset(), this._tween = createjs.Tween.get(e, { onChange: this.update }).to({
                time: .5,
                alpha: 1
            }, this._time).to({ time: 1, alpha: 0 }, this._time).call(function () {
                t.stop()
            })
        }, e.prototype.stop = function () {
            this._isAnimation = !1, null != this._tween && this._tween.removeAllEventListeners()
        }, e
    }(PIXI.Sprite)
}