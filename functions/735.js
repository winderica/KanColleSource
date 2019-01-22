const function735 = function (t, e, i) {
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
        r = i(1),
        s = i(8),
        a = i(315),
        _ = [];
    a.ShipAreaPosition.forEach(function (t) {
        _.push([t[0] + a.ShipOffsetPosition[0], t[1] + a.ShipOffsetPosition[1]])
    });
    var l = function (t) {
        function e(e, i, n, s, a, l) {
            var u = t.call(this, 0) || this;
            return u._beforeIndex = e, u._memShipId = i, u._maskMax = n, u._inDragging = s, u._cbOnDrop = a, u._end = l, u._drag = null, u._shipSlotMaskLayers = [], u._afterIndex = -1, u._onMove = function (t) {
                var e = t.data.global;
                if (null == u._drag) {
                    u._inDragging(!0), u._drag = new PIXI.Container;
                    for (var i = 0; i < u._maskMax; i++) {
                        var n = new PIXI.Graphics;
                        n.beginFill(16777215, .6).moveTo(0, 15).lineTo(14.5, 0).lineTo(480, 0).lineTo(495.5, 17.5).lineTo(495.5, 141).lineTo(480, 158).lineTo(14, 158).lineTo(0, 143).lineTo(0, 15).endFill(), n.alpha = 0, n.hitArea = new PIXI.Rectangle(0, 0, n.width, n.height);
                        var r = _[i];
                        n.position.set(r[0], r[1]), u._drag.addChild(n), u._shipSlotMaskLayers.push(n)
                    }
                    u._shipSlotMaskLayers[u._beforeIndex].alpha = 1;
                    var s = o.default.model.ship.get(u._memShipId);
                    u._shipBanner = new PIXI.Sprite, u._shipBanner.anchor.set(.5), u._shipBanner.texture = o.default.resources.getShip(s.mstID, s.isDamaged(), "banner"), u._shipBanner.position.set(e.x, e.y), u._drag.addChild(u._shipBanner), u._afterIndex = u._beforeIndex, u.addChild(u._drag)
                } else {
                    u._shipBanner.position.set(e.x, e.y);
                    for (var a = -1, i = 0, l = u._shipSlotMaskLayers.length; i < l; i++) {
                        var c = u._shipSlotMaskLayers[i],
                            h = t.data.getLocalPosition(c);
                        1 == c.hitArea.contains(h.x, h.y) ? (c.alpha = 1, a = i) : c.alpha = 0
                    }
                    u._afterIndex = a
                }
            }, u._onOut = function () {
                u._inDragging(!1), u._dispose()
            }, u._onUp = function () {
                if (u._inDragging(!1), null == u._drag) return void u._dispose();
                u._cbOnDrop(u._beforeIndex, u._afterIndex, u._memShipId), u._dispose()
            }, u.on(r.EventType.MOUSEMOVE, u._onMove), u.on(r.EventType.MOUSEOUT, u._onOut), u.on(r.EventType.MOUSEUP, u._onUp), u
        }
        return n(e, t), e.prototype._dispose = function () {
            this.off(r.EventType.MOUSEMOVE, this._onMove), this.off(r.EventType.MOUSEOUT, this._onOut), this.off(r.EventType.MOUSEUP, this._onUp), this.interactive = !1, null != this._drag && this._drag.removeChildren(), this._shipBanner = null, this._shipSlotMaskLayers.forEach(function (t) {
                null
            }), this._shipSlotMaskLayers = null, this.removeChildren(), this._drag = null, this._inDragging = null, this._cbOnDrop = null, this._end()
        }, e
    }(s.AreaBox);
    e.ShipDragging = l
}