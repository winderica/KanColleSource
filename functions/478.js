const function478 = function (t, e, i) {
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
    var o = i(32), r = i(9), s = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._particles = [], e
        }

        return n(e, t), e.prototype.addParticle = function (t, e) {
            var i = new a;
            i.initialize(), i.position.set(t, e), this.addChild(i), this._particles.push(i)
        }, e.prototype.startAnimation = function () {
            for (var t = 0, e = this._particles; t < e.length; t++) {
                e[t].startAnimation()
            }
        }, e.prototype.stopAnimation = function () {
            for (var t = 0, e = this._particles; t < e.length; t++) {
                e[t].stopAnimation()
            }
        }, e
    }(PIXI.Container);
    e.ParticleLayer = s;
    var a = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._r_canvas = new PIXI.Container, e.addChild(e._r_canvas), e._img = new PIXI.Sprite, e._r_canvas.addChild(e._img), e
        }

        return n(e, t), e.prototype.initialize = function () {
            this._img.texture = r.COMMON_MISC.getTexture(115), this._img.x = -Math.round(this._img.width / 2), this._img.y = -Math.round(this._img.height / 2), this.scale.set(0)
        }, e.prototype.startAnimation = function () {
            var t = this;
            if (null == this._anim) {
                var e = 2e3 * Math.random();
                this._anim = createjs.Tween.get(this).wait(e).to({ scaleX: 1, scaleY: 1 }, 100).to({
                    scaleX: 0,
                    scaleY: 0
                }, 200).call(function () {
                    t._anim = null, t.startAnimation()
                }), this.rotation = Math.random() * Math.PI * 2 - Math.PI;
                var i = this.rotation + Math.random() * Math.PI / 10 - Math.PI / 5;
                createjs.Tween.get(this._r_canvas).wait(e).to({ rotation: i }, 300)
            }
        }, e.prototype.stopAnimation = function () {
            null != this._anim && (this._anim.setPaused(!0), this._anim = null)
        }, e
    }(o.Container)
}