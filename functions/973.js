const function973 = function (t, e, i) {
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
    var o = i(30), r = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), e.prototype.initialize = function () {
            this._fuel = new a, this._ammo = new _, this._fuel.initialize(), this._ammo.initialize(), this._ammo.position.set(38, 0), this.addChild(this._fuel), this.addChild(this._ammo)
        }, e.prototype.update = function (t) {
            null == t ? this.visible = !1 : (this.visible = !0, this._fuel.update(t.fuelNow / t.fuelMax), this._ammo.update(t.ammoNow / t.ammoMax))
        }, e
    }(PIXI.Container);
    e.CompLackAlerts = r;
    var s = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), e.prototype.initialize = function () {
            var t = new PIXI.Sprite(this._getTexture());
            this._alert = new PIXI.Sprite, t.position.set(-14, -14), this._alert.position.set(0, -11), this.addChild(t), this.addChild(this._alert)
        }, e.prototype.update = function (t) {
            t <= .5 ? (this._alert.texture = o.SALLY_COMMON.getTexture(32), this.visible = !0) : t < 1 ? (this._alert.texture = o.SALLY_COMMON.getTexture(31), this.visible = !0) : this.visible = !1
        }, e.prototype._getTexture = function () {
            return null
        }, e
    }(PIXI.Container), a = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype._getTexture = function () {
            return o.SALLY_COMMON.getTexture(29)
        }, e
    }(s), _ = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype._getTexture = function () {
            return o.SALLY_COMMON.getTexture(30)
        }, e
    }(s)
}