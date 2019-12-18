const function872 = function (t, e, i) {
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
        r = i(1),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._onMouseOver = function () {
                    e.buttonCardSelect.alpha = 1
                }, e._onMouseOut = function () {
                    e.buttonCardSelect.alpha = 0
                }, e._onClick = function () {
                    e.onClick(e.memDockId)
                };
                var i = new PIXI.Sprite(o.REPAIR_MAIN.getTexture(10)),
                    n = new PIXI.Sprite(o.REPAIR_MAIN.getTexture(1));
                return n.position.set(60, 30), n.addListener(r.EventType.MOUSEOVER, e._onMouseOver), n.addListener(r.EventType.MOUSEOUT, e._onMouseOut), n.addListener(r.EventType.CLICK, e._onClick), n.interactive = n.buttonMode = !0, n.alpha = 0, e.addChild(i, n), e.buttonCardSelect = n, e.background = i, e
            }
            return n(e, t), e.prototype.update = function (t) {
                this.memDockId = t
            }, e.prototype.dispose = function () {
                this.onClick = null, this.background.texture = PIXI.Texture.EMPTY, this.buttonCardSelect.texture = PIXI.Texture.EMPTY, this.buttonCardSelect.removeAllListeners(r.EventType.MOUSEOVER), this.buttonCardSelect.removeAllListeners(r.EventType.MOUSEOUT), this.buttonCardSelect.removeAllListeners(r.EventType.CLICK), this.background = null, this.buttonCardSelect = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.EmptyDock = s
}