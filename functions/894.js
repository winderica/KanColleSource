const function894 = function (t, e, i) {
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
    var o = i(10),
        r = i(0),
        s = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._url = "api_req_kousyou/createship_speedchange", n.api_kdock_id = e, n.isLarge = i, n
            }
            return n(e, t), e.prototype._connect = function () {
                this._post_data.api_kdock_id = this.api_kdock_id, this._post_data.api_highspeed = 1, t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                var e = r.default.model.useItem.get(2),
                    i = r.default.model.kdock.get(this.api_kdock_id),
                    n = this.isLarge ? 10 : 1;
                e.__setCount__(e.count - n), i.__complete__(), t.prototype._completedEnd.call(this)
            }, e
        }(o.APIBase);
    e.CreateShipSpeedChangeAPI = s
}