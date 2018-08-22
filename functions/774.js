const function774 = function (t, e, i) {
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
    var o = i(0), r = i(113), s = i(4), a = i(59), _ = i(3), u = i(3), l = i(31), c = i(112), h = i(1),
        p = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._onClickYes = function () {
                    e.onClickYes()
                }, e._onClickNo = function () {
                    e.onClickNo()
                };
                var i = new PIXI.Sprite(u.REMODEL_MAIN.getTexture(42)),
                    n = new PIXI.Sprite(u.REMODEL_MAIN.getTexture(6)),
                    c = new PIXI.Sprite(u.REMODEL_MAIN.getTexture(0)), h = new r.DownArrowAnimationView,
                    p = new l.ShipBanner, d = new l.ShipBanner, f = new PIXI.Sprite(_.COMMON_MAIN.getTexture(42)),
                    y = new a.IconWeapon, v = new s.TextBox(21, 3355443), g = new s.TextBox(21, 3355443),
                    m = new s.TextBox(21, 3355443), b = new s.TextBox(15, 3355443), w = new s.TextBox(21, 3355443),
                    x = new s.TextBox(15, 3355443), I = new s.TextBox(21, 3355443),
                    T = new PIXI.Sprite(o.default.resources.getUIImage("mask")),
                    O = new PIXI.Sprite(o.default.resources.getUIImage("mask")),
                    P = new PIXI.Sprite(o.default.resources.getUIImage("mask"));
                return P.anchor.set(1, 0), O.anchor.set(1, 0), T.anchor.set(1, 0), P.scale.set(-.9, 1), O.scale.set(-.9, 1), T.scale.set(-1.95, 1), d.position.set(98, 177), w.position.set(348, 182), x.position.set(348, 206), v.position.set(465, 53), p.position.set(98, 41), m.position.set(348, 48), b.position.set(348, 72), g.position.set(465, 188), f.position.set(351, 116), I.position.set(396, 125), y.position.set(351, 117), h.position.set(216, 122), n.position.set(156, 270), c.position.set(411, 270), n.interactive = !0, c.interactive = !0, I.text = "", v.text = "\u304c\u73fe\u5728\u88c5\u5099\u3057\u3066\u3044\u308b", g.text = "\u306b\u88c5\u5099\u3057\u307e\u3059", m.text = "", b.text = "", w.text = "", x.text = "", I.mask = T, w.mask = O, m.mask = P, I.addChild(T), w.addChild(O), m.addChild(P), e.addChild(i, n, c, h, p, d, f, m, b, x, w, v, g, y, I), e.textFromShipName = m, e.textFromShipLevel = b, e.textToShipName = w, e.textToShipLevel = x, e.fromShipBanner = p, e.toShipBanner = d, e.textToSlotItemName = I, e.iconWeapon = y, e.downArrowAnimationView = h, e.buttonYes = n, e.buttonNo = c, e
            }

            return n(e, t), e.prototype.dispose = function () {
                this.deactivate(), this.iconWeapon.dispose(), this.downArrowAnimationView.dispose(), this.textFromShipName.text = "", this.textToShipName.text = "", this.textFromShipLevel.text = "", this.textToShipLevel.text = "", this.textToSlotItemName.text = "", this.fromShipBanner.dispose(), this.toShipBanner.dispose(), this.onClickYes = null, this.onClickNo = null, this.textFromShipName = null, this.textToShipName = null, this.textFromShipLevel = null, this.textToShipLevel = null, this.fromShipBanner = null, this.toShipBanner = null, this.textToSlotItemName = null, this.iconWeapon = null, this.downArrowAnimationView = null, this.buttonYes = null, this.buttonNo = null, this._onClickNo = this.onClickNo = null, this._onClickYes = this.onClickYes = null, this.removeChildren()
            }, e.prototype.activate = function () {
                0 == this.buttonYes.buttonMode && (this.buttonYes.addListener(h.EventType.CLICK, this._onClickYes), this.buttonYes.buttonMode = !0), 0 == this.buttonNo.buttonMode && (this.buttonNo.addListener(h.EventType.CLICK, this._onClickNo), this.buttonNo.buttonMode = !0)
            }, e.prototype.deactivate = function () {
                this.buttonYes.buttonMode = !1, this.buttonYes.removeAllListeners(h.EventType.CLICK), this.buttonNo.buttonMode = !1, this.buttonNo.removeAllListeners(h.EventType.CLICK), c.TaskLoadShipResource.abortBy(this)
            }, e.prototype.update = function (t, e, i) {
                var n = "(Lv." + t.level + ")", o = "(Lv." + e.level + ")";
                this.textFromShipName.text = t.name, this.textFromShipLevel.text = n, this.textToShipName.text = e.name, this.textToShipLevel.text = o, this.fromShipBanner.updateImage(t.mstID, t.isDamaged()), this.toShipBanner.updateImage(e.mstID, e.isDamaged()), this.textToSlotItemName.text = i.name, this.iconWeapon.update(i.iconType)
            }, e
        }(PIXI.Container);
    e.ChangeConfirmFromOtherShip = p
}