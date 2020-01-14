const function985 = function (t, e, i) {
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
    var o = i(2),
        r = i(23),
        s = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._mstid = e, i
            }
            return n(e, t), e.prototype._start = function () {
                var t = this;
                (new r.SlotLoader).add(this._mstid, "airunit_banner").add(this._mstid, "airunit_name").load(function () {
                    t._endTask()
                })
            }, e.prototype.cancel = function () {
                this._cb = null, this._cb_failed = null
            }, e
        }(o.TaskBase);
    e.TaskAirUnitImageLoader = s
}