const function665 = function (t, e, i) {
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
            function e(e) {
                var i = t.call(this) || this;
                return i._shipId = e, i._url = "api_req_init/firstship", i
            }
            return n(e, t), e.prototype._connect = function () {
                this._post_data.api_ship_id = this._shipId, t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                t.prototype._completedEnd.call(this)
            }, e
        }(o.APIBase);
    e.APIFirstShip = r
}