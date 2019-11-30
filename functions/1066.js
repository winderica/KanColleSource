const function1066 = function (t, e, i) {
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
    var o, r = i(11),
        s = i(0),
        a = i(17),
        _ = i(3),
        l = i(381),
        u = i(241),
        c = i(382),
        h = i(1069),
        p = i(383),
        d = i(1070),
        f = i(1071),
        y = i(17),
        m = i(15),
        g = i(161),
        v = i(1);
    ! function (t) {
        t[t.MODE_INFO = 0] = "MODE_INFO", t[t.MODE_RANKING = 1] = "MODE_RANKING"
    }(o || (o = {}));
    var b = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i._selected = null, i._recordRankingModel = new Array(101), i._onKeyDown = function () {
                var t = m.EditTextBoxUtil.text;
                i._validation = m.EditTextBoxUtil.validation(t, i._nowComment), i._keydownInput()
            }, i._updateComment = function () {
                if (i._nowComment != m.EditTextBoxUtil.text && 0 != i._validation) {
                    var t = m.EditTextBoxUtil.text;
                    t = t.replace(/%/g, "\uff05"), t = t.replace(/\t/g, " "), t = t.replace(/</g, "\uff1c"), t = t.replace(/>/g, "\uff1e"), t = t.replace(/&/g, "\uff06"), t = t.replace(/\"/g, ""), t = t.replace(/\'/g, ""), t = t.replace(/\`/g, ""), i._nowComment = t, i._GadgetIP = "http://" + s.default.settings.osapi_root;
                    var e = i._GadgetIP;
                    window.parent.postMessage(g.PostMessageType.COMMENT + "\t" + i._nowComment, e), window.addEventListener("message", i._onCallback)
                }
            }, i._onCallback = function (t) {
                if (window.removeEventListener("message", i._onCallback), t.origin != i._GadgetIP) return void s.default.view.showError();
                var e = t.data;
                i._CommentUpdate(i._nowComment, e)
            }, i._onClickBtnModeInfo = function () {
                i._topView.btn_modeInfo.interactive = i._topView.btn_modeInfo.buttonMode = !1, i._topView.btn_modeInfo.texture = l.RECORD_MENU.getTexture(4), i._topView.btn_modeRanking.interactive = i._topView.btn_modeRanking.buttonMode = !0, i._topView.btn_modeRanking.texture = l.RECORD_MENU.getTexture(1), i._viewRanking.visible = !1, i._viewInfo.visible = !0, i._topView.sideMenu_light1.texture = l.RECORD_MENU.getTexture(5), i._topView.sideMenu_light1.position.set(i._topView.btn_modeInfo.x, i._topView.btn_modeInfo.y), i._NowMode = o.MODE_INFO, -1 != i._rankingMyPage && (i._rankingLastPage < 51 && i._viewRanking.btn_Rank500.position.set(-150, -150), i._rankingNowPage = i._rankingMyPage, m.EditTextBoxUtil.setVisibility(!0)), i._keydownInput()
            }, i._onClickBtnModeRanking = function () {
                i._topView.btn_modeInfo.interactive = i._topView.btn_modeInfo.buttonMode = !0, i._topView.btn_modeInfo.texture = l.RECORD_MENU.getTexture(4), i._topView.btn_modeRanking.interactive = i._topView.btn_modeRanking.buttonMode = !1, i._topView.btn_modeRanking.texture = l.RECORD_MENU.getTexture(1), i._viewRanking.visible = !0, i._viewInfo.visible = !1, i._setRankingPage(0), i._NowMode = o.MODE_RANKING, i._topView.sideMenu_light1.texture = l.RECORD_MENU.getTexture(2), i._topView.sideMenu_light1.position.set(i._topView.btn_modeRanking.x, i._topView.btn_modeRanking.y), m.EditTextBoxUtil.setVisibility(!1)
            }, i._onClickBtnLists = function (t) {
                switch (t) {
                    case 0:
                        i._onClickBtnListGoMyRank();
                        break;
                    case 1:
                        i._onClickBtnListGoRank1st();
                        break;
                    case 2:
                        i._onClickBtnListGoRank501st();
                        break;
                    case 3:
                        i._onClickBtnListGoPrev();
                        break;
                    case 4:
                        i._onClickBtnListGoNext()
                }
            }, i._onClickBtnListGoRank1st = function () {
                i._rankingMyPage > 0 && 1 != i._rankingNowPage && (i._rankingNowPage = 1, i._setRankingPage(i._rankingNowPage))
            }, i._onClickBtnListGoRank501st = function () {
                i._rankingMyPage > 0 && 51 != i._rankingNowPage && i._rankingLastPage >= 51 && (i._rankingNowPage = 51, i._setRankingPage(i._rankingNowPage))
            }, i._onClickBtnListGoMyRank = function () {
                i._rankingMyPage > 0 && i._rankingNowPage != i._rankingMyPage && (i._rankingNowPage = i._rankingMyPage, i._setRankingPage(i._rankingNowPage))
            }, i._onClickBtnListGoPrev = function () {
                1 != i._rankingNowPage && (i._rankingNowPage--, i._setRankingPage(i._rankingNowPage))
            }, i._onClickBtnListGoNext = function () {
                i._rankingNowPage != i._rankingLastPage && (i._rankingNowPage++, i._setRankingPage(i._rankingNowPage))
            }, i._onClickBtnBack = function () {
                i._removeEventListeners(), s.default.scene.change(0)
            }, i._scene = e, i._topView = e.viewTop, i._viewInfo = e.viewInfo, i._viewRanking = e.viewRanking, i._tweens = new Array, i._NowMode = o.MODE_INFO, i._recordInfoModel = new c.RecordInfoModel(i._o);
            for (var n = 0; n < 101; n++) i._recordRankingModel[n] = new p.RecordRankingModel(i._o);
            return i._rankingNowPage = 1, i._rankingLastPage = 1, i._rankingMyPage = -1, m.EditTextBoxUtil.init(277, 337, 300, 16, 4473924, "font_j"), m.EditTextBoxUtil.onLengthCheck(12, i._onKeyDown), i
        }
        return n(e, t), e.prototype.cancel = function () {
            this._dispose()
        }, e.prototype._dispose = function () {
            this._removeEventListeners(), this._scene = null, this._topView = null, this._selected = null, this._selected = null, this._NowMode = null, this._o = null, this._rankingNowPage = null, this._rankingLastPage = null, this._rankingMyPage = null;
            for (var t = 0; t < 101; t++) this._recordRankingModel[t].remove_list();
            this._recordRankingModel = null, this._recordInfoModel = null, m.EditTextBoxUtil.setVisibility(!1)
        }, e.prototype._start = function () {
            var t = this;
            this._topView.btn_back.on(v.EventType.CLICK, this._onClickBtnBack), this._topView.btn_modeInfo.on(v.EventType.CLICK, this._onClickBtnModeInfo), this._topView.btn_modeRanking.on(v.EventType.CLICK, this._onClickBtnModeRanking), this._viewInfo.btn_USER_BTN_EDIT.on(v.EventType.CLICK, this._updateComment), this._viewRanking.btn_RankMy.on(v.EventType.CLICK, function () {
                t._onClickBtnLists(0)
            }), this._viewRanking.btn_RankTop.on(v.EventType.CLICK, function () {
                t._onClickBtnLists(1)
            }), this._viewRanking.btn_Rank500.on(v.EventType.CLICK, function () {
                t._onClickBtnLists(2)
            }), this._viewRanking.btn_ArrowPrev.on(v.EventType.CLICK, function () {
                t._onClickBtnLists(3)
            }), this._viewRanking.btn_ArrowNext.on(v.EventType.CLICK, function () {
                t._onClickBtnLists(4)
            }), this._setInfoPage()
        }, e.prototype._setInfoPage = function () {
            var t = this;
            new h.RecordInfoAPI(this._recordInfoModel).start(function () {
                t._nowComment = t._recordInfoModel.comment, m.EditTextBoxUtil.text = t._nowComment, t._setInfoParam(), t._onClickBtnModeInfo()
            })
        }, e.prototype._keydownInput = function () {
            this._viewInfo.btn_USER_BTN_EDIT.dispose(), this._nowComment == m.EditTextBoxUtil.text || 0 == this._validation ? this._viewInfo.btn_USER_BTN_EDIT.initialize(32, 32) : this._viewInfo.btn_USER_BTN_EDIT.initialize(33, 34)
        }, e.prototype._CommentUpdate = function (t, e) {
            var i = this;
            _.SE.play("246"), new f.RecordUpdateCommentAPI(t, e).start(function () {
                i._viewInfo.btn_USER_BTN_EDIT.dispose(), i._viewInfo.btn_USER_BTN_EDIT.initialize(32, 32), -1 != i._rankingMyPage && (i._recordRankingModel[0].isLoaded = !1, i._recordRankingModel[i._rankingMyPage].isLoaded = !1)
            })
        }, e.prototype._setInfoParam = function () {
            this._viewInfo.NickName.text = this._recordInfoModel.nickname, this._viewInfo.Rank.text = "[" + a.RANK_NAME[this._recordInfoModel.rank] + "]";
            var t = s.default.model.basic.port_bgm_id,
                e = s.default.model.mst_bgm.getMst(t).name;
            this._viewInfo.BGM.text = "\u266a\u300c" + e + "\u300d", this._viewInfo.Level.text = this._recordInfoModel.level + "", this._viewInfo.Experiences.text = this._recordInfoModel.experience_now + (0 == this._recordInfoModel.experience_next ? "" : "/" + this._recordInfoModel.experience_next), this._viewInfo.WarWin.text = this._recordInfoModel.warWin + "", this._viewInfo.WarLose.text = this._recordInfoModel.warLose + "", this._viewInfo.WarRate.text = 100 * parseFloat(this._recordInfoModel.warRate) + "%", this._viewInfo.MissionCount.text = this._recordInfoModel.missionCount + "", this._viewInfo.MissionSuccess.text = this._recordInfoModel.missionSuccess + "", this._viewInfo.MissionRate.text = Math.round(parseFloat(this._recordInfoModel.missionRate)) + "%", this._viewInfo.PracticeWin.text = this._recordInfoModel.practiceWin + "", this._viewInfo.PracticeLose.text = this._recordInfoModel.practiceLose + "", this._viewInfo.PracticeRate.text = Math.round(parseFloat(this._recordInfoModel.practiceRate)) + "%", this._viewInfo.DeckNum.text = this._recordInfoModel.deckNum + "", this._viewInfo.ArsenalDockNum.text = this._recordInfoModel.kDockNum + "", this._viewInfo.RepairDockNum.text = this._recordInfoModel.nDockNum + "", this._viewInfo.ShipNum.text = this._recordInfoModel.shipNum + "", this._viewInfo.ShipMax.text = this._recordInfoModel.shipMax + "", this._viewInfo.SlotItemNum.text = this._recordInfoModel.slotitemNum + "", this._viewInfo.ShipMaxRemain.text = "+" + (s.default.model.const.boko_max_ships - this._recordInfoModel.shipMax), this._viewInfo.SlotItemMax.text = this._recordInfoModel.slotitemMax + 3 + "", this._viewInfo.FurnitureNum.text = this._recordInfoModel.furnitureNum + "", this._viewInfo.DeckMax.text = "4", this._viewInfo.MaterialMax.text = this._recordInfoModel.materialMax + "", this._viewInfo.DutyExecCount.text = s.default.model.basic.getDutyExecutableCount() + "", this._viewInfo.RevKitCount.text = s.default.model.useItem.getMaterialCounts().revKit + "", this._viewInfo.Level.text = s.default.model.basic.level + "", s.default.model.basic.medal_num >= 2 ? this._viewInfo.Medal_Kou_Num.text = s.default.model.basic.medal_num + "" : this._viewInfo.Medal_Kou_Num.text = ""
        }, e.prototype._setRankingPage = function (t) {
            var e = this;
            if (100 == t && (t = 0), this._recordRankingModel[t].isLoaded) this.__drawRanking(t);
            else {
                new d.RecordRankingAPI(this._recordRankingModel, t).start(function () {
                    e.__drawRanking(t), 0 == t && (e._recordRankingModel[t].dispPage <= e._recordRankingModel[t].pageCount ? (e._rankingNowPage = e._recordRankingModel[t].dispPage, e._rankingLastPage = e._recordRankingModel[t].pageCount, e._rankingMyPage = e._rankingNowPage) : (e._rankingNowPage = 100, e._rankingLastPage = e._recordRankingModel[t].pageCount, e._rankingMyPage = 100), e._rankingLastPage < 51 && e._viewRanking.btn_Rank500.position.set(-150, -150), e._pageBtnEnalechk())
                })
            }
        }, e.prototype._getPortSeed = function (t) {
            var e = y.PORT_API_SEED[t % 10];
            return (e - e % 100) / 100
        }, e.prototype.__drawRanking = function (t) {
            for (var e = 0; e < 10; e++)
                if (this._recordRankingModel[t].list[e].isLoaded) {
                    var i = [8931, 1201, 1156, 5061, 4569, 4732, 3779, 4568, 5695, 4619, 4912, 5669, 6586],
                        n = i[this._recordRankingModel[t].list[e].rank % 13];
                    this._viewRanking.textN_Rank[e].text = this._recordRankingModel[t].list[e].rank + "", this._viewRanking.textJ_Name[e].text = this._recordRankingModel[t].list[e].nickname, this._recordRankingModel[t].list[e].classrank <= 2 ? this._viewRanking.obj_flag[e].texture = u.RECORD_PARTS.getTexture(15) : this._recordRankingModel[t].list[e].classrank <= 6 ? this._viewRanking.obj_flag[e].texture = u.RECORD_PARTS.getTexture(16) : this._viewRanking.obj_flag[e].texture = u.RECORD_PARTS.getTexture(14), this._viewRanking.obj_flag[e].visible = !0, this._viewRanking.textJ_RankName[e].text = a.RANK_NAME[this._recordRankingModel[t].list[e].classrank] + "", this._viewRanking.obj_balloon[e].visible = !0, this._viewRanking.textJ_Comment[e].text = this._recordRankingModel[t].list[e].comment;
                    var o = this._recordRankingModel[t].list[e].medals;
                    o = o / (n + 1853) - 157, o < 1 ? (this._viewRanking.obj_medal[e].position.set(-150, 231 + 45 * e), this._viewRanking.obj_medal[e].visible = !1) : (this._viewRanking.obj_medal[e].position.set(1021, 231 + 45 * e), this._viewRanking.obj_medal[e].visible = !0), this._viewRanking.textN_Medal[e].text = o < 2 ? "" : o + "", this._viewRanking.obj_medal[e].scale.set(1, 1);
                    var r = this._recordRankingModel[t].list[e].score[0],
                        _ = this._getPortSeed(s.default.model.basic.member_id);
                    r = r / n / _ - 91, this._viewRanking.textN_Score[e].text = r + ""
                } else this._viewRanking.textN_Rank[e].text = "", this._viewRanking.textJ_Name[e].text = "", this._viewRanking.obj_flag[e].visible = !1, this._viewRanking.textJ_RankName[e].text = "", this._viewRanking.obj_balloon[e].visible = !1, this._viewRanking.textJ_Comment[e].text = "", this._viewRanking.obj_medal[e].visible = !1, this._viewRanking.textN_Medal[e].text = "", this._viewRanking.textN_Score[e].text = "";
            this._pageBtnEnalechk()
        }, e.prototype._pageBtnEnalechk = function () {
            var t = !0,
                e = !0;
            100 == this._rankingNowPage && (t = !1, e = !1), 1 == this._rankingNowPage && (t = !1), this._rankingNowPage == this._rankingLastPage && (e = !1), this._viewRanking.btn_ArrowPrev.interactive = this._viewRanking.btn_ArrowPrev.buttonMode = t, this._viewRanking.btn_ArrowPrev.visible = t, this._viewRanking.btn_ArrowNext.interactive = this._viewRanking.btn_ArrowNext.buttonMode = e, this._viewRanking.btn_ArrowNext.visible = e
        }, e.prototype._removeEventListeners = function () {
            var t = this;
            m.EditTextBoxUtil.onEventDestroy(), this._topView.btn_back.off(v.EventType.CLICK, this._onClickBtnBack), this._topView.btn_modeInfo.off(v.EventType.CLICK, this._onClickBtnModeInfo), this._topView.btn_modeRanking.off(v.EventType.CLICK, this._onClickBtnModeRanking), this._viewInfo.btn_USER_BTN_EDIT.off(v.EventType.CLICK, this._updateComment), this._viewRanking.btn_RankMy.off(v.EventType.CLICK, function () {
                t._onClickBtnLists(0)
            }), this._viewRanking.btn_RankTop.off(v.EventType.CLICK, function () {
                t._onClickBtnLists(1)
            }), this._viewRanking.btn_Rank500.off(v.EventType.CLICK, function () {
                t._onClickBtnLists(2)
            }), this._viewRanking.btn_ArrowPrev.off(v.EventType.CLICK, function () {
                t._onClickBtnLists(3)
            }), this._viewRanking.btn_ArrowNext.off(v.EventType.CLICK, function () {
                t._onClickBtnLists(4)
            })
        }, e.prototype._endTask = function (e) {
            void 0 === e && (e = !1), t.prototype._endTask.call(this)
        }, e
    }(r.TaskBase);
    e.TaskTop = b
}