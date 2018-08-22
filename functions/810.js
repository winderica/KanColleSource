const function810 = function (t, e, i) {
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
    var o = i(4), r = i(32), s = i(3), a = i(3), _ = i(163), u = i(1), l = i(162), c = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onYES = function () {
                null != e._cb_onYes && (_.SceneMemory.slotItemPage = 0, _.SceneMemory.slotItemFilter = 0, _.SceneMemory.listMode = l.SlotListMode.UNSET, e._cb_onYes())
            }, e._onNO = function () {
                null != e._cb_onNo && e._cb_onNo()
            };
            var i = new PIXI.Sprite(s.COMMON_MAIN.getTexture(59)),
                n = new PIXI.Sprite(a.REMODEL_GRADEUP.getTexture(2)),
                c = new PIXI.Sprite(a.REMODEL_GRADEUP.getTexture(6)),
                h = new PIXI.Sprite(a.REMODEL_GRADEUP.getTexture(18)), p = new o.TextBox(20, 16777215),
                d = new PIXI.Sprite(a.REMODEL_GRADEUP.getTexture(19)), f = new o.TextBox(20, 16777215),
                y = new PIXI.Sprite(a.REMODEL_GRADEUP.getTexture(0)), v = new r.ShipBanner,
                g = new o.TextBox(19, 1949120), m = new o.TextBox(19, 1949120), b = new o.TextBox(19, 16777215);
            return g.text = "\u6539\u9020\u3059\u308b\u8266\u8239", m.text = "\u4f7f\u7528\u3059\u308b\u8cc7\u6750", g.position.set(414, 219), m.position.set(414, 341), v.position.set(617, 258), i.position.set(86, 60), y.position.set(516, 20), n.position.set(377, 588), c.position.set(639, 588), h.position.set(612, 378), d.position.set(612, 413), b.position.set(617, 219), p.position.set(h.x + h.width, h.y), f.position.set(d.x + d.width, d.y), c.addListener(u.EventType.CLICK, e._onYES), n.addListener(u.EventType.CLICK, e._onNO), c.interactive = c.buttonMode = !0, n.interactive = n.buttonMode = !0, e.addChild(i, y, h, p, d, f, n, c, v, g, m, b), e.shipBanner = v, e.textName = b, e.textAmmo = p, e.textSteel = f, e.btn_no = n, e.btn_yes = c, e
        }

        return n(e, t), e.prototype.update = function (t, e, i) {
            this.shipBanner.update(t, !1), this.textName.text = t.shipTypeName + " \u300c" + t.name + "\u300d", this.textAmmo.text = "\xd7" + e, this.textSteel.text = "\xd7" + i
        }, e.prototype.activate = function (t, e) {
            this._cb_onYes = t, this._cb_onNo = e
        }, e.prototype.deactivate = function () {
            this._cb_onYes = null, this._cb_onNo = null
        }, e.prototype.dispose = function () {
            this.deactivate(), this.shipBanner.dispose(), this.btn_yes.removeAllListeners(u.EventType.CLICK), this.btn_no.removeAllListeners(u.EventType.CLICK), this.textName.text = "", this.textSteel.text = "", this.textAmmo.text = "", this.shipBanner = null, this.textName = null, this.textSteel = null, this.textAmmo = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.KaizoConfirm = c
}