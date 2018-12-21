const function577 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(7), o = i(578), r = function () {
        function t() {
        }

        return Object.defineProperty(t.prototype, "list", {
            get: function () {
                return this._list
            }, enumerable: !0, configurable: !0
        }), t.prototype.SetAll = function (t) {
            var e = Object.keys(t).map(function (e) {
                return t[e]
            });
            this._list = new Array(e.length);
            for (var i = 0; i < e.length; i++) this._list[i] = new o.FurnitureJukeBoxBGMLineModel, this._list[i].api_id = n.ObjUtil.getNumber(e[i], "api_id"), this._list[i].api_name = n.ObjUtil.getString(e[i], "api_name"), this._list[i].api_description = n.ObjUtil.getString(e[i], "api_description"), this._list[i].api_bgm_id = n.ObjUtil.getNumber(e[i], "api_bgm_id"), this._list[i].api_use_coin = n.ObjUtil.getNumber(e[i], "api_use_coin"), this._list[i].api_bgm_flag = n.ObjUtil.getNumber(e[i], "api_bgm_flag"), this._list[i].api_loops = n.ObjUtil.getNumber(e[i], "api_loops"), this._list[i].isLoaded = !0
        }, t
    }();
    e.FurnitureJukeBoxBGMModel = r
}