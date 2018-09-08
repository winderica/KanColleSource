const function169 = function (t, e, i) {
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
    var o = i(1), r = i(1179), s = i(1180), a = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._onMouseOver = function () {
                i._canvas.scale.set(1), i._level.position.set(175, 34)
            }, i._onMouseOut = function () {
                i._canvas.scale.set(.9), i._level.position.set(165, 44)
            }, i._onClick = function () {
                null != i._cb_onClick && i._cb_onClick(i._candidate)
            }, i._cb_onClick = e, i._canvas = new PIXI.Sprite, i._canvas.position.set(113, 147), i.addChild(i._canvas), i._icon = new PIXI.Sprite, i.addChild(i._icon), i._level = new r.LevelStar, i.addChild(i._level), i._count = new s.RewardSelectDialogCount, i._count.position.set(158, 192), i.addChild(i._count), i._canvas.interactive = !0, i._onMouseOut(), i
        }

        return n(e, t), Object.defineProperty(e.prototype, "candidate", {
            get: function () {
                return this._candidate
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function (t) {
            this._candidate = t, this._initialize(), t.level > 0 && this._level.update(t.level), this._count.initialize(), t.count > 1 ? (this._count.update(t.count), this._count.visible = !0) : this._count.visible = !1
        }, e.prototype.activate = function () {
            1 != this._canvas.buttonMode && (this._canvas.buttonMode = !0, this._canvas.on(o.EventType.MOUSEOVER, this._onMouseOver), this._canvas.on(o.EventType.MOUSEOUT, this._onMouseOut), this._canvas.on(o.EventType.CLICK, this._onClick))
        }, e.prototype.deactivate = function () {
            this._canvas.buttonMode = !1, this._canvas.off(o.EventType.MOUSEOVER, this._onMouseOver), this._canvas.off(o.EventType.MOUSEOUT, this._onMouseOut), this._canvas.off(o.EventType.CLICK, this._onClick)
        }, e.prototype.dispose = function () {
            this.deactivate(), this._candidate = null, this._cb_onClick = null
        }, e
    }(PIXI.Container);
    e.RewardSelectDialogBtnBase = a
}