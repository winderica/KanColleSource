const function1084 = function (t, e, i) {
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
        r = i(171),
        s = i(384),
        a = i(385),
        _ = function (t) {
            function e(e, i, n, o) {
                var r = t.call(this) || this;
                return r._model = i, r._view = n, r._onBack = o, r
            }
            return n(e, t), e.prototype._start = function () {
                var t = this;
                (new a.TaskLoadResources).start(function () {
                    t._initView()
                })
            }, e.prototype._initView = function () {
                this._view.initialize(this._onBack), this._connectAPI()
            }, e.prototype._connectAPI = function () {
                var t = this;
                new s.AlbumAPI(1, 0, this._model).start(function () {
                    t._showImage()
                })
            }, e.prototype._showImage = function () {
                var t = r.AlbumConst.COUNT_INPAGE,
                    e = this._model.getData(1, 0, t);
                this._view.content.update(1, 0, e), this._endTask()
            }, e.prototype._endTask = function () {
                this._model = null, this._view = null, this._onBack = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.TaskScenePreInitialize = _
}