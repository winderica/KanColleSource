const function1207 = function (t, e, i) {
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
    var o = i(11),
        r = function (t) {
            function e(e, i, n, o) {
                var r = t.call(this) || this;
                return r._url = "api_req_kousyou/remodel_slotlist_detail", r._id = e, r._slot_id = i, r._revampSlotlistModel = n, r._boxno = o, r._post_data.api_id = r._id, r._post_data.api_slot_id = r._slot_id, r
            }
            return n(e, t), e.prototype._connect = function () {
                t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                this._revampSlotlistModel.SetDetail(this._raw_data, this._boxno), t.prototype._completedEnd.call(this)
            }, e
        }(o.APIBase);
    e.RevampSlotListDetailAPI = r
}