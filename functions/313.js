const function313 = function (t, e, i) {
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
    var o = i(21), r = i(687), s = function (t) {
        function e(e, i) {
            void 0 === i && (i = !1);
            var n = t.call(this) || this;
            n.maxSlot = e, n.emptyViews = [];
            for (var s = 0; s < e; s++) {
                var a = new PIXI.Sprite(o.COMMON_MAIN.getTexture(46));
                a.position.set(0, 47 * s), a.visible = !1, n.addChild(a), n.emptyViews.push(a)
            }
            n.normalViews = [];
            for (var s = 0; s < e; s++) {
                var _ = new r.SlotItemSlotView(i);
                _.position.set(0, 47 * s), _.visible = !1, n.addChild(_), n.normalViews.push(_)
            }
            return n
        }

        return n(e, t), e.prototype.dispose = function () {
            for (var t = 0; t < this.normalViews.length; t++) this.normalViews[t].dispose(), this.normalViews[t] = null;
            this.maxSlot = null, this.emptyViews = null, this.normalViews = null, this.removeChildren()
        }, e.prototype.update = function (t, e, i) {
            for (var n = t.getSlotViewMax(), o = 0; o < this.maxSlot; o++) {
                var r = e[o];
                o < t.slotNum ? (this.normalViews[o].visible = !0, this.emptyViews[o].visible = !1, i ? (this.normalViews[o].visible = !1, this.emptyViews[o].visible = !1, r ? (this.normalViews[o].visible = !0, this.normalViews[o].update(r.iconType, r.name, r.isPlane(), -1, r.level, r.skillLevel, r.isLocked())) : this.emptyViews[o].visible = !0) : r ? this.normalViews[o].update(r.iconType, r.name, r.isPlane(), t.getSlotitemTousai(o), r.level, r.skillLevel, r.isLocked()) : this.normalViews[o].clear()) : (this.normalViews[o].visible = !1, this.emptyViews[o].visible = o < n)
            }
        }, e
    }(PIXI.Container);
    e.SlotItemSlotContainer = s
}