/*
 * the function called by `476.js`
 * ships
 */
const function511 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0),
        o = i(29),
        r = i(144),
        s = i(512),
        a = function () {
            function t() {
            }

            Object.defineProperty(t.prototype, "num", {
                get: function () {
                    var t = 0;
                    for (var e in this._map) t++;
                    return t
                }, enumerable: !0, configurable: !0
            });
            t.prototype.setData = function (t) {
                if (this._map = {}, null != t) for (var e = 0; e < t.length; e++) {
                    var i = t[e], n = new r.ShipModelEdit(i), o = n.memID;
                    if (o > 0) {
                        var s = o.toString();
                        this._map[s] = n
                    }
                }
            };
            t.prototype.get = function (t) {
                var e = t.toString();
                return 1 == this._map.hasOwnProperty(e) ? this._map[e] : null
            };
            t.prototype.delete = function (t, e) {
                void 0 === e && (e = !1);
                var i = this.get(t), o = i.getSlotitems(), r = i.getSlotitemEx(), s = i.memID.toString();
                if (1 == this._map.hasOwnProperty(s) && delete this._map[s], !1 === e) {
                    for (var a = 0; a < o.length; a++) {
                        var _ = o[a];
                        null != _ && n.default.model.slot.delete(_.memID)
                    }
                    null != r && n.default.model.slot.delete(r.memID)
                }
            };
            t.prototype.getAll = function () {
                var t = new Array;
                for (var e in this._map) {
                    var i = this._map[e];
                    t.push(i)
                }
                return t
            };
            t.prototype.getAllOther = function () {
                var t = o.ShipUtil.getMemIDsInAllDeck(), e = new Array;
                for (var i in this._map) {
                    var n = this._map[i];
                    -1 == t.indexOf(n.memID) && e.push(n)
                }
                return e
            };
            t.prototype.setMstData = function (t) {
                if (this._mapMst = {}, null != t) for (var e = 0; e < t.length; e++) {
                    var i = t[e], n = new s.ShipMstModel(i), o = n.mstID;
                    if (o > 0) {
                        var r = o.toString();
                        this._mapMst[r] = n
                    }
                }
            };
            t.prototype.getMst = function (t) {
                var e = t.toString();
                return 1 == this._mapMst.hasOwnProperty(e) ? this._mapMst[e] : null
            };
            t.prototype.updateData = function (t) {
                if (null == this._map) return null;
                var e = new r.ShipModelEdit(t), i = e.memID.toString();
                return 1 == this._map.hasOwnProperty(i) && delete this._map[i], this._map[i] = e, e
            };
            return t
        }();
    e.ShipModelHolder = a
}