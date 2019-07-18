const function371 = function (t, e, i) {
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
    var o = i(1037),
        r = i(58),
        s = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype.update = function (t) {
                var e = o.shipTypeIdToCategory(t),
                    i = this._shipTypeToResourceID(e);
                this.texture = r.SALLY_EXPEDITION.getTexture(i)
            }, e.prototype._shipTypeToResourceID = function (t) {
                switch (t) {
                    case o.ShipCategory.BB_BC:
                        return 104;
                    case o.ShipCategory.CV_CVL:
                        return 106;
                    case o.ShipCategory.CA:
                        return 107;
                    case o.ShipCategory.CL:
                        return 108;
                    case o.ShipCategory.DD:
                        return 109;
                    case o.ShipCategory.DE:
                        return 110;
                    case o.ShipCategory.SS:
                        return 111;
                    case o.ShipCategory.AV_AO_AS:
                        return 112;
                    case o.ShipCategory.BBV:
                        return 105;
                    case o.ShipCategory.CLT:
                        return 113
                }
            }, e.prototype.dispose = function () {
                this.texture = PIXI.Texture.EMPTY
            }, e
        }(PIXI.Sprite);
    e.ShipShadow = s
}