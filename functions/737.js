const function737 = function (t, e, i) {
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
    var o = i(3), r = i(1), s = i(8), a = i(0), _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._canMouseOver = !1, e._onMouseOver = function () {
                e._canMouseOver = !0, e.onMouseOver(), e._supplyAllOn.alpha = 1, e._clickArea.interactive = e._clickArea.buttonMode = !0
            }, e._onMouseOut = function () {
                e.onMouseOut(), e._supplyAllOn.alpha = 0, e._clickArea.interactive = e._clickArea.buttonMode = !1
            }, e._onClick = function () {
                e.onClick()
            }, e._onTouchDown = function () {
                e._canMouseOver || (e._touchActivate(), e.onMouseOver(), e._supplyAllOn.alpha = 1)
            }, e._touchActivate = function () {
                e._guardLayer = new s.AreaBox(0), e._touchArea = new s.AreaBox(0, 0, e._clickArea.width, e._clickArea.height), e._touchArea.hitArea = new PIXI.Rectangle(0, 0, e._clickArea.width, e._clickArea.height);
                var t = e._clickArea.getGlobalPosition();
                e._touchArea.position.set(t.x, t.y), e._guardLayer.addChild(e._touchArea), a.default.view.overLayer.addChild(e._guardLayer), e._guardLayer.on(r.EventType.MOUSEMOVE, e._onTouchMove), e._guardLayer.on(r.EventType.MOUSEUP, e._onTouchUp)
            }, e._onTouchMove = function (t) {
                var i = t.data.getLocalPosition(e._touchArea);
                1 === e._supplyAllOn.alpha && !1 === e._touchArea.hitArea.contains(i.x, i.y) && (e.onMouseOut(), e._supplyAllOn.alpha = 0)
            }, e._onTouchUp = function () {
                1 === e._supplyAllOn.alpha && e.onClick(), e._touchDeactivate()
            }, e._touchDeactivate = function () {
                e._guardLayer.off(r.EventType.MOUSEMOVE, e._onTouchMove), e._guardLayer.off(r.EventType.MOUSEUP, e._onTouchUp), e._guardLayer.removeChildren(), e._touchArea = null, a.default.view.overLayer.removeChild(e._guardLayer), e._guardLayer = null
            }, e._supplyAllOff = new PIXI.Sprite(o.SUPPLY_MAIN.getTexture(23)), e._supplyAllOn = new PIXI.Sprite(o.SUPPLY_MAIN.getTexture(24)), e._clickArea = new PIXI.Graphics, e._clickArea.beginFill(0, 0), e._clickArea.drawRect(0, 0, 62, 62), e._clickArea.endFill(), e._supplyAllOn.position.set(-26, -26), e._clickArea.position.set(-15, -15), e.addChild(e._supplyAllOff, e._supplyAllOn, e._clickArea), e._supplyAllOff.on(r.EventType.MOUSEOVER, e._onMouseOver), e._supplyAllOff.on(r.EventType.MOUSEDOWN, e._onTouchDown), e._clickArea.on(r.EventType.MOUSEOUT, e._onMouseOut), e._clickArea.on(r.EventType.CLICK, e._onClick), e
        }

        return n(e, t), e.prototype.dispose = function () {
            this._supplyAllOff.texture = PIXI.Texture.EMPTY, this._supplyAllOn.texture = PIXI.Texture.EMPTY, this._clickArea.clear(), this._supplyAllOff.off(r.EventType.MOUSEOVER, this._onMouseOver), this._supplyAllOff.off(r.EventType.MOUSEDOWN, this._onTouchDown), this._clickArea.off(r.EventType.MOUSEOUT, this._onMouseOut), this._clickArea.off(r.EventType.CLICK, this._onClick), this.onMouseOver = this._onMouseOver = null, this.onMouseOut = this._onMouseOut = null, this.onClick = this._onClick = null, this._supplyAllOff = null, this._supplyAllOn = null, this._clickArea = null, this._guardLayer = null, this._touchArea = null, this.removeChildren()
        }, e.prototype.updateClickable = function (t) {
            this._clickArea.interactive = this._clickArea.buttonMode = !1, this._supplyAllOff.interactive = this._supplyAllOff.buttonMode = !1, this._supplyAllOn.alpha = 0, this._clickArea.visible = !1, t && (this._supplyAllOff.interactive = this._supplyAllOff.buttonMode = !0, this._clickArea.visible = !0)
        }, e
    }(PIXI.Container);
    e.SupplyAllButton = _
}