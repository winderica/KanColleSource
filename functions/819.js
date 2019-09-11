const function819 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(5),
        o = i(0),
        r = i(37),
        s = i(34),
        a = i(167),
        _ = i(128),
        l = i(8),
        u = i(3),
        c = i(89),
        h = i(820),
        p = i(166),
        d = i(821),
        f = i(822),
        y = i(827),
        m = i(828),
        g = i(829),
        v = i(831),
        b = i(49),
        w = i(14),
        x = i(832),
        I = i(834),
        T = function () {
            function t(t) {
                var e = this;
                this._onCancel = function () {
                    e._clickGuard = new l.AreaBox(0), o.default.view.overLayer.addChild(e._clickGuard);
                    var t = b.UISettings.DIALOG_FADETIME;
                    e._kaizoDetailBG.width = n.default.width, createjs.Tween.get(e._kaizoDetailBG).to({
                        alpha: 0
                    }, t), createjs.Tween.get(e._kaizoDetail).to({
                        x: n.default.width
                    }, t).call(function () {
                        r.TaskLoadShipResource.abortBy(e._kaizoDetail), e._container.removeChild(e._kaizoDetailBG), e._container.removeChild(e._kaizoDetail), o.default.view.overLayer.removeChild(e._clickGuard), e._clickGuard = null, null != e._cb_onComplete && e._cb_onComplete()
                    })
                }, this._onStart = function () {
                    var t = o.default.model.ship.get(e._ship_memid),
                        i = o.default.model.ship_upgrade.getNextID(t.mstID);
                    if (c.RemodelUtil.isSpKaizo(t.mstID)) {
                        var n = new w.UIImageLoader("common");
                        n.add("system_bg5.png", "sp_kaizo_frame"), n.load(function () {
                            e._spKaizoConfirm = new m.SpKaizoConfirm, e._spKaizoConfirm.activate(e._onSpConfirmYES, e._onSpConfirmNo), e._spKaizoConfirm.visible = !1, o.default.view.overLayer.addChild(e._spKaizoConfirm), e._spKaizoIntro = new v.SpKaizoIntro, e._spKaizoIntro.play([t.mstID, i], function () {
                                e._spKaizoConfirm.visible = !0;
                                var i = o.default.model.ship_upgrade.getRequires(t.mstID),
                                    n = e._setRequireObjects(i);
                                e._spKaizoConfirm.update(t, n)
                            }, function () {
                                e._spKaizoIntro.visible = !1, o.default.view.overLayer.removeChild(e._clickGuard), e._clickGuard = null
                            }), o.default.view.overLayer.addChild(e._spKaizoIntro), e._clickGuard = new l.AreaBox(0), o.default.view.overLayer.addChild(e._clickGuard), u.SE.play("106")
                        })
                    } else {
                        var r = b.UISettings.DIALOG_FADETIME;
                        e._kaizoConfirmBG = new l.AreaBox(1), e._kaizoConfirmBG.alpha = 0, e._kaizoConfirm = new y.KaizoConfirm, e._kaizoConfirm.activate(e._onConfirmYES, e._onConfirmNo);
                        var s = o.default.model.ship_upgrade.getRequires(t.mstID);
                        e._kaizoConfirm.update(t, s.ammo, s.steel), e._kaizoConfirm.alpha = 0, o.default.view.overLayer.addChild(e._kaizoConfirmBG), o.default.view.overLayer.addChild(e._kaizoConfirm), e._clickGuard = new l.AreaBox(0), o.default.view.overLayer.addChild(e._clickGuard), u.SE.play("106"), createjs.Tween.get(e._kaizoConfirmBG).to({
                            alpha: 1
                        }, r), createjs.Tween.get(e._kaizoConfirm).to({
                            alpha: 1
                        }, r).call(function () {
                            o.default.view.overLayer.removeChild(e._clickGuard), e._container.visible = !1, e._clickGuard = null
                        })
                    }
                }, this._onConfirmNo = function () {
                    var t = b.UISettings.DIALOG_FADETIME;
                    e._container.visible = !0, e._clickGuard = new l.AreaBox(0), o.default.view.overLayer.addChild(e._clickGuard), createjs.Tween.get(e._kaizoConfirmBG).to({
                        alpha: 0
                    }, t), createjs.Tween.get(e._kaizoConfirm).to({
                        alpha: 0
                    }, t).call(function () {
                        o.default.view.overLayer.removeChild(e._kaizoConfirmBG), o.default.view.overLayer.removeChild(e._kaizoConfirm), o.default.view.overLayer.removeChild(e._clickGuard), e._clickGuard = null
                    })
                }, this._onSpConfirmNo = function () {
                    var t = b.UISettings.DIALOG_FADETIME;
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
                    var t = new g.KaizoAnimationMain,
                        i = o.default.model.ship.get(e._ship_memid),
                        n = i.mstID,
                        r = i.isDamaged(),
                        s = o.default.model.ship_graph.get(n).getCenterOffset(r);
                    t.preload(n, r, s, function () {
                        e._onCompleteResources(t)
                    })
                }, this._onSpCompleteAPI = function () {
                    var t = o.default.model.ship.get(e._ship_memid),
                        i = t.mstID,
                        n = new I.SpecialRemodelStartInitializer(i);
                    n.onComplete = function () {
                        n.dispose(), e._onCompleteResourceLoad()
                    }, n.start()
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
                    var p = b.UISettings.DIALOG_FADETIME;
                    createjs.Tween.get(this._kaizoDetailBG).to({
                        alpha: 1
                    }, p), createjs.Tween.get(this._kaizoDetail).to({
                        x: 204
                    }, p).call(function () {
                        r._kaizoDetailBG.width = 240, o.default.view.overLayer.removeChild(r._clickGuard), r._clickGuard = null
                    })
                }
            }, t.prototype._onCompleteResourceLoad = function () {
                var t = this;
                null != this._cb_onUpdateShip && this._cb_onUpdateShip(), this._container.removeChild(this._kaizoDetailBG), this._container.removeChild(this._kaizoDetail), o.default.view.overLayer.removeChild(this._spKaizoConfirm), o.default.view.overLayer.removeChild(this._spKaizoIntro), this._spKaizoConfirm.dispose(), this._spKaizoIntro.dispose();
                var e = o.default.model.ship.get(this._ship_memid),
                    i = e.mstID,
                    n = new x.SpecialRemodelStartStage(o.default.resources.getUIImage("vignette_frame"), o.default.resources.getShip(i, !1, "full_x2"), o.default.resources.getShip(i, !1, "text_class"), o.default.resources.getShip(i, !1, "text_name"));
                o.default.view.overLayer.addChild(n);
                var r = this._genAnimationKeys(i),
                    s = new I.SpecialRemodelStart(i, n, r);
                s.onComplete = function () {
                    o.default.view.overLayer.removeChild(n), s.dispose(), n.dispose(), o.default.view.portMain.updateInfo(), o.default.view.overLayer.removeChild(t._clickGuard), t._clickGuard = null
                }, s.play()
            }, t.prototype._genAnimationKeys = function (t) {
                switch (t) {
                    case 591:
                        return [{
                                type: 2,
                                position: {
                                    x: 1139.72,
                                    y: 571.86
                                },
                                scale: 1.95,
                                alpha: 1
                            }, {
                                type: 2,
                                position: {
                                    x: 1520.31,
                                    y: 382.35
                                },
                                scale: 1.2,
                                duration: 1e3,
                                easing: 23
                            }, {
                                type: 1,
                                duration: 266.6
                            }, {
                                type: 2,
                                position: {
                                    x: 197.51,
                                    y: -601.3100000000001
                                },
                                scale: 1.12
                            }, {
                                type: 2,
                                position: {
                                    x: 373.59000000000003,
                                    y: -109.56
                                },
                                scale: 1.53,
                                duration: 1e3,
                                easing: 23
                            }, {
                                type: 1,
                                duration: 266.6
                            }, {
                                type: 2,
                                position: {
                                    x: 377.89,
                                    y: 991.62
                                },
                                scale: 1.6400000000000001
                            }, {
                                type: 2,
                                position: {
                                    x: 19.650000000000002,
                                    y: 588.19
                                },
                                scale: .76,
                                duration: 1e3,
                                easing: 23
                            }, {
                                type: 1,
                                duration: 366.6
                            }, {
                                type: 2,
                                position: {
                                    x: 1343.45,
                                    y: 1086.55
                                },
                                scale: 1.81
                            }, {
                                type: 2,
                                position: {
                                    x: 1642.73,
                                    y: 1378.14
                                },
                                scale: 2.5500000000000003,
                                duration: 366.6,
                                easing: 9
                            }, {
                                type: 2,
                                position: {
                                    x: -418.49,
                                    y: 2637.33
                                },
                                scale: 2.5500000000000003,
                                duration: 766.6,
                                easing: 21
                            }, {
                                type: 2,
                                position: {
                                    x: -508.41,
                                    y: 2918.19
                                },
                                scale: 2.86,
                                alpha: 1,
                                duration: 133.3,
                                easing: 21
                            },
                            [{
                                type: 2,
                                position: {
                                    x: 638.62,
                                    y: 1081.06
                                },
                                scale: 1.04
                            }, {
                                type: 3,
                                position: {
                                    x: 12,
                                    y: 12
                                },
                                alpha: 1
                            }, {
                                type: 4,
                                position: {
                                    x: 12,
                                    y: 488
                                },
                                alpha: 1
                            }, {
                                type: 6
                            }], {
                                type: 2,
                                position: {
                                    x: 632.7,
                                    y: 1031.75
                                },
                                scale: .87,
                                duration: 1500,
                                easing: 9
                            }
                        ];
                    case 594:
                        return [{
                                type: 2,
                                position: {
                                    x: 787.58,
                                    y: 323.13
                                },
                                scale: 2.45,
                                alpha: 1,
                                easing: 0
                            }, {
                                type: 2,
                                position: {
                                    x: 809.33,
                                    y: -1038.46
                                },
                                scale: 1.6300000000000001,
                                duration: 1100,
                                easing: 23
                            }, {
                                type: 1,
                                duration: .2666
                            }, {
                                type: 2,
                                position: {
                                    x: -269.77,
                                    y: -778.12
                                },
                                scale: 1.3900000000000001,
                                easing: 23
                            }, {
                                type: 2,
                                position: {
                                    x: 243.54,
                                    y: 427.74
                                },
                                scale: 1.18,
                                duration: 2660,
                                easing: 23
                            }, {
                                type: 1,
                                duration: 366.6
                            }, {
                                type: 2,
                                position: {
                                    x: 769.99,
                                    y: 2651.54
                                },
                                scale: 3.15,
                                easing: 0
                            }, {
                                type: 2,
                                position: {
                                    x: 1459.1200000000001,
                                    y: 2450.6
                                },
                                scale: 2.82,
                                duration: 833.33,
                                easing: 23
                            }, {
                                type: 1,
                                duration: 433.33
                            }, {
                                type: 2,
                                position: {
                                    x: -18.900000000000002,
                                    y: 1503.88
                                },
                                scale: 1.880000000000001,
                                easing: 0
                            }, {
                                type: 2,
                                position: {
                                    x: -109.78,
                                    y: 1634.48
                                },
                                scale: 2.14,
                                duration: 466.67,
                                easing: 9
                            }, {
                                type: 1,
                                duration: 166.67000000000002
                            }, {
                                type: 2,
                                position: {
                                    x: 1168.45,
                                    y: 1799.54
                                },
                                scale: 2.14,
                                duration: 366.67,
                                easing: 22
                            }, {
                                type: 2,
                                position: {
                                    x: 2466.18,
                                    y: -836.4200000000001
                                },
                                scale: 2.4,
                                duration: 1300,
                                easing: 23
                            }, {
                                type: 2,
                                position: {
                                    x: 2709.4,
                                    y: -1054.2
                                },
                                scale: 2.66,
                                duration: 200,
                                easing: 7
                            }, {
                                type: 1,
                                duration: 133.33
                            }, {
                                type: 2,
                                position: {
                                    x: 700.29,
                                    y: 1814.98
                                },
                                scale: 1.94,
                                easing: 0
                            },
                            [{
                                type: 2,
                                position: {
                                    x: 663.33,
                                    y: 818.4200000000001
                                },
                                scale: .68,
                                duration: 1166.67,
                                easing: 9
                            }, {
                                type: 3,
                                position: {
                                    x: 12,
                                    y: 12
                                },
                                alpha: 1,
                                easing: 0
                            }, {
                                type: 4,
                                position: {
                                    x: 12,
                                    y: 489
                                },
                                alpha: 1,
                                easing: 0
                            }, {
                                type: 6
                            }]
                        ];
                    case 599:
                        return [{
                                type: 2,
                                position: {
                                    x: 2291.35,
                                    y: -648.85
                                },
                                scale: 2.31,
                                alpha: 1,
                                duration: 0,
                                easing: 0
                            }, {
                                type: 2,
                                position: {
                                    x: 1083.74,
                                    y: 1922.63
                                },
                                scale: 2.31,
                                alpha: 1,
                                duration: 1100,
                                easing: 11
                            }, {
                                type: 2,
                                position: {
                                    x: 544.71,
                                    y: 690.66
                                },
                                scale: 1.54,
                                alpha: 1,
                                duration: 1266.67,
                                easing: 11
                            }, {
                                type: 1,
                                duration: 166.67000000000002
                            }, {
                                type: 2,
                                position: {
                                    x: 365.36,
                                    y: 22.84
                                },
                                scale: 1.12,
                                alpha: 1,
                                duration: 666.67,
                                easing: 11
                            }, {
                                type: 1,
                                duration: 333.33
                            }, {
                                type: 2,
                                position: {
                                    x: 546.61,
                                    y: 1233.77
                                },
                                scale: 1.44,
                                alpha: 1,
                                duration: 3033.33,
                                easing: 23
                            },
                            [{
                                type: 4,
                                position: {
                                    x: 12,
                                    y: 489
                                },
                                alpha: 0
                            }, {
                                type: 3,
                                position: {
                                    x: 12,
                                    y: 12
                                },
                                alpha: 0
                            }],
                            [{
                                type: 2,
                                position: {
                                    x: 658.17,
                                    y: 839.71
                                },
                                scale: .71,
                                alpha: 1,
                                duration: 1166.67,
                                easing: 9
                            }, {
                                type: 3,
                                position: {
                                    x: 12,
                                    y: 12
                                },
                                alpha: 1,
                                duration: 1166.67,
                                easing: 0
                            }, {
                                type: 4,
                                position: {
                                    x: 12,
                                    y: 489
                                },
                                alpha: 1,
                                duration: 1166.67,
                                easing: 0
                            }, {
                                type: 6
                            }]
                        ];
                    case 587:
                        return [{
                                type: 2,
                                position: {
                                    x: 114.81,
                                    y: 2408.4500000000003
                                },
                                scale: 3.27,
                                alpha: 0
                            }, {
                                type: 6
                            }, {
                                type: 2,
                                alpha: 1,
                                duration: 233.333333,
                                easing: 0
                            }, {
                                type: 2,
                                position: {
                                    x: 99.7,
                                    y: 979.6700000000001
                                },
                                scale: 1.41,
                                duration: 766.666667,
                                easing: 10
                            }, {
                                type: 2,
                                duration: 766.666667,
                                position: {
                                    x: 95.48,
                                    y: 946.87
                                },
                                scale: 1.34,
                                alpha: 0,
                                easing: 0
                            }, {
                                type: 2,
                                position: {
                                    x: -97.55,
                                    y: 401.49
                                },
                                scale: 1.67
                            }, {
                                type: 2,
                                duration: 233.333333,
                                alpha: 1,
                                easing: 0
                            }, {
                                type: 2,
                                position: {
                                    x: 277.79,
                                    y: 237.12
                                },
                                scale: .85,
                                duration: 566.666667,
                                easing: 10
                            }, {
                                type: 2,
                                position: {
                                    x: 300,
                                    y: 190.2734375
                                },
                                scale: .85,
                                alpha: 0,
                                duration: 1333.33333,
                                easing: 0
                            }, {
                                type: 2,
                                position: {
                                    x: 899.02,
                                    y: -56.800000000000004
                                },
                                scale: 1.99,
                                duration: 0,
                                alpha: 1,
                                easing: 10
                            }, {
                                type: 2,
                                position: {
                                    x: 565.8000000000001,
                                    y: 966.01
                                },
                                scale: 1.33,
                                duration: 1033.33333,
                                easing: 10
                            },
                            [{
                                    type: 2,
                                    position: {
                                        x: 487.97,
                                        y: 935
                                    },
                                    scale: 1.25,
                                    duration: 1466.66667,
                                    alpha: 0,
                                    easing: 0
                                },
                                [{
                                    type: 1,
                                    duration: 500
                                }, {
                                    type: 5,
                                    duration: 633.333333,
                                    color: 13622263,
                                    easing: 0
                                }]
                            ], {
                                type: 2,
                                position: {
                                    x: 700,
                                    y: 1276.5
                                },
                                scale: 1.25
                            }, {
                                type: 2,
                                duration: 533.333333,
                                alpha: 1,
                                easing: 9,
                                position: {
                                    x: 750,
                                    y: 1242.5390625
                                },
                                scale: 1.25
                            }, {
                                type: 1,
                                duration: 233.333333
                            }, {
                                type: 2,
                                position: {
                                    x: 800,
                                    y: 689.42
                                },
                                scale: .68,
                                duration: 933.333333,
                                easing: 9
                            }, {
                                type: 4,
                                position: {
                                    x: 8,
                                    y: 8
                                },
                                alpha: 0
                            }, {
                                type: 3,
                                position: {
                                    x: 8,
                                    y: 257
                                },
                                alpha: 0
                            },
                            [{
                                type: 4,
                                duration: 733.333333,
                                alpha: 1,
                                easing: 0
                            }, {
                                type: 3,
                                duration: 733.333333,
                                alpha: 1,
                                easing: 0
                            }]
                        ]
                }
                return []
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
    e.TaskKaizo = T
}