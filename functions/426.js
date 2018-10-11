const function426 = function (t, e, i) {
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
    var o = i(118), r = function (t) {
        function e(e) {
            void 0 === e && (e = 0);
            var i = t.call(this) || this;
            i._wind = e, i._particle = new Array;
            for (var n = [300, 600, 900], o = [0, 0, 0], r = 0; r < 10; r++) 0 == e ? n.push(1200 * Math.random()) : n.push(300 * Math.random() + 450), o.push(-30 - 105 * Math.random());
            for (var r = 0; r < n.length; r++) {
                var a = new s(e);
                a.position.set(n[r], o[r]), i.addChild(a), i._particle.push(a)
            }
            return i
        }

        return n(e, t), e.prototype.activate = function () {
            this.initialize()
        }, e.prototype.initialize = function () {
            for (var t = 0, e = this._particle; t < e.length; t++) {
                var i = e[t];
                i.initialize(), i.alpha = 1, i.startAnim()
            }
        }, e.prototype.dispose = function () {
            for (var t = 0, e = this._particle; t < e.length; t++) {
                var i = e[t];
                i.alpha = 0, i.stopAnim()
            }
        }, e
    }(PIXI.Container);
    e.RevampParticleLayer = r;
    var s = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._wind = e, i
        }

        return n(e, t), e.prototype.initialize = function () {
            this.alpha = 0, this.anchor.set(.5, .5), this._rot = (2 * Math.random() < 1 ? 1 : -1) * Math.random() * 5 * Math.PI * 2, this._scale = .75 * Math.random() + .5, this._vx = (1 * Math.random() * this._scale * this._scale + 300) * this._wind, this._vy = 6 * Math.random() * this._scale * this._scale + 2, this.scale.set(this._scale, this._scale), this.texture = o.REVAMP_REVAMP.getTexture(14)
        }, e.prototype.startAnim = function () {
            this._anim()
        }, e.prototype.stopAnim = function () {
            null != this._tween && (this._tween.setPaused(!0), this._tween = null)
        }, e.prototype._calc = function () {
            0 == this._wind ? this.x = 1200 * Math.random() : this.x = 300 * Math.random() + 450, this.y = -30 - 105 * Math.random(), this._rot += (2 * Math.random() < 1 ? 1 : -1) * Math.random() * 5 * Math.PI * 2
        }, e.prototype._anim = function () {
            var t = this;
            this._tween = createjs.Tween.get(this).to({ alpha: 1 }).to({
                y: 800,
                x: this.x + this._vx,
                rotation: this._rot
            }, 3e3 * Math.random() + 1e3).call(function () {
                t._tween = null, t._calc(), t._anim()
            })
        }, e
    }(PIXI.Sprite)
}