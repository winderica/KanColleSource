const function548 = function (t, e, i) {
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
    var o = i(549), r = i(0), s = i(2), a = i(17), _ = function (t) {
        function e(e) {
            void 0 === e && (e = null);
            var i = t.call(this) || this;
            return i._onProgressPhase1 = function (t, e) {
                var n = .4 * t.progress;
                null != i._progress && i._progress(n)
            }, i._loadPhase2 = function () {
                var t = new a.UIImageLoader("common");
                t.add("common_icon_weapon.json"), t.add("common_itemicons.json"), t.add("common_misc.json"), t.add("common_expedition.json"), t.add("common_shutter.json"), t.add("common_event.json"), t.load(i._loadPhase3, i._onProgressPhase2)
            }, i._onProgressPhase2 = function (t, e) {
                var n = 40 + .4 * t.progress;
                null != i._progress && i._progress(n)
            }, i._loadPhase3 = function () {
                o.load({
                    custom: { families: ["font_j"], urls: [r.default.settings.path_root + "css/main.css"] },
                    active: i._onComplete,
                    inactive: function () {
                        r.default.view.showError("[WebFontLoader] inactive")
                    },
                    fontinactive: function (t, e) {
                        r.default.view.showError("[WebFontLoader] fontinactive")
                    },
                    timeout: 6e4
                })
            }, i._onComplete = function () {
                null != i._progress && i._progress(100), i._endTask()
            }, i._progress = e, i
        }

        return n(e, t), e.prototype._start = function () {
            this._loadPhase1()
        }, e.prototype._loadPhase1 = function () {
            var t = new a.UIImageLoader("common");
            t.add("hpgauge/hp_gauge_mask.png"), t.add("hpgauge/hp_s_bg2.png"), t.add("hpgauge/hp_s_red_light.png"), t.add("error.png", "error"), t.add("focus_mask3.png", "mask"), t.add("mask_banner.png", "mask_banner"), t.add("common_main.json"), t.add("common_sort.json"), t.add("common_animation.json"), t.add("common_shogo.json"), t.load(this._loadPhase2, this._onProgressPhase1)
        }, e
    }(s.TaskBase);
    e.TaskLoadResourcesCommon = _
}