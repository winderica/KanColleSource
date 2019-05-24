const function1210 = function (t, e, i) {
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
    var o = i(4),
        r = i(131),
        s = i(241),
        a = i(420),
        _ = i(1),
        l = i(15),
        u = i(132),
        c = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._type_icon = new Array(10), e._focus_txt = new Array(10), e._text_slotName = new Array(10), e._skill_lv = new Array(10), e._namePopUp = new Array(10), e._icon_star = new Array(10), e._icon_plus = new Array(10), e._text_level = new Array(10), e._icon_starM = new Array(10), e._containerName = new Array(10), e._removeSlotItemBtn = new Array(10), e._btn_list_goFigureStr = new Array(5), e._btn_list_goFigure = new Array(5), e._lock_on = new Array(10), e._black_bg = new Array(2), e._list_kosho_mask = new Array(10), e._isListAnime = !1, e._isBtnAnime = !1, e._black_bg[0] = new h, e._black_bg[0].initialize(1, 1), e._black_bg[0].width = 1275, e._black_bg[0].height = 720, e._black_bg[0].alpha = .2, e._black_bg[0].position.set(-1248, -102), e._black_bg[0].visible = !1, e._black_bg[0].interactive = !1, e.addChild(e._black_bg[0]), e._list_bg = new PIXI.Sprite(s.REVAMP_LIST.getTexture(13)), e._list_bg.position.set(-6, 36), e.addChild(e._list_bg), e._list_item = new PIXI.Sprite(s.REVAMP_LIST.getTexture(14)), e._list_item.position.set(49, 48), e.addChild(e._list_item), e._tit2_bg = new PIXI.Sprite(s.REVAMP_LIST.getTexture(24)), e._tit2_bg.position.set(0, 0), e.addChild(e._tit2_bg), e._blue_txt_04 = new PIXI.Sprite(s.REVAMP_LIST.getTexture(3)), e._blue_txt_04.position.set(40, 10), e.addChild(e._blue_txt_04);
                for (var i = 0; i < 10; i++) {
                    e._type_icon[i] = new PIXI.Sprite, e._type_icon[i].visible = !1, e._type_icon[i].texture = r.COMMON_ICON_WEAPON.getTextureFromMstID(1 + i), e._type_icon[i].position.set(33, 45 * i + 105), e._type_icon[i].anchor.set(.5, .5), e.addChild(e._type_icon[i]), e._containerName[i] = new PIXI.Container, e._containerName[i].position.set(64, 92 + 45 * i), e._text_slotName[i] = new o.TextBox(21, 4999235), e._list_kosho_mask[i] = new PIXI.Sprite, e._list_kosho_mask[i].texture = s.REVAMP_LIST.getTexture(15), e._list_kosho_mask[i].visible = !1, e._list_kosho_mask[i].position.set(57, 84 + 45 * i), e._list_kosho_mask[i].width = 487, e.addChild(e._list_kosho_mask[i]), e._focus_txt[i] = new h(e._text_slotName[i], e._containerName[i]), e._focus_txt[i].initialize(2, 9), e._focus_txt[i].width = 487, e._focus_txt[i].height = 43, e._focus_txt[i].position.set(57, 84 + 45 * i), e.addChild(e._focus_txt[i]), e._text_slotName[i].visible = !1, e._text_slotName[i].text = "";
                    var n = l.CreateRect.gradientLeftToRight(254, 45, .9, .97);
                    e._text_slotName[i].mask = n, e._containerName[i].addChild(e._text_slotName[i], n), e.addChild(e._containerName[i])
                }
                for (var i = 0; i < 10; i++) e._skill_lv[i] = new PIXI.Sprite, e._skill_lv[i].visible = !1, e._skill_lv[i].position.set(277, 84 + 45 * i), e.addChild(e._skill_lv[i]), e._icon_star[i] = new PIXI.Sprite(s.REVAMP_LIST.getTexture(11)), e._icon_star[i].visible = !1, e._icon_star[i].position.set(315, 96 + 45 * i), e.addChild(e._icon_star[i]), e._icon_plus[i] = new PIXI.Sprite(s.REVAMP_LIST.getTexture(10)), e._icon_plus[i].visible = !1, e._icon_plus[i].position.set(333, 99 + 45 * i), e.addChild(e._icon_plus[i]), e._icon_starM[i] = new PIXI.Sprite(s.REVAMP_LIST.getTexture(12)), e._icon_starM[i].visible = !1, e._icon_starM[i].position.set(327, 90 + 45 * i), e.addChild(e._icon_starM[i]), e._text_level[i] = new o.TextBox(17, 4565413), e._text_level[i].visible = !1, e._text_level[i].position.set(348, 95 + 45 * i), e._text_level[i].text = i + "", e.addChild(e._text_level[i]), e._lock_on[i] = new PIXI.Sprite(s.REVAMP_LIST.getTexture(16)), e._lock_on[i].visible = !1, e._lock_on[i].position.set(358, 81 + 45 * i), e.addChild(e._lock_on[i]), e._namePopUp[i] = new p, e._namePopUp[i].position.set(297, 90 + 45 * i), e._namePopUp[i].visible = !1, e.addChild(e._namePopUp[i]), e._removeSlotItemBtn[i] = new h, e._removeSlotItemBtn[i].initialize(6, 6), e._removeSlotItemBtn[i].position.set(8, 45 * i + 86), e.addChild(e._removeSlotItemBtn[i]);
                e._btn_prev = new h, e._btn_prev.initialize(1, 1, !0), e._btn_prev.position.set(46, 559), e.addChild(e._btn_prev), e._btn_next = new h, e._btn_next.initialize(0, 0, !0), e._btn_next.position.set(319, 559), e.addChild(e._btn_next);
                for (var i = 0; i < 5; i++) e._btn_list_goFigureStr[i] = new o.TextBox(26, 4999235), e._btn_list_goFigureStr[i].position.set(111 + 42 * i, 553), e._btn_list_goFigureStr[i].text = i + 1 + "", e._btn_list_goFigureStr[i].anchor.set(.5, 0), e._btn_list_goFigureStr[i].style.letterSpacing = -1, e._btn_list_goFigure[i] = new h, e._btn_list_goFigure[i].position.set(111 + 42 * i, 553), e._btn_list_goFigure[i].initialize(2, 2), e._btn_list_goFigure[i].anchor.set(.5, 0), e._btn_list_goFigure[i].width = 42, e._btn_list_goFigure[i].height = 36, e.addChild(e._btn_list_goFigure[i]), e.addChild(e._btn_list_goFigureStr[i]);
                return e._black_bg[1] = new h, e._black_bg[1].initialize(1, 1), e._black_bg[1].width = 1800, e._black_bg[1].height = 720, e._black_bg[1].alpha = .3, e._black_bg[1].position.set(-1248, -102), e._black_bg[1].visible = !1, e._black_bg[1].interactive = !1, e.addChild(e._black_bg[1]), e._btn_special_repair = new h, e._btn_special_repair.initialize(7, 8), e._btn_special_repair.position.set(447, 540), e.addChild(e._btn_special_repair), e._btn_back = new h, e._btn_back.initialize(4, 5), e._btn_back.position.set(588, 550), e.addChild(e._btn_back), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "isListAnime", {
                get: function () {
                    return this._isListAnime
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "isBtnAnime", {
                get: function () {
                    return this._isBtnAnime
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "type_icon", {
                get: function () {
                    return this._type_icon
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "focus_txt", {
                get: function () {
                    return this._focus_txt
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "text_slotName", {
                get: function () {
                    return this._text_slotName
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "skill_lv", {
                get: function () {
                    return this._skill_lv
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "namePopUp", {
                get: function () {
                    return this._namePopUp
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "containerName", {
                get: function () {
                    return this._containerName
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "removeSlotItemBtn", {
                get: function () {
                    return this._removeSlotItemBtn
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "icon_star", {
                get: function () {
                    return this._icon_star
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "icon_plus", {
                get: function () {
                    return this._icon_plus
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "text_level", {
                get: function () {
                    return this._text_level
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "icon_starM", {
                get: function () {
                    return this._icon_starM
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_prev", {
                get: function () {
                    return this._btn_prev
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_next", {
                get: function () {
                    return this._btn_next
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_list_goFigureStr", {
                get: function () {
                    return this._btn_list_goFigureStr
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_list_goFigure", {
                get: function () {
                    return this._btn_list_goFigure
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "lock_on", {
                get: function () {
                    return this._lock_on
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "black_bg", {
                get: function () {
                    return this._black_bg
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_special_repair", {
                get: function () {
                    return this._btn_special_repair
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_back", {
                get: function () {
                    return this._btn_back
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "list_kosho_mask", {
                get: function () {
                    return this._list_kosho_mask
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.setStars = function (t, e) {
                0 == e ? (this._icon_star[t].visible = !1, this._icon_plus[t].visible = !1, this._text_level[t].visible = !1, this._text_level[t].text = "", this._icon_starM[t].visible = !1) : e < 10 ? (this._icon_star[t].visible = !0, this._icon_plus[t].visible = !0, this._text_level[t].visible = !0, this._text_level[t].text = e + "", this._icon_starM[t].visible = !1) : (this._icon_star[t].visible = !1, this._icon_plus[t].visible = !1, this._text_level[t].visible = !1, this._text_level[t].text = "", this._icon_starM[t].visible = !0)
            }, e.prototype.initialize = function () {}, e.prototype.dispose = function () {
                this.removeChildren(), this._type_icon = null, this._focus_txt = null, this._text_slotName.forEach(function (t) {
                    t.destroy()
                }), this._text_slotName = null, this._containerName = null, this._skill_lv = null, this._icon_star = null, this._icon_plus = null, this._text_level.forEach(function (t) {
                    t.destroy()
                }), this._text_level = null, this._icon_starM = null, this._btn_list_goFigureStr.forEach(function (t) {
                    t.destroy()
                }), this._btn_list_goFigureStr = null, this._btn_list_goFigure = null, this._lock_on = null, this._black_bg = null
            }, e.prototype._appearList = function (t) {
                var e = this;
                this._isListAnime || (this._isListAnime = !0, t ? (this._black_bg[0].visible = !0, this._black_bg[0].interactive = !0, this._tween = createjs.Tween.get(this).to({
                    x: 798
                }, 200).call(function () {
                    e._tween = null, e._isListAnime = !1
                })) : (this._black_bg[1].visible = !0, this._black_bg[1].interactive = !0, this._tween = createjs.Tween.get(this).to({
                    x: 1219
                }, 200).call(function () {
                    e._black_bg[1].visible = !1, e._black_bg[1].interactive = !1, e._black_bg[0].visible = !1, e._black_bg[0].interactive = !1, e._tween = null, e._isListAnime = !1
                })))
            }, e.prototype._appearBtn = function (t) {
                var e = this;
                this._isBtnAnime || (this._isBtnAnime = !0, t ? (this._black_bg[1].visible = !0, this._black_bg[1].interactive = !0, this._tween = createjs.Tween.get(this._btn_special_repair).to({
                    x: 87
                }, 200).call(function () {
                    e._tween = null, e._isBtnAnime = !1
                }), this._tween2 = createjs.Tween.get(this._btn_back).to({
                    x: 228
                }, 200).call(function () {
                    e._tween2 = null, e._isBtnAnime = !1
                })) : (this._tween = createjs.Tween.get(this._btn_special_repair).to({
                    x: 447
                }, 200).call(function () {
                    e._tween = null, e._isBtnAnime = !1
                }), this._tween2 = createjs.Tween.get(this._btn_back).to({
                    x: 588
                }, 200).call(function () {
                    e._tween2 = null, e._isBtnAnime = !1, e._appearList(!1)
                })))
            }, e
        }(PIXI.Container);
    e.ViewSlotitemList = c;
    var h = (function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.alpha = 0, e
            }
            n(e, t), e.prototype.initialize = function () {}, e.prototype.startAnim = function () {
                this._anim()
            }, e.prototype.stopAnim = function () {
                null != this._tween && (this._tween.setPaused(!0), this._tween = null)
            }, e.prototype._anim = function () {
                var t = this;
                this._tween = createjs.Tween.get(this).to({
                    alpha: 1
                }, 150).to({
                    alpha: 0
                }, 150).call(function () {
                    t._tween = null
                })
            }
        }(PIXI.Sprite), function (t) {
            function e(e, i, n, o) {
                void 0 === e && (e = null), void 0 === i && (i = null), void 0 === n && (n = null), void 0 === o && (o = null);
                var r = t.call(this) || this;
                return r._onMouseOver = function () {
                    r._setTexture(r._texture_no_on, r._isPager), r.textColorChangeEnabled && (null != r._tbj && (null != r._containerName && (r._containerName.cacheAsBitmap = !1), r._tbj.style.fill = 16777215, null != r._containerName && (r._containerName.cacheAsBitmap = !0)), null != r._tbjShip && (null != r._containerShipName && (r._containerShipName.cacheAsBitmap = !1), r._tbjShip.style.fill = 16777215, null != r._containerShipName && (r._containerShipName.cacheAsBitmap = !0)))
                }, r._onMouseOut = function () {
                    r._setTexture(r._texture_no, r._isPager), r.textColorChangeEnabled && (null != r._tbj && (null != r._containerName && (r._containerName.cacheAsBitmap = !1), r._tbj.style.fill = 4999235, null != r._containerName && (r._containerName.cacheAsBitmap = !0)), null != r._tbjShip && (null != r._containerShipName && (r._containerShipName.cacheAsBitmap = !1), r._tbjShip.style.fill = 4999235, null != r._containerShipName && (r._containerShipName.cacheAsBitmap = !0)))
                }, r._tbj = e, r._containerName = i, r._tbjShip = n, r._containerShipName = o, r.textColorChangeEnabled = !0, r
            }
            return n(e, t), e.prototype.initialize = function (t, e, i) {
                void 0 === i && (i = !1), this._texture_no = t, this._texture_no_on = e, this._isPager = i, this._setTexture(this._texture_no, this._isPager), null != this._texture_no_on && (this.interactive = this.buttonMode = !0, this.on(_.EventType.MOUSEOVER, this._onMouseOver), this.on(_.EventType.MOUSEOUT, this._onMouseOut))
            }, e.prototype.dispose = function () {
                this.interactive = this.buttonMode = !1, this.off(_.EventType.MOUSEOVER, this._onMouseOver), this.off(_.EventType.MOUSEOUT, this._onMouseOut)
            }, e.prototype._setTexture = function (t, e) {
                this.texture = e ? a.REVAMP_PAGER.getTexture(t) : s.REVAMP_LIST.getTexture(t)
            }, e
        }(PIXI.Sprite)),
        p = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.TEXT_OFFSET_X = 3, e.TEXT_OFFSET_Y = 2, e.textName = new o.TextBox(21, 16777215), e.textLv = new o.TextBox(18, 16774898), e.containerName = new PIXI.Container, e.textName.position.set(e.TEXT_OFFSET_X - 236, e.TEXT_OFFSET_Y), e.textMask = l.CreateRect.gradientLeftToRight(360, 31, .2, .3), e.textMask.position.set(e.TEXT_OFFSET_X - 236, e.TEXT_OFFSET_Y), e.textName.mask = e.textMask, e.containerName.addChild(e.textName, e.textMask), e.textLv.anchor.x = 1, e.textLv.position.set(e.TEXT_OFFSET_X - 18 - 48, e.TEXT_OFFSET_Y + 4), e.shipFlag = new u.ShipInDeckFlag, e.shipFlag.position.set(e.TEXT_OFFSET_X - 16 - 48, e.TEXT_OFFSET_Y + 2), e.shipFlag.scale.set(.75, .75), e.addChild(e.containerName, e.textLv, e.shipFlag), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.containerName.cacheAsBitmap = !1, this.removeChildren(), this.textName.destroy(), this.textName = null
            }, e.prototype.update = function (t, e, i) {
                void 0 === e && (e = null), void 0 === i && (i = null), "" != t && (this.containerName.cacheAsBitmap = !1), this.textName.text = t, this.textName.anchor.x = 0, this.textLv.text = "(Lv:" + e + ")", this.shipFlag.update(null == i ? [-1, -1] : i), "" != t && (this.containerName.cacheAsBitmap = !0)
            }, e
        }(PIXI.Container)
}