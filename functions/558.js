const function558 = function (t, e, i) {
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
    var o = i(0),
        r = i(273),
        s = i(274),
        a = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype.initialize = function () {
                var t = o.default.resources.getUIImage("title_bg1");
                this._bg = new PIXI.Sprite(t), this._parts_layer = new PIXI.Container, this._logo = new PIXI.Sprite(r.TITLE_MAIN.getTexture(3)), this._logo.scale.set(.6, .6), this._logo.anchor.set(.5, .5), this._logo.position.set(234, 264), this._kira = new s.KiraLayer, this._kira.scale.set(.6, .6), this._kira.position.set(144, 183), this._kira.initialize(), this._bar = new PIXI.Graphics, this._bar.beginFill(2466210), this._bar.drawRect(0, 0, 960, 30), this._bar.endFill(), this._bar.position.set(120, 663), this._bar.scale.x = 0, this._bar_frame = new PIXI.Graphics, this._bar_frame.lineStyle(3, 16777215), this._bar_frame.drawRect(0, 0, 960, 30), this._bar_frame.endFill(), this._bar_frame.position.set(120, 663), this.addChild(this._bg), this._parts_layer.addChild(this._logo), this._parts_layer.addChild(this._kira), this._parts_layer.addChild(this._bar), this._parts_layer.addChild(this._bar_frame), this.addChild(this._parts_layer)
            }, e.prototype.dispose = function () {
                this._kira.dispose()
            }, e.prototype.setProgress = function (t) {
                this._bar.scale.x = t / 100
            }, e.prototype.hideTween = function (t) {
                var e = createjs.Tween.get(this._bg).to({
                        alpha: 0
                    }, 300),
                    i = createjs.Tween.get(this._parts_layer).to({
                        alpha: 0
                    }, 100);
                (e.duration >= i.duration ? e : i).call(function () {
                    t()
                })
            }, e
        }(PIXI.Container);
    e.TitleView1 = a
}