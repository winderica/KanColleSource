const function114 = function (t, e, i) {
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
    var o = i(1), r = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._onMouseOut = function (t) {
                n.onMouseOut && n.onMouseOut(t), n.texture = n.textureDefault
            }, n._onMouseOver = function (t) {
                n.onMouseOver && n.onMouseOver(t), n.texture = n.textureHover
            }, n.textureDefault = e, n.textureHover = i, n.texture = n.textureDefault, n.on(o.EventType.MOUSEOVER, n._onMouseOver), n.on(o.EventType.MOUSEOUT, n._onMouseOut), n.interactive = n.buttonMode = !0, n
        }

        return n(e, t), e.prototype.reset = function () {
            this.texture = this.textureDefault
        }, e.prototype.dispose = function () {
            this.removeAllListeners(o.EventType.CLICK), this.removeAllListeners(o.EventType.MOUSEOVER), this.removeAllListeners(o.EventType.MOUSEOUT), this.texture = PIXI.Texture.EMPTY, this.onClick = null, this.onMouseOut = null, this.onMouseOver = null, this.textureDefault = null, this.textureHover = null, this.removeChildren()
        }, e
    }(PIXI.Sprite);
    e.SimpleButton = r
}