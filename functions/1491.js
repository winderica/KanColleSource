const function1491 = function (t, e, i) {
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
            this._bg.texture = s.BATTLE_RESULT_MAIN.getTexture(1);
            var t = new r.TextBox(18, 16774898);
            t.text = "FRIEND FLEET AREA", t.position.set(-582, 300), t.rotation = -Math.PI / 2, this._bg.addChild(t);
            var e = new r.TextBox(18, 16774898);
            e.text = "ENEMY FLEET AREA", e.position.set(578, -234), e.rotation = Math.PI / 2, this._bg.addChild(e)
        }, e.prototype.show = function () {
            var t = this;
            createjs.Tween.get(this._bg.scale).to({ y: 1 }, 300).call(function () {
                t.emit("complete")
            })
        }, e
    }(PIXI.Container);
    e.LayerBG = a
}