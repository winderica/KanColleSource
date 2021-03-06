const function826 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(5),
        o = i(0),
        r = i(37),
        s = i(8),
        a = i(6),
        _ = i(90),
        u = i(827),
        l = i(835),
        c = i(837),
        h = i(840),
        p = i(841),
        d = i(843),
        f = i(50),
        y = function () {
            function t(t) {
                var e = this;
                this._onClickEmpty = function (t) {
                    var i = [];
                    i.push(e.memShipId), e.targetShips.forEach(function (t) {
                        i.push(t.memID)
                    });
                    var n = new c.TaskShipChoice(e.mainView);
                    n.onClickShip = function (t) {
                        var i = o.default.model.ship.get(e.memShipId),
                            n = o.default.model.ship.getMst(i.mstID),
                            r = [],
                            s = o.default.model.ship.get(t);
                        e.targetShips.push(s), e.targetShips.forEach(function (t) {
                            var e = o.default.model.ship.getMst(t.mstID);
                            r.push(e)
                        });
                        var a = _.RemodelUtil.calcPowerUpParams([i, n], r);
                        e.powerUpEdit.targetShipBox.update(e.targetShips), e._updatePowerUp_(i, n, a.karyoku, a.raiso, a.taiku, a.souko, a.lucky, a.checkBonusLucky, a.checkBonusTaikyu, a.checkBonusTaisen)
                    }, n.onComplete = function () {
                        n.dispose(), e.taskShipChoice = null
                    }, e.taskShipChoice = n, n.start(i, 0)
                }, this._onClickCancel = function () {
                    var t = f.UISettings.DIALOG_FADETIME;
                    e.clickGuardKindaika.width = n.default.width, o.default.view.clickGuard = !0, createjs.Tween.get(e.clickGuardKindaika).to({
                        alpha: 0
                    }, t), createjs.Tween.get(e.powerUpEdit).to({
                        x: n.default.width
                    }, t).call(function () {
                        o.default.view.clickGuard = !1, e.onComplete()
                    })
                }, this._onClickStart = function (t) {
                    e.clickGuardConfirm.alpha = 0, e.powerUpStartConfirm.alpha = 0, e.type = t;
                    var i = f.UISettings.DIALOG_FADETIME;
                    o.default.view.overLayer.addChild(e.clickGuardConfirm, e.powerUpStartConfirm), o.default.view.clickGuard = !0;
                    var n = o.default.model.ship.get(e.memShipId),
                        r = o.default.model.ship.getMst(n.mstID),
                        s = [];
                    e.targetShips.forEach(function (t) {
                        var e = o.default.model.ship.getMst(t.mstID);
                        s.push(e)
                    });
                    var a = _.RemodelUtil.calcPowerUpParams([n, r], s);
                    e.powerUpStartConfirm.update(n, e.targetShips, a), createjs.Tween.get(e.clickGuardConfirm).to({
                        alpha: 1
                    }, i), createjs.Tween.get(e.powerUpStartConfirm).to({
                        alpha: 1
                    }, i).call(function () {
                        e.mainView.visible = !1, o.default.view.clickGuard = !1
                    })
                }, this._onClickPowerUpStartYES = function () {
                    o.default.view.clickGuard = !0;
                    var t = o.default.model.ship.get(e.memShipId),
                        i = o.default.model.ship.getMst(t.mstID),
                        n = new Array;
                    e.targetShips.forEach(function (t) {
                        n.push(t.memID)
                    });
                    var r = new h.PowerUpAPI(e.memShipId, n, e.type);
                    o.default.sound.voice.playAtRandom(t.mstID.toString(), [9, 10], [50, 50]), r.start(function () {
                        e.powerUpEdit.shipInfoBox.update(t.shipTypeName, t.name, t.level, t.starNum), e.onUpdateShip();
                        var s, a = r.api_powerup_flag,
                            _ = n.length;
                        s = 1 == a ? new d.PowerUpAnimationSuccess(_, e.mainView) : new p.PowerUpAnimationFailed(_, e.mainView);
                        var u = t.mstID,
                            l = t.isDamaged(),
                            c = o.default.model.ship_graph.get(u).getCenterOffset(l);
                        s.preload(u, l, c, function () {
                            o.default.view.clickGuard = !1, o.default.view.overLayer.addChild(e.animationClickGuard, s), s.play(function () {
                                e.targetShips.length = 0, e.powerUpEdit.targetShipBox.update(e.targetShips), e._updatePowerUp_(t, i, 0, 0, 0, 0, 0, !1, !1, !1), o.default.view.overLayer.removeChild(e.clickGuardConfirm), o.default.view.overLayer.removeChild(e.powerUpStartConfirm)
                            }, function () {
                                s.dispose(), o.default.view.overLayer.removeChild(e.animationClickGuard), o.default.view.overLayer.removeChild(s), o.default.view.portMain.updateInfo()
                            })
                        })
                    })
                }, this._onClickPowerUpStartNO = function () {
                    var t = f.UISettings.DIALOG_FADETIME;
                    e.mainView.visible = !0, o.default.view.overLayer.addChild(e.clickGuardConfirm, e.powerUpStartConfirm), o.default.view.clickGuard = !0, createjs.Tween.get(e.clickGuardConfirm).to({
                        alpha: 0
                    }, t), createjs.Tween.get(e.powerUpStartConfirm).to({
                        alpha: 0
                    }, t).call(function () {
                        o.default.view.overLayer.removeChild(e.clickGuardConfirm), o.default.view.overLayer.removeChild(e.powerUpStartConfirm), o.default.view.clickGuard = !1
                    })
                }, this._onClickSlotIn = function (t) {
                    e.targetShips.splice(t, 1);
                    var i = o.default.model.ship.get(e.memShipId),
                        n = o.default.model.ship.getMst(i.mstID),
                        r = [];
                    e.targetShips.forEach(function (t) {
                        var e = o.default.model.ship.getMst(t.mstID);
                        r.push(e)
                    });
                    var s = _.RemodelUtil.calcPowerUpParams([i, n], r);
                    e.powerUpEdit.targetShipBox.update(e.targetShips), e._updatePowerUp_(i, n, s.karyoku, s.raiso, s.taiku, s.souko, s.lucky, s.checkBonusLucky, s.checkBonusTaikyu, s.checkBonusTaisen)
                }, this.mainView = t;
                this.clickGuardKindaika = new s.AreaBox(.5), this.clickGuardKindaika.height = n.default.height - 103, this.clickGuardKindaika.position.set(0, 103), this.clickGuardConfirm = new s.AreaBox(1), this.clickGuardConfirm.height = n.default.height, this.clickGuardConfirm.position.set(0, 0), this.animationClickGuard = new s.AreaBox(0), this.animationClickGuard.renderable = !1, this.powerUpStartConfirm = new l.PowerUpStartConfirm, this.powerUpEdit = new u.PowerUpEdit
            }
            return t.prototype.start = function (t) {
                var e = this;
                o.default.view.clickGuard = !0, a.SE.play("249"), this.targetShips = [];
                var i = o.default.model.ship.get(t),
                    r = o.default.model.ship.getMst(i.mstID);
                this.powerUpEdit.targetShipBox.onClickEmpty = this._onClickEmpty, this.powerUpEdit.targetShipBox.onClickSlotIn = this._onClickSlotIn, this.powerUpEdit.cancelButton.initialize(this._onClickCancel), this.powerUpEdit.startButtonSlotDest.onClick = this._onClickStart, this.powerUpEdit.startButtonSlotHokan.onClick = this._onClickStart, this.powerUpStartConfirm.onClickNO = this._onClickPowerUpStartNO, this.powerUpStartConfirm.onClickYES = this._onClickPowerUpStartYES, this.memShipId = t, this.powerUpEdit.shipInfoBox.update(i.shipTypeName, i.name, i.level, i.starNum), this._updatePowerUp_(i, r, 0, 0, 0, 0, 0, !1, !1, !1), this._updateShipFull_(i.mstID, i.isDamaged()), this.powerUpEdit.targetShipBox.update(this.targetShips), this.clickGuardKindaika.alpha = 0, this.powerUpEdit.position.set(n.default.width, 140), this.mainView.addChild(this.clickGuardKindaika, this.powerUpEdit);
                var s = f.UISettings.DIALOG_FADETIME;
                createjs.Tween.get(this.clickGuardKindaika).to({
                    alpha: 1
                }, s), createjs.Tween.get(this.powerUpEdit).to({
                    x: 174
                }, s).call(function () {
                    e.clickGuardKindaika.width = 212, o.default.view.clickGuard = !1
                })
            }, t.prototype.dispose = function () {
                this.taskShipChoice && this.taskShipChoice.dispose(), this.taskShipChoice = null, this.mainView.removeChild(this.clickGuardKindaika), this.mainView.removeChild(this.powerUpEdit), this._onClickEmpty = null, this._onClickSlotIn = null, this.onComplete = null, this.onUpdateShip = null, this.mainView = null, this.powerUpEdit && (this.powerUpEdit.containerShipFull.cacheAsBitmap = !1, this.powerUpEdit.dispose()), this.powerUpEdit = null, this.clickGuardKindaika = null, this.animationClickGuard = null, this.powerUpStartConfirm && this.powerUpStartConfirm.dispose(), this.powerUpStartConfirm = null, this.clickGuardConfirm = null, this.targetShips = null, this.memShipId = null, this.taskShipChoice && this.taskShipChoice.dispose(), this.taskShipChoice = null
            }, t.prototype._updatePowerUp_ = function (t, e, i, n, o, r, s, a, _, u) {
                var l = t.karyoku - (e.hougMin + t.gradeUpHoug),
                    c = t.raisou - (e.raigMin + t.gradeUpRaig),
                    h = t.taiku - (e.tykuMin + t.gradeUpTyku),
                    p = t.soukou - (e.soukMin + t.gradeUpSouk),
                    d = t.lucky - (e.luckMin + t.gradeUpLuck),
                    f = e.hougMax + l <= t.karyoku,
                    y = e.raigMax + c <= t.raisou,
                    m = e.tykuMax + h <= t.taiku,
                    g = e.soukMax + p <= t.soukou,
                    v = e.luckMax + d <= t.lucky,
                    b = Math.min(t.gradeUpHoug + e.hougMin + i, e.hougMax),
                    w = Math.min(t.gradeUpRaig + e.raigMin + n, e.raigMax),
                    x = Math.min(t.gradeUpTyku + e.tykuMin + o, e.tykuMax),
                    I = Math.min(t.gradeUpSouk + e.soukMin + r, e.soukMax),
                    T = Math.min(t.gradeUpLuck + e.luckMin + s, e.luckMax),
                    O = b + l,
                    C = w + c,
                    P = x + h,
                    k = I + p,
                    S = T + d;
                this.powerUpEdit.shipParameterChecker.clear(), this.powerUpEdit.shipParameterChecker.updateCommon(t.hpMax, t.kaihi, t.tousai, t.speed, t.range, t.taisen, t.sakuteki), this.powerUpEdit.shipParameterChecker.updateKaryoku(t.karyoku, O), this.powerUpEdit.shipParameterChecker.updateRaisou(t.raisou, C), this.powerUpEdit.shipParameterChecker.updateSoukou(t.soukou, k), this.powerUpEdit.shipParameterChecker.updateTaiku(t.taiku, P), this.powerUpEdit.karyokuBeforeAfterConfirm.update(t.karyoku, O, f), this.powerUpEdit.raisouBeforeAfterConfirm.update(t.raisou, C, y), this.powerUpEdit.soukouBeforeAfterConfirm.update(t.soukou, k, g), this.powerUpEdit.taikuBeforeAfterConfirm.update(t.taiku, P, m), this.powerUpEdit.SetPos_karyokuBeforeAfterConfirm(f), this.powerUpEdit.SetPos_raisouBeforeAfterConfirm(y), this.powerUpEdit.SetPos_soukouBeforeAfterConfirm(g), this.powerUpEdit.SetPos_taikuBeforeAfterConfirm(m), this.powerUpEdit.shipParameterChecker.updateLucky(t.lucky, S, a), this.powerUpEdit.shipParameterChecker.updateTaikyu(t.taikyu, _), this.powerUpEdit.shipParameterChecker.updateTaisen(t.taisen, u);
                var M = [a, _, u].some(function (t) {
                        return 1 == t
                    }),
                    A = [f, y, m, g, v].some(function (t) {
                        return 0 == t
                    }),
                    E = !1;
                (A || M) && (O > t.karyoku || C > t.raisou || P > t.taiku || k > t.soukou || S > t.lucky || M) && (E = !0), this.powerUpEdit.startButtonSlotDest.update(E), this.powerUpEdit.startButtonSlotHokan.update(E)
            }, t.prototype._updateShipFull_ = function (t, e) {
                this.powerUpEdit.containerShipFull.cacheAsBitmap = !1, r.TaskLoadShipResource.abortBy(this.powerUpEdit.shipFull);
                var i = new PIXI.Point(-173, -139),
                    n = o.default.model.ship_graph.get(t).getRemodelPowupUIOffset(e),
                    s = n.x + (e ? 51 : 75) + i.x,
                    a = n.y + (e ? 95 : 110) + i.y;
                if (this.powerUpEdit.shipFull.position.set(s, a), 1 == o.default.resources.isLoadedShip(t, e, "character_full")) this.powerUpEdit.shipFull.texture = o.default.resources.getShip(t, e, "character_full"), this.powerUpEdit.containerShipFull.cacheAsBitmap = !0;
                else {
                    this.powerUpEdit.shipFull.texture = PIXI.Texture.EMPTY;
                    new r.TaskLoadShipResource("character_full", this.powerUpEdit.shipFull, t, e).start()
                }
            }, t
        }();
    e.TaskKindaika = y
}