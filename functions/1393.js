const function1393 = function (t, e, i) {
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
    var o = i(72), r = i(1394), s = i(90), a = i(92), _ = i(93), u = i(62), l = i(100), c = i(96), h = i(95),
        p = i(97), d = i(94), f = i(98), y = i(73), v = i(99), g = function (t) {
            function e(e, i) {
                var n = t.call(this, e, !1) || this;
                return n._record = i, n
            }

            return n(e, t), e.prototype._start = function () {
                var t = this;
                this.scene.bg.setDay(function () {
                    t._shutterOpen()
                })
            }, e.prototype._shutterOpen = function () {
                var t = this, e = this.scene.view;
                1 == e.shutter.isOpened() ? this._jetAirUnit() : createjs.Tween.get(null).wait(3e3).call(function () {
                    e.shutter.once("opened", function () {
                        t._moveBanner()
                    }), e.shutter.open()
                })
            }, e.prototype._moveBanner = function () {
                var t = this;
                new r.TaskMoveBannerDay(this.scene, this._record).start(function () {
                    t._jetAirUnit()
                })
            }, e.prototype._jetAirUnit = function () {
                var t = this;
                new s.PhaseAirUnitJet(this.scene, this._record).start(function () {
                    t._jetAirWar()
                })
            }, e.prototype._jetAirWar = function () {
                var t = this;
                new a.PhaseAirWarJet(this.scene, this._record).start(function () {
                    t._airUnit()
                })
            }, e.prototype._airUnit = function () {
                var t = this;
                new _.PhaseAirUnit(this.scene, this._record).start(function () {
                    t._support()
                })
            }, e.prototype._support = function () {
                var t = this;
                new l.PhaseSupport(this.scene, this._record).start(function () {
                    t._airWar()
                })
            }, e.prototype._airWar = function () {
                var t = this;
                new u.PhaseAirWar(this.scene, this._record).start(function () {
                    t._support()
                })
            }, e.prototype._openingAttack = function () {
                var t = this;
                new c.PhaseHougekiOpening(this.scene, this._record, this._record.raw.hougeki_opening).start(function () {
                    t._openingTorpedo()
                })
            }, e.prototype._openingTorpedo = function () {
                var t = this;
                new h.PhaseRaigekiOpening(this.scene, this._record).start(function () {
                    t._formation()
                })
            }, e.prototype._formation = function () {
                var t = this;
                new p.PhaseFormation(this.scene, this._record).start(function () {
                    t._airWar2()
                })
            }, e.prototype._airWar2 = function () {
                var t = this;
                new d.PhaseAirWar2(this.scene, this._record).start(function () {
                    t._attack1()
                })
            }, e.prototype._attack1 = function () {
                var t = this;
                new f.PhaseHougeki(this.scene, this._record, this._record.raw.hougeki1).start(function () {
                    t._attack2()
                })
            }, e.prototype._attack2 = function () {
                var t = this;
                new f.PhaseHougeki(this.scene, this._record, this._record.raw.hougeki2).start(function () {
                    t._attack3()
                })
            }, e.prototype._attack3 = function () {
                var t = this;
                new f.PhaseHougeki(this.scene, this._record, this._record.raw.hougeki3).start(function () {
                    t._torpedo()
                })
            }, e.prototype._torpedo = function () {
                var t = this;
                new y.PhaseRaigeki(this.scene, this._record).start(function () {
                    t._ending()
                })
            }, e.prototype._ending = function () {
                var t = this;
                new v.PhaseEnding(this.scene, this._record).start(function () {
                    t._endTask()
                })
            }, e
        }(o.PhaseCombatBase);
    e.PhaseDayFromNight = g
}