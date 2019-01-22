const function1190 = function (t, e, i) {
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
    var o = i(0),
        r = i(11),
        s = i(6),
        a = i(241),
        _ = i(176),
        l = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._model = e, n._holder = i, n
            }
            return n(e, t), e.prototype._start = function () {
                var t = this,
                    e = o.default.model.basic.getDutyExecutableCount();
                if (this._holder.getExecCount() >= e) return void this._endTask();
                s.SE.play("240"), new a.DutyStartAPI(this._model.id).start(function () {
                    t._update()
                })
            }, e.prototype._update = function () {
                var t = this,
                    e = this._holder.selected_page_no,
                    i = this._holder.selected_type;
                new _.TaskUpdateDutyListData(e, i, this._holder).start(function () {
                    1 == o.default.option.voice_duty && o.default.sound.voice.playAtRandom("9999", [409, 410], [50, 50]), t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._model = null, this._holder = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.TaskWaitedDutySelect = l
}