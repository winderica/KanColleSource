const function115 = function (t, e, i) {
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
    var o = i(0),
        r = i(226),
        s = i(80),
        a = i(34),
        _ = i(69),
        l = i(881),
        u = i(882),
        c = i(883),
        h = i(884),
        p = i(886),
        d = i(900),
        f = i(902),
        y = i(904),
        m = i(906),
        g = i(907),
        v = i(908),
        b = i(909),
        w = i(910),
        x = i(348),
        I = i(912);
    e.SYNC_KEY_JUMP = "sync_key_jump";
    var T, O = function () {
        function t() {
            this.ANIMATION_SYNC_KEY = {}
        }
        return t.prototype.setNumber = function (t, e) {
            this.ANIMATION_SYNC_KEY[t] = e
        }, t.prototype.getNumber = function (t) {
            return this.ANIMATION_SYNC_KEY[t]
        }, t
    }();
    ! function (t) {
        t[t.UpdateOnly = 0] = "UpdateOnly", t[t.WaitComplete = 1] = "WaitComplete"
    }(T = e.ArsenalTimerMode || (e.ArsenalTimerMode = {}));
    var C = function (t) {
        function i() {
            var i = t.call(this) || this;
            i.syncAnimationKey = new O, i.KDOCK_IDS = [1, 2, 3, 4], i.normalSettingMemory = {
                ammo: 30,
                fuel: 30,
                steel: 30,
                baux: 30,
                buildKit: 0,
                devKit: 1
            }, i.largeSettingMemory = {
                ammo: 1500,
                fuel: 1500,
                steel: 2e3,
                bauxite: 1e3,
                buildKit: 0,
                devKit: 1
            }, i.arsenalTimerMode = T.UpdateOnly, i._onClickGet = function (t) {
                i.receive(t);
                var e = new v.GetShipAPI(t);
                e.start(function () {
                    var n = e.ship.mstID,
                        r = o.default.model.ship.getMst(n);
                    i._getShipAnimation(t, r, e.kDocks)
                })
            }, i._onClickNoDock = function (t) {
                o.default.view.clickGuard = !0, new w.OpenNewDockAPI(t).start(function () {
                    i.unLockDock(t), o.default.model.kdock.get(t).__open__();
                    var e = o.default.model.kdock.getAll().filter(function (t) {
                        return -1 == t.state
                    });
                    if (e.length > 0) {
                        var n = e[0],
                            r = o.default.model.useItem.get(49).count > 0;
                        i.noDock(n.id, !0, r)
                    }
                    o.default.view.clickGuard = !1
                })
            }, i._onClickSelect = function (t) {
                i.onClickSelect(t)
            }, i._onClickHighSpeed = function (t) {
                var e = new h.HighSpeedConfirmContainer;
                o.default.view.overLayer.addChild(e);
                var n = o.default.model.kdock.get(t).isLargeBuild(),
                    s = o.default.model.useItem.get(2).count,
                    a = s - (n ? 10 : 1);
                e.show(s, a, function (n) {
                    if (n) {
                        o.default.view.clickGuard = !0;
                        var s = o.default.model.kdock.get(t),
                            a = s.complete_time;
                        new g.CreateShipSpeedChangeAPI(t, s.isLargeBuild()).start(function () {
                            var n = o.default.model.kdock.get(t),
                                s = Date.now();
                            i.useBurner(n.id, a, s);
                            var _ = r.ArsenalUtil.developLimit();
                            i.hideHighSpeedButton(t);
                            var l = t.toString();
                            i.kDockViews[l].changeState(3), o.default.model.kdock.getAll().forEach(function (t) {
                                2 == t.state && i.updateHighSpeedButtonState(t.id), i.onUpdateCondition(t.id, _.forShip, _.forSlot)
                            }), e.hide(function () {
                                o.default.view.overLayer.removeChild(e), e.dispose(), o.default.view.clickGuard = !1
                            })
                        })
                    } else o.default.view.clickGuard = !0, e.hide(function () {
                        o.default.view.overLayer.removeChild(e), e.dispose(), o.default.view.clickGuard = !1
                    })
                })
            }, i._onClickDock = function (t) {
                i._materialAmountContainer || (i._materialAmountContainer = new f.MaterialAmountContainerShip(i.parent), i._materialAmountContainer.play(t, i.normalSettingMemory, !0, o.default.model.basic.isLargeBuild(), i._onCompleteMaterialAmountShip, i._onGoToLargeBuild, function () {
                    i._onGoToShop()
                }))
            }, i._onCompleteMaterialAmountShip = function (t) {
                switch (t) {
                    case !1:
                        o.default.view.clickGuard = !0, i._materialAmountContainer.hide(function () {
                            i._materialAmountContainer.dispose(), i._materialAmountContainer = null, o.default.view.clickGuard = !1
                        }), r.ArsenalUtil.playVoiceOnBuildComplete();
                        break;
                    case !0:
                        var e = i._materialAmountContainer.kDockId,
                            n = i._materialAmountContainer.ammo,
                            s = i._materialAmountContainer.fuel,
                            l = i._materialAmountContainer.steel,
                            u = i._materialAmountContainer.bauxite,
                            c = i._materialAmountContainer.buildKit,
                            h = i._materialAmountContainer.devKit,
                            p = 0 < c,
                            d = new m.CreateShipAPI(e, 0, s, n, l, u, h, p ? 1 : 0),
                            f = new b.KDockAPI,
                            y = new a.APIConnector;
                        0 == o.default.model.basic.getTutorialProgress() && y.add(new _.UpdateTutorialAPI(10)), y.add(d), y.add(f), o.default.view.clickGuard = !0, y.start(function () {
                            i._materialAmountContainer.dispose(), i._materialAmountContainer = null;
                            var t = o.default.model.kdock.get(e),
                                n = (o.default.model.kdock.getAll(), o.default.model.ship.getMst(t.ship_mst_id)),
                                s = n.build_time,
                                a = .5 < Math.random(),
                                _ = .5 < Math.random() || 0 == a,
                                l = 0 < o.default.model.useItem.get(2).count,
                                u = Date.now(),
                                c = t.complete_time;
                            p && (c = u + 60 * s * 1e3);
                            var h = o.default.model.shipType.get(n.shipTypeID).build_phase_num;
                            i.build(t.id, !1, p, l, a, _, s, c, u, h), o.default.view.portMain.updateInfo(), i.arsenalTimerMode = T.WaitComplete;
                            var d = r.ArsenalUtil.developLimit();
                            i.hideHighSpeedButton(e), o.default.model.kdock.getAll().forEach(function (t) {
                                2 == t.state && i.updateHighSpeedButtonState(t.id), i.onUpdateCondition(t.id, d.forShip, d.forSlot)
                            }), o.default.view.clickGuard = !1, !1 === p && r.ArsenalUtil.playVoiceOnBuildComplete()
                        }), i.normalSettingMemory.ammo = i._materialAmountContainer.ammo, i.normalSettingMemory.fuel = i._materialAmountContainer.fuel, i.normalSettingMemory.steel = i._materialAmountContainer.steel, i.normalSettingMemory.baux = i._materialAmountContainer.bauxite, i.normalSettingMemory.buildKit = 0, i.normalSettingMemory.devKit = i._materialAmountContainer.devKit
                }
            }, i._onGoToLargeBuild = function () {
                var t = new d.LargeBuildConfirmContainer;
                o.default.view.overLayer.addChild(t);
                var e = o.default.sound.voice.play("9999", 318);
                t.show(function (n) {
                    if (o.default.view.clickGuard = !0, o.default.sound.voice.stop(e), t.hide(function () {
                            o.default.view.overLayer.removeChild(t), t.dispose(), o.default.view.clickGuard = !1
                        }), n) {
                        var s = i._materialAmountContainer.kDockId;
                        i._materialAmountContainer.dispose(), i._materialAmountContainer = null;
                        var _ = new y.LargeConfigureMaterialContainer(i.parent);
                        _.onComplete = function (t) {
                            switch (t) {
                                case y.Result.CHANGE_NORMAL:
                                    _.dispose(), i._materialAmountContainer = new f.MaterialAmountContainerShip(i.parent), i._materialAmountContainer.play(s, i.normalSettingMemory, !1, o.default.model.basic.isLargeBuild(), i._onCompleteMaterialAmountShip, i._onGoToLargeBuild, function () {
                                        i._onGoToShop()
                                    });
                                    break;
                                case y.Result.CANCEL:
                                    o.default.view.clickGuard = !0, _.hide(function () {
                                        _.dispose(), o.default.view.clickGuard = !1
                                    });
                                    break;
                                case y.Result.START:
                                    var e = _.ammo,
                                        n = _.fuel,
                                        l = _.steel,
                                        u = _.bauxite,
                                        c = _.buildKit,
                                        h = _.devKit,
                                        p = 0 < c,
                                        d = new m.CreateShipAPI(s, 1, n, e, l, u, h, p ? 1 : 0),
                                        g = new b.KDockAPI,
                                        v = new a.APIConnector;
                                    v.add(d), v.add(g), o.default.view.clickGuard = !0, v.start(function () {
                                        o.default.view.portMain.updateInfo();
                                        var t = o.default.model.kdock.get(s),
                                            e = o.default.model.ship.getMst(t.ship_mst_id),
                                            n = e.build_time,
                                            a = .5 < Math.random(),
                                            l = .5 < Math.random() || 0 == a,
                                            u = Date.now(),
                                            c = 9 < o.default.model.useItem.get(2).count;
                                        _.dispose();
                                        var h = t.complete_time;
                                        p && (h = u + 60 * n * 1e3);
                                        var d = r.ArsenalUtil.developLimit();
                                        i.hideHighSpeedButton(s), o.default.model.kdock.getAll().forEach(function (t) {
                                            2 == t.state && i.updateHighSpeedButtonState(t.id), i.onUpdateCondition(t.id, d.forShip, d.forSlot)
                                        }), o.default.view.clickGuard = !1;
                                        var f = o.default.model.shipType.get(e.shipTypeID).build_phase_num;
                                        i.build(t.id, !0, p, c, a, l, n, h, u, f)
                                    }), i.largeSettingMemory.ammo = _.ammo, i.largeSettingMemory.fuel = _.fuel, i.largeSettingMemory.steel = _.steel, i.largeSettingMemory.bauxite = _.bauxite, i.largeSettingMemory.buildKit = 0, i.largeSettingMemory.devKit = 1
                            }
                        }, _.play(i.largeSettingMemory.fuel, i.largeSettingMemory.ammo, i.largeSettingMemory.steel, i.largeSettingMemory.bauxite, i.largeSettingMemory.devKit, i.largeSettingMemory.buildKit)
                    }
                })
            }, i.kDockViews = {};
            var n, s, x, I = o.default.model.basic.getUISkinID();
            101 == I || 102 == I ? (n = new PIXI.Sprite(l.ARSENAL_SKIN_1.getTexture(1)), s = new PIXI.Sprite(l.ARSENAL_SKIN_1.getTexture(0)), x = new PIXI.Sprite(l.ARSENAL_SKIN_1.getTexture(2))) : 201 == I ? (n = new PIXI.Sprite(u.ARSENAL_SKIN_2.getTexture(1)), s = new PIXI.Sprite(u.ARSENAL_SKIN_2.getTexture(0)), x = new PIXI.Sprite(u.ARSENAL_SKIN_2.getTexture(2))) : 301 != I && 311 != I || (n = new PIXI.Sprite(c.ARSENAL_SKIN_3.getTexture(1)), s = new PIXI.Sprite(c.ARSENAL_SKIN_3.getTexture(0)), x = new PIXI.Sprite(c.ARSENAL_SKIN_3.getTexture(2)));
            var C = new PIXI.Container;
            i.layerBases = new Array, i.layerBuilds = new Array, i.layerInteractives = new Array, n.position.set(1, -29), s.position.set(22, 40), x.position.set(638, 47);
            for (var P = 0; P < i.KDOCK_IDS.length; P++) {
                var k = 46 + 120 * P,
                    S = new PIXI.Container,
                    M = new PIXI.Container,
                    A = new PIXI.Container;
                S.position.set(16, k), M.position.set(16, k), A.position.set(16, k), i.layerBases.push(S), i.layerBuilds.push(M), i.layerInteractives.push(A)
            }
            for (var P = 0; P < i.KDOCK_IDS.length; P++) {
                var E = i.KDOCK_IDS[P],
                    S = i.layerBases[P],
                    M = i.layerBuilds[P],
                    A = i.layerInteractives[P],
                    j = new p.KDockView(E, S, M, A, i.syncAnimationKey);
                j.updateCondition(!0, !0), j.onClickGet = i._onClickGet, j.onClickSelect = i._onClickDock, j.onClickHighSpeed = i._onClickHighSpeed, j.onClickNoDock = i._onClickNoDock;
                var N = E.toString();
                i.kDockViews[N] = j
            }
            i.addChild(n);
            for (var P = 0; P < i.KDOCK_IDS.length; P++) i.addChild(i.layerBases[P]);
            for (var P = 0; P < i.KDOCK_IDS.length; P++) i.addChild(i.layerBuilds[P]);
            i.addChild(s, x);
            for (var P = 0; P < i.KDOCK_IDS.length; P++) i.addChild(i.layerInteractives[P]);
            return i.addChild(C), i.syncAnimationKey.setNumber(e.SYNC_KEY_JUMP, 0), i.animation = createjs.Tween.get(i.syncAnimationKey.ANIMATION_SYNC_KEY, {
                loop: !0
            }), i.animation.call(function () {
                i.syncAnimationKey.setNumber(e.SYNC_KEY_JUMP, 0)
            }).to({
                sync_key_jump: 1
            }, 800, createjs.Ease.quintOut).to({
                sync_key_jump: 0
            }, 500, createjs.Ease.quintIn).wait(500), i.arsenalTimerMode = T.WaitComplete, i
        }
        return n(i, t), Object.defineProperty(i.prototype, "ArsenalTimerMode", {
            get: function () {
                return this.arsenalTimerMode
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype.getKDockView = function (t) {
            var e = t.toString();
            return this.kDockViews[e]
        }, i.prototype.notifyTime = function (t, e) {
            this.kDockViews[t].onUpdateTime(e)
        }, i.prototype.updateCondition = function (t, e, i) {
            var n = t.toString();
            this.kDockViews[n].updateCondition(e, i)
        }, i.prototype.build = function (t, e, i, n, o, r, s, a, _, l) {
            var u = t.toString();
            this.kDockViews[u].Build(i, e, n, o, r, s, a, _, l)
        }, i.prototype.resume = function (t, e, i, n, o, r, s, a, _) {
            var l = t.toString();
            this.kDockViews[l].Resume(e, i, n, o, r, s, a, _)
        }, i.prototype.showHighSpeedButton = function (t, e) {
            var i = t.toString();
            this.kDockViews[i].showHighSpeedButton(e)
        }, i.prototype.hideHighSpeedButton = function (t) {
            var e = t.toString();
            this.kDockViews[e].hideHighSpeedButton()
        }, i.prototype.updateMotivation = function (t, e, i) {
            var n = t.toString();
            this.kDockViews[n].updateMotivation(e, i)
        }, i.prototype.complete = function (t) {
            var e = t.toString();
            this.kDockViews[e].Complete()
        }, i.prototype.noDock = function (t, e, i) {
            var n = t.toString();
            this.kDockViews[n].NoDock(e, i)
        }, i.prototype.unLockDock = function (t) {
            var e = t.toString();
            this.kDockViews[e].UnLockDock()
        }, i.prototype.completed = function (t, e, i) {
            var n = t.toString();
            this.kDockViews[n].Completed(e, i)
        }, i.prototype.standby = function (t) {
            var e = t.toString();
            this.kDockViews[e].Standby()
        }, i.prototype.useBurner = function (t, e, i) {
            var n = t.toString();
            this.kDockViews[n].UseBanner(e, i)
        }, i.prototype.receive = function (t) {
            var e = t.toString();
            this.kDockViews[e].Receive()
        }, i.prototype.received = function (t) {
            var e = t.toString();
            this.kDockViews[e].Received()
        }, i.prototype.forceComplete = function (t, e) {
            var i = t.toString();
            this.kDockViews[i].forceComplete(e)
        }, i.prototype.dispose = function () {
            for (var t = 0; t < this.KDOCK_IDS.length; t++) {
                var e = this.KDOCK_IDS[t].toString();
                this.kDockViews[e].dispose(), this.kDockViews[e] = null
            }
            createjs.Tween.removeTweens(this.animation.target);
            for (var i = 0; i < this.layerBases.length; i++) this.layerBases[i].removeChildren(), this.layerBases[i] = null;
            for (var i = 0; i < this.layerBuilds.length; i++) this.layerBuilds[i].removeChildren(), this.layerBuilds[i] = null;
            for (var i = 0; i < this.layerInteractives.length; i++) this.layerInteractives[i].removeChildren(), this.layerInteractives[i] = null;
            this.onUpdateCondition = null, this.layerBases = null, this.layerBuilds = null, this.layerInteractives = null, this.onClickNoDock = null, this.onClickSelect = null, this.kDockViews = null, this.animation = null, this._materialAmountContainer && (this._materialAmountContainer.dispose(), this._materialAmountContainer = null), this.removeChildren()
        }, i.prototype._getShipAnimation = function (t, e, i) {
            var n = this,
                s = new x.ReceiveAnimation(544),
                a = new I.RewardAnimationShip;
            o.default.view.overLayer.addChild(s), s.preload(function () {
                a.preloadFromMst(e, function () {
                    s.play(function () {
                        o.default.model.kdock.__setData__(i), o.default.view.overLayer.removeChild(s), o.default.view.overLayer.addChild(a), a.play(function () {
                            o.default.view.portMain.updateInfo();
                            var e = r.ArsenalUtil.developLimit();
                            n.hideHighSpeedButton(t), o.default.model.kdock.getAll().forEach(function (t) {
                                2 == t.state && n.updateHighSpeedButtonState(t.id), n.onUpdateCondition(t.id, e.forShip, e.forSlot)
                            }), n.received(t)
                        }, function () {
                            o.default.view.overLayer.removeChild(a), a.dispose(), r.ArsenalUtil.playVoiceOnBuildComplete()
                        })
                    })
                })
            })
        }, i.prototype.updateHighSpeedButtonState = function (t) {
            var e = o.default.model.kdock.get(t);
            if (this.hideHighSpeedButton(t), e.isLargeBuild()) {
                var i = 9 < o.default.model.useItem.get(2).count;
                this.showHighSpeedButton(e.id, i)
            } else {
                var i = 0 < o.default.model.useItem.get(2).count;
                this.showHighSpeedButton(e.id, i)
            }
        }, i.prototype._onGoToShop = function () {
            o.default.scene.change(24, new s.ItemSceneModel)
        }, i
    }(PIXI.Container);
    e.DockLayer = C
}