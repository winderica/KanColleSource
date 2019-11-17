const function848 = function (t, e, i) {
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
    var o = i(1),
        r = i(8),
        s = i(33),
        a = i(71),
        _ = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._onClick = function () {
                    e.onClick(e.index, e.memId)
                }, e.shipBanner = new s.ShipBanner, e.emptyShipBanner = new PIXI.Sprite(a.REMODEL_MAIN.getTexture(18)), e.clickArea = new r.AreaBox(0, 0, 240, 60), e.clickArea.buttonMode = !0, e.clickArea.on(o.EventType.CLICK, e._onClick), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.shipBanner.dispose(), this.clickArea.off(o.EventType.CLICK, this._onClick), this.onClick = null, this.shipBanner = null, this.emptyShipBanner = null, this.index = null, this.memId = null, this.clickArea = null
            }, e.prototype.update = function (t, e, i) {
                this.removeChildren(), this.shipBanner.update(e, i), this.memId = e.memID, this.index = t, this.addChild(this.shipBanner, this.clickArea)
            }, e.prototype.empty = function () {
                this.removeChildren(), this.addChild(this.emptyShipBanner)
            }, e
        }(PIXI.Container);
    e.ShipSlot = _
}