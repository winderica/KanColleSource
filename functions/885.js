const function885 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(10), r = i(0), s = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._url = "api_req_kousyou/open_new_dock", i.kDockId = e, i
        }

        return n(e, t), e.prototype._completedEnd = function () {
            var e = r.default.model.kdock.get(this.kDockId), i = r.default.model.useItem.get(49);
            e.__open__(), i.__setCount__(i.count - 1), t.prototype._completedEnd.call(this)
        }, e
    }(o.APIBase);
    e.OpenNewDockAPI = s
}