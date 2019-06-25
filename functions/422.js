const function422 = function (t, e, i) {
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
    var o = i(119),
        r = i(4),
        s = i(0),
        a = i(1),
        _ = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._slotItemParamsValue = new Array(6), e._slotItemParams = new Array(10), e._icon_m16_light = new Array(2), e._icon_stars = new Array(10), e._isCertainly = !1, e._isBtnAnime = !1, e._isRevampableByItem = !1, e._isRevampableByKit = !1, e._isFlashFinished = !0, e._isVoiceFinished = !0, e._box_bg_selected = new u, e._box_bg_selected.position.set(-15, -15), e._box_bg_selected.initialize(0, 2), e._box_bg_selected.width = 457, e._box_bg_selected.height = 192, e.addChild(e._box_bg_selected), e._box_set_bg = new PIXI.Sprite(o.REVAMP_BOX.getTexture(1)), e._box_set_bg.position.set(0, 0), e.addChild(e._box_set_bg), e._frame_item = new PIXI.Sprite(o.REVAMP_BOX.getTexture(15)), e._frame_item.position.set(6, 6), e.addChild(e._frame_item), e._frame_name = new PIXI.Sprite(o.REVAMP_BOX.getTexture(16)), e._frame_name.position.set(85, 6), e.addChild(e._frame_name), e._icon_m1 = new PIXI.Sprite(o.REVAMP_BOX.getTexture(18)), e._icon_m1.position.set(7, 88), e.addChild(e._icon_m1), e._icon_m2 = new PIXI.Sprite(o.REVAMP_BOX.getTexture(20)), e._icon_m2.position.set(73, 88), e.addChild(e._icon_m2), e._icon_m3 = new PIXI.Sprite(o.REVAMP_BOX.getTexture(21)), e._icon_m3.position.set(142, 88), e.addChild(e._icon_m3), e._icon_m4 = new PIXI.Sprite(o.REVAMP_BOX.getTexture(22)), e._icon_m4.position.set(210, 88), e.addChild(e._icon_m4), e._icon_m8 = new PIXI.Sprite(o.REVAMP_BOX.getTexture(23)), e._icon_m8.position.set(7, 120), e.addChild(e._icon_m8), e._icon_m16 = new PIXI.Sprite(o.REVAMP_BOX.getTexture(24)), e._icon_m16.position.set(70, 120), e.addChild(e._icon_m16), e._slotItemIcon = new PIXI.Sprite, e._slotItemIcon.position.set(43, 45), e._slotItemIcon.anchor.set(.5, .5), e._slotItemIcon.scale.set(.2, .2), e.addChild(e._slotItemIcon), e._slotItemIcon_mask = new PIXI.Graphics, e._slotItemIcon_mask.beginFill(16777215), e._slotItemIcon_mask.drawRect(0, 0, 82, 85), e._slotItemIcon_mask.endFill(), e.addChild(e._slotItemIcon_mask), e._slotItemIcon.mask = e._slotItemIcon_mask, e._slotTypeItemIcon = new PIXI.Sprite, e._slotTypeItemIcon.position.set(108, 28), e._slotTypeItemIcon.anchor.set(.5, .5), e.addChild(e._slotTypeItemIcon), e._frame_name_length_mask = new PIXI.Graphics, e._frame_name_length_mask.beginFill(16777215), e._frame_name_length_mask.drawRect(130, 10, 291, 36), e.addChild(e._frame_name_length_mask), e._slotItemName = new r.TextBox(21, 4999235), e._slotItemName.text = "", e._slotItemName.mask = e._frame_name_length_mask, e._slotItemName.position.set(132, 15), e.addChild(e._slotItemName), e._frame_name_mask = new PIXI.Sprite(o.REVAMP_BOX.getTexture(17)), e._frame_name_mask.scale.set(.4, 1), e._frame_name_mask.position.set(373, 10), e.addChild(e._frame_name_mask), e._frame_name_mask2 = new PIXI.Sprite(o.REVAMP_BOX.getTexture(17)), e._frame_name_mask2.visible = !1, e._frame_name_mask2.position.set(301, 10), e.addChild(e._frame_name_mask2);
                for (var i = 0; i < 4; i++) e._slotItemParams[i] = new r.TextBox(17, 4999235), e._slotItemParams[i].position.set(37 + 67 * i, 91), e._slotItemParams[i].text = "", e.addChild(e._slotItemParams[i]);
                for (var i = 4; i < 6; i++) e._slotItemParams[i] = new r.TextBox(17, 4999235), e._slotItemParams[i].position.set(37 + 61 * (i - 4), 129), e._slotItemParams[i].text = "", e.addChild(e._slotItemParams[i]);
                e._btn_select = new PIXI.Sprite(o.REVAMP_BOX.getTexture(10)), e._btn_select.position.set(282, 91), e.addChild(e._btn_select), e._btn_cancel = new u, e._btn_cancel.initialize(4, 6), e._btn_cancel.visible = !1, e._btn_cancel.position.set(282, 90), e.addChild(e._btn_cancel), e._btn_start = new u, e._btn_start.initialize(12, 14), e._btn_start.visible = !1, e._btn_start.position.set(282, 121), e.addChild(e._btn_start), e._icon_quickly = new PIXI.Sprite(o.REVAMP_BOX.getTexture(26)), e._icon_quickly.visible = !1, e._icon_quickly.position.set(351, 49), e.addChild(e._icon_quickly), e._switch_btn = new u, e._switch_btn.initialize(8, 8), e._switch_btn.visible = !1, e._switch_btn.position.set(337, 64), e.addChild(e._switch_btn), e._switch_btn_maru = new PIXI.Sprite(o.REVAMP_BOX.getTexture(7)), e._switch_btn_maru.visible = !1, e._switch_btn_maru.position.set(402, 64), e.addChild(e._switch_btn_maru);
                for (var i = 0; i < 2; i++) e._icon_m16_light[i] = new PIXI.Sprite(o.REVAMP_BOX.getTexture(19)), e._icon_m16_light[i].visible = !1, e._icon_m16_light[i].position.set(64 * i - 1, 111), e.addChild(e._icon_m16_light[i]);
                for (var i = 0; i < 10; i++) e._icon_stars[i] = new PIXI.Sprite(o.REVAMP_BOX.getTexture(27)), e._icon_stars[i].visible = !1, e._icon_stars[i].position.set(85 + 19 * i, 60), e.addChild(e._icon_stars[i]);
                return e._icon_star = new PIXI.Sprite(o.REVAMP_BOX.getTexture(27)), e._icon_star.visible = !1, e._icon_star.position.set(376, 19), e.addChild(e._icon_star), e._icon_plus = new PIXI.Sprite(o.REVAMP_BOX.getTexture(25)), e._icon_plus.visible = !1, e._icon_plus.position.set(393, 22), e.addChild(e._icon_plus), e._text_level = new r.TextBox(17, 4565413), e._text_level.visible = !1, e._text_level.position.set(406, 18), e._text_level.text = "", e.addChild(e._text_level), e._icon_starM = new PIXI.Sprite(o.REVAMP_BOX.getTexture(28)), e._icon_starM.visible = !1, e._icon_starM.position.set(387, 13), e.addChild(e._icon_starM), e._need_item = new PIXI.Sprite(o.REVAMP_BOX.getTexture(31)), e._need_item.visible = !1, e._need_item.position.set(132, 121), e.addChild(e._need_item), e._box_white_bg = new PIXI.Sprite(o.REVAMP_BOX.getTexture(3)), e._box_white_bg.visible = !0, e._box_white_bg.alpha = 0, e.addChild(e._box_white_bg), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "isCertainly", {
                get: function () {
                    return this._isCertainly ? 1 : 0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "isFlashFinished", {
                get: function () {
                    return this._isFlashFinished
                },
                set: function (t) {
                    this._isFlashFinished = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "isVoiceFinished", {
                set: function (t) {
                    this._isVoiceFinished = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "box_bg_selected", {
                get: function () {
                    return this._box_bg_selected
                },
                set: function (t) {
                    this._box_bg_selected = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "slotItemIcon", {
                get: function () {
                    return this._slotItemIcon
                },
                set: function (t) {
                    this._slotItemIcon = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "slotTypeItemIcon", {
                get: function () {
                    return this._slotTypeItemIcon
                },
                set: function (t) {
                    this._slotTypeItemIcon = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "slotItemName", {
                get: function () {
                    return this._slotItemName
                },
                set: function (t) {
                    this._slotItemName = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "slotItemParamsValue", {
                get: function () {
                    return this._slotItemParamsValue
                },
                set: function (t) {
                    this._slotItemParamsValue = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "slotItemParams", {
                get: function () {
                    return this._slotItemParams
                },
                set: function (t) {
                    this._slotItemParams = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_select", {
                get: function () {
                    return this._btn_select
                },
                set: function (t) {
                    this._btn_select = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_cancel", {
                get: function () {
                    return this._btn_cancel
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_start", {
                get: function () {
                    return this._btn_start
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "icon_quickly", {
                get: function () {
                    return this._icon_quickly
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "switch_btn", {
                get: function () {
                    return this._switch_btn
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "icon_m16_light", {
                get: function () {
                    return this._icon_m16_light
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "need_item", {
                get: function () {
                    return this._need_item
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.SlotItemParamsUpdate = function () {
                for (var t = 0; t < 6; t++) this._slotItemParams[t].text = (t > 3 ? "x" : "") + this._slotItemParamsValue[t].toString()
            }, e.prototype.SetNumbers = function (t, e) {
                this._slotItemParams[4].text = "x" + t, this._slotItemParams[5].text = "x" + e, this._req_buildkit = t, this._req_remodelkit = e
            }, e.prototype.SetDetailNumbers = function (t, e, i) {
                this._certain_buildkit = t, this._certain_remodelkit = e, this._revampableItems = i
            }, e.prototype.ToggleCertainSwitch = function () {
                var t = this;
                this._isBtnAnime || (this._isBtnAnime = !0, this._isCertainly ? (this._isCertainly = !1, this._tween0 = createjs.Tween.get(this._switch_btn_maru).to({
                    x: 402
                }, 233, createjs.Ease.cubicOut).call(function () {
                    t._tween0 = null;
                    for (var e = 0; e < 2; e++) t._icon_m16_light[e].visible = !1;
                    t._switch_btn.dispose(), t._switch_btn.initialize(8, 8), t._slotItemParams[4].text = "x" + t._req_buildkit, t._slotItemParams[5].text = "x" + t._req_remodelkit, t.CheckGoBtnNyCertainly()
                })) : (this._isCertainly = !0, this._tween0 = createjs.Tween.get(this._switch_btn_maru).to({
                    x: 337
                }, 233, createjs.Ease.cubicOut).call(function () {
                    t._tween0 = null;
                    for (var e = 0; e < 2; e++) t._icon_m16_light[e].visible = !0;
                    t._switch_btn.dispose(), t._switch_btn.initialize(9, 9), t._slotItemParams[4].text = "x" + t._certain_buildkit, t._slotItemParams[5].text = "x" + t._certain_remodelkit, t.CheckGoBtnNyCertainly()
                })))
            }, e.prototype.SetSwitchReset = function () {
                this._switch_btn_maru.position.set(402, 64);
                for (var t = 0; t < 2; t++) this._icon_m16_light[t].visible = !1;
                this._switch_btn.dispose(), this._switch_btn.initialize(8, 8), this._slotItemParams[4].text = "x" + this._req_buildkit, this._slotItemParams[5].text = "x" + this._req_remodelkit, this._isCertainly = !1
            }, e.prototype.SetDetail = function (t) {
                this._isCertainly = !1, this._box_bg_selected.visible = !t, this._box_bg_selected.interactive = this._box_bg_selected.buttonMode = !t, this._btn_select.visible = !t, this._btn_cancel.visible = t, this._btn_cancel.interactive = this._btn_cancel.buttonMode = t, this._btn_start.visible = t, this._btn_start.interactive = this._btn_start.buttonMode = t, this._icon_quickly.visible = t, this._switch_btn.visible = t, this._switch_btn.interactive = this._switch_btn.buttonMode = t, this._switch_btn_maru.visible = t, this._need_item.visible = t;
                for (var e = 0; e < 2; e++) this._icon_m16_light[e].visible = !1;
                t ? this._btn_cancel.texture = o.REVAMP_BOX.getTexture(4) : (this.SetStarts(0), this.SetSwitchReset(), this._need_item.texture = o.REVAMP_BOX.getTexture(31), this._btn_start.dispose(), this._btn_start.initialize(12, 14), this._btn_start.interactive = this._btn_start.buttonMode = !0)
            }, e.prototype.CheckGoBtnNyCertainly = function () {
                var t = !0;
                this._isCertainly ? (this._certain_buildkit > s.default.model.useItem.getMaterialCounts().devKit || this._certain_remodelkit > s.default.model.useItem.getMaterialCounts().revKit) && (t = !1) : (this._req_buildkit > s.default.model.useItem.getMaterialCounts().devKit || this._req_remodelkit > s.default.model.useItem.getMaterialCounts().revKit) && (t = !1), (this._slotItemParamsValue[0] > s.default.model.useItem.getMaterialCounts().fuel || this._slotItemParamsValue[1] > s.default.model.useItem.getMaterialCounts().ammo || this._slotItemParamsValue[2] > s.default.model.useItem.getMaterialCounts().steel || this._slotItemParamsValue[3] > s.default.model.useItem.getMaterialCounts().baux) && (t = !1), this._isRevampableByKit = t, this.SetGoBtn()
            }, e.prototype.CheckGoBtnByItem = function (t, e, i) {
                var n = !0;
                t.req_slot_num > e && (n = !1), 0 == t.req_buildkit && 0 == t.req_remodelkit && (this.SetNumbers(0, 0), this._slotItemParams[4].text = "x" + this._certain_buildkit, this._slotItemParams[5].text = "x" + this._certain_remodelkit, n = !1), 1 == t.change_flag && i && (n = !1), t.req_useitem_num > s.default.model.useItem.getCount(t.req_useitem_id) && (n = !1), t.req_useitem_num2 > 0 && t.req_useitem_num2 > s.default.model.useItem.getCount(t.req_useitem_id2) && (n = !1), this._isRevampableByItem = n, this.SetGoBtn()
            }, e.prototype.CheckNeedItem = function (t) {
                71 == t.req_useitem_id ? this._need_item.texture = o.REVAMP_BOX.getTexture(30) : 0 != t.req_slot_num ? this._need_item.texture = o.REVAMP_BOX.getTexture(32) : this._need_item.texture = o.REVAMP_BOX.getTexture(31)
            }, e.prototype.SetGoBtn = function () {
                this._isRevampableByItem && this._isRevampableByKit ? (this._btn_start.dispose(), this._btn_start.initialize(12, 14), this._btn_start.interactive = this._btn_start.buttonMode = !0) : (this._btn_start.dispose(), this._btn_start.initialize(13, 13), this._btn_start.interactive = this._btn_start.buttonMode = !1), this._isBtnAnime = !1
            }, e.prototype.SetStarts = function (t) {
                for (var e = 0; e < t; e++) this._icon_stars[e].visible = !0;
                for (var e = t; e < 10; e++) this._icon_stars[e].visible = !1;
                this._frame_name_mask2.visible = !0, t < 1 ? (this._frame_name_mask2.visible = !1, this._icon_star.visible = !1, this._icon_plus.visible = !1, this._text_level.visible = !1, this._text_level.text = "", this._icon_starM.visible = !1) : t < 10 ? (this._icon_star.visible = !0, this._icon_plus.visible = !0, this._text_level.visible = !0, this._text_level.text = t + "", this._icon_starM.visible = !1) : (this._icon_star.visible = !1, this._icon_plus.visible = !1, this._text_level.visible = !1, this._text_level.text = "", this._icon_starM.visible = !0)
            }, e.prototype.initialize = function () {}, e.prototype.RevampFlash = function (t) {
                this._btn_start.dispose(), this._btn_start.initialize(13, 13), this._btn_start.interactive = this._btn_start.buttonMode = !1, this._btn_cancel.dispose(), this._btn_cancel.initialize(5, 5), this._btn_cancel.interactive = this._btn_start.buttonMode = !1, this._switch_btn.interactive = this._btn_start.buttonMode = !1, this._isVoiceFinished = !1, this._isFlashFinished = !1, t.voice_ship_id, this._blinkBox(), this._shakeBox()
            }, e.prototype.noVoiceWait = function (t) {
                var e = this;
                this._tween0 = createjs.Tween.get(this).wait(t).call(function () {
                    e._tween0 = null, e._isVoiceFinished = !0
                })
            }, e.prototype._blinkBox = function () {
                var t = this;
                this._tween1 = createjs.Tween.get(this).to({
                    alpha: 0
                }, 750, createjs.Ease.sineIn).to({
                    alpha: 1
                }, 750, createjs.Ease.cubicInOut).call(function () {
                    t._tween1 = null, t._isVoiceFinished ? t._flashBox() : t._blinkBox()
                })
            }, e.prototype._shakeBox = function () {
                var t = this;
                this._tween2 = createjs.Tween.get(this).to({
                    x: 163
                }, 50).to({
                    x: 172
                }, 50).call(function () {
                    t._tween2 = null, t._isVoiceFinished ? t.position.set(168, 339) : t._shakeBox()
                })
            }, e.prototype._flashBox = function () {
                var t = this;
                this._tween3 = createjs.Tween.get(this._box_white_bg).to({
                    alpha: 1
                }, 1e3).call(function () {
                    t._tween3 = null, t._isFlashFinished = !0
                })
            }, e.prototype.FlashBoxOff = function () {
                var t = this;
                this._tween3 = createjs.Tween.get(this._box_white_bg).to({
                    alpha: 0
                }, 500).call(function () {
                    t._tween3 = null
                })
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._slotItemName.destroy(), this._slotItemName = null, this._slotItemParams.forEach(function (t) {
                    t.destroy()
                }), this._slotItemParams = null, this._text_level.destroy(), this._text_level = null, this._icon_m16_light = null, this._icon_stars = null
            }, e
        }(PIXI.Container);
    e.RevampRecipeBox = _;
    var u = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._onMouseOver = function () {
                e._setTexture(e._texture_no_on)
            }, e._onMouseOut = function () {
                e._setTexture(e._texture_no)
            }, e
        }
        return n(e, t), e.prototype.initialize = function (t, e) {
            this._texture_no = t, this._texture_no_on = e, this._setTexture(this._texture_no), null != this._texture_no_on && (this.interactive = this.buttonMode = !0, this.on(a.EventType.MOUSEOVER, this._onMouseOver), this.on(a.EventType.MOUSEOUT, this._onMouseOut))
        }, e.prototype.dispose = function () {
            this.interactive = this.buttonMode = !1, this.off(a.EventType.MOUSEOVER, this._onMouseOver), this.off(a.EventType.MOUSEOUT, this._onMouseOut)
        }, e.prototype._setTexture = function (t) {
            this.texture = o.REVAMP_BOX.getTexture(t)
        }, e
    }(PIXI.Sprite)
}