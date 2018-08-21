const function1109 = function (t, e, i) {
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
    var o = i(0), r = i(4), s = i(3), a = i(33), _ = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._message = new r.TextBox(18, 4999235), i._message.position.set(272, 74), i.addChild(i._message), i._icon = new PIXI.Sprite, i._icon.position.set(149, 74), i.addChild(i._icon), i._btn_plan = new a.BtnBase(1, e), i._btn_plan.position.set(21, 207), i.addChild(i._btn_plan), i._btn_mat = new a.BtnBase(0, e), i._btn_mat.position.set(332, 188), i.addChild(i._btn_mat), i._btn_rev = new a.BtnBase(2, e), i._btn_rev.position.set(332, 237), i.addChild(i._btn_rev), i._btn_back = new a.BtnBase(-1, e), i._btn_back.position.set(585, 213), i.addChild(i._btn_back), i
        }

        return n(e, t), e.prototype.initialize = function (t) {
            this.texture = s.ITEM_ILIST_MEDAL.getTexture(7), this._message.text = "\u300c\u8cc7\u6e90\u300d\u3084\u300c\u6539\u4fee\u8cc7\u6750\u300d\u306b\u4ea4\u63db\u3067\u304d\u307e\u3059\u3002\n\u307e\u305f\u3001\u52f2\u7ae04\u500b\u3092\u300c\u6539\u88c5\u8a2d\u8a08\u56f3\u300d1\u679a\u306b\n\u4ea4\u63db\u53ef\u80fd\u3067\u3059\u3002", this._icon.texture = o.default.resources.getUseitem(57, 0);
            var e = s.ITEM_ILIST_MEDAL.getTexture(2), i = s.ITEM_ILIST_MEDAL.getTexture(3);
            this._btn_plan.initialize(e, i), this._btn_plan.enabled = t >= 4, e = s.ITEM_ILIST_MEDAL.getTexture(4), this._btn_mat.initialize(e), e = s.ITEM_ILIST_MEDAL.getTexture(5), this._btn_rev.initialize(e), e = s.ITEM_ILIST_MEDAL.getTexture(1), this._btn_back.initialize(e)
        }, e.prototype.activate = function () {
            this._btn_plan.activate(), this._btn_mat.activate(), this._btn_rev.activate(), this._btn_back.activate()
        }, e.prototype.deactivate = function () {
            this._btn_plan.deactivate(), this._btn_mat.deactivate(), this._btn_rev.deactivate(), this._btn_back.deactivate()
        }, e.prototype.dispose = function () {
            this._btn_plan.dispose(), this._btn_mat.dispose(), this._btn_rev.dispose(), this._btn_back.dispose()
        }, e
    }(PIXI.Sprite);
    e.TopView = _
}