const function1186 = function (t, e, i) {
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
        r = i(2),
        s = i(80),
        a = i(78),
        _ = i(200),
        l = i(6),
        u = i(412),
        c = i(1187),
        h = i(1),
        p = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._selected = null, i._FurnitureIdsonPage = new Array(10), i._ids_before = new Array(7), i._ids_after = new Array(7), i._ids_season = new Array(6), i._onClickBtnGoFigure = function (t) {
                    i._ListNowPage = i._ListPagerLeft + t, l.SE.play("249"), i._drawList()
                }, i._onClickBtnLists = function (t) {
                    if (i._NowFurnitureSelected = i._FurnitureIdsonPage[t], i._ListNowFurnitureBeforeSelected != i._NowFurnitureSelected) {
                        -1 != i._ListNowFurnitureBeforeSelected && l.SE.play("239"), i._ListNowFurnitureBeforeSelected = i._NowFurnitureSelected, i._ListNowFurnitureSelected = t, i._topView.itemName.text = i._topView.lists_str[t].text, i._topView.itemName.position.set(Math.floor(975 - i._topView.itemName.width / 2), Math.floor(409 - i._topView.itemName.height / 2));
                        var e = o.default.model.furniture.getData(i._NowFurnitureSelected).description;
                        i._topView.itemDescription.text = e.replace(/<br>/g, "\n"), i._topView.bgm_fairy.scale.x = o.default.model.furniture.getData(i._NowFurnitureSelected).seasonID > 0 ? 1 : 0;
                        var n = o.default.model.furniture.isActive(i._NowFurnitureSelected);
                        if (n) {
                            var r = new a.FurnitureLoader;
                            r.add(i._NowFurnitureSelected, "thumbnail"), r.load(function () {
                                i._topView.thumbnail.texture = o.default.resources.getFurniture(i._NowFurnitureSelected, "thumbnail")
                            }), i._topView.thumbnail.scale.set(1, 1), i._topView.thumbnail.position.set(856, 89)
                        } else {
                            var r = new a.FurnitureLoader;
                            switch (r.add(i._NowFurnitureSelected, "normal"), r.load(function () {
                                i._topView.thumbnail.texture = o.default.resources.getFurniture(i._NowFurnitureSelected, "normal")
                            }), i._selected) {
                                case i._topView.btn_wall:
                                    i._topView.thumbnail.scale.set(.64, .64), i._topView.thumbnail.position.set(754, 89);
                                    break;
                                case i._topView.btn_floor:
                                    i._topView.thumbnail.scale.set(1.45, 1.45), i._topView.thumbnail.position.set(93, -11);
                                    break;
                                case i._topView.btn_desk:
                                    i._topView.thumbnail.scale.set(.56, .56), i._topView.thumbnail.position.set(817, 93);
                                    break;
                                case i._topView.btn_window:
                                    i._topView.thumbnail.scale.set(.64, .64), i._topView.thumbnail.position.set(851, 87);
                                    break;
                                case i._topView.btn_object:
                                    i._topView.thumbnail.scale.set(1, 1), i._topView.thumbnail.position.set(850, 86);
                                    break;
                                case i._topView.btn_chest:
                                    i._topView.thumbnail.scale.set(.73, .73), i._topView.thumbnail.position.set(851, -2)
                            }
                        }
                        i._topView.thumbnail.mask = i._topView.thumbnailMask
                    }
                }, i._onClickBtnListGoTop = function () {
                    0 != i._ListNowPage && (i._ListNowPage = 0, i._drawList("249"))
                }, i._onClickBtnListGoPrev = function () {
                    0 != i._ListNowPage && (i._ListNowPage - 5 >= 0 ? i._ListNowPage -= 5 : i._ListNowPage = 0, i._drawList("249"))
                }, i._onClickBtnListGoNext = function () {
                    i._ListNowPage + 1 != i._ListLastPage && (i._ListNowPage + 5 < i._ListLastPage ? i._ListNowPage += 5 : i._ListNowPage = i._ListLastPage - 1, i._drawList("249"))
                }, i._onClickBtnListGoLowest = function () {
                    i._ListNowPage + 1 != i._ListLastPage && (i._ListNowPage = i._ListLastPage - 1, i._drawList("249"))
                }, i._onClickBtnBack = function () {
                    i.__onLeaveInterior(!0)
                }, i._onClickBtnGoShop = function () {
                    i.__onLeaveInterior(!1)
                }, i._onClickBtnChange = function () {
                    var t = -1;
                    switch (i._selected) {
                        case i._topView.btn_wall:
                            i._ids_after[1] != i._NowFurnitureSelected && l.SE.play("246"), t = i._ids_season[1], i._ids_after[1] = i._NowFurnitureSelected;
                            break;
                        case i._topView.btn_floor:
                            i._ids_after[0] != i._NowFurnitureSelected && l.SE.play("246"), t = i._ids_season[0], i._ids_after[0] = i._NowFurnitureSelected;
                            break;
                        case i._topView.btn_desk:
                            i._ids_after[5] != i._NowFurnitureSelected && l.SE.play("246"), t = i._ids_season[5], i._ids_after[5] = i._NowFurnitureSelected;
                            break;
                        case i._topView.btn_window:
                            i._ids_after[2] != i._NowFurnitureSelected && l.SE.play("246"), t = i._ids_season[2], i._ids_after[2] = i._NowFurnitureSelected;
                            break;
                        case i._topView.btn_object:
                            i._ids_after[3] != i._NowFurnitureSelected && l.SE.play("246"), t = i._ids_season[3], i._ids_after[3] = i._NowFurnitureSelected;
                            break;
                        case i._topView.btn_chest:
                            i._ids_after[4] != i._NowFurnitureSelected && l.SE.play("246"), t = i._ids_season[4], i._ids_after[4] = i._NowFurnitureSelected
                    }
                    var e = new _.FurnitureLoadTask(!1);
                    e.floor_id = i._ids_after[0], e.wall_id = i._ids_after[1], e.window_id = i._ids_after[2], e.object_id = i._ids_after[3], e.desk_id = i._ids_after[5], e.chest_id = i._ids_after[4], e.start(function () {});
                    var n = o.default.model.furniture.getData(i._NowFurnitureSelected).seasonID;
                    switch (0 != n ? (i._LastChangedSeason = n, i._ids_after[6] = n) : 0 != t && (i._LastChangedSeason = n, i._ids_after[6] = n), i._selected) {
                        case i._topView.btn_wall:
                            i._ids_season[1] = n;
                            break;
                        case i._topView.btn_floor:
                            i._ids_season[0] = n;
                            break;
                        case i._topView.btn_desk:
                            i._ids_season[5] = n;
                            break;
                        case i._topView.btn_window:
                            i._ids_season[2] = n;
                            break;
                        case i._topView.btn_object:
                            i._ids_season[3] = n;
                            break;
                        case i._topView.btn_chest:
                            i._ids_season[4] = n
                    }
                    i._changeList()
                }, i._onClickBtnMess = function () {
                    i._NowAnimeUI || (i._NowVisibleUI ? i.Fade(!1) : i.Fade(!0))
                }, i._onClickBtnWall = function () {
                    i._selected = i._topView.btn_wall, i._topView.menumoji.texture = u.INTERIOR_PARTS.getTexture(19), i.interactiveAllLeftMenuSet(!0), i._topView.btn_wall.interactive = !1, i._topView.btn_wall.texture = u.INTERIOR_PARTS.getTexture(29), i._changeList()
                }, i._onClickBtnFloor = function () {
                    i._selected = i._topView.btn_floor, i._topView.menumoji.texture = u.INTERIOR_PARTS.getTexture(18), i.interactiveAllLeftMenuSet(!0), i._topView.btn_floor.interactive = !1, i._topView.btn_floor.texture = u.INTERIOR_PARTS.getTexture(26), i._changeList()
                }, i._onClickBtnDesk = function () {
                    i._selected = i._topView.btn_desk, i._topView.menumoji.texture = u.INTERIOR_PARTS.getTexture(23), i.interactiveAllLeftMenuSet(!0), i._topView.btn_desk.interactive = !1, i._topView.btn_desk.texture = u.INTERIOR_PARTS.getTexture(41), i._changeList()
                }, i._onClickBtnWindow = function () {
                    i._selected = i._topView.btn_window, i._topView.menumoji.texture = u.INTERIOR_PARTS.getTexture(20), i.interactiveAllLeftMenuSet(!0), i._topView.btn_window.interactive = !1, i._topView.btn_window.texture = u.INTERIOR_PARTS.getTexture(32), i._changeList()
                }, i._onClickBtnObject = function () {
                    i._selected = i._topView.btn_object, i._topView.menumoji.texture = u.INTERIOR_PARTS.getTexture(21), i.interactiveAllLeftMenuSet(!0), i._topView.btn_object.interactive = !1, i._topView.btn_object.texture = u.INTERIOR_PARTS.getTexture(35), i._changeList()
                }, i._onClickBtnChest = function () {
                    i._selected = i._topView.btn_chest, i._topView.menumoji.texture = u.INTERIOR_PARTS.getTexture(22), i.interactiveAllLeftMenuSet(!0), i._topView.btn_chest.interactive = !1, i._topView.btn_chest.texture = u.INTERIOR_PARTS.getTexture(38), i._changeList()
                }, i._scene = e, i._topView = e.viewTop, i._ListNowFurnitureBeforeSelected = -1, i._tweens = new Array, i._NowVisibleUI = !0, i._NowAnimeUI = !1, i
            }
            return n(e, t), e.prototype.cancel = function () {
                this._removeEventListeners();
                for (var t = 0, e = this._tweens; t < e.length; t++) {
                    e[t].setPaused(!0)
                }
                this._tweens = null
            }, e.prototype._start = function () {
                var t = this;
                this._firstIDs(), this._topView.btn_back.on(h.EventType.CLICK, this._onClickBtnBack), this._topView.btn_goShop.on(h.EventType.CLICK, this._onClickBtnGoShop), this._topView.btn_change.on(h.EventType.CLICK, this._onClickBtnChange), this._topView.btn_mess_icon.on(h.EventType.CLICK, this._onClickBtnMess), this._topView.btn_wall.on(h.EventType.CLICK, this._onClickBtnWall), this._topView.btn_floor.on(h.EventType.CLICK, this._onClickBtnFloor), this._topView.btn_desk.on(h.EventType.CLICK, this._onClickBtnDesk), this._topView.btn_window.on(h.EventType.CLICK, this._onClickBtnWindow), this._topView.btn_object.on(h.EventType.CLICK, this._onClickBtnObject), this._topView.btn_chest.on(h.EventType.CLICK, this._onClickBtnChest), this._topView.btn_list_goTop.on(h.EventType.CLICK, this._onClickBtnListGoTop), this._topView.btn_list_goPrev.on(h.EventType.CLICK, this._onClickBtnListGoPrev), this._topView.btn_list_goNext.on(h.EventType.CLICK, this._onClickBtnListGoNext), this._topView.btn_list_goLowest.on(h.EventType.CLICK, this._onClickBtnListGoLowest);
                for (var e = this, i = 0; i < 10; i++) ! function (i) {
                    e._topView.btn_lists[i].on(h.EventType.CLICK, function () {
                        t._onClickBtnLists(i)
                    })
                }(i);
                for (var n = this, i = 0; i < 5; i++) ! function (e) {
                    n._topView.btn_list_goFigure[e].on(h.EventType.CLICK, function () {
                        t._onClickBtnGoFigure(e)
                    })
                }(i);
                this._selected = this._topView.btn_wall, this._onClickBtnWall()
            }, e.prototype._firstIDs = function () {
                this._LastChangedSeason = -1, this._ids_before[1] = o.default.model.basic.getPortFurnitureMstID(1), this._ids_before[0] = o.default.model.basic.getPortFurnitureMstID(0), this._ids_before[5] = o.default.model.basic.getPortFurnitureMstID(5), this._ids_before[2] = o.default.model.basic.getPortFurnitureMstID(2), this._ids_before[3] = o.default.model.basic.getPortFurnitureMstID(3), this._ids_before[4] = o.default.model.basic.getPortFurnitureMstID(4), this._ids_before[6] = this._LastChangedSeason, this._ids_after[1] = this._ids_before[1], this._ids_after[0] = this._ids_before[0], this._ids_after[5] = this._ids_before[5], this._ids_after[2] = this._ids_before[2], this._ids_after[3] = this._ids_before[3], this._ids_after[4] = this._ids_before[4], this._ids_after[6] = this._LastChangedSeason, this._ids_season[1] = o.default.model.furniture.getData(this._ids_after[1]).seasonID, this._ids_season[0] = o.default.model.furniture.getData(this._ids_after[0]).seasonID, this._ids_season[5] = o.default.model.furniture.getData(this._ids_after[5]).seasonID, this._ids_season[2] = o.default.model.furniture.getData(this._ids_after[2]).seasonID, this._ids_season[3] = o.default.model.furniture.getData(this._ids_after[3]).seasonID, this._ids_season[4] = o.default.model.furniture.getData(this._ids_after[4]).seasonID
            }, e.prototype.SetFontStyle = function (t, e) {
                switch (e) {
                    case 0:
                        this._topView.btn_list_goFigureStr[t].style.fill = 2014913, this._topView.btn_list_goFigureStr[t].style.fontSize = 29, this._topView.btn_list_goFigureStr[t].y = 566, this._topView.btn_list_goFigure[t].interactive = this._topView.btn_list_goFigure[t].buttonMode = !1;
                        break;
                    case 1:
                        this._topView.btn_list_goFigureStr[t].style.fill = 0, this._topView.btn_list_goFigureStr[t].style.fontSize = 22, this._topView.btn_list_goFigureStr[t].y = 567, this._topView.btn_list_goFigure[t].interactive = this._topView.btn_list_goFigure[t].buttonMode = !0;
                        break;
                    case 2:
                        this._topView.btn_list_goFigureStr[t].style.fill = 16777215, this._topView.btn_list_goFigureStr[t].style.fontSize = 29, this._topView.btn_list_goFigureStr[t].y = 566, this._topView.btn_list_goFigure[t].interactive = this._topView.btn_list_goFigure[t].buttonMode = !1
                }
            }, e.prototype.PagerFigureDraw = function () {
                if (this._ListLastPage <= 5) {
                    this._ListPagerLeft = 0;
                    for (var t = 0; t < 5; t++) this._topView.btn_list_goFigureStr[t].text = (t + 1).toString(), t == this._ListNowPage ? this.SetFontStyle(t, 0) : t < this._ListLastPage ? this.SetFontStyle(t, 1) : this.SetFontStyle(t, 2)
                } else {
                    this._ListLastPage - this._ListNowPage <= 3 ? this._ListPagerLeft = this._ListLastPage - 5 : this._ListNowPage < 3 ? this._ListPagerLeft = 0 : this._ListPagerLeft = this._ListNowPage - 2;
                    for (var t = 0; t < 5; t++) this._topView.btn_list_goFigureStr[t].text = (t + 1 + this._ListPagerLeft).toString(), t + this._ListPagerLeft == this._ListNowPage ? this.SetFontStyle(t, 0) : this.SetFontStyle(t, 1)
                }
            }, e.prototype.__onLeaveInterior = function (t) {
                var e = this;
                this._removeEventListeners();
                for (var i = !1, n = 0; n < 6; n++)
                    if (this._ids_before[n] != this._ids_after[n]) {
                        i = !0;
                        break
                    } if (l.SE.play("237"), i) {
                    var o = this._ids_before[6] == this._ids_after[6] ? -1 : this._ids_after[6];
                    new c.FurnitureChangeAPI(this._ids_after[0], this._ids_after[1], this._ids_after[2], this._ids_after[3], this._ids_after[4], this._ids_after[5], o).start(function () {
                        e.__GotoScene(t)
                    })
                } else this.__GotoScene(t)
            }, e.prototype.__GotoScene = function (t) {
                if (t) o.default.scene.change(0);
                else {
                    var e = new s.ItemSceneModel(2);
                    o.default.scene.change(24, e)
                }
            }, e.prototype.interactiveAllLeftMenuSet = function (t) {
                this._topView.btn_wall.interactive = t, this._topView.btn_floor.interactive = t, this._topView.btn_desk.interactive = t, this._topView.btn_window.interactive = t, this._topView.btn_object.interactive = t, this._topView.btn_chest.interactive = t, this._topView.btn_wall.texture = u.INTERIOR_PARTS.getTexture(t ? 27 : 28), this._topView.btn_floor.texture = u.INTERIOR_PARTS.getTexture(t ? 24 : 25), this._topView.btn_desk.texture = u.INTERIOR_PARTS.getTexture(t ? 39 : 40), this._topView.btn_window.texture = u.INTERIOR_PARTS.getTexture(t ? 30 : 31), this._topView.btn_object.texture = u.INTERIOR_PARTS.getTexture(t ? 33 : 34), this._topView.btn_chest.texture = u.INTERIOR_PARTS.getTexture(t ? 36 : 37)
            }, e.prototype._changeList = function () {
                this._ListNowFurnitureBeforeSelected = -1;
                var t = 0;
                switch (this._selected) {
                    case this._topView.btn_wall:
                        this._FurnitureList = o.default.model.furniture.getOwnList(1), t = this._ids_after[1];
                        break;
                    case this._topView.btn_floor:
                        this._FurnitureList = o.default.model.furniture.getOwnList(0), t = this._ids_after[0];
                        break;
                    case this._topView.btn_desk:
                        this._FurnitureList = o.default.model.furniture.getOwnList(5), t = this._ids_after[5];
                        break;
                    case this._topView.btn_window:
                        this._FurnitureList = o.default.model.furniture.getOwnList(2), t = this._ids_after[2];
                        break;
                    case this._topView.btn_object:
                        this._FurnitureList = o.default.model.furniture.getOwnList(3), t = this._ids_after[3];
                        break;
                    case this._topView.btn_chest:
                        this._FurnitureList = o.default.model.furniture.getOwnList(4), t = this._ids_after[4]
                }
                for (var e = 0, i = 0, n = this._FurnitureList; i < n.length; i++) {
                    n[i].mstID == t && (this._ListNowFurniturePage = parseInt(e / 10 + ""), this._ListNowPage = this._ListNowFurniturePage, this._ListNowFurnitureLine = e % 10), e++
                }
                this._ListLastPage = parseInt((this._FurnitureList.length - 1) / 10 + "", 10) + 1, this._drawList(), this._onClickBtnLists(this._ListNowFurnitureLine)
            }, e.prototype._drawList = function (t) {
                void 0 === t && (t = null);
                for (var e = 0, i = 0, n = 0, o = this._FurnitureList; n < o.length; n++) {
                    var r = o[n];
                    if (this._ListNowPage > i / 10) i++;
                    else if (this._topView.lists_str[e].text = r.name, this._topView.btn_lists[e].interactive = this._topView.btn_lists[e].buttonMode = !0, this._FurnitureIdsonPage[e] = r.mstID, 10 == ++e) break
                }
                for (var r = e; r < 10; r++) this._topView.lists_str[r].text = "", this._topView.btn_lists[r].interactive = this._topView.btn_lists[r].buttonMode = !1, this._FurnitureIdsonPage[r] = -1;
                this._ListNowPage == this._ListNowFurniturePage ? this._topView.iconEquipment.position.set(288, 48 * this._ListNowFurnitureLine + 59) : this._topView.iconEquipment.position.set(-150, -150), this.PagerFigureDraw(), null != t && l.SE.play(t)
            }, e.prototype._removeEventListeners = function () {
                var t = this;
                this._topView.btn_back.off(h.EventType.CLICK, this._onClickBtnBack), this._topView.btn_change.off(h.EventType.CLICK, this._onClickBtnChange), this._topView.btn_goShop.on(h.EventType.CLICK, this._onClickBtnGoShop), this._topView.btn_mess_icon.off(h.EventType.CLICK, this._onClickBtnMess), this._topView.btn_wall.off(h.EventType.CLICK, this._onClickBtnWall), this._topView.btn_floor.off(h.EventType.CLICK, this._onClickBtnFloor), this._topView.btn_desk.off(h.EventType.CLICK, this._onClickBtnDesk), this._topView.btn_window.off(h.EventType.CLICK, this._onClickBtnWindow), this._topView.btn_object.off(h.EventType.CLICK, this._onClickBtnObject), this._topView.btn_chest.off(h.EventType.CLICK, this._onClickBtnChest), this._topView.btn_list_goTop.off(h.EventType.CLICK, this._onClickBtnListGoTop), this._topView.btn_list_goPrev.off(h.EventType.CLICK, this._onClickBtnListGoPrev), this._topView.btn_list_goNext.off(h.EventType.CLICK, this._onClickBtnListGoNext), this._topView.btn_list_goLowest.off(h.EventType.CLICK, this._onClickBtnListGoLowest);
                for (var e = this, i = 0; i < 10; i++) ! function (i) {
                    e._topView.btn_lists[i].off(h.EventType.CLICK, function () {
                        t._onClickBtnLists(i)
                    })
                }(i);
                for (var n = this, i = 0; i < 5; i++) ! function (e) {
                    n._topView.btn_list_goFigure[e].off(h.EventType.CLICK, function () {
                        t._onClickBtnGoFigure(e)
                    })
                }(i)
            }, e.prototype._VisibleUI = function (t) {
                this._topView.btn_back.visible = t, this._topView.btn_change.visible = t, this._topView.btn_goShop.visible = t, this._topView.btn_wall.visible = t, this._topView.btn_floor.visible = t, this._topView.btn_desk.visible = t, this._topView.btn_window.visible = t, this._topView.btn_object.visible = t, this._topView.btn_chest.visible = t, this._topView.frame1_bg.visible = t, this._topView.btn_list_goTop.visible = t, this._topView.btn_list_goPrev.visible = t, this._topView.btn_list_goNext.visible = t, this._topView.btn_list_goLowest.visible = t, this._topView.frame2_bg.visible = t;
                for (var e = 0; e < 5; e++) this._topView.btn_list_goFigureStr[e].visible = t, this._topView.btn_list_goFigure[e].visible = t;
                for (var e = 0; e < 10; e++) this._topView.lists_str[e].visible = t, this._topView.btn_lists[e].visible = t;
                this._topView.iconEquipment.visible = t, this._topView.itemName.visible = t, this._topView.itemDescription.visible = t, this._topView.thumbnailBG.visible = t, this._topView.thumbnail.visible = t, this._topView.thumbnailBG2.visible = t, this._topView.menumoji.visible = t, this._topView.bgm_fairy.visible = t
            }, e.prototype._AlphaAnime = function (t, e) {
                e ? this._tweens.push(createjs.Tween.get(t).to({
                    alpha: 1
                }, 150)) : this._tweens.push(createjs.Tween.get(t).to({
                    alpha: 0
                }, 150))
            }, e.prototype.Fade = function (t) {
                var e = this;
                this._NowAnimeUI = !0, this._NowVisibleUI || this._VisibleUI(!0), this._AlphaAnime(this._topView.btn_back, t), this._AlphaAnime(this._topView.btn_change, t), this._AlphaAnime(this._topView.btn_goShop, t), this._AlphaAnime(this._topView.btn_wall, t), this._AlphaAnime(this._topView.btn_floor, t), this._AlphaAnime(this._topView.btn_desk, t), this._AlphaAnime(this._topView.btn_window, t), this._AlphaAnime(this._topView.btn_object, t), this._AlphaAnime(this._topView.btn_chest, t), this._AlphaAnime(this._topView.frame1_bg, t), this._AlphaAnime(this._topView.btn_list_goTop, t), this._AlphaAnime(this._topView.btn_list_goPrev, t), this._AlphaAnime(this._topView.btn_list_goNext, t), this._AlphaAnime(this._topView.btn_list_goLowest, t), this._AlphaAnime(this._topView.frame2_bg, t);
                for (var i = 0; i < 5; i++) this._AlphaAnime(this._topView.btn_list_goFigureStr[i], t), this._AlphaAnime(this._topView.btn_list_goFigure[i], t);
                for (var i = 0; i < 10; i++) this._AlphaAnime(this._topView.lists_str[i], t), this._AlphaAnime(this._topView.btn_lists[i], t);
                this._AlphaAnime(this._topView.iconEquipment, t), this._AlphaAnime(this._topView.itemName, t), this._AlphaAnime(this._topView.itemDescription, t), this._AlphaAnime(this._topView.thumbnailBG, t), this._AlphaAnime(this._topView.thumbnail, t), this._AlphaAnime(this._topView.thumbnailBG2, t), this._AlphaAnime(this._topView.menumoji, t), this._AlphaAnime(this._topView.bgm_fairy, t), this._tweens[this._tweens.length - 1].call(function () {
                    t || e._VisibleUI(!1), e._topView.changeMessIconTexture(t), e._NowVisibleUI = t, e._NowAnimeUI = !1
                })
            }, e.prototype._endTask = function (e) {
                void 0 === e && (e = !1), this._scene.dispose(), this._scene = null, this._topView.dispose(), this._topView = null, this._selected = null;
                for (var i = 0, n = this._tweens; i < n.length; i++) {
                    n[i].setPaused(!0)
                }
                this._tweens = null, this._FurnitureList = null, this._FurnitureIdsonPage = null, this._ids_before = null, this._ids_after = null, this._ids_season = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.TaskTop = p
}