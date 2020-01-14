const function379 = function (t, e, i) {
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
    var o = i(240),
        r = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i.IMAGE_WIDTH = 39, i.PADDING = 16;
                var n = new PIXI.Container,
                    r = new Array,
                    s = 0;
                i._shadowType = e, i._shadowType == o.ShadowType.DETAIL ? (i.IMAGE_WIDTH = 41, i.PADDING = 2) : (i.IMAGE_WIDTH = 39, i.PADDING = 16);
                for (var a = 0; a < 6; a++) {
                    var _ = new o.ShipShadow;
                    _.position.x = s, r.push(_), n.addChild(_), s += i.IMAGE_WIDTH + i.PADDING
                }
                return i.addChild(n), i._shipShadows = r, i._container = n, i
            }
            return n(e, t), e.prototype.update = function (t) {
                for (var e = 0; e < this._shipShadows.length; e++) {
                    var i = this._shipShadows[e];
                    if (i.visible = !1, e < t.length) {
                        var n = t[e];
                        i.update(n, this._shadowType), i.visible = !0
                    }
                }
                this._shadowType == o.ShadowType.DETAIL ? this._container.x = -t.length * this.IMAGE_WIDTH : this._container.x = -t.length * (this.IMAGE_WIDTH + this.PADDING)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._container.removeChildren(), this._shipShadows.forEach(function (t) {
                    return t.dispose()
                }), this._container = null, this._shipShadows = null
            }, e
        }(PIXI.Container);
    e.FleetShadow = r
}