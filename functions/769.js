const function769 = function (t, e, i) {
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
    var o = i(3), r = i(1), s = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onClick = function () {
                e.onClick()
            }, e._onMouseOver = function () {
                e.extensionPopUp.alpha = 1
            }, e._onMouseOut = function () {
                e.extensionPopUp.alpha = 0
            };
            var i = new PIXI.Graphics;
            i.beginFill(0, 0), i.drawRect(0, 0, 330, 180), i.endFill();
            var n = new a;
            return n.alpha = 0, n.position.set(113, 0), i.addListener(r.EventType.MOUSEOVER, e._onMouseOver), i.addListener(r.EventType.MOUSEOUT, e._onMouseOut), i.addListener(r.EventType.CLICK, e._onClick), i.renderable = !1, i.interactive = i.buttonMode = !0, e.addChild(i, n), e.extensionPopUp = n, e.clickArea = i, e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.extensionPopUp.dispose(), this.onClick = this._onClick = null, this._onMouseOut = null, this._onMouseOver = null, this.extensionPopUp = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.ExtensionButton = s;
    var a = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.texture = o.REMODEL_MAIN.getTexture(36), e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.texture = PIXI.Texture.EMPTY
        }, e
    }(PIXI.Sprite)
}