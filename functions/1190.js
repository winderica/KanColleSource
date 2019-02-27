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
    var o = i(11),
        r = i(1191),
        s = i(1193),
        a = i(1194),
        _ = i(1201),
        l = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._dispose = function () {
                    null != e._topTask && (e._topTask.dispose(), e._topTask = null), null != e._viewList && (e._viewList.dispose(), e._viewList = null), null != e._viewTop && (e._viewTop.dispose(), e._viewTop = null)
                }, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "viewTop", {
                get: function () {
                    return this._viewTop
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "viewList", {
                get: function () {
                    return this._viewList
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.getPreInitializeTask = function (t) {
                return new r.PreInitializeTask(this)
            }, e.prototype.getInitializeTask = function (t) {
                return new r.InitializeTask(this)
            }, e.prototype.getFinalizeTask = function () {
                return new s.TaskItemSceneFinalize(this._dispose)
            }, e.prototype.initialize = function () {
                this._viewTop = new _.ViewTop, this._viewTop.initialize(), this.addChild(this._viewTop), this._viewList = new _.ViewSlotitemList, this._viewList.initialize(), this._viewList.position.set(1219, 102), this.addChild(this._viewList)
            }, e.prototype.startTopTask = function () {
                var t = this;
                this._topTask = new a.TaskTop(this), this._topTask.start(function () {
                    t._topTask = null
                })
            }, e
        }(o.SceneBase);
    e.RevampScene = l
}