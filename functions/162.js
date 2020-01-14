const function162 = function (t, e, i) {
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
    var o = i(108),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._w1 = new s, e._w2 = new s, e.addChild(e._w1), e.addChild(e._w2), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._w1.initialize(), this._w2.initialize()
            }, e.prototype.dispose = function () {
                this._w1.dispose(), this._w2.dispose()
            }, e.prototype.startAnimation = function () {
                this._w1.startAnimation(900), this._w2.startAnimation()
            }, e.prototype.stopAnimation = function () {
                this._w1.stopAnimation(), this._w2.stopAnimation()
            }, e
        }(PIXI.Container);
    e.RingMenuWaves = r;
    var s = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.scale.set(0, 0), e
        }
        return n(e, t), e.prototype.initialize = function () {
            this.texture = o.PORT_RINGMENU.getTexture(31), this.anchor.set(.5, .5)
        }, e.prototype.dispose = function () {
            this.stopAnimation()
        }, e.prototype.startAnimation = function (t) {
            var e = this;
            void 0 === t && (t = 0), this.stopAnimation(), t > 0 ? this._waitTween = createjs.Tween.get(null).wait(t).call(function () {
                e._startAnimation()
            }) : this._startAnimation()
        }, e.prototype._startAnimation = function () {
            null != this._waitTween && (this._waitTween.setPaused(!0), this._waitTween = null);
            var t = createjs.Tween.get(this.scale, {
                    loop: !0
                }).to({
                    x: .75,
                    y: .75
                }, 1100).to({
                    x: 1,
                    y: 1
                }, 400).set({
                    x: 0,
                    y: 0
                }),
                e = createjs.Tween.get(this, {
                    loop: !0
                }).wait(1100).to({
                    alpha: 0
                }, 400).set({
                    alpha: 1
                });
            this._t = new createjs.Timeline([t, e], null, null), this._t.loop = !0
        }, e.prototype.stopAnimation = function () {
            null != this._waitTween && (this._waitTween.setPaused(!0), this._waitTween = null), null != this._t && (this._t.setPaused(!0), this._t = null), this.scale.set(0, 0), this.alpha = 1
        }, e
    }(PIXI.Sprite)
}