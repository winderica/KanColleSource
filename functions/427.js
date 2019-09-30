const function427 = function (t, e, i) {
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
        r = i(4),
        s = i(135),
        a = i(425),
        _ = i(428),
        l = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._fuki1_serif = new Array(8), e._fuki2_serif = new Array(2), e._fuki3_serif = new Array(5), e._fuki4_serif = new Array(2), e._fuki1_bg = new PIXI.Sprite(a.REVAMP_REVAMP.getTexture(16)), e._fuki1_bg.position.set(-33, 4), e.addChild(e._fuki1_bg);
                for (var i = 0; i < 8; i++) e._fuki1_serif[i] = new r.TextBox(19, 98690), e._fuki1_serif[i].scale.set(.95, 1), e.addChild(e._fuki1_serif[i]);
                e._fuki1_mask0 = new PIXI.Graphics, e._fuki1_mask0.beginFill(0), e._fuki1_mask0.drawRect(0, 0, 320, 25), e._fuki1_mask0.endFill(), e._fuki1_serif[0].addChild(e._fuki1_mask0), e._fuki1_serif[0].mask = e._fuki1_mask0, e._fuki1_mask1 = new PIXI.Graphics, e._fuki1_mask1.beginFill(0), e._fuki1_mask1.drawRect(3, 0, 320, 25), e._fuki1_mask1.endFill(), e._fuki1_serif[1].addChild(e._fuki1_mask1), e._fuki1_serif[1].mask = e._fuki1_mask1, e._fuki1_slot_mask = new PIXI.Sprite(a.REVAMP_REVAMP.getTexture(20)), e._fuki1_slot_mask.position.set(0, 0), e.addChild(e._fuki1_slot_mask), e._fuki2_bg = new PIXI.Sprite(a.REVAMP_REVAMP.getTexture(17)), e._fuki2_bg.position.set(7, 294), e.addChild(e._fuki2_bg);
                for (var i = 0; i < 2; i++) e._fuki2_serif[i] = new r.TextBox(21, 4999235), e._fuki2_serif[i].text = "", e._fuki2_serif[i].anchor.set(1, 0), e._fuki2_serif[i].position.set(253, 314 + 34 * i), e.addChild(e._fuki2_serif[i]);
                e._fuki3_bg = new PIXI.Sprite(a.REVAMP_REVAMP.getTexture(19)), e._fuki3_bg.position.set(-33, 189), e.addChild(e._fuki3_bg);
                for (var i = 0; i < 6; i++) e._fuki3_serif[i] = new r.TextBox(19, 98690), e._fuki3_serif[i].scale.set(.95, 1), e.addChild(e._fuki3_serif[i]);
                return e._fuki4_bg = new PIXI.Sprite(a.REVAMP_REVAMP.getTexture(18)), e._fuki4_bg.position.set(-453, -30), e.addChild(e._fuki4_bg), e._fuki4_icon_type = new PIXI.Sprite(a.REVAMP_REVAMP.getTexture(14)), e._fuki4_icon_type.anchor.set(.5, .5), e._fuki4_icon_type.position.set(-417, 26), e.addChild(e._fuki4_icon_type), e._fuki4_serif[0] = new r.TextBox(22, 4999235), e._fuki4_serif[0].position.set(-426, -22), e.addChild(e._fuki4_serif[0]), e._fuki4_mask = new PIXI.Graphics, e._fuki4_mask.beginFill(16777215), e._fuki4_mask.drawRect(-400, 12, 270, 39), e.addChild(e._fuki4_mask), e._fuki4_serif[1] = new r.TextBox(22, 98690), e._fuki4_serif[1].position.set(-394, 12), e._fuki4_serif[1].mask = e._fuki4_mask, e.addChild(e._fuki4_serif[1]), e._fuki4_slot_mask = new PIXI.Sprite(a.REVAMP_REVAMP.getTexture(15)), e._fuki4_slot_mask.position.set(-261, 4), e.addChild(e._fuki4_slot_mask), e._fuki4_star = new PIXI.Sprite(a.REVAMP_REVAMP.getTexture(22)), e._fuki4_star.position.set(-429, 48), e.addChild(e._fuki4_star), e._fuki4_plus = new PIXI.Sprite(a.REVAMP_REVAMP.getTexture(21)), e._fuki4_plus.position.set(-411, 52), e.addChild(e._fuki4_plus), e._fuki4_starnum = new r.TextBox(22, 98690), e._fuki4_starnum.position.set(-397, 46), e._fuki4_starnum.text = "", e.addChild(e._fuki4_starnum), e._fuki4_starM = new PIXI.Sprite(a.REVAMP_REVAMP.getTexture(23)), e._fuki4_starM.position.set(-426, 45), e.addChild(e._fuki4_starM), e._revampLevelParticleLayer = new _.RevampLevelParticleLayer, e._revampLevelParticleLayer.position.set(-447, 27), e.addChild(e._revampLevelParticleLayer), e._setBalloon1(9), e._setBalloon2(1), e._setBalloon3(0, 0), e._setBalloon4(0), e
            }
            return n(e, t), e.prototype._setBalloon4 = function (t) {
                0 == t ? (this._fuki4_bg.visible = !1, this._fuki4_serif[0].visible = !1, this._fuki4_serif[1].visible = !1, this._fuki4_icon_type.visible = !1, this._fuki4_slot_mask.visible = !1, this._fuki4_star.visible = !1, this._fuki4_plus.visible = !1, this._fuki4_starnum.visible = !1, this._fuki4_starM.visible = !1, this.SetResultBalloonKira(!1)) : (this._fuki4_bg.visible = !0, this._fuki4_serif[0].visible = !0, this._fuki4_serif[1].visible = !0, this._fuki4_icon_type.visible = !0, this._fuki4_slot_mask.visible = !0, this._fuki4_star.visible = !0, this._fuki4_plus.visible = !0, this._fuki4_starnum.visible = !0, this._fuki4_starM.visible = !0), 1 == t && (this._fuki4_serif[0].text = "", this._fuki4_serif[1].text = "", this._fuki4_starnum.text = "")
            }, e.prototype._setBalloon3 = function (t, e) {
                if (0 == t) {
                    this._fuki3_bg.visible = !1;
                    for (var i = 0; i < 6; i++) this._fuki3_serif[i].visible = !1
                } else {
                    this._fuki3_bg.visible = !0;
                    for (var i = 0; i < 6; i++) this._fuki3_serif[i].visible = !0
                }
                if (0 == e) {
                    for (var i = 3; i < 6; i++) this._fuki3_serif[i].visible = !1;
                    this._fuki3_serif[0].position.set(20, 215)
                } else {
                    for (var i = 3; i < 6; i++) this._fuki3_serif[i].visible = !0;
                    this._fuki3_serif[0].position.set(20, 193)
                }
                1 == t ? (this._fuki3_serif[0].style.fontSize = 19, this._fuki3_serif[0].style.fill = 98690, this._fuki3_serif[0].text = "", this._fuki3_serif[1].style.fontSize = 19, this._fuki3_serif[1].style.fill = 4999235, this._fuki3_serif[1].text = "\u304c\u5fc5\u8981\u3067\u3059\u3002", this._fuki3_serif[1].position.set(this._fuki3_serif[0].position.x + this._fuki3_serif[0].width, this._fuki3_serif[0].position.y), this._fuki3_serif[2].style.fontSize = 18, this._fuki3_serif[2].style.fill = 4999235, this._fuki3_serif[2].text = "") : 2 == t && (this._fuki3_serif[0].style.fontSize = 19, this._fuki3_serif[0].style.fill = 15859712, this._fuki3_serif[0].text = "", this._fuki3_serif[1].style.fontSize = 19, this._fuki3_serif[1].style.fill = 15859712, this._fuki3_serif[1].text = "\u304c\u5fc5\u8981\u3067\u3059\u3002", this._fuki3_serif[1].position.set(this._fuki3_serif[0].position.x + this._fuki3_serif[0].width, this._fuki3_serif[0].position.y), this._fuki3_serif[2].style.fontSize = 18, this._fuki3_serif[2].style.fill = 4999235, this._fuki3_serif[2].text = ""), 1 == e ? (this._fuki3_serif[3].style.fontSize = 19, this._fuki3_serif[3].style.fill = 98690, this._fuki3_serif[3].text = "", this._fuki3_serif[4].style.fontSize = 19, this._fuki3_serif[4].style.fill = 4999235, this._fuki3_serif[4].text = "\u304c\u5fc5\u8981\u3067\u3059\u3002", this._fuki3_serif[4].position.set(this._fuki3_serif[3].position.x + this._fuki3_serif[3].width, this._fuki3_serif[3].position.y), this._fuki3_serif[5].style.fontSize = 18, this._fuki3_serif[5].style.fill = 4999235, this._fuki3_serif[5].text = "") : 2 == e && (this._fuki3_serif[3].style.fontSize = 19, this._fuki3_serif[3].style.fill = 15859712, this._fuki3_serif[3].text = "", this._fuki3_serif[4].style.fontSize = 19, this._fuki3_serif[4].style.fill = 15859712, this._fuki3_serif[4].text = "\u304c\u5fc5\u8981\u3067\u3059\u3002", this._fuki3_serif[4].position.set(this._fuki3_serif[3].position.x + this._fuki3_serif[3].width, this._fuki3_serif[3].position.y), this._fuki3_serif[5].style.fontSize = 18, this._fuki3_serif[5].style.fill = 4999235, this._fuki3_serif[5].text = "")
            }, e.prototype._setBalloon2 = function (t) {
                0 == t ? (this._fuki2_serif[0].visible = !1, this._fuki2_serif[1].visible = !1, this._fuki2_bg.visible = !1) : (this._fuki2_serif[0].visible = !0, this._fuki2_serif[1].visible = !0, this._fuki2_bg.visible = !0), this._fuki2_serif[0].text = o.default.model.useItem.getMaterialCounts().devKit + "", this._fuki2_serif[1].text = o.default.model.useItem.getMaterialCounts().revKit + ""
            }, e.prototype._setBalloon1 = function (t) {
                if (0 == t) {
                    for (var e = 0; e < 8; e++) this._fuki1_serif[e].visible = !1;
                    this._fuki1_bg.visible = !1, this._fuki1_slot_mask.visible = !1
                } else {
                    for (var e = 0; e < 8; e++) this._fuki1_serif[e].visible = !0;
                    this._fuki1_bg.visible = !0, this._fuki1_slot_mask.visible = !0
                }
                9 == t ? (this._fuki1_serif[0].style.fontSize = 22, this._fuki1_serif[0].style.fill = 4999235, this._fuki1_serif[0].text = "\u63d0\u7763\u3001\u660e\u77f3\u306e\u5de5\u5ee0\u3078\u3088\u3046\u3053\u305d\uff01", this._fuki1_serif[0].position.set(21, 67), this._fuki1_serif[1].style.fontSize = 22, this._fuki1_serif[1].style.fill = 4999235, this._fuki1_serif[1].text = "\u3069\u306e\u88c5\u5099\u306e\u6539\u4fee\u3092\u8a66\u307f\u307e\u3059\u304b\uff1f", this._fuki1_serif[1].position.set(21, 93), this._fuki1_serif[2].style.fontSize = 19, this._fuki1_serif[2].style.fill = 4999235, this._fuki1_serif[2].text = "", this._fuki1_serif[2].position.set(21, 82), this._fuki1_serif[3].style.fontSize = 19, this._fuki1_serif[3].style.fill = 98690, this._fuki1_serif[3].text = "", this._fuki1_serif[3].position.set(21, 103), this._fuki1_serif[4].style.fontSize = 19, this._fuki1_serif[4].style.fill = 4999235, this._fuki1_serif[4].text = "", this._fuki1_serif[4].position.set(21, 124), this._fuki1_serif[5].style.fontSize = 15, this._fuki1_serif[5].style.fill = 4999235, this._fuki1_serif[5].text = "", this._fuki1_serif[5].position.set(132, 144), this._fuki1_serif[6].style.fontSize = 15, this._fuki1_serif[6].style.fill = 4999235, this._fuki1_serif[6].text = "", this._fuki1_serif[6].position.set(21, 153), this._fuki1_serif[7].style.fontSize = 15, this._fuki1_serif[7].style.fill = 98690, this._fuki1_serif[7].text = "", this._fuki1_serif[7].position.set(174, 153), this._fuki1_slot_mask.visible = !1) : 1 == t ? (this._fuki1_serif[0].style.fontSize = 22, this._fuki1_serif[0].style.fill = 98690, this._fuki1_serif[0].text = "", this._fuki1_serif[0].position.set(21, 64), this._fuki1_serif[1].style.fontSize = 21, this._fuki1_serif[1].style.fill = 4999235, this._fuki1_serif[1].text = "\u3092\u3001\u6539\u4fee\u3057\u307e\u3059\u306d\uff01", this._fuki1_serif[1].position.set(21, 90), this._fuki1_serif[2].style.fontSize = 19, this._fuki1_serif[2].style.fill = 4999235, this._fuki1_serif[2].text = "", this._fuki1_serif[2].position.set(21, 82), this._fuki1_serif[3].style.fontSize = 19, this._fuki1_serif[3].style.fill = 98690, this._fuki1_serif[3].text = "", this._fuki1_serif[3].position.set(21, 103), this._fuki1_serif[4].style.fontSize = 19, this._fuki1_serif[4].style.fill = 4999235, this._fuki1_serif[4].text = "", this._fuki1_serif[4].position.set(21, 124), this._fuki1_serif[5].style.fontSize = 15, this._fuki1_serif[5].style.fill = 4999235, this._fuki1_serif[5].text = "", this._fuki1_serif[5].position.set(132, 129), this._fuki1_serif[6].style.fontSize = 15, this._fuki1_serif[6].style.fill = 4999235, this._fuki1_serif[6].text = "", this._fuki1_serif[6].position.set(21, 153), this._fuki1_serif[7].style.fontSize = 15, this._fuki1_serif[7].style.fill = 98690, this._fuki1_serif[7].text = "", this._fuki1_serif[7].position.set(174, 153), this._fuki1_slot_mask.visible = !0, this._fuki1_slot_mask.position.set(231, 50)) : 2 == t ? (this._fuki1_serif[0].style.fontSize = 19, this._fuki1_serif[0].style.fill = 98690, this._fuki1_serif[0].text = "", this._fuki1_serif[0].position.set(21, 19), this._fuki1_serif[1].style.fontSize = 19, this._fuki1_serif[1].style.fill = 4999235, this._fuki1_serif[1].text = "\u3092\u3001\u6539\u4fee\u3057\u307e\u3059\u306d\uff01", this._fuki1_serif[1].position.set(21, 42), this._fuki1_serif[2].style.fontSize = 19, this._fuki1_serif[2].style.fill = 4999235, this._fuki1_serif[2].text = "\u3053\u306e\u6539\u4fee\u306b\u306f\u3001\u7121\u6539\u4fee\u306e", this._fuki1_serif[2].position.set(21, 82), this._fuki1_serif[3].style.fontSize = 19, this._fuki1_serif[3].style.fill = 98690, this._fuki1_serif[3].text = "", this._fuki1_serif[3].position.set(21, 103), this._fuki1_serif[4].style.fontSize = 19, this._fuki1_serif[4].style.fill = 4999235, this._fuki1_serif[4].text = "\u304c\u5fc5\u8981\u3067\u3059\u3002", this._fuki1_serif[4].position.set(21, 124), this._fuki1_serif[5].style.fontSize = 15, this._fuki1_serif[5].style.fill = 4999235, this._fuki1_serif[5].text = "\uff08\u203b\u6539\u4fee\u3067\u6d88\u8cbb\u3057\u307e\u3059\uff09", this._fuki1_serif[5].position.set(132, 129), this._fuki1_serif[6].style.fontSize = 15, this._fuki1_serif[6].style.fill = 4999235, this._fuki1_serif[6].text = "\u540c\u6539\u4fee\u6d88\u8cbb\u53ef\u80fd\u88c5\u5099\u6570", this._fuki1_serif[6].position.set(21, 153), this._fuki1_serif[7].style.fontSize = 15, this._fuki1_serif[7].style.fill = 98690, this._fuki1_serif[7].text = "\xd7", this._fuki1_serif[7].position.set(162, 153), this._fuki1_slot_mask.visible = !0, this._fuki1_slot_mask.position.set(231, 7)) : 3 == t ? (this._fuki1_serif[0].style.fontSize = 19, this._fuki1_serif[0].style.fill = 98690, this._fuki1_serif[0].text = "", this._fuki1_serif[0].position.set(21, 19), this._fuki1_serif[1].style.fontSize = 19, this._fuki1_serif[1].style.fill = 4999235, this._fuki1_serif[1].text = "\u3092\u3001\u6539\u4fee\u3057\u307e\u3059\u306d\uff01", this._fuki1_serif[1].position.set(21, 42), this._fuki1_serif[2].style.fontSize = 19, this._fuki1_serif[2].style.fill = 16711680, this._fuki1_serif[2].text = "\u3053\u306e\u6539\u4fee\u306b\u5fc5\u8981\u3068\u306a\u308b", this._fuki1_serif[2].position.set(21, 82), this._fuki1_serif[3].style.fontSize = 19, this._fuki1_serif[3].style.fill = 16711680, this._fuki1_serif[3].text = "(\u7121\u6539\u4fee)", this._fuki1_serif[3].position.set(21, 103), this._fuki1_serif[4].style.fontSize = 19, this._fuki1_serif[4].style.fill = 98690, this._fuki1_serif[4].text = "", this._fuki1_serif[4].position.set(21, 124), this._fuki1_serif[5].style.fontSize = 19, this._fuki1_serif[5].style.fill = 16711680, this._fuki1_serif[5].text = "\u304c\u8db3\u308a\u307e\u305b\u3093\u3002", this._fuki1_serif[5].position.set(21, 145), this._fuki1_serif[6].style.fontSize = 15, this._fuki1_serif[6].style.fill = 4999235, this._fuki1_serif[6].text = "", this._fuki1_serif[6].position.set(21, 153), this._fuki1_serif[7].style.fontSize = 15, this._fuki1_serif[7].style.fill = 98690, this._fuki1_serif[7].text = "", this._fuki1_serif[7].position.set(168, 153), this._fuki1_slot_mask.visible = !0, this._fuki1_slot_mask.position.set(231, 7)) : 4 == t && (this._fuki1_serif[0].style.fontSize = 19, this._fuki1_serif[0].style.fill = 16711680, this._fuki1_serif[0].text = "\u73fe\u5728\u9078\u629e\u3055\u308c\u305f\u88c5\u5099", this._fuki1_serif[0].position.set(21, 39), this._fuki1_serif[1].style.fontSize = 19, this._fuki1_serif[1].style.fill = 98690, this._fuki1_serif[1].text = "", this._fuki1_serif[1].position.set(21, 61), this._fuki1_serif[2].style.fontSize = 19, this._fuki1_serif[2].style.fill = 16711680, this._fuki1_serif[2].text = "\u306f\u3001\u3053\u308c\u4ee5\u4e0a\u306e\u6539\u4fee\u304c\u3067\u304d\u307e\u305b\u3093\u3002", this._fuki1_serif[2].position.set(21, 82), this._fuki1_serif[3].style.fontSize = 19, this._fuki1_serif[3].style.fill = 16711680, this._fuki1_serif[3].text = "", this._fuki1_serif[3].position.set(21, 103), this._fuki1_serif[4].style.fontSize = 19, this._fuki1_serif[4].style.fill = 98690, this._fuki1_serif[4].text = "", this._fuki1_serif[4].position.set(21, 124), this._fuki1_serif[5].style.fontSize = 19, this._fuki1_serif[5].style.fill = 16711680, this._fuki1_serif[5].text = "", this._fuki1_serif[5].position.set(21, 145), this._fuki1_serif[6].style.fontSize = 15, this._fuki1_serif[6].style.fill = 4999235, this._fuki1_serif[6].text = "", this._fuki1_serif[6].position.set(21, 153), this._fuki1_serif[7].style.fontSize = 15, this._fuki1_serif[7].style.fill = 98690, this._fuki1_serif[7].text = "", this._fuki1_serif[7].position.set(168, 153), this._fuki1_slot_mask.visible = !0, this._fuki1_slot_mask.position.set(231, 40))
            }, e.prototype.ResetBaloon = function () {
                this._setBalloon1(9), this._setBalloon3(0, 0), this._setBalloon4(0)
            }, e.prototype._setstars = function (t) {
                0 == t ? (this._fuki4_star.visible = !1, this._fuki4_plus.visible = !1, this._fuki4_starnum.visible = !1, this._fuki4_starM.visible = !1, this._fuki4_starnum.text = "") : t < 10 ? (this._fuki4_star.visible = !0, this._fuki4_plus.visible = !0, this._fuki4_starnum.visible = !0, this._fuki4_starM.visible = !1, this._fuki4_starnum.text = t + "") : (this._fuki4_star.visible = !1, this._fuki4_plus.visible = !1, this._fuki4_starnum.visible = !1, this._fuki4_starM.visible = !0, this._fuki4_starnum.text = "")
            }, e.prototype.SetResultBalloon = function (t, e, i) {
                if (t) {
                    this._fuki4_serif[0].text = "\u6539\u4fee\u306b\u6210\u529f\u3057\u307e\u3057\u305f\uff01";
                    var n = o.default.model.slot.getMst(e).iconType;
                    switch (this._fuki4_icon_type.texture = s.COMMON_ICON_WEAPON.getTextureFromMstID(n), n) {
                        case 4:
                            this._fuki4_icon_type.position.y = 23;
                            break;
                        case 5:
                        case 13:
                            this._fuki4_icon_type.position.y = 25;
                            break;
                        case 15:
                            this._fuki4_icon_type.position.y = 23;
                            break;
                        case 16:
                            this._fuki4_icon_type.position.y = 25;
                            break;
                        case 23:
                            this._fuki4_icon_type.position.y = 24;
                            break;
                        case 24:
                        case 34:
                            this._fuki4_icon_type.position.y = 27;
                            break;
                        case 36:
                        case 42:
                            this._fuki4_icon_type.position.y = 24;
                            break;
                        case 43:
                            this._fuki4_icon_type.position.y = 25;
                            break;
                        default:
                            this._fuki4_icon_type.position.y = 26
                    }
                    this._fuki4_serif[1].text = o.default.model.slot.getMst(e).name, this._fuki4_serif[1].visible = !0, this._fuki4_icon_type.visible = !0, this._fuki4_slot_mask.visible = !0, this._setstars(i)
                } else this._fuki4_serif[0].text = "\u6539\u4fee\u306b\u5931\u6557\u3057\u307e\u3057\u305f...\u3002", this._fuki4_serif[1].visible = !1, this._fuki4_icon_type.visible = !1, this._fuki4_slot_mask.visible = !1, this._fuki4_star.visible = !1, this._fuki4_plus.visible = !1, this._fuki4_starnum.visible = !1, this._fuki4_starM.visible = !1
            }, e.prototype.SetResultBalloonKira = function (t) {
                this._revampLevelParticleLayer.visible = t, t ? this._revampLevelParticleLayer.initialize() : this._revampLevelParticleLayer.dispose()
            }, e.prototype.SetBalloon = function (t, e, i) {
                0 == t.req_buildkit && 0 == t.req_remodelkit ? (this._setBalloon1(4), this._fuki1_serif[1].text = o.default.model.slot.getMst(t.slot_id).name) : 0 == t.req_slot_num ? (this._setBalloon1(1), this._fuki1_serif[0].text = o.default.model.slot.getMst(t.slot_id).name) : 0 != t.req_slot_num && (e >= t.req_slot_num ? 1 == t.change_flag && i ? (this._setBalloon1(3), this._fuki1_serif[2].style.fontSize = 19, this._fuki1_serif[2].style.fill = 16711680, this._fuki1_serif[2].text = "\u3053\u306e\u88c5\u5099\u3092\u6539\u4fee\u3059\u308b\u306b\u306f", this._fuki1_serif[2].position.set(21, 82), this._fuki1_serif[3].style.fontSize = 19, this._fuki1_serif[3].style.fill = 16711680, this._fuki1_serif[3].text = "\u540c\u88c5\u5099\u306e\u30ed\u30c3\u30af\u89e3\u9664\u304c\u5fc5\u8981\u3067\u3059\u3002", this._fuki1_serif[3].position.set(21, 103), this._fuki1_serif[4].style.fontSize = 19, this._fuki1_serif[4].style.fill = 98690, this._fuki1_serif[4].text = "", this._fuki1_serif[4].position.set(21, 124), this._fuki1_serif[5].style.fontSize = 19, this._fuki1_serif[5].style.fill = 16711680, this._fuki1_serif[5].text = "", this._fuki1_serif[5].position.set(21, 145)) : (this._setBalloon1(2), this._fuki1_serif[3].text = o.default.model.slot.getMst(t.req_slot_id).name + "\xd7" + t.req_slot_num, this._fuki1_serif[7].text = "\xd7" + e) : (this._setBalloon1(3), this._fuki1_serif[4].text = o.default.model.slot.getMst(t.req_slot_id).name + "\xd7" + t.req_slot_num), this._fuki1_serif[0].text = o.default.model.slot.getMst(t.slot_id).name);
                var n = 0;
                t.req_useitem_num2 > 0 && (n = 1);
                var r = 0,
                    s = 0;
                t.req_useitem_num > 0 && (t.req_useitem_num <= o.default.model.useItem.getCount(t.req_useitem_id) ? 71 == t.req_useitem_id ? (this._setBalloon3(0, n), this._setBalloon1(2), this._fuki1_serif[0].text = o.default.model.slot.getMst(t.slot_id).name, this._fuki1_serif[2].style.fontSize = 19, this._fuki1_serif[2].style.fill = 4999235, this._fuki1_serif[2].text = "\u3053\u306e\u6539\u4fee\u306b\u306f\u3001", this._fuki1_serif[2].position.set(21, 82), this._fuki1_serif[3].style.fontSize = 19, this._fuki1_serif[3].style.fill = 6201187, this._fuki1_serif[3].text = o.default.model.useItem.get(t.req_useitem_id).name + (t.req_useitem_num < 2 ? "" : "\xd7" + t.req_useitem_num), this._fuki1_serif[3].position.set(21, 103), this._fuki1_serif[4].style.fontSize = 19, this._fuki1_serif[4].style.fill = 4999235, this._fuki1_serif[4].text = "\u304c\u5fc5\u8981\u3067\u3059\u3002", this._fuki1_serif[4].position.set(21, 124), this._fuki1_serif[5].style.fontSize = 15, this._fuki1_serif[5].style.fill = 4999235, this._fuki1_serif[5].text = "\uff08\u203b\u6539\u4fee\u3067\u6d88\u8cbb\u3057\u307e\u3059\uff09", this._fuki1_serif[5].position.set(132, 129), this._fuki1_serif[6].style.fontSize = 15, this._fuki1_serif[6].style.fill = 4999235, this._fuki1_serif[6].text = "", this._fuki1_serif[6].position.set(21, 153), this._fuki1_serif[7].style.fontSize = 15, this._fuki1_serif[7].style.fill = 98690, this._fuki1_serif[7].text = "", this._fuki1_serif[7].position.set(162, 153)) : r = 1 : 71 == t.req_useitem_id ? (this._setBalloon3(0, n), this._setBalloon1(3), this._fuki1_serif[0].text = o.default.model.slot.getMst(t.slot_id).name, this._fuki1_serif[3].style.fontSize = 19, this._fuki1_serif[3].style.fill = 6201187, this._fuki1_serif[3].text = o.default.model.useItem.get(t.req_useitem_id).name + (t.req_useitem_num < 2 ? "" : "\xd7" + t.req_useitem_num), this._fuki1_serif[3].position.set(21, 103), this._fuki1_serif[4].style.fontSize = 19, this._fuki1_serif[4].style.fill = 16711680, this._fuki1_serif[4].text = "\u304c\u8db3\u308a\u307e\u305b\u3093\u3002", this._fuki1_serif[4].position.set(21, 124), this._fuki1_serif[5].style.fontSize = 19, this._fuki1_serif[5].style.fill = 16711680, this._fuki1_serif[5].text = "", this._fuki1_serif[5].position.set(21, 145), this._fuki1_serif[6].style.fontSize = 15, this._fuki1_serif[6].style.fill = 4999235, this._fuki1_serif[6].text = "", this._fuki1_serif[6].position.set(21, 153), this._fuki1_serif[7].style.fontSize = 15, this._fuki1_serif[7].style.fill = 98690, this._fuki1_serif[7].text = "", this._fuki1_serif[7].position.set(168, 153)) : r = 2), t.req_useitem_num2 > 0 && (t.req_useitem_num2 <= o.default.model.useItem.getCount(t.req_useitem_id2) ? 71 == t.req_useitem_id2 ? (this._setBalloon3(0, n), this._setBalloon1(2), this._fuki1_serif[0].text = o.default.model.slot.getMst(t.slot_id).name, this._fuki1_serif[2].style.fontSize = 19, this._fuki1_serif[2].style.fill = 4999235, this._fuki1_serif[2].text = "\u3053\u306e\u6539\u4fee\u306b\u306f\u3001", this._fuki1_serif[2].position.set(21, 82), this._fuki1_serif[3].style.fontSize = 19, this._fuki1_serif[3].style.fill = 6201187, this._fuki1_serif[3].text = o.default.model.useItem.get(t.req_useitem_id).name + (t.req_useitem_num < 2 ? "" : "\xd7" + t.req_useitem_num), this._fuki1_serif[3].position.set(21, 103), this._fuki1_serif[4].style.fontSize = 19, this._fuki1_serif[4].style.fill = 4999235, this._fuki1_serif[4].text = "\u304c\u5fc5\u8981\u3067\u3059\u3002", this._fuki1_serif[4].position.set(21, 124), this._fuki1_serif[5].style.fontSize = 15, this._fuki1_serif[5].style.fill = 4999235, this._fuki1_serif[5].text = "\uff08\u203b\u6539\u4fee\u3067\u6d88\u8cbb\u3057\u307e\u3059\uff09", this._fuki1_serif[5].position.set(132, 129), this._fuki1_serif[6].style.fontSize = 15, this._fuki1_serif[6].style.fill = 4999235, this._fuki1_serif[6].text = "", this._fuki1_serif[6].position.set(21, 153), this._fuki1_serif[7].style.fontSize = 15, this._fuki1_serif[7].style.fill = 98690, this._fuki1_serif[7].text = "", this._fuki1_serif[7].position.set(162, 153)) : s = 1 : 71 == t.req_useitem_id2 ? (this._setBalloon3(0, n), this._setBalloon1(3), this._fuki1_serif[0].text = o.default.model.slot.getMst(t.slot_id).name, this._fuki1_serif[3].style.fontSize = 19, this._fuki1_serif[3].style.fill = 6201187, this._fuki1_serif[3].text = o.default.model.useItem.get(t.req_useitem_id).name + (t.req_useitem_num < 2 ? "" : "\xd7" + t.req_useitem_num), this._fuki1_serif[3].position.set(21, 103), this._fuki1_serif[4].style.fontSize = 19, this._fuki1_serif[4].style.fill = 16711680, this._fuki1_serif[4].text = "\u304c\u8db3\u308a\u307e\u305b\u3093\u3002", this._fuki1_serif[4].position.set(21, 124), this._fuki1_serif[5].style.fontSize = 19, this._fuki1_serif[5].style.fill = 16711680, this._fuki1_serif[5].text = "", this._fuki1_serif[5].position.set(21, 145), this._fuki1_serif[6].style.fontSize = 15, this._fuki1_serif[6].style.fill = 4999235, this._fuki1_serif[6].text = "", this._fuki1_serif[6].position.set(21, 153), this._fuki1_serif[7].style.fontSize = 15, this._fuki1_serif[7].style.fill = 98690, this._fuki1_serif[7].text = "", this._fuki1_serif[7].position.set(168, 153)) : s = 2), this._setBalloon3(r, n * s), t.req_useitem_num > 0 && (0 == t.req_useitem_num2 ? (this._fuki3_serif[0].text = o.default.model.useItem.get(t.req_useitem_id).name + "\xd7" + t.req_useitem_num, this._fuki3_serif[1].position.set(this._fuki3_serif[0].position.x + this._fuki3_serif[0].width, this._fuki3_serif[0].position.y), this._fuki3_serif[2].text = "\uff08\u73fe\u5728\u4fdd\u6709\u6570\xd7" + o.default.model.useItem.getCount(t.req_useitem_id) + "\uff09", this._fuki3_serif[2].position.set(this._fuki3_serif[0].position.x, this._fuki3_serif[0].position.y + this._fuki3_serif[0].height), this._fuki3_serif[3].visible = !1, this._fuki3_serif[4].visible = !1, this._fuki3_serif[5].visible = !1) : (this._fuki3_serif[0].text = o.default.model.useItem.get(t.req_useitem_id).name + "\xd7" + t.req_useitem_num, this._fuki3_serif[1].position.set(this._fuki3_serif[0].position.x + this._fuki3_serif[0].width, this._fuki3_serif[0].position.y), this._fuki3_serif[2].text = "\uff08\u73fe\u5728\u4fdd\u6709\u6570\xd7" + o.default.model.useItem.getCount(t.req_useitem_id) + "\uff09", this._fuki3_serif[2].position.set(this._fuki3_serif[0].position.x, this._fuki3_serif[0].position.y + this._fuki3_serif[0].height), this._fuki3_serif[3].visible = !0, this._fuki3_serif[4].visible = !0, this._fuki3_serif[5].visible = !0, this._fuki3_serif[3].text = o.default.model.useItem.get(t.req_useitem_id2).name + "\xd7" + t.req_useitem_num2, this._fuki3_serif[3].position.set(this._fuki3_serif[0].position.x, this._fuki3_serif[2].position.y + this._fuki3_serif[2].height + 2), this._fuki3_serif[4].position.set(this._fuki3_serif[3].position.x + this._fuki3_serif[3].width, this._fuki3_serif[3].position.y), this._fuki3_serif[5].text = "\uff08\u73fe\u5728\u4fdd\u6709\u6570\xd7" + o.default.model.useItem.getCount(t.req_useitem_id2) + "\uff09", this._fuki3_serif[5].position.set(this._fuki3_serif[2].position.x, this._fuki3_serif[3].position.y + this._fuki3_serif[3].height)))
            }, e.prototype.initialize = function () {}, e.prototype.dispose = function () {
                this.removeChildren(), this._fuki1_serif.forEach(function (t) {
                    t.destroy()
                }), this._fuki1_serif = null, this._fuki2_serif.forEach(function (t) {
                    t.destroy()
                }), this._fuki2_serif = null, this._fuki3_serif.forEach(function (t) {
                    t.destroy()
                }), this._fuki3_serif = null, this._fuki4_serif.forEach(function (t) {
                    t.destroy()
                }), this._fuki4_serif = null, this._fuki4_starnum.destroy(), this._fuki4_starnum = null
            }, e
        }(PIXI.Container);
    e.RevampBalloon = l
}