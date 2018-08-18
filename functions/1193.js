const function1193 = function (t, e, i) {
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
    var o = i(0), r = i(11), s = i(416), a = function (t) {
        function e(e, i, n) {
            var o = t.call(this) || this;
            return o._url = "api_req_kousyou/remodel_slot", o._result = new _, o._list = e, o._post_data.api_id = e.id, o._post_data.api_slot_id = i, o._post_data.api_certain_flag = n, o
        }

        return n(e, t), Object.defineProperty(e.prototype, "result", {
            get: function () {
                return this._result
            }, enumerable: !0, configurable: !0
        }), e.prototype._connect = function () {
            t.prototype._connect.call(this)
        }, e.prototype._completedEnd = function () {
            if (this._result.update(this._raw_data), 1 == this._result.isSuccess()) {
                var e = this._result.target_slotitem_memid;
                o.default.model.slot.get(e).__updateObject__(this._result.getItemObject())
            }
            for (var i = this._result.use_slotitem_memids, n = 0, r = i; n < r.length; n++) {
                var s = r[n];
                o.default.model.slot.delete(s)
            }
            var a = this._list.req_useitem_num;
            if (a > 0 && 1 == this._result.isSuccess()) {
                var _ = this._list.req_useitem_id, u = o.default.model.useItem.get(_), l = u.count;
                u.__setCount__(l - a)
            }
            var c = this._list.req_useitem_num2;
            if (c > 0 && 1 == this._result.isSuccess()) {
                var h = this._list.req_useitem_id2, p = o.default.model.useItem.get(h), l = p.count;
                p.__setCount__(l - c)
            }
            var d = this._result.after_materials;
            this._updateMaterialCount(31, d[0]), this._updateMaterialCount(32, d[1]), this._updateMaterialCount(33, d[2]), this._updateMaterialCount(34, d[3]), this._updateMaterialCount(2, d[4]), this._updateMaterialCount(1, d[5]), this._updateMaterialCount(3, d[6]), this._updateMaterialCount(4, d[7]), t.prototype._completedEnd.call(this)
        }, e.prototype._updateMaterialCount = function (t, e) {
            var i = o.default.model.useItem.get(t);
            null != i && i.__setCount__(e)
        }, e
    }(r.APIBase);
    e.RevampRemodelSlotAPI = a;
    var _ = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype.update = function (t) {
            this._o = t
        }, e
    }(s.RevampRemodelSlotModel)
}