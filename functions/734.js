const function734 = function (t, e, i) {
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
    var o = i(0), r = i(1), s = i(8), a = i(313), _ = [];
    a.ShipAreaPosition.forEach(function (t) {
        _.push([t[0] + a.ShipOffsetPosition[0], t[1] + a.ShipOffsetPosition[1]])
    });
    var u = function (t) {
        function e(e, i, n, s, a, u) {
            var l = t.call(this, 0) || this;
            return l._beforeIndex = e, l._memShipId = i, l._maskMax = n, l._inDragging = s, l._cbOnDrop = a, l._end = u, l._drag = null, l._shipSlotMaskLayers = [], l._afterIndex = -1, l._onMove = function (t) {
                var e = t.data.global;
                if (null == l._drag) {
                    l._inDragging(!0), l._drag = new PIXI.Container;
                    for (var i = 0; i < l._maskMax; i++) {
                        var n = new PIXI.Graphics;
                        n.beginFill(16777215, .6).moveTo(0, 15).lineTo(14.5, 0).lineTo(480, 0).lineTo(495.5, 17.5).lineTo(495.5, 141).lineTo(480, 158).lineTo(14, 158).lineTo(0, 143).lineTo(0, 15).endFill(), n.alpha = 0, n.hitArea = new PIXI.Rectangle(0, 0, n.width, n.height);
                        var r = _[i];
                        n.position.set(r[0], r[1]), l._drag.addChild(n), l._shipSlotMaskLayers.push(n)
                    }
                    l._shipSlotMaskLayers[l._beforeIndex].alpha = 1;
                    var s = o.default.model.ship.get(l._memShipId);
                    l._shipBanner = new PIXI.Sprite, l._shipBanner.anchor.set(.5), l._shipBanner.texture = o.default.resources.getShip(s.mstID, s.isDamaged(), "banner"), l._shipBanner.position.set(e.x, e.y), l._drag.addChild(l._shipBanner), l._afterIndex = l._beforeIndex, l.addChild(l._drag)
                } else {
                    l._shipBanner.position.set(e.x, e.y);
                    for (var a = -1, i = 0, u = l._shipSlotMaskLayers.length; i < u; i++) {
                        var c = l._shipSlotMaskLayers[i], h = t.data.getLocalPosition(c);
                        1 == c.hitArea.contains(h.x, h.y) ? (c.alpha = 1, a = i) : c.alpha = 0
                    }
                    l._afterIndex = a
                }
            }, l._onOut = function () {
                l._inDragging(!1), l._dispose()
            }, l._onUp = function () {
                if (l._inDragging(!1), null == l._drag) return void l._dispose();
                l._cbOnDrop(l._beforeIndex, l._afterIndex, l._memShipId), l._dispose()
            }, l.on(r.EventType.MOUSEMOVE, l._onMove), l.on(r.EventType.MOUSEOUT, l._onOut), l.on(r.EventType.MOUSEUP, l._onUp), l
        }

        return n(e, t), e.prototype._dispose = function () {
            this.off(r.EventType.MOUSEMOVE, this._onMove), this.off(r.EventType.MOUSEOUT, this._onOut), this.off(r.EventType.MOUSEUP, this._onUp), this.interactive = !1, null != this._drag && this._drag.removeChildren(), this._shipBanner = null, this._shipSlotMaskLayers.forEach(function (t) {
                null
            }), this._shipSlotMaskLayers = null, this.removeChildren(), this._drag = null, this._inDragging = null, this._cbOnDrop = null, this._end()
        }, e
    }(s.AreaBox);
    e.ShipDragging = u
}