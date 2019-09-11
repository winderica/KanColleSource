const function1127 = function (t, e, i) {
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
        r = i(3),
        s = i(33),
        a = i(33),
        _ = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._bg = new PIXI.Sprite, i._bg.position.set(147, 267), i.addChild(i._bg), i._btn_all = new a.BtnBase(41, e), i._btn_all.position.set(332, 305), i.addChild(i._btn_all), i._btn_half = new a.BtnBase(42, e), i._btn_half.position.set(537, 305), i.addChild(i._btn_half), i._btn_only10 = new a.BtnBase(43, e), i._btn_only10.position.set(744, 305), i.addChild(i._btn_only10), i._btn_back = new a.BtnBase(-1, e), i._btn_back.position.set(972, 402), i.addChild(i._btn_back), i
            }
            return n(e, t), e.prototype.initialize = function (t) {
                var e, i;
                e = r.ITEM_FSHOP.getTexture(52), this._bg.texture = e, e = o.ITEM_ILIST.getTexture(4), this._btn_all.initialize(e), e = o.ITEM_ILIST.getTexture(5), i = o.ITEM_ILIST.getTexture(6), this._btn_half.initialize(e, i), this._btn_half.enabled = t > 1, e = o.ITEM_ILIST.getTexture(7), i = o.ITEM_ILIST.getTexture(8), this._btn_only10.initialize(e, i), this._btn_only10.enabled = t >= 10, e = r.ITEM_FSHOP.getTexture(1), this._btn_back.initialize(e)
            }, e.prototype.activate = function () {
                this._btn_all.activate(), this._btn_half.activate(), this._btn_only10.activate(), this._btn_back.activate()
            }, e.prototype.deactivate = function () {
                this._btn_all.deactivate(), this._btn_half.deactivate(), this._btn_only10.deactivate(), this._btn_back.deactivate()
            }, e.prototype.dispose = function () {
                this._btn_all.dispose(), this._btn_half.dispose(), this._btn_only10.dispose(), this._btn_back.dispose()
            }, e
        }(s.DialogBase);
    e.FBoxUseDialog = _
}