const function810 = function (t, e, i) {
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
        r = i(10),
        s = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._ship_mem_id = e, i._url = "api_req_kaisou/remodeling", i
            }
            return n(e, t), e.prototype._connect = function () {
                this._post_data.api_id = this._ship_mem_id, t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                var e, i = o.default.model.ship.get(this._ship_mem_id).mstID,
                    n = o.default.model.ship_upgrade.getRequires(i);
                e = o.default.model.useItem.get(32), e.__setCount__(e.count - n.ammo), e = o.default.model.useItem.get(33), e.__setCount__(e.count - n.steel), e = o.default.model.useItem.get(3), e.__setCount__(e.count - n.devkit), e = o.default.model.useItem.get(2), e.__setCount__(e.count - n.buildkit), e = o.default.model.useItem.get(58), e.__setCount__(e.count - n.blueprint), e = o.default.model.useItem.get(65), e.__setCount__(e.count - n.catapult), e = o.default.model.useItem.get(78), e.__setCount__(e.count - n.battlereport), e = o.default.model.useItem.get(75), e.__setCount__(e.count - n.newhokohesosizai), e = o.default.model.useItem.get(77), e.__setCount__(e.count - n.newkokuhesosizai), t.prototype._completedEnd.call(this)
            }, e
        }(r.APIBase);
    e.RemodelingAPI = s
}