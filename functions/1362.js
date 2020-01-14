const function1362 = function (t, e, i) {
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
        r = i(31),
        s = i(1363),
        a = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype.initialize = function (t, e, i, n) {
                void 0 === n && (n = 1), null != this._gauge && (this._gauge.dispose(), null != this._gauge.parent && this._gauge.parent.removeChild(this._gauge), this._gauge = null), this._gauge = new s.GaugeVertical, this._gauge.initialize(t), this._gauge.update(e, i), this._gauge.position.set(t.x, t.y), this._gauge.alpha = n, this.addChild(this._gauge)
            }, e.prototype.dispose = function () {
                this._stopTween(), null != this._gauge && this._gauge.dispose()
            }, e.prototype.update = function (t, e, i, n) {
                var o = this;
                if (void 0 === i && (i = 0), void 0 === n && (n = null), this._stopTween(), i <= 0) this._gauge.update(t, e);
                else {
                    var r = {
                            now: this._gauge.now,
                            max: this._gauge.max
                        },
                        s = function (t) {
                            o._gauge.update(r.now, r.max)
                        };
                    this._t = createjs.Tween.get(r, {
                        onChange: s
                    }).to({
                        now: t,
                        max: e
                    }, i).call(function () {
                        o._t = null, null != n && n()
                    })
                }
            }, e.prototype.vanish = function (t) {
                void 0 === t && (t = null), this._stopTween();
                var e = new r.Container;
                e.x = this._gauge.x + Math.round(this._gauge.width / 2), e.y = this._gauge.y + Math.round(this._gauge.height / 2), this.addChild(e), this._gauge.x = -Math.round(this._gauge.width / 2), this._gauge.y = -Math.round(this._gauge.height / 2), e.addChild(this._gauge), this._t = createjs.Tween.get(e).wait(800).wait(200).to({
                    scaleX: 1.1,
                    scaleY: .9
                }, 35).to({
                    scaleX: 0,
                    scaleY: 1.4
                }, 200).call(function () {
                    null != t && t()
                })
            }, e.prototype.createShowTween = function (t) {
                if (null == this._gauge) return null;
                var e = this._gauge.x;
                return this._gauge.x = t ? -this._gauge.width : o.default.width + this._gauge.width, this._gauge.alpha = 0, createjs.Tween.get(this._gauge).to({
                    x: e,
                    alpha: 1
                }, 500, createjs.Ease.quadOut)
            }, e.prototype._stopTween = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e
        }(PIXI.Container);
    e.GaugeLayer = a
}