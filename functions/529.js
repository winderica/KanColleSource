const function529 = function (t, e, i) {
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
    var o = i(0), r = i(7), s = i(530), a = function () {
        function t() {
            this._USEITEM_FROM_SLOTITEM = {
                50: 42,
                51: 43,
                66: 145,
                67: 146,
                69: 150,
                76: 241
            }, this._MATERIALS_ = [31, 32, 33, 34, 2, 1, 3, 4]
        }

        return t.prototype.getCount = function (t) {
            var e = this.get(t);
            return null == e ? 0 : e.count
        }, t.prototype.get = function (t) {
            var e = t.toString();
            return 1 == this._map.hasOwnProperty(e) ? this._map[e] : null
        }, t.prototype.getMaterialCounts = function () {
            return {
                fuel: this.getCount(31),
                ammo: this.getCount(32),
                steel: this.getCount(33),
                baux: this.getCount(34),
                repairKit: this.getCount(1),
                buildKit: this.getCount(2),
                devKit: this.getCount(3),
                revKit: this.getCount(4)
            }
        }, t.prototype._isMaterial = function (t) {
            return this._MATERIALS_.indexOf(t) >= 0
        }, t
    }();
    e.UseItemModelHolder = a;
    var _ = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), e.prototype.setMstData = function (t) {
            if (this._map = {}, null != t) for (var e = 0; e < t.length; e++) {
                var i = t[e], n = new s.UseItemModel(i), o = n.mstID;
                if (o > 0 && "" != n.name) {
                    var r = o.toString();
                    this._map[r] = n
                }
            }
        }, e.prototype.setMemData = function (t) {
            if (null != t) {
                for (var e in this._map) {
                    var i = this._map[e], n = i.mstID;
                    0 == this._isMaterial(n) && 44 != n && i.__setCount__(0)
                }
                for (var o = 0; o < t.length; o++) {
                    var s = t[o], a = r.ObjUtil.getNumber(s, "api_id");
                    if (a > 0) {
                        var _ = this.get(a);
                        if (null != _) {
                            var l = r.ObjUtil.getNumber(s, "api_count");
                            _.__setCount__(l)
                        }
                    }
                }
            }
        }, e.prototype.setMaterialData = function (t) {
            for (var e = [-1].concat(this._MATERIALS_), i = 0; i < t.length; i++) {
                var n = t[i];
                if (null != n) {
                    var o = r.ObjUtil.getNumber(n, "api_id"), s = r.ObjUtil.getNumber(n, "api_value"),
                        a = this.get(e[o]);
                    null != a && a.__setCount__(s)
                }
            }
        }, e.prototype.updateMaterials = function (t) {
            for (var e in t) {
                var i = this.get(e);
                if (null != i) {
                    var n = t[e];
                    i.__setCount__(n)
                }
            }
        }, e.prototype.updateCount = function () {
            var t = this._USEITEM_FROM_SLOTITEM;
            for (var e in t) {
                var i = t[e], n = o.default.model.slot.getCount(i);
                this.get(e).__setCount__(n)
            }
        }, e
    }(a);
    e.UseItemModelHolderEdit = _
}