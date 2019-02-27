const function451 = function (t, e, i) {
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
        r = i(12),
        s = i(184),
        a = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._weight = 1, n._type = e, n._night = i, n._bg = new s.TelopBG, n.addChild(n._bg), n._text = new r.Sprite, n.addChild(n._text), n
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                switch (this._friend = e, this._text.texture = o.default.resources.getSlotitem(t, "btxt_flat"), this._text.scale.set(.83), this._setBGTexture(e), this._type) {
                    case 0:
                        1 == e ? (this._bg_base_x = -600, this._text.anchor.set(1, .5), this._text_base_x = 0) : (this._bg_base_x = 1800, this._text.anchor.set(0, .5), this._text_base_x = 1200, this._weight = -1), this._bg.position.set(this._bg_base_x, 516), this._text.position.set(this._text_base_x, 516);
                        break;
                    case 1:
                        this._text_w = this._text.width, this._bg.scale.set(1, 1.5), this._bg.position.set(600, 516), this._bg.alpha = 0, 1 == e ? (this._text.anchor.set(.5), this._text.position.set(1200 - this._text_w / 2, 516)) : (this._text.anchor.set(.5), this._text.position.set(0 + this._text_w / 2, 516)), this._text.alpha = 0, this._text.scale.set(.83 + .2075);
                        break;
                    case 2:
                        this._friend = e;
                        var i = e ? 1 : -1;
                        1 == e ? (this._text.anchor.set(1, .5), this._text.rotation = -16 / 180 * Math.PI, this._text.position.set(0, 692)) : (this._text.anchor.set(0, .5), this._text.rotation = 16 / 180 * Math.PI, this._text.position.set(1200, 580)), this._bg.position.set(600 - 750 * i, 644)
                }
            }, e.prototype._setBGTexture = function (t) {
                switch (this._type) {
                    case 0:
                    case 1:
                        this._bg.initialize(t, !this._night);
                        break;
                    case 2:
                        this._bg.removeChildren();
                        var e = new PIXI.Sprite;
                        1 == t ? 0 == this._night ? e.texture = PIXI.Texture.fromFrame("battle_telop_mes_f_hbg") : e.texture = PIXI.Texture.fromFrame("battle_telop_mes_f_ybg") : 0 == this._night ? e.texture = PIXI.Texture.fromFrame("battle_telop_mes_e_hbg") : e.texture = PIXI.Texture.fromFrame("battle_telop_mes_e_ybg"), e.x = -Math.round(e.width / 2), e.y = -Math.round(e.height / 2), this._bg.addChild(e)
                }
            }, e.prototype.play = function () {
                switch (this._type) {
                    case 0:
                        this.play_type1();
                        break;
                    case 1:
                        this.play_type2();
                        break;
                    case 2:
                        this.play_type3()
                }
            }, e.prototype.play_type1 = function () {
                createjs.Tween.get(this._bg).to({
                    x: this._bg_base_x + 1200 * this._weight
                }, 200).wait(565).to({
                    x: this._bg_base_x + 1410 * this._weight,
                    alpha: 0
                }, 200), createjs.Tween.get(this._text).wait(200).to({
                    x: this._text_base_x + 1155 * this._weight
                }, 265).to({
                    x: this._text_base_x + 1200 * this._weight
                }, 235).to({
                    x: this._text_base_x + 1800 * this._weight,
                    alpha: 0
                }, 200)
            }, e.prototype.play_type2 = function () {
                createjs.Tween.get(this._bg).to({
                    scaleY: 1,
                    alpha: 1
                }, 433).wait(333).to({
                    scaleY: 1.5,
                    alpha: 0
                }, 200);
                var t = this._friend ? 1230 - this._text_w / 2 : this._text_w / 2 - 30;
                createjs.Tween.get(this._text).wait(200).to({
                    scaleX: .83,
                    scaleY: .83,
                    alpha: 1
                }, 333, createjs.Ease.sineOut).to({
                    x: t
                }, 200).to({
                    scaleX: .83 + .2075,
                    scaleY: .83 + .2075,
                    alpha: 0
                }, 200)
            }, e.prototype.play_type3 = function () {
                var t = this._friend ? 1 : -1,
                    e = this._friend ? 356 : 244;
                createjs.Tween.get(this._bg).to({
                    x: 600,
                    y: 450
                }, 200).wait(566).to({
                    alpha: 0
                }, 200), createjs.Tween.get(this._text).wait(200).to({
                    x: 600 + 600 * t,
                    y: e
                }, 400, createjs.Ease.sineOut).to({
                    x: 600 + 630 * t,
                    y: e - 8
                }, 100).to({
                    x: 600 + 1140 * t,
                    y: e - 150,
                    alpha: 0
                }, 266)
            }, e
        }(PIXI.Container);
    e.CutinTelop = a
}