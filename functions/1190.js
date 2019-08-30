const function1190 = function (t, e, i) {
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
                return e._star1 = new PIXI.Sprite, e._star1.position.set(73, 42), e._star1.visible = !1, e.addChild(e._star1), e._star2 = new PIXI.Sprite, e._star2.position.set(93, 27), e._star2.visible = !1, e.addChild(e._star2), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this.texture = o.DUTY_COMMON.getTexture(42), this._star1.texture = o.DUTY_COMMON.getTexture(45), this._star2.texture = o.DUTY_COMMON.getTexture(44)
            }, e.prototype.activate = function () {
                null == this._t && this._wait()
            }, e.prototype.deactivate = function () {
                this._stopTween()
            }, e.prototype.dispose = function () {
                this.deactivate()
            }, e.prototype._wait = function () {
                var t = this;
                this._stopTween(), this._t = createjs.Tween.get(null).wait(3e3 * Math.random() + 1e3).call(function () {
                    t._wink()
                })
            }, e.prototype._wink = function () {
                0 == Math.floor(4 * Math.random()) ? this._anim() : this._wait()
            }, e.prototype._anim = function () {
                var t = this;
                this._stopTween(), this.texture = o.DUTY_COMMON.getTexture(43), this._t = createjs.Tween.get(null).wait(150).call(function () {
                    t.texture = o.DUTY_COMMON.getTexture(42)
                }).wait(150).call(function () {
                    t.texture = o.DUTY_COMMON.getTexture(43)
                }).wait(150).call(function () {
                    t._star1.visible = !0, t.texture = o.DUTY_COMMON.getTexture(42)
                }).wait(100).call(function () {
                    t._star2.visible = !0
                }).wait(600).call(function () {
                    t._star1.visible = !1
                }).wait(30).call(function () {
                    t._star2.visible = !1, t._wait()
                })
            }, e.prototype._stopTween = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null, this.texture = o.DUTY_COMMON.getTexture(42), this._star1.visible = !1, this._star2.visible = !1)
            }, e
        }(PIXI.Sprite);
    e.MiniChara = r
}