const function483 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(484), o = i(260), r = i(7), s = function () {
        function t() {
            this._exist3rdUnit = !1, this._combined = new n.DeckCombinedModelEdit
        }

        return Object.defineProperty(t.prototype, "num", {
            get: function () {
                var t = 0;
                for (var e in this._map) t++;
                return t
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "combined", {
            get: function () {
                return this._combined
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "exist3rdUnit", {
            get: function () {
                return this._exist3rdUnit
            }, enumerable: !0, configurable: !0
        }), t.prototype.setData = function (t) {
            if (this._map = {}, null != t) for (var e = 0; e < t.length; e++) {
                var i = t[e], n = r.ObjUtil.getNumber(i, "api_id");
                if (n > 0) {
                    var s = n.toString(), a = new o.DeckModelEdit(i);
                    this._map[s] = a, 2 === e && (this._exist3rdUnit = i.api_ship.length >= 7)
                }
            }
        }, t.prototype.updateData = function (t) {
            if (null != this._map && null != t) {
                var e = new o.DeckModelEdit(t);
                if (!(e.mstID <= 0)) {
                    var i = e.mstID.toString();
                    1 == this._map.hasOwnProperty(i) && delete this._map[i], this._map[i] = e
                }
            }
        }, t.prototype.get = function (t) {
            var e = t.toString();
            return 1 == this._map.hasOwnProperty(e) ? this._map[e] : null
        }, t.prototype.getAll = function () {
            var t, e = [];
            return null != (t = this.get(1)) && e.push(t), null != (t = this.get(2)) && e.push(t), null != (t = this.get(3)) && e.push(t), null != (t = this.get(4)) && e.push(t), e
        }, t.prototype.getIDs = function () {
            return this.getAll().map(function (t, e, i) {
                return t.mstID
            })
        }, t.prototype.isInDeck = function (t) {
            for (var e = this.getAll(), i = 0, n = e; i < n.length; i++) {
                var o = n[i], r = o.isInDeck(t);
                if (-1 != r) return [o.mstID, r]
            }
            return null
        }, t.prototype.isCombined = function () {
            return this._combined.isCombined()
        }, t
    }();
    e.DeckModelHolder = s
}