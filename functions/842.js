const function842 = function (t, e, i) {
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
                return i._url = "api_req_kaisou/marriage", i.api_id = e, i
            }
            return n(e, t), e.prototype._connect = function () {
                this._post_data.api_id = this.api_id, t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                var e = o.default.model.useItem.get(55);
                e.__setCount__(e.count - 1), o.default.model.ship.updateData(this._raw_data), t.prototype._completedEnd.call(this)
            }, e
        }(r.APIBase);
    e.MarriageAPI = s
}