const function1208 = function (t, e, i) {
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
    var o = i(11),
        r = i(6),
        s = i(244),
        a = i(175),
        _ = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._model = e, n._holder = i, n
            }
            return n(e, t), e.prototype._start = function () {
                var t = this;
                r.SE.play("240"), new s.DutyCancelAPI(this._model.id).start(function () {
                    t._update()
                })
            }, e.prototype._update = function () {
                var t = this,
                    e = this._holder.selected_page_no,
                    i = this._holder.selected_type;
                new a.TaskUpdateDutyListData(e, i, this._holder).start(function () {
                    t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._model = null, this._holder = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.TaskExecutedDutySelect = _
}