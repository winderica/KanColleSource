const function1467 = function (t, e, i) {
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
    var o = i(79),
        r = i(95),
        s = i(98),
        a = i(96),
        _ = i(66),
        u = i(99),
        l = i(97),
        c = i(104),
        h = i(102),
        p = i(101),
        d = i(103),
        f = i(100),
        y = i(80),
        m = i(124),
        g = i(105),
        v = function (t) {
            function e(e, i, n) {
                var o = t.call(this, e, n) || this;
                return o._record = i, o
            }
            return n(e, t), e.prototype._start = function () {
                this._sakuteki()
            }, e.prototype._sakuteki = function () {
                var t = this;
                new m.PhaseSakuteki(this.scene, this._record).start(function () {
                    t._ration()
                })
            }, e.prototype._ration = function () {
                var t = this;
                new r.PhaseRation(this.scene, this._record).start(function () {
                    t._jetAirUnit()
                })
            }, e.prototype._jetAirUnit = function () {
                var t = this;
                new a.PhaseAirUnitJet(this.scene, this._record).start(function () {
                    t._jetAirWar()
                })
            }, e.prototype._jetAirWar = function () {
                var t = this;
                new l.PhaseAirWarJet(this.scene, this._record).start(function () {
                    t._airUnit()
                })
            }, e.prototype._airUnit = function () {
                var t = this;
                new s.PhaseAirUnit(this.scene, this._record).start(function () {
                    t._airWar()
                })
            }, e.prototype._airWar = function () {
                var t = this;
                new _.PhaseAirWar(this.scene, this._record).start(function () {
                    t._support()
                })
            }, e.prototype._support = function () {
                var t = this;
                new g.PhaseSupport(this.scene, this._record).start(function () {
                    t._openingAttack()
                })
            }, e.prototype._openingAttack = function () {
                var t = this;
                new p.PhaseHougekiOpening(this.scene, this._record, this._record.raw.hougeki_opening).start(function () {
                    t._openingTorpedo()
                })
            }, e.prototype._openingTorpedo = function () {
                var t = this;
                new f.PhaseRaigekiOpening(this.scene, this._record).start(function () {
                    t._formation()
                })
            }, e.prototype._formation = function () {
                var t = this;
                new h.PhaseFormation(this.scene, this._record).start(function () {
                    t._airWar2()
                })
            }, e.prototype._airWar2 = function () {
                var t = this;
                new u.PhaseAirWar2(this.scene, this._record).start(function () {
                    t._attack1()
                })
            }, e.prototype._attack1 = function () {
                var t = this;
                new d.PhaseHougeki(this.scene, this._record, this._record.raw.hougeki1).start(function () {
                    t._attack2()
                })
            }, e.prototype._attack2 = function () {
                var t = this;
                new d.PhaseHougeki(this.scene, this._record, this._record.raw.hougeki2).start(function () {
                    t._attack3()
                })
            }, e.prototype._attack3 = function () {
                var t = this;
                new d.PhaseHougeki(this.scene, this._record, this._record.raw.hougeki3).start(function () {
                    t._torpedo()
                })
            }, e.prototype._torpedo = function () {
                var t = this;
                new y.PhaseRaigeki(this.scene, this._record).start(function () {
                    t._ending()
                })
            }, e.prototype._ending = function () {
                var t = this;
                new c.PhaseEnding(this.scene, this._record).start(function () {
                    t._endTask()
                })
            }, e
        }(o.PhaseCombatBase);
    e.PhaseDay_Suijo = v
}