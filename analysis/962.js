const function962 = function (t, e, i) {
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
        function e(e, i) {
            var n = t.call(this) || this;
            return n._url = "api_req_map/select_eventmap_rank", n._model = e, n._selected = i, n
        }

        return n(e, t), e.prototype._connect = function () {
            this._post_data.api_maparea_id = this._model.area_id, this._post_data.api_map_no = this._model.map_no, this._post_data.api_rank = this._selected, t.prototype._connect.call(this)
        }, e.prototype._completedEnd = function () {
            var e = this._model.getGaugeNum(), i = this._model.gauge_type, n = this._model.gauge_max,
                o = this._model.gauge_now, r = this._raw_data;
            if (null != r && r.hasOwnProperty("api_maphp")) {
                var s = r.api_maphp;
                s.hasOwnProperty("api_gauge_num") && (e = s.api_gauge_num), s.hasOwnProperty("api_gauge_type") && (i = s.api_gauge_type), 1 == s.hasOwnProperty("api_max_maphp") && (n = s.api_max_maphp), 1 == s.hasOwnProperty("api_now_maphp") && (o = s.api_now_maphp)
            }
            this._model.changeOperation(this._selected, e, i, n, o), t.prototype._completedEnd.call(this)
        }, e
    }(o.APIBase);
    e.APIOperationChange = r
}