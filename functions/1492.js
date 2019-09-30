const function1492 = function (t, e, i) {
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
        r = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._scene = e, n._combined = i, n._tasks = [], n
            }
            return n(e, t), e.prototype._start = function () {
                this._showComponent()
            }, e.prototype._showComponent = function () {
                for (var t = this._scene.data.getLevelupInfoList(this._combined), e = this._scene.view.layer_banner.info_f.items, i = this._scene.data.getShipExp(this._combined), n = [], o = 0; o < e.length; o++) {
                    var r = e[o],
                        a = o < i.length ? i[o] : 0;
                    if (!(a < 0)) {
                        var _ = t[o],
                            l = new s(r, a, _);
                        n.push(l), this._tasks.push(l)
                    }
                }
                0 == n.length ? this._endTask() : this._startTasks(n)
            }, e.prototype._startTasks = function (t) {
                for (var e = this, i = 0, n = t; i < n.length; i++) {
                    var o = n[i];
                    ! function (t) {
                        t.start(function () {
                            var i = e._tasks.indexOf(t);
                            e._tasks.splice(i, 1), 0 == e._tasks.length && e._endTask()
                        })
                    }(o)
                }
            }, e
        }(o.TaskBase);
    e.TaskShowLevelup = r;
    var s = function (t) {
        function e(e, i, n) {
            var o = t.call(this) || this;
            o._onChange = function (t) {
                if (null != o._banner_info) {
                    var e = t.target.target.value;
                    e >= o._borders[0] && (o._borders.shift(), o._banner_info.levelup());
                    var i = -1;
                    o._borders.length > 0 && (i = o._borders[0] - e), o._banner_info.up_to_the_next_level.update(i)
                }
            }, o._banner_info = e, o._exp = i, null != n && n.length > 1 ? o._initial_value = n[0] : o._initial_value = -1, o._borders = new Array;
            for (var r = 1; r < n.length; r++) o._borders.push(n[r]);
            return o
        }
        return n(e, t), e.prototype._start = function () {
            this._initial_value < 0 ? this._endTask() : this._init()
        }, e.prototype._init = function () {
            var t = this,
                e = this._banner_info.up_to_the_next_level;
            e.alpha = 0, e.x -= 15;
            var i = this._borders[0] - this._initial_value;
            e.initialize(i), createjs.Tween.get(e).to({
                x: e.x + 15,
                alpha: 1
            }, 500).call(function () {
                e.showExpText(), t._completedShow()
            })
        }, e.prototype._completedShow = function () {
            var t = this,
                e = this._borders[this._borders.length - 1] - this._initial_value - this._exp,
                i = this._initial_value + this._exp,
                n = {
                    value: this._initial_value
                };
            createjs.Tween.get(n, {
                onChange: this._onChange
            }).to({
                value: i
            }, 2e3).call(function () {
                i === t._borders[0] && t._banner_info.levelup(), t._banner_info.up_to_the_next_level.update(e), t._endTask()
            })
        }, e.prototype._endTask = function () {
            this._banner_info = null, t.prototype._endTask.call(this)
        }, e
    }(o.TaskBase)
}