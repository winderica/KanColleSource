const function1435 = function (t, e, i) {
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
    var o = i(5), r = i(229), s = i(6), a = i(176), _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._now = 0, e._max = 0, e._animation_gauge = !1, e._ready_for_explode = !1, e._animation_explode = !1, e._exploded = !1, e._explode = function (t, i) {
                var n = new a.Explosion;
                n.position.set(e._gauge.x + t, e._gauge.y + i), e.addChild(n), s.SE.play("102"), n.play(function () {
                    e.removeChild(n)
                })
            }, e._onCompleteAnimation = function () {
                e._animation_gauge = !1, 1 == e._ready_for_explode && (e._ready_for_explode = !1, e.explode())
            }, e
        }

        return n(e, t), Object.defineProperty(e.prototype, "now", {
            get: function () {
                return this._now
            }, enumerable: !0, configurable: !0
        }), e.prototype.hasGauge = function () {
            return null != this._gauge
        }, e.prototype.isExploded = function () {
            return this._exploded
        }, e.prototype.isAnimation = function () {
            return this._animation_gauge || this._animation_explode
        }, e.prototype.show = function (t, e, i, n) {
            var s = this;
            this._now = e, this._max = i, this._gauge = new r.GaugeHorizontal, this._gauge.initialize(t), this._gauge.x = o.default.width - this._gauge.width, this._gauge.y = -15, this._gauge.alpha = 0, this.addChild(this._gauge), createjs.Tween.get(this._gauge).to({
                y: t.y,
                alpha: 1
            }, 300).call(function () {
                s._gauge.update(e, i, function () {
                }), null != n && n()
            })
        }, e.prototype.update = function (t) {
            0 != this.hasGauge() && (this._animation_gauge = !0, this._now = t, this._gauge.update(t, this._max, this._onCompleteAnimation))
        }, e.prototype.explode = function () {
            var t = this;
            if (0 != this.hasGauge() && !(this._now > 0)) {
                if (1 == this._animation_gauge) return void(this._ready_for_explode = !0);
                this._animation_explode = !0, createjs.Tween.get(null).call(this._explode, [107, 20]).wait(250).call(this._explode, [209, 57]).call(function () {
                    createjs.Tween.get(t._gauge).to({ alpha: 0 }, 350).call(function () {
                        t.removeChild(t._gauge), t._gauge = null, t._animation_explode = !1, t._exploded = !0
                    })
                }).wait(100).call(this._explode, [309, 24])
            }
        }, e
    }(PIXI.Container);
    e.LayerGauge = _
}