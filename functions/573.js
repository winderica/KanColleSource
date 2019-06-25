const function573 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(574),
        o = i(7),
        r = function () {
            function t() {
                this._hitArea = null, this._timeTable = null
            }
            return Object.defineProperty(t.prototype, "layers", {
                get: function () {
                    return this._layers
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "hitArea", {
                get: function () {
                    return this._hitArea
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "timeTable", {
                get: function () {
                    return this._timeTable
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.setJsonData = function (t) {
                this._layers = [];
                for (var e = o.ObjUtil.getObject(t, "setting"), i = o.ObjUtil.getNumArray(e, "loop"), r = o.ObjUtil.getObjectArray(t, "data"), s = 0; s < r.length; s++) {
                    var a = r[s],
                        _ = null != i && s < i.length ? i[s] : 0,
                        u = new n.FurnitureLayerModel(a, _);
                    this._layers.push(u)
                }
                var l = o.ObjUtil.getObject(t, "hitarea");
                null != l && (this._hitArea = {
                    filename: o.ObjUtil.getString(l, "filename"),
                    offset: o.ObjUtil.getNumArray(l, "offset"),
                    state: o.ObjUtil.getString(l, "state")
                }), this._timeTable = o.ObjUtil.getObject(t, "timetable")
            }, t.prototype.hasLoop = function () {
                for (var t = 0, e = this._layers; t < e.length; t++) {
                    if (0 != e[t].loopMax) return !0
                }
                return !1
            }, t
        }();
    e.FurnitureStateModel = r
}