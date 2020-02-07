const function884 = function (t, e, i) {
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
        r = i(9),
        s = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o.MINIMUM_TIME = 6e4, o._url = "api_req_nyukyo/start", o.api_ship_id = i, o.api_ndock_id = e, o.api_highspeed = n, o
            }
            return n(e, t), e.prototype._connect = function () {
                this._post_data.api_highspeed = this.api_highspeed ? 1 : 0, this._post_data.api_ndock_id = this.api_ndock_id, this._post_data.api_ship_id = this.api_ship_id, t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                var e = o.default.model.ship.get(this.api_ship_id),
                    i = o.default.model.useItem.get(31),
                    n = o.default.model.useItem.get(33);
                if (i.__setCount__(i.count - e.getRepairFuel()), n.__setCount__(n.count - e.getRepairSteel()), this.api_highspeed) {
                    var r = o.default.model.useItem.get(1);
                    r.__setCount__(r.count - 1), this.immediateRepair(e)
                } else e.getRepairTime() <= this.MINIMUM_TIME && this.immediateRepair(e);
                t.prototype._completedEnd.call(this)
            }, e.prototype.immediateRepair = function (t) {
                t.__updateNowHp__(t.hpMax), t.__updateNDockTime__(0), t.__updateNDockItem__([0, 0]), t.tired < 40 && t.__updateCond__(40)
            }, e
        }(r.APIBase);
    e.StartAPI = s
}