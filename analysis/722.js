const function722 = function (t, e, i) {
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
    var o = i(17), r = i(2), s = i(18), a = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), e.prototype._start = function () {
            var t = this, e = new s.UIImageLoader("organize");
            switch (e.add("organize_main.json"), e.add("organize_ship.json"), e.add("organize_rengo.json"), e.add("organize_rengo.json"), e.add("organize_filter.json"), o.MAMIYA_IRAKO_SEASON) {
                case 2:
                    e.add("organize_hokyu_dialog_xmas.json");
                    break;
                case 4:
                    e.add("organize_hokyu_dialog_summer.json");
                    break;
                default:
                    e.add("organize_hokyu_dialog_default.json")
            }
            e.load(function () {
                t._endTask()
            })
        }, e
    }(r.TaskBase);
    e.TaskLoadResourcesOrganize = a
}