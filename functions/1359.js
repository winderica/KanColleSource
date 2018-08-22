const function1359 = function (t, e, i) {
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
    var o = i(89), r = i(72), s = i(1360), a = i(1361), _ = i(1389), u = i(1390), l = i(1391), c = i(461),
        h = i(1392), p = i(1393), d = i(180), f = function (t) {
            function e(e, i, n) {
                var o = t.call(this, e, n) || this;
                return o._record = i, o
            }

            return n(e, t), e.prototype._start = function () {
                this._opening()
            }, e.prototype._opening = function () {
                var t = this;
                new s.PhaseOpening(this.scene, this._record).start(function () {
                    t._allyAttack()
                })
            }, e.prototype._allyAttack = function () {
                var t = this;
                new a.PhaseAllyAttack(this.scene, this._record).start(function () {
                    t._moveShips()
                })
            }, e.prototype._moveShips = function () {
                var t = this;
                new u.PhaseMoveShips(this.scene, this._record).start(function () {
                    t._showTouchPlane()
                })
            }, e.prototype._showTouchPlane = function () {
                var t = this, e = this._record.raw.getTouchPlaneFriend(), i = this._record.raw.getTouchPlaneEnemy();
                new d.TaskShowTouchPlane(this.scene, e, i).start(function () {
                    t._ration()
                })
            }, e.prototype._ration = function () {
                var t = this;
                new o.PhaseRation(this.scene, this._record).start(function () {
                    t._light()
                })
            }, e.prototype._light = function () {
                var t = this;
                new _.PhaseLighting(this.scene, this._record).start(function () {
                    t._support()
                })
            }, e.prototype._support = function () {
                var t = this;
                new l.PhaseSupport(this.scene, this._record).start(function () {
                    t._attack()
                })
            }, e.prototype._attack = function () {
                var t = this, e = this._record.raw.hougeki, i = this.scene.data.model.deck_f.ships,
                    n = this.scene.data.model.deck_e.ships;
                new c.PhaseHougeki(this.scene, e, i, n).start(function () {
                    t._attack1()
                })
            }, e.prototype._attack1 = function () {
                var t = this, e = this._record.raw.hougeki1, i = this.scene.data.model.deck_f.ships,
                    n = this.scene.data.model.deck_e.ships;
                new c.PhaseHougeki(this.scene, e, i, n).start(function () {
                    t._attack2()
                })
            }, e.prototype._attack2 = function () {
                var t = this, e = this._record.raw.hougeki2, i = this.scene.data.model.deck_f.ships,
                    n = this.scene.data.model.deck_e.ships;
                new c.PhaseHougeki(this.scene, e, i, n).start(function () {
                    t._ending()
                })
            }, e.prototype._ending = function () {
                var t = this;
                new h.PhaseEnding(this.scene, this._record).start(function () {
                    t._dayBattle()
                })
            }, e.prototype._dayBattle = function () {
                var t = this;
                if (1 == this._record.raw.hasDayBattle()) {
                    var e = this.scene, i = this._record.getDayRecord();
                    new p.PhaseDayFromNight(e, i).start(function () {
                        t._endTask()
                    })
                } else this._endTask()
            }, e
        }(r.PhaseCombatBase);
    e.PhaseNight = f
}