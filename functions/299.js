const function299 = function (t, e, i) {
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
    var o = i(612), r = i(613), s = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype.setItemFrom = function (t, e) {
            return void 0 === e && (e = !1), this._mst_id_from = t, this._type_from = 1 == e ? 6 : 2, this
        }, e.prototype.setItemTobe = function (t, e) {
            return void 0 === e && (e = !1), this._mst_id_tobe = t, this._type_tobe = 1 == e ? 6 : 2, this
        }, e.prototype.setMessage = function (t, e) {
            return this._message1 = t, this._message2 = e, this
        }, e.prototype.addMeltIntoSlotitem = function (t, e, i) {
            void 0 === i && (i = -1);
            for (var n = new o.ModelChangeMeltIntoModel(e, 0), r = 0, s = t; r < s.length; r++) {
                var a = s[r];
                i > 0 ? n.addItem(a, 2, i) : n.addItem(a, 2)
            }
            return this._melt_into_items.push(n), this
        }, e.prototype.addMeltIntoUseitem = function (t, e, i) {
            void 0 === i && (i = -1);
            for (var n = new o.ModelChangeMeltIntoModel(e, 1), r = 0, s = t; r < s.length; r++) {
                var a = s[r];
                i > 0 ? n.addItem(a, 6, i) : n.addItem(a, 6)
            }
            return this._melt_into_items.push(n), this
        }, e.prototype.addMeltIntoTojoin = function (t, e) {
            void 0 === t && (t = 70), void 0 === e && (e = 2);
            var i = new o.ModelChangeMeltIntoModel(e, 2);
            return i.addItem(t, 6), this._melt_into_items.push(i), this
        }, e.prototype.addMeltInto = function (t, e, i) {
            for (var n = new o.ModelChangeMeltIntoModel(e, i), r = 0, s = t; r < s.length; r++) {
                var a = s[r];
                a.size > 0 ? n.addItem(a.id, a.type, a.size) : n.addItem(a.id, a.type)
            }
            return this._melt_into_items.push(n), this
        }, e
    }(r.ModelChangeModel);
    e.ModelChangeModelEdit = s
}