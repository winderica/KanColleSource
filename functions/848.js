const function848 = function (t, e, i) {
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
    var o = i(5),
        r = i(0),
        s = i(47),
        a = i(849),
        _ = i(850),
        l = i(851),
        u = i(853),
        c = i(854),
        h = i(855),
        p = i(856),
        d = i(857),
        f = i(345),
        y = i(858),
        m = i(859),
        g = i(860),
        v = i(170),
        b = i(861),
        w = i(870),
        x = i(871),
        I = i(872),
        T = i(86),
        O = i(224),
        C = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.nDocks = [], e.listPageIndex = 0, e.shipSortKeyType = 4, e._onClickEmptySlot = function (t) {
                    e.timerState = x.TimerState.UpdateOnly;
                    var i = new l.PhaseRepairShipChoice(e, e.repairShipChoiceView, e.pagerView, e.shipSortButton, e.repairShipChoiceBackground);
                    i.onComplete = function (n) {
                        e._onCompletePhaseRepairShipChoice(t, i, n)
                    }, i.start(e.listPageIndex, e.shipSortKeyType)
                }, e._onClickExtension = function (t) {
                    r.default.view.clickGuard = !0;
                    var i = t - 1;
                    e.timerState = x.TimerState.UpdateOnly, new m.OpenNewDockAPI(t).start(function () {
                        e.mainView.unLockAnimation(i, function () {
                            var t = r.default.model.useItem.get(v.RepairConst.OPEN_KEY_ITEMID),
                                i = 0 < t.count;
                            e.mainView.updateExtensionState(r.default.model.ndock.getAll(), i), e.timerState = x.TimerState.WaitComplete, r.default.view.clickGuard = !1
                        })
                    })
                }, e.onUpdateNDockTimer = function () {
                    var t = Date.now();
                    switch (e.mainView.updateTime(t, e.nDocks), e.timerState) {
                        case x.TimerState.UpdateOnly:
                            return;
                        case x.TimerState.WaitComplete:
                            for (var i = 0; i < e.nDocks.length; i++) {
                                var n = e.nDocks[i];
                                if (1 == n.state) {
                                    if (n.completeTime < t) {
                                        r.default.view.clickGuard = !0, e.timerState = x.TimerState.UpdateOnly;
                                        return void(new f.NDockAPI).start(function () {
                                            var t = r.default.model.ndock.getAll();
                                            e.mainView.hideAnimation(t, function () {
                                                e.updateNDocks(t), e.timerState = x.TimerState.WaitComplete, r.default.view.clickGuard = !1
                                            }), e.nDocks = t
                                        })
                                    }
                                }
                            }
                    }
                }, e._onCompletePhaseRepairShipChoice = function (t, i, n) {
                    switch (e.listPageIndex = i.pageIndex, e.shipSortKeyType = i.shipSortKeyType, n) {
                        case !1:
                            r.default.view.clickGuard = !0, i.hide(function () {
                                i.dispose(), r.default.view.clickGuard = !1, e.timerState = x.TimerState.WaitComplete
                            });
                            break;
                        case !0:
                            var o = i.memShipId,
                                s = new u.PhaseRepairShipConfig(e, e.repairShipConfigView, e.repairShipConfigBackground);
                            s.onComplete = function (n) {
                                e._onCompletePhaseRepairShipConfig(t, i, s, n)
                            }, s.start(o)
                    }
                }, e._onCompletePhaseRepairShipConfig = function (t, i, n, o) {
                    switch (o) {
                        case !1:
                            r.default.view.clickGuard = !0, n.hide(function () {
                                n.dispose(), r.default.view.clickGuard = !1
                            });
                            break;
                        case !0:
                            var s = new a.PhaseRepairConfirm(r.default.view.overLayer, e.useRepairConfirmView, e.repairConfirmBackground);
                            s.onComplete = function (o) {
                                e._onCompletePhaseRepairConfirm(t, i, n, s, o)
                            }, s.start(i.memShipId, n.useHiSpeed)
                    }
                }, e._onCompletePhaseRepairConfirm = function (t, i, n, o, s) {
                    switch (s) {
                        case !1:
                            r.default.view.clickGuard = !0, o.hide(function () {
                                o.dispose(), r.default.view.clickGuard = !1
                            });
                            break;
                        case !0:
                            var a = i.memShipId,
                                _ = n.useHiSpeed,
                                l = t - 1,
                                u = r.default.model.ship.get(a),
                                c = {
                                    hpNow: u.hpNow,
                                    hpMax: u.hpMax,
                                    damaged: u.isDamaged(),
                                    completeTime: u.getRepairTime()
                                },
                                h = new y.StartAPI(t, i.memShipId, _);
                            e.mainView.stopAnimation(l), h.start(function () {
                                var s = (r.default.model.useItem.get(31), r.default.model.useItem.get(33), r.default.model.useItem.get(1)),
                                    a = new f.NDockAPI;
                                r.default.view.portMain.updateInfo(), a.start(function () {
                                    e.nDocks = r.default.model.ndock.getAll();
                                    for (var a = 0 < s.count, h = 0, p = e.nDocks.length; h < p; h++) {
                                        var d = e.nDocks[h];
                                        0 != d.state || 1 != e.mainView.dockState(h) ? 1 == d.state && e.mainView.updateHighSpeedButton(h, a) : e.mainView.forceEnd(h)
                                    }
                                    var f = e.nDocks[l];
                                    _ || 1 == f.state ? (e.mainView.updateViewState(l, 1), e.mainView.updateShipInfo(l, c.hpNow, c.hpMax, u.level, u.mstID, u.name, u.memID, c.damaged, u.starNum, u.isMarriage()), e.mainView.updateDockInfo(l, 1, t, c.completeTime + Date.now())) : e.mainView.updateViewState(l, f.state), i.dispose(), n.dispose(), o.hide(function () {
                                        o.dispose();
                                        var i = r.default.model.ndock.get(t);
                                        _ ? e.mainView.highSpeedAnimation(l, function () {
                                            e.mainView.updateViewState(l, i.state), e.timerState = x.TimerState.WaitComplete
                                        }) : (1 == i.state && e.mainView.playAnimation(l), e.timerState = x.TimerState.WaitComplete);
                                        var n = u.mstID,
                                            s = c.hpNow / c.hpMax > .5 ? 11 : 12;
                                        r.default.sound.voice.play(n.toString(), s)
                                    })
                                })
                            })
                    }
                }, e._onClickHiSpeed = function (t) {
                    e.timerState = x.TimerState.UpdateOnly;
                    var i = new PIXI.Graphics;
                    i.beginFill(0, 1), i.drawRect(0, 0, o.default.width, o.default.height), i.endFill();
                    var n = new _.PhaseHiSpeedRepairConfirm(r.default.view.overLayer, e.useHiSpeedRepairConfirmView, i);
                    n.onComplete = function (i) {
                        e._onCompletePhaseHiSpeedRepairConfirm(t, n, i)
                    }, n.start(t)
                }, e._onCompletePhaseHiSpeedRepairConfirm = function (t, i, n) {
                    switch (n) {
                        case !1:
                            i.hide(function () {
                                i.dispose(), e.timerState = x.TimerState.WaitComplete
                            });
                            break;
                        case !0:
                            r.default.view.clickGuard = !0;
                            var o = t - 1,
                                s = r.default.model.ndock.get(t).shipMemID;
                            new g.SpeedChangeAPI(t).start(function () {
                                var n = (r.default.model.ndock.get(t), r.default.model.ndock.getAll()),
                                    a = r.default.model.useItem.get(1),
                                    _ = 0 < a.count;
                                r.default.view.portMain.updateInfo();
                                for (var l = 0; l < n.length; l++) {
                                    1 == n[l].state && e.mainView.updateHighSpeedButton(l, _)
                                }
                                i.hide(function () {
                                    var n = r.default.model.ship.get(s).mstID;
                                    r.default.sound.voice.play(n.toString(), 26), i.dispose(), e.mainView.highSpeedAnimation(o, function () {
                                        r.default.view.clickGuard = !1;
                                        r.default.model.ship.get(s);
                                        e.mainView.stopAnimation(o), e.mainView.updateDockInfo(o, 0, t, 0), e.mainView.updateViewState(o, 0), e.timerState = x.TimerState.WaitComplete
                                    })
                                })
                            })
                    }
                }, e
            }
            return n(e, t), e.prototype.dispose = function () {
                for (var t = 0; t < this.nDocks.length; t++) this.nDocks[t] = null;
                this.mainView.dispose(), this.__stopNDockTimer__(), this.repairShipChoiceView.dispose(), this.repairShipConfigView.dispose(), this.useRepairConfirmView.dispose(), this.useHiSpeedRepairConfirmView.dispose(), this.pagerView.dispose(), this.repairShipConfigBackground.clear(), this.repairShipChoiceBackground.clear(), this.nDocks = null, this.mainView = null, this.timerState = null, this.listPageIndex = null, this.shipSortKeyType = null, this.nDockTimer = null, this.repairShipChoiceView = null, this.repairShipConfigView = null, this.useRepairConfirmView = null, this.useHiSpeedRepairConfirmView = null, this.repairShipConfigBackground = null, this.repairShipChoiceBackground = null, this.removeChildren()
            }, e.prototype.start = function (t) {
                var e = new p.RepairShipChoiceView,
                    i = new d.RepairShipConfigView,
                    n = new c.UseRepairConfirmView,
                    r = new h.UseHiSpeedRepairConfirmView,
                    s = new O.ShipSortButton,
                    a = new T.PagerView,
                    _ = new PIXI.Graphics;
                _.beginFill(0, .3), _.drawRect(0, 103, o.default.width, o.default.height - 103), _.endFill();
                var l = new PIXI.Graphics;
                l.beginFill(0, .3), l.drawRect(0, 103, o.default.width, o.default.height - 103), l.endFill();
                var u = new PIXI.Graphics;
                u.beginFill(0, 1), u.drawRect(0, 0, o.default.width, o.default.height), u.endFill(), this.repairShipConfigBackground = l, this.repairShipChoiceBackground = _, t.onClickHiSpeed = this._onClickHiSpeed, t.onClickEmptySlot = this._onClickEmptySlot, t.onClickExtension = this._onClickExtension, this.addChild(t), this.mainView = t, this.repairShipChoiceView = e, this.repairShipConfigView = i, this.useRepairConfirmView = n, this.useHiSpeedRepairConfirmView = r, this.shipSortButton = s, this.pagerView = a, this.repairShipConfigBackground = l, this.repairShipChoiceBackground = _, this.repairConfirmBackground = u
            }, e.prototype.updateNDocks = function (t) {
                for (var e = r.default.model.useItem.get(1), i = 0 < e.count, n = 0; n < t.length; n++) {
                    var o = t[n];
                    switch (this.mainView.updateDockInfo(n, o.state, o.mstID, o.completeTime), o.state) {
                        case 1:
                            var s = r.default.model.ship.get(o.shipMemID);
                            this.mainView.updateShipInfo(n, s.hpNow, s.hpMax, s.level, s.mstID, s.name, s.memID, s.isDamaged(), s.starNum, s.isMarriage()), this.mainView.updateHighSpeedButton(n, i), this.mainView.playAnimation(n)
                    }
                    this.mainView.updateViewState(n, o.state)
                }
                var a = r.default.model.useItem.get(v.RepairConst.OPEN_KEY_ITEMID),
                    _ = 0 < a.count;
                this.mainView.updateExtensionState(t, _), this.nDocks = t
            }, e.prototype.stopNDockTimer = function () {
                this.__stopNDockTimer__()
            }, e.prototype.__stopNDockTimer__ = function () {
                null != this.nDockTimer && (this.nDockTimer.setPaused(!0), this.nDockTimer.addEventListener("change", this.onUpdateNDockTimer)), this.nDockTimer = null
            }, e.prototype.startNDockTimer = function () {
                this.__stopNDockTimer__(), this.timerState = x.TimerState.WaitComplete;
                var t = createjs.Tween.get({});
                t.wait(500).loop = !0, t.play(null), t.addEventListener("change", this.onUpdateNDockTimer), this.nDockTimer = t
            }, e.prototype.getPreInitializeTask = function (t) {
                return new b.PreInitializeTask(this)
            }, e.prototype.getInitializeTask = function (t) {
                return new w.InitializeTask(this)
            }, e.prototype.getPreFinalizeTask = function () {
                return this.timerState = x.TimerState.UpdateOnly, null
            }, e.prototype.getFinalizeTask = function () {
                return new I.DisposeTask(this)
            }, e
        }(s.SceneBase);
    e.RepairScene = C
}