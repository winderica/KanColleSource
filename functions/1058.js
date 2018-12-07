const function1058 = function (t, e, i) {
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
    var o = i(9), r = i(232), s = i(4), a = i(186), _ = i(0), l = i(1), u = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._disposed = !1, e
        }

        return n(e, t), Object.defineProperty(e.prototype, "NickName", {
            get: function () {
                return this._textJ_NickName
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "Rank", {
            get: function () {
                return this._textJ_Rank
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "BGM", {
            get: function () {
                return this._textJ_BGM
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "DeckNum", {
            get: function () {
                return this._textN_DeckNum
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "ArsenalDockNum", {
            get: function () {
                return this._textN_ArsenalDockNum
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "RepairDockNum", {
            get: function () {
                return this._textN_RepairDockNum
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "ShipNum", {
            get: function () {
                return this._textN_ShipNum
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "SlotItemNum", {
            get: function () {
                return this._textN_SlotItemNum
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "FurnitureNum", {
            get: function () {
                return this._textN_FurnitureNum
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "DeckMax", {
            get: function () {
                return this._textN_DeckMax
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "ShipMax", {
            get: function () {
                return this._textN_ShipMax
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "ShipMaxRemain", {
            get: function () {
                return this._textN_ShipMaxRemain
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "SlotItemMax", {
            get: function () {
                return this._textN_SlotItemMax
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "DutyExecCount", {
            get: function () {
                return this._textN_DutyExecCount
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "MaterialMax", {
            get: function () {
                return this._textN_MaterialMax
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "RevKitCount", {
            get: function () {
                return this._textN_RevKitCount
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "Level", {
            get: function () {
                return this._textN_Level
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "Experiences", {
            get: function () {
                return this._textN_Experiences
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "WarWin", {
            get: function () {
                return this._textN_WarWin
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "WarLose", {
            get: function () {
                return this._textN_WarLose
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "WarRate", {
            get: function () {
                return this._textN_WarRate
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "MissionCount", {
            get: function () {
                return this._textN_MissionCount
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "MissionSuccess", {
            get: function () {
                return this._textN_MissionSuccess
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "MissionRate", {
            get: function () {
                return this._textN_MissionRate
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "PracticeWin", {
            get: function () {
                return this._textN_PracticeWin
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "PracticeLose", {
            get: function () {
                return this._textN_PracticeLose
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "PracticeRate", {
            get: function () {
                return this._textN_PracticeRate
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "Medal_Kou_Num", {
            get: function () {
                return this._textN_Medal_Kou_Num
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "btn_USER_BTN_EDIT", {
            get: function () {
                return this._btn_USER_BTN_EDIT
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function () {
            var t = this;
            this._bg = new PIXI.Sprite(o.COMMON_MISC.getTexture(48)), this._bg.position.set(171, 103), this._header = new PIXI.Sprite(r.RECORD_PARTS.getTexture(30)), this._header.anchor.set(1, 0), this._header.position.set(1200, 102), this.addChild(this._bg), this.addChild(this._header), this._obj_USER_TXT1 = new PIXI.Sprite(r.RECORD_PARTS.getTexture(40)), this._obj_USER_TXT1.position.set(219, 192), this.addChild(this._obj_USER_TXT1), this._obj_CLASS = new PIXI.Sprite(o.COMMON_MISC.getTexture(this._getClassTexture(_.default.model.basic.rank))), this._obj_CLASS.position.set(258, 235), this.addChild(this._obj_CLASS), this._obj_USER_TXT2 = new PIXI.Sprite(r.RECORD_PARTS.getTexture(41)), this._obj_USER_TXT2.position.set(360, 258), this.addChild(this._obj_USER_TXT2), this._obj_USER_ICON1 = new PIXI.Sprite(r.RECORD_PARTS.getTexture(18)), this._obj_USER_ICON1.position.set(360, 294), this.addChild(this._obj_USER_ICON1), this._obj_USER_COMMENT = new PIXI.Sprite(r.RECORD_PARTS.getTexture(35)), this._obj_USER_COMMENT.position.set(270, 334), this.addChild(this._obj_USER_COMMENT), this._obj_USER_BG = new PIXI.Sprite(r.RECORD_PARTS.getTexture(31)), this._obj_USER_BG.position.set(204, 405), this.addChild(this._obj_USER_BG), _.default.model.basic.medal_num > 0 && (this._obj_ICON_CLEAR_1S = new PIXI.Sprite(r.RECORD_PARTS.getTexture(19)), this._obj_ICON_CLEAR_1S.position.set(684, 640), this.addChild(this._obj_ICON_CLEAR_1S)), this._obj_USER_INFO2_BG2 = new PIXI.Sprite(r.RECORD_PARTS.getTexture(37)), this._obj_USER_INFO2_BG2.position.set(775, 195), this.addChild(this._obj_USER_INFO2_BG2), this._obj_BROWN_S_KANTAI = new PIXI.Sprite(r.RECORD_PARTS.getTexture(2)), this._obj_BROWN_S_KANTAI.position.set(1176, 199), this._obj_BROWN_S_KANTAI.anchor.set(1, 0), this.addChild(this._obj_BROWN_S_KANTAI), this._obj_BROWN_S_SHISETSU1 = new PIXI.Sprite(r.RECORD_PARTS.getTexture(4)), this._obj_BROWN_S_SHISETSU1.position.set(1176, 226), this._obj_BROWN_S_SHISETSU1.anchor.set(1, 0), this.addChild(this._obj_BROWN_S_SHISETSU1), this._obj_BROWN_S_SHISETSU2 = new PIXI.Sprite(r.RECORD_PARTS.getTexture(4)), this._obj_BROWN_S_SHISETSU2.position.set(1176, 253), this._obj_BROWN_S_SHISETSU2.anchor.set(1, 0), this.addChild(this._obj_BROWN_S_SHISETSU2), this._obj_BROWN_S_SEKI = new PIXI.Sprite(r.RECORD_PARTS.getTexture(3)), this._obj_BROWN_S_SEKI.position.set(1176, 280), this._obj_BROWN_S_SEKI.anchor.set(1, 0), this.addChild(this._obj_BROWN_S_SEKI), this._obj_WorldName = new a.WorldTextImage, this._obj_WorldName.load("small"), this._obj_WorldName.anchor.set(0, 0), this._obj_WorldName.texture.baseTexture.hasLoaded ? this._alignMid(this._obj_WorldName, 1120, 372) : this._obj_WorldName.texture.baseTexture.addListener("loaded", function () {
                t._alignMid(t._obj_WorldName, 1120, 372)
            }), this.addChild(this._obj_WorldName), this._obj_BLUE_S_SHISETSU = new PIXI.Sprite(r.RECORD_PARTS.getTexture(1)), this._obj_BLUE_S_SHISETSU.position.set(1176, 415), this._obj_BLUE_S_SHISETSU.anchor.set(1, 0), this.addChild(this._obj_BLUE_S_SHISETSU), this._obj_BLUE_S_SEKI = new PIXI.Sprite(r.RECORD_PARTS.getTexture(0)), this._obj_BLUE_S_SEKI.position.set(1176, 442), this._obj_BLUE_S_SEKI.anchor.set(1, 0), this.addChild(this._obj_BLUE_S_SEKI), this._obj_USER_TXT_SEKI = new PIXI.Sprite(r.RECORD_PARTS.getTexture(43)), this._obj_USER_TXT_SEKI.position.set(1176, 469), this._obj_USER_TXT_SEKI.anchor.set(1, 0), this.addChild(this._obj_USER_TXT_SEKI), this._obj_USER_INFO2_TXT = new PIXI.Sprite(r.RECORD_PARTS.getTexture(39)), this._obj_USER_INFO2_TXT.position.set(780, 579), this.addChild(this._obj_USER_INFO2_TXT), this._obj_USER_INFO2_KAISYU = new PIXI.Sprite(r.RECORD_PARTS.getTexture(38)), this._obj_USER_INFO2_KAISYU.position.set(1050, 579), this.addChild(this._obj_USER_INFO2_KAISYU), this._obj_JUKEBOX_BG2 = new PIXI.Sprite(r.RECORD_PARTS.getTexture(22)), this._obj_JUKEBOX_BG2.position.set(774, 660), this.addChild(this._obj_JUKEBOX_BG2), this._obj_USER_ILINE1 = new PIXI.Sprite(r.RECORD_PARTS.getTexture(36)), this._obj_USER_ILINE1.position.set(1053, 600), this.addChild(this._obj_USER_ILINE1), _.default.model.useItem.getCount(79) > 0 && (this._obj_ICON_CLEAR_4S = new PIXI.Sprite(r.RECORD_PARTS.getTexture(20)), this._obj_ICON_CLEAR_4S.position.set(471, 601), this.addChild(this._obj_ICON_CLEAR_4S)), _.default.model.useItem.getCount(81) + _.default.model.useItem.getCount(82) + _.default.model.useItem.getCount(83) + _.default.model.useItem.getCount(84) > 0 && (this._obj_ICON_CLEAR_5S = new PIXI.Sprite(r.RECORD_PARTS.getTexture(21)), this._obj_ICON_CLEAR_5S.position.set(529, 596), this.addChild(this._obj_ICON_CLEAR_5S)), this._textJ_NickName = new s.TextBox(30, 4473924), this._textJ_NickName.text = _.default.model.basic.nickName, this._textJ_NickName.position.set(312, 186), this.addChild(this._textJ_NickName), this._textJ_Rank = new s.TextBox(20, 4473924), this._textJ_Rank.text = "", this._textJ_Rank.position.set(457, 252), this.addChild(this._textJ_Rank), this._textJ_BGM = new s.TextBox(18, 4473924), this._textJ_BGM.text = "", this._textJ_BGM.anchor.set(1, 0), this._textJ_BGM.position.set(1180, 663), this.addChild(this._textJ_BGM);
            this._textN_DeckNum = new s.TextBox(21, 4473924), this._textN_DeckNum.text = "", this._textN_DeckNum.anchor.set(1, 0), this._textN_DeckNum.position.set(1141, 195), this.addChild(this._textN_DeckNum), this._textN_ArsenalDockNum = new s.TextBox(21, 4473924), this._textN_ArsenalDockNum.text = "", this._textN_ArsenalDockNum.anchor.set(1, 0), this._textN_ArsenalDockNum.position.set(1141, 222), this.addChild(this._textN_ArsenalDockNum), this._textN_RepairDockNum = new s.TextBox(21, 4473924), this._textN_RepairDockNum.text = "", this._textN_RepairDockNum.anchor.set(1, 0), this._textN_RepairDockNum.position.set(1141, 249), this.addChild(this._textN_RepairDockNum), this._textN_ShipNum = new s.TextBox(21, 4473924), this._textN_ShipNum.text = "", this._textN_ShipNum.anchor.set(1, 0), this._textN_ShipNum.position.set(1158, 276), this.addChild(this._textN_ShipNum), this._textN_SlotItemNum = new s.TextBox(21, 4473924), this._textN_SlotItemNum.text = "", this._textN_SlotItemNum.anchor.set(1, 0), this._textN_SlotItemNum.position.set(1179, 303), this.addChild(this._textN_SlotItemNum), this._textN_FurnitureNum = new s.TextBox(21, 4473924), this._textN_FurnitureNum.text = "", this._textN_FurnitureNum.anchor.set(1, 0), this._textN_FurnitureNum.position.set(1179, 330), this.addChild(this._textN_FurnitureNum), this._textN_DeckMax = new s.TextBox(21, 2334367), this._textN_DeckMax.text = "", this._textN_DeckMax.anchor.set(1, 0), this._textN_DeckMax.position.set(1141, 411), this.addChild(this._textN_DeckMax), this._textN_ShipMax = new s.TextBox(21, 2334367), this._textN_ShipMax.text = "", this._textN_ShipMax.anchor.set(1, 0), this._textN_ShipMax.position.set(1158, 438), this.addChild(this._textN_ShipMax), this._textN_ShipMaxRemain = new s.TextBox(21, 2323103), this._textN_ShipMaxRemain.text = "", this._textN_ShipMaxRemain.anchor.set(1, 0), this._textN_ShipMaxRemain.position.set(1158, 465), this.addChild(this._textN_ShipMaxRemain), this._textN_SlotItemMax = new s.TextBox(21, 2334367), this._textN_SlotItemMax.text = "", this._textN_SlotItemMax.anchor.set(1, 0), this._textN_SlotItemMax.position.set(1179, 492), this.addChild(this._textN_SlotItemMax), this._textN_DutyExecCount = new s.TextBox(21, 2334367), this._textN_DutyExecCount.text = "", this._textN_DutyExecCount.anchor.set(1, 0), this._textN_DutyExecCount.position.set(1179, 519), this.addChild(this._textN_DutyExecCount), this._textN_MaterialMax = new s.TextBox(21, 2334367), this._textN_MaterialMax.text = "", this._textN_MaterialMax.anchor.set(1, 0), this._textN_MaterialMax.position.set(1179, 546), this.addChild(this._textN_MaterialMax), this._textN_RevKitCount = new s.TextBox(21, 10324338), this._textN_RevKitCount.text = "", this._textN_RevKitCount.anchor.set(1, 0), this._textN_RevKitCount.position.set(1179, 573), this.addChild(this._textN_RevKitCount), this._textN_Level = new s.TextBox(28, 4473924), this._textN_Level.text = "", this._textN_Level.position.set(393, 248), this.addChild(this._textN_Level), this._textN_Experiences = new s.TextBox(24, 4473924), this._textN_Experiences.text = "", this._textN_Experiences.position.set(490, 291), this.addChild(this._textN_Experiences);
            this._textN_WarWin = new s.TextBox(21, 16777215), this._textN_WarWin.text = "", this._textN_WarWin.anchor.set(1, 0), this._textN_WarWin.position.set(450, 430), this.addChild(this._textN_WarWin), this._textN_WarLose = new s.TextBox(21, 16777215), this._textN_WarLose.text = "", this._textN_WarLose.anchor.set(1, 0), this._textN_WarLose.position.set(450, 460), this.addChild(this._textN_WarLose), this._textN_WarRate = new s.TextBox(21, 16777215), this._textN_WarRate.text = "", this._textN_WarRate.anchor.set(1, 0), this._textN_WarRate.position.set(450, 490), this.addChild(this._textN_WarRate), this._textN_MissionCount = new s.TextBox(21, 16777215), this._textN_MissionCount.text = "", this._textN_MissionCount.anchor.set(1, 0), this._textN_MissionCount.position.set(450, 550), this.addChild(this._textN_MissionCount), this._textN_MissionSuccess = new s.TextBox(21, 16777215), this._textN_MissionSuccess.text = "", this._textN_MissionSuccess.anchor.set(1, 0), this._textN_MissionSuccess.position.set(450, 580), this.addChild(this._textN_MissionSuccess), this._textN_MissionRate = new s.TextBox(21, 16777215), this._textN_MissionRate.text = "", this._textN_MissionRate.anchor.set(1, 0), this._textN_MissionRate.position.set(450, 610), this.addChild(this._textN_MissionRate), this._textN_PracticeWin = new s.TextBox(21, 16777215), this._textN_PracticeWin.text = "", this._textN_PracticeWin.anchor.set(1, 0), this._textN_PracticeWin.position.set(726, 430), this.addChild(this._textN_PracticeWin), this._textN_PracticeLose = new s.TextBox(21, 16777215), this._textN_PracticeLose.text = "", this._textN_PracticeLose.anchor.set(1, 0), this._textN_PracticeLose.position.set(726, 460), this.addChild(this._textN_PracticeLose), this._textN_PracticeRate = new s.TextBox(21, 16777215), this._textN_PracticeRate.text = "", this._textN_PracticeRate.anchor.set(1, 0), this._textN_PracticeRate.position.set(726, 490), this.addChild(this._textN_PracticeRate), this._textN_Medal_Kou_Num = new s.TextBox(16, 16777215), this._textN_Medal_Kou_Num.text = "", this._textN_Medal_Kou_Num.style.stroke = 4473924, this._textN_Medal_Kou_Num.style.strokeThickness = 3, this._textN_Medal_Kou_Num.anchor.set(1, 0), this._textN_Medal_Kou_Num.position.set(736, 655), this.addChild(this._textN_Medal_Kou_Num), this._btn_USER_BTN_EDIT = new c, this._btn_USER_BTN_EDIT.initialize(32, 32), this._btn_USER_BTN_EDIT.position.set(613, 334), this.addChild(this._btn_USER_BTN_EDIT)
        }, e.prototype._getClassTexture = function (t) {
            switch (t) {
                case 10:
                    return 38;
                case 9:
                    return 39;
                case 8:
                    return 40;
                case 7:
                    return 41;
                case 6:
                    return 42;
                case 5:
                    return 43;
                case 4:
                    return 44;
                case 3:
                    return 45;
                case 2:
                    return 46;
                case 1:
                    return 47
            }
        }, e.prototype.dispose = function () {
            this._textJ_NickName.destroy(), this._textJ_Rank.destroy(), this._textJ_BGM.destroy(), this._textN_DeckNum.destroy(), this._textN_ArsenalDockNum.destroy(), this._textN_RepairDockNum.destroy(), this._textN_ShipNum.destroy(), this._textN_SlotItemNum.destroy(), this._textN_FurnitureNum.destroy(), this._textN_DeckMax.destroy(), this._textN_ShipMax.destroy(), this._textN_ShipMaxRemain.destroy(), this._textN_SlotItemMax.destroy(), this._textN_DutyExecCount.destroy(), this._textN_MaterialMax.destroy(), this._textN_RevKitCount.destroy(), this._textN_Level.destroy(), this._textN_Experiences.destroy(), this._textN_WarWin.destroy(), this._textN_WarLose.destroy(), this._textN_WarRate.destroy(), this._textN_MissionCount.destroy(), this._textN_MissionSuccess.destroy(), this._textN_MissionRate.destroy(), this._textN_PracticeWin.destroy(), this._textN_PracticeLose.destroy(), this._textN_PracticeRate.destroy(), this._textN_Medal_Kou_Num.destroy(), this._disposed = !0, this.removeChildren()
        }, e.prototype._alignMid = function (t, e, i) {
            t.position.set(Math.floor(e - t.width / 2), Math.floor(i - t.height / 2))
        }, e
    }(PIXI.Container);
    e.ViewInfo = u;
    var c = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._onMouseOver = function () {
                e._setTexture(e._texture_no_on)
            }, e._onMouseOut = function () {
                e._setTexture(e._texture_no)
            }, e
        }

        return n(e, t), e.prototype.initialize = function (t, e) {
            this._texture_no = t, this._texture_no_on = e, this._setTexture(this._texture_no), null != this._texture_no_on && (this.interactive = this.buttonMode = !0, this.on(l.EventType.MOUSEOVER, this._onMouseOver), this.on(l.EventType.MOUSEOUT, this._onMouseOut))
        }, e.prototype.dispose = function () {
            this.interactive = this.buttonMode = !1, this.off(l.EventType.MOUSEOVER, this._onMouseOver), this.off(l.EventType.MOUSEOUT, this._onMouseOut)
        }, e.prototype._setTexture = function (t) {
            this._texture = r.RECORD_PARTS.getTexture(t)
        }, e
    }(PIXI.Sprite)
}