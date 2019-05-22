const function618 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = function () {
            function t() {
                this._melt_into_items = []
            }
            return Object.defineProperty(t.prototype, "mst_id_from", {
                get: function () {
                    return this._mst_id_from
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "mst_id_tobe", {
                get: function () {
                    return this._mst_id_tobe
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "rarity_tobe", {
                get: function () {
                    if (1 == this.isUseitemTo()) return 0;
                    var t = n.default.model.slot.getMst(this._mst_id_tobe);
                    return null == t ? 0 : t.rarity
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "message1", {
                get: function () {
                    return this._message1
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "message2", {
                get: function () {
                    return this._message2.replace(/<br>/, "\n")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "melt_into_items", {
                get: function () {
                    return this._melt_into_items
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.isUseitemFrom = function () {
                return 6 == this._type_from
            }, t.prototype.isUseitemTo = function () {
                return 6 == this._type_tobe
            }, t.prototype.isNeedUpdateUserBasic = function () {
                if (0 == this.isNeedUpdateUseitem()) return !1;
                if (1 == this.isUseitemFrom() && 44 == this._mst_id_from) return !0;
                if (1 == this.isUseitemTo() && 44 == this._mst_id_tobe) return !0;
                for (var t = 0, e = this.melt_into_items; t < e.length; t++)
                    for (var i = e[t], n = 0, o = i.items; n < o.length; n++) {
                        var r = o[n];
                        if (6 == r.type && 44 == r.id) return !0
                    }
                return !1
            }, t.prototype.isNeedUpdateUseitem = function () {
                if (1 == this.isUseitemFrom()) return !0;
                if (1 == this.isUseitemTo()) return !0;
                for (var t = 0, e = this.melt_into_items; t < e.length; t++)
                    for (var i = e[t], n = 0, o = i.items; n < o.length; n++) {
                        var r = o[n];
                        if (6 == r.type) return !0
                    }
                return !1
            }, t
        }();
    e.ModelChangeModel = o
}