const function296 = function (t, e, i) {
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
        r = i(46),
        s = function (t) {
            function e(e, i, n, o) {
                var r = t.call(this) || this;
                return r._need_basic_update = !1, r._need_useitem_update = !1, r._mst_id_from = e, r._mst_id_to = i.toString(), r._message1 = n, r._message2 = o, r
            }
            return n(e, t), Object.defineProperty(e.prototype, "mst_id_from", {
                get: function () {
                    return this._mst_id_from
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "name_from", {
                get: function () {
                    var t = o.default.model.slot.getMst(this._mst_id_from);
                    return null == t ? "" : t.name
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "mst_id_to", {
                get: function () {
                    var t = this._mst_id_to.match(/\d+/);
                    return null == t ? 0 : parseInt(t[0])
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "name_to", {
                get: function () {
                    var t = this.mst_id_to;
                    return 1 == this.isUseitemTo() ? o.default.model.useItem.get(t).name : o.default.model.slot.getMst(t).name
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "message1", {
                get: function () {
                    return this._message1
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "message2", {
                get: function () {
                    return this._message2
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "need_basic_update", {
                get: function () {
                    return this._need_basic_update
                },
                set: function (t) {
                    this._need_basic_update = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "need_useitem_update", {
                get: function () {
                    return this._need_useitem_update
                },
                set: function (t) {
                    this._need_useitem_update = t
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.isUseitemTo = function () {
                return -1 != this._mst_id_to.search(/u$/)
            }, e
        }(r.RewardModel);
    e.RewardModelModelChange = s
}