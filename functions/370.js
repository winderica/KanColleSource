const function370 = function (t, e, i) {
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
    var o = i(371),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                e.IMAGE_WIDTH = 56, e.PADDING = 4;
                for (var i = new PIXI.Container, n = new Array, r = 0, s = 0; s < 6; s++) {
                    var a = new o.ShipShadow;
                    a.position.x = r, n.push(a), i.addChild(a), r += e.IMAGE_WIDTH + e.PADDING
                }
                return e.addChild(i), e._shipShadows = n, e._container = i, e
            }
            return n(e, t), e.prototype.update = function (t) {
                for (var e = t.filter(function (t) {
                        return 0 != t
                    }), i = 0; i < this._shipShadows.length; i++) {
                    var n = this._shipShadows[i];
                    if (n.visible = !1, i < e.length) {
                        var o = e[i];
                        n.update(o), n.visible = !0
                    }
                }
                this._container.x = -e.length * this.IMAGE_WIDTH
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._container.removeChildren(), this._shipShadows.forEach(function (t) {
                    return t.dispose()
                }), this._container = null, this._shipShadows = null
            }, e
        }(PIXI.Container);
    e.FleetShadow = r
}