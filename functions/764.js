const function764 = function (t, e, i) {
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
    var o = i(765), r = i(51), s = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._mousedown = function (t, i) {
                e.mousedown(t, i)
            }, e._onClickDetach = function (t) {
                e.onClickDetach(t)
            }, e._onMouseUp = function (t) {
                e.onMouseUp(t)
            }, e._onMouseOut = function () {
                e.onMouseOut()
            };
            for (var i = new Array, n = new Array, s = 0; s < 5; s++) {
                var a = new o.SlotItemSlot(s);
                a.mousedown = e._mousedown, a.onClickDetach = e._onClickDetach, a.onMouseUp = e._onMouseUp, a.onMouseOut = e._onMouseOut;
                var _ = new o.ClearSlotItemSlot;
                _.y = a.y = r.RemodelConst.DETAIL_LISTITEM.HEIGHT * s + 6, i.push(a), n.push(_), e.addChild(_, a)
            }
            return e._slotItemSlots = i, e._clearSlotItemSlots = n, e
        }

        return n(e, t), Object.defineProperty(e.prototype, "slotItemSlots", {
            get: function () {
                return this._slotItemSlots
            }, enumerable: !0, configurable: !0
        }), e.prototype.clean = function () {
            for (var t = 0; t < this._slotItemSlots.length; t++) this._slotItemSlots[t].visible = !1;
            for (var t = 0; t < this._clearSlotItemSlots.length; t++) this._clearSlotItemSlots[t].visible = !0
        }, e.prototype.update = function (t, e, i, n, o) {
            var r = this._slotItemSlots[t], s = this._clearSlotItemSlots[t];
            r.empty(o), e && r.update(e, i, n, o), s.visible = !1, r.visible = !0
        }, e.prototype.hide = function (t) {
            for (var e = t, i = this._slotItemSlots.length; e < i; e++) this._slotItemSlots[e].visible = !1, this._clearSlotItemSlots[e].visible = !1
        }, e.prototype.dispose = function () {
            for (var t = 0; t < this._slotItemSlots.length; t++) this._slotItemSlots[t].dispose(), this._slotItemSlots[t] = null;
            for (var t = 0; t < this._clearSlotItemSlots.length; t++) this._clearSlotItemSlots[t].dispose(), this._clearSlotItemSlots[t] = null;
            this._slotItemSlots = null, this._clearSlotItemSlots = null, this.onClickDetach = this._onClickDetach = null, this.mousedown = this._mousedown = null, this.onMouseOut = this._onMouseOut = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.SlotItemSlotBox = s
}