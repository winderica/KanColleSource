const function123 = function (t, e, i) {
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
    var o = i(0), r = i(46), s = function (t) {
        function e(e, i, n) {
            void 0 === n && (n = null);
            var o = t.call(this) || this;
            return o._mst_id = e, o._count = i, o._message = n, o
        }

        return n(e, t), Object.defineProperty(e.prototype, "mst_id", {
            get: function () {
                return this._mst_id
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "count", {
            get: function () {
                return this._count
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "name", {
            get: function () {
                var t = o.default.model.useItem.get(this._mst_id);
                return null == t ? "" : t.name
            }, enumerable: !0, configurable: !0
        }), e
    }(r.RewardModel);
    e.RewardModelUseitem = s
}