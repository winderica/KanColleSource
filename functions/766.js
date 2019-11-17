const function766 = function (t, e, i) {
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
        r = i(1),
        s = i(767),
        a = i(768),
        _ = function (t) {
            function e() {
                var e = t.call(this) || this;
                e.fuel = !1, e.ammo = !1, e._onClickFuel = function () {
                    e.onClickFuel()
                }, e._onClickAmmo = function () {
                    e.onClickAmmo()
                }, e._onClickAll = function () {
                    e.onClickAll()
                }, e._onMouseOverAll2 = function () {
                    e.onMouseOverAll2()
                }, e._onMouseOutAll2 = function () {
                    e.onMouseOutAll2()
                }, e._onClickAll2 = function () {
                    e.onClickAll2()
                }, e._onClickBaux = function () {
                    e.onClickBaux()
                }, e._onMouseOver = function (t) {
                    switch (e.buttonFuel.texture = e.btn_2_fuel_off, e.fuel && (e.buttonFuel.texture = e.btn_2_fuel), e.buttonAmmo.texture = e.btn_2_ammo_off, e.ammo && (e.buttonAmmo.texture = e.btn_2_ammo), e.buttonAll.texture = e.btn_2_all, t.target) {
                        case e.buttonAll:
                            e.buttonFuel.texture = e.btn_2_fuel_on, e.buttonAmmo.texture = e.btn_2_ammo_on, e.buttonAll.texture = e.btn_2_all_on;
                            break;
                        case e.buttonAmmo:
                            e.buttonAmmo.texture = e.btn_2_ammo_on;
                            break;
                        case e.buttonFuel:
                            e.buttonFuel.texture = e.btn_2_fuel_on
                    }
                }, e._onMouseOut = function (t) {
                    null == t.target && (e.buttonFuel.texture = e.btn_2_fuel_off, e.buttonAmmo.texture = e.btn_2_ammo_off, e.buttonAll.texture = e.btn_2_all_off, e.fuel && (e.buttonFuel.texture = e.btn_2_fuel), e.ammo && (e.buttonAmmo.texture = e.btn_2_ammo), (e.fuel || e.ammo) && (e.buttonAll.texture = e.btn_2_all))
                }, e.SupplyAircraftButton = new s.SupplyAircraftButton, e.SupplyAircraftButton.position.set(-3, -44), e.supplyAllButton2 = new a.SupplyAllButton2, e.supplyAllButton2.position.set(142, -44);
                var i = o.SUPPLY_MAIN.getTexture(10),
                    n = o.SUPPLY_MAIN.getTexture(9),
                    _ = o.SUPPLY_MAIN.getTexture(11),
                    l = o.SUPPLY_MAIN.getTexture(4),
                    u = o.SUPPLY_MAIN.getTexture(3),
                    c = o.SUPPLY_MAIN.getTexture(5),
                    h = o.SUPPLY_MAIN.getTexture(7),
                    p = o.SUPPLY_MAIN.getTexture(6),
                    d = o.SUPPLY_MAIN.getTexture(8),
                    f = new PIXI.Sprite(i),
                    y = new PIXI.Sprite(h),
                    m = new PIXI.Sprite(l);
                return f.position.set(0, 0), m.position.set(61, 0), y.position.set(217, 0), f.addListener(r.EventType.CLICK, e._onClickFuel), f.addListener(r.EventType.MOUSEOVER, e._onMouseOver), f.addListener(r.EventType.MOUSEOUT, e._onMouseOut), y.addListener(r.EventType.CLICK, e._onClickAmmo), y.addListener(r.EventType.MOUSEOVER, e._onMouseOver), y.addListener(r.EventType.MOUSEOUT, e._onMouseOut), m.addListener(r.EventType.CLICK, e._onClickAll), m.addListener(r.EventType.MOUSEOVER, e._onMouseOver), m.addListener(r.EventType.MOUSEOUT, e._onMouseOut), e.SupplyAircraftButton.onClick = e._onClickBaux, e.supplyAllButton2.onMouseOver = e._onMouseOverAll2, e.supplyAllButton2.onMouseOut = e._onMouseOutAll2, e.supplyAllButton2.onClick = e._onClickAll2, e.addChild(e.SupplyAircraftButton, e.supplyAllButton2, f, m, y), e.buttonAll = m, e.buttonAmmo = y, e.buttonFuel = f, e.btn_2_fuel_off = i, e.btn_2_fuel = n, e.btn_2_fuel_on = _, e.btn_2_ammo_off = h, e.btn_2_ammo = p, e.btn_2_ammo_on = d, e.btn_2_all_off = l, e.btn_2_all = u, e.btn_2_all_on = c, e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.buttonAll.texture = PIXI.Texture.EMPTY, this.buttonAmmo.texture = PIXI.Texture.EMPTY, this.buttonFuel.texture = PIXI.Texture.EMPTY, this.buttonAll.removeAllListeners(r.EventType.CLICK), this.buttonAll.removeAllListeners(r.EventType.MOUSEOVER), this.buttonAll.removeAllListeners(r.EventType.MOUSEOUT), this.buttonFuel.removeAllListeners(r.EventType.CLICK), this.buttonFuel.removeAllListeners(r.EventType.MOUSEOVER), this.buttonFuel.removeAllListeners(r.EventType.MOUSEOUT), this.buttonAmmo.removeAllListeners(r.EventType.CLICK), this.buttonAmmo.removeAllListeners(r.EventType.MOUSEOVER), this.buttonAmmo.removeAllListeners(r.EventType.MOUSEOUT), this.onClickAll = this._onClickAll = null, this.onClickAmmo = this._onClickAmmo = null, this.onClickFuel = this._onClickFuel = null, this._onMouseOut = this._onMouseOver = null, this.btn_2_fuel_off = null, this.btn_2_all_off = null, this.btn_2_ammo_off = null, this.btn_2_fuel_on = null, this.btn_2_all_on = null, this.btn_2_ammo_on = null, this.btn_2_fuel = null, this.btn_2_all = null, this.btn_2_ammo = null, this.buttonAll = null, this.buttonFuel = null, this.buttonAmmo = null, this.removeChildren()
            }, e.prototype.update = function (t, e) {
                this.buttonFuel.interactive = !1, this.buttonFuel.buttonMode = !1, this.buttonAmmo.interactive = !1, this.buttonAmmo.buttonMode = !1, this.buttonAll.interactive = !1, this.buttonAll.buttonMode = !1, this.buttonAll.texture = this.btn_2_all_off, this.buttonAmmo.texture = this.btn_2_ammo_off, this.buttonFuel.texture = this.btn_2_fuel_off, t && (this.buttonFuel.interactive = !0, this.buttonFuel.buttonMode = !0, this.buttonFuel.texture = this.btn_2_fuel), e && (this.buttonAmmo.interactive = !0, this.buttonAmmo.buttonMode = !0, this.buttonAmmo.texture = this.btn_2_ammo), (t || e) && (this.buttonAll.interactive = !0, this.buttonAll.buttonMode = !0, this.buttonAll.texture = this.btn_2_all), this.fuel = t, this.ammo = e
            }, e.prototype.updateButton = function (t, e) {
                this.SupplyAircraftButton.updateClickable(t), this.supplyAllButton2.updateClickable(e)
            }, e.prototype.outSideFocus = function (t, e) {
                this.buttonFuel.texture = this.btn_2_fuel_off, this.buttonAmmo.texture = this.btn_2_ammo_off, this.buttonAll.texture = this.btn_2_all_off, t && e ? (this.buttonFuel.texture = this.btn_2_fuel_on, this.buttonAmmo.texture = this.btn_2_ammo_on, this.buttonAll.texture = this.btn_2_all_on) : t ? this.buttonFuel.texture = this.btn_2_fuel_on : e && (this.buttonAmmo.texture = this.btn_2_ammo_on)
            }, e
        }(PIXI.Container);
    e.SupplyTypeSelectButton = _
}