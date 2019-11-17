const function383 = function (t, e, i) {
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
    var o = i(15),
        r = i(240),
        s = function (t) {
            function e(e) {
                var i = t.call(this, e) || this;
                i._list = [], i._isLoaded = !1;
                for (var n = 0; n < 10; n++) i._list[n] = new a;
                return i
            }
            return n(e, t), Object.defineProperty(e.prototype, "isLoaded", {
                get: function () {
                    return this._isLoaded
                },
                set: function (t) {
                    this._isLoaded = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "count", {
                get: function () {
                    return this._count
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "pageCount", {
                get: function () {
                    return this._page_count
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "dispPage", {
                get: function () {
                    return this._disp_page
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "list", {
                get: function () {
                    return this._list
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.SetAll = function (t, e) {
                this._count = o.ObjUtil.getNumber(t, "api_count"), this._page_count = o.ObjUtil.getNumber(t, "api_page_count"), this._disp_page = o.ObjUtil.getNumber(t, "api_disp_page");
                for (var i = o.ObjUtil.getObjectArray(t, "api_list"), n = 0, r = 0, s = i; r < s.length; r++) {
                    var a = s[r];
                    this._list[n].rank = o.ObjUtil.getNumber(a, "api_mxltvkpyuklh"), this._list[n].nickname = o.ObjUtil.getString(a, "api_mtjmdcwtvhdr"), this._list[n].comment = o.ObjUtil.getString(a, "api_itbrdpdbkynm"), this._list[n].flagtype = o.ObjUtil.getNumber(a, "api_pbgkfylkbjuy"), this._list[n].classrank = o.ObjUtil.getNumber(a, "api_pcumlrymlujh"), this._list[n].medals = o.ObjUtil.getNumber(a, "api_itslcqtmrxtf"), this._list[n].score[0] = o.ObjUtil.getNumber(a, "api_wuhnhojjxmke"), this._list[n].score[1] = o.ObjUtil.getNumber(a, "api_xlqcmisdyfiu"), this._list[n].score[2] = o.ObjUtil.getNumber(a, "api_mcouotbbbzpx"), this._list[n].isLoaded = !0, n++
                }
                for (var _ = n; _ < n; _++) this._list[n].isLoaded = !1;
                i = null, this._isLoaded = !0, 0 == e && this._disp_page > 0 && this.SetAll(t, this._disp_page)
            }, e.prototype.remove_list = function () {
                for (var t = 0; t < this._list.length; t++) this._list[t].dispose();
                this._list = null
            }, e
        }(r.RecordModelBase);
    e.RecordRankingModel = s;
    var a = function () {
        function t() {
            this._score = [], this._isLoaded = !1
        }
        return Object.defineProperty(t.prototype, "isLoaded", {
            get: function () {
                return this._isLoaded
            },
            set: function (t) {
                this._isLoaded = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "rank", {
            get: function () {
                return this._rank
            },
            set: function (t) {
                this._rank = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "nickname", {
            get: function () {
                return this._nickname
            },
            set: function (t) {
                this._nickname = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "comment", {
            get: function () {
                return this._comment
            },
            set: function (t) {
                this._comment = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "flagtype", {
            get: function () {
                return this._flagtype
            },
            set: function (t) {
                this._flagtype = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "classrank", {
            get: function () {
                return this._classrank
            },
            set: function (t) {
                this._classrank = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "medals", {
            get: function () {
                return this._medals
            },
            set: function (t) {
                this._medals = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "score", {
            get: function () {
                return this._score
            },
            set: function (t) {
                this._score = t
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.dispose = function () {
            this._score = null
        }, t
    }();
    e.RecordRankingLineModel = a
}