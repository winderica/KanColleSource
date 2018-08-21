const function77 = function (t, e, i) {
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
    var o = i(22), r = i(7), s = i(524), a = function (t) {
        function e(e) {
            return t.call(this, e) || this
        }

        return n(e, t), e.createKey = function (t, e, i) {
            void 0 === i && (i = 1);
            var n = o.MathUtil.zeroPadding(t, 3), r = o.MathUtil.zeroPadding(e, 2);
            return i > 1 ? n + r + "_" + i : n + r
        }, Object.defineProperty(e.prototype, "vertical", {
            get: function () {
                var t = r.ObjUtil.getObject(this._o, "vertical");
                return null == t ? null : new s.GaugeModel(t, 18, 253)
            }, enumerable: !0, configurable: !0
        }), e
    }(s.GaugeModel);
    e.GaugeSetModel = a
}