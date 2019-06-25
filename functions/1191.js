const function1191 = function (t, e, i) {
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
        r = i(2),
        s = i(32),
        a = i(69),
        _ = i(411),
        u = i(412),
        l = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._data = e, n._scene_initialize_delegate = i, n
            }
            return n(e, t), e.prototype._start = function () {
                this._loadResources()
            }, e.prototype._loadResources = function () {
                var t = this;
                (new u.TaskLoadResources).start(function () {
                    t._connectAPI()
                })
            }, e.prototype._connectAPI = function () {
                var t = this,
                    e = new s.APIConnector;
                20 == o.default.model.basic.getTutorialProgress() && e.add(new a.UpdateTutorialAPI(30));
                e.add(new _.DutyListAPI(1, 0, this._data)), e.start(function () {
                    null != t._scene_initialize_delegate && t._scene_initialize_delegate(), t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._data = null, this._scene_initialize_delegate = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.TaskDutyScenePreInitialize = l
}