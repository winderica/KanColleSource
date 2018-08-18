const function886 = function (t, e, i) {
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
    var o = i(0), r = i(10), s = function (t) {
        function e(e, i, n, o) {
            var r = t.call(this) || this;
            return r._url = "api_req_kousyou/createitem", r.api_item1 = e, r.api_item2 = i, r.api_item3 = n, r.api_item4 = o, r
        }

        return n(e, t), Object.defineProperty(e.prototype, "api_create_flag", {
            get: function () {
                return this._api_create_flag
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "api_slotitem_memid", {
            get: function () {
                return this._api_slotitem_memid
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "api_slotitem_mstid", {
            get: function () {
                return this._api_slotitem_mstid
            }, enumerable: !0, configurable: !0
        }), e.prototype._connect = function () {
            this._post_data.api_item1 = this.api_item1, this._post_data.api_item2 = this.api_item2, this._post_data.api_item3 = this.api_item3, this._post_data.api_item4 = this.api_item4, t.prototype._connect.call(this)
        }, e.prototype._completedEnd = function () {
            var e = this._raw_data.api_create_flag,
                i = (this._raw_data.api_shizai_flag, this._raw_data.api_material);
            switch (o.default.model.useItem.get(31).__setCount__(i[0]), o.default.model.useItem.get(32).__setCount__(i[1]), o.default.model.useItem.get(33).__setCount__(i[2]), o.default.model.useItem.get(34).__setCount__(i[3]), o.default.model.useItem.get(2).__setCount__(i[4]), o.default.model.useItem.get(1).__setCount__(i[5]), o.default.model.useItem.get(3).__setCount__(i[6]), o.default.model.useItem.get(4).__setCount__(i[7]), e) {
                case 0:
                    this._api_slotitem_memid = 0, this._api_slotitem_mstid = 0;
                    break;
                case 1:
                    var n = this._raw_data.api_slot_item, r = this._raw_data.api_type3,
                        s = this._raw_data.api_unsetslot;
                    this._api_slotitem_memid = n.api_id, this._api_slotitem_mstid = n.api_slotitem_id, o.default.model.slot.addMemData([n]), o.default.model.slot.updateUnsetData(r, s)
            }
            this._api_create_flag = e, t.prototype._completedEnd.call(this)
        }, e
    }(r.APIBase);
    e.CreateItemAPI = s
}