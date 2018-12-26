const function912 = function (t, e, i) {
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
    var o = i(47),
        r = i(913),
        s = i(915),
        a = i(916),
        _ = i(917),
        l = i(918),
        u = i(920),
        c = i(921),
        h = i(923),
        p = i(1004),
        d = i(1025),
        f = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), Object.defineProperty(e.prototype, "viewTop", {
                get: function () {
                    return this._viewTop
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t) {
                this._expedition_available = t, this._viewTop = new c.ViewTop, this._viewTop.initialize(this._expedition_available), this.addChild(this._viewTop)
            }, e.prototype.dispose = function () {
                null != this._viewTop && (this.removeChild(this._viewTop), this._viewTop.dispose(), this._viewTop = null), null != this._topTask && this._topTask.cancel(), null != this._viewSub && (this.removeChild(this._viewSub), this._viewSub.dispose(), this._viewSub = null)
            }, e.prototype.startTopTask = function () {
                var t = this;
                this._topTask = new a.TaskTop(this), this._topTask.start(function () {
                    t._topTask = null
                })
            }, e.prototype.openView = function (t) {
                var e = this,
                    i = this._viewSub;
                if (0 == t) {
                    var n = new h.ViewMain(this._expedition_available, function (t) {
                        e.openView(t)
                    });
                    (new _.MapInfoAPI).start(function () {
                        n.initialize(), n.update(1), e._openView(n, i)
                    })
                } else if (1 == t) {
                    var o = new p.ViewMain(this._expedition_available, function (t) {
                            e.openView(t)
                        }),
                        r = new l.PracticeAPI;
                    r.start(function () {
                        o.initialize(), o.update(r.res_model), e._openView(o, i)
                    })
                } else if (2 == t) {
                    var s = new d.ViewMain(this._expedition_available, function (t) {
                        e.openView(t)
                    });
                    (new u.ExpeditionAPI).start(function () {
                        s.initialize(), e._openView(s, i)
                    })
                }
            }, e.prototype._removeTopView = function () {
                null != this._viewTop && (this.removeChild(this._viewTop), this._viewTop = null)
            }, e.prototype._openView = function (t, e) {
                t.position.set(1200, 0), this.addChild(t), this._viewSub = t, this._openViewTween(t, e)
            }, e.prototype._openViewTween = function (t, e) {
                var i = this;
                createjs.Tween.get(t).to({
                    x: 0
                }, 200).call(function () {
                    i._removeTopView(), t.activate()
                }), null != e && (e.deactivate(), createjs.Tween.get(e).wait(200).to({
                    alpha: 0
                }, 300).call(function () {
                    e.dispose(), i.removeChild(e)
                }))
            }, e.prototype.getPreInitializeTask = function (t) {
                return new r.PreInitializeTask(this)
            }, e.prototype.getInitializeTask = function (t) {
                return new r.InitializeTask(this)
            }, e.prototype.getPreFinalizeTask = function () {
                return new s.PreFinalizeTask(this)
            }, e.prototype.getFinalizeTask = function () {
                return new s.FinalizeTask(this)
            }, e
        }(o.SceneBase);
    e.SallyScene = f
}