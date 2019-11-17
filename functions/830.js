const function830 = function (t, e, i) {
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
        r = i(29),
        s = i(8),
        a = i(4),
        _ = i(33),
        l = i(3),
        u = i(3),
        c = i(138),
        h = i(1),
        p = i(137),
        d = i(13),
        f = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._onYES = function () {
                    null != e._cb_onYes && (c.SceneMemory.slotItemPage = 0, c.SceneMemory.slotItemFilter = 0, c.SceneMemory.listMode = p.SlotListMode.UNSET, e._cb_onYes())
                }, e._onNO = function () {
                    null != e._cb_onNo && e._cb_onNo()
                }, e.bg = new s.AreaBox(1), e.frameBg = new PIXI.Sprite(o.default.resources.getUIImage("sp_kaizo_frame")), e.titleTxt = new PIXI.Sprite(l.REMODEL_GRADEUP.getTexture(1)), e.message1 = new PIXI.Sprite, e.message2 = new PIXI.Sprite(l.REMODEL_GRADEUP.getTexture(23)), e.text1 = new a.TextBox(19, 1949120), e.text2 = new a.TextBox(19, 1949120), e.text1.text = "\u5927\u898f\u6a21\u6539\u88c5\u3059\u308b\u8266\u8247", e.text2.text = "\u4f7f\u7528\u3059\u308b\u8cc7\u6750", e.textName = new a.TextBox(19, 16777215), e.shipBanner = new _.ShipBanner, e.iconLayer = new PIXI.Container, e.icons = [], e.textItems = [];
                for (var i = 0, n = 0, r = 0; r < 7; r++) {
                    r % 2 == 0 && 0 != r && i++, n = r % 2 == 0 ? 0 : 1;
                    var u = new PIXI.Sprite;
                    u.position.set(617 + 132 * n, 380 + 48 * i), u.scale.set(.5), u.visible = !1, e.icons.push(u), e.iconLayer.addChild(u);
                    var d = new a.TextBox(19, 16777215);
                    d.position.set(657 + 132 * n, 389 + 47 * i), d.visible = !1, e.textItems.push(d), e.iconLayer.addChild(d)
                }
                return e.btn_yes = new PIXI.Sprite(l.REMODEL_GRADEUP.getTexture(9)), e.btn_no = new PIXI.Sprite(l.REMODEL_GRADEUP.getTexture(4)), e.btn_yes.on(h.EventType.CLICK, e._onYES), e.btn_no.on(h.EventType.CLICK, e._onNO), e.btn_yes.interactive = e.btn_yes.buttonMode = !0, e.btn_no.interactive = e.btn_no.buttonMode = !0, e.frameBg.position.set(40, 59), e.titleTxt.position.set(446, 19), e.text1.position.set(120, 255), e.text2.position.set(120, 377), e.message1.position.set(383, 85), e.message2.position.set(375, 130), e.textName.position.set(616, 255), e.shipBanner.position.set(616, 283), e.btn_yes.position.set(642, 587), e.btn_no.position.set(378, 587), e.addChild(e.bg, e.frameBg, e.titleTxt, e.text1, e.text2, e.message1, e.message2, e.textName, e.shipBanner, e.iconLayer, e.btn_yes, e.btn_no), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this.shipBanner.dispose(), this.btn_yes.off(h.EventType.CLICK), this.btn_no.off(h.EventType.CLICK), this.text1.destroy(), this.text2.destroy(), this.textName.destroy();
                for (var t = 0; t < this.textItems.length; t++) this.textItems[t].destroy();
                this.bg = null, this.frameBg = null, this.titleTxt = null, this.text1 = null, this.text2 = null, this.message1 = null, this.message2 = null, this.shipBanner = null, this.textName = null, this.iconLayer = null, this.icons = null, this.textItems = null, this.btn_yes = null, this.btn_no = null, this._cb_onYes = null, this._cb_onNo = null
            }, e.prototype.update = function (t, e) {
                var i = this,
                    n = new d.ShipLoader;
                n.add(t.mstID, !1, "text_remodel_mes"), n.load(function () {
                    i.shipBanner.update(t, !1), i.message1.texture = o.default.resources.getShip(t.mstID, !1, "text_remodel_mes");
                    t.getClassType();
                    i.textName.text = r.ShipUtil.getShipClassTypeSpRemodelText(t.mstID) + "\u300c" + t.name + "\u300d";
                    for (var n = 0; n < 7; n++) i.icons[n].visible = !1, i.textItems[n].visible = !1;
                    for (var n = 0; n < e.length; n++) i.icons[n].visible = !0, i.textItems[n].visible = !0, i.icons[n].texture = u.COMMON_ITEMICONS.getTextureFromMstID(e[n].id), i.textItems[n].text = e[n].count
                })
            }, e.prototype.activate = function (t, e) {
                this._cb_onYes = t, this._cb_onNo = e
            }, e
        }(PIXI.Container);
    e.SpKaizoConfirm = f
}