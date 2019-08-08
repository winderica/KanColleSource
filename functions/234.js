const function234 = function (t, e, i) {
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
    var o, r = i(58),
        s = i(375),
        a = i(235);
    ! function (t) {
        t[t.LIST = 0] = "LIST", t[t.DETAIL = 1] = "DETAIL"
    }(o = e.ShadowType || (e.ShadowType = {}));
    var _ = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype.update = function (t, e) {
            var i = a.shipTypeIdToCategory(t),
                n = this._shipTypeToResourceID(i, e);
            this.texture = e ? s.SALLY_EXPEDITION_DETAIL.getTexture(n) : r.SALLY_EXPEDITION.getTexture(n)
        }, e.prototype._shipTypeToResourceID = function (t, e) {
            if (e == o.DETAIL) switch (t) {
                case 0:
                    return 4;
                case 1:
                    return 6;
                case 2:
                    return 7;
                case 3:
                    return 8;
                case 4:
                    return 9;
                case 5:
                    return 10;
                case 6:
                    return 11;
                case 7:
                    return 12;
                case 8:
                    return 5;
                case 9:
                    return 13
            } else switch (t) {
                case 0:
                    return 106;
                case 1:
                    return 108;
                case 2:
                    return 109;
                case 3:
                    return 110;
                case 4:
                    return 111;
                case 5:
                    return 112;
                case 6:
                    return 113;
                case 7:
                    return 114;
                case 8:
                    return 107;
                case 9:
                    return 115
            }
        }, e.prototype.dispose = function () {
            this.texture = PIXI.Texture.EMPTY
        }, e
    }(PIXI.Sprite);
    e.ShipShadow = _
}