const function850 = function (t, e, i) {
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
        r = i(70),
        s = i(9),
        a = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = new PIXI.Sprite,
                    n = new PIXI.Sprite(s.COMMON_MISC.getTexture(108)),
                    o = new r.RingSmall;
                return o.position.set(207, 28), o.initialize(), o.activate(), n.anchor.x = 1, n.x = n.width, e.addChild(i, n, o), e.shipBanner = i, e.ring = o, e
            }
            return n(e, t), e.prototype.update = function (t, e, i) {
                this.shipBanner.texture = o.default.resources.getShip(t, e, "banner"), this.ring.visible = !1, i && (this.ring.visible = !0)
            }, e.prototype.dispose = function () {
                this.removeChild(this.shipBanner), this.shipBanner.texture = PIXI.Texture.EMPTY, this.ring.deactivate(), this.ring.dispose(), this.ring = null, this.shipBanner = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.RepairShipBanner = a
}