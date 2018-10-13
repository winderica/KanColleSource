const function857 = function (t, e, i) {
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
    var o = i(0), r = i(47), s = i(858), a = i(859), _ = i(112), u = i(222), l = i(891), c = i(892), h = i(112),
        p = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.arsenalTimerKey = {}, e.updateCondition = function (t, i, n) {
                    e.menuLayer.hasLimitOver = n, e.dockLayer.updateCondition(t, i, n)
                }, e.onChangeArsenalTimer = function () {
                    if (e.dockLayer.ArsenalTimerMode == _.ArsenalTimerMode.WaitComplete) {
                        var t = Date.now();
                        o.default.model.kdock.getAll().forEach(function (i) {
                            if (2 == i.state || 2 == e.dockLayer.getKDockView(i.id).state) {
                                if (i.complete_time < t) {
                                    e.dockLayer.hideHighSpeedButton(i.id);
                                    i.__complete__(), e.dockLayer.complete(i.id), e.dockLayer.forceComplete(i.id, i.isLargeBuild())
                                } else e.dockLayer.notifyTime(i.id, t)
                            }
                        })
                    }
                }, e
            }

            return n(e, t), e.prototype.start = function () {
                var t = o.default.model.kdock.getAll();
                this.menuLayer = new c.MenuLayer, this.menuLayer.onUpdateCondition = this.updateCondition, this.dockLayer = new h.DockLayer, this.dockLayer.position.set(528, 177), this.dockLayer.onUpdateCondition = this.updateCondition, this.topBarLayer = new l.TopBarLayer;
                for (var e = u.ArsenalUtil.developLimit(), i = !1, n = 0; n < t.length; n++) {
                    var r = t[n];
                    switch (this.updateCondition(r.id, e.forShip, e.forSlot), this.dockLayer.hideHighSpeedButton(r.id), r.state) {
                        case 2:
                            var s = o.default.model.ship.getMst(r.ship_mst_id), a = s.build_time,
                                _ = o.default.model.shipType.get(s.shipTypeID).build_phase_num, p = Date.now(),
                                d = r.isLargeBuild(), f = r.complete_time, y = !1;
                            y = d ? 9 < o.default.model.useItem.get(2).count : 0 < o.default.model.useItem.get(2).count;
                            var v = .5 < Math.random(), m = .5 < Math.random() || 0 == v;
                            this.dockLayer.showHighSpeedButton(r.id, y), this.dockLayer.resume(r.id, d, y, v, m, a, f, p, _);
                            break;
                        case-1:
                            if (0 == i) {
                                var g = 0 < o.default.model.useItem.get(49).count, b = !0;
                                this.dockLayer.noDock(r.id, b, g)
                            } else {
                                var b = !1, g = !1;
                                this.dockLayer.noDock(r.id, b, g)
                            }
                            i = !0;
                            break;
                        case 3:
                            var v = .5 < Math.random(), m = .5 < Math.random() || 0 == v;
                            this.dockLayer.updateMotivation(r.id, v, m);
                            var s = o.default.model.ship.getMst(r.ship_mst_id),
                                _ = o.default.model.shipType.get(s.shipTypeID).build_phase_num,
                                w = r.isLargeBuild();
                            this.dockLayer.completed(r.id, _, w);
                            break;
                        case 0:
                            this.dockLayer.standby(r.id)
                    }
                }
                u.ArsenalUtil.playVoiceOnBuildComplete();
                var x = createjs.Tween.get(this.arsenalTimerKey, { loop: !0 }).wait(500);
                x.addEventListener("change", this.onChangeArsenalTimer), this.addChild(this.dockLayer, this.menuLayer, this.topBarLayer), this.arsenalTimer = x
            }, e.prototype.getPreInitializeTask = function (t) {
                return new a.PreInitializeTask(this)
            }, e.prototype.getInitializeTask = function (t) {
                return new s.InitializeTask
            }, e.prototype.getFinalizeTask = function () {
                return this.dispose(), null
            }, e.prototype.dispose = function () {
                createjs.Tween.removeTweens(this.arsenalTimer.target), this.topBarLayer.dispose(), this.menuLayer.dispose(), this.dockLayer.dispose(), this.menuLayer = null, this.dockLayer = null, this.arsenalTimerKey = null, this.arsenalTimer = null, this.topBarLayer = null, this.removeChildren()
            }, e
        }(r.SceneBase);
    e.ArsenalScene = p
}