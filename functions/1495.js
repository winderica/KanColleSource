const function1495 = function (t, e, i) {
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
        r = i(1),
        s = i(2),
        a = i(29),
        _ = i(20),
        l = i(38),
        u = i(8),
        c = i(59),
        h = i(13),
        p = i(1496),
        d = i(1497),
        f = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._scene = e, i
            }
            return n(e, t), e.prototype._start = function () {
                this._loadMVPImage()
            }, e.prototype._loadMVPImage = function () {
                var t = this,
                    e = this._scene.data.battle_model.deck_f.ships,
                    i = null,
                    n = null,
                    o = this._scene.data.getMvpIndex(!1);
                if (o >= 0 && o < e.length && (i = e[o]), o = this._scene.data.getMvpIndex(!0), o >= 0 && o + 6 < e.length && (n = e[o + 6]), null == i && null == n) this._initMove();
                else {
                    var r = new h.ShipLoader;
                    null != i && r.add(i.mst_id, i.isDamaged(), "full"), null != n && r.add(n.mst_id, n.isDamaged(), "full"), r.load(function () {
                        t._showMVP(i)
                    })
                }
            }, e.prototype._showMVP = function (t) {
                var e = this;
                this._scene.view.layer_banner.banners_f.getBanner(t.index).createShowMVPCoinTween();
                var i = t.mst_id,
                    n = t.isDamaged(),
                    r = o.default.resources.getShip(i, n, "full"),
                    s = o.default.model.ship_graph.get(i).getBattleOffset(n);
                this._scene.view.layer_mvp.createShowTween(r, s, 500).call(function () {
                    e._playVoice(i)
                }), this._initMove()
            }, e.prototype._playVoice = function (t) {
                var e = this._scene.data.battle_result_rank;
                "S" != e && "A" != e && "B" != e || o.default.sound.voice.play(t.toString(), 23)
            }, e.prototype._initMove = function () {
                var t = this;
                this._scene.view.layer_deck_info.friend.createHideGaugeTweens(-54), createjs.Tween.get(this._scene.view.layer_banner.info_f).wait(200).to({
                    x: 87
                }, 500), createjs.Tween.get(this._scene.view.layer_banner.banners_f).wait(200).to({
                    x: 294
                }, 500).call(function () {
                    t._showPanel()
                })
            }, e.prototype._showPanel = function () {
                var t = this,
                    e = this._scene.data.base_exp,
                    i = this._scene.data.getShipExp(!1),
                    n = this._scene.data.battle_model.isPractice(),
                    o = this._scene.data.battle_model.deck_f.isYugeki(),
                    r = this._scene.view.panel_exp;
                r.initialize(e, i, n, o), r.alpha = 0, r.visible = !0, createjs.Tween.get(r).to({
                    x: 591,
                    alpha: 1
                }, 300).call(function () {
                    t._showLevelup()
                })
            }, e.prototype._showLevelup = function () {
                var t = this;
                new p.TaskShowLevelup(this._scene, !1).start(function () {
                    t._showExtraReward()
                })
            }, e.prototype._showExtraReward = function () {
                var t = this,
                    e = new a.SerialTask;
                e.add(new d.TaskShowExtraResults(this._scene)), e.add(new l.WaitTask(500)), e.start(function () {
                    1 == t._scene.data.battle_model.deck_f.isCombined() ? t._showNextGearButton() : t._endTask()
                })
            }, e.prototype._showNextGearButton = function () {
                var t = this,
                    e = new c.GearBtnNext;
                e.position.set(1130, 648), e.initialize(), e.activate(), this._scene.view.addChild(e);
                var i = new u.AreaBox(0);
                i.buttonMode = !0, this._scene.view.addChild(i), i.once(r.EventType.CLICK, function () {
                    e.deactivate(), t._scene.view.removeChild(e), t._scene.view.removeChild(i), t._hideMainDeckBanners()
                })
            }, e.prototype._hideMainDeckBanners = function () {
                var t = this,
                    e = new _.TweenTask,
                    i = this._scene.view.layer_banner.banners_f.createHideTweens(0),
                    n = i.length;
                e.addTweens(i), i = this._scene.view.layer_banner.info_f.createHideTweens(0), e.addTweens(i);
                var o = 100 * (n - 1) + 200;
                i = this._scene.view.panel_exp.createHideShipExpTweens(300, o - 300), e.addTweens(i), e.addTween(this._scene.view.layer_mvp.createHideTween(300, o - 300)), e.addTween(this._scene.view.layer_deck_info.friend.createHideDeckNameTween(o - 200, 200)), e.start(function () {
                    t._showSubDeckBanners()
                })
            }, e.prototype._showSubDeckBanners = function () {
                var t = this,
                    e = new _.TweenTask,
                    i = this._scene.data.battle_model.deck_f.ships_sub;
                this._scene.view.layer_banner.banners_f.initialize(i), this._scene.view.layer_banner.info_f.initialize(i);
                var n = this._scene.view.layer_banner.banners_f.createShowTweens(0),
                    r = n.length;
                e.addTweens(n), n = this._scene.view.layer_banner.info_f.createShowTweens(0), e.addTweens(n);
                var s = 100 * (r - 1) + 200,
                    a = this._scene.data.getShipExp(!0);
                n = this._scene.view.panel_exp.createShowShipExpTweens(a, 300, s - 300), e.addTweens(n);
                var l = this._scene.data.getMvpIndex(!0);
                if (l >= 0) {
                    var u = i[l],
                        c = u.mst_id,
                        h = u.isDamaged(),
                        p = o.default.resources.getShip(c, h, "full"),
                        d = o.default.model.ship_graph.get(c).getBattleOffset(h);
                    e.addTween(this._scene.view.layer_mvp.createShowTween(p, d, 300, s - 300).call(function () {
                        t._playVoice(c)
                    }));
                    var f = this._scene.view.layer_banner.banners_f.getBanner(l);
                    e.addTween(f.createShowMVPCoinTween())
                }
                var y = this._scene.data.deck_name_f2;
                e.addTween(this._scene.view.layer_deck_info.friend.createShowDeckNameTween(y, s - 200, 200)), e.start(function () {
                    t._showLevelupCombined()
                })
            }, e.prototype._showLevelupCombined = function () {
                var t = this;
                new p.TaskShowLevelup(this._scene, !0).start(function () {
                    t._endTask()
                })
            }, e
        }(s.TaskBase);
    e.TaskExp = f
}