const function1148 = function (t, e, i) {
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
    var o = i(47), r = i(1149), s = i(1151), a = i(1153), _ = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), Object.defineProperty(e.prototype, "viewTop", {
            get: function () {
                return this._viewTop
            }, enumerable: !0, configurable: !0
        }), e.prototype.getPreInitializeTask = function (t) {
            return new r.PreInitializeTask(this)
        }, e.prototype.getInitializeTask = function (t) {
            return new r.InitializeTask(this)
        }, e.prototype.initialize = function () {
            this._viewTop = new a.ViewTop, this._viewTop.initialize(), this.addChild(this._viewTop)
        }, e.prototype.startTopTask = function () {
            var t = this;
            this._topTask = new s.TaskTop(this), this._topTask.start(function () {
                t._topTask = null
            })
        }, e.prototype.dispose = function () {
            null != this._viewTop && (this.removeChild(this._viewTop), this._viewTop.dispose(), this._viewTop = null), null != this._topTask && this._topTask.cancel(), null != this._viewSub && (this.removeChild(this._viewSub), this._viewSub.dispose(), this._viewSub = null)
        }, e
    }(o.SceneBase);
    e.InteriorScene = _
}