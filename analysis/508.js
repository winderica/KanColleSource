/*
 * the function called by `476.js`
 * constants (api_start2.api_mst_const)
 */
const function508 = function (t, e, i) {
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
        r = function () {
            function t() {
            }

            // 「最大保有艦娘数」最大値 現時点380
            Object.defineProperty(t.prototype, "boko_max_ships", {
                get: function () {
                    var t = o.ObjUtil.getObject(this._o, "api_boko_max_ships");
                    return null == t ? 0 : o.ObjUtil.getNumber(t, "api_int_value")
                }, enumerable: !0, configurable: !0
            });
            // 「最大受領可能任務数」最大値 10
            Object.defineProperty(t.prototype, "quest_max", {
                get: function () {
                    var t = o.ObjUtil.getObject(this._o, "api_parallel_quest_max");
                    return null == t ? 0 : o.ObjUtil.getNumber(t, "api_int_value")
                }, enumerable: !0, configurable: !0
            });
            // ???
            Object.defineProperty(t.prototype, "voice_server", {
                get: function () {
                    var t = o.ObjUtil.getObject(this._o, "api_voice_server_addr");
                    return null == t ? "" : o.ObjUtil.getString(t, "api_string_value")
                }, enumerable: !0, configurable: !0
            });
            return t
        }();
    e.ServerConstModel = r;
    var s = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        n(e, t);
        e.prototype.setData = function (t) {
            this._o = t
        };
        return e
    }(r);
    e.ServerConstModelEdit = s
}