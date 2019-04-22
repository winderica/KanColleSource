const function956 = function (t, e, i) {
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
        r = i(26),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._fuel_max = 0, e._baux_max = 0, e._key = null, e._title = new PIXI.Sprite, e._title.position.set(15, 17), e.addChild(e._title), e._icon_fuel = new PIXI.Sprite, e._icon_fuel.position.set(17, 75), e.addChild(e._icon_fuel), e._icon_baux = new PIXI.Sprite, e._icon_baux.position.set(158, 75), e.addChild(e._icon_baux), e._txt_fuel = new o.TextBox(28, 5523516), e._txt_fuel.y = 158, e.addChild(e._txt_fuel), e._txt_baux = new o.TextBox(28, 5523516), e._txt_baux.y = 158, e.addChild(e._txt_baux), e
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                this._fuel_max = t, this._baux_max = e, this._title.texture = r.SALLY_AIRUNIT.getTexture(118), this._icon_fuel.texture = r.SALLY_AIRUNIT.getTexture(12), this._icon_baux.texture = r.SALLY_AIRUNIT.getTexture(11)
            }, e.prototype.show = function (t, e, i) {
                void 0 === i && (i = null), this._key = i;
                var n = t > this._fuel_max ? 16711680 : 5523516;
                this._txt_fuel.style.fill = n, this._txt_fuel.text = t.toString(), this._txt_fuel.x = 144 - this._txt_fuel.width;
                var o = e > this._baux_max ? 16711680 : 5523516;
                this._txt_baux.style.fill = o, this._txt_baux.text = e.toString(), this._txt_baux.x = 285 - this._txt_baux.width
            }, e.prototype.hide = function (t) {
                void 0 === t && (t = null), null != t && t != this._key || (this._key = null, this._txt_fuel.text = "", this._txt_baux.text = "")
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._txt_fuel.destroy(), this._txt_baux.destroy()
            }, e
        }(PIXI.Container);
    e.AirUnitSupplyPanelTitle = s
}