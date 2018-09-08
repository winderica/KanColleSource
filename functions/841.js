const function841 = function (t, e, i) {
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
    var o = i(0), r = i(10), s = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._url = "api_req_nyukyo/speedchange", i.api_ndock_id = e, i
        }

        return n(e, t), e.prototype._connect = function () {
            this._post_data.api_ndock_id = this.api_ndock_id, t.prototype._connect.call(this)
        }, e.prototype._completedEnd = function () {
            var e = o.default.model.useItem.get(1), i = o.default.model.ndock.get(this.api_ndock_id),
                n = o.default.model.ship.get(i.shipMemID);
            n.__updateNowHp__(n.hpMax), n.__updateNDockTime__(0), n.__updateNDockItem__([0, 0]), n.tired < 40 && n.__updateCond__(40), i.__updateCompleteTime__(0), i.__updateShipId__(-1), i.__updateState__(0), e.__setCount__(e.count - 1), t.prototype._completedEnd.call(this)
        }, e
    }(r.APIBase);
    e.SpeedChangeAPI = s
}