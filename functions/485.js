const function485 = function (t, e, i) {
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
        r = i(12),
        s = i(36),
        a = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._timer_handle = -1, e._update = function () {
                    for (var t = 0, i = e._particles; t < i.length; t++) {
                        i[t].update()
                    }
                }, e
            }
            return n(e, t), e.prototype.startKamihubuki = function (t) {
                this.removeChildren(), this._particles = [];
                for (var e = 0; e < t; e++) {
                    var i = new _;
                    i.initialize(), this.addChild(i), this._particles.push(i)
                } - 1 == this._timer_handle && (this._timer_handle = setInterval(this._update, 1e3 / 30))
            }, e.prototype.dispose = function () {
                -1 != this._timer_handle && clearInterval(this._timer_handle), this.removeChildren(), this._particles = null
            }, e
        }(PIXI.Container);
    e.KamihubukiLayer = a;
    var _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.anchor.set(.5), e
        }
        return n(e, t), e.prototype.initialize = function () {
            this._initialize()
        }, e.prototype.update = function () {
            this.x = this._base_x + this._haba + Math.sin(this._rad), this.y += this._spdY, this.rotation += this._spdR, this._rad += this._spdX, this.y > o.default.height + 75 && this._initialize()
        }, e.prototype._initialize = function () {
            var t;
            switch (Math.floor(5 * Math.random())) {
                case 0:
                    t = 15;
                    break;
                case 1:
                    t = 16;
                    break;
                case 2:
                    t = 17;
                    break;
                case 3:
                    t = 18;
                    break;
                case 4:
                    t = 19
            }
            this.texture = s.BATTLE_RESULT_MAIN.getTexture(t), this.x = 1140 * Math.random() + 30, this.y = -150 - 150 * Math.random(), this.scale.set(.3 + .2 * Math.random()), this._base_x = this.x, this._rad = 0, this._haba = 45 * Math.random(), this._spdX = (15 * Math.random() + 1) / 100, this._spdY = 12 * Math.random() + 3, this._spdR = 2 * Math.random() / 180 * Math.PI
        }, e
    }(r.Sprite)
}