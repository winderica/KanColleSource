const function1201 = function (t, e, i) {
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
    var o = i(4), r = i(131), s = i(242), a = i(418), _ = i(1), u = i(13), l = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._type_icon = new Array(10), e._focus_txt = new Array(10), e._text_slotName = new Array(10), e._skill_lv = new Array(10), e._icon_star = new Array(10), e._icon_plus = new Array(10), e._text_level = new Array(10), e._icon_starM = new Array(10), e._containerName = new Array(10), e._btn_list_goFigureStr = new Array(5), e._btn_list_goFigure = new Array(5), e._lock_on = new Array(10), e._black_bg = new Array(2), e._isListAnime = !1, e._isBtnAnime = !1, e._black_bg[0] = new c, e._black_bg[0].initialize(1, 1), e._black_bg[0].width = 1275, e._black_bg[0].height = 720, e._black_bg[0].alpha = .2, e._black_bg[0].position.set(-1248, -102), e._black_bg[0].visible = !1, e._black_bg[0].interactive = !1, e.addChild(e._black_bg[0]), e._list_bg = new PIXI.Sprite(s.REVAMP_LIST.getTexture(12)), e._list_bg.position.set(-6, 36), e.addChild(e._list_bg), e._list_item = new PIXI.Sprite(s.REVAMP_LIST.getTexture(13)), e._list_item.position.set(49, 48), e.addChild(e._list_item), e._tit2_bg = new PIXI.Sprite(s.REVAMP_LIST.getTexture(22)), e._tit2_bg.position.set(0, 0), e.addChild(e._tit2_bg), e._blue_txt_04 = new PIXI.Sprite(s.REVAMP_LIST.getTexture(3)), e._blue_txt_04.position.set(40, 10), e.addChild(e._blue_txt_04);
            for (var i = 0; i < 10; i++) {
                e._type_icon[i] = new PIXI.Sprite, e._type_icon[i].visible = !1, e._type_icon[i].texture = r.COMMON_ICON_WEAPON.getTextureFromMstID(1 + i), e._type_icon[i].position.set(33, 45 * i + 105), e._type_icon[i].anchor.set(.5, .5), e.addChild(e._type_icon[i]), e._containerName[i] = new PIXI.Container, e._containerName[i].position.set(64, 92 + 45 * i), e._text_slotName[i] = new o.TextBox(21, 4999235), e._focus_txt[i] = new c(e._text_slotName[i], e._containerName[i]), e._focus_txt[i].initialize(2, 8), e._focus_txt[i].width = 487, e._focus_txt[i].height = 45, e._focus_txt[i].position.set(57, 84 + 45 * i), e.addChild(e._focus_txt[i]), e._text_slotName[i].visible = !1, e._text_slotName[i].text = "";
                var n = u.CreateRect.gradientLeftToRight(254, 45, .9, .97);
                e._text_slotName[i].mask = n, e._containerName[i].addChild(e._text_slotName[i], n), e.addChild(e._containerName[i])
            }
            for (var i = 0; i < 10; i++) e._skill_lv[i] = new PIXI.Sprite, e._skill_lv[i].visible = !1, e._skill_lv[i].position.set(277, 84 + 45 * i), e.addChild(e._skill_lv[i]), e._icon_star[i] = new PIXI.Sprite(s.REVAMP_LIST.getTexture(10)), e._icon_star[i].visible = !1, e._icon_star[i].position.set(315, 96 + 45 * i), e.addChild(e._icon_star[i]), e._icon_plus[i] = new PIXI.Sprite(s.REVAMP_LIST.getTexture(9)), e._icon_plus[i].visible = !1, e._icon_plus[i].position.set(333, 99 + 45 * i), e.addChild(e._icon_plus[i]), e._icon_starM[i] = new PIXI.Sprite(s.REVAMP_LIST.getTexture(11)), e._icon_starM[i].visible = !1, e._icon_starM[i].position.set(327, 90 + 45 * i), e.addChild(e._icon_starM[i]), e._text_level[i] = new o.TextBox(17, 4565413), e._text_level[i].visible = !1, e._text_level[i].position.set(348, 95 + 45 * i), e._text_level[i].text = i + "", e.addChild(e._text_level[i]), e._lock_on[i] = new PIXI.Sprite(s.REVAMP_LIST.getTexture(14)), e._lock_on[i].visible = !1, e._lock_on[i].position.set(358, 81 + 45 * i), e.addChild(e._lock_on[i]);
            e._btn_prev = new c, e._btn_prev.initialize(1, 1, !0), e._btn_prev.position.set(46, 559), e.addChild(e._btn_prev), e._btn_next = new c, e._btn_next.initialize(0, 0, !0), e._btn_next.position.set(319, 559), e.addChild(e._btn_next);
            for (var i = 0; i < 5; i++) e._btn_list_goFigureStr[i] = new o.TextBox(26, 4999235), e._btn_list_goFigureStr[i].position.set(111 + 42 * i, 553), e._btn_list_goFigureStr[i].text = i + 1 + "", e._btn_list_goFigureStr[i].anchor.set(.5, 0), e._btn_list_goFigureStr[i].style.letterSpacing = -1, e._btn_list_goFigure[i] = new c, e._btn_list_goFigure[i].position.set(111 + 42 * i, 553), e._btn_list_goFigure[i].initialize(2, 2), e._btn_list_goFigure[i].anchor.set(.5, 0), e._btn_list_goFigure[i].width = 42, e._btn_list_goFigure[i].height = 36, e.addChild(e._btn_list_goFigure[i]), e.addChild(e._btn_list_goFigureStr[i]);
            return e._black_bg[1] = new c, e._black_bg[1].initialize(1, 1), e._black_bg[1].width = 1800, e._black_bg[1].height = 720, e._black_bg[1].alpha = .3, e._black_bg[1].position.set(-1248, -102), e._black_bg[1].visible = !1, e._black_bg[1].interactive = !1, e.addChild(e._black_bg[1]), e._btn_special_repair = new c, e._btn_special_repair.initialize(6, 7), e._btn_special_repair.position.set(447, 540), e.addChild(e._btn_special_repair), e._btn_back = new c, e._btn_back.initialize(4, 5), e._btn_back.position.set(588, 550), e.addChild(e._btn_back), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "isListAnime", {
            get: function () {
                return this._isListAnime
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "isBtnAnime", {
            get: function () {
                return this._isBtnAnime
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "type_icon", {
            get: function () {
                return this._type_icon
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "focus_txt", {
            get: function () {
                return this._focus_txt
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "text_slotName", {
            get: function () {
                return this._text_slotName
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "skill_lv", {
            get: function () {
                return this._skill_lv
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "containerName", {
            get: function () {
                return this._containerName
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "icon_star", {
            get: function () {
                return this._icon_star
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "icon_plus", {
            get: function () {
                return this._icon_plus
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "text_level", {
            get: function () {
                return this._text_level
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "icon_starM", {
            get: function () {
                return this._icon_starM
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "btn_prev", {
            get: function () {
                return this._btn_prev
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "btn_next", {
            get: function () {
                return this._btn_next
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "btn_list_goFigureStr", {
            get: function () {
                return this._btn_list_goFigureStr
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "btn_list_goFigure", {
            get: function () {
                return this._btn_list_goFigure
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "lock_on", {
            get: function () {
                return this._lock_on
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "black_bg", {
            get: function () {
                return this._black_bg
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "btn_special_repair", {
            get: function () {
                return this._btn_special_repair
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "btn_back", {
            get: function () {
                return this._btn_back
            }, enumerable: !0, configurable: !0
        }), e.prototype.setStars = function (t, e) {
            0 == e ? (this._icon_star[t].visible = !1, this._icon_plus[t].visible = !1, this._text_level[t].visible = !1, this._text_level[t].text = "", this._icon_starM[t].visible = !1) : e < 10 ? (this._icon_star[t].visible = !0, this._icon_plus[t].visible = !0, this._text_level[t].visible = !0, this._text_level[t].text = e + "", this._icon_starM[t].visible = !1) : (this._icon_star[t].visible = !1, this._icon_plus[t].visible = !1, this._text_level[t].visible = !1, this._text_level[t].text = "", this._icon_starM[t].visible = !0)
        }, e.prototype.initialize = function () {
        }, e.prototype.dispose = function () {
            this.removeChildren(), this._type_icon = null, this._focus_txt = null, this._text_slotName = null, this._containerName = null, this._skill_lv = null, this._icon_star = null, this._icon_plus = null, this._text_level = null, this._icon_starM = null, this._btn_list_goFigureStr = null, this._btn_list_goFigure = null, this._lock_on = null, this._black_bg = null
        }, e.prototype._appearList = function (t) {
            var e = this;
            this._isListAnime || (this._isListAnime = !0, t ? (this._black_bg[0].visible = !0, this._black_bg[0].interactive = !0, this._tween = createjs.Tween.get(this).to({ x: 798 }, 200).call(function () {
                e._tween = null, e._isListAnime = !1
            })) : (this._black_bg[1].visible = !0, this._black_bg[1].interactive = !0, this._tween = createjs.Tween.get(this).to({ x: 1219 }, 200).call(function () {
                e._black_bg[1].visible = !1, e._black_bg[1].interactive = !1, e._black_bg[0].visible = !1, e._black_bg[0].interactive = !1, e._tween = null, e._isListAnime = !1
            })))
        }, e.prototype._appearBtn = function (t) {
            var e = this;
            this._isBtnAnime || (this._isBtnAnime = !0, t ? (this._black_bg[1].visible = !0, this._black_bg[1].interactive = !0, this._tween = createjs.Tween.get(this._btn_special_repair).to({ x: 87 }, 200).call(function () {
                e._tween = null, e._isBtnAnime = !1
            }), this._tween2 = createjs.Tween.get(this._btn_back).to({ x: 228 }, 200).call(function () {
                e._tween2 = null, e._isBtnAnime = !1
            })) : (this._tween = createjs.Tween.get(this._btn_special_repair).to({ x: 447 }, 200).call(function () {
                e._tween = null, e._isBtnAnime = !1
            }), this._tween2 = createjs.Tween.get(this._btn_back).to({ x: 588 }, 200).call(function () {
                e._tween2 = null, e._isBtnAnime = !1, e._appearList(!1)
            })))
        }, e
    }(PIXI.Container);
    e.ViewSlotitemList = l;
    var c = (function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.alpha = 0, e
        }

        n(e, t), e.prototype.initialize = function () {
        }, e.prototype.startAnim = function () {
            this._anim()
        }, e.prototype.stopAnim = function () {
            null != this._tween && (this._tween.setPaused(!0), this._tween = null)
        }, e.prototype._anim = function () {
            var t = this;
            this._tween = createjs.Tween.get(this).to({ alpha: 1 }, 150).to({ alpha: 0 }, 150).call(function () {
                t._tween = null
            })
        }
    }(PIXI.Sprite), function (t) {
        function e(e, i) {
            void 0 === e && (e = null), void 0 === i && (i = null);
            var n = t.call(this) || this;
            return n._onMouseOver = function () {
                n._setTexture(n._texture_no_on, n._isPager), null != n._tbj && (null != n._containerName && (n._containerName.cacheAsBitmap = !1), n._tbj.style.fill = 16777215, null != n._containerName && (n._containerName.cacheAsBitmap = !0))
            }, n._onMouseOut = function () {
                n._setTexture(n._texture_no, n._isPager), null != n._tbj && (null != n._containerName && (n._containerName.cacheAsBitmap = !1), n._tbj.style.fill = 4999235, null != n._containerName && (n._containerName.cacheAsBitmap = !0))
            }, n._tbj = e, n._containerName = i, n
        }

        return n(e, t), e.prototype.initialize = function (t, e, i) {
            void 0 === i && (i = !1), this._texture_no = t, this._texture_no_on = e, this._isPager = i, this._setTexture(this._texture_no, this._isPager), null != this._texture_no_on && (this.interactive = this.buttonMode = !0, this.on(_.EventType.MOUSEOVER, this._onMouseOver), this.on(_.EventType.MOUSEOUT, this._onMouseOut))
        }, e.prototype.dispose = function () {
            this.interactive = this.buttonMode = !1, this.off(_.EventType.MOUSEOVER, this._onMouseOver), this.off(_.EventType.MOUSEOUT, this._onMouseOut)
        }, e.prototype._setTexture = function (t, e) {
            this.texture = e ? a.REVAMP_PAGER.getTexture(t) : s.REVAMP_LIST.getTexture(t)
        }, e
    }(PIXI.Sprite))
}