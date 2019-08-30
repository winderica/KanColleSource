const function129 = function (t, e, i) {
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
        r = i(9),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._url = "api_get_member/unsetslot", e
            }
            return n(e, t), e.prototype._completedEnd = function () {
                o.default.model.slot.setUnsetData(this._raw_data), t.prototype._completedEnd.call(this)
            }, e
        }(r.APIBase);
    e.UnsetSlotAPI = s
}