const function1459 = function (t, e, i) {
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
        r = function (t) {
            function e(e, i) {
                void 0 === i && (i = !1);
                var n = t.call(this) || this,
                    o = e.battle_model.deck_f,
                    r = e.battle_model.deck_e,
                    s = 0 != o.type,
                    a = null != r && 0 != r.type;
                return n._url = 0 == s && 0 == a ? "api_req_sortie/battleresult" : "api_req_combined_battle/battleresult", n._data = e, n._debug = i, n
            }
            return n(e, t), e.prototype._connect = function () {
                var e = this._data.battle_model.actual_survey_time,
                    i = this._data.battle_model.prediction_time,
                    n = this.__AA1(e, i);
                n >= 0 && (this._post_data.api_btime = n);
                for (var o = this._data.battle_model.deck_f.ships, r = 12 == o.length ? o.slice(0, 6) : o, s = 12 == o.length ? o.slice(6, 12) : [], a = this._data.battle_model.ship_info.getLastData(!0), _ = 0; _ < r.length; _++) {
                    var l = r[_];
                    if (null == l) break;
                    var u = a.get(l.mem_id);
                    null != u && (this._post_data["api_l_value[" + _ + "]"] = u.hp)
                }
                for (var _ = 0; _ < s.length; _++) {
                    var l = s[_];
                    if (null == l) break;
                    var u = a.get(l.mem_id);
                    null != u && (this._post_data["api_l_value2[" + _ + "]"] = u.hp)
                }
                for (var c = this._data.battle_model.deck_e.ships, h = 12 == c.length ? c.slice(0, 6) : c, p = 12 == c.length ? c.slice(6, 12) : [], d = this._data.battle_model.ship_info.getLastData(!1), _ = 0; _ < h.length; _++) {
                    var l = h[_];
                    if (null == l) break;
                    var u = d.get(l.mem_id);
                    null != u && (this._post_data["api_l_value3[" + _ + "]"] = u.hp)
                }
                for (var _ = 0; _ < p.length; _++) {
                    var l = p[_];
                    if (null == l) break;
                    var u = d.get(l.mem_id);
                    null != u && (this._post_data["api_l_value4[" + _ + "]"] = u.hp)
                }
                var _, l, u, _, l, u;
                t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                this._data.setData(this._raw_data), this._data = null, t.prototype._completedEnd.call(this)
            }, e.prototype.__AA1 = function (t, e) {
                var i = t,
                    n = i,
                    o = Math.floor(89999999 * Math.random()) + 1e7,
                    r = Math.floor(o / 331),
                    s = 331 * r;
                if (i / n <= .6) return s;
                var a = 99999999 - s,
                    _ = Math.min(329, a);
                return s + Math.floor(Math.random() * _) + 1
            }, e
        }(o.APIBase);
    e.APIBattleResult = r
}