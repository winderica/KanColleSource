const function522 = function (t, e, i) {
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
    var o = i(523),
        r = function () {
            function t() {
                this._dic = {}
            }
            return t.prototype.get = function (t) {
                var e = t.toString();
                return 1 == this._dic.hasOwnProperty(e) ? this._dic[e] : null
            }, t.prototype.getAllExId = function () {
                return this._equippable_types_ex
            }, t
        }();
    e.ShipTypeModelHolder = r;
    var s = function (t) {
        function e() {
            return t.call(this) || this
        }
        return n(e, t), e.prototype.__setData__ = function (t) {
            if (this._dic = {}, null != t) {
                for (var e = 0; e < t.length; e++) {
                    var i = t[e],
                        n = new o.ShipTypeModelEdit(i),
                        r = n.id;
                    if (r > 0) {
                        var s = r.toString();
                        this._dic[s] = n
                    }
                }
                this._setExEtypes()
            }
        }, e.prototype.__setEquipTypeExData__ = function (t) {
            this._equippable_types_ex = t, this._setExEtypes()
        }, e.prototype._setExEtypes = function () {
            var t = this._equippable_types_ex;
            if (null != this._dic && null != t)
                for (var e in this._dic) {
                    var i = this._dic[e];
                    i.__set_equippqble_types_ex__(t)
                }
        }, e
    }(r);
    e.ShipTypeModelHolderEdit = s
}