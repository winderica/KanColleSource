const function1259 = function (t, e, i) {
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
        r = i(48),
        s = i(1260),
        a = i(1261),
        _ = i(1263),
        u = i(1264),
        l = i(1276),
        c = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._startBattleResult = function () {
                    n._result.initialize(), n.addChild(n._result), n._result.shutter.close(), n._result.once("complete", n._endBattleResult);
                    var t = n._taskMain.model;
                    n._result.start(t)
                }, n._endBattleResult = function () {
                    o.default.scene.change(0)
                }, n._battle = e, n._result = i, n._view = new l.ViewMain, n._battle.alpha = 0, n.addChild(n._view), n.addChild(n._battle), n
            }
            return n(e, t), Object.defineProperty(e.prototype, "view", {
                get: function () {
                    return this._view
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "battle", {
                get: function () {
                    return this._battle
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "result", {
                get: function () {
                    return this._result
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.start = function () {
                var t = this;
                this._taskMain.start(function () {
                    t._startBattle()
                })
            }, e.prototype._startBattle = function () {
                this._battle.once("complete", this._startBattleResult), this._battle.start()
            }, e.prototype.getPreInitializeTask = function (t, e) {
                return this._model = e, this._taskMain = new u.TaskMain(this, this._model), new a.TaskInitPre(this)
            }, e.prototype.getInitializeTask = function (t) {
                return new _.TaskInit(this)
            }, e.prototype.getFinalizeTask = function () {
                var t = this;
                return new s.TaskFinalize(function () {
                    t.removeChild(t._battle), t._battle.dispose(), t.removeChild(t._result), t._result.dispose()
                })
            }, e
        }(r.SceneBase);
    e.PracticeScene = c
}