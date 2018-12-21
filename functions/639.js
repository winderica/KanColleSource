const function639 = function (t, e, i) {
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
    var o = i(5), r = i(9), s = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onChange = function () {
                for (var t = 0, i = e.children; t < i.length; t++) {
                    i[t].update()
                }
            };
            for (var i = 0; i < 30; i++) {
                var n = new a;
                e.addChild(n)
            }
            return e.visible = !1, e
        }

        return n(e, t), e.prototype.activate = function () {
            null == this._t && (this._t = createjs.Tween.get(null, {
                loop: !0,
                onChange: this._onChange
            }), this.visible = !0)
        }, e.prototype.deactivate = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null, this.visible = !1)
        }, e.prototype.dispose = function () {
            this.deactivate(), this.removeChildren()
        }, e
    }(PIXI.Container);
    e.BonusInsertParticle = s;
    var a = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._vx = 0, e._vy = 0, e._vr = 0, e._vscale = 0;
            return e.texture = r.COMMON_MISC.getTexture(114), e._init(), e
        }

        return n(e, t), e.prototype.update = function () {
            if (--this._life < 0 && (this.alpha -= .1 * Math.random() + .1, this.alpha <= 0)) return void this._init();
            this.x += this._vx, this.y += this._vy, this.rotation += this._vr, this.scale.x += this._vscale, this.scale.y += this._vscale;
            var t = 60 / createjs.Ticker.framerate;
            this._vx *= 1 + .01 * t, this._vy += .01 * t
        }, e.prototype._init = function () {
            var t = 60 / createjs.Ticker.framerate;
            this.x = o.default.width / 2, this.y = o.default.height / 2 - 45, this.alpha = 1, this.scale.set(0), this._life = 100 * t, this._life += 100 * Math.random() * t, this._vx = 6 * Math.random() * t, Math.random() < .5 && (this._vx *= -1), this._vy = (12 * Math.random() - 9) * t;
            var e = 50 / 180 * Math.PI * t;
            this._vr = (Math.random() * e + 1) / 100, this._vscale = (.0025 * Math.random() + .005) * t
        }, e
    }(PIXI.Sprite)
}