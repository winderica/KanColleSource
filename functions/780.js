const function780 = function (t, e, i) {
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
        r = i(113),
        s = i(4),
        a = i(60),
        _ = i(3),
        l = i(3),
        u = i(33),
        c = i(112),
        h = i(1),
        p = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._labelArr = [], e._onClickYes = function () {
                    e.onClickYes()
                }, e._onClickNo = function () {
                    e.onClickNo()
                };
                var i = new PIXI.Sprite(l.REMODEL_MAIN.getTexture(42));
                e.buttonYes = new PIXI.Sprite(l.REMODEL_MAIN.getTexture(6)), e.buttonNo = new PIXI.Sprite(l.REMODEL_MAIN.getTexture(0)), e.downArrowAnimationView = new r.DownArrowAnimationView, e.fromShipBanner = new u.ShipBanner, e.toShipBanner = new u.ShipBanner;
                var n = new PIXI.Sprite(_.COMMON_MAIN.getTexture(45));
                e.iconWeapon = new a.IconWeapon;
                var c = new s.TextBox(21, 3355443),
                    h = new s.TextBox(21, 3355443);
                e.textFromShipName = new s.TextBox(21, 3355443), e.textFromShipLevel = new s.TextBox(15, 3355443), e.textToShipName = new s.TextBox(21, 3355443), e.textToShipLevel = new s.TextBox(15, 3355443), e.textToSlotItemName = new s.TextBox(21, 3355443);
                var p = new PIXI.Sprite(o.default.resources.getUIImage("mask")),
                    d = new PIXI.Sprite(o.default.resources.getUIImage("mask")),
                    f = new PIXI.Sprite(o.default.resources.getUIImage("mask"));
                return f.anchor.set(1, 0), d.anchor.set(1, 0), p.anchor.set(1, 0), f.scale.set(-.9, 1), d.scale.set(-.9, 1), p.scale.set(-1.95, 1), e.toShipBanner.position.set(98, 177), e.textToShipName.position.set(348, 182), e.textToShipLevel.position.set(348, 206), c.position.set(465, 53), e.fromShipBanner.position.set(98, 41), e.textFromShipName.position.set(348, 48), e.textFromShipLevel.position.set(348, 72), h.position.set(465, 188), n.position.set(351, 116), e.textToSlotItemName.position.set(396, 125), e.iconWeapon.position.set(351, 117), e.downArrowAnimationView.position.set(216, 122), e.buttonYes.position.set(156, 270), e.buttonNo.position.set(411, 270), e.buttonYes.interactive = !0, e.buttonNo.interactive = !0, e.textToSlotItemName.text = "", c.text = "\u304c\u73fe\u5728\u88c5\u5099\u3057\u3066\u3044\u308b", h.text = "\u306b\u88c5\u5099\u3057\u307e\u3059", e._labelArr.push(c), e._labelArr.push(h), e.textFromShipName.text = "", e.textFromShipLevel.text = "", e.textToShipName.text = "", e.textToShipLevel.text = "", e.textToSlotItemName.mask = p, e.textToShipName.mask = d, e.textFromShipName.mask = f, e.textToSlotItemName.addChild(p), e.textToShipName.addChild(d), e.textFromShipName.addChild(f), e.addChild(i, e.buttonYes, e.buttonNo, e.downArrowAnimationView, e.fromShipBanner, e.toShipBanner, n, e.textFromShipName, e.textFromShipLevel, e.textToShipLevel, e.textToShipName, c, h, e.iconWeapon, e.textToSlotItemName), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this.deactivate(), this.iconWeapon.dispose(), this.downArrowAnimationView.dispose(), this.fromShipBanner.dispose(), this.toShipBanner.dispose(), this.textFromShipName.destroy(), this.textToShipName.destroy(), this.textFromShipLevel.destroy(), this.textToShipLevel.destroy(), this.textToSlotItemName.destroy(), this._labelArr.forEach(function (t) {
                    t.destroy()
                }), this.onClickYes = null, this.onClickNo = null, this.textFromShipName = null, this.textToShipName = null, this.textFromShipLevel = null, this.textToShipLevel = null, this.fromShipBanner = null, this.toShipBanner = null, this.textToSlotItemName = null, this.iconWeapon = null, this.downArrowAnimationView = null, this.buttonYes = null, this.buttonNo = null, this._labelArr = null, this.onClickNo = null, this.onClickYes = null
            }, e.prototype.activate = function () {
                0 == this.buttonYes.buttonMode && (this.buttonYes.on(h.EventType.CLICK, this._onClickYes), this.buttonYes.buttonMode = !0), 0 == this.buttonNo.buttonMode && (this.buttonNo.on(h.EventType.CLICK, this._onClickNo), this.buttonNo.buttonMode = !0)
            }, e.prototype.deactivate = function () {
                this.buttonYes.buttonMode = !1, this.buttonYes.off(h.EventType.CLICK), this.buttonNo.buttonMode = !1, this.buttonNo.off(h.EventType.CLICK), c.TaskLoadShipResource.abortBy(this)
            }, e.prototype.update = function (t, e, i) {
                var n = "(Lv." + t.level + ")",
                    o = "(Lv." + e.level + ")";
                this.textFromShipName.text = t.name, this.textFromShipLevel.text = n, this.textToShipName.text = e.name, this.textToShipLevel.text = o, this.fromShipBanner.updateImage(t.mstID, t.isDamaged()), this.toShipBanner.updateImage(e.mstID, e.isDamaged()), this.textToSlotItemName.text = i.name, this.iconWeapon.update(i.iconType)
            }, e
        }(PIXI.Container);
    e.ChangeConfirmFromOtherShip = p
}