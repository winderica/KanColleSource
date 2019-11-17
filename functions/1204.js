const function1204 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(15),
        o = i(415),
        r = function () {
            function t() {
                this._models = []
            }
            return Object.defineProperty(t.prototype, "selected_type", {
                get: function () {
                    return this._selected_type
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "selected_page_no", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_disp_page", 1)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "page_max", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_page_count", 0)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "models", {
                get: function () {
                    return this._models
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.update = function (t, e) {
                this._selected_type = t, this._o = e, this._models = [];
                var i = n.ObjUtil.getObjectArray(this._o, "api_list"),
                    r = n.ObjUtil.getObjectArray(this._o, "api_c_list");
                if (null != i)
                    for (var s = 0, a = i; s < a.length; s++) {
                        var _ = a[s];
                        "number" == typeof _ && -1 == _ || this._models.push(new o.DutyModel_(_, r))
                    }
            }, t.prototype.getExecCount = function () {
                return n.ObjUtil.getNumber(this._o, "api_exec_count")
            }, t.prototype.hasComplete = function () {
                if (1 == (1 == n.ObjUtil.getNumber(this._o, "api_completed_kind"))) return !0;
                var t = n.ObjUtil.getObjectArray(this._o, "api_c_list");
                if (null != t)
                    for (var e = 0, i = t; e < i.length; e++) {
                        var r = i[e],
                            s = new o.DutyModel_(r, t);
                        if (3 == s.status) return !0
                    }
                return !1
            }, t
        }();
    e.DutyDataHolder = r
}