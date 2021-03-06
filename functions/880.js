const function880 = function (t, e, i) {
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
    var o = i(3),
        r = i(0),
        s = i(4),
        a = i(32),
        _ = i(25),
        u = i(1),
        l = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._labelArr = [], e._onClickNO = function () {
                    e.onClickNO()
                }, e._onClickYES = function () {
                    e.onClickYES()
                };
                var i = new PIXI.Sprite(o.COMMON_MAIN.getTexture(63)),
                    n = new PIXI.Sprite(o.REPAIR_MAIN.getTexture(27)),
                    _ = new PIXI.Sprite(o.REPAIR_MAIN.getTexture(26)),
                    l = new s.TextBox(21, 1949120),
                    c = new s.TextBox(21, 1949120),
                    h = new s.TextBox(21, 1949120),
                    p = new s.TextBox(21, 1949120),
                    d = new s.TextBox(21, 1949120),
                    f = new PIXI.Sprite(o.REPAIR_MAIN.getTexture(9)),
                    y = new PIXI.Sprite(o.REPAIR_MAIN.getTexture(5)),
                    m = new a.ShipBanner,
                    g = new s.TextBox(21, 16777215),
                    v = new s.TextBox(21, 16777215),
                    b = new s.TextBox(21, 16777215),
                    w = new s.TextBox(21, 16777215),
                    x = new PIXI.Container,
                    I = new s.TextBox(21, 16777215),
                    T = new PIXI.Sprite(r.default.resources.getUIImage("mask"));
                T.scale.set(-2.8, 3.5), T.anchor.x = 1, x.mask = T, x.addChild(I, T), l.text = "-\u8266\u8239\u3000\u5165\u6e20-", l.position.set(Math.floor(i.width / 2) + .5, -39), l.anchor.set(.5, 0), e._labelArr.push(l), c.text = "\u4fee\u5fa9\u3059\u308b\u8266\u8239", x.position.set(576, 147), c.position.set(310, 147), m.position.set(580, 180), e._labelArr.push(c), h.text = "\u4f7f\u7528\u3059\u308b\u8cc7\u6750", h.position.set(310, 258), n.position.set(576, 261), _.position.set(576, 295), v.position.set(609, 262), b.position.set(609, 301), e._labelArr.push(h), p.text = "\u6240\u8981\u6642\u9593", p.position.set(310, 345), g.position.set(579, 349), e._labelArr.push(p), d.text = "\u9ad8\u901f\u4fee\u5fa9", d.position.set(310, 408), w.position.set(579, 408), e._labelArr.push(d), e._useRepairKitTime = new PIXI.Container, e._useRepairKitTime.position.set(685, 349), e._useRepairKitTime.visible = !1;
                var O = new s.TextBox(21, 16777215);
                O.text = "\u2192", O.position.set(0, 0), e._labelArr.push(O), e._useRepairKitTime.addChild(O);
                var C = new s.TextBox(21, 16777215);
                C.text = "00:00:00", C.position.set(32, 0), e._labelArr.push(C), e._useRepairKitTime.addChild(C), e._useRepairKitCount = new PIXI.Container, e._useRepairKitCount.position.set(577, 450), e._useRepairKitCount.visible = !1;
                var P = new PIXI.Sprite(o.REPAIR_MAIN.getTexture(28));
                P.position.set(0, 0), e._useRepairKitCount.addChild(P);
                var k = new s.TextBox(21, 16777215);
                k.name = "before", k.text = "9999", k.anchor.x = 1, k.position.set(106, 7), e._labelArr.push(k), e._useRepairKitCount.addChild(k);
                var S = new s.TextBox(21, 16777215);
                S.text = "\u2192", S.position.set(116, 7), e._labelArr.push(S), e._useRepairKitCount.addChild(S);
                var M = new s.TextBox(21, 16777215);
                return M.name = "after", M.text = "9999", M.position.set(146, 7), e._labelArr.push(M), e._useRepairKitCount.addChild(M), y.position.set(297, 516), f.position.set(580, 516), y.addListener(u.EventType.CLICK, e._onClickNO), f.addListener(u.EventType.CLICK, e._onClickYES), y.interactive = y.buttonMode = !0, f.interactive = f.buttonMode = !0, e.addChild(i, l, c, h, p, d, x, v, b, g, e._useRepairKitTime, w, y, f, n, _, m, e._useRepairKitCount), e.textName = I, e.textSteelCount = v, e.textFuelCount = b, e.textUseOption = w, e.textRequireTime = g, e.buttonYes = f, e.buttonNo = y, e.shipBanner = m, e.containerName = x, e
            }
            return n(e, t), e.prototype.update = function (t, e) {
                if (this.containerName.cacheAsBitmap = !1, this.textName.text = t.name, this.textSteelCount.text = "\xd7" + t.getRepairSteel().toString(), this.textFuelCount.text = "\xd7" + t.getRepairFuel().toString(), this.textUseOption.text = e ? "\u4f7f\u7528\u3059\u308b" : "\u4f7f\u7528\u3057\u306a\u3044", this.textRequireTime.text = _.MathUtil.timeToString(t.getRepairTime()), this.shipBanner.update(t, !1), this.containerName.cacheAsBitmap = !0, this._useRepairKitTime.visible = e, this._useRepairKitCount.visible = e, e) {
                    var i = r.default.model.useItem.get(1).count;
                    this._useRepairKitCount.getChildByName("before").text = i.toString(10);
                    this._useRepairKitCount.getChildByName("after").text = (i - 1).toString(10)
                }
            }, e.prototype.dispose = function () {
                this.removeChildren(), this.containerName.cacheAsBitmap = !1, this.containerName.mask = null, this.containerName.removeChildren(), this.shipBanner.dispose(), this.buttonNo.removeAllListeners(u.EventType.CLICK), this.buttonYes.removeAllListeners(u.EventType.CLICK), this._useRepairKitTime.removeChildren(), this._useRepairKitCount.removeChildren(), this.textName.destroy(), this.textSteelCount.destroy(), this.textFuelCount.destroy(), this.textUseOption.destroy(), this.textRequireTime.destroy(), this._labelArr.forEach(function (t) {
                    t.destroy()
                }), this._labelArr = null, this.onClickYES = null, this.onClickNO = null, this.textName = null, this.textSteelCount = null, this.textFuelCount = null, this.textUseOption = null, this.textRequireTime = null, this.buttonYes = null, this.buttonNo = null, this.shipBanner = null, this.containerName = null, this._useRepairKitTime = null, this._useRepairKitCount = null
            }, e
        }(PIXI.Container);
    e.UseRepairConfirmView = l
}