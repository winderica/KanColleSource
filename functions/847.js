const function847 = function (t, e, i) {
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
        s = i(51),
        a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._url = "api_req_kaisou/open_exslot", i.api_id = e, i
            }
            return n(e, t), e.prototype._connect = function () {
                this._post_data.api_id = this.api_id, t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                var e = o.default.model.useItem.get(s.RemodelConst.REINFORCEMENT_WORK_ITEMID),
                    i = e.count - 1;
                e.__setCount__(i), o.default.model.ship.get(this.api_id).__updateExtraSlot__(-1), t.prototype._completedEnd.call(this)
            }, e
        }(r.APIBase);
    e.OpenExSlotAPI = a
}