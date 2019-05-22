const function1345 = function (t, e, i) {
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
        r = i(13),
        s = i(25),
        a = function (t) {
            function e(e, i, n, o, r) {
                var s = t.call(this) || this;
                return s._ship_mst_id = e, s._damaged = i, s._plane1 = n, s._plane2 = o, s._plane3 = r, s
            }
            return n(e, t), e.prototype._start = function () {
                this._loadShipImage()
            }, e.prototype._loadShipImage = function () {
                var t = this,
                    e = new r.ShipLoader;
                e.add(this._ship_mst_id, this._damaged, "full"), e.load(function () {
                    t._loadPlaneImage()
                })
            }, e.prototype._loadPlaneImage = function () {
                var t = this,
                    e = new s.SlotLoader;
                this._plane1 > 0 && e.add(this._plane1, "item_up"), this._plane2 > 0 && e.add(this._plane2, "item_up"), this._plane3 > 0 && e.add(this._plane3, "item_up"), e.load(function () {
                    t._endTask()
                })
            }, e
        }(o.TaskBase);
    e.PreloadCutinFunnel = a
}