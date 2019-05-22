const function707 = function (t, e, i) {
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
        r = i(4),
        s = i(37),
        a = i(56),
        _ = i(708),
        l = i(57),
        u = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i._onMouseOut = function (t) {
                    t.target != i.saveButton && t.target != i.deleteButton && i.removeFocus()
                }, i._onClickSave = function () {
                    i.onClickSave && i.onClickSave(i._presetId)
                }, i._onClickDelete = function () {
                    i.onClickDelete && i.onClickDelete(i._presetId)
                }, i._onClickExtension = function () {
                    i.onClickExtension && i.onClickExtension()
                }, i._index = e, i.frame_bg = new PIXI.Sprite(a.ORGANIZE_MAIN.getTexture(29)), i.frame_bg.buttonMode = !1, i.frame_bg.interactive = !0, i.frame_bg.addListener(o.EventType.MOUSEOVER, function () {
                    i._onMouseOver()
                }), i.frame_bg.addListener(o.EventType.MOUSEOUT, function (t) {
                    i._onMouseOut(t)
                }), i.addChild(i.frame_bg);
                var n = a.ORGANIZE_MAIN.getTexture(33);
                i.presetFocuses = new PIXI.Sprite(n), i.presetFocuses.x = -6, i.presetFocuses.y = -3, i.presetFocuses.visible = !1, i.addChild(i.presetFocuses), i.shipBanner = new PIXI.Sprite, i.shipBanner.position.set(307, 7), i.deckName = new r.TextBox(21, 5523516), i.deckName.position.set(3, 4), i.deckCount = new r.TextBox(21, 5523516), i.deckCount.position.set(1, 36), i.addChild(i.shipBanner), i.addChild(i.deckName), i.addChild(i.deckCount);
                var s = a.ORGANIZE_MAIN.getTexture(4),
                    u = a.ORGANIZE_MAIN.getTexture(5),
                    c = a.ORGANIZE_MAIN.getTexture(1);
                return i.saveButton = new l.SimpleButton(s, s), i.deleteButton = new l.SimpleButton(c, c), i.offSaveButton = new PIXI.Sprite(u), i.deleteButton.interactive = i.deleteButton.buttonMode = !0, i.saveButton.interactive = i.saveButton.buttonMode = !0, i.deleteButton.position.set(490, 36), i.saveButton.x = i.offSaveButton.x = 250, i.saveButton.y = i.offSaveButton.y = 36, i.saveButton.onClick = function () {
                    i._onClickSave()
                }, i.deleteButton.onClick = function () {
                    i._onClickDelete()
                }, i.saveButton.onMouseOver = function () {
                    i._onMouseOver()
                }, i.deleteButton.onMouseOver = function () {
                    i._onMouseOver()
                }, i.saveButton.onMouseOut = function (t) {
                    i._onMouseOut(t)
                }, i.deleteButton.onMouseOut = function (t) {
                    i._onMouseOut(t)
                }, i.addChild(i.offSaveButton, i.saveButton, i.deleteButton), i.presetExtensions = new _.PresetExtensionView(e), i.presetExtensions.onClick = i._onClickExtension, i.addChild(i.presetExtensions), i
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this.presetExtensions.dispose(), this.deleteButton.dispose(), this.saveButton.dispose(), this.deckName.destroy(), this.deckCount.destroy(), this.onClickSave = null, this.onClickDelete = null, this.onClickExtension = null, this.frame_bg = null, this.shipBanner = null, this.deckName = null, this.deckCount = null, this.saveButton = null, this.deleteButton = null, this.offSaveButton = null, this.presetFocuses = null, this.presetExtensions = null, this._index = null, this._presetId = null
            }, e.prototype._onMouseOver = function () {
                this.focus()
            }, e.prototype.focus = function () {
                this.presetFocuses.visible = !0
            }, e.prototype.removeFocus = function () {
                this.presetFocuses.visible = !1
            }, e.prototype.update = function (t, e, i, n, o, r) {
                void 0 === o && (o = null);
                var s = t,
                    a = null != s;
                if (this.shipBanner.visible = !1, this.deckName.visible = !1, this.deckCount.visible = !1, this.saveButton.visible = !1, this.deleteButton.visible = !1, this.offSaveButton.visible = !1, this.presetExtensions.visible = !1, this.frame_bg.visible = !1, this.frame_bg.interactiveChildren = !1, !a) return 0 == r && (this.frame_bg.visible = !0, this.presetExtensions.update(n), this.presetExtensions.visible = !0), !0;
                this.frame_bg.interactiveChildren = !0, this.frame_bg.visible = !0;
                var _ = 0 == s.getShipCount();
                return _ || (this.updateShip(s), this.shipBanner.visible = !0, this.deckName.visible = !0, this.deckCount.visible = !0), this.updateButton(s.presetID, e, i, _, o == s.presetID), !1
            }, e.prototype.updateShip = function (t) {
                this.deckName.text = t.deckName;
                var e = t.getFrontShip();
                new s.TaskLoadShipResource("banner", this.shipBanner, e.mstID, e.isDamaged()).start();
                var i = t.getShipCount();
                this.deckCount.text = i + "\u96bb \u7de8\u6210"
            }, e.prototype.updateButton = function (t, e, i, n, o) {
                this.offSaveButton.visible = !1, this.saveButton.visible = !1, e ? (this.offSaveButton.visible = o && !i, this.saveButton.visible = !o && !i) : (this.offSaveButton.visible = !0, this.saveButton.visible = !1), this.deleteButton.visible = !n, this._presetId = t
            }, e
        }(PIXI.Container);
    e.PresetEditSlot = u
}