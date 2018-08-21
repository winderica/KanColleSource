const function896 = function (t, e, i) {
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
    var o = i(0), r = i(10), s = i(7), a = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._url = "api_req_kousyou/destroyship", n.api_ship_ids = e, n.type = i, n
        }

        return n(e, t), e.prototype._connect = function () {
            this._post_data.api_ship_id = this.api_ship_ids.join(","), this._post_data.api_slot_dest_flag = this.type, o.default.model.basic.setDestroyShipSlotType(this.type), t.prototype._connect.call(this)
        }, e.prototype._completedEnd = function () {
            var e = this._raw_data.api_material;
            o.default.model.useItem.get(31).__setCount__(e[0]), o.default.model.useItem.get(32).__setCount__(e[1]), o.default.model.useItem.get(33).__setCount__(e[2]), o.default.model.useItem.get(34).__setCount__(e[3]);
            var i = 0 === this.type;
            i && o.default.model.slot.setUnsetData(s.ObjUtil.getObject(this._raw_data, "api_unset_list"));
            for (var n = 0, r = this.api_ship_ids.length; n < r; n++) {
                var a = this.api_ship_ids[n], _ = o.default.model.ship.get(a), u = o.default.model.deck.isInDeck(a);
                if (u) {
                    var l = u[0], c = u[1];
                    o.default.model.deck.get(l).__remove__(c)
                }
                o.default.model.ship.delete(_.memID, i)
            }
            t.prototype._completedEnd.call(this)
        }, e
    }(r.APIBase);
    e.DestroyShipAPI = a
}