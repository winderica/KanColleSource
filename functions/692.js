const function692 = function (t, e, i) {
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
        r = i(57),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._onClickYuso = function () {
                    e.onClickYuso()
                }, e._onClickKido = function () {
                    e.onClickKido()
                }, e._onClickSuijo = function () {
                    e.onClickSuijo()
                }, e._onClickBack = function () {
                    e.onClickBack()
                };
                var i = o.ORGANIZE_RENGO.getTexture(17),
                    n = o.ORGANIZE_RENGO.getTexture(18),
                    s = new PIXI.Sprite(i),
                    a = new PIXI.Sprite(n),
                    _ = o.ORGANIZE_RENGO.getTexture(0),
                    u = o.ORGANIZE_RENGO.getTexture(2);
                e.buttonKido = new r.SimpleButton(_, u);
                var l = o.ORGANIZE_RENGO.getTexture(3),
                    c = o.ORGANIZE_RENGO.getTexture(5);
                e.buttonSuijo = new r.SimpleButton(l, c);
                var h = o.ORGANIZE_RENGO.getTexture(6),
                    p = o.ORGANIZE_RENGO.getTexture(8);
                e.buttonYuso = new r.SimpleButton(h, p);
                var d = o.ORGANIZE_MAIN.getTexture(7);
                e.buttonBack = new r.SimpleButton(d, d);
                var f = o.ORGANIZE_RENGO.getTexture(1),
                    y = new PIXI.Sprite(f),
                    m = o.ORGANIZE_RENGO.getTexture(4),
                    g = new PIXI.Sprite(m),
                    v = o.ORGANIZE_RENGO.getTexture(7),
                    b = new PIXI.Sprite(v);
                return e.buttonKido.onClick = e._onClickKido, e.buttonSuijo.onClick = e._onClickSuijo, e.buttonYuso.onClick = e._onClickYuso, e.buttonBack.onClick = e._onClickBack, a.position.set(189, 25), e.buttonKido.position.set(84, 61), e.buttonSuijo.position.set(298, 61), e.buttonYuso.position.set(84, 124), e.buttonBack.position.set(211, 192), y.position.set(84, 61), g.position.set(298, 61), b.position.set(84, 124), e.buttonSuijo.visible = e.buttonYuso.visible = e.buttonKido.visible = !1, e.addChild(s, y, g, b, e.buttonKido, e.buttonSuijo, e.buttonYuso, e.buttonBack, a), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.buttonKido.onClick = this._onClickKido = null, this.buttonSuijo.onClick = this._onClickSuijo = null, this.buttonYuso.onClick = this._onClickYuso = null, this.buttonBack.onClick = this._onClickBack = null, this.buttonKido.dispose(), this.buttonSuijo.dispose(), this.buttonYuso.dispose(), this.buttonBack.dispose(), this.buttonKido = null, this.buttonSuijo = null, this.buttonYuso = null, this.buttonBack = null, this.removeChildren()
            }, e.prototype.update = function (t, e, i) {
                this.buttonSuijo.reset(), this.buttonYuso.reset(), this.buttonKido.reset(), this.buttonSuijo.visible = this.buttonYuso.visible = this.buttonKido.visible = !1, t && (this.buttonKido.visible = !0), i && (this.buttonYuso.visible = !0), e && (this.buttonSuijo.visible = !0)
            }, e
        }(PIXI.Container);
    e.CombineTypeSelectDialog = s
}