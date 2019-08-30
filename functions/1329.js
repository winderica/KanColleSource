const function1329 = function (t, e, i) {
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
    var o = i(2),
        r = i(14),
        s = function (t) {
            function e(e, i) {
                void 0 === e && (e = !1), void 0 === i && (i = !1);
                var n = t.call(this) || this;
                return n._night = e, n._combined = i, n
            }
            return n(e, t), e.prototype._start = function () {
                this._loadCommon()
            }, e.prototype._loadCommon = function () {
                var t = this,
                    e = new r.UIImageLoader("common");
                e.add("common_explosion.json"), e.load(function () {
                    t._loadImage()
                })
            }, e.prototype._loadImage = function () {
                var t = this,
                    e = new r.UIImageLoader("battle");
                e.add("battle_telop/txt_start.png", "battle_telop_txt_start"), e.add("battle_telop/mes_bg_f.png", "battle_telop_mes_bg_f"), e.add("battle_telop/mes_bg_e.png", "battle_telop_mes_bg_e"), e.add("battle_telop/mes2_f_hbg.png", "battle_telop_mes2_f_hbg"), e.add("battle_telop/mes2_e_hbg.png", "battle_telop_mes2_e_hbg"), e.add("battle_telop/mes2_f_ybg.png", "battle_telop_mes2_f_ybg"), e.add("battle_telop/mes2_e_ybg.png", "battle_telop_mes2_e_ybg"), e.add("battle_telop/mes_f_hbg.png", "battle_telop_mes_f_hbg"), e.add("battle_telop/mes_f_ybg.png", "battle_telop_mes_f_ybg"), e.add("battle_telop/mes_e_hbg.png", "battle_telop_mes_e_hbg"), e.add("battle_telop/mes_e_ybg.png", "battle_telop_mes_e_ybg"), e.add("battle_telop/mes_f_hbg3.png", "battle_telop_kkcutin_f"), e.add("battle_telop/mes_e_hbg3.png", "battle_telop_kkcutin_e"), e.load(function () {
                    t._loadSpriteSheet()
                })
            }, e.prototype._loadSpriteSheet = function () {
                var t = this,
                    e = new r.UIImageLoader("battle");
                e.add("battle_main.json"), e.add("battle_cutin_anti_air.json"), 1 == this._night && (e.add("battle_night.json"), e.add("battle_telop/mes_ybg3_f.png", "battle_telop_mes_ybg3_f"), e.add("battle_telop/mes_ybg3_e.png", "battle_telop_mes_ybg3_e"), e.add("battle_telop/mes_ybg4_f.png", "battle_telop_mes_ybg4_f"), e.add("battle_telop/mes_ybg4_e.png", "battle_telop_mes_ybg4_e"), e.add("battle_telop/mes_ybg6_f.png", "battle_telop_mes_ybg6_f"), e.add("battle_telop/mes_ybg6_e.png", "battle_telop_mes_ybg6_e")), e.add("battle_jin.json"), 1 == this._combined && e.add("battle_main2.json"), e.add("battle_airunit.json"), e.load(function () {
                    t._endTask()
                })
            }, e
        }(o.TaskBase);
    e.TaskLoadResourcesBattle = s
}