const function435 = function (t, e, i) {
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
    var o = i(12),
        r = i(20),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._activated = !1;
                var i = r.MAP_COMMON.getTexture(17);
                return e._wave = new o.Sprite(i), e._wave.anchor.set(.5), e._wave.scale.set(0), e.addChild(e._wave), e
            }
            return n(e, t), e.prototype.activate = function () {
                1 != this._activated && (this._activated = !0, this._startTween())
            }, e.prototype.deactivate = function () {
                this._activated = !1, this._stopTween()
            }, e.prototype.dispose = function () {
                this.deactivate(), this._wave = null
            }, e.prototype._startTween = function () {
                null == this._t && (this._wave.scale.set(0), this._wave.alpha = 1, this._t = createjs.Tween.get(this._wave, {
                    loop: !0
                }).to({
                    scaleX: 1,
                    scaleY: 1
                }, 800).to({
                    scaleX: 1.35,
                    scaleY: 1.35,
                    alpha: 0
                }, 300).to({
                    scaleX: 0,
                    scaleY: 0,
                    alpha: 1
                }, 0))
            }, e.prototype._stopTween = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e
        }(PIXI.Graphics);
    e.CellWave = s
}