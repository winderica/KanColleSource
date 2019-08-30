const function1328 = function (t, e, i) {
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
        s = i(18),
        a = i(2),
        _ = i(13),
        l = i(1329),
        u = i(68),
        c = i(6),
        h = i(1330),
        p = i(1331),
        d = i(1332),
        f = i(1333),
        y = i(1334),
        m = i(1335),
        g = i(1336),
        v = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._flg_wait1500 = !1, i._flg_preinitialized = !1, i._scene = e, i
            }
            return n(e, t), e.prototype._start = function () {
                r.default.sound.voice.setNumOfMultiPlay(100), this._loadResources()
            }, e.prototype._loadResources = function () {
                var t = this,
                    e = this._scene.data.model.deck_f,
                    i = null != e && e.isCombined(),
                    n = this._scene.data.model.map_info.isVS12(),
                    o = i || n,
                    r = this._scene.data.model.map_info.isNightStart();
                new l.TaskLoadResourcesBattle(r, o).start(function () {
                    t._showTextImage()
                })
            }, e.prototype._showTextImage = function () {
                var t = this,
                    e = PIXI.Texture.fromFrame("battle_telop_txt_start");
                if (this._start_img = new PIXI.Sprite(e), this._start_img.anchor.set(.5, .5), this._start_img.x = o.default.width / 2, this._start_img.y = o.default.height / 2, this._start_img.alpha = 0, this._scene.addChild(this._start_img), 1 == this._scene.data.model.map_info.isLongRangeFires() && c.SE.play("257"), createjs.Tween.get(this._start_img).to({
                        alpha: 1
                    }, 200).wait(1500).call(function () {
                        t._flg_wait1500 = !0, t._hideTextImage()
                    }), null == this._scene.data.model.gekimetsu_data) this._connectAPI();
                else {
                    var i = this._scene.data,
                        n = this._scene.data.model.gekimetsu_data;
                    i.addDayRecord(n), this._initData()
                }
            }, e.prototype._connectAPI = function () {
                var t, e = this,
                    i = this._scene.data;
                t = 1 == i.model.isPractice() ? new m.APIPracticeStart(i) : 1 == i.model.map_info.isNightStart() ? new f.APIBattleStartNight(i) : 1 == i.model.map_info.isAirBattle() ? new p.APIBattleStartAirBattle(i) : 1 == i.model.map_info.isAirRaid() ? new d.APIBattleStartAirRaid(i) : 1 == i.model.map_info.isLongRangeFires() ? new y.APIBattleStartLongRangeFires(i) : new h.APIBattleStart(this._scene.data), t.start(function () {
                    e._initData()
                })
            }, e.prototype._initData = function () {
                var t = (this._scene.data.getFirstRecord(), this._scene.data.model.deck_f.ships),
                    e = this._scene.data.model.deck_e.ships;
                this._scene.data.model.ship_info.add(t, e), this._loadBannerImages()
            }, e.prototype._loadBannerImages = function () {
                for (var t = this, e = (this._scene.data.getFirstRecord(), new _.ShipLoader), i = 0, n = this._scene.data.model.deck_f.ships; i < n.length; i++) {
                    var o = n[i];
                    this._loadBannerImage(e, o)
                }
                for (var r = 0, s = this._scene.data.model.deck_e.ships; r < s.length; r++) {
                    var o = s[r];
                    this._loadBannerImage(e, o)
                }
                e.load(function () {
                    t._initializeView()
                })
            }, e.prototype._loadBannerImage = function (t, e) {
                if (null != e) {
                    var i = e.mst_id;
                    i >= 0 && (t.add(i, !1, "banner"), t.add(i, !0, "banner"), t.add(i, !0, "banner_g"), t.add(i, !1, "full"), t.add(i, !0, "full")), e.index >= 6 && (e.friend ? (t.add(i, !1, "banner2"), t.add(i, !0, "banner2"), t.add(i, !0, "banner2_g")) : (t.add(i, !1, "banner3"), t.add(i, !0, "banner3_g")))
                }
            }, e.prototype._initializeView = function () {
                var t = (this._scene.data.getFirstRecord(), this._scene.data.model.deck_f),
                    e = t.ships_main,
                    i = t.ships_sub,
                    n = this._scene.data.model.deck_e,
                    o = n.ships_main,
                    r = n.ships_sub;
                this._scene.view.bannerGroupLayer.initialize(e, o, i, r);
                var s = t.isYugeki();
                this._scene.view.raderLayer.initialize(s), this._flg_preinitialized = !0, this._hideTextImage()
            }, e.prototype._hideTextImage = function () {
                var t = this;
                0 != this._flg_wait1500 && 0 != this._flg_preinitialized && (this._scene.data.model.actual_survey_time = (new Date).getTime(), createjs.Tween.get(this._start_img).to({
                    x: o.default.width / 2 - 120,
                    alpha: 0
                }, 200).wait(200).call(function () {
                    t._start_img.parent.removeChild(t._start_img), t._loadBG()
                }))
            }, e.prototype._loadBG = function () {
                var t = this;
                1 == this._scene.data.model.map_info.isLongRangeFires() ? this._scene.bg.setNight(function () {
                    t._shutterOpen()
                }) : 0 == this._scene.data.model.map_info.isNightStart() ? this._scene.bg.setDay(function () {
                    t._shutterOpen()
                }) : this._scene.bg.setNight(function () {
                    t._shutterOpen()
                })
            }, e.prototype._shutterOpen = function () {
                var t = this;
                null != this._scene.data.model.gekimetsu_data && (this._scene.view.bannerGroupLayer.friends.enter(), this._scene.view.bannerGroupLayer.enemies.enter(), this._scene.view.bannerGroupLayer.friends_combined.enter(), this._scene.view.bannerGroupLayer.enemies_combined.enter()), this._scene.view.shutter.once("opened", function () {
                    t._playBGM()
                }), this._scene.view.shutter.open()
            }, e.prototype._playBGM = function () {
                var t = 0,
                    e = this._scene.data.isNight();
                if (1 == this._scene.data.model.isPractice()) t = e ? 2 : 1;
                else if (null != this._scene.data.model.gekimetsu_data) t = 70;
                else {
                    var i = this._scene.data.model.map_info.area_id,
                        n = this._scene.data.model.map_info.map_no,
                        o = this._scene.data.model.map_info.isBoss();
                    t = r.default.model.mst_bgm.getCombatBGM(i, n, e, o)
                }
                r.default.sound.bgm.playBattleBGM(t), this._bossInsert()
            }, e.prototype._getBossModel = function () {
                var t = this._scene.data.getFirstRecord(),
                    e = t.common.getBossModels();
                if (null != e && e.length > 1) {
                    var i = this._scene.data.model.map_info.area_id,
                        n = i == s.EVENT_AREA_ID,
                        o = this._scene.data.model.gauge_type;
                    if (n && 3 != o) {
                        var r = this._scene.data.model.deck_e.ships[0],
                            a = this._scene.data.model.gauge_now,
                            _ = r.hp_now;
                        if (a > 0 && _ >= a) {
                            var l = e.filter(function (t) {
                                return 2 == t.type
                            });
                            if (l.length > 0) return l[0]
                        }
                    }
                    var u = e.filter(function (t) {
                        return 1 == t.type
                    });
                    if (u.length > 0) return u[0]
                }
                return null != e && 1 == e.length ? e[0] : null
            }, e.prototype._bossInsert = function () {
                var t = this,
                    e = this._getBossModel();
                if (null != e) {
                    var i = this._scene.view.layer_cutin;
                    new g.TaskBossCutin(i, e).start(function () {
                        t._enterShips()
                    })
                } else {
                    if (0 == this._scene.data.isNight()) {
                        var n = this._scene.data.model.deck_f.ships[0],
                            o = n.mst_id;
                        1 == this._scene.data.model.map_info.isLongRangeFires() ? r.default.sound.voice.play(o.toString(), 19) : r.default.sound.voice.play(o.toString(), 15)
                    }
                    this._enterShips()
                }
            }, e.prototype._enterShips = function () {
                var t = this;
                if (1 == this._scene.view.bannerGroupLayer.isEnteredFriend()) this._showRader();
                else if (1 == this._scene.data.model.map_info.isNightStart()) this._showHpGauge();
                else {
                    var e = this._scene.view.bannerGroupLayer.createFriendEnterTask();
                    e.start(function () {
                        t._showRader()
                    })
                }
            }, e.prototype._showRader = function () {
                var t = this._scene.data,
                    e = this._scene.data.model.deck_f,
                    i = this._scene.data.model.deck_e,
                    n = (this._scene.data.getFirstRecord(), e.formation),
                    o = e.type,
                    r = e.getCountMainDeck(),
                    s = e.getCountSubDeck();
                t.model.map_info.isLongRangeFires() ? this._scene.view.raderLayer.rader_f.show(n, o, 0, 0, !1) : this._scene.view.raderLayer.rader_f.show(n, o, r, s, !1);
                var a = i.formation,
                    _ = i.type;
                if (1 == this._scene.view.bannerGroupLayer.isEnteredEnemy()) {
                    var l = i.getCountMainDeck(),
                        u = i.getCountSubDeck();
                    t.model.map_info.isLongRangeFires() ? this._scene.view.raderLayer.rader_e.show(a, _, 0, 0, !0) : this._scene.view.raderLayer.rader_e.show(a, _, l, u, !1)
                } else this._scene.view.raderLayer.rader_e.show(a, _, 0, 0, !1);
                this._showHpGauge()
            }, e.prototype._showHpGauge = function () {
                var t = this,
                    e = this._scene.data.model.gauge_max,
                    i = Math.min(this._scene.data.model.gauge_now, e);
                if (0 == this._scene.data.model.map_info.isBoss()) return void this._endTask();
                if (0 == e) return void this._endTask();
                if (0 == i) return void this._endTask();
                if (3 == this._scene.data.model.gauge_type) return void this._endTask();
                if (null != this._scene.data.model.gekimetsu_data) return void this._endTask();
                var n = this._scene.data.model.map_info.area_id,
                    o = this._scene.data.model.map_info.map_no,
                    s = this._scene.data.model.map_info.cell_no,
                    a = this._scene.data.model.stage;
                if (7 == n && 2 == o && a > 1 && 7 == s) return void this._endTask();
                if (45 == n && 2 == o && a > 1 && 14 == s) return void this._endTask();
                if (45 == n && 3 == o && a > 1 && 10 == s) return void this._endTask();
                var _ = u.GaugeSetModel.createKey(n, o, a),
                    l = r.default.resources.gauge.createLoaderHorizontal();
                l.add(_), l.load(function () {
                    var n = r.default.resources.gauge.getGaugeInfo(_);
                    t._scene.view.layer_gauge.show(n, i, e, function () {
                        t._endTask()
                    })
                })
            }, e
        }(a.TaskBase);
    e.TaskInit = v
}