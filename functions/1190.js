const function1190 = function (t, e, i) {
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
    var o = i(0), r = i(50), s = i(2), a = i(6), _ = i(131), u = i(414), l = i(241), c = i(415), h = i(1193),
        p = i(1194), d = i(1195), f = i(22), y = i(1), v = i(23), g = i(14), m = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._selected = null, i._onClickBtnListBackBox = function () {
                    i._listView._appearList(!1)
                }, i._debugButton = function () {
                    i._goSlotChange(2, 63)
                }, i._onClickDialogBtnBack = function () {
                    a.SE.play("205"), i._listView._appearBtn(!1)
                }, i._onClickDialogBtnSpecialRepair = function () {
                    i._NowAnimeUI = !0, i._listView._appearBtn(!1), a.SE.play("204"), i._topView.fadeMask.alpha = .2, 10 == i._items[i._NowSelectedNo].level ? o.default.sound.voice.play("9999", 310) : o.default.sound.voice.play("9999", 313), new d.RevampSlotListDetailAPI(i._recipe.list[i._NowSelectedBox].id, i._items[i._NowSelectedNo].memID, i._recipe, i._NowSelectedBox).start(function () {
                        i.Detail()
                    })
                }, i._onClickBtnGoFigure = function (t) {
                    a.SE.play("249"), i._ListNowPage = i._ListPagerLeft + t, i._drawList()
                }, i._onClickRecipeBox = function (t) {
                    i._NowAnimeUI || (i._NowSelectedBox = t, i.SetSlotitemList(i._recipe.list[i._NowSelectedBox].slot_id), a.SE.play("249"), o.default.sound.voice.playAtRandom("9999", [303, 304], [50, 50]))
                }, i._onClickRecipeBoxCertainSwitch = function (t) {
                    i._NowAnimeUI || (i._NowAnimeUI = !0, i._NowSelectedBox = t, i._topView.revampRecipeBox[i._NowSelectedBox].ToggleCertainSwitch(), i._tween0 = createjs.Tween.get(i).wait(300).call(function () {
                        i._tween0 = null, i._NowAnimeUI = !1
                    }))
                }, i._onClickRecipeBoxGoRemodel = function (t) {
                    i._NowAnimeUI || (i._NowSelectedBox = t, a.SE.play("204"), i._GoRemodel(i._NowSelectedBox))
                }, i._onRevampItemChangeQuit = function () {
                    i._topView.revampItemChange.IsAnime || i._BackPressed || (i._BackPressed = !0, i._topView.pushAnyScreen.visible = !1, i._topView.pushAnyScreen.interactive = i._topView.pushAnyScreen.buttonMode = !1, i._topView.revampItemChange.dispose(), i._topView.revampParticleOverLayer.dispose(), i._tween0 = createjs.Tween.get(i).wait(1e3).call(function () {
                        i._tween0 = null, o.default.view.overLayer.removeChild(i._topView.revampParticleOverLayer), o.default.view.overLayer.removeChild(i._topView.revampItemChange)
                    }), i._onClickScreen())
                }, i._onClickScreen = function () {
                    i._topView.pushAnyScreen.visible = !1, i._topView.pushAnyScreen.interactive = i._topView.pushAnyScreen.buttonMode = !1, i.RemodelSceneResume()
                }, i._onClickRecipeBoxBtnCancel = function (t) {
                    i._NowAnimeUI || (a.SE.play("205"), i._topView.revampRecipeBox[i._NowSelectedBox].SetDetail(!1), i._topView.revampBaloon.ResetBaloon(), i._ResumeBox(!0))
                }, i._onClickBtnLists = function (t) {
                    i._NowSelectedNo = 10 * i._ListNowPage + t, i._listView.focus_txt[t].dispose(), i._listView.focus_txt[t].initialize(8, 8), i._listView.focus_txt[t].interactive = i._listView.focus_txt[t].buttonMode = !1, i._listView.containerName[t].cacheAsBitmap = !1, i._listView.text_slotName[t].style.fill = 16777215, i._listView.containerName[t].cacheAsBitmap = !0, i._listView._appearBtn(!0)
                }, i._onClickBtnListGoPrev = function () {
                    0 != i._ListNowPage && a.SE.play("249"), i._ListNowPage -= 5, i._ListNowPage < 0 && (i._ListNowPage = 0), i._drawList()
                }, i._onClickBtnListGoNext = function () {
                    i._ListNowPage != i._ListLastPage - 1 && a.SE.play("249"), i._ListNowPage += 5, i._ListNowPage >= i._ListLastPage && (i._ListNowPage = i._ListLastPage - 1), i._drawList()
                }, i._scene = e, i._topView = e.viewTop, i._listView = e.viewList, i._tweens = new Array, i._NowVisibleUI = !0, i._NowAnimeUI = !1, i._recipe = new c.RevampSlotlistModel(i._o), i._req_buildkit_bak = new Array(3), i._req_remodelkit_bak = new Array(3), i._NowSelectedBox = -1, i._NowSelectedNo = -1, i._ListNowPage = 0, i._ListLastPage = -1, i._BackPressed = !1, i
            }

            return n(e, t), e.prototype._start = function () {
                var t = this;
                this._topView.debugBtn.on(y.EventType.CLICK, this._debugButton), this._listView.btn_prev.on(y.EventType.CLICK, this._onClickBtnListGoPrev), this._listView.btn_next.on(y.EventType.CLICK, this._onClickBtnListGoNext), this._listView.black_bg[0].on(y.EventType.CLICK, this._onClickBtnListBackBox), this._listView.btn_special_repair.on(y.EventType.CLICK, this._onClickDialogBtnSpecialRepair), this._listView.btn_back.on(y.EventType.CLICK, this._onClickDialogBtnBack);
                for (var e = this, i = 0; i < 3; i++) !function (i) {
                    e._topView.revampRecipeBox[i].btn_cancel.on(y.EventType.CLICK, function () {
                        t._onClickRecipeBoxBtnCancel(i)
                    }), e._topView.revampRecipeBox[i].box_bg_selected.on(y.EventType.CLICK, function () {
                        t._onClickRecipeBox(i)
                    }), e._topView.revampRecipeBox[i].switch_btn.on(y.EventType.CLICK, function () {
                        t._onClickRecipeBoxCertainSwitch(i)
                    }), e._topView.revampRecipeBox[i].btn_start.on(y.EventType.CLICK, function () {
                        t._onClickRecipeBoxGoRemodel(i)
                    })
                }(i);
                for (var n = this, i = 0; i < 10; i++) !function (e) {
                    n._listView.focus_txt[e].on(y.EventType.CLICK, function () {
                        t._onClickBtnLists(e)
                    })
                }(i);
                for (var o = this, i = 0; i < 5; i++) !function (e) {
                    o._listView.btn_list_goFigure[e].on(y.EventType.CLICK, function () {
                        t._onClickBtnGoFigure(e)
                    })
                }(i);
                this._topView.pushAnyScreen.on(y.EventType.CLICK, function () {
                    t._onClickScreen()
                }), this._topView.revampItemChange.whiteMask.on(y.EventType.CLICK, function () {
                    t._onRevampItemChangeQuit()
                }), this.GetRecipe()
            }, e.prototype._voiceEnd = function () {
                this._topView.revampRecipeBox[this._NowSelectedBox].isVoiceFinished = !0
            }, e.prototype._createLevelSortedUnsetListFromMstId = function (t) {
                var e = o.default.model.slot.createUnsetListFromMstId(t);
                return r.SlotUtil.sort(e, 1), e
            }, e.prototype.GetRevampableItems = function (t, e) {
                for (var i = this._createLevelSortedUnsetListFromMstId(t), n = 0, o = 0, r = i; o < r.length; o++) {
                    var s = r[o];
                    0 != s.level || s.isLocked() || s.memID == e || n++
                }
                return n
            }, e.prototype.GetRecipe = function () {
                var t = this;
                new p.RevampSlotlistAPI(this._recipe).start(function () {
                    t.SetRecipes()
                })
            }, e.prototype.SetRecipes = function () {
                for (var t = 0; t < this._recipe.list.length; t++) {
                    this._req_buildkit_bak[t] = this._recipe.list[t].req_buildkit, this._req_remodelkit_bak[t] = this._recipe.list[t].req_remodelkit, this._topView.revampRecipeBox[t].slotItemName.text = o.default.model.slot.getMst(this._recipe.list[t].slot_id).name, this._topView.revampRecipeBox[t].slotTypeItemIcon.texture = _.COMMON_ICON_WEAPON.getTextureFromMstID(o.default.model.slot.getMst(this._recipe.list[t].slot_id).iconType);
                    var e = this._recipe.list[t].slot_id;
                    this._topView.revampRecipeBox[t].slotItemIcon.texture = PIXI.Texture.fromImage(v.SlotLoader.getPath(e, "item_on")), this._topView.revampRecipeBox[t].slotItemParamsValue[0] = this._recipe.list[t].req_fuel, this._topView.revampRecipeBox[t].slotItemParamsValue[1] = this._recipe.list[t].req_bull, this._topView.revampRecipeBox[t].slotItemParamsValue[2] = this._recipe.list[t].req_steel, this._topView.revampRecipeBox[t].slotItemParamsValue[3] = this._recipe.list[t].req_bauxite, this._topView.revampRecipeBox[t].slotItemParamsValue[4] = this._recipe.list[t].req_buildkit, this._topView.revampRecipeBox[t].slotItemParamsValue[5] = this._recipe.list[t].req_remodelkit, this._topView.revampRecipeBox[t].SlotItemParamsUpdate(), 0 == this._createLevelSortedUnsetListFromMstId(this._recipe.list[t].slot_id).length && (this._topView.revampRecipeBox[t].btn_select.texture = u.REVAMP_BOX.getTexture(11), this._topView.revampRecipeBox[t].box_bg_selected.interactive = this._topView.revampRecipeBox[t].box_bg_selected.buttonMode = !1), this._topView.revampRecipeBox[t].SetNumbers(this._recipe.list[t].req_buildkit, this._recipe.list[t].req_remodelkit)
                }
                this._topView.revampBaloon._setBalloon2(1), this._AlphaAnimeG(this._topView.fadeMask, !1), o.default.sound.voice.playAtRandom("9999", [301, 302], [50, 50])
            }, e.prototype.SetFontStyle = function (t, e) {
                switch (e) {
                    case 0:
                        this._listView.btn_list_goFigureStr[t].style.fill = 1949120, this._listView.btn_list_goFigureStr[t].style.fontSize = 33, this._listView.btn_list_goFigure[t].interactive = this._listView.btn_list_goFigure[t].buttonMode = !1;
                        break;
                    case 1:
                        this._listView.btn_list_goFigureStr[t].style.fill = 0, this._listView.btn_list_goFigureStr[t].style.fontSize = 33, this._listView.btn_list_goFigure[t].interactive = this._listView.btn_list_goFigure[t].buttonMode = !0;
                        break;
                    case 2:
                        this._listView.btn_list_goFigureStr[t].style.fill = 16777215, this._listView.btn_list_goFigureStr[t].style.fontSize = 33, this._listView.btn_list_goFigure[t].interactive = this._listView.btn_list_goFigure[t].buttonMode = !1
                }
            }, e.prototype.PagerFigureDraw = function () {
                if (this._ListLastPage <= 5) {
                    this._ListPagerLeft = 0;
                    for (var t = 0; t < 5; t++) this._listView.btn_list_goFigureStr[t].text = (t + 1).toString(), t == this._ListNowPage ? this.SetFontStyle(t, 0) : t < this._ListLastPage ? this.SetFontStyle(t, 1) : this.SetFontStyle(t, 2)
                } else {
                    this._ListLastPage - this._ListNowPage <= 3 ? this._ListPagerLeft = this._ListLastPage - 5 : this._ListNowPage < 3 ? this._ListPagerLeft = 0 : this._ListPagerLeft = this._ListNowPage - 2;
                    for (var t = 0; t < 5; t++) this._listView.btn_list_goFigureStr[t].text = (t + 1 + this._ListPagerLeft).toString(), t + this._ListPagerLeft == this._ListNowPage ? this.SetFontStyle(t, 0) : this.SetFontStyle(t, 1)
                }
            }, e.prototype.Detail = function () {
                this._recipe.list[this._NowSelectedBox].req_useitem_id;
                var t;
                t = 0 == this._recipe.list[this._NowSelectedBox].req_slot_num ? this.GetRevampableItems(this._recipe.list[this._NowSelectedBox].slot_id, this._items[this._NowSelectedNo].memID) : this.GetRevampableItems(this._recipe.list[this._NowSelectedBox].req_slot_id, this._items[this._NowSelectedNo].memID), this._topView.revampRecipeBox[this._NowSelectedBox].SetNumbers(this._recipe.list[this._NowSelectedBox].req_buildkit, this._recipe.list[this._NowSelectedBox].req_remodelkit), this._topView.revampRecipeBox[this._NowSelectedBox].SetDetailNumbers(this._recipe.list[this._NowSelectedBox].certain_buildkit, this._recipe.list[this._NowSelectedBox].certain_remodelkit, t), this._topView.revampRecipeBox[this._NowSelectedBox].SetDetail(!0), this._topView.revampRecipeBox[this._NowSelectedBox].SetStarts(this._items[this._NowSelectedNo].level), this._CenteringBox()
            }, e.prototype._setBtnBalloon = function () {
                var t;
                t = 0 == this._recipe.list[this._NowSelectedBox].req_slot_num ? this.GetRevampableItems(this._recipe.list[this._NowSelectedBox].slot_id, this._items[this._NowSelectedNo].memID) : this.GetRevampableItems(this._recipe.list[this._NowSelectedBox].req_slot_id, this._items[this._NowSelectedNo].memID), this._NowAnimeUI = !1, this._topView.revampRecipeBox[this._NowSelectedBox].CheckGoBtnNyCertainly(), this._topView.revampRecipeBox[this._NowSelectedBox].CheckNeedItem(this._recipe.list[this._NowSelectedBox]), this._topView.revampRecipeBox[this._NowSelectedBox].CheckGoBtnByItem(this._recipe.list[this._NowSelectedBox], t, this._items[this._NowSelectedNo].isLocked()), this._topView.revampBaloon.SetBalloon(this._recipe.list[this._NowSelectedBox], t, this._items[this._NowSelectedNo].isLocked())
            }, e.prototype.SetSlotitemList = function (t) {
                this._listView._appearList(!0), null != this._items && delete this._items, this._items = this._createLevelSortedUnsetListFromMstId(t);
                this._ListLastPage = parseInt((this._items.length - 1) / 10 + "", 10) + 1, this._ListNowPage = 0, this._drawList()
            }, e.prototype._GoRemodel = function (t) {
                var e = this;
                this._topView.sceneChangeGuard.interactive = !0, o.default.sound.voice.playAtRandom("9999", [306, 307], [50, 50]);
                var i = new h.RevampRemodelSlotAPI(this._recipe.list[this._NowSelectedBox], this._items[this._NowSelectedNo].memID, this._topView.revampRecipeBox[this._NowSelectedBox].isCertainly),
                    n = i.result;
                i.start(function () {
                    e._RemodelScene(n)
                })
            }, e.prototype._RemodelScene = function (t) {
                var e = this;
                o.default.view.portMain.updateInfo();
                if (this._topView.revampBaloon._setBalloon1(0), this._topView.revampBaloon._setBalloon2(0), this._topView.revampBaloon._setBalloon3(0, 0), this._topView.revampakashi.AkashiMove(!0), this._topView.revampakashi.Spark(), a.SE.play("203"), this._topView.revampRecipeBox[this._NowSelectedBox].RevampFlash(t), 0 != t.voice_ship_id) {
                    var i = o.default.model.deck.get(1).getShipModel(1).mstID;
                    f.MathUtil.zeroPadding(i, 4);
                    this._topView.revamp2ndShip.texture = PIXI.Texture.fromImage(g.ShipLoader.getPath(i, !1, "full"));
                    this._topView.revamp2ndShip.scale.set(.6, .6);
                    var n = o.default.model.ship_graph.get(i).getFaceRect(!1);
                    this._leaveX = .6 * -n.x + 198, this._topView.revamp2ndShip.position.set(this._leaveX, .6 * -n.y + 153), this._topView.revamp2ndShip.alpha = 0, this._tween0 = createjs.Tween.get(this._topView.revamp2ndShip).to({
                        x: .6 * -n.x + 348,
                        alpha: 1
                    }, 500, createjs.Ease.quadIn).wait(500).call(function () {
                        e._tween0 = null, o.default.sound.voice.play(t.voice_ship_id + "", t.voice_id, function () {
                            return e._voiceEnd()
                        }), e._topView.revampRecipeBox[e._NowSelectedBox].noVoiceWait(5e3)
                    })
                } else this._topView.revampRecipeBox[this._NowSelectedBox].noVoiceWait(2500);
                this._checkRecipeBoxisFinished(t)
            }, e.prototype._checkRecipeBoxisFinished = function (t) {
                var e = this;
                this._topView.revampRecipeBox[this._NowSelectedBox].isFlashFinished ? 0 != t.voice_ship_id ? this._tween0 = createjs.Tween.get(this._topView.revamp2ndShip).to({
                    x: this._leaveX,
                    alpha: 0
                }, 500, createjs.Ease.quadIn).call(function () {
                    e._tween0 = null, e._topView.revamp2ndShip.alpha = 1, e._topView.revamp2ndShip.position.set(-600, 138), e._RemodelSceneResult(t)
                }) : this._RemodelSceneResult(t) : this._tween0 = createjs.Tween.get(this).wait(200).call(function () {
                    e._tween0 = null, e._checkRecipeBoxisFinished(t)
                })
            }, e.prototype._RemodelSceneResult = function (t) {
                if (this._topView.revampRecipeBox[this._NowSelectedBox].FlashBoxOff(), 1 == t.isSuccess()) {
                    var e = o.default.model.slot.get(t.target_slotitem_memid);
                    if (t.remodel_id[0] != t.remodel_id[1]) return void this._goSlotChange(t.remodel_id[0], t.remodel_id[1]);
                    this._topView.revampBaloon._setBalloon4(1), this._topView.revampRecipeBox[this._NowSelectedBox].SetStarts(e.level), this._topView.revampBaloon.SetResultBalloon(!0, t.remodel_id[1], e.level), this._topView.revampBaloon.SetResultBalloonKira(!0), o.default.sound.voice.play("9999", 308), this._topView.revampParticleLayer.activate(), a.SE.play("211")
                } else this._topView.revampBaloon._setBalloon4(1), this._topView.revampBaloon.SetResultBalloon(!1, 0, 0), o.default.sound.voice.play("9999", 309), a.SE.play("206");
                this._topView.pushAnyScreen.visible = !0, this._topView.pushAnyScreen.interactive = this._topView.pushAnyScreen.buttonMode = !0
            }, e.prototype._goSlotChange = function (t, e) {
                var i = this;
                this._topView.revampItemChange.preload(t, e, function () {
                    i._topView.revampItemChange.initialize(i._scene), o.default.view.overLayer.addChild(i._topView.revampItemChange), i._waitTextureload()
                })
            }, e.prototype._waitTextureload = function () {
                var t = this;
                this._tween0 = createjs.Tween.get(this).wait(200).call(function () {
                    t._tween0 = null, t._topView.revampItemChange._scene0(), t._tween1 = createjs.Tween.get(t).wait(200).call(function () {
                        t._tween1 = null, t._topView.revampParticleOverLayer.initialize(), o.default.view.overLayer.addChild(t._topView.revampParticleOverLayer)
                    })
                })
            }, e.prototype.RemodelSceneResume = function () {
                var t = this;
                this._topView.revampParticleLayer.dispose(), this._topView.sceneChangeGuard.interactive = !1, this._tween0 = createjs.Tween.get(this).call(function () {
                    t._topView.revampBaloon._setBalloon4(0), t._topView.revampakashi.AkashiMove(!1), t._topView.revampRecipeBox[t._NowSelectedBox].SetDetail(!1), t._ResumeBox(!0), t._topView.revampRecipeBox[t._NowSelectedBox].btn_cancel.dispose(), t._topView.revampRecipeBox[t._NowSelectedBox].btn_cancel.initialize(4, 6)
                }).wait(1e3).call(function () {
                    t._tween0 = null, t._topView.revampBaloon.ResetBaloon(), t._topView.revampBaloon._setBalloon1(9), t._topView.revampBaloon._setBalloon2(1), t._BackPressed = !1
                })
            }, e.prototype._skill2Texture = function (t) {
                switch (t) {
                    case 1:
                        return l.REVAMP_LIST.getTexture(15);
                    case 2:
                        return l.REVAMP_LIST.getTexture(16);
                    case 3:
                        return l.REVAMP_LIST.getTexture(17);
                    case 4:
                        return l.REVAMP_LIST.getTexture(18);
                    case 5:
                        return l.REVAMP_LIST.getTexture(19);
                    case 6:
                        return l.REVAMP_LIST.getTexture(20);
                    case 7:
                        return l.REVAMP_LIST.getTexture(21);
                    default:
                        return PIXI.Texture.EMPTY
                }
            }, e.prototype._drawList = function () {
                for (var t = 0, e = 0, i = 0, n = this._items; i < n.length; i++) {
                    var o = n[i];
                    if (this._ListNowPage > e / 10) e++; else if (this._listView.focus_txt[t].dispose(), this._listView.focus_txt[t].initialize(2, 8), this._listView.focus_txt[t].interactive = this._listView.focus_txt[t].buttonMode = !0, this._listView.containerName[t].cacheAsBitmap = !1, this._listView.text_slotName[t].style.fill = 4999235, this._listView.text_slotName[t].text = o.name, this._listView.text_slotName[t].visible = !0, this._listView.containerName[t].cacheAsBitmap = !0, this._listView.type_icon[t].texture = _.COMMON_ICON_WEAPON.getTextureFromMstID(o.iconType), this._listView.type_icon[t].visible = !0, this._listView.skill_lv[t].texture = this._skill2Texture(o.skillLevel), this._listView.skill_lv[t].visible = !0, this._listView.setStars(t, o.level), this._listView.lock_on[t].visible = o.isLocked(), 10 == ++t) break
                }
                for (var o = t; o < 10; o++) this._listView.focus_txt[o].dispose(), this._listView.focus_txt[o].initialize(2, 8), this._listView.focus_txt[o].interactive = this._listView.focus_txt[o].buttonMode = !1, this._listView.containerName[o].cacheAsBitmap = !1, this._listView.text_slotName[o].style.fill = 4999235, this._listView.text_slotName[o].text = "", this._listView.text_slotName[o].visible = !1, this._listView.containerName[o].cacheAsBitmap = !0, this._listView.type_icon[o].texture = PIXI.Texture.EMPTY, this._listView.type_icon[o].visible = !1, this._listView.skill_lv[o].texture = PIXI.Texture.EMPTY, this._listView.skill_lv[o].visible = !1, this._listView.icon_star[o].visible = !1, this._listView.icon_starM[o].visible = !1, this._listView.icon_plus[o].visible = !1, this._listView.text_level[o].visible = !1, this._listView.lock_on[o].visible = !1;
                this.PagerFigureDraw()
            }, e.prototype._removeEventListeners = function () {
                var t = this;
                this._listView.btn_prev.off(y.EventType.CLICK, this._onClickBtnListGoPrev), this._listView.btn_next.off(y.EventType.CLICK, this._onClickBtnListGoNext), this._listView.btn_special_repair.off(y.EventType.CLICK, this._onClickDialogBtnSpecialRepair), this._listView.btn_back.off(y.EventType.CLICK, this._onClickDialogBtnBack), this._listView.black_bg[0].on(y.EventType.CLICK, this._onClickBtnListBackBox);
                for (var e = this, i = 0; i < 3; i++) !function (i) {
                    e._topView.revampRecipeBox[i].btn_cancel.off(y.EventType.CLICK, function () {
                        t._onClickRecipeBoxBtnCancel(i)
                    }), e._topView.revampRecipeBox[i].box_bg_selected.off(y.EventType.CLICK, function () {
                        t._onClickRecipeBox(i)
                    }), e._topView.revampRecipeBox[i].switch_btn.off(y.EventType.CLICK, function () {
                        t._onClickRecipeBoxCertainSwitch(i)
                    }), e._topView.revampRecipeBox[i].btn_start.off(y.EventType.CLICK, function () {
                        t._onClickRecipeBoxGoRemodel(i)
                    })
                }(i);
                for (var n = this, i = 0; i < 10; i++) !function (e) {
                    n._listView.focus_txt[e].off(y.EventType.CLICK, function () {
                        t._onClickBtnLists(e)
                    })
                }(i);
                for (var o = this, i = 0; i < 5; i++) !function (e) {
                    o._listView.btn_list_goFigure[e].off(y.EventType.CLICK, function () {
                        t._onClickBtnGoFigure(e)
                    })
                }(i);
                this._topView.pushAnyScreen.off(y.EventType.CLICK, function () {
                    t._onClickScreen()
                })
            }, e.prototype._CenteringBox = function () {
                var t = this;
                this._topView.fadeMask.interactive = !0, 0 == this._NowSelectedBox ? (a.SE.play("207"), this._tween1 = createjs.Tween.get(this._topView.revampRecipeBox[1]).to({ y: 1239 }, 1e3, createjs.Ease.quartIn).call(function () {
                    t._tween1 = null
                }), this._tween2 = createjs.Tween.get(this._topView.revampRecipeBox[2]).to({ y: 1539 }, 800, createjs.Ease.quartIn).call(function () {
                    t._tween2 = null
                }), this._tween0 = createjs.Tween.get(this._topView.revampRecipeBox[0]).wait(500).to({ y: 339 }, 400, createjs.Ease.getPowIn(2.72 * 2.5)).to({ y: 354 }, 0).wait(30).to({ y: 332 }, 0).wait(40).to({ y: 339 }, 0).wait(30).call(function () {
                    t._tween0 = null, t._topView.fadeMask.alpha = 0, t._topView.fadeMask.interactive = !1, t._setBtnBalloon()
                })) : 1 == this._NowSelectedBox ? (this._tween0 = createjs.Tween.get(this._topView.revampRecipeBox[0]).to({ y: -561 }, 1e3, createjs.Ease.quartIn).call(function () {
                    t._topView.revampRecipeBox[0].position.y = -111, t._tween0 = null, a.SE.play("209"), t._topView.fadeMask.alpha = 0, t._topView.fadeMask.interactive = !1, t._setBtnBalloon()
                }), this._tween2 = createjs.Tween.get(this._topView.revampRecipeBox[2]).to({ y: 1239 }, 1e3, createjs.Ease.quartIn).call(function () {
                    t._topView.revampRecipeBox[0].position.y = 789, t._tween2 = null
                })) : (a.SE.play("207"), this._tween0 = createjs.Tween.get(this._topView.revampRecipeBox[0]).to({ y: -861 }, 800, createjs.Ease.quartIn).call(function () {
                    t._tween0 = null
                }), this._tween1 = createjs.Tween.get(this._topView.revampRecipeBox[1]).to({ y: -561 }, 1e3, createjs.Ease.quartIn).call(function () {
                    t._tween1 = null
                }), this._tween2 = createjs.Tween.get(this._topView.revampRecipeBox[2]).wait(500).to({ y: 339 }, 400, createjs.Ease.getPowIn(2.72 * 2.5)).to({ y: 324 }, 0).wait(30).to({ y: 346 }, 0).wait(40).to({ y: 339 }, 0).wait(30).call(function () {
                    t._tween2 = null, t._topView.fadeMask.alpha = 0, t._topView.fadeMask.interactive = !1, t._setBtnBalloon()
                }))
            }, e.prototype._ResumeBox = function (t) {
                var e = this;
                this._NowAnimeUI = !0, this._topView.revampRecipeBox[this._NowSelectedBox].SetNumbers(this._req_buildkit_bak[this._NowSelectedBox], this._req_remodelkit_bak[this._NowSelectedBox]), 0 == this._NowSelectedBox ? (this._tween3 = createjs.Tween.get(this._topView.revampRecipeBox[0]).wait(350).call(function () {
                    a.SE.play("208")
                }).wait(700).call(function () {
                    a.SE.play("209")
                }).wait(100).call(function () {
                    a.SE.play("209"), e._tween3 = null
                }), this._tween0 = createjs.Tween.get(this._topView.revampRecipeBox[0]).to({ y: 159 }, 700, createjs.Ease.getPowIn(2.72 * 2.5)).to({ y: 144 }, 0).wait(30).to({ y: 166 }, 0).wait(40).to({ y: 159 }, 0).wait(30).call(function () {
                    e._tween0 = null
                }), this._tween1 = createjs.Tween.get(this._topView.revampRecipeBox[1]).wait(300).to({ y: 339 }, 750, createjs.Ease.quartIn).to({ y: 324 }, 0).wait(30).to({ y: 346 }, 0).wait(40).to({ y: 339 }, 0).wait(30).call(function () {
                    e._tween1 = null
                }), this._tween2 = createjs.Tween.get(this._topView.revampRecipeBox[2]).wait(500).to({ y: 519 }, 750, createjs.Ease.quartIn).to({ y: 504 }, 0).wait(30).to({ y: 526 }, 0).wait(40).to({ y: 519 }, 0).wait(30).call(function () {
                    e._tween2 = null, e._NowAnimeUI = !1
                })) : 1 == this._NowSelectedBox ? (this._tween3 = createjs.Tween.get(this._topView.revampRecipeBox[0]).wait(400).call(function () {
                    e._tween3 = null, a.SE.play("208")
                }), this._tween0 = createjs.Tween.get(this._topView.revampRecipeBox[0]).to({ y: 159 }, 700, createjs.Ease.getPowIn(2.72 * 2.5)).to({ y: 174 }, 0).wait(30).to({ y: 152 }, 0).wait(40).to({ y: 159 }, 0).wait(30).call(function () {
                    e._tween0 = null, e._NowAnimeUI = !1
                }), this._tween2 = createjs.Tween.get(this._topView.revampRecipeBox[2]).to({ y: 519 }, 700, createjs.Ease.getPowIn(2.72 * 2.5)).to({ y: 504 }, 0).wait(30).to({ y: 526 }, 0).wait(40).to({ y: 519 }, 0).wait(30).call(function () {
                    e._tween2 = null
                })) : 2 == this._NowSelectedBox && (this._tween3 = createjs.Tween.get(this._topView.revampRecipeBox[0]).wait(350).call(function () {
                    a.SE.play("208")
                }).wait(700).call(function () {
                    a.SE.play("209")
                }).wait(100).call(function () {
                    a.SE.play("209"), e._tween3 = null
                }), this._tween0 = createjs.Tween.get(this._topView.revampRecipeBox[0]).wait(500).to({ y: 159 }, 700, createjs.Ease.quartIn).to({ y: 144 }, 0).wait(30).to({ y: 166 }, 0).wait(40).to({ y: 159 }, 0).wait(30).call(function () {
                    e._tween0 = null, e._NowAnimeUI = !1
                }), this._tween1 = createjs.Tween.get(this._topView.revampRecipeBox[1]).wait(300).to({ y: 339 }, 700, createjs.Ease.quartIn).to({ y: 324 }, 0).wait(30).to({ y: 346 }, 0).wait(40).to({ y: 339 }, 0).wait(30).call(function () {
                    e._tween1 = null
                }), this._tween2 = createjs.Tween.get(this._topView.revampRecipeBox[2]).to({ y: 519 }, 700, createjs.Ease.getPowIn(2.72 * 2.5)).to({ y: 504 }, 0).wait(30).to({ y: 526 }, 0).wait(40).to({ y: 519 }, 3).wait(30).call(function () {
                    e._tween2 = null
                }))
            }, e.prototype._AlphaAnime = function (t, e) {
                e ? this._tweens.push(createjs.Tween.get(t).to({ alpha: 1 }, 150)) : this._tweens.push(createjs.Tween.get(t).to({ alpha: 0 }, 150))
            }, e.prototype._AlphaAnimeG = function (t, e) {
                e ? this._tweens.push(createjs.Tween.get(t).to({ alpha: 1 }, 150)) : this._tweens.push(createjs.Tween.get(t).to({ alpha: 0 }, 150))
            }, e.prototype._alignMid = function (t, e, i) {
                t.position.set(parseInt(e - t.width / 2 + ""), parseInt(i - t.height / 2 + ""))
            }, e.prototype.dispose = function () {
                this._removeEventListeners(), this._items = null, this._tweens = null, this._recipe = null, this._req_buildkit_bak = null, this._req_remodelkit_bak = null
            }, e.prototype._endTask = function (e) {
                void 0 === e && (e = !1), this._scene = null, this._topView = null, this._listView = null, this._selected = null, this._tweens = null, t.prototype._endTask.call(this)
            }, e
        }(s.TaskBase);
    e.TaskTop = m
}