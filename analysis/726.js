const function726 = function (t, e, i) {
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
    var o = i(0), r = i(2), s = i(216), a = i(727), _ = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._scene = e, i
        }

        return n(e, t), e.prototype._start = function () {
            var t = this;
            if (this._scene.finalize(), this._isChangeListStatus()) {
                var e = s.OrganizeSceneMemory.filterStatus, i = s.OrganizeSceneMemory.japanese;
                new a.UpdateListStatusAPI(e, i).start(function () {
                    o.default.model.basic.updateOrganizeListSetting(e, i), t._endTask()
                })
            } else this._endTask()
        }, e.prototype._isChangeListStatus = function () {
            if (o.default.model.basic.isJapaneseOrganizeList() != s.OrganizeSceneMemory.japanese) return !0;
            var t = o.default.model.basic.getFilterStatusOrganizeList(), e = s.OrganizeSceneMemory.filterStatus;
            if (t.length != e.length) return !0;
            for (var i = 0; i < t.length; i++) if (t[i] != e[i]) return !0;
            return !1
        }, e
    }(r.TaskBase);
    e.FinalizeTask = _
}