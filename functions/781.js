const function781 = function (t, e, i) {
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
        r = i(782),
        s = i(51),
        a = function (t) {
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
                e._slotItemSlots = new Array, e._clearSlotItemSlots = new Array;
                for (var i = o.COMMON_MAIN.getTexture(46), n = 0; n < 5; n++) {
                    var a = new r.SlotItemSlot(n);
                    a.mousedown = e._mousedown, a.onClickDetach = e._onClickDetach, a.onMouseUp = e._onMouseUp, a.onMouseOut = e._onMouseOut;
                    var _ = new PIXI.Sprite(i);
                    _.y = a.y = s.RemodelConst.DETAIL_LISTITEM.HEIGHT * n + 6, e._slotItemSlots.push(a), e._clearSlotItemSlots.push(_), e.addChild(_, a)
                }
                return e
            }
            return n(e, t), Object.defineProperty(e.prototype, "slotItemSlots", {
                get: function () {
                    return this._slotItemSlots
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.clean = function () {
                for (var t = 0; t < this._slotItemSlots.length; t++) this._slotItemSlots[t].visible = !1;
                for (var t = 0; t < this._clearSlotItemSlots.length; t++) this._clearSlotItemSlots[t].visible = !0
            }, e.prototype.update = function (t, e, i, n, o) {
                var r = this._slotItemSlots[t],
                    s = this._clearSlotItemSlots[t];
                r.empty(o), e && r.update(e, i, n, o), s.visible = !1, r.visible = !0
            }, e.prototype.hide = function (t) {
                for (var e = t, i = this._slotItemSlots.length; e < i; e++) this._slotItemSlots[e].visible = !1, this._clearSlotItemSlots[e].visible = !1
            }, e.prototype.dispose = function () {
                for (var t = 0; t < this._slotItemSlots.length; t++) this._slotItemSlots[t].dispose(), this._slotItemSlots[t] = null;
                for (var t = 0; t < this._clearSlotItemSlots.length; t++) this._clearSlotItemSlots[t] = null;
                this._slotItemSlots = null, this._clearSlotItemSlots = null, this.onClickDetach = null, this.mousedown = null, this.onMouseOut = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.SlotItemSlotBox = a
}