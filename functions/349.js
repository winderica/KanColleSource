const function349 = function (t, e, i) {
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
    var o = i(4),
        r = i(3),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.iconMaterial = new PIXI.Sprite, e.textCount = new o.TextBox(25, 5523516), e.iconMaterial.position.set(0, 18), e.textCount.anchor.set(1, 0), e.textCount.position.set(261, 9), e.addChild(e.iconMaterial, e.textCount), e
            }
            return n(e, t), e.prototype.update = function (t, e) {
                switch (t) {
                    case 31:
                        this.iconMaterial.texture = r.ARSENAL_MAIN.getTexture(160);
                        break;
                    case 32:
                        this.iconMaterial.texture = r.ARSENAL_MAIN.getTexture(162);
                        break;
                    case 33:
                        this.iconMaterial.texture = r.ARSENAL_MAIN.getTexture(164);
                        break;
                    case 34:
                        this.iconMaterial.texture = r.ARSENAL_MAIN.getTexture(166)
                }
                this.textCount.text = e.toString()
            }, e.prototype.dispose = function () {
                this.removeChildren(), this.textCount.destroy(), this.iconMaterial = null, this.textCount = null
            }, e
        }(PIXI.Container);
    e.DisassemblyMaterialItem = s
}