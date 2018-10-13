/*
 * called by `482.js`
 * incentive (api_req_member/get_incentive)
 */
const function501 = function (t, e, i) {
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
    var o = i(7),
        r = i(184),
        s = i(142),
        a = i(185),
        _ = i(124),
        u = function () {
            function t() {
                this._arr = []
            }

            t.prototype.hasIncentive = function () {
                return this._arr.length > 0
            }, t.prototype.getRewards = function () {
                return this._arr.concat()
            }, t.prototype.clearData = function () {
                this._arr = []
            };
            return t
        }();
    e.IncentiveModelHolder = u;
    var l = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        n(e, t);
        // set incentive data
        e.prototype.setData = function (t) {
            if (this._arr = [], null != t) {
                // api_item: もらえるアイテム　api_count=0だと存在しない
                var e = o.ObjUtil.getObjectArray(t, "api_item");
                if (null != e) for (var i = 0, n = e; i < n.length; i++) {
                    /*
                     * api_mode		：1=事前登録?, 2=招待?, 3=月次褒賞/プレゼント
                     * api_type		：1=艦船?, 2=装備, 3=アイテム, 4=資源?, 5=家具
                     * api_mst_id	：ID
                     * api_getmes	：獲得時メッセージ
                     */
                    var u = n[i],
                        l = (o.ObjUtil.getNumber(u, "api_mode"),
                            o.ObjUtil.getNumber(u, "api_type")),
                        c = o.ObjUtil.getNumber(u, "api_mst_id"),
                        h = o.ObjUtil.getString(u, "api_getmes"),
                        p = void 0;
                    switch (l) {
                        case 1:
                            p = new a.RewardModelShip(c, h);
                            break;
                        case 2:
                            p = new s.RewardModelSlotitem(c, 1, h);
                            break;
                        case 3:
                            p = new _.RewardModelUseitem(c, 1, h);
                            break;
                        case 4:
                            break;
                        case 5:
                            p = new r.RewardModelFurniture(c, "", h);
                            break;
                    }
                    null != p && this._arr.push(p)                }
            }
        };
        return e
    }(u);
    e.IncentiveModelHolderEdit = l
}