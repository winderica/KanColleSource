const function991 = function (t, e, i) {
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
    var o = i(52),
        r = i(369),
        s = function (t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return n(e, t), Object.defineProperty(e.prototype, "air_unit", {
                get: function () {
                    return null != this._airunit
                },
                set: function (t) {
                    if (t != this.air_unit) {
                        if (1 == t) {
                            this._btn.position.set(0, -8);
                            var e = o.SALLY_SORTIE.getTexture(7);
                            this._airunit = new PIXI.Sprite(e), this._airunit.position.set(6, 33), this.addChild(this._airunit)
                        } else this.removeChild(this._airunit), this._airunit = null, this._btn.position.set(0, 0);
                        this._updateTexture()
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._updateTexture = function () {
                1 == this.air_unit ? 0 == this._enabled ? this._btn.texture = o.SALLY_SORTIE.getTexture(18) : 1 == this._overed ? this._btn.texture = o.SALLY_SORTIE.getTexture(19) : this._btn.texture = o.SALLY_SORTIE.getTexture(17) : 0 == this._enabled ? this._btn.texture = o.SALLY_SORTIE.getTexture(21) : 1 == this._overed ? this._btn.texture = o.SALLY_SORTIE.getTexture(22) : this._btn.texture = o.SALLY_SORTIE.getTexture(20)
            }, e
        }(r.BtnGoBase);
    e.BtnGo = s
}