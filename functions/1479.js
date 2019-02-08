const function1479 = function (t, e, i) {
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
    var o = i(17),
        r = i(11),
        s = i(13),
        a = i(1480),
        _ = i(1482),
        l = function (t) {
            function e(e, i, n, o) {
                var r = t.call(this) || this;
                return r._layer = e, r._area_id = i, r._map_no = n, r._file_suffix = o, r
            }
            return n(e, t), e.prototype._start = function () {
                var t = this;
                if (this._area_id != o.EVENT_AREA_ID) return void this._endTask();
                switch (this._map_no) {
                    case 2:
                        var e = new s.UIImageLoader("battle_result");
                        e.add("battle_result_event_ed1_" + this._file_suffix + ".json"), e.load(function () {
                            new a.TaskEventEnding432(t._layer).start(function () {
                                t._endTask()
                            })
                        });
                        break;
                    case 3:
                        var e = new s.UIImageLoader("battle_result");
                        e.add("battle_result_event_ed2_" + this._file_suffix + ".json"), e.load(function () {
                            new _.TaskEventEnding433(t._layer).start(function () {
                                t._endTask()
                            })
                        });
                        break;
                    default:
                        this._endTask()
                }
            }, e.prototype._endTask = function () {
                this._layer = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.TaskEventEnding = l
}