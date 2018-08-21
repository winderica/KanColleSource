const function957 = function (t, e, i) {
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
            var e = this._raw_data, i = this._model.gauge_max;
            null != e && 1 == e.hasOwnProperty("api_max_maphp") && (i = e.api_max_maphp), this._model.changeOperation(this._selected, i), t.prototype._completedEnd.call(this)
        }, e
    }(o.APIBase);
    e.APIOperationChange = r
}