const function1144 = function (t, e, i) {
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
        s = i(3),
        a = i(33),
        _ = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._message = new r.TextBox(18, 4999235), i._message.position.set(174, 47), i.addChild(i._message), i._icon = new PIXI.Sprite, i._icon.position.set(303, 122), i.addChild(i._icon), i._arrow = new r.TextBox(18, 4999235), i._arrow.text = "\u2192", i._arrow.position.set(425, 150), i.addChild(i._arrow), i._from = new r.TextBox(18, 4999235), i._from.position.set(380, 152), i.addChild(i._from), i._tobe = new r.TextBox(18, 4999235), i._tobe.position.set(455, 152), i.addChild(i._tobe), i._btn_yes = new a.BtnBase(0, e), i._btn_yes.position.set(191, 219), i.addChild(i._btn_yes), i._btn_back = new a.BtnBase(-1, e), i._btn_back.position.set(399, 219), i.addChild(i._btn_back), i
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this.texture = s.ITEM_ILIST_MEDAL_KOU.getTexture(2), this._message.text = "\u7269\u8cc7\u3068\u4ea4\u63db\u3059\u308b\u3068\u3001\u7532\u7a2e\u52f2\u7ae0\xd71\u304c\u6d88\u3048\u3066\u3057\u307e\u3044\u307e\u3059\u3002\n\u305d\u308c\u3067\u3082\u4ea4\u63db\u3057\u307e\u3059\u304b\uff1f", this._icon.texture = o.default.resources.getUseitem(61, 0), this._from.text = t.toString(), this._from.x = 420 - this._from.width, this._tobe.text = (t - 1).toString();
                var e = s.ITEM_ILIST_MEDAL_KOU.getTexture(1);
                this._btn_yes.initialize(e), e = s.ITEM_ILIST_MEDAL_KOU.getTexture(0), this._btn_back.initialize(e)
            }, e.prototype.activate = function () {
                this._btn_yes.activate(), this._btn_back.activate()
            }, e.prototype.deactivate = function () {
                this._btn_yes.deactivate(), this._btn_back.deactivate()
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._message.destroy(), this._arrow.destroy(), this._from.destroy(), this._tobe.destroy(), this._btn_yes.dispose(), this._btn_back.dispose()
            }, e
        }(PIXI.Sprite);
    e.ConfirmView = _
}