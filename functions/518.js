const function518 = function (t, e, i) {
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
    var o = i(14), r = function () {
        function t(t) {
            this._o = t
        }

        return Object.defineProperty(t.prototype, "id", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_id")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "name", {
            get: function () {
                return o.ObjUtil.getString(this._o, "api_name")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "build_phase_num", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_kcnt", 3)
            }, enumerable: !0, configurable: !0
        }), t.prototype.getEquippableTypes = function () {
            if (null == this._equippqble_types) {
                this._equippqble_types = new Array;
                var t = o.ObjUtil.getObject(this._o, "api_equip_type");
                if (null != t) for (var e in t) 1 == t[e] && this._equippqble_types.push(parseInt(e))
            }
            return this._equippqble_types.concat()
        }, t.prototype.getEquippableTypesEx = function () {
            if (null == this._equippqble_types_ex) return new Array;
            var t = this.getEquippableTypes(), e = this._equippqble_types_ex.concat();
            return t.filter(function (t, i, n) {
                return -1 != e.indexOf(t)
            })
        }, t
    }();
    e.ShipTypeModel = r;
    var s = function (t) {
        function e(e) {
            return t.call(this, e) || this
        }

        return n(e, t), e.prototype.__set_equippqble_types_ex__ = function (t) {
            this._equippqble_types_ex = t
        }, e
    }(r);
    e.ShipTypeModelEdit = s
}