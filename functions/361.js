const function361 = function (t, e, i) {
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
    var o = i(0), r = i(32), s = i(970), a = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), e.prototype.initialize = function () {
            this._banner = new r.ShipBanner, this._alert = new s.CompLackAlerts, this._alert.initialize(), this._alert.position.set(188, 53), this.addChild(this._banner), this.addChild(this._alert)
        }, e.prototype.update = function (t, e) {
            if (null == t) this.visible = !1; else {
                var i = !1, n = o.default.model.deck.isInDeck(t.memID);
                if (null != n) {
                    null != o.default.model.deck.get(n[0]).expedition && (i = !0)
                }
                this._banner.update(t, i), this._banner.updatePlate(t.label), e && this._banner.updateLockSlot(t), this._alert.update(t), this.visible = !0
            }
        }, e.prototype.dispose = function () {
            this._banner.dispose()
        }, e
    }(PIXI.Container);
    e.CompBannerAndLack = a
}