const function715 = function (t, e, i) {
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
        r = i(1),
        s = i(4),
        a = i(37),
        _ = i(56),
        l = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i.HEIGHT = 76, i.problem = !1, i.isOver = !1, i._onMouseOver = function (t) {
                    i.isOver = !0, i.onMouseOver && i.onMouseOver(i.index, t)
                }, i._onMouseOut = function (t) {
                    i.isOver = !1, i.onMouseOut && i.onMouseOut(i.index, t)
                }, i._onClickExpand = function () {
                    0 == i.problem && i.onClickExpand(i.presetId)
                }, i.index = e, i.frame_bg = new PIXI.Sprite(_.ORGANIZE_MAIN.getTexture(29)), i.frame_bg.buttonMode = !1, i.frame_bg.interactive = !0, i.frame_bg.addListener(r.EventType.MOUSEOUT, i._onMouseOut), i.frame_bg.addListener(r.EventType.MOUSEOVER, i._onMouseOver), i.addChild(i.frame_bg);
                var n = _.ORGANIZE_MAIN.getTexture(33);
                return i.presetFocuse = new PIXI.Sprite(n), i.presetFocuse.visible = !1, i.presetFocuse.x = -6, i.presetFocuse.y = -3, i.addChild(i.presetFocuse), i.shipBanner = new PIXI.Sprite, i.shipBanner.position.set(307, 7), i.deckName = new s.TextBox(21, 5523516), i.deckName.position.set(3, 4), i.deckCount = new s.TextBox(21, 5523516), i.deckCount.position.set(1, 36), i.addChild(i.shipBanner), i.addChild(i.deckName), i.addChild(i.deckCount), i.textureMouseOver = _.ORGANIZE_MAIN.getTexture(3), i.textureMouseOut = _.ORGANIZE_MAIN.getTexture(2), i.expandButton = new PIXI.Sprite(i.textureMouseOut), i.expandButton.interactive = i.expandButton.buttonMode = !0, i.expandButton.position.set(250, 36), i.expandButton.addListener(r.EventType.CLICK, i._onClickExpand), i.expandButton.addListener(r.EventType.MOUSEOUT, i._onMouseOut), i.expandButton.addListener(r.EventType.MOUSEOVER, i._onMouseOver), i.addChild(i.expandButton), i
            }
            return n(e, t), Object.defineProperty(e.prototype, "PresetId", {
                get: function () {
                    return this.presetId
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "IsOver", {
                get: function () {
                    return this.isOver
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "FrameBg", {
                get: function () {
                    return this.frame_bg
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "ExpandButton", {
                get: function () {
                    return this.expandButton
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function () {
                this.removeChildren(), this.deckName.destroy(), this.deckCount.destroy(), this.onMouseOver = null, this.onMouseOut = null, this.onClickExpand = null, this.frame_bg = null, this.shipBanner = null, this.deckName = null, this.deckCount = null, this.presetFocuse = null, this.textureMouseOver = null, this.textureMouseOut = null, this.expandButton = null, this.index = null, this.presetId = null, this.problem = null, this.isOver = null
            }, e.prototype.focus = function () {
                this.expandButton.texture = this.problem ? this.textureMouseOver : this.textureMouseOut, this.presetFocuse.visible = !0
            }, e.prototype.removeFocus = function () {
                this.expandButton.texture = this.textureMouseOut, this.presetFocuse.visible = !1
            }, e.prototype.hideFocus = function () {
                this.expandButton.texture = this.textureMouseOut, this.presetFocuse.visible = !1
            }, e.prototype.update = function (t, e, i, n, r) {
                var s = null != i;
                this.shipBanner.visible = !1, this.deckName.visible = !1, this.deckCount.visible = !1, this.expandButton.visible = !1, this.frame_bg.visible = !1;
                var a = !1;
                if (s) {
                    this.presetId = i.presetID, this.frame_bg.visible = !0;
                    var _ = 0 == i.getShipCount(),
                        l = i.hasLostShip(),
                        u = i.hasOtherDeckShip(t);
                    if (!_) {
                        i.getShipsAfterExpanded(t).length;
                        l ? a = !0 : u && (a = !0), this.updateShip(i), this.shipBanner.visible = !0, this.deckName.visible = !0, this.deckCount.visible = !0
                    }
                    var c = 0 < i.getShipCount();
                    this.updateButton(i.presetID, n, r, c, a);
                    var h = o.default.model.deck.get(t);
                    this.expandButton.visible = !h.expedition
                }
            }, e.prototype.updateShip = function (t) {
                this.deckName.text = t.deckName;
                var e = t.getFrontShip();
                new a.TaskLoadShipResource("banner", this.shipBanner, e.mstID, e.isDamaged()).start();
                var i = t.getShipCount();
                this.deckCount.text = i + "\u96bb \u7de8\u6210"
            }, e.prototype.updateButton = function (t, e, i, n, o) {
                this.expandButton.visible = !1, this.expandButton.visible = !e || !i, this.presetId = t, this.problem = o
            }, e
        }(PIXI.Container);
    e.PresetExpansionSlot = l
}