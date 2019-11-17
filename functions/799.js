const function799 = function (t, e, i) {
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
    var o = i(3),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.btnSoubi3Light = new PIXI.Sprite(o.REMODEL_MAIN.getTexture(17)), e.btnSoubi3 = new PIXI.Sprite(o.REMODEL_MAIN.getTexture(16)), e.btnSoubi3Light.position.set(-14, -14), e.btnSoubi3Light.alpha = 0, e.addChild(e.btnSoubi3Light, e.btnSoubi3), e.tween = createjs.Tween.get(e.btnSoubi3Light).to({
                    alpha: 0
                }).to({
                    alpha: 1
                }, 1e3).to({
                    alpha: 0
                }, 1e3), e.tween.loop = !0, e.tween.play(null), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.tween.setPaused(!0), createjs.Tween.removeTweens(this.btnSoubi3Light), this.btnSoubi3 = null, this.btnSoubi3Light = null, this.tween = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.InUseMarker = r
}