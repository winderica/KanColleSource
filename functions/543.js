const function543 = function (t, e, i) {
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
        function e() {
            var e = t.call(this) || this;
            return e._url = "api_get_member/require_info", e
        }

        return n(e, t), e.prototype._completedEnd = function () {
            var e = o.default.model.basic;
            e.setUserData(s.ObjUtil.getObject(this._raw_data, "api_basic")), e.setExtraSupplyFlag(s.ObjUtil.getNumArray(this._raw_data, "api_extra_supply"));
            var i = s.ObjUtil.getObject(this._raw_data, "api_oss_setting"),
                n = s.ObjUtil.getNumArray(i, "api_oss_items", []),
                r = 0 == s.ObjUtil.getNumber(i, "api_language_type");
            e.updateOrganizeListSetting(n.map(function (t) {
                return 1 == t
            }), r), e.setUISkinID(s.ObjUtil.getNumber(this._raw_data, "api_skin_id")), o.default.model.slot.setMemData(s.ObjUtil.getObjectArray(this._raw_data, "api_slot_item")), o.default.model.slot.setUnsetData(s.ObjUtil.getObject(this._raw_data, "api_unsetslot")), o.default.model.useItem.setMemData(s.ObjUtil.getObjectArray(this._raw_data, "api_useitem")), o.default.model.furniture.setMemData(s.ObjUtil.getObjectArray(this._raw_data, "api_furniture")), o.default.model.kdock.__setData__(s.ObjUtil.getObjectArray(this._raw_data, "api_kdock")), t.prototype._completedEnd.call(this)
        }, e
    }(r.APIBase);
    e.RequireInfoAPI = a
}