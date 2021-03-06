const function1204 = function (t, e, i) {
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
    var o = i(0), r = i(11), s = i(418), a = i(33), _ = i(126), u = function (t) {
        function e(e, i, n) {
            var o = t.call(this) || this;
            return o._url = "api_req_kousyou/remodel_slot", o._result = new l, o._list = e, o._post_data.api_id = e.id, o._post_data.api_slot_id = i, o._post_data.api_certain_flag = n, o
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
                if (o.default.model.slot.get(e).__updateObject__(this._result.getItemObject()), this._result.isChanged()) {
                    var i = new a.APIConnector;
                    i.add(new _.UnsetSlotAPI), i.start()
                }
            }
            for (var n = this._result.use_slotitem_memids, r = 0, s = n; r < s.length; r++) {
                var u = s[r];
                o.default.model.slot.delete(u)
            }
            var l = this._list.req_useitem_num;
            if (l > 0 && 1 == this._result.isSuccess()) {
                var c = this._list.req_useitem_id, h = o.default.model.useItem.get(c), p = h.count;
                h.__setCount__(p - l)
            }
            var d = this._list.req_useitem_num2;
            if (d > 0 && 1 == this._result.isSuccess()) {
                var f = this._list.req_useitem_id2, y = o.default.model.useItem.get(f), p = y.count;
                y.__setCount__(p - d)
            }
            var v = this._result.after_materials;
            this._updateMaterialCount(31, v[0]), this._updateMaterialCount(32, v[1]), this._updateMaterialCount(33, v[2]), this._updateMaterialCount(34, v[3]), this._updateMaterialCount(2, v[4]), this._updateMaterialCount(1, v[5]), this._updateMaterialCount(3, v[6]), this._updateMaterialCount(4, v[7]), t.prototype._completedEnd.call(this)
        }, e.prototype._updateMaterialCount = function (t, e) {
            var i = o.default.model.useItem.get(t);
            null != i && i.__setCount__(e)
        }, e
    }(r.APIBase);
    e.RevampRemodelSlotAPI = u;
    var l = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype.update = function (t) {
            this._o = t
        }, e
    }(s.RevampRemodelSlotModel)
}