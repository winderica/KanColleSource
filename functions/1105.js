const function1105 = function (t, e, i) {
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
        r = i(2),
        s = i(14),
        a = i(239),
        _ = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype._start = function () {
                this._load()
            }, e.prototype._load = function () {
                var t = this,
                    e = new s.UIImageLoader("item");
                e.add("item_common.json"), e.add("item_ilist.json"), e.add("item_payitemicon.json"), e.add("item_ishop.json"), e.add("item_fshop.json"), e.add("item_mini.json"), e.load(function () {
                    t._load2()
                })
            }, e.prototype._load2 = function () {
                var t = this,
                    e = new s.UIImageLoader("item");
                e.add("item_ilist_medal.json"), e.add("item_ilist_medal_kou.json"), e.add("item_ilist_presentbox.json"), e.add("item_ilist_hishimochi.json"), e.load(function () {
                    t._loadSkinResource()
                })
            }, e.prototype._loadSkinResource = function () {
                var t = this,
                    e = new s.UIImageLoader("item"),
                    i = o.default.model.basic.getUISkinID();
                101 == i || 102 == i ? e.add("item_menu_1.json") : 201 == i ? e.add("item_menu_2.json") : 301 != i && 311 != i || e.add("item_menu_3.json"), e.load(function () {
                    t._loadAkashiResoueces()
                })
            }, e.prototype._loadAkashiResoueces = function () {
                var t = this,
                    e = new s.UIImageLoader("item");
                e.add("akashi/" + a.POSTER_TYPE + "1.png", a.POSTER_KEY_1), e.add("akashi/" + a.POSTER_TYPE + "2.png", a.POSTER_KEY_2), e.load(function () {
                    t._endTask()
                })
            }, e
        }(r.TaskBase);
    e.TaskLoadResources = _
}