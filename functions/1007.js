const function1007 = function (t, e, i) {
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
    var o = i(0), r = i(17), s = i(10), a = i(7), _ = function (t) {
        function e(e, i, n, o) {
            void 0 === o && (o = !1);
            var r = t.call(this) || this;
            return r._url = "api_req_member/get_practice_enemyinfo", r._rival_id = e, r._flag_type = i, r._medal_num = n, r._res_model = new l, r._debug = o, r
        }

        return n(e, t), Object.defineProperty(e.prototype, "res_model", {
            get: function () {
                return this._res_model
            }, enumerable: !0, configurable: !0
        }), e.prototype._connect = function () {
            this._post_data.api_member_id = this._rival_id, t.prototype._connect.call(this)
        }, e.prototype._completedEnd = function () {
            this._res_model.setData(this._rival_id, this._raw_data, this._flag_type, this._medal_num), t.prototype._completedEnd.call(this)
        }, e
    }(s.APIBase);
    e.RivalDetailAPI = _;
    var l = function () {
        function t() {
        }

        return Object.defineProperty(t.prototype, "id", {
            get: function () {
                return this._id
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "flag_type", {
            get: function () {
                return this._flag_type
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "medal_num", {
            get: function () {
                return this._medal_num
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "name", {
            get: function () {
                return a.ObjUtil.getString(this._o, "api_nickname")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "level", {
            get: function () {
                return a.ObjUtil.getNumber(this._o, "api_level")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "rank", {
            get: function () {
                return a.ObjUtil.getNumber(this._o, "api_rank")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "rank_name", {
            get: function () {
                return r.RANK_NAME[this.rank]
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "exp_now", {
            get: function () {
                var t = a.ObjUtil.getStrArray(this._o, "api_experience");
                return null != t && t.length > 0 ? t[0] : ""
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "exp_next", {
            get: function () {
                var t = a.ObjUtil.getStrArray(this._o, "api_experience");
                return null != t && t.length > 1 ? t[1] : ""
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "comment", {
            get: function () {
                return a.ObjUtil.getString(this._o, "api_cmt")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "friend_num", {
            get: function () {
                return a.ObjUtil.getNumber(this._o, "api_friend")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "ship_nums", {
            get: function () {
                var t = a.ObjUtil.getNumArray(this._o, "api_ship");
                return null != t && t.length > 1 ? [t[0], t[1]] : [0, 0]
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "slot_nums", {
            get: function () {
                var t = a.ObjUtil.getNumArray(this._o, "api_slotitem");
                return null != t && t.length > 1 ? [t[0], t[1] + 3] : [0, 0]
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "furniture_num", {
            get: function () {
                return a.ObjUtil.getNumber(this._o, "api_furniture")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "deck_name", {
            get: function () {
                return a.ObjUtil.getString(this._o, "api_deckname")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "ships", {
            get: function () {
                return this._ships
            }, enumerable: !0, configurable: !0
        }), t.prototype.setData = function (t, e, i, n) {
            this._id = t, this._o = e, this._flag_type = i, this._medal_num = n, this._ships = new Array;
            var o = a.ObjUtil.getObject(e, "api_deck");
            if (null != o) for (var r = a.ObjUtil.getObjectArray(o, "api_ships"), s = 0, _ = r; s < _.length; s++) {
                var l = _[s], c = new u(l);
                1 == c.isValid() ? this._ships.push(c) : this._ships.push(null)
            }
            for (; this._ships.length < 6;) this._ships.push(null)
        }, t
    }();
    e.RivalDetailAPIResultModel = l;
    var u = function () {
        function t(t) {
            this._o = t
        }

        return Object.defineProperty(t.prototype, "id", {
            get: function () {
                return a.ObjUtil.getNumber(this._o, "api_ship_id")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "name", {
            get: function () {
                var t = o.default.model.ship.getMst(this.id);
                return null == t ? "" : t.name
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "level", {
            get: function () {
                return a.ObjUtil.getNumber(this._o, "api_level")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "star", {
            get: function () {
                return a.ObjUtil.getNumber(this._o, "api_star")
            }, enumerable: !0, configurable: !0
        }), t.prototype.isValid = function () {
            return this._mem_id > 0
        }, Object.defineProperty(t.prototype, "_mem_id", {
            get: function () {
                return a.ObjUtil.getNumber(this._o, "api_id")
            }, enumerable: !0, configurable: !0
        }), t
    }();
    e.RivalShipModel = u
}