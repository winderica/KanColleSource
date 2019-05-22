const function807 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(5),
        o = i(0),
        r = i(37),
        s = i(31),
        a = i(167),
        _ = i(126),
        l = i(8),
        u = i(3),
        c = i(87),
        h = i(808),
        p = i(166),
        d = i(809),
        f = i(810),
        y = i(815),
        m = i(816),
        v = i(817),
        g = i(819),
        b = i(820),
        w = i(50),
        x = i(14),
        I = function () {
            function t(t) {
                var e = this;
                this._onCancel = function () {
                    e._clickGuard = new l.AreaBox(0), o.default.view.overLayer.addChild(e._clickGuard);
                    var t = w.UISettings.DIALOG_FADETIME;
                    e._kaizoDetailBG.width = n.default.width, createjs.Tween.get(e._kaizoDetailBG).to({
                        alpha: 0
                    }, t), createjs.Tween.get(e._kaizoDetail).to({
                        x: n.default.width
                    }, t).call(function () {
                        r.TaskLoadShipResource.abortBy(e._kaizoDetail), e._container.removeChild(e._kaizoDetailBG), e._container.removeChild(e._kaizoDetail), o.default.view.overLayer.removeChild(e._clickGuard), e._clickGuard = null, null != e._cb_onComplete && e._cb_onComplete()
                    })
                }, this._onStart = function () {
                    var t = o.default.model.ship.get(e._ship_memid);
                    if (c.RemodelUtil.isSpKaizo(t.mstID)) {
                        var i = new x.UIImageLoader("common");
                        i.add("system_bg5.png", "sp_kaizo_frame"), i.load(function () {
                            var i = o.default.model.ship_upgrade.getNextID(t.mstID);
                            e._spKaizoConfirm = new m.SpKaizoConfirm, e._spKaizoConfirm.activate(e._onSpConfirmYES, e._onSpConfirmNo), e._spKaizoConfirm.visible = !1, o.default.view.overLayer.addChild(e._spKaizoConfirm), e._spKaizoIntro = new g.SpKaizoIntro, e._spKaizoIntro.play([t.mstID, i], function () {
                                e._spKaizoConfirm.visible = !0;
                                var i = o.default.model.ship_upgrade.getRequires(t.mstID),
                                    n = e._setRequireObjects(i);
                                e._spKaizoConfirm.update(t, n)
                            }, function () {
                                e._spKaizoIntro.visible = !1, o.default.view.overLayer.removeChild(e._clickGuard), e._clickGuard = null
                            }), o.default.view.overLayer.addChild(e._spKaizoIntro), e._clickGuard = new l.AreaBox(0), o.default.view.overLayer.addChild(e._clickGuard), u.SE.play("106")
                        })
                    } else {
                        var n = w.UISettings.DIALOG_FADETIME;
                        e._kaizoConfirmBG = new l.AreaBox(1), e._kaizoConfirmBG.alpha = 0, e._kaizoConfirm = new y.KaizoConfirm, e._kaizoConfirm.activate(e._onConfirmYES, e._onConfirmNo);
                        var r = o.default.model.ship_upgrade.getRequires(t.mstID);
                        e._kaizoConfirm.update(t, r.ammo, r.steel), e._kaizoConfirm.alpha = 0, o.default.view.overLayer.addChild(e._kaizoConfirmBG), o.default.view.overLayer.addChild(e._kaizoConfirm), e._clickGuard = new l.AreaBox(0), o.default.view.overLayer.addChild(e._clickGuard), u.SE.play("106"), createjs.Tween.get(e._kaizoConfirmBG).to({
                            alpha: 1
                        }, n), createjs.Tween.get(e._kaizoConfirm).to({
                            alpha: 1
                        }, n).call(function () {
                            o.default.view.overLayer.removeChild(e._clickGuard), e._container.visible = !1, e._clickGuard = null
                        })
                    }
                }, this._onConfirmNo = function () {
                    var t = w.UISettings.DIALOG_FADETIME;
                    e._container.visible = !0, e._clickGuard = new l.AreaBox(0), o.default.view.overLayer.addChild(e._clickGuard), createjs.Tween.get(e._kaizoConfirmBG).to({
                        alpha: 0
                    }, t), createjs.Tween.get(e._kaizoConfirm).to({
                        alpha: 0
                    }, t).call(function () {
                        o.default.view.overLayer.removeChild(e._kaizoConfirmBG), o.default.view.overLayer.removeChild(e._kaizoConfirm), o.default.view.overLayer.removeChild(e._clickGuard), e._clickGuard = null
                    })
                }, this._onSpConfirmNo = function () {
                    var t = w.UISettings.DIALOG_FADETIME;
                    e._container.visible = !0, e._clickGuard = new l.AreaBox(0), o.default.view.overLayer.addChild(e._clickGuard), createjs.Tween.get(e._spKaizoConfirm).to({
                        alpha: 0
                    }, t).call(function () {
                        o.default.view.overLayer.removeChild(e._spKaizoConfirm), o.default.view.overLayer.removeChild(e._spKaizoIntro), e._spKaizoConfirm.dispose(), e._spKaizoIntro.dispose(), o.default.view.overLayer.removeChild(e._clickGuard), e._clickGuard = null
                    })
                }, this._onConfirmYES = function () {
                    e._clickGuard = new l.AreaBox(0), o.default.view.overLayer.addChild(e._clickGuard), u.SE.play("215"), (new s.APIConnector).add(new h.RemodelingAPI(e._ship_memid)).add(new p.Ship3API(e._ship_memid)).add(new a.MaterialAPI).add(new _.UserSlotItemAPI).start(e._onCompleteAPI)
                }, this._onSpConfirmYES = function () {
                    e._clickGuard = new l.AreaBox(0), o.default.view.overLayer.addChild(e._clickGuard), u.SE.play("215"), (new s.APIConnector).add(new h.RemodelingAPI(e._ship_memid)).add(new p.Ship3API(e._ship_memid)).add(new a.MaterialAPI).add(new _.UserSlotItemAPI).start(e._onSpCompleteAPI)
                }, this._onCompleteAPI = function () {
                    var t = new v.KaizoAnimationMain,
                        i = o.default.model.ship.get(e._ship_memid),
                        n = i.mstID,
                        r = i.isDamaged(),
                        s = o.default.model.ship_graph.get(n).getCenterOffset(r);
                    t.preload(n, r, s, function () {
                        e._onCompleteResources(t)
                    })
                }, this._onSpCompleteAPI = function () {
                    null != e._cb_onUpdateShip && e._cb_onUpdateShip(), e._container.removeChild(e._kaizoDetailBG), e._container.removeChild(e._kaizoDetail), o.default.view.overLayer.removeChild(e._spKaizoConfirm), o.default.view.overLayer.removeChild(e._spKaizoIntro), e._spKaizoConfirm.dispose(), e._spKaizoIntro.dispose();
                    var t = new b.SpKaizoAnimation,
                        i = o.default.model.ship.get(e._ship_memid),
                        n = i.mstID;
                    o.default.view.overLayer.addChild(t), t.play(n, function () {
                        o.default.view.overLayer.removeChild(t), t.dispose(), o.default.view.portMain.updateInfo(), o.default.view.overLayer.removeChild(e._clickGuard), e._clickGuard = null, e._container.visible = !0, null != e._cb_onComplete && e._cb_onComplete()
                    })
                }, this._container = t
            }
            return t.prototype.start = function (t, e, i) {
                var r = this;
                if (null == this._kaizoDetail) {
                    this._ship_memid = t, this._cb_onUpdateShip = e, this._cb_onComplete = i, this._kaizoDetailBG = new l.AreaBox(.5), this._kaizoDetailBG.alpha = 0, this._container.addChild(this._kaizoDetailBG), this._kaizoDetail = new f.KaizoDetail;
                    var s = o.default.model.ship.get(t),
                        a = o.default.model.ship_upgrade.getRequires(s.mstID),
                        _ = new d.KaizoValidateModel(a),
                        u = c.RemodelUtil.canKaizo(s.mstID, s.level),
                        h = !0;
                    o.default.model.basic.slotMax - o.default.model.slot.num < 4 && (h = !1), this._kaizoDetail.update(s, _, u, h), this._kaizoDetail.position.set(n.default.width, 143), this._kaizoDetail.activate(this._onStart, this._onCancel), this._container.addChild(this._kaizoDetail), this._clickGuard = new l.AreaBox(0), o.default.view.overLayer.addChild(this._clickGuard);
                    var p = w.UISettings.DIALOG_FADETIME;
                    createjs.Tween.get(this._kaizoDetailBG).to({
                        alpha: 1
                    }, p), createjs.Tween.get(this._kaizoDetail).to({
                        x: 204
                    }, p).call(function () {
                        r._kaizoDetailBG.width = 240, o.default.view.overLayer.removeChild(r._clickGuard), r._clickGuard = null
                    })
                }
            }, t.prototype._onCompleteResources = function (t) {
                var e = this;
                null != this._cb_onUpdateShip && this._cb_onUpdateShip(), this._container.removeChild(this._kaizoDetailBG), this._container.removeChild(this._kaizoDetail), o.default.view.overLayer.removeChild(this._kaizoConfirmBG), o.default.view.overLayer.removeChild(this._kaizoConfirm), o.default.view.overLayer.addChild(t), t.play(function () {
                    o.default.view.portMain.updateInfo(), o.default.view.overLayer.removeChild(e._clickGuard), e._clickGuard = null, o.default.view.overLayer.removeChild(t), t.dispose(), e._container.visible = !0, null != e._cb_onComplete && e._cb_onComplete()
                })
            }, t.prototype._setRequireObjects = function (t) {
                var e = [];
                return t.ammo > 0 && e.push({
                    id: 32,
                    count: "\xd7" + t.ammo
                }), t.steel > 0 && e.push({
                    id: 33,
                    count: "\xd7" + t.steel
                }), t.devkit > 0 && e.push({
                    id: 3,
                    count: "\xd7" + t.devkit
                }), t.buildkit > 0 && e.push({
                    id: 2,
                    count: "\xd7" + t.buildkit
                }), t.newhokohesosizai > 0 && e.push({
                    id: 75,
                    count: "\xd7" + t.newhokohesosizai
                }), t.newkokuhesosizai > 0 && e.push({
                    id: 77,
                    count: "\xd7" + t.newkokuhesosizai
                }), t.battlereport > 0 && e.push({
                    id: 78,
                    count: "\xd7" + t.battlereport
                }), t.catapult > 0 && e.push({
                    id: 65,
                    count: "\xd7" + t.catapult
                }), t.blueprint > 0 && e.push({
                    id: 58,
                    count: "\xd7" + t.blueprint + "\u679a"
                }), e
            }, t.prototype.dispose = function () {
                this._container = null, this._kaizoDetailBG = null, this._kaizoDetail.dispose(), this._kaizoDetail = null, null != this._kaizoConfirm && (this._kaizoConfirm.dispose(), this._kaizoConfirm = null), this._cb_onUpdateShip = null, this._cb_onComplete = null, this._clickGuard = null
            }, t
        }();
    e.TaskKaizo = I
}