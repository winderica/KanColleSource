const function812 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(5),
        o = i(0),
        r = i(37),
        s = i(31),
        a = i(165),
        _ = i(125),
        l = i(8),
        u = i(3),
        c = i(87),
        h = i(813),
        p = i(162),
        d = i(814),
        f = i(815),
        y = i(820),
        m = i(821),
        v = i(49),
        g = function () {
            function t(t) {
                var e = this;
                this._onCancel = function () {
                    e._clickGuard = new l.AreaBox(0), o.default.view.overLayer.addChild(e._clickGuard);
                    var t = v.UISettings.DIALOG_FADETIME;
                    e._kaizoDetailBG.width = n.default.width, createjs.Tween.get(e._kaizoDetailBG).to({
                        alpha: 0
                    }, t), createjs.Tween.get(e._kaizoDetail).to({
                        x: n.default.width
                    }, t).call(function () {
                        r.TaskLoadShipResource.abortBy(e._kaizoDetail), e._container.removeChild(e._kaizoDetailBG), e._container.removeChild(e._kaizoDetail), o.default.view.overLayer.removeChild(e._clickGuard), e._clickGuard = null, null != e._cb_onComplete && e._cb_onComplete()
                    })
                }, this._onStart = function () {
                    var t = v.UISettings.DIALOG_FADETIME;
                    e._kaizoConfirmBG = new l.AreaBox(1), e._kaizoConfirmBG.alpha = 0, e._kaizoConfirm = new y.KaizoConfirm, e._kaizoConfirm.activate(e._onConfirmYES, e._onConfirmNo);
                    var i = o.default.model.ship.get(e._ship_memid),
                        n = o.default.model.ship_upgrade.getRequires(i.mstID);
                    e._kaizoConfirm.update(i, n.ammo, n.steel), e._kaizoConfirm.alpha = 0, o.default.view.overLayer.addChild(e._kaizoConfirmBG), o.default.view.overLayer.addChild(e._kaizoConfirm), e._clickGuard = new l.AreaBox(0), o.default.view.overLayer.addChild(e._clickGuard), u.SE.play("106"), createjs.Tween.get(e._kaizoConfirmBG).to({
                        alpha: 1
                    }, t), createjs.Tween.get(e._kaizoConfirm).to({
                        alpha: 1
                    }, t).call(function () {
                        o.default.view.overLayer.removeChild(e._clickGuard), e._container.visible = !1, e._clickGuard = null
                    })
                }, this._onConfirmNo = function () {
                    var t = v.UISettings.DIALOG_FADETIME;
                    e._container.visible = !0, e._clickGuard = new l.AreaBox(0), o.default.view.overLayer.addChild(e._clickGuard), createjs.Tween.get(e._kaizoConfirmBG).to({
                        alpha: 0
                    }, t), createjs.Tween.get(e._kaizoConfirm).to({
                        alpha: 0
                    }, t).call(function () {
                        o.default.view.overLayer.removeChild(e._kaizoConfirmBG), o.default.view.overLayer.removeChild(e._kaizoConfirm), o.default.view.overLayer.removeChild(e._clickGuard), e._clickGuard = null
                    })
                }, this._onConfirmYES = function () {
                    e._clickGuard = new l.AreaBox(0), o.default.view.overLayer.addChild(e._clickGuard), u.SE.play("215"), (new s.APIConnector).add(new h.RemodelingAPI(e._ship_memid)).add(new p.Ship3API(e._ship_memid)).add(new a.MaterialAPI).add(new _.UserSlotItemAPI).start(e._onCompleteAPI)
                }, this._onCompleteAPI = function () {
                    var t = new m.KaizoAnimationMain,
                        i = o.default.model.ship.get(e._ship_memid),
                        n = i.mstID,
                        r = i.isDamaged(),
                        s = o.default.model.ship_graph.get(n).getCenterOffset(r);
                    t.preload(n, r, s, function () {
                        e._onCompleteResources(t)
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
                    var p = v.UISettings.DIALOG_FADETIME;
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
            }, t.prototype.dispose = function () {
                this._container = null, this._kaizoDetailBG = null, this._kaizoDetail.dispose(), this._kaizoDetail = null, null != this._kaizoConfirm && (this._kaizoConfirm.dispose(), this._kaizoConfirm = null), this._cb_onUpdateShip = null, this._cb_onComplete = null, this._clickGuard = null
            }, t
        }();
    e.TaskKaizo = g
}