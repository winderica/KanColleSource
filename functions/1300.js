const function1300 = function (t, e, i) {
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
    var o = i(1301),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._frame = 0, e._sprite = new PIXI.Sprite(o.MAP_EVENT_ANIME.getTexture(e._frame)), e.addChild(e._sprite), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.stopAnimation(), this.removeChildren(), this._sprite = null, this._frame = null
            }, e.prototype.startAnimation = function () {
                var t = this;
                this._tween = createjs.Tween.get(null), this._tween.loop = !0, this._tween.wait(250).call(function () {
                    t._onUpdate()
                })
            }, e.prototype.stopAnimation = function () {
                this._tween && (this._tween.setPaused(!0), this._tween = null, this._sprite.alpha = 0)
            }, e.prototype.hide = function () {
                var t = this;
                createjs.Tween.get(this).to({
                    alpha: 0
                }, 200).call(function () {
                    t.stopAnimation()
                })
            }, e.prototype._onUpdate = function () {
                this._frame >= 29 ? this._frame = 0 : this._frame++, this._sprite.texture = o.MAP_EVENT_ANIME.getTexture(this._frame)
            }, e
        }(PIXI.Container);
    e.MapAnime = r
}