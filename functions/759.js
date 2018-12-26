const function759 = function (t, e, i) {
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
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                e.fuel = !1, e.ammo = !1, e._onClickFuel = function () {
                    e.onClickFuel()
                }, e._onClickAmmo = function () {
                    e.onClickAmmo()
                }, e._onClickAll = function () {
                    e.onClickAll()
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
                };
                var i = o.SUPPLY_MAIN.getTexture(10),
                    n = o.SUPPLY_MAIN.getTexture(9),
                    s = o.SUPPLY_MAIN.getTexture(11),
                    a = o.SUPPLY_MAIN.getTexture(4),
                    _ = o.SUPPLY_MAIN.getTexture(3),
                    l = o.SUPPLY_MAIN.getTexture(5),
                    u = o.SUPPLY_MAIN.getTexture(7),
                    c = o.SUPPLY_MAIN.getTexture(6),
                    h = o.SUPPLY_MAIN.getTexture(8),
                    p = new PIXI.Sprite(i),
                    d = new PIXI.Sprite(u),
                    f = new PIXI.Sprite(a);
                return p.position.set(0, 0), f.position.set(67, 0), d.position.set(217, 0), p.addListener(r.EventType.CLICK, e._onClickFuel), p.addListener(r.EventType.MOUSEOVER, e._onMouseOver), p.addListener(r.EventType.MOUSEOUT, e._onMouseOut), d.addListener(r.EventType.CLICK, e._onClickAmmo), d.addListener(r.EventType.MOUSEOVER, e._onMouseOver), d.addListener(r.EventType.MOUSEOUT, e._onMouseOut), f.addListener(r.EventType.CLICK, e._onClickAll), f.addListener(r.EventType.MOUSEOVER, e._onMouseOver), f.addListener(r.EventType.MOUSEOUT, e._onMouseOut), e.addChild(p, f, d), e.buttonAll = f, e.buttonAmmo = d, e.buttonFuel = p, e.btn_2_fuel_off = i, e.btn_2_fuel = n, e.btn_2_fuel_on = s, e.btn_2_ammo_off = u, e.btn_2_ammo = c, e.btn_2_ammo_on = h, e.btn_2_all_off = a, e.btn_2_all = _, e.btn_2_all_on = l, e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.buttonAll.texture = PIXI.Texture.EMPTY, this.buttonAmmo.texture = PIXI.Texture.EMPTY, this.buttonFuel.texture = PIXI.Texture.EMPTY, this.buttonAll.removeAllListeners(r.EventType.CLICK), this.buttonAll.removeAllListeners(r.EventType.MOUSEOVER), this.buttonAll.removeAllListeners(r.EventType.MOUSEOUT), this.buttonFuel.removeAllListeners(r.EventType.CLICK), this.buttonFuel.removeAllListeners(r.EventType.MOUSEOVER), this.buttonFuel.removeAllListeners(r.EventType.MOUSEOUT), this.buttonAmmo.removeAllListeners(r.EventType.CLICK), this.buttonAmmo.removeAllListeners(r.EventType.MOUSEOVER), this.buttonAmmo.removeAllListeners(r.EventType.MOUSEOUT), this.onClickAll = this._onClickAll = null, this.onClickAmmo = this._onClickAmmo = null, this.onClickFuel = this._onClickFuel = null, this._onMouseOut = this._onMouseOver = null, this.btn_2_fuel_off = null, this.btn_2_all_off = null, this.btn_2_ammo_off = null, this.btn_2_fuel_on = null, this.btn_2_all_on = null, this.btn_2_ammo_on = null, this.btn_2_fuel = null, this.btn_2_all = null, this.btn_2_ammo = null, this.buttonAll = null, this.buttonFuel = null, this.buttonAmmo = null, this.removeChildren()
            }, e.prototype.update = function (t, e) {
                this.buttonFuel.interactive = !1, this.buttonFuel.buttonMode = !1, this.buttonAmmo.interactive = !1, this.buttonAmmo.buttonMode = !1, this.buttonAll.interactive = !1, this.buttonAll.buttonMode = !1, this.buttonAll.texture = this.btn_2_all_off, this.buttonAmmo.texture = this.btn_2_ammo_off, this.buttonFuel.texture = this.btn_2_fuel_off, t && (this.buttonFuel.interactive = !0, this.buttonFuel.buttonMode = !0, this.buttonFuel.texture = this.btn_2_fuel), e && (this.buttonAmmo.interactive = !0, this.buttonAmmo.buttonMode = !0, this.buttonAmmo.texture = this.btn_2_ammo), (t || e) && (this.buttonAll.interactive = !0, this.buttonAll.buttonMode = !0, this.buttonAll.texture = this.btn_2_all), this.fuel = t, this.ammo = e
            }, e.prototype.outSideFocus = function (t, e) {
                this.buttonFuel.texture = this.btn_2_fuel_off, this.buttonAmmo.texture = this.btn_2_ammo_off, this.buttonAll.texture = this.btn_2_all_off, t && e ? (this.buttonFuel.texture = this.btn_2_fuel_on, this.buttonAmmo.texture = this.btn_2_ammo_on, this.buttonAll.texture = this.btn_2_all_on) : t ? this.buttonFuel.texture = this.btn_2_fuel_on : e && (this.buttonAmmo.texture = this.btn_2_ammo_on)
            }, e
        }(PIXI.Container);
    e.SupplyTypeSelectButton = s
}