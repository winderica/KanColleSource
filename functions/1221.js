const function1221 = function (t, e, i) {
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
    var o = i(4), r = i(133), s = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._bg = new PIXI.Sprite, e._name_txt = new o.TextBox(20, 16774898);
            var i = new PIXI.Graphics;
            return i.beginFill(0), i.drawRect(0, 0, 264, 26), i.endFill(), e._name_txt.addChild(i), e._name_txt.mask = i, e._name_txt.position.set(20, 3), e._lvlabel_txt = new o.TextBox(20, 16774898), e._lvlabel_txt.position.set(351, 5), e._lvlabel_txt.text = "Lv", e._lv_txt = new o.TextBox(24, 16774898), e._lv_txt.anchor.set(1, 0), e._lv_txt.position.set(423, 0), e.addChild(e._bg), e.addChild(e._name_txt), e.addChild(e._lvlabel_txt), e.addChild(e._lv_txt), e
        }

        return n(e, t), e.prototype.update = function (t, e, i) {
            this._bg.texture = r.PRAC_MAIN.getTexture(2), this._name_txt.text = t + " " + e, this._lv_txt.text = i.toString()
        }, e.prototype.dispose = function () {
            this.removeChildren(), this._name_txt.destroy(), this._lvlabel_txt.destroy(), this._lv_txt.destroy()
        }, e
    }(PIXI.Container);
    e.ShipElement = s
}