const function931 = function (t, e, i) {
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
        s = i(1),
        a = i(2),
        _ = i(32),
        l = i(8),
        u = i(18),
        c = i(6),
        h = i(932),
        p = i(933),
        d = i(934),
        f = i(935),
        y = i(936),
        m = i(355),
        g = i(953),
        v = i(955),
        b = i(957),
        w = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._clickGuard = null, n._onCancel = function (t) {
                    if (null == n._t)
                        if (null != n._list) n._closeList();
                        else if (null != n._supply) n._closeSupply();
                    else {
                        var e = t.data.global,
                            i = n._panel.getBounds();
                        if (1 == i.contains(e.x, e.y)) return;
                        n._cancel_area.buttonMode = !1, n._cancel_area.off(s.EventType.CLICK, n._onCancel), n._closePanel()
                    }
                }, n._onDrop = function (t, e, i) {
                    if (-1 == i) {
                        var o = n._area_id,
                            s = new h.AirUnitEditAPI(o, t, e, -1);
                        s.start(function () {
                            n._panel.update(t, !0)
                        })
                    } else if (e == i) n._openList(t, e);
                    else {
                        var o = n._area_id,
                            a = r.default.model.airunit.getAirUnit(o, t),
                            _ = a.squadrons[e],
                            l = a.squadrons[i];
                        if (null != l && 2 == l.state) return;
                        var s = new h.AirUnitEditAPI(o, t, i, _.mem_id);
                        s.start(function () {
                            n._panel.update(t, !0)
                        })
                    }
                }, n._onSelectListItem = function (t) {
                    if (null == n._task_comfirm) {
                        var e = n._area_id,
                            i = n._selected_airunit_id,
                            o = n._selected_index;
                        n._task_comfirm = new v.TaskShowAirUnitChangeConfirm(n._layer, e, i, o, t), n._task_comfirm.start(function () {
                            if (null != n._task_comfirm && 1 == n._task_comfirm.result) {
                                n._closeList();
                                new h.AirUnitEditAPI(e, i, o, t.memID).start(function () {
                                    n._panel.update(i, !0)
                                })
                            }
                            n._task_comfirm = null
                        })
                    }
                }, n._onReadySupply = function (t) {
                    var e = n._panel.selected_airunit_id;
                    n._openSupply(e, t)
                }, n._onPreSupply = function () {
                    null == n._clickGuard && (n._clickGuard = new l.AreaBox(0), r.default.view.overLayer.addChild(n._clickGuard))
                }, n._onSupply = function (t, e, i) {
                    if (null == i || 0 == i.length) return null !== n._clickGuard && (r.default.view.overLayer.removeChild(n._clickGuard), n._clickGuard = null), void n._closeSupply();
                    n._t = createjs.Tween.get(null), n._supply.playSupplyAnimation(function () {
                        r.default.view.overLayer.removeChild(n._clickGuard), n._clickGuard = null, n._t = null, n._closeSupply()
                    }), new p.AirUnitSupplyAPI(t, e, i).start(function () {
                        n._panel.update(e, !0)
                    })
                }, n._onExtend = function () {
                    n._panel.deactivate();
                    var t = r.default.view.overLayer;
                    new b.TaskExtendAirUnit(t, n._area_id, n._onUpdateInExtendAnimarion).start(function () {
                        n._panel.activate()
                    })
                }, n._onUpdateInExtendAnimarion = function () {
                    var t = r.default.model.airunit.getAirUnitList(n._area_id);
                    n._panel.updateAfterExtend(t)
                }, n._recordCurrentCategory = function (t) {
                    n._currentCategory = t
                }, n._layer = e, n._area_id = i, n._currentCategory = 0, n
            }
            return n(e, t), e.prototype.dispose = function () {
                var t = this;
                if (null != this._t && (this._t.setPaused(!0), this._t = null), null != this._task_comfirm && (this._task_comfirm.cancel(), this._task_comfirm = null), null != this._supply && (this._supply.deactivate(), this._supply.dispose(), this._supply = null), null != this._list && (this._list.deactivate(), this._list.dispose(), this._list = null), null != this._panel) {
                    this._panel.deactivate(), this._panel.updateTemporaryData(), this._panel.dispose(), this._panel = null;
                    this._createUpdateAPI().start(function () {
                        t._endTask()
                    })
                } else this._endTask()
            }, e.prototype._createUpdateAPI = function () {
                for (var t = [], e = [], i = new _.APIConnector, n = r.default.model.airunit.getAirUnitList(this._area_id), o = 0, s = n; o < s.length; o++) {
                    var a = s[o];
                    1 == a.updateNameFromTemporaryInfo() && i.add(new f.AirUnitChangeNameAPI(this._area_id, a.id, a.name));
                    1 == a.updateStateFromTemporaryInfo() && (t.push(a.id), e.push(a.airUnitState))
                }
                return t.length > 0 && i.add(new d.AirUnitChangeActionStateAPI(this._area_id, t, e)), i
            }, e.prototype._start = function () {
                this._cancel_area = new u.FadeBox(.2), this._layer.addChild(this._cancel_area), this._openPanel()
            }, e.prototype._openPanel = function () {
                var t = this,
                    e = this._area_id,
                    i = r.default.model.airunit.getAirUnitList(e);
                this._panel = new y.AirUnitPanel(this._onDrop, this._onReadySupply, this._onExtend), this._panel.initialize(e, i), this._panel.position.set(203, o.default.height), this._layer.addChild(this._panel), createjs.Tween.get(this._panel).to({
                    y: 164
                }, 200, createjs.Ease.cubicOut).wait(100).call(function () {
                    c.SE.play("219")
                }).to({
                    x: 849
                }, 200, createjs.Ease.backOut).call(function () {
                    t._panel.activate(), t._cancel_area.buttonMode = !0, t._cancel_area.on(s.EventType.CLICK, t._onCancel), t._pre_bgm_id = r.default.sound.bgm.bgm_id, r.default.sound.bgm.play(125)
                })
            }, e.prototype._closePanel = function () {
                var t = this;
                if (null != this._panel) {
                    this._panel.deactivate(), this._panel.updateTemporaryData(), this._t = createjs.Tween.get(this._panel), this._t.to({
                        y: o.default.height
                    }, 300), this._t.call(function () {
                        t._t = null, t._panel.parent.removeChild(t._panel), t._panel.dispose(), t._cancel_area.parent.removeChild(t._cancel_area), t._endTask()
                    }), this._t.setPaused(!0);
                    this._createUpdateAPI().start(function () {
                        r.default.sound.bgm.play(t._pre_bgm_id), t._t.setPaused(!1)
                    })
                }
            }, e.prototype._openList = function (t, e) {
                var i = this;
                null != this._panel && null == this._list && null == this._t && (this._selected_airunit_id = t, this._selected_index = e, this._layer.addChild(this._cancel_area), this._panel.deactivate(), this._list = new m.AirUnitList(this._onSelectListItem, this._recordCurrentCategory), this._list.x = o.default.width, this._list.y = 147, this._list.initialize(this._currentCategory), this._layer.addChild(this._list), createjs.Tween.get(this._panel).to({
                    x: 126
                }, 300), this._t = createjs.Tween.get(this._list).to({
                    x: 473
                }, 300).call(function () {
                    i._t = null, i._list.activate()
                }))
            }, e.prototype._closeList = function () {
                var t = this;
                null != this._list && null == this._t && (this._list.deactivate(), createjs.Tween.get(this._panel).to({
                    x: 849
                }, 300).call(function () {
                    t._panel.activate()
                }), this._t = createjs.Tween.get(this._list).to({
                    x: o.default.width
                }, 300).call(function () {
                    t._t = null, t._layer.removeChild(t._list), t._list.dispose(), t._list = null, t._layer.addChild(t._panel)
                }))
            }, e.prototype._openSupply = function (t, e) {
                var i = this;
                if (null != this._panel && null == this._list && null == this._supply && null == this._t) {
                    var n = r.default.model.airunit.getAirUnit(this._area_id, t),
                        s = null;
                    e >= 0 && (s = n.squadrons[e]), this._layer.addChild(this._cancel_area), this._panel.deactivate();
                    var a = r.default.model.useItem.getCount(31),
                        _ = r.default.model.useItem.getCount(34);
                    this._supply = new g.AirUnitSupplyPanel(this._onSupply, this._onPreSupply), this._supply.x = o.default.width + 75, this._supply.y = 144, this._supply.initialize(a, _, n, s), this._layer.addChild(this._supply), null == s && this._onPreSupply(), createjs.Tween.get(this._panel).to({
                        x: 468
                    }, 300), this._t = createjs.Tween.get(this._supply).to({
                        x: 899
                    }, 300).call(function () {
                        i._t = null, null == s ? i._supply.autoPlaySupplyAll() : i._supply.activate()
                    })
                }
            }, e.prototype._closeSupply = function () {
                var t = this;
                null != this._supply && null == this._t && (this._supply.deactivate(), createjs.Tween.get(this._panel).to({
                    x: 849
                }, 300).call(function () {
                    t._panel.activate()
                }), this._t = createjs.Tween.get(this._supply).to({
                    x: o.default.width + 75
                }, 300).call(function () {
                    t._t = null, t._layer.removeChild(t._supply), t._supply.dispose(), t._supply = null, t._layer.addChild(t._panel)
                }))
            }, e.prototype._endTask = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null), t.prototype._endTask.call(this)
            }, e
        }(a.TaskBase);
    e.TaskShowAirUnitPanel = w
}