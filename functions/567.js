const function567 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(5), o = i(0), r = i(568), s = i(189), a = i(189), _ = i(189), u = i(24), l = i(8), c = i(570),
        h = i(572), p = i(573), d = i(1), f = function () {
            function t(t) {
                var e = this;
                this._tween = new Array(2), this._onMouseBtnFlag = !1, this._ListNow = -1, this._ListMax = -1, this._selectedBGM = -1, this._BGMCount = -1, this._onMouseBtn = function () {
                    e._onMouseBtnFlag = !0
                }, this._offMouseBtn = function () {
                    e._onMouseBtnFlag = !1
                }, this._onBtnUp = function () {
                    0 != e._ListNow && (e._ListNow--, e.JukeRedraw())
                }, this._onBtnDown = function () {
                    e._ListNow != e._ListMax && (e._ListNow++, e.JukeRedraw())
                }, this._onMouseout = function () {
                    e._onMouseBtnFlag || e.JukeListClose(!0)
                }, this._onBGMSelect = function (t) {
                    e._selectedBGM = e._ListNow + t, e.JukeListClose(!1), e.JukeConfirmStart()
                }, this._onJukeDispClose = function () {
                    e.JukeDispClose(!1)
                }, this._onJukeDispSetBGM = function () {
                    e.set_portbgm(e._furnitureJukeBoxBGMModel.list[e._selectedBGM].api_bgm_id), new _.UserFurnitureJukeBoxSetPortBGMAPI(e._furnitureJukeBoxBGMModel.list[e._selectedBGM].api_id).start(function () {
                        o.default.sound.bgm.play(e._furnitureJukeBoxBGMModel.list[e._selectedBGM].api_bgm_id), e.JukeDispClose(!0)
                    })
                }, this._playBGMCounter = function () {
                    --e._BGMCount > 0 || e.JukeDispClose(!1)
                }, this._id = t, this._jukemode = !1
            }

            return t.prototype.set_portbgm = function (t) {
                o.default.model.basic.setPortBGMID(t)
            }, t.prototype.JukeStart = function () {
                var t = this;
                if (!this._jukemode) {
                    this._jukemode = !0;
                    var e = new l.AreaBox(0);
                    o.default.view.overLayer.addChild(e);
                    var i = new u.UIImageLoader("jukebox");
                    i.add("jukebox_common.json"), i.load(function () {
                        t._furnitureJukeBoxBGMModel = new r.FurnitureJukeBoxBGMModel, new s.UserFurnitureJukeBoxMusicListAPI(t._furnitureJukeBoxBGMModel).start(function () {
                            for (o.default.view.overLayer.removeChild(e), t._ListMax = 0; t._ListMax < t._furnitureJukeBoxBGMModel.list.length && t._furnitureJukeBoxBGMModel.list[t._ListMax].isLoaded; t._ListMax++) ;
                            t._ListMax >= 5 && (t._ListMax -= 5), t._ListNow = t._ListMax, t._bg_black = new PIXI.Graphics, t._bg_black.beginFill(0), t._bg_black.drawRect(0, 0, n.default.width, n.default.height), t._bg_black.endFill(), t._bg_black.alpha = .2, t._bg_black.interactive = !0, t._bg_black.on(d.EventType.CLICK, t._onMouseout), o.default.view.portMain.overLayer.addChild(t._bg_black), t._jukeBoxList = new c.JukeBoxList, t._jukeBoxList.init(), o.default.view.portMain.overLayer.addChild(t._jukeBoxList), t._jukeBoxList.jukebox_table.on(d.EventType.MOUSEOUT, t._onMouseout), t._jukeBoxList.jukebox_btn_up2.on(d.EventType.CLICK, t._onBtnUp), t._jukeBoxList.jukebox_btn_down2.on(d.EventType.CLICK, t._onBtnDown), t._jukeBoxList.jukebox_btn_up2.on(d.EventType.MOUSEOVER, t._onMouseBtn), t._jukeBoxList.jukebox_btn_up2.on(d.EventType.MOUSEOUT, t._offMouseBtn), t._jukeBoxList.jukebox_btn_down2.on(d.EventType.MOUSEOVER, t._onMouseBtn), t._jukeBoxList.jukebox_btn_down2.on(d.EventType.MOUSEOUT, t._offMouseBtn), t._jukeBoxList.setBGMBtnEvent(t._onMouseBtn, t._offMouseBtn, t._onBGMSelect), t.JukeRedraw(), o.default.view.portMain.furnitureLayer.stopGramophone(), t._fadeinout(!0, 300), t._tween[0] = createjs.Tween.get(t._jukeBoxList.jukebox_table).to({ alpha: 0 }, 1).to({ alpha: 1 }, 300).call(function () {
                                t._tween[0] = null
                            })
                        })
                    })
                }
            }, t.prototype._fadeinout = function (t, e) {
                void 0 === e && (e = 300);
                var i = t ? 1 : 0;
                this._jukeBoxList.playBGMListFadeInOut(i, e)
            }, t.prototype.JukeRedraw = function () {
                this._jukeBoxList.redrawBGMList(this._furnitureJukeBoxBGMModel.list, this._ListNow), this._ListNow == this._ListMax ? (this._jukeBoxList.jukebox_btn_down2.alpha = .001, this._jukeBoxList.jukebox_btn_down2.buttonMode = !1) : (this._jukeBoxList.jukebox_btn_down2.alpha = 1, this._jukeBoxList.jukebox_btn_down2.buttonMode = !0), 0 == this._ListNow ? (this._jukeBoxList.jukebox_btn_up2.alpha = .001, this._jukeBoxList.jukebox_btn_up2.buttonMode = !1) : (this._jukeBoxList.jukebox_btn_up2.alpha = 1, this._jukeBoxList.jukebox_btn_up2.buttonMode = !0)
            }, t.prototype.JukeListRemoveEvents = function () {
                this._bg_black.off(d.EventType.CLICK, this._onMouseout), this._jukeBoxList.jukebox_table.off(d.EventType.MOUSEOUT, this._onMouseout), this._jukeBoxList.jukebox_btn_up2.off(d.EventType.CLICK, this._onBtnUp), this._jukeBoxList.jukebox_btn_down2.off(d.EventType.CLICK, this._onBtnDown), this._jukeBoxList.jukebox_btn_up2.off(d.EventType.MOUSEOVER, this._onMouseBtn), this._jukeBoxList.jukebox_btn_up2.off(d.EventType.MOUSEOUT, this._offMouseBtn), this._jukeBoxList.jukebox_btn_down2.off(d.EventType.MOUSEOVER, this._onMouseBtn), this._jukeBoxList.jukebox_btn_down2.off(d.EventType.MOUSEOUT, this._offMouseBtn), this._jukeBoxList.removeBGMBtnEvent(this._onMouseBtn, this._offMouseBtn, this._onBGMSelect)
            }, t.prototype.JukeListClose = function (t) {
                var e = this;
                this.JukeListRemoveEvents();
                var i = t ? 300 : 1;
                this._fadeinout(!1, i), this._tween[1] = createjs.Tween.get(this._jukeBoxList.jukebox_table).to({ alpha: 0 }, i).call(function () {
                    e._tween[1] = null, e._jukeBoxList.discard(), o.default.view.portMain.overLayer.removeChild(e._jukeBoxList), t && e.JukeEnd()
                }), this._jukeBoxList.jukebox_btn_up2.alpha = 0, this._jukeBoxList.jukebox_btn_down2.alpha = 0
            }, t.prototype.JukeConfirmStart = function () {
                var t = this;
                this._jukeBoxConfirm = new h.JukeBoxConfirm(this._furnitureJukeBoxBGMModel.list[this._selectedBGM]), this._jukeBoxConfirm.init(), o.default.view.portMain.overLayer.addChild(this._jukeBoxConfirm), this._jukeBoxConfirm.btn_back3.on(d.EventType.CLICK, function () {
                    t._onConfirm(!1)
                }), this._jukeBoxConfirm.btn_kagu.on(d.EventType.CLICK, function () {
                    t._onConfirm(!0)
                })
            }, t.prototype.JukeConfirmRemoveEvents = function () {
                var t = this;
                this._jukeBoxConfirm.btn_back3.off(d.EventType.CLICK, function () {
                    t._onConfirm(!1)
                }), this._jukeBoxConfirm.btn_kagu.off(d.EventType.CLICK, function () {
                    t._onConfirm(!0)
                })
            }, t.prototype.JukeConfirmClose = function () {
                this.JukeConfirmRemoveEvents(), this._jukeBoxConfirm.discard(), o.default.view.portMain.overLayer.removeChild(this._jukeBoxConfirm), this._jukeBoxConfirm = null
            }, t.prototype._onConfirm = function (t) {
                var e = this;
                if (this.JukeConfirmClose(), t) {
                    o.default.view.portMain.furnitureLayer.current_bgm_furniture = null;
                    new a.UserFurnitureJukeBoxMusicPlayAPI(this._furnitureJukeBoxBGMModel.list[this._selectedBGM].api_id).start(function () {
                        e.JukeDispStart()
                    })
                } else this.JukeEnd()
            }, t.prototype.JukeDispStart = function () {
                this._jukeBoxDisp = new p.JukeBoxDisp(this._furnitureJukeBoxBGMModel.list[this._selectedBGM]), this._jukeBoxDisp.init(), o.default.view.portMain.overLayer.addChild(this._jukeBoxDisp), this._jukeBoxDisp.text_scroll(), this._jukeBoxDisp.musicChibiAnime(), this._BGMCount = this._furnitureJukeBoxBGMModel.list[this._selectedBGM].api_loops, o.default.sound.bgm.stop(), o.default.sound.bgm.play(this._furnitureJukeBoxBGMModel.list[this._selectedBGM].api_bgm_id, !0, 0, "port", this._playBGMCounter), this._jukeBoxDisp.jukebox_close.on(d.EventType.CLICK, this._onJukeDispClose), 1 == this._furnitureJukeBoxBGMModel.list[this._selectedBGM].api_bgm_flag && this._jukeBoxDisp.jukebox_btn_bgm.on(d.EventType.CLICK, this._onJukeDispSetBGM)
            }, t.prototype.JukeDispClose = function (t) {
                this._BGMCount = 0, this._jukeBoxDisp.jukebox_close.off(d.EventType.CLICK, this._onJukeDispClose), 1 == this._furnitureJukeBoxBGMModel.list[this._selectedBGM].api_bgm_flag && this._jukeBoxDisp.jukebox_btn_bgm.off(d.EventType.CLICK, this._onJukeDispSetBGM), this._jukeBoxDisp.discard(), o.default.view.portMain.overLayer.removeChild(this._jukeBoxDisp), this.JukeEnd(), t || (o.default.sound.bgm.stop(), o.default.sound.bgm.play(o.default.model.basic.port_bgm_id))
            }, t.prototype.JukeEnd = function () {
                o.default.view.portMain.overLayer.removeChild(this._bg_black), this._bg_black = null, this._jukemode = !1
            }, t
        }();
    e.JukeBoxTask = f
}