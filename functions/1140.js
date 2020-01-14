const function1140 = function (t, e, i) {
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
        s = i(81),
        a = i(244),
        _ = i(1141),
        u = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o._purchasedItems = e, o._scene_model = i, o._delegate_initialize = n, o
            }
            return n(e, t), e.prototype._start = function () {
                this._loadResources()
            }, e.prototype._loadResources = function () {
                var t = this;
                (new _.TaskLoadResources).start(function () {
                    if (null != t._delegate_initialize) {
                        o.default.model.useItem.updateCount();
                        var e = 0;
                        t._scene_model instanceof s.ItemSceneModel && (e = t._scene_model.subtype), t._delegate_initialize(e)
                    }
                    t._connectAPI()
                })
            }, e.prototype._connectAPI = function () {
                var t = this;
                new a.PayItemAPI(this._purchasedItems).start(function () {
                    t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._purchasedItems = null, this._scene_model = null, this._delegate_initialize = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.TaskItemScenePreInitialize = u
}