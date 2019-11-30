const function690 = function (t, e, i) {
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
        r = i(691),
        s = i(692),
        a = i(216),
        _ = i(57),
        l = i(1),
        u = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i._onMouseDown = function () {
                    i.onDragging(i.slotPosition, i.memShipId)
                }, i.___onMouseDown = function (t) {
                    i.onMouseDown(i.slotPosition, i.slotNo, i.memShipId)
                }, i._onClickChange = function () {
                    i.onClickChange(i.slotPosition, i.slotNo)
                }, i._onClickDetail = function () {
                    i.onClickDetail(i.memShipId)
                }, i.shipSlotShutter = new s.ShipSlotShutter, i.shipInfo = new r.ShipInfo, i.deckIndexEmblem = new a.DeckIndexEmblem;
                var n = o.ORGANIZE_MAIN.getTexture(23),
                    u = o.ORGANIZE_MAIN.getTexture(24),
                    c = o.ORGANIZE_MAIN.getTexture(25),
                    h = o.ORGANIZE_MAIN.getTexture(9),
                    p = o.ORGANIZE_MAIN.getTexture(10);
                return i.disableChangeButton = new PIXI.Sprite(n), i.changeButton = new _.SimpleButton(u, c), i.detailButton = new _.SimpleButton(h, p), i.shipBannerDragArea = new PIXI.Graphics, i.shipBannerDragArea.beginFill(0, 0), i.shipBannerDragArea.drawRect(0, 0, 240, 60), i.shipBannerDragArea.endFill(), i.shipBannerDragArea.position.set(245, 18), i.shipBannerDragArea.interactive = !0, i.shipBannerDragArea.buttonMode = !0, i.shipBannerDragArea.renderable = !1, i.shipBannerDragArea.on(l.EventType.MOUSEDOWN, i._onMouseDown), i.changeButton.onClick = i._onClickChange, i.detailButton.onClick = i._onClickDetail, i.disableChangeButton.position.set(379, 103), i.changeButton.position.set(379, 103), i.detailButton.position.set(250, 103), i.deckIndexEmblem.position.set(-15, 0), i.slotPosition = e, i
            }
            return n(e, t), e.prototype.activate = function (t, e, i) {
                this.deactivate(), this.onDragging = t, this.onClickChange = e, this.onClickDetail = i
            }, e.prototype.deactivate = function () {
                this.onDragging = null, this.onClickChange = null, this.onClickDetail = null
            }, e.prototype.dispose = function () {
                this.deactivate(), this.shipBannerDragArea.off(l.EventType.MOUSEDOWN, this._onMouseDown), this.shipSlotShutter.dispose(), this.shipInfo.dispose(), this.deckIndexEmblem.dispose(), this.changeButton.dispose(), this.shipSlotShutter = null, this.shipInfo = null, this.deckIndexEmblem = null, this.changeButton = null, this.removeChildren()
            }, e.prototype.update = function (t, e, i) {
                this.removeChildren();
                var n = e.memID;
                this.shipInfo.update(e, i), this.deckIndexEmblem.update(t), i ? this.addChild(this.shipInfo, this.deckIndexEmblem, this.disableChangeButton, this.detailButton, this.shipSlotShutter) : this.addChild(this.shipInfo, this.deckIndexEmblem, this.changeButton, this.detailButton, this.shipBannerDragArea, this.shipSlotShutter), this.memShipId = n, this.slotNo = t
            }, e.prototype.close = function () {
                this.shipSlotShutter.close(), this.deckIndexEmblem.visible = !1
            }, e.prototype.closeAnimation = function (t, e) {
                void 0 === e && (e = 250), this.deckIndexEmblem.visible = !1, this.shipSlotShutter.closeAnimation(function () {
                    t()
                }, e)
            }, e.prototype.open = function () {
                this.deckIndexEmblem.visible = !0, this.shipSlotShutter.open()
            }, e.prototype.openAnimation = function (t, e) {
                var i = this;
                void 0 === e && (e = 250), this.shipSlotShutter.openAnimation(function () {
                    i.deckIndexEmblem.visible = !0, t()
                }, e)
            }, e.prototype.updateEmpty = function (t, e) {
                this.removeChildren(), this.memShipId = null, this.slotNo = t, e ? this.addChild(this.shipSlotShutter, this.changeButton) : this.addChild(this.shipSlotShutter)
            }, e
        }(PIXI.Container);
    e.ShipSlot = u
}