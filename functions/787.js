const function787 = function (t, e, i) {
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
    var o = i(4), r = i(128), s = i(788), a = i(13), _ = function (t) {
        function e() {
            var e = t.call(this) || this, i = new PIXI.Sprite(r.REMODEL_POWERUP.getTexture(16)),
                n = new o.TextBox(21, 16777215), _ = new o.TextBox(36, 16777215), u = new o.TextBox(65, 16777215),
                l = new s.StarRate, c = a.CreateRect.gradientLeftToRight(220, 50, .65, .9), h = new PIXI.Container;
            return h.mask = c, h.addChild(_, c), n.position.set(18, 8), h.position.set(18, 36), u.position.set(230, 89), l.position.set(15, 165), u.anchor.x = 1, e.addChild(i, n, h, u, l), e.textType = n, e.textName = _, e.textLevel = u, e.starRate = l, e.containerName = h, e
        }

        return n(e, t), e.prototype.update = function (t, e, i, n) {
            this.containerName.cacheAsBitmap = !1, this.textType.text = t, this.textName.text = e, this.textLevel.text = "" + i, this.starRate.update(n), this.containerName.cacheAsBitmap = !0
        }, e.prototype.dispose = function () {
            this.containerName.mask = null, this.containerName.removeChildren(), this.textType.text = "", this.textName.text = "", this.textLevel.text = "", this.starRate.dispose(), this.textType = null, this.textName = null, this.textLevel = null, this.starRate = null, this.containerName = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.ShipInfoBox = _
}