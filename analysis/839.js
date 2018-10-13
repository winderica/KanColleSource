const function839 = function (t, e, i) {
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
    var o = i(4), r = i(34), s = i(3), a = i(23), _ = i(1), u = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._labelArr = [], e._onClickYES = function () {
                e.onClickYES()
            }, e._onClickNO = function () {
                e.onClickNO()
            };
            var i = new PIXI.Sprite(s.COMMON_MAIN.getTexture(63)), n = new o.TextBox(21, 1949120),
                a = new o.TextBox(21, 1949120), u = new o.TextBox(21, 1949120), l = new o.TextBox(21, 16777215),
                c = new o.TextBox(21, 1949120), h = new o.TextBox(24, 16777215), p = new o.TextBox(24, 16777215),
                d = new PIXI.Sprite(s.REPAIR_MAIN.getTexture(9)), f = new PIXI.Sprite(s.REPAIR_MAIN.getTexture(5)),
                y = new r.ShipBanner, v = new o.TextBox(21, 16777215), m = new o.TextBox(24, 16777215),
                g = new PIXI.Sprite(s.REPAIR_MAIN.getTexture(28)), b = new o.TextBox(24, 16777215),
                w = new o.TextBox(24, 16777215), x = new o.TextBox(24, 16777215);
            return n.position.set(i.width / 2, -39), n.anchor.set(.5, 0), v.position.set(576, 147), a.position.set(310, 147), y.position.set(576, 180), u.position.set(310, 258), g.position.set(580, 288), l.position.set(577, 258), b.position.set(684, 298), w.position.set(718, 298), x.position.set(685, 294), c.position.set(310, 345), m.position.set(684, 345), p.position.set(687, 342), h.position.set(718, 345), f.position.set(297, 516), d.position.set(580, 516), b.anchor.x = 1, m.anchor.x = 1, n.text = "-\u8266\u8239\u3000\u5165\u6e20-", e._labelArr.push(n), a.text = "\u4fee\u5fa9\u3059\u308b\u8266\u8239", e._labelArr.push(a), u.text = "\u9ad8\u901f\u4fee\u5fa9", e._labelArr.push(u), l.text = "\u4f7f\u7528\u3059\u308b", e._labelArr.push(l), b.text = "9999", x.text = "\u2192", e._labelArr.push(x), w.text = "9999", c.text = "\u6240\u8981\u6642\u9593", e._labelArr.push(c), p.text = "\u2192", e._labelArr.push(p), h.text = "00:00:00", e._labelArr.push(h), d.addListener(_.EventType.CLICK, e._onClickYES), f.addListener(_.EventType.CLICK, e._onClickNO), f.interactive = f.buttonMode = !0, d.interactive = d.buttonMode = !0, e.addChild(i, n, a, u, c, v, m, g, l, p, h, f, d, y, b, x, w), e.textName = v, e.textRequireTime = m, e.buttonYes = d, e.buttonNo = f, e.shipBanner = y, e.beforeRepairKitCount = b, e.afterRepairKitCount = w, e
        }

        return n(e, t), e.prototype.update = function (t, e) {
            this.textName.text = t.name, this.textRequireTime.text = a.MathUtil.timeToString(t.getRepairTime()), this.beforeRepairKitCount.text = e.toString(), this.afterRepairKitCount.text = (e - 1).toString(), this.shipBanner.update(t, !1)
        }, e.prototype.dispose = function () {
            this.removeChildren(), this.buttonYes.texture = PIXI.Texture.EMPTY, this.buttonNo.texture = PIXI.Texture.EMPTY, this.shipBanner.dispose(), this.buttonYes.removeAllListeners(_.EventType.CLICK), this.buttonNo.removeAllListeners(_.EventType.CLICK), this.textName.destroy(), this.textRequireTime.destroy(), this.beforeRepairKitCount.destroy(), this.afterRepairKitCount.destroy(), this._labelArr.forEach(function (t) {
                t.destroy()
            }), this._labelArr = null, this.buttonYes = null, this.buttonNo = null, this.shipBanner = null, this.onClickYES = null, this.onClickNO = null, this.textName = null, this.textRequireTime = null, this.beforeRepairKitCount = null, this.afterRepairKitCount = null
        }, e
    }(PIXI.Container);
    e.UseHiSpeedRepairConfirmView = u
}