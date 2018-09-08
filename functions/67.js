const function67 = function (t, e, i) {
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
    var o = i(55), r = i(23), s = i(7), a = i(527), _ = function (t) {
        function e(e) {
            return t.call(this, e) || this
        }

        return n(e, t), e.createKey = function (t, e, i) {
            void 0 === i && (i = 1);
            var n = r.MathUtil.zeroPadding(t, 3), o = r.MathUtil.zeroPadding(e, 2);
            return i > 1 ? n + o + "_" + i : n + o
        }, e.getMapId = function (t) {
            if (null == t) return 0;
            t = t.split("_")[0];
            var e = parseInt(t);
            if (isNaN(e)) return 0;
            var i = Math.floor(e / 100), n = e % 100;
            return o.MapUtil.toMapID(i, n)
        }, Object.defineProperty(e.prototype, "vertical", {
            get: function () {
                var t = s.ObjUtil.getObject(this._o, "vertical");
                return null == t ? null : new a.GaugeModel(t, 18, 253)
            }, enumerable: !0, configurable: !0
        }), e
    }(a.GaugeModel);
    e.GaugeSetModel = _
}