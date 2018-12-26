const function1358 = function (t, e, i) {
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
    var o = i(2),
        r = i(15),
        s = i(25),
        a = function (t) {
            function e(e, i, n, o, r) {
                var s = t.call(this) || this;
                return s._attacker = e, s._slot_mst_id1 = i, s._slot_mst_id2 = n, s._slot_mst_id3 = o, s._night = r, s
            }
            return n(e, t), e.prototype._start = function () {
                this._loadShipImage()
            }, e.prototype._loadShipImage = function () {
                var t = this,
                    e = new r.ShipLoader;
                e.add(this._attacker.mst_id, this._attacker.isDamaged(), "full"), e.load(function () {
                    t._loadSlotTextImage()
                })
            }, e.prototype._loadSlotTextImage = function () {
                var t = this,
                    e = new s.SlotLoader;
                this._slot_mst_id1 > 0 && (e.add(this._slot_mst_id1, "item_up"), 1 == this._night && e.add(this._slot_mst_id1, "btxt_flat")), this._slot_mst_id2 > 0 && (e.add(this._slot_mst_id2, "item_up"), 1 == this._night && e.add(this._slot_mst_id2, "btxt_flat")), this._slot_mst_id3 > 0 && (e.add(this._slot_mst_id3, "item_up"), 1 == this._night && e.add(this._slot_mst_id3, "btxt_flat")), e.load(function () {
                    t._endTask()
                })
            }, e
        }(o.TaskBase);
    e.PreloadCutinKubo = a
}