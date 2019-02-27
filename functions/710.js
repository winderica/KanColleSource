const function710 = function (t, e, i) {
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
        r = i(0),
        s = function (t) {
            function e(e) {
                void 0 === e && (e = !1);
                var i = t.call(this) || this;
                return i.OPEN_KEY_ITEMID = 49, i._url = "api_req_hensei/preset_expand", i
            }
            return n(e, t), e.prototype._completedEnd = function () {
                var e = r.default.model.useItem.get(this.OPEN_KEY_ITEMID);
                e.__setCount__(e.count - 1), t.prototype._completedEnd.call(this)
            }, e
        }(o.APIBase);
    e.PresetExpandAPI = s
}