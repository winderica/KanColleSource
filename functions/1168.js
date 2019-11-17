const function1168 = function (t, e, i) {
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
        r = i(4),
        s = i(411),
        a = i(25),
        _ = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._message1 = new r.TextBox(22, 1381651), n._message1.position.set(177, 48), n.addChild(n._message1), n._message2 = new r.TextBox(22, 5407509), n._message2.position.set(177, 48), n.addChild(n._message2), n._message3 = new r.TextBox(22, 1381651), n._message3.position.set(177, 48), n.addChild(n._message3), n._icon = new PIXI.Sprite, n._icon.position.set(198, 116), n.addChild(n._icon), n._err_message = new r.TextBox(16, 16711680), n._err_message.y = 200, n.addChild(n._err_message), n._btn_yes = new a.BtnBase(e, i), n._btn_yes.position.set(174, 231), n.addChild(n._btn_yes), n._btn_back = new a.BtnBase(-1, i), n._btn_back.position.set(366, 231), n.addChild(n._btn_back), n._header_img = new l, n.addChild(n._header_img), n
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                this.texture = s.ITEM_ILIST_IWASHI.getTexture(14), this._message1.text = "\u300c\u9c2f\u300d\u3092", this._message3.text = "\u306b\u3057\u307e\u3059\u304b\uff1f";
                var i = 0;
                91 == t ? (this._message2.text = "\u523a\u8eab", this._icon.texture = s.ITEM_ILIST_IWASHI.getTexture(7), i = 3) : 92 == t ? (this._message2.text = "\u3064\u307f\u308c", this._icon.texture = s.ITEM_ILIST_IWASHI.getTexture(8), i = 7) : 93 == t && (this._message2.text = "\u5bff\u53f8", this._icon.texture = s.ITEM_ILIST_IWASHI.getTexture(9), i = 30), this._message2.x = this._message1.x + this._message1.width, this._message3.x = this._message2.x + this._message2.width;
                var n = s.ITEM_ILIST_IWASHI.getTexture(2),
                    r = s.ITEM_ILIST_IWASHI.getTexture(3);
                this._btn_yes.initialize(n, r), e < i ? (this._btn_yes.enabled = !1, this._err_message.text = "\u3053\u306e\u8abf\u7406\u306b\u306f\u300c\u9c2f\u300d\u304c" + i + "\u5c3e\u5fc5\u8981\u3067\u3059\u3002") : 93 == t && o.default.model.basic.slotMax - o.default.model.slot.num < 1 ? (this._btn_yes.enabled = !1, this._err_message.text = "\u4fdd\u6709\u88c5\u5099\u67a0\u306b\u4f59\u88d5\u304c\u3042\u308a\u307e\u305b\u3093\u3002") : (this._btn_yes.enabled = !0, this._err_message.text = ""), this._err_message.x = 338 - this._err_message.width / 2, n = s.ITEM_ILIST_IWASHI.getTexture(1), this._btn_back.initialize(n), this._header_img.initialize(t)
            }, e.prototype.activate = function () {
                this._btn_yes.activate(), this._btn_back.activate()
            }, e.prototype.deactivate = function () {
                this._btn_yes.deactivate(), this._btn_back.deactivate()
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._message1.destroy(), this._message2.destroy(), this._message3.destroy(), this._err_message.destroy(), this._btn_yes.dispose(), this._btn_back.dispose()
            }, e
        }(PIXI.Sprite);
    e.ConfirmView = _;
    var l = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._img = new PIXI.Sprite, e.addChild(e._img), e
        }
        return n(e, t), e.prototype.initialize = function (t) {
            91 == t ? (this._img.texture = s.ITEM_ILIST_IWASHI.getTexture(10), this._img.position.set(520, -31)) : 92 == t ? (this._img.texture = s.ITEM_ILIST_IWASHI.getTexture(12), this._img.position.set(551, -42)) : 93 == t && (this._img.texture = s.ITEM_ILIST_IWASHI.getTexture(11), this._img.position.set(518, -10))
        }, e
    }(PIXI.Container)
}