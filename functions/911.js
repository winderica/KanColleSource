const function911 = function (t, e, i) {
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
    var o = i(0),
        r = i(9),
        s = i(15),
        a = function (t) {
            function e(e, i, n, o, r) {
                var s = t.call(this) || this;
                return s._url = "api_req_kousyou/createitem", s.api_item1 = e, s.api_item2 = i, s.api_item3 = n, s.api_item4 = o, s.multpleFlag = r, s._api_slotitem_memid = [], s._api_slotitem_mstid = [], s
            }
            return n(e, t), Object.defineProperty(e.prototype, "api_create_flag", {
                get: function () {
                    return this._api_create_flag
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "api_slotitem_memid", {
                get: function () {
                    return this._api_slotitem_memid
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "api_slotitem_mstid", {
                get: function () {
                    return this._api_slotitem_mstid
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._connect = function () {
                this._post_data.api_item1 = this.api_item1, this._post_data.api_item2 = this.api_item2, this._post_data.api_item3 = this.api_item3, this._post_data.api_item4 = this.api_item4, this._post_data.api_multiple_flag = Number(this.multpleFlag), t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                var e = this._raw_data.api_create_flag,
                    i = this._raw_data.api_material;
                switch (o.default.model.useItem.get(31).__setCount__(i[0]), o.default.model.useItem.get(32).__setCount__(i[1]), o.default.model.useItem.get(33).__setCount__(i[2]), o.default.model.useItem.get(34).__setCount__(i[3]), o.default.model.useItem.get(2).__setCount__(i[4]), o.default.model.useItem.get(1).__setCount__(i[5]), o.default.model.useItem.get(3).__setCount__(i[6]), o.default.model.useItem.get(4).__setCount__(i[7]), e) {
                    case 0:
                        this._api_slotitem_memid = [-1, -1, -1], this._api_slotitem_mstid = [-1, -1, -1];
                        break;
                    case 1:
                        var n = s.ObjUtil.getObjectArray(this._raw_data, "api_get_items");
                        if (null != n) {
                            for (var r = 0, a = n; r < a.length; r++) {
                                var _ = a[r];
                                this._api_slotitem_memid.push(s.ObjUtil.getNumber(_, "api_id")), this._api_slotitem_mstid.push(s.ObjUtil.getNumber(_, "api_slotitem_id"))
                            }
                            o.default.model.slot.addMemData(n)
                        }
                        var l = s.ObjUtil.getObjectArray(this._raw_data, "api_unset_items");
                        if (null != l)
                            for (var u = 0, c = l; u < c.length; u++) {
                                var h = c[u],
                                    p = s.ObjUtil.getNumber(h, "api_type3"),
                                    d = s.ObjUtil.getNumArray(h, "api_slot_list");
                                o.default.model.slot.updateUnsetData(p, d)
                            }
                }
                this._api_create_flag = e, t.prototype._completedEnd.call(this)
            }, e
        }(r.APIBase);
    e.CreateItemAPI = a
}