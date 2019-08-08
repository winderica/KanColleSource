const function330 = function (t, e, i) {
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
        r = i(328),
        s = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = new PIXI.Sprite(o.SUPPLY_MAIN.getTexture(25)),
                    n = new r.MaterialMeterView,
                    s = new r.MaterialMeterView;
                return n.position.set(12, 8), s.position.set(119, 8), e.addChild(i, n, s), e.fuelMaterialMeterView = n, e.ammoMaterialMeterView = s, e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.fuelMaterialMeterView.dispose(), this.ammoMaterialMeterView.dispose(), this.fuelMaterialMeterView = null, this.ammoMaterialMeterView = null, this.removeChildren()
            }, e.prototype.update = function (t, e, i, n) {
                this.fuelMaterialMeterView.update(t, e), this.ammoMaterialMeterView.update(i, n)
            }, e
        }(PIXI.Container);
    e.MaterialView = s;
    var a = i(750),
        _ = i(9),
        u = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = new PIXI.Sprite(_.COMMON_MISC.getTexture(144)),
                    n = new a.MaterialMeterViewS,
                    o = new a.MaterialMeterViewS;
                return n.position.set(29, 6), o.position.set(165, 6), e.addChild(i, n, o), e.fuelMaterialMeterView = n, e.ammoMaterialMeterView = o, e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.fuelMaterialMeterView.dispose(), this.ammoMaterialMeterView.dispose(), this.fuelMaterialMeterView = null, this.ammoMaterialMeterView = null, this.removeChildren()
            }, e.prototype.update = function (t, e, i, n) {
                this.fuelMaterialMeterView.update(t, e), this.ammoMaterialMeterView.update(i, n)
            }, e
        }(PIXI.Container);
    e.MaterialViewS = u
}