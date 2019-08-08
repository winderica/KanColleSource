const function1221 = function (t, e, i) {
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
    var o = i(2),
        r = i(1222),
        s = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._scene = e, i
            }
            return n(e, t), e.prototype._start = function () {
                var t = this;
                (new r.TaskLoadResourcesPractice).start(function () {
                    t._initView()
                })
            }, e.prototype._initView = function () {
                var t = this;
                this._scene.view.bg.setDay(function () {
                    t._scene.view.initialize(), t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._scene = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.TaskInitPre = s
}