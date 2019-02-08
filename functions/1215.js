const function1215 = function (t, e, i) {
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
    var o = i(2),
        r = i(243),
        s = i(431),
        a = i(1218),
        _ = i(1221),
        l = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._scene = e, n._option = i, n
            }
            return n(e, t), Object.defineProperty(e.prototype, "model", {
                get: function () {
                    return this._model
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._start = function () {
                var t = this;
                this._model = new r.BattleSceneModel(!0), this._model.updateDeckData(this._option.deck_f, this._option.deck_e), this._scene.battle.initialize(this._model), this._scene.view.shutter.once("closed", function () {
                    t._formationSelect()
                }), this._scene.view.shutter.close(400)
            }, e.prototype._formationSelect = function () {
                var t = this,
                    e = new a.TaskFormationSelect(this._scene, this._option.deck_f);
                e.start(function () {
                    t._option.deck_f.formation = e.selected_formation, t._insert()
                })
            }, e.prototype._insert = function () {
                var t = this;
                this._scene.battle.bg.setDay(function () {
                    createjs.Tween.get(t._scene.view).to({
                        alpha: 0
                    }, 300), t._scene.battle.shutter2.open(0), createjs.Tween.get(t._scene.battle).to({
                        alpha: 1
                    }, 300), new s.SallyAnimationTask(t._scene).start(function () {
                        t._cutin()
                    })
                })
            }, e.prototype._cutin = function () {
                var t = this,
                    e = this._option.deck_f.ships,
                    i = this._option.deck_f.medal_num,
                    n = this._option.deck_e.ships,
                    o = this._option.deck_e.medal_num,
                    r = new _.StartAnimationTask(this._scene, e, i, n, o);
                r.preload(function () {
                    r.start(function () {
                        t._endTask()
                    })
                })
            }, e.prototype._endTask = function () {
                this._scene = null, this._option = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.TaskMain = l
}