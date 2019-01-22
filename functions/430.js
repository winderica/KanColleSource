const function430 = function (t, e, i) {
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
    var o = i(119),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._particle = new Array;
                for (var i = [600], n = [243], o = 0; o < 8; o++) i.push(555 + 90 * Math.random()), n.push(243 - 90 * Math.random());
                for (var o = 0; o < i.length; o++) {
                    var r = new s;
                    r.position.set(i[o], n[o]), e.addChild(r), e._particle.push(r)
                }
                return e
            }
            return n(e, t), e.prototype.activate = function () {
                this.initialize()
            }, e.prototype.initialize = function () {
                for (var t = 0, e = this._particle; t < e.length; t++) {
                    var i = e[t];
                    ! function (t) {
                        createjs.Tween.get(null).wait(1e3 * Math.random()).call(function () {
                            t.initialize(), t.alpha = 1, t.startAnim()
                        })
                    }(i)
                }
            }, e.prototype.dispose = function () {
                for (var t = 0, e = this._particle; t < e.length; t++) {
                    var i = e[t];
                    i.alpha = 0, i.stopAnim()
                }
            }, e
        }(PIXI.Container);
    e.RevampRingParticleLayer = r;
    var s = function (t) {
        function e() {
            return t.call(this) || this
        }
        return n(e, t), e.prototype.initialize = function () {
            this.alpha = 0, this.anchor.set(.5, .5), this.scale.set(.5, .5), this._initXYSpeed(), this.texture = o.REVAMP_REVAMP.getTexture(13)
        }, e.prototype.startAnim = function () {
            this._anim()
        }, e.prototype.stopAnim = function () {
            null != this._tween && (this._tween.setPaused(!0), this._tween = null)
        }, e.prototype._initXYSpeed = function () {
            this._vx = (2 * Math.random() < 1 ? 1 : -1) * (6 * Math.random() + 6), this._vy = -(6 * Math.random() + 6), this._rot = .025 * (this._vx > 0 ? 1 : -1)
        }, e.prototype._anim = function () {
            var t = this;
            this._tween = createjs.Tween.get(this).to({
                alpha: 1
            }, 0).to({
                x: this.x + this._vx,
                y: this.y + this._vy,
                rotation: this.rotation + this._rot
            }, 20).call(function () {
                t._tween = null, t.y > 1200 && (t.y = 243 - 90 * Math.random(), t.x = 555 + 90 * Math.random(), t._initXYSpeed()), t._vy += .4, t._anim()
            })
        }, e
    }(PIXI.Sprite)
}