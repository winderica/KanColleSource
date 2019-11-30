const function943 = function (t, e, i) {
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
    var o = i(68),
        r = i(7),
        s = i(944),
        a = i(945),
        _ = function () {
            function t() {
                this._start_cell_no = 0, this._obtained_items = new Array
            }
            return Object.defineProperty(t.prototype, "map", {
                get: function () {
                    return this._map
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "cells", {
                get: function () {
                    return this._cells
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "area_id", {
                get: function () {
                    return this._area_id
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "map_no", {
                get: function () {
                    return this._map_no
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "map_id", {
                get: function () {
                    return 10 * this.area_id + this._map_no
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "now_cell_no", {
                get: function () {
                    return this._data.length <= 1 ? this._start_cell_no : this._data[this._data.length - 2].no
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "obtained_items", {
                get: function () {
                    return this._obtained_items
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getCellInfo = function (t) {
                for (var e = 0, i = this._cells; e < i.length; e++) {
                    var n = i[e];
                    if (n.no == t) return n
                }
                return null
            }, t.prototype.getCellNoAll = function () {
                for (var t = [], e = 0, i = this._cells; e < i.length; e++) {
                    var n = i[e];
                    t.push(n.no)
                }
                return t
            }, t.prototype.getNextCell = function () {
                return this._data[this._data.length - 1]
            }, t.prototype.getGaugeKey = function () {
                var t = this.map.getGaugeNum();
                return o.GaugeSetModel.createKey(this._area_id, this._map_no, t)
            }, t
        }();
    e.SortieModel = _;
    var l = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype.__init__ = function (t, e) {
            this._map = t;
            var i = e.api_cell_data;
            delete e.api_cell_data, this._cells = new Array;
            for (var n = 0, o = i; n < o.length; n++) {
                var _ = o[n];
                this._cells.push(new s.CellModel(_))
            }
            this._data = [], this._area_id = r.ObjUtil.getNumber(e, "api_maparea_id"), this._map_no = r.ObjUtil.getNumber(e, "api_mapinfo_no"), this._start_cell_no = r.ObjUtil.getNumber(e, "api_from_no"), this._data.push(new a.NextModel(e))
        }, e.prototype.__add__ = function (t) {
            this._data.push(new a.NextModel(t))
        }, e
    }(_);
    e.SortieModelEdit = l
}