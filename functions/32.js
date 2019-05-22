const function32 = function (t, e, i) {
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
        r = i(153),
        s = i(283),
        a = i(589),
        _ = i(197),
        l = i(154),
        u = i(591),
        c = i(592),
        h = i(70),
        p = i(37),
        d = i(9),
        f = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._image = new PIXI.Sprite, e.addChild(e._image), e._state = new r.BannerIcon, e.addChild(e._state), e._burned = new l.BannerSoot, e.addChild(e._burned), e._smoke = new _.BannerSmoke, e.addChild(e._smoke), e._tired = new u.BannerTired, e.addChild(e._tired), e._plate = new a.BannerPlate, e._plate.position.set(47, -4), e.addChild(e._plate), e._kira = new s.BannerKirakira, e.addChild(e._kira), e._ring = new h.RingSmall, e.addChild(e._ring), e._lockSlot = new c.BannerLockSlot, e._lockSlot.visible = !1, e.addChild(e._lockSlot), e.hitArea = new PIXI.Rectangle(0, 0, 240, 60), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this._smoke.dispose(), this._tired.dispose(), this._kira.dispose(), this._ring.dispose(), this._lockSlot.dispose(), this._image = null, this._state = null, this._burned = null, this._smoke = null, this._tired = null, this._plate = null, this._kira = null, this._ring = null, this._lockSlot = null
            }, e.prototype.update = function (t, e) {
                var i = t.mstID,
                    n = t.isDamaged();
                this.updateImage(i, n);
                var o = t.isRepair(),
                    r = t.getDamageType();
                this.updateIcon(e, o, r), this.updateTired(t.tired), this.updateRing(t.isMarriage())
            }, e.prototype.updateImage = function (t, e) {
                p.TaskLoadShipResource.abortBy(this._image), 1 == o.default.resources.isLoadedShip(t, e, "banner") ? this._image.texture = o.default.resources.getShip(t, e, "banner") : (this._image.texture = d.COMMON_MISC.getTexture(2), new p.TaskLoadShipResource("banner", this._image, t, e).start())
            }, e.prototype.updateIcon = function (t, e, i, n) {
                void 0 === n && (n = !0), this._smoke.stop(), 1 == t ? (this._state.setExpeditionIcon(), this._burned.clear()) : 1 == e ? (this._state.setRepairIcon(), this._burned.clear()) : (this._state.setDamagedIcon(i), this._burned.update(i), this._smoke.play(i))
            }, e.prototype.updateTired = function (t) {
                this._tired.update(t), t >= 50 ? this._kira.play() : this._kira.stop()
            }, e.prototype.updatePlate = function (t) {
                this._plate.update(t)
            }, e.prototype.updateRing = function (t) {
                this._ring.deactivate(), 1 == t ? (0 == this._ring.x && (this._ring.position.set(209, 30), this._ring.initialize()), this._ring.activate(), this._ring.visible = !0) : this._ring.visible = !1
            }, e.prototype.updateLockSlot = function (t) {
                this._lockSlot.visible = !!t.hasLockedSlotitem(), t.tired < 30 ? this._lockSlot.position.set(232, 0) : this._lockSlot.position.set(232, 24)
            }, e
        }(PIXI.Container);
    e.ShipBanner = f
}