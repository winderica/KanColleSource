const function1447 = function (t, e, i) {
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
        r = i(16),
        s = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype.show = function () {
                var t = this,
                    e = r.BATTLE_MAIN.getTexture(109);
                this._content = new o.Sprite(e), this._content.anchor.set(.5), this._content.scale.set(0), this.addChild(this._content), this._t = createjs.Tween.get(this._content, {
                    loop: !0
                }).to({
                    x: 5,
                    y: -7,
                    scaleX: .14,
                    scaleY: .14
                }, 200).to({
                    x: 7,
                    y: -15,
                    scaleX: .25,
                    scaleY: .25
                }, 200).to({
                    x: 12,
                    y: -21,
                    scaleX: .35,
                    scaleY: .35
                }, 200).to({
                    x: 14,
                    y: -29,
                    scaleX: .46,
                    scaleY: .46
                }, 200).to({
                    x: 15,
                    y: -36,
                    scaleX: .57,
                    scaleY: .57
                }, 200).to({
                    x: 17,
                    y: -42,
                    scaleX: .68,
                    scaleY: .68
                }, 200).to({
                    x: 17,
                    y: -50,
                    scaleX: .78,
                    scaleY: .78
                }, 200).to({
                    x: 21,
                    y: -57,
                    scaleX: .89,
                    scaleY: .89
                }, 200).to({
                    x: 24,
                    y: -65,
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 0
                }, 200).call(function () {
                    t._content.scale.set(0), t._content.alpha = 1, t._content.position.set(0, 0)
                })
            }, e.prototype.dispose = function () {
                this.removeChildren(), null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e
        }(PIXI.Container);
    e.BannerBabble = s
}