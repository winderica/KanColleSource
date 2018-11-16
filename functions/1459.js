const function1459 = function (t, e, i) {
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
    var o = i(5), r = i(0), s = i(17), a = i(19), _ = i(27), u = i(2), l = i(1460), c = i(1461), h = i(1464),
        p = i(1470), d = i(1484), f = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._scene = e, i
            }

            return n(e, t), e.prototype._start = function () {
                var t = this;
                this._scene.view.layer_deck_info.show(function () {
                    t._showShips()
                })
            }, e.prototype._showShips = function () {
                var t, e = this, i = this._scene.data.battle_model.deck_e.isCombined();
                t = 0 == i ? new y(this._scene) : new m(this._scene), t.start(function () {
                    e._showRank()
                })
            }, e.prototype._showRank = function () {
                var t = this, e = this._scene.data.battle_model.map_info.area_id;
                if (e == s.EVENT_AREA_ID && 1 == this._scene.data.isFirstClear()) {
                    var i = this._scene.data.battle_model.map_info.map_no, n = r.default.model.map.getMapMsts(e);
                    null != n && n.length > 0 && n[n.length - 1].map_no == i ? r.default.sound.voice.play("9999", 427) : r.default.sound.voice.play("9999", 425)
                }
                new l.TaskRank(this._scene).start(function () {
                    t._showExp()
                })
            }, e.prototype._showExp = function () {
                var t = this;
                new c.TaskExp(this._scene).start(function () {
                    t._showTransportResult()
                })
            }, e.prototype._showTransportResult = function () {
                var t = this;
                new d.PhaseTransportResult(this._scene).start(function () {
                    t._phaseBonus()
                })
            }, e.prototype._phaseBonus = function () {
                var t = this;
                new h.PhaseBonus(this._scene).start(function () {
                    t._phaseClear()
                })
            }, e.prototype._phaseClear = function () {
                var t = this;
                new p.PhaseClear(this._scene).start(function () {
                    t._endTask()
                })
            }, e
        }(u.TaskBase);
    e.TaskMain = f;
    var y = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._scene = e, i
        }

        return n(e, t), e.prototype._start = function () {
            var t = this, e = this._scene.data.battle_model.deck_f.ships_main;
            this._layer.banners_f.initialize(e), this._layer.info_f.initialize(e);
            var i = this._scene.data.battle_model.deck_e.ships_main;
            this._layer.banners_e.initialize(i), this._layer.info_e.initialize(i);
            var n = new a.TweenTask, o = this._layer.banners_f.createShowTweens(200);
            n.addTweens(o), o = this._layer.banners_e.createShowTweens(200), n.addTweens(o), n.start(function () {
                t._showNames()
            })
        }, e.prototype._showNames = function () {
            var t = this, e = new a.TweenTask, i = this._layer.info_f.createShowTweens(200);
            e.addTweens(i), i = this._layer.info_e.createShowTweens(200), e.addTweens(i), e.start(function () {
                t._showGauge()
            })
        }, e.prototype._showGauge = function () {
            var t = this, e = new _.ParallelTask, i = this._scene.data.battle_model,
                n = this._scene.view.layer_deck_info, o = i.ship_info.getFirstData(!1).getTotalHP(),
                r = i.ship_info.getLastData(!1).getTotalHP();
            e.add(n.friend.createTaskShowGauge(o, r, 200));
            var s = i.ship_info.getFirstData(!0).getTotalHP(), a = i.ship_info.getLastData(!0).getTotalHP();
            e.add(n.enemy.createTaskShowGauge(s, a, o, r, 200)), e.start(function () {
                t._hideEnemySide()
            })
        }, e.prototype._hideEnemySide = function () {
            var t = this, e = new a.TweenTask;
            e.addTween(createjs.Tween.get(this._scene.view.layer_deck_info.enemy).wait(500).to({ x: o.default.width }, 300));
            var i = this._scene.view.layer_banner.createSlideOutEnemyTweens(300, 500);
            e.addTweens(i), e.start(function () {
                t._endTask()
            })
        }, Object.defineProperty(e.prototype, "_layer", {
            get: function () {
                return this._scene.view.layer_banner
            }, enumerable: !0, configurable: !0
        }), e
    }(u.TaskBase), m = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._scene = e, i
        }

        return n(e, t), e.prototype._start = function () {
            var t = this, e = this._scene.data.battle_model.deck_f.ships_main;
            this._layer.banners_f.initialize(e), this._layer.info_f.initialize(e);
            var i = this._scene.data.battle_model.deck_e.ships_sub;
            this._layer.banners_e.initialize(i), this._layer.info_e.initialize(i);
            var n = new a.TweenTask, o = this._layer.banners_f.createShowTweens(200);
            n.addTweens(o), o = this._layer.banners_e.createShowTweens(200), n.addTweens(o), n.start(function () {
                t._showNames()
            })
        }, e.prototype._showNames = function () {
            var t = this, e = new a.TweenTask, i = this._layer.info_f.createShowTweens(200);
            e.addTweens(i), i = this._layer.info_e.createShowTweens(200), e.addTweens(i), e.start(function () {
                t._hideEnemyBannerAndNames()
            })
        }, e.prototype._hideEnemyBannerAndNames = function () {
            var t = this, e = new a.TweenTask, i = this._layer.banners_e.createHideTweens(500);
            e.addTweens(i), i = this._layer.info_e.createHideTweens(500), e.addTweens(i), e.start(function () {
                t._showGauge()
            })
        }, e.prototype._showGauge = function () {
            var t = this, e = new _.ParallelTask, i = this._scene.data.battle_model.deck_e.ships_main;
            this._layer.banners_e.initialize(i), this._layer.info_e.initialize(i);
            var n = new a.TweenTask, o = this._layer.banners_e.createShowTweens(500);
            n.addTweens(o), o = this._layer.info_e.createShowTweens(500), n.addTweens(o), e.add(n);
            var r = this._scene.data.battle_model, s = this._scene.view.layer_deck_info,
                u = r.ship_info.getFirstData(!1).getTotalHP(), l = r.ship_info.getLastData(!1).getTotalHP();
            e.add(s.friend.createTaskShowGauge(u, l, 500));
            var c = r.ship_info.getFirstData(!0).getTotalHP(), h = r.ship_info.getLastData(!0).getTotalHP();
            e.add(s.enemy.createTaskShowGauge(c, h, u, l, 500)), e.start(function () {
                t._hideEnemySide()
            })
        }, e.prototype._hideEnemySide = function () {
            var t = this, e = new a.TweenTask;
            e.addTween(createjs.Tween.get(this._scene.view.layer_deck_info.enemy).wait(500).to({ x: o.default.width }, 300));
            var i = this._scene.view.layer_banner.createSlideOutEnemyTweens(300, 500);
            e.addTweens(i), e.start(function () {
                t._endTask()
            })
        }, Object.defineProperty(e.prototype, "_layer", {
            get: function () {
                return this._scene.view.layer_banner
            }, enumerable: !0, configurable: !0
        }), e
    }(u.TaskBase)
}