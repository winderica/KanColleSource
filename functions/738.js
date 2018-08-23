const function738 = function (t, e, i) {
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
    var o = i(1), r = i(8), s = i(323), a = i(20), _ = i(155), u = i(331), l = i(332), c = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i.ITEM_WIDTH = 765, i.ITEM_HEIGHT = 77, i._onClick = function () {
                i.onClick(i.index, i.memShipId)
            };
            var n = new r.AreaBox(0, 0, i.ITEM_WIDTH, i.ITEM_HEIGHT);
            n.renderable = !1, n.buttonMode = !0, n.on(o.EventType.CLICK, i._onClick);
            var c = new PIXI.Sprite;
            c.position.x = 38, c.texture = a.COMMON_MAIN.getTexture(19);
            var h = new s.LongShipBanner;
            h.position.x = 38;
            var p = new l.SupplyCheckBox;
            p.position.set(0, 24);
            var d = new PIXI.Sprite(_.SUPPLY_MAIN.getTexture(20));
            d.position.x = 33, d.position.y = -5;
            var f = new u.MaterialView;
            return f.position.set(517, 6), i.emptyBackground = c, i.supplyCheckBox = p, i.longShipBanner = h, i.clickArea = n, i.focusFrame = d, i.index = e, i.materialView = f, i
        }

        return n(e, t), e.prototype.update = function (t, e, i, n) {
            this.removeChildren(), this.addChild(this.longShipBanner, this.supplyCheckBox, this.materialView, this.focusFrame), n && this.addChild(this.clickArea), this.longShipBanner.update(t, e, i), this.materialView.update(e.fuelNow, e.fuelMax, e.ammoNow, e.ammoMax), this.memShipId = e.memID
        }, e.prototype.checkOn = function () {
            this.supplyCheckBox.update(3), this.focusFrame.visible = !0
        }, e.prototype.checkDisable = function () {
            this.supplyCheckBox.update(1), this.focusFrame.visible = !1
        }, e.prototype.checkOff = function () {
            this.supplyCheckBox.update(2), this.focusFrame.visible = !1
        }, e.prototype.empty = function () {
            this.memShipId = null, this.removeChildren(), this.addChild(this.emptyBackground)
        }, e.prototype.dispose = function () {
            this.clickArea.off(o.EventType.CLICK, this._onClick), this.clickArea = null, this.materialView.dispose(), this.materialView = null, this.onClick = this._onClick = null
        }, e
    }(PIXI.Container);
    e.DeckSupplyBanner = c
}