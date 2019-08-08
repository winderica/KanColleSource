const function302 = function (t, e, i) {
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
    var o = i(9),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.SWING = .1, e.R_SPEED = 30 / createjs.Ticker.framerate * .12, e._init_scale = 1, e._rad = 0, e._onChange = function () {
                    e._rad += e.R_SPEED;
                    var t = e._init_scale + e.SWING * Math.sin(e._rad);
                    e.scale.set(t)
                }, e.anchor.set(.5), e.visible = !1, e
            }
            return n(e, t), e.prototype.initialize = function () {
                this.texture = o.COMMON_MISC.getTexture(70)
            }, e.prototype.activate = function () {
                null == this._t && (this._t = createjs.Tween.get(null, {
                    loop: !0,
                    onChange: this._onChange
                }), this.visible = !0)
            }, e.prototype.deactivate = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null, this.visible = !1)
            }, e.prototype.dispose = function () {
                this.deactivate()
            }, e
        }(PIXI.Sprite);
    e.GetIcon = r
}