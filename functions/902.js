const function902 = function (t, e, i) {
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
    var o = i(9),
        r = i(0),
        s = function (t) {
            function e(e, i, n, o, r, s, a, _) {
                var l = t.call(this) || this;
                return l._url = "api_req_kousyou/createship", l.api_kdock_id = e, l.api_large_flag = i, l.api_item1_fuel = n, l.api_item2_ammo = o, l.api_item3_steel = r, l.api_item4_baux = s, l.api_item5_devkit = a, l.api_highspeed = _, l
            }
            return n(e, t), e.prototype._connect = function () {
                this._post_data.api_kdock_id = this.api_kdock_id, this._post_data.api_large_flag = this.api_large_flag, this._post_data.api_item1 = this.api_item1_fuel, this._post_data.api_item2 = this.api_item2_ammo, this._post_data.api_item3 = this.api_item3_steel, this._post_data.api_item4 = this.api_item4_baux, this._post_data.api_item5 = this.api_item5_devkit, this._post_data.api_highspeed = this.api_highspeed, t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                var e = r.default.model.useItem.get(31),
                    i = r.default.model.useItem.get(32),
                    n = r.default.model.useItem.get(33),
                    o = r.default.model.useItem.get(34),
                    s = r.default.model.useItem.get(3),
                    a = r.default.model.useItem.get(2);
                e.__setCount__(e.count - this.api_item1_fuel), i.__setCount__(i.count - this.api_item2_ammo), n.__setCount__(n.count - this.api_item3_steel), o.__setCount__(o.count - this.api_item4_baux), s.__setCount__(s.count - this.api_item5_devkit);
                var _ = 0;
                1 == this.api_highspeed && (_ = 1 == this.api_large_flag ? 10 : 1), a.__setCount__(a.count - _), t.prototype._completedEnd.call(this)
            }, e
        }(o.APIBase);
    e.CreateShipAPI = s
}