const function837 = function (t, e, i) {
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
    var o = i(0), r = i(10), s = i(165), a = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._url = "api_req_nyukyo/open_new_dock", i.memDockId = e, i
        }

        return n(e, t), e.prototype._completedEnd = function () {
            var e = o.default.model.useItem.get(s.RepairConst.OPEN_KEY_ITEMID),
                i = o.default.model.ndock.get(this.memDockId);
            i.__updateCompleteTime__(0), i.__updateShipId__(0), i.__updateState__(0), e.__setCount__(e.count - 1), t.prototype._completedEnd.call(this)
        }, e
    }(r.APIBase);
    e.OpenNewDockAPI = a
}