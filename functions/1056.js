const function1056 = function (t, e, i) {
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
    var o = i(9), r = i(231), s = i(4), a = i(186), _ = i(1), u = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._obj_line = [], e._obj_balloon = [], e._obj_medal = [], e._obj_flag = [], e._textJ_Name = [], e._textJ_RankName = [], e._textJ_Comment = [], e._textN_Rank = [], e._textN_Medal = [], e._textN_Score = [], e._mode2_mask = [], e
        }

        return n(e, t), Object.defineProperty(e.prototype, "obj_line", {
            get: function () {
                return this._obj_line
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "obj_balloon", {
            get: function () {
                return this._obj_balloon
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "obj_medal", {
            get: function () {
                return this._obj_medal
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "obj_flag", {
            get: function () {
                return this._obj_flag
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "textJ_Name", {
            get: function () {
                return this._textJ_Name
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "textJ_RankName", {
            get: function () {
                return this._textJ_RankName
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "textJ_Comment", {
            get: function () {
                return this._textJ_Comment
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "textN_Rank", {
            get: function () {
                return this._textN_Rank
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "textN_Medal", {
            get: function () {
                return this._textN_Medal
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "textN_Score", {
            get: function () {
                return this._textN_Score
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "mode2_mask", {
            get: function () {
                return this._mode2_mask
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "btn_RankMy", {
            get: function () {
                return this._btn_RankMy
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "btn_RankTop", {
            get: function () {
                return this._btn_RankTop
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "btn_Rank500", {
            get: function () {
                return this._btn_Rank500
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "btn_ArrowPrev", {
            get: function () {
                return this._btn_ArrowPrev
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "btn_ArrowNext", {
            get: function () {
                return this._btn_ArrowNext
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function () {
            this._bg = new PIXI.Sprite(o.COMMON_MISC.getTexture(48)), this._bg.position.set(171, 103), this.addChild(this._bg), this._header = new PIXI.Sprite(r.RECORD_PARTS.getTexture(28)), this._header.anchor.set(1, 0), this._header.position.set(1200, 102), this.addChild(this._header), this._obj_ServerName = new a.WorldTextImage, this._obj_ServerName.visible = !0, this._obj_ServerName.load("large"), this._obj_ServerName.position.set(1143, 160), this._obj_ServerName.anchor.set(1, 0), this.addChild(this._obj_ServerName), this._obj_TIT_RANKING = new PIXI.Sprite(r.RECORD_PARTS.getTexture(29)), this._obj_TIT_RANKING.visible = !0, this._obj_TIT_RANKING.position.set(186, 111), this.addChild(this._obj_TIT_RANKING), this._obj_board = new PIXI.Sprite(r.RECORD_PARTS.getTexture(26)), this._obj_board.visible = !0, this._obj_board.position.set(205, 198), this.addChild(this._obj_board), this._textJ_Title1 = new s.TextBox(17, 16777215), this._textJ_Title1.visible = !0, this._textJ_Title1.position.set(610, 112), this._textJ_Title1.text = "\u51fa\u6483\u30fb\u4efb\u52d9\u306e\u63d0\u7763\u30e9\u30f3\u30ad\u30f3\u30b0\u3067\u3059", this.addChild(this._textJ_Title1), this._textJ_Title2 = new s.TextBox(17, 2334367), this._textJ_Title2.visible = !0, this._textJ_Title2.position.set(875, 112), this._textJ_Title2.text = "(\u79f0\u53f7\u3068\u3068\u3082\u306b\u4e00\u65e5\u4e8c\u56de\u66f4\u65b0\u3055\u308c\u307e\u3059)", this.addChild(this._textJ_Title2), this._btn_RankMy = new l, this._btn_RankMy.visible = !0, this._btn_RankMy.initialize(10, 7), this._btn_RankMy.position.set(192, 159), this.addChild(this._btn_RankMy), this._btn_RankTop = new l, this._btn_RankTop.visible = !0, this._btn_RankTop.initialize(9, 8), this._btn_RankTop.position.set(336, 159), this.addChild(this._btn_RankTop), this._btn_Rank500 = new l, this._btn_Rank500.visible = !0, this._btn_Rank500.initialize(6, 5), this._btn_Rank500.position.set(480, 159), this.addChild(this._btn_Rank500), this._btn_ArrowPrev = new l, this._btn_ArrowPrev.visible = !0, this._btn_ArrowPrev.initialize(12, 12), this._btn_ArrowPrev.position.set(547, 682), this.addChild(this._btn_ArrowPrev), this._btn_ArrowNext = new l, this._btn_ArrowNext.visible = !0, this._btn_ArrowNext.initialize(11, 11), this._btn_ArrowNext.position.set(738, 682), this.addChild(this._btn_ArrowNext);
            for (var t = 0; t < 10; t++) this._obj_line[t] = new PIXI.Sprite(r.RECORD_PARTS.getTexture(25)), this._obj_line[t].visible = !0, this._obj_line[t].position.set(205, 268 + 45 * t), this._obj_line[t].width = 942, this.addChild(this._obj_line[t]), this._obj_balloon[t] = new PIXI.Sprite(r.RECORD_PARTS.getTexture(24)), this._obj_balloon[t].visible = !0, this._obj_balloon[t].position.set(714, 231 + 45 * t), this.addChild(this._obj_balloon[t]), this._obj_medal[t] = new PIXI.Sprite(r.RECORD_PARTS.getTexture(19)), this._obj_medal[t].visible = !0, this._obj_medal[t].position.set(-150, 231 + 45 * t), this._obj_medal[t].scale.set(0, 0), this.addChild(this._obj_medal[t]), this._textJ_Name[t] = new s.TextBox(19, 2334367), this._textJ_Name[t].visible = !0, this._textJ_Name[t].position.set(346, 237 + 45 * t), this._textJ_Name[t].text = "", this.addChild(this._textJ_Name[t]), this._mode2_mask[t] = new PIXI.Sprite(r.RECORD_PARTS.getTexture(23)), this._mode2_mask[t].visible = !0, this._mode2_mask[t].position.set(561, 231 + 45 * t), this._mode2_mask[t].height = 34, this.addChild(this._mode2_mask[t]), this._obj_flag[t] = new PIXI.Sprite, this._obj_flag[t].visible = !0, this._obj_flag[t].position.set(573, 237 + 45 * t), this.addChild(this._obj_flag[t]), this._textJ_RankName[t] = new s.TextBox(19, 16777215), this._textJ_RankName[t].visible = !0, this._textJ_RankName[t].position.set(618, 237 + 45 * t), this._textJ_RankName[t].text = "", this.addChild(this._textJ_RankName[t]), this._textJ_Comment[t] = new s.TextBox(18, 4473924), this._textJ_Comment[t].visible = !0, this._textJ_Comment[t].position.set(732, 238 + 45 * t), this._textJ_Comment[t].text = "", this.addChild(this._textJ_Comment[t]), this._textN_Rank[t] = new s.TextBox(26, 16777215), this._textN_Rank[t].visible = !0, this._textN_Rank[t].position.set(336, 232 + 45 * t), this._textN_Rank[t].anchor.set(1, 0), this._textN_Rank[t].text = "", this.addChild(this._textN_Rank[t]), this._textN_Medal[t] = new s.TextBox(17, 16777215), this._textN_Medal[t].visible = !0, this._textN_Medal[t].position.set(1074, 270 + 45 * t), this._textN_Medal[t].anchor.set(1, 1), this._textN_Medal[t].text = "", this._textN_Medal[t].style.stroke = 0, this._textN_Medal[t].style.strokeThickness = 3, this.addChild(this._textN_Medal[t]), this._textN_Score[t] = new s.TextBox(17, 16777215), this._textN_Score[t].visible = !0, this._textN_Score[t].position.set(1147, 238 + 45 * t), this._textN_Score[t].anchor.set(1, 0), this._textN_Score[t].text = "", this.addChild(this._textN_Score[t])
        }, e.prototype.dispose = function () {
            this.removeChildren(), this._btn_ArrowNext.dispose(), this._btn_ArrowPrev.dispose(), this._btn_Rank500.dispose(), this._btn_RankTop.dispose(), this._btn_RankMy.dispose()
        }, e.prototype._alignMid = function (t, e, i) {
            t.position.set(Math.floor(e - t.width / 2), Math.floor(i - t.height / 2))
        }, e
    }(PIXI.Container);
    e.ViewRanking = u;
    var l = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._onMouseOver = function () {
                e._setTexture(e._texture_no_on)
            }, e._onMouseOut = function () {
                e._setTexture(e._texture_no)
            }, e
        }

        return n(e, t), e.prototype.initialize = function (t, e) {
            this._texture_no = t, this._texture_no_on = e, this._setTexture(this._texture_no), null != this._texture_no_on && (this.interactive = this.buttonMode = !0, this.on(_.EventType.MOUSEOVER, this._onMouseOver), this.on(_.EventType.MOUSEOUT, this._onMouseOut))
        }, e.prototype.dispose = function () {
            this.interactive = this.buttonMode = !1, this.off(_.EventType.MOUSEOVER, this._onMouseOver), this.off(_.EventType.MOUSEOUT, this._onMouseOut)
        }, e.prototype._setTexture = function (t) {
            this.texture = r.RECORD_PARTS.getTexture(t)
        }, e
    }(PIXI.Sprite)
}