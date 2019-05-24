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
    var o = i(3),
        r = i(4),
        s = i(1),
        a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i._onClick = function () {
                    i.onClick(i._presetId)
                }, i._onMouseOut = function (t) {
                    i.onMouseOut(i._index, t)
                }, i._index = e;
                var n = o.ORGANIZE_MAIN.getTexture(36),
                    a = o.ORGANIZE_MAIN.getTexture(40),
                    _ = o.ORGANIZE_MAIN.getTexture(12),
                    l = o.ORGANIZE_MAIN.getTexture(13);
                i._background = new PIXI.Sprite(n);
                var u = new PIXI.Sprite(a);
                return i.textMessage = new r.TextBox(16, "red"), i._positiveButton = new PIXI.Sprite(_), i.negativeButton = new PIXI.Sprite(l), u.position.set(279, -13), i.textMessage.position.set(13, 9), i._positiveButton.position.set(237, 42), i.negativeButton.position.set(237, 42), i._positiveButton.on(s.EventType.CLICK, i._onClick), i._positiveButton.on(s.EventType.MOUSEOUT, i._onMouseOut), i._background.on(s.EventType.MOUSEOUT, i._onMouseOut), i._background.interactive = !0, i._positiveButton.interactive = !0, i._positiveButton.buttonMode = !0, i._positiveButton.visible = !1, i.negativeButton.visible = !1, i.addChild(i._background, u, i.textMessage, i.negativeButton, i._positiveButton), i._background.anchor.set(.5, 0), i._background.x = 285, i.textMessage.anchor.set(.5, 0), i
            }
            return n(e, t), Object.defineProperty(e.prototype, "index", {
                get: function () {
                    return this._index
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "background", {
                get: function () {
                    return this._background
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "positiveButton", {
                get: function () {
                    return this._positiveButton
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function () {
                this.removeChildren(), this._positiveButton.off(s.EventType.CLICK), this._positiveButton.off(s.EventType.MOUSEOUT), this._positiveButton.off(s.EventType.MOUSEOVER), this._background.off(s.EventType.MOUSEOUT), this._background.off(s.EventType.MOUSEOVER), this.textMessage.destroy(), this.onClick = null, this.onMouseOut = null, this.textMessage = null, this.negativeButton = null, this._index = null, this._background = null, this._positiveButton = null, this._presetId = null
            }, e.prototype.update = function (t, e, i) {
                this._positiveButton.visible = !1, this.negativeButton.visible = !1, i ? this._positiveButton.visible = !0 : this.negativeButton.visible = !0, this.textMessage.text = e, this._background.width = this.textMessage.width + 9, this._background.x = 285, 285 < this._background.width / 2 && (this._background.x = Math.floor(this._background.width / 2 - 285 + 285)), this.textMessage.x = this.background.x, this.positiveButton.x = Math.floor(this.background.x - this.positiveButton.width / 2), this.negativeButton.x = Math.floor(this.background.x - this.negativeButton.width / 2), this._presetId = t
            }, e
        }(PIXI.Container);
    e.PresetAlertOrganizedPopup = a;
    var _ = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i._onClick = function () {
                i.onClick(i._presetId)
            }, i._onMouseOut = function (t) {
                i.onMouseOut(i._index, t)
            }, i._onMouseOver = function (t) {
                i.onMouseOver(i._index, t)
            }, i._index = e;
            var n = o.ORGANIZE_MAIN.getTexture(37),
                a = o.ORGANIZE_MAIN.getTexture(40),
                _ = o.ORGANIZE_MAIN.getTexture(13),
                l = o.ORGANIZE_MAIN.getTexture(11);
            i._background = new PIXI.Sprite(n);
            var u = new PIXI.Sprite(a);
            return i.textMessage = new r.TextBox(18, "red"), i._negativeButton = new PIXI.Sprite(_), i._positiveButton = new PIXI.Sprite(l), i.textMessage.text = "\u65e2\u306b\u5b58\u5728\u3057\u306a\u3044\u8266\u5a18\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002", u.position.set(160, -12), i.textMessage.position.set(10, 10), i._negativeButton.position.set(18, 39), i._positiveButton.position.set(34, 39), i._background.on(s.EventType.MOUSEOUT, i._onMouseOut), i._background.on(s.EventType.MOUSEOVER, i._onMouseOver), i._positiveButton.on(s.EventType.MOUSEOUT, i._onMouseOut), i._positiveButton.on(s.EventType.MOUSEOVER, i._onMouseOver), i._positiveButton.on(s.EventType.CLICK, i._onClick), i._negativeButton.visible = !1, i._background.interactive = !0, i._positiveButton.interactive = !0, i._positiveButton.buttonMode = !0, i.addChild(i._background, u, i.textMessage, i._negativeButton, i._positiveButton), i
        }
        return n(e, t), Object.defineProperty(e.prototype, "index", {
            get: function () {
                return this._index
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "background", {
            get: function () {
                return this._background
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "positiveButton", {
            get: function () {
                return this._positiveButton
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.dispose = function () {
            this._background.off(s.EventType.MOUSEOUT), this._background.off(s.EventType.MOUSEOVER), this._positiveButton.off(s.EventType.MOUSEOUT), this._positiveButton.off(s.EventType.MOUSEOVER), this._positiveButton.off(s.EventType.CLICK), this.textMessage.destroy(), this.onClick = null, this.onMouseOut = null, this.onMouseOver = null, this.textMessage = null, this._positiveButton = null, this._negativeButton = null, this._background = null, this._index = null, this._presetId = null, this.removeChildren()
        }, e.prototype.update = function (t, e) {
            this._presetId = t, this._positiveButton.visible = !1, this._negativeButton.visible = !1, e ? this._positiveButton.visible = !0 : this._negativeButton.visible = !0
        }, e
    }(PIXI.Container);
    e.PresetAlertLostPopup = _
}