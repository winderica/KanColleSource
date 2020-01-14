const function426 = function (t, e, i) {
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
    var o = i(14),
        r = i(1249),
        s = function (t) {
            function e(e) {
                var i = t.call(this, e) || this;
                i._list = new Array(3);
                for (var n = 0; n < 3; n++) i._list[n] = new a;
                return i
            }
            return n(e, t), Object.defineProperty(e.prototype, "list", {
                get: function () {
                    return this._list
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.SetAll = function (t) {
                for (var e = 0; e < 3; e++) {
                    var i = t[e];
                    this._list[e].id = o.ObjUtil.getNumber(i, "api_id"), this._list[e].slot_id = o.ObjUtil.getNumber(i, "api_slot_id"), this._list[e].req_fuel = o.ObjUtil.getNumber(i, "api_req_fuel"), this._list[e].req_bull = o.ObjUtil.getNumber(i, "api_req_bull"), this._list[e].req_steel = o.ObjUtil.getNumber(i, "api_req_steel"), this._list[e].req_bauxite = o.ObjUtil.getNumber(i, "api_req_bauxite"), this._list[e].req_buildkit = o.ObjUtil.getNumber(i, "api_req_buildkit"), this._list[e].req_remodelkit = o.ObjUtil.getNumber(i, "api_req_remodelkit"), this._list[e].req_slot_id = o.ObjUtil.getNumber(i, "api_req_slot_id"), this._list[e].req_slot_num = o.ObjUtil.getNumber(i, "api_req_slot_num")
                }
            }, e.prototype.SetDetail = function (t, e) {
                this._list[e].req_buildkit = o.ObjUtil.getNumber(t, "api_req_buildkit"), this._list[e].req_remodelkit = o.ObjUtil.getNumber(t, "api_req_remodelkit"), this._list[e].certain_buildkit = o.ObjUtil.getNumber(t, "api_certain_buildkit"), this._list[e].certain_remodelkit = o.ObjUtil.getNumber(t, "api_certain_remodelkit"), this._list[e].req_slot_id = o.ObjUtil.getNumber(t, "api_req_slot_id"), this._list[e].req_slot_num = o.ObjUtil.getNumber(t, "api_req_slot_num"), this._list[e].req_useitem_id = o.ObjUtil.getNumber(t, "api_req_useitem_id"), this._list[e].req_useitem_num = o.ObjUtil.getNumber(t, "api_req_useitem_num"), this._list[e].req_useitem_id2 = o.ObjUtil.getNumber(t, "api_req_useitem_id2"), this._list[e].req_useitem_num2 = o.ObjUtil.getNumber(t, "api_req_useitem_num2"), this._list[e].change_flag = o.ObjUtil.getNumber(t, "api_change_flag")
            }, e
        }(r.RevampModelBase);
    e.RevampSlotlistModel = s;
    var a = function () {
        function t() {
            this._id = -1, this._slot_id = -1, this._req_fuel = -1, this._req_bull = -1, this._req_steel = -1, this._req_bauxite = -1, this._req_buildkit = -1, this._req_remodelkit = -1, this._req_slot_id = -1, this._req_slot_num = -1, this._certain_buildkit = -1, this._certain_remodelkit = -1, this._req_useitem_id = -1, this._req_useitem_num = -1, this._req_useitem_id2 = -1, this._req_useitem_num2 = -1, this._change_flag = -1
        }
        return Object.defineProperty(t.prototype, "id", {
            get: function () {
                return this._id
            },
            set: function (t) {
                this._id = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "slot_id", {
            get: function () {
                return this._slot_id
            },
            set: function (t) {
                this._slot_id = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "req_fuel", {
            get: function () {
                return this._req_fuel
            },
            set: function (t) {
                this._req_fuel = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "req_bull", {
            get: function () {
                return this._req_bull
            },
            set: function (t) {
                this._req_bull = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "req_steel", {
            get: function () {
                return this._req_steel
            },
            set: function (t) {
                this._req_steel = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "req_bauxite", {
            get: function () {
                return this._req_bauxite
            },
            set: function (t) {
                this._req_bauxite = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "req_buildkit", {
            get: function () {
                return this._req_buildkit
            },
            set: function (t) {
                this._req_buildkit = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "req_remodelkit", {
            get: function () {
                return this._req_remodelkit
            },
            set: function (t) {
                this._req_remodelkit = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "req_slot_id", {
            get: function () {
                return this._req_slot_id
            },
            set: function (t) {
                this._req_slot_id = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "req_slot_num", {
            get: function () {
                return this._req_slot_num
            },
            set: function (t) {
                this._req_slot_num = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "certain_buildkit", {
            get: function () {
                return this._certain_buildkit
            },
            set: function (t) {
                this._certain_buildkit = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "certain_remodelkit", {
            get: function () {
                return this._certain_remodelkit
            },
            set: function (t) {
                this._certain_remodelkit = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "req_useitem_id", {
            get: function () {
                return this._req_useitem_id
            },
            set: function (t) {
                this._req_useitem_id = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "req_useitem_num", {
            get: function () {
                return this._req_useitem_num
            },
            set: function (t) {
                this._req_useitem_num = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "req_useitem_id2", {
            get: function () {
                return this._req_useitem_id2
            },
            set: function (t) {
                this._req_useitem_id2 = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "req_useitem_num2", {
            get: function () {
                return this._req_useitem_num2
            },
            set: function (t) {
                this._req_useitem_num2 = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "change_flag", {
            get: function () {
                return this._change_flag
            },
            set: function (t) {
                this._change_flag = t
            },
            enumerable: !0,
            configurable: !0
        }), t
    }();
    e.RevampSlotlistLineModel = a
}