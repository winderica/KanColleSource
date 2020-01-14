const function213 = function (t, e, i) {
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
    var o = i(5),
        r = i(10),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._onChange = function () {
                    e.children.length < 30 && Math.random() < .05 && e.addChild(new a);
                    for (var t = 0, i = e.children; t < i.length; t++) {
                        i[t].update()
                    }
                }, e.visible = !1, e
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
    e.BonusParticle = s;
    var a = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._rad = 0;
            return e.texture = r.COMMON_MISC.getTexture(114), e._init(), e
        }
        return n(e, t), e.prototype.update = function () {
            this.rotation += this._spdR / 180 * Math.PI, this.x = this._startX + this._haba * Math.sin(this._rad), this.y += this._spdY, this._rad += this._spdRad, this.y > o.default.height + 30 && null != this.parent && this.parent.removeChild(this)
        }, e.prototype._init = function () {
            var t = 60 / createjs.Ticker.framerate;
            this._startX = Math.random() * (o.default.width - 60) + 30, this._haba = 45 * Math.random(), this._spdY = (3 * Math.random() + 1) * t, this._spdR = (.5 * Math.random() + .05) * t, this._spdRad = .05 * Math.random() + 5e-4, this.x = this._startX, this.y = 390 * Math.random() - 420, this.scale.set(.6 * Math.random() + .2)
        }, e
    }(PIXI.Sprite)
}