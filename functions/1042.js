const function1042 = function (t, e, i) {
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
        r = i(11),
        s = i(1043),
        a = i(1045),
        _ = i(1046),
        l = i(1053),
        u = i(1056),
        c = i(1057),
        h = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._dispose = function () {
                    null != e._viewTop && (e.removeChild(e._viewTop), e._viewTop.dispose(), e._viewTop = null, e._viewInfo.dispose(), e._viewInfo = null, e._viewRanking.dispose(), e._viewRanking = null), null != e._topTask && e._topTask.cancel(), null != e._viewSub && (e.removeChild(e._viewSub), e._viewSub.dispose(), e._viewSub = null)
                }, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "viewTop", {
                get: function () {
                    return this._viewTop
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "viewInfo", {
                get: function () {
                    return this._viewInfo
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "viewRanking", {
                get: function () {
                    return this._viewRanking
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.getPreInitializeTask = function (t) {
                return new s.PreInitializeTask(this)
            }, e.prototype.getInitializeTask = function (t) {
                return new s.InitializeTask(this)
            }, e.prototype.getPreFinalizeTask = function () {
                return new a.PreFinalizeTask(this)
            }, e.prototype.getFinalizeTask = function () {
                return new a.FinalizeTask(this._dispose)
            }, e.prototype.initialize = function () {
                this._viewTop = new l.ViewTop, this._viewTop.initialize(), this.addChild(this._viewTop), this._viewInfo = new u.ViewInfo, this._viewInfo.initialize(), this.addChild(this._viewInfo), this._viewRanking = new c.ViewRanking, this._viewRanking.initialize(), this._viewRanking.visible = !1, this.addChild(this._viewRanking)
            }, e.prototype.startTopTask = function () {
                var t = this,
                    e = o.default.model.deck.get(1).getShipList()[0].mstID;
                o.default.sound.voice.play(e.toString(), 8), this._topTask = new _.TaskTop(this), this._topTask.start(function () {
                    t._topTask = null
                })
            }, e
        }(r.SceneBase);
    e.RecordScene = h
}