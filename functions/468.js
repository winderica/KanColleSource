const function468 = function (t, e, i) {
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
        r = i(2),
        s = i(13),
        a = i(24),
        _ = function (t) {
            function e(e, i, n, o, r, s) {
                void 0 === o && (o = 0), void 0 === r && (r = 0), void 0 === s && (s = 0);
                var a = t.call(this) || this;
                return a._ship_mst_id = e, a._ship_damaged = i, a._use_slotchara_image = n, a._slot_mst_id1 = o, a._slot_mst_id2 = r, a._slot_mst_id3 = s, a
            }
            return n(e, t), Object.defineProperty(e.prototype, "slot_mst_id1", {
                get: function () {
                    return this._slot_mst_id1
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "slot_mst_id2", {
                get: function () {
                    return this._slot_mst_id2
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "slot_mst_id3", {
                get: function () {
                    return this._slot_mst_id3
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.getShipTexture = function () {
                return o.default.resources.getShip(this._ship_mst_id, this._ship_damaged, "full")
            }, e.prototype.getShipOffset = function () {
                return o.default.model.ship_graph.get(this._ship_mst_id).getBattleOffset(this._ship_damaged)
            }, e.prototype.getSlot1Texture = function () {
                return this._getSlotTexture(this._slot_mst_id1)
            }, e.prototype.getSlot2Texture = function () {
                return this._getSlotTexture(this._slot_mst_id2)
            }, e.prototype.getSlot3Texture = function () {
                return this._getSlotTexture(this._slot_mst_id3)
            }, e.prototype._getSlotTexture = function (t) {
                return 1 == this._isCharaOnImage(t) ? o.default.resources.getSlotitem(t, "item_on") : o.default.resources.getSlotitem(t, "item_up")
            }, e.prototype._start = function () {
                this._loadShipImage()
            }, e.prototype._loadShipImage = function () {
                var t = this,
                    e = new s.ShipLoader;
                e.add(this._ship_mst_id, this._ship_damaged, "full"), e.load(function () {
                    t._loadSlotsTextImage()
                })
            }, e.prototype._loadSlotsTextImage = function () {
                var t = this,
                    e = new a.SlotLoader;
                this._slot_mst_id1 > 0 && this._addLoadTask(e, this._slot_mst_id1), this._slot_mst_id2 > 0 && this._addLoadTask(e, this._slot_mst_id2), this._slot_mst_id3 > 0 && this._addLoadTask(e, this._slot_mst_id3), e.load(function () {
                    t._endTask()
                })
            }, e.prototype._addLoadTask = function (t, e) {
                1 == this._isCharaOnImage(e) ? t.add(e, "item_on") : t.add(e, "item_up"), t.add(e, "btxt_flat")
            }, e.prototype._isCharaOnImage = function (t) {
                if (t <= 0) return !1;
                var e = o.default.model.slot.getMst(t);
                if (null == e) return !1;
                if (0 == this._use_slotchara_image) return !1;
                var i = e.equipTypeSp;
                return 12 == i || (13 == i || (93 == i || 129 == t))
            }, e
        }(r.TaskBase);
    e.CutinResourcesPreloadTask = _
}