const function321 = function (t, e, i) {
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
    var o = i(21),
        r = i(716),
        s = function (t) {
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
            }, e.prototype.updateSlot = function (t, e) {
                for (var i = t.getSlotViewMax(), n = 0; n < this.maxSlot; n++) {
                    var o = e[n];
                    n < t.slotNum ? (this.normalViews[n].visible = !0, this.emptyViews[n].visible = !1, o ? this.normalViews[n].update(o.iconType, o.name, o.isPlane(), t.getSlotitemTousai(n), o.level, o.skillLevel, o.isLocked()) : this.normalViews[n].clear()) : (this.normalViews[n].visible = !1, this.emptyViews[n].visible = n < i)
                }
            }, e.prototype.updateExSlot = function (t) {
                this.normalViews[0].visible = !1, this.emptyViews[0].visible = !1, t ? (this.normalViews[0].visible = !0, this.normalViews[0].update(t.iconType, t.name, t.isPlane(), -1, t.level, t.skillLevel, t.isLocked())) : this.emptyViews[0].visible = !0
            }, e
        }(PIXI.Container);
    e.SlotItemSlotContainer = s
}