const function171 = function (t, e, i) {
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
    var o = i(11), r = i(238), s = function (t) {
        function e(e, i, n) {
            var o = t.call(this) || this;
            return o._selected_page_no = e, o._selected_type = i, o._data = n, o
        }

        return n(e, t), e.prototype._start = function () {
            var t = this, e = this._selected_page_no, i = this._selected_type;
            new r.DutyListAPI(e, i, this._data).start(function () {
                t._retry()
            })
        }, e.prototype._retry = function () {
            return this._data.models.length > 0 ? void this._endTask() : this._data.selected_page_no <= 1 ? void this._endTask() : (this._selected_page_no--, void this._start())
        }, e
    }(o.TaskBase);
    e.TaskUpdateDutyListData = s
}