const function1351 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(2), r = i(14), s = i(25), a = function (t) {
        function e(e, i, n, o) {
            var r = t.call(this) || this;
            return r._attacker = e, r._plane_mst_id = i, r._slot_mst_id1 = n, r._slot_mst_id2 = o, r
        }

        return n(e, t), e.prototype._start = function () {
            this._loadShipImage()
        }, e.prototype._loadShipImage = function () {
            var t = this, e = new r.ShipLoader;
            e.add(this._attacker.mst_id, this._attacker.isDamaged(), "full"), e.load(function () {
                t._loadSlotTextImage()
            })
        }, e.prototype._loadSlotTextImage = function () {
            var t = this;
            this._plane_mst_id <= 0 && this._slot_mst_id1 <= 0 && this._slot_mst_id2 <= 0 && this._endTask();
            var e = new s.SlotLoader;
            this._plane_mst_id > 0 && e.add(this._plane_mst_id, "item_up"), this._slot_mst_id1 > 0 && (e.add(this._slot_mst_id1, "item_up"), e.add(this._slot_mst_id1, "btxt_flat")), this._slot_mst_id2 > 0 && (e.add(this._slot_mst_id2, "item_up"), e.add(this._slot_mst_id2, "btxt_flat")), e.load(function () {
                t._endTask()
            })
        }, e
    }(o.TaskBase);
    e.PreloadCutinDanchaku = a
}