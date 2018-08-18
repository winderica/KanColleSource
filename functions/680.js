const function680 = function (t, e, i) {
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
    var o = i(0), r = i(155), s = i(59), a = i(156), _ = i(4), u = i(20), l = function (t) {
        function e(e) {
            void 0 === e && (e = !1);
            var i = t.call(this) || this, n = new PIXI.Sprite, l = new _.TextBox(19, 5523516),
                c = new PIXI.Sprite(o.default.resources.getUIImage("mask")), h = new _.TextBox(21, 5523516),
                p = new a.SlotItemLevel, d = new PIXI.Sprite, f = new r.AirPlaneLevel,
                y = new PIXI.Sprite(u.COMMON_MAIN.getTexture(39)), v = new s.IconWeapon;
            n.texture = u.COMMON_MAIN.getTexture(41), c.scale.set(-1.95, 1), c.anchor.set(1, 0);
            var g = new PIXI.Container;
            return g.mask = c, g.addChild(l, c), g.position.set(50, 11), h.position.set(-2, 23), h.anchor.set(1, .5), p.position.set(247, 14), f.position.set(219, 3), y.position.set(293, 2), i.addChild(n, g, h, d, p, f, y, v), i.background = n, i.textName = l, i.textNum = h, i.emblem = d, i.airPlaneLevel = f, i.slotItemLevel = p, i.lockIcon = y, i.hideTousai = e, i.iconWeapon = v, i.containerName = g, i
        }

        return n(e, t), e.prototype.dispose = function () {
            this.slotItemLevel.dispose(), this.iconWeapon.dispose(), this.airPlaneLevel.dispose(), this.containerName.mask = null, this.containerName.removeChildren(), this.background.texture = PIXI.Texture.EMPTY, this.emblem.texture = PIXI.Texture.EMPTY, this.lockIcon.texture = PIXI.Texture.EMPTY, this.iconWeapon = null, this.background = null, this.textName = null, this.textNum = null, this.emblem = null, this.airPlaneLevel = null, this.slotItemLevel = null, this.lockIcon = null, this.containerName = null, this.hideTousai = null, this.removeChildren()
        }, e.prototype.clear = function () {
            this.update(0, "", !1, 0, 0, 0, !1)
        }, e.prototype.update = function (t, e, i, n, o, r, s) {
            void 0 === n && (n = 0), void 0 === o && (o = 0), void 0 === r && (r = 0), void 0 === s && (s = !1), this.containerName.cacheAsBitmap = !1, this.textName.text = e.toString(), this.containerName.cacheAsBitmap = !0, this.iconWeapon.update(t), i ? (this.textNum.visible = !0, this.textNum.text = n.toString(), this.airPlaneLevel.visible = !0, this.airPlaneLevel.update(r), this.airPlaneLevel.position.set(219, 3)) : (this.textNum.visible = !1, this.textNum.text = "", this.airPlaneLevel.visible = !1, this.airPlaneLevel.update(0)), this.lockIcon.visible = !!s, this.hideTousai && (this.textNum.visible = !1), this.slotItemLevel.update(o)
        }, e
    }(PIXI.Container);
    e.SlotItemSlotView = l
}