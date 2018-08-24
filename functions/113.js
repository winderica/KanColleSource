const function113 = function (t, e, i) {
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
    var o = i(0), r = i(222), s = i(78), a = i(34), _ = i(66), u = i(35), l = i(855), c = i(857), h = i(871),
        p = i(873), d = i(875), f = i(877), y = i(878), v = i(879), g = i(880), m = i(881), b = i(349), w = i(883);
    e.SYNC_KEY_JUMP = "sync_key_jump";
    var x, I = function () {
        function t() {
            this.ANIMATION_SYNC_KEY = {}
        }

        return t.prototype.setNumber = function (t, e) {
            this.ANIMATION_SYNC_KEY[t] = e
        }, t.prototype.getNumber = function (t) {
            return this.ANIMATION_SYNC_KEY[t]
        }, t
    }();
    !function (t) {
        t[t.UpdateOnly = 0] = "UpdateOnly", t[t.WaitComplete = 1] = "WaitComplete"
    }(x = e.ArsenalTimerMode || (e.ArsenalTimerMode = {}));
    var T = function (t) {
        function i() {
            var i = t.call(this) || this;
            i.syncAnimationKey = new I, i.KDOCK_IDS = [1, 2, 3, 4], i.normalSettingMemory = {
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
            }, i.arsenalTimerMode = x.UpdateOnly, i._onClickGet = function (t) {
                i.receive(t);
                var e = new v.GetShipAPI(t);
                e.start(function () {
                    var n = e.ship.mstID, r = o.default.model.ship.getMst(n);
                    i._getShipAnimation(t, r, e.kDocks)
                })
            }, i._onClickNoDock = function (t) {
                o.default.view.clickGuard = !0, new m.OpenNewDockAPI(t).start(function () {
                    i.unLockDock(t), o.default.model.kdock.get(t).__open__();
                    var e = o.default.model.kdock.getAll().filter(function (t) {
                        return -1 == t.state
                    });
                    if (e.length > 0) {
                        var n = e[0], r = o.default.model.useItem.get(49).count > 0;
                        i.noDock(n.id, !0, r)
                    }
                    o.default.view.clickGuard = !1
                })
            }, i._onClickSelect = function (t) {
                i.onClickSelect(t)
            }, i._onClickHighSpeed = function (t) {
                var e = new l.HighSpeedConfirmContainer;
                o.default.view.overLayer.addChild(e);
                var n = o.default.model.kdock.get(t).isLargeBuild(), s = o.default.model.useItem.get(2).count,
                    a = s - (n ? 10 : 1);
                e.show(s, a, function (n) {
                    if (n) {
                        o.default.view.clickGuard = !0;
                        var s = o.default.model.kdock.get(t), a = s.complete_time;
                        new y.CreateShipSpeedChangeAPI(t, s.isLargeBuild()).start(function () {
                            var n = o.default.model.kdock.get(t), s = Date.now();
                            i.useBurner(n.id, a, s);
                            var _ = r.ArsenalUtil.developLimit();
                            i.hideHighSpeedButton(t);
                            var u = t.toString();
                            i.kDockViews[u].changeState(3), o.default.model.kdock.getAll().forEach(function (t) {
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
                var e = new p.MaterialAmountContainerShip(i.parent);
                e.play(t, i.normalSettingMemory, !0, o.default.model.basic.isLargeBuild(), function (t) {
                    i._onCompleteMaterialAmountShip(e, t)
                }, function () {
                    i._onGoToLargeBuild(e)
                }, function () {
                    i._onGoToShop()
                })
            }, i.kDockViews = {};
            var n = new PIXI.Sprite(u.ARSENAL_MAIN.getTexture(144)),
                s = new PIXI.Sprite(u.ARSENAL_MAIN.getTexture(145)),
                a = new PIXI.Sprite(u.ARSENAL_MAIN.getTexture(145)),
                _ = new PIXI.Sprite(u.ARSENAL_MAIN.getTexture(145)), h = new PIXI.Container;
            i.layerBases = new Array, i.layerBuilds = new Array, i.layerInteractives = new Array, s.position.set(34, 4), a.position.set(214, 4), _.position.set(661, 4);
            for (var d = 0; d < i.KDOCK_IDS.length; d++) {
                var f = 51 + 117 * d, g = new PIXI.Container, b = new PIXI.Container, w = new PIXI.Container;
                g.position.set(0, f), b.position.set(0, f), w.position.set(0, f), i.layerBases.push(g), i.layerBuilds.push(b), i.layerInteractives.push(w)
            }
            for (var d = 0; d < i.KDOCK_IDS.length; d++) {
                var T = i.KDOCK_IDS[d], g = i.layerBases[d], b = i.layerBuilds[d], w = i.layerInteractives[d],
                    O = new c.KDockView(T, g, b, w, i.syncAnimationKey);
                O.updateCondition(!0, !0), O.onClickGet = i._onClickGet, O.onClickSelect = i._onClickDock, O.onClickHighSpeed = i._onClickHighSpeed, O.onClickNoDock = i._onClickNoDock;
                var P = T.toString();
                i.kDockViews[P] = O
            }
            i.addChild(n);
            for (var d = 0; d < i.KDOCK_IDS.length; d++) i.addChild(i.layerBases[d]);
            for (var d = 0; d < i.KDOCK_IDS.length; d++) i.addChild(i.layerBuilds[d]);
            i.addChild(s, a, _);
            for (var d = 0; d < i.KDOCK_IDS.length; d++) i.addChild(i.layerInteractives[d]);
            return i.addChild(h), i.syncAnimationKey.setNumber(e.SYNC_KEY_JUMP, 0), i.animation = createjs.Tween.get(i.syncAnimationKey.ANIMATION_SYNC_KEY, { loop: !0 }), i.animation.call(function () {
                i.syncAnimationKey.setNumber(e.SYNC_KEY_JUMP, 0)
            }).to({ sync_key_jump: 1 }, 800, createjs.Ease.quintOut).to({ sync_key_jump: 0 }, 500, createjs.Ease.quintIn).wait(500), i.arsenalTimerMode = x.WaitComplete, i
        }

        return n(i, t), Object.defineProperty(i.prototype, "ArsenalTimerMode", {
            get: function () {
                return this.arsenalTimerMode
            }, enumerable: !0, configurable: !0
        }), i.prototype.getKDockView = function (t) {
            var e = t.toString();
            return this.kDockViews[e]
        }, i.prototype.notifyTime = function (t, e) {
            this.kDockViews[t].onUpdateTime(e)
        }, i.prototype.updateCondition = function (t, e, i) {
            var n = t.toString();
            this.kDockViews[n].updateCondition(e, i)
        }, i.prototype.build = function (t, e, i, n, o, r, s, a, _, u) {
            var l = t.toString();
            this.kDockViews[l].Build(i, e, n, o, r, s, a, _, u)
        }, i.prototype.resume = function (t, e, i, n, o, r, s, a, _) {
            var u = t.toString();
            this.kDockViews[u].Resume(e, i, n, o, r, s, a, _)
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
            this.onUpdateCondition = null, this.layerBases = null, this.layerBuilds = null, this.layerInteractives = null, this.onClickNoDock = null, this.onClickSelect = null, this.kDockViews = null, this.animation = null, this.removeChildren()
        }, i.prototype._getShipAnimation = function (t, e, i) {
            var n = this, s = new b.ReceiveAnimation(544), a = new w.RewardAnimationShip;
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
        }, i.prototype._onCompleteMaterialAmountShip = function (t, e) {
            var i = this;
            switch (e) {
                case!1:
                    o.default.view.clickGuard = !0, t.hide(function () {
                        t.dispose(), o.default.view.clickGuard = !1
                    }), r.ArsenalUtil.playVoiceOnBuildComplete();
                    break;
                case!0:
                    var n = t.kDockId, s = t.ammo, u = t.fuel, l = t.steel, c = t.bauxite, h = t.buildKit,
                        p = t.devKit, d = 0 < h, y = new f.CreateShipAPI(n, 0, u, s, l, c, p, d ? 1 : 0),
                        v = new g.KDockAPI, m = new a.APIConnector;
                    0 == o.default.model.basic.getTutorialProgress() && m.add(new _.UpdateTutorialAPI(10)), m.add(y), m.add(v), o.default.view.clickGuard = !0, m.start(function () {
                        t.dispose();
                        var e = o.default.model.kdock.get(n),
                            s = (o.default.model.kdock.getAll(), o.default.model.ship.getMst(e.ship_mst_id)),
                            a = s.build_time, _ = .5 < Math.random(), u = .5 < Math.random() || 0 == _,
                            l = 0 < o.default.model.useItem.get(2).count, c = Date.now(), h = e.complete_time;
                        d && (h = c + 60 * a * 1e3);
                        var p = o.default.model.shipType.get(s.shipTypeID).build_phase_num;
                        i.build(e.id, !1, d, l, _, u, a, h, c, p), o.default.view.portMain.updateInfo(), i.arsenalTimerMode = x.WaitComplete;
                        var f = r.ArsenalUtil.developLimit();
                        i.hideHighSpeedButton(n), o.default.model.kdock.getAll().forEach(function (t) {
                            2 == t.state && i.updateHighSpeedButtonState(t.id), i.onUpdateCondition(t.id, f.forShip, f.forSlot)
                        }), o.default.view.clickGuard = !1, !1 === d && r.ArsenalUtil.playVoiceOnBuildComplete()
                    }), this.normalSettingMemory.ammo = t.ammo, this.normalSettingMemory.fuel = t.fuel, this.normalSettingMemory.steel = t.steel, this.normalSettingMemory.baux = t.bauxite, this.normalSettingMemory.buildKit = 0, this.normalSettingMemory.devKit = t.devKit
            }
        }, i.prototype._onGoToLargeBuild = function (t) {
            var e = this, i = new h.LargeBuildConfirmContainer;
            o.default.view.overLayer.addChild(i);
            var n = o.default.sound.voice.play("9999", 318);
            i.show(function (s) {
                if (o.default.view.clickGuard = !0, o.default.sound.voice.stop(n), i.hide(function () {
                    o.default.view.overLayer.removeChild(i), i.dispose(), o.default.view.clickGuard = !1
                }), s) {
                    t.dispose();
                    var _ = new d.LargeConfigureMaterialContainer(e.parent);
                    _.onComplete = function (i) {
                        var n = t.kDockId;
                        switch (i) {
                            case d.Result.CHANGE_NORMAL:
                                _.dispose();
                                var s = new p.MaterialAmountContainerShip(e.parent);
                                s.play(n, e.normalSettingMemory, !1, o.default.model.basic.isLargeBuild(), function (t) {
                                    e._onCompleteMaterialAmountShip(s, t)
                                }, function () {
                                    e._onGoToLargeBuild(s)
                                }, function () {
                                    e._onGoToShop()
                                });
                                break;
                            case d.Result.CANCEL:
                                o.default.view.clickGuard = !0, _.hide(function () {
                                    _.dispose(), o.default.view.clickGuard = !1
                                });
                                break;
                            case d.Result.START:
                                var u = _.ammo, l = _.fuel, c = _.steel, h = _.bauxite, y = _.buildKit,
                                    v = _.devKit, m = 0 < y,
                                    b = new f.CreateShipAPI(n, 1, l, u, c, h, v, m ? 1 : 0), w = new g.KDockAPI,
                                    x = new a.APIConnector;
                                x.add(b), x.add(w), o.default.view.clickGuard = !0, x.start(function () {
                                    o.default.view.portMain.updateInfo();
                                    var t = o.default.model.kdock.get(n),
                                        i = o.default.model.ship.getMst(t.ship_mst_id), s = i.build_time,
                                        a = .5 < Math.random(), u = .5 < Math.random() || 0 == a, l = Date.now(),
                                        c = 9 < o.default.model.useItem.get(2).count;
                                    _.dispose();
                                    var h = t.complete_time;
                                    m && (h = l + 60 * s * 1e3);
                                    var p = r.ArsenalUtil.developLimit();
                                    e.hideHighSpeedButton(n), o.default.model.kdock.getAll().forEach(function (t) {
                                        2 == t.state && e.updateHighSpeedButtonState(t.id), e.onUpdateCondition(t.id, p.forShip, p.forSlot)
                                    }), o.default.view.clickGuard = !1;
                                    var d = o.default.model.shipType.get(i.shipTypeID).build_phase_num;
                                    e.build(t.id, !0, m, c, a, u, s, h, l, d)
                                }), e.largeSettingMemory.ammo = _.ammo, e.largeSettingMemory.fuel = _.fuel, e.largeSettingMemory.steel = _.steel, e.largeSettingMemory.bauxite = _.bauxite, e.largeSettingMemory.buildKit = 0, e.largeSettingMemory.devKit = 1
                        }
                    }, _.play(e.largeSettingMemory.fuel, e.largeSettingMemory.ammo, e.largeSettingMemory.steel, e.largeSettingMemory.bauxite, e.largeSettingMemory.devKit, e.largeSettingMemory.buildKit)
                }
            })
        }, i.prototype._onGoToShop = function () {
            o.default.scene.change(24, new s.ItemSceneModel)
        }, i
    }(PIXI.Container);
    e.DockLayer = T
}