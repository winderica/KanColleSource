const function1036 = function (t, e, i) {
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
    var o = i(149),
        r = i(39),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._drums = [];
                for (var i = 0; i < 4; i++) {
                    var n = new PIXI.Sprite;
                    n.x = [0, -19, 0, -19][i], n.y = [0, 0, -27, -27][i], n.visible = !1, e._drums.push(n), e.addChild(n)
                }
                return e
            }
            return n(e, t), e.prototype.initialize = function () {
                this.update(0);
                for (var t = 0, e = this._drums; t < e.length; t++) {
                    e[t].texture = r.SALLY_EXPEDITION.getTexture(34)
                }
            }, e.prototype.update = function (t) {
                t instanceof o.ShipModel ? this._updateFromShipModel(t) : this._update(t)
            }, e.prototype._updateFromShipModel = function (t) {
                for (var e = 0, i = t.getSlotitems(), n = 0, o = i; n < o.length; n++) {
                    var r = o[n];
                    null != r && (75 == r.mstID && e++)
                }
                var s = t.getSlotitemEx();
                null != s && 75 == s.mstID && e++, this._update(e)
            }, e.prototype._update = function (t) {
                for (var e = 0; e < this._drums.length; e++) this._drums[e].visible = e < t
            }, e
        }(PIXI.Container);
    e.CompDrumCount = s
}