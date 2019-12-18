const function366 = function (t, e, i) {
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
    var o = i(15),
        r = i(31),
        s = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype.initialize = function () {
                this.alpha = 0, this.visible = !1
            }, e.prototype.update = function (t) {
                var e = this;
                if (0 == t) return this.texture = PIXI.Texture.EMPTY, void(this.visible = !1);
                this.texture = r.SALLY_COMMON.getTexture(0), this.visible = !0, this._type = t;
                var i = new o.UIImageLoader("sally"),
                    n = "sally_alert_alert_" + t;
                i.add("alert/alert_" + t + ".png", n), i.load(function () {
                    e._type == t && (e.texture = PIXI.Texture.fromFrame(n))
                })
            }, e.prototype.activate = function () {
                0 == this.alpha && createjs.Tween.get(this).to({
                    alpha: 1
                }, 300)
            }, e
        }(PIXI.Sprite);
    e.AlertBalloon = s
}