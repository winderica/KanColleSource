const function439 = function (t, e, i) {
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
    var o = i(10), r = function (t) {
        function e(e, i, n, o, r) {
            var s = t.call(this) || this;
            return s._area_id = e, s._map_no = i, s._cell_no = n, s._target_mem_id = o, s._towing_mem_id = r, s._towing_mem_id <= 0 ? s._url = "api_req_sortie/goback_port" : s._url = "api_req_combined_battle/goback_port", s
        }

        return n(e, t), e
    }(o.APIBase);
    e.GobackPortAPI = r
}