const function1463 = function (t, e, i) {
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
    var o = i(17), r = i(11), s = i(1464), a = i(1465), _ = i(1466), u = function (t) {
        function e(e, i, n) {
            var o = t.call(this) || this;
            return o._layer = e, o._area_id = i, o._map_no = n, o
        }

        return n(e, t), e.prototype._start = function () {
            var t = this;
            if (this._area_id != o.EVENT_AREA_ID) return void this._endTask();
            switch (this._map_no) {
                case 4:
                    var e = new s.TaskEventEnding394(this._layer);
                    e.start(function () {
                        t._endTask()
                    });
                    break;
                case 6:
                    var e = new a.TaskEventEnding396(this._layer);
                    e.start(function () {
                        t._endTask()
                    });
                    break;
                case 7:
                    var e = new _.TaskEventEnding397(this._layer);
                    e.start(function () {
                        t._endTask()
                    });
                    break;
                default:
                    this._endTask()
            }
        }, e.prototype._endTask = function () {
            this._layer = null, t.prototype._endTask.call(this)
        }, e
    }(r.TaskBase);
    e.TaskEventEnding = u
}