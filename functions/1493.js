const function1493 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(5), r = i(4), s = i(36), a = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._bg = new PIXI.Sprite, e._bg.anchor.set(.5), e._bg.position.set(o.default.width / 2, o.default.height / 2), e._bg.scale.set(1, 0), e.addChild(e._bg), e
        }

        return n(e, t), e.prototype.initialize = function () {
            this._bg.texture = s.BATTLE_RESULT_MAIN.getTexture(1), this._text1 = new r.TextBox(18, 16774898), this._text1.text = "FRIEND FLEET AREA", this._text1.position.set(-582, 300), this._text1.rotation = -Math.PI / 2, this._bg.addChild(this._text1), this._text2 = new r.TextBox(18, 16774898), this._text2.text = "ENEMY FLEET AREA", this._text2.position.set(578, -234), this._text2.rotation = Math.PI / 2, this._bg.addChild(this._text2)
        }, e.prototype.show = function () {
            var t = this;
            createjs.Tween.get(this._bg.scale).to({ y: 1 }, 300).call(function () {
                t.emit("complete")
            })
        }, e.prototype.dispose = function () {
            this.removeChildren(), this._text1.destroy(), this._text2.destroy()
        }, e
    }(PIXI.Container);
    e.LayerBG = a
}