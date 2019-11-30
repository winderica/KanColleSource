const function753 = function (t, e, i) {
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
    var o = i(1),
        r = i(127),
        s = i(8),
        a = i(4),
        _ = i(162),
        l = i(335),
        u = i(336),
        c = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i.ITEM_WIDTH = 711, i.ITEM_HEIGHT = 42, i._onClick = function () {
                    i.onClick(i.index, i.memShipId)
                }, i._onMouseOut = function () {
                    i.focus.visible = !1, i.typeAndNameContainer.cacheAsBitmap = !1, i.labelLevel.style.fill = i.textLevel.style.fill = i.textType.style.fill = i.textName.style.fill = 5523516, i.typeAndNameContainer.cacheAsBitmap = !0
                }, i._onMouseOver = function () {
                    i.focus.visible = !0, i.typeAndNameContainer.cacheAsBitmap = !1, i.labelLevel.style.fill = i.textLevel.style.fill = i.textType.style.fill = i.textName.style.fill = 16774898, i.typeAndNameContainer.cacheAsBitmap = !0
                };
                var n = Math.floor(22) + 2,
                    c = new a.TextBox(18, 5523516),
                    h = new a.TextBox(20, 5523516),
                    p = new PIXI.Container,
                    d = new a.TextBox(21, 5523516),
                    f = new a.TextBox(21, 5523516),
                    y = r.CreateRect.gradientLeftToRight(310, 44, .7, .9),
                    m = new PIXI.Sprite(_.SUPPLY_MAIN.getTexture(24));
                m.scale.x = 1.45, m.visible = !1, f.anchor.set(1, 0), f.position.set(417, Math.floor(n - f.height / 2) + 0), c.anchor.set(0, 0), c.position.set(0, Math.floor(n - c.height / 2)), h.anchor.set(0, 0), h.position.set(65, Math.floor(n - h.height / 2) + 0), p.position.set(53, 0), d.anchor.set(0, 0), d.position.set(351, Math.floor(n - d.height / 2) + 0), d.text = "Lv", p.mask = y, p.addChild(c, h, y);
                var g = new u.SupplyCheckBox;
                g.position.set(11, 11);
                var v = new PIXI.Graphics;
                v.lineStyle(1, 13945534, 1), v.moveTo(30, 45), v.lineTo(713, 44), v.endFill(), i.line = v;
                var b = new l.MaterialViewS;
                return b.position.set(446, 11), i.supplyCheckBox = g, i.index = e, i.materialView = b, i.clickArea = new s.AreaBox(0, 0, i.ITEM_WIDTH, i.ITEM_HEIGHT), i.clickArea.renderable = !1, i.clickArea.buttonMode = !0, i.clickArea.on(o.EventType.CLICK, i._onClick), i.clickArea.on(o.EventType.MOUSEOVER, i._onMouseOver), i.clickArea.on(o.EventType.MOUSEOUT, i._onMouseOut), i.textType = c, i.textName = h, i.typeAndNameContainer = p, i.labelLevel = d, i.textLevel = f, i.maskTypeAndName = y, i.focus = m, i
            }
            return n(e, t), e.prototype.update = function (t, e, i) {
                this.removeChildren(), this.addChild(this.focus, this.line, this.typeAndNameContainer, this.labelLevel, this.textLevel, this.supplyCheckBox, this.materialView), i && this.addChild(this.clickArea), this.typeAndNameContainer.cacheAsBitmap = !1, this.textType.text = e.shipTypeName + " ", this.textName.text = e.name, this.textName.x = this.textType.x + this.textType.width, this.typeAndNameContainer.cacheAsBitmap = !0, this.textLevel.text = e.level.toString(), this.materialView.update(e.fuelNow, e.fuelMax, e.ammoNow, e.ammoMax);
                e.fuelMax, e.fuelNow, e.ammoMax, e.ammoNow;
                this.materialView.update(e.fuelNow, e.fuelMax, e.ammoNow, e.ammoMax), this.memShipId = e.memID
            }, e.prototype.checkOn = function () {
                this.supplyCheckBox.update(3)
            }, e.prototype.checkDisable = function () {
                this.supplyCheckBox.update(1)
            }, e.prototype.checkOff = function () {
                this.supplyCheckBox.update(2)
            }, e.prototype.empty = function () {
                this.memShipId = null, this.removeChildren(), this.addChild(this.line)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this.typeAndNameContainer.cacheAsBitmap = !1, this.typeAndNameContainer.removeChildren(), this.typeAndNameContainer = null, this.textType.destroy(), this.textName.destroy(), this.labelLevel.destroy(), this.textLevel.destroy(), this.supplyCheckBox.dispose(), this.supplyCheckBox = null, this.line = null, this.textType = null, this.labelLevel = null, this.textLevel = null, this.maskTypeAndName = null, this.textName = null, this.focus = null, this.clickArea.off(o.EventType.CLICK, this._onClick), this.clickArea.off(o.EventType.MOUSEOVER, this._onMouseOver), this.clickArea.off(o.EventType.MOUSEOUT, this._onMouseOut), this.clickArea = null, this.line = null, this.materialView.dispose(), this.materialView = null, this.onClick = this._onClick = null
            }, e
        }(PIXI.Container);
    e.OtherSupplyListItem = c
}