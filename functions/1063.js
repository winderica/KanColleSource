const function1063 = function (t, e, i) {
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
        r = i(17),
        s = i(11),
        a = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._url = "api_req_ranking/mxltvkpyuklh", n._recordRankingModels = e, n._pageNo = i, n
            }
            return n(e, t), e.prototype._connect = function () {
                0 != this._pageNo && (this._post_data.api_pageno = this._pageNo), this._post_data.api_ranking = this._createKey(o.default.model.basic.member_id), t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                this._recordRankingModels[this._pageNo].SetAll(this._raw_data, this._pageNo), t.prototype._completedEnd.call(this)
            }, e.prototype._getSeed = function (t) {
                return r.PORT_API_SEED[t % 10]
            }, e.prototype._createKey = function (t) {
                var e = this._getSeed(t),
                    i = Math.floor(Date.now() / 1e3),
                    n = 1e3 * (Math.floor(9 * Math.random()) + 1) + t % 1e3,
                    o = Math.floor(8999 * Math.random()) + 1e3,
                    r = Math.floor(32767 * Math.random()) + 32768,
                    s = Math.floor(10 * Math.random()),
                    a = Math.floor(10 * Math.random()),
                    _ = Math.floor(10 * Math.random()),
                    u = parseInt(t.toString().substr(0, 4)),
                    l = (4132653 + r) * (u + 1e3) - i + (1875979 + 9 * r),
                    c = l - t,
                    h = c * e,
                    p = n.toString() + h.toString() + o.toString();
                p = s.toString() + p;
                var d = p.substr(0, 8),
                    f = p.substr(8);
                return p = d + a + f, d = p.substr(0, 18), f = p.substr(18), (p = d + _ + f) + r.toString()
            }, e
        }(s.APIBase);
    e.RecordRankingAPI = a
}