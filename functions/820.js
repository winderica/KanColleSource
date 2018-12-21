const function820 = function (t, e, i) {
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
    var o = i(4), r = i(34), s = i(3), a = i(3), _ = i(163), l = i(1), u = i(162), c = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._labelArr = [], e._onYES = function () {
                null != e._cb_onYes && (_.SceneMemory.slotItemPage = 0, _.SceneMemory.slotItemFilter = 0, _.SceneMemory.listMode = u.SlotListMode.UNSET, e._cb_onYes())
            }, e._onNO = function () {
                null != e._cb_onNo && e._cb_onNo()
            };
            var i = new PIXI.Sprite(s.COMMON_MAIN.getTexture(63));
            e.btn_no = new PIXI.Sprite(a.REMODEL_GRADEUP.getTexture(2)), e.btn_yes = new PIXI.Sprite(a.REMODEL_GRADEUP.getTexture(6));
            var n = new PIXI.Sprite(a.REMODEL_GRADEUP.getTexture(18));
            e.textAmmo = new o.TextBox(20, 16777215);
            var c = new PIXI.Sprite(a.REMODEL_GRADEUP.getTexture(19));
            e.textSteel = new o.TextBox(20, 16777215);
            var h = new PIXI.Sprite(a.REMODEL_GRADEUP.getTexture(0));
            e.shipBanner = new r.ShipBanner;
            var p = new o.TextBox(19, 1949120), d = new o.TextBox(19, 1949120);
            return e.textName = new o.TextBox(19, 16777215), p.text = "\u6539\u9020\u3059\u308b\u8266\u8239", d.text = "\u4f7f\u7528\u3059\u308b\u8cc7\u6750", p.position.set(414, 219), d.position.set(414, 341), e._labelArr.push(p), e._labelArr.push(d), e.shipBanner.position.set(617, 258), i.position.set(86, 60), h.position.set(516, 20), e.btn_no.position.set(377, 588), e.btn_yes.position.set(639, 588), n.position.set(612, 378), c.position.set(612, 413), e.textName.position.set(617, 219), e.textAmmo.position.set(n.x + n.width, n.y), e.textSteel.position.set(c.x + c.width, c.y), e.btn_yes.on(l.EventType.CLICK, e._onYES), e.btn_no.on(l.EventType.CLICK, e._onNO), e.btn_yes.interactive = e.btn_yes.buttonMode = !0, e.btn_no.interactive = e.btn_no.buttonMode = !0, e.addChild(i, h, n, e.textAmmo, c, e.textSteel, e.btn_no, e.btn_yes, e.shipBanner, p, d, e.textName), e
        }

        return n(e, t), e.prototype.update = function (t, e, i) {
            this.shipBanner.update(t, !1), this.textName.text = t.shipTypeName + " \u300c" + t.name + "\u300d", this.textAmmo.text = "\xd7" + e, this.textSteel.text = "\xd7" + i
        }, e.prototype.activate = function (t, e) {
            this._cb_onYes = t, this._cb_onNo = e
        }, e.prototype.dispose = function () {
            this.removeChildren(), this.shipBanner.dispose(), this.btn_yes.off(l.EventType.CLICK), this.btn_no.off(l.EventType.CLICK), this.textName.destroy(), this.textSteel.destroy(), this.textAmmo.destroy(), this._labelArr.forEach(function (t) {
                t.destroy()
            }), this.shipBanner = null, this.textName = null, this.textSteel = null, this.textAmmo = null, this.btn_yes = null, this.btn_no = null, this._cb_onYes = null, this._cb_onNo = null, this._labelArr = null
        }, e
    }(PIXI.Container);
    e.KaizoConfirm = c
}