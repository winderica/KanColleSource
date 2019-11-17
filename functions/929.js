const function929 = function (t, e, i) {
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
            function e(e) {
                var i = t.call(this) || this;
                return i._url = "api_req_kousyou/destroyitem2", i.api_slotitem_ids = e, i
            }
            return n(e, t), e.prototype._connect = function () {
                this._post_data.api_slotitem_ids = this.api_slotitem_ids.toString(), t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                for (var e = 0; e < this.api_slotitem_ids.length; e++) {
                    var i = this.api_slotitem_ids[e];
                    r.default.model.slot.delete(i)
                }
                var n = this._raw_data.api_get_material,
                    o = r.default.model.useItem.get(31),
                    s = r.default.model.useItem.get(32),
                    a = r.default.model.useItem.get(33),
                    _ = r.default.model.useItem.get(34);
                o.__setCount__(o.count + n[0]), s.__setCount__(s.count + n[1]), a.__setCount__(a.count + n[2]), _.__setCount__(_.count + n[3]), t.prototype._completedEnd.call(this)
            }, e
        }(o.APIBase);
    e.DestroyItem2API = s
}