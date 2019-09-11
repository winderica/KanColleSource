const function1020 = function (t, e, i) {
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
                return i._url = "api_get_member/sortie_conditions", i._model = e, i
            }
            return n(e, t), e.prototype._completedEnd = function () {
                var e = this._raw_data;
                this._model.update(e), this._model = null, t.prototype._completedEnd.call(this)
            }, e
        }(o.APIBase);
    e.APIEventSortieCondition = r
}