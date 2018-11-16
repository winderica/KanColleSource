const function918 = function (t, e, i) {
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
    var o = i(5), r = i(0), s = i(17), a = i(258), _ = i(28), u = i(18), l = i(32), c = i(69), h = i(221),
        p = i(29), d = i(53), f = i(919), y = i(223), m = i(224), v = i(920), g = i(348), b = i(929), w = i(957),
        x = i(967), I = i(968), T = i(970), O = i(978), P = i(980), C = i(996), k = i(1), M = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._serial_id = null, n._onChangeArea = function (t) {
                    n.update(t)
                }, n._onBack = function () {
                    var t = 0;
                    n._offset_list.pop(), n._offset_list.length > 0 && (t = n._offset_list[n._offset_list.length - 1]);
                    var e = n._selected_area_id, i = r.default.model.airunit.getAirUnitList(e).length > 0;
                    n._layout.update(n._selected_area_id, t, i)
                }, n._onNext = function () {
                    var t = n._layout.content.offset + n._layout.content.num;
                    n._offset_list.push(t);
                    var e = n._selected_area_id, i = r.default.model.airunit.getAirUnitList(e).length > 0;
                    n._layout.update(n._selected_area_id, t, i)
                }, n._onSelect = function (t, e) {
                    if (1 != n._cancelArea.isNowAnimation()) {
                        var i = r.default.model.basic.member_id;
                        n._serial_id = a.__create_serial_id__(i, e.x, e.y), n._cancelArea.interactive = !0, n._cancelArea.buttonMode = !0, n._cancelArea.visible = !0, n._cancelArea.show(200);
                        var o = r.default.model.map.getMapMem(t), s = r.default.view.overLayer, _ = n._layout.content,
                            u = n._detailPanel, l = r.default.model.map.getMapMem(t - 1), c = 0;
                        null != l && (c = l.getSelectedOperationType());
                        new w.TaskShowDetailPanel(o, c, s, _, u).start(null, function () {
                            n._cancelArea.interactive = !1, n._cancelArea.buttonMode = !1, n._cancelArea.hide(200, function () {
                                n._cancelArea.visible = !1
                            })
                        })
                    }
                }, n._onCancel = function () {
                    1 != n._cancelArea.isNowAnimation() && (n._cancelArea.interactive = !1, n._cancelArea.buttonMode = !1, n._cancelArea.hide(200, function () {
                        n._cancelArea.visible = !1
                    }), n._detailPanel.deactivate(), createjs.Tween.get(n._detailPanel).to({ x: o.default.width }, 200).call(function () {
                        n._detailPanel.visible = !1
                    }))
                }, n._onDecision = function (t) {
                    if (null == n._deckSelectPanel) {
                        var e = r.default.model.map.getMapMem(t);
                        null != n._event_sortie_condition && n._event_sortie_condition.update(e), n._deckSelectPanel = new T.ContainerDeckSelect(e.availableAirUnitCount, n._event_sortie_condition, n._onGo);
                        var i = r.default.model.deck.getIDs(), o = r.default.model.deck.isCombined();
                        n._deckSelectPanel.initialize(e, i, o), n.addChild(n._deckSelectPanel), n._deckSelectPanel.cancelArea.show(300), createjs.Tween.get(n._detailPanel).to({ x: 322 }, 300), createjs.Tween.get(n._deckSelectPanel.panel).to({ x: 494 }, 300).call(function () {
                            n._deckSelectPanel.activate()
                        })
                    }
                }, n._onGo = function (t, e) {
                    if (-1 == e) n._onCancel(), n._deckSelectPanel.deactivate(), n._deckSelectPanel.cancelArea.hide(300), createjs.Tween.get(n._deckSelectPanel.panel).to({ x: o.default.width }, 300).call(function () {
                        n.removeChild(n._deckSelectPanel), n._deckSelectPanel.dispose(), n._deckSelectPanel = null
                    }); else {
                        var i = r.default.model.deck.get(e), s = i.getShipModel(0), a = s.mstID;
                        r.default.sound.voice.playAtRandom(a.toString(), [13, 14], [50, 50]);
                        var _ = new l.APIConnector, u = r.default.model.map.getMapMem(t),
                            p = new v.APIMapStart(u, e, n._serial_id), d = p.model;
                        _.add(p), 30 == r.default.model.basic.getTutorialProgress() && _.add(new c.UpdateTutorialAPI(40)), _.start(function () {
                            var t = r.default.model.basic.medal_num, e = r.default.model.basic.nickName,
                                n = new h.DeckModelReplica(i, !1, t, e), o = new f.MapSceneModel(d, n);
                            r.default.scene.change(33, o)
                        })
                    }
                }, n._onSelectAirUnit = function () {
                    null == n._airunit_task && (n._airunit_task = new b.TaskShowAirUnitPanel(n, n._selected_area_id), n._airunit_task.start(function () {
                        n._airunit_task = null
                    }))
                }, n._layout = new P.ContainerLayout(n._onSelect, n._onSelectAirUnit, n._onBack, n._onNext), n._switch = new m.CompSwitchBtns(0, e, i), n._switch.position.set(795, 162), n._area_icons = new I.CompAreaIcons(n._onChangeArea), n._area_icons.position.set(188, 633), n._airUnitBtn = new x.AirUnitBtn(n._onSelectAirUnit), n._airUnitBtn.position.set(651, 165), n._airUnitBtn.visible = !1, n._cancelArea = new u.FadeBox(.3), n._cancelArea.hide(), n._cancelArea.visible = !1, n._detailPanel = new O.PanelDetail(n._onDecision), n._detailPanel.position.set(o.default.width, 0), n._detailPanel.visible = !1, n._offset_list = [], n
            }

            return n(e, t), e.prototype.initialize = function () {
                var t = new PIXI.Sprite(p.SALLY_COMMON.getTexture(26));
                t.position.set(144, 140);
                var e = new PIXI.Sprite(p.SALLY_COMMON.getTexture(50));
                e.position.set(0, 102);
                var i = new PIXI.Sprite(d.SALLY_SORTIE.getTexture(8));
                i.position.set(198, 113);
                var n = new PIXI.Sprite(d.SALLY_SORTIE.getTexture(41));
                n.position.set(191, 162), this._layout.initialize(), this._switch.initialize(), this._area_icons.initialize(), this._airUnitBtn.initialize(), this._cancelArea.on(k.EventType.CLICK, this._onCancel), this._detailPanel.initialize(), this.addChild(t), this.addChild(e), this.addChild(i), this.addChild(n), this.addChild(this._layout), this.addChild(this._switch), this.addChild(this._area_icons), this.addChild(this._airUnitBtn), this.addChild(this._cancelArea), this.addChild(this._detailPanel)
            }, e.prototype.update = function (t) {
                var e = this;
                if (this._selected_area_id != t) {
                    r.default.view.loading.show(200);
                    var i = new _.SerialTask;
                    t == s.EVENT_AREA_ID && null == this._event_sortie_condition && (this._event_sortie_condition = new C.EventSortieCondition, i.add(this._event_sortie_condition.getPreLoadTask()));
                    var n = r.default.model.airunit.getAirUnitList(t).length > 0;
                    this._airUnitBtn.visible = t != s.EVENT_AREA_ID && n;
                    var o = r.default.model.map.getMapMems(t);
                    i.add(new g.TaskLoadGaugeResources(o)), i.start(function () {
                        r.default.view.loading.hide(200), e._selected_area_id = t, e._area_icons.update(t), e._offset_list = [], e._layout.update(t, 0, n), t == s.EVENT_AREA_ID && r.default.sound.voice.play("9999", 414)
                    })
                }
            }, e.prototype.activate = function () {
                this._layout.off("back", this._onBack), this._layout.off("next", this._onNext), this._switch.activate(), this._area_icons.activate(), this._layout.on("back", this._onBack), this._layout.on("next", this._onNext), this._airUnitBtn.activate()
            }, e.prototype.deactivate = function () {
                this._layout.off("back", this._onBack), this._layout.off("next", this._onNext), this._layout.deactivate(), this._switch.deactivate(), this._area_icons.deactivate(), this._airUnitBtn.deactivate()
            }, e.prototype.dispose = function () {
                this._event_sortie_condition = null, this._layout.dispose(), this._layout = null, this._switch.dispose(), this._switch = null, this._area_icons.dispose(), this._area_icons = null, this._airUnitBtn.dispose(), this._airUnitBtn = null, this._cancelArea.off(k.EventType.CLICK, this._onCancel), this._cancelArea = null, this._detailPanel.dispose(), this._detailPanel = null, null != this._deckSelectPanel && (this._deckSelectPanel.dispose(), this._deckSelectPanel = null), null != this._airunit_task && (this._airunit_task.dispose(), this._airunit_task = null), this.removeChildren()
            }, e
        }(y.ViewMainBase);
    e.ViewMain = M
}