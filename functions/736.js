const function736 = function (t, e, i) {
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
        s = i(217),
        a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._scene = e, i
            }
            return n(e, t), e.prototype._start = function () {
                s.OrganizeSceneMemory.pageIndex = 0, s.OrganizeSceneMemory.filterStatus = o.default.model.basic.getFilterStatusOrganizeList(), s.OrganizeSceneMemory.japanese = o.default.model.basic.isJapaneseOrganizeList(), this._scene.initialize(), this._endTask()
            }, e.prototype._endTask = function () {
                this._scene = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.InitializeTask = a
}