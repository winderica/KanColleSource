const function1110 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(15),
        o = function () {
            function t(t) {
                this._o = t
            }
            return Object.defineProperty(t.prototype, "no", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_index_no")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "mst_ids", {
                get: function () {
                    return n.ObjUtil.getNumArray(this._o, "api_table_id")
                },
                enumerable: !0,
                configurable: !0
            }), t
        }();
    e.AlbumModelBase = o
}