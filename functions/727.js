const function727 = function (t, e, i) {
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
    var o = i(10),
        r = i(1),
        s = i(8),
        a = function (t) {
            function e(e, i, n) {
                var a = t.call(this, .1) || this;
                a._cbDrop = n, a._drag = null, a._isPosible = !1, a._onMove = function (t) {
                    a._flagIcon.position.set(t.data.global.x, t.data.global.y);
                    var e = a._reactionArea,
                        i = t.data.getLocalPosition(e);
                    a._isPosible = e.hitArea.contains(i.x, i.y)
                }, a._onUp = function () {
                    a._dispose(), a._cbDrop(a._isPosible)
                }, a._onOut = function () {
                    a._dispose(), a._cbDrop(!1)
                }, a._drag = new PIXI.Container, a._flagIcon = new PIXI.Sprite(o.COMMON_MISC.getTexture(77)), a._flagIcon.anchor.set(.5), a._flagIcon.position.set(i.x, i.y);
                var _ = a._flagIcon.width,
                    u = a._flagIcon.height;
                return a._reactionArea = new s.AreaBox(0, 16777215, _, u), a._reactionArea.hitArea = new PIXI.Rectangle(0, 0, _, u), a._reactionArea.position.set(e.x, e.y), a._drag.addChild(a._reactionArea, a._flagIcon), a.addChild(a._drag), a.on(r.EventType.MOUSEMOVE, a._onMove), a.on(r.EventType.MOUSEOUT, a._onOut), a.on(r.EventType.MOUSEUP, a._onUp), a
            }
            return n(e, t), e.prototype._dispose = function () {
                this.off(r.EventType.MOUSEMOVE, this._onMove), this.off(r.EventType.MOUSEOUT, this._onOut), this.off(r.EventType.MOUSEUP, this._onUp)
            }, e
        }(s.AreaBox);
    e.CombineDragging = a
}