const function756 = function (t, e, i) {
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
    var o = i(3), r = i(4), s = i(160), a = function (t) {
        function e() {
            var e = t.call(this) || this, i = new PIXI.Sprite(o.SUPPLY_MAIN.getTexture(17)),
                n = new PIXI.Sprite(o.SUPPLY_MAIN.getTexture(25)), a = new PIXI.Sprite(o.SUPPLY_MAIN.getTexture(2)),
                _ = new PIXI.Sprite(o.SUPPLY_MAIN.getTexture(1)), l = new r.TextBox(28, 5523516),
                u = new r.TextBox(28, 5523516), c = new r.TextBox(16, 12467003), h = new s.FuelContainer,
                p = new s.AmmoContainer;
            return l.anchor.set(1, 0), u.anchor.set(1, 0), i.position.set(0, 0), n.position.set(17, 24), a.position.set(18, 83), _.position.set(159, 83), h.position.set(18, 209), p.position.set(159, 209), l.position.set(144, 166), u.position.set(285, 166), c.position.set(155, 441), c.anchor.set(.5, 0), c.visible = !1, e.addChild(i, n, a, _, u, l, c, h, p), e.textAmmo = u, e.textFuel = l, e.textAlert = c, e.fuelContainer = h, e.ammoContainer = p, e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren(), this.textAmmo.destroy(), this.textFuel.destroy(), this.textAlert.destroy(), this.fuelContainer.dispose(), this.fuelContainer = null, this.ammoContainer.dispose(), this.ammoContainer = null, this.textFuel = null, this.textAmmo = null, this.textAlert = null
        }, e.prototype.updateFuelCount = function (t, e) {
            var i, n = t.toString();
            i = e ? 5523516 : 12467003, this.textFuel.style.fill = i, this.textFuel.text = n
        }, e.prototype.updateAmmoCount = function (t, e) {
            var i, n = t.toString();
            i = e ? 5523516 : 12467003, this.textAmmo.style.fill = i, this.textAmmo.text = n
        }, e.prototype.playAnimationFuel = function (t) {
            this.fuelContainer.update(t)
        }, e.prototype.playAnimationAmmo = function (t) {
            this.ammoContainer.update(t)
        }, e.prototype.playSupplyAmmo = function (t) {
            this.ammoContainer.playSupply(t)
        }, e.prototype.playSupplyFuel = function (t) {
            this.fuelContainer.playSupply(t)
        }, e.prototype.showAlert = function (t) {
            this.textAlert.text = t, this.textAlert.visible = !0
        }, e.prototype.hideAlert = function () {
            this.textAlert.visible = !1
        }, e
    }(PIXI.Container);
    e.SupplyShowcaseView = a
}