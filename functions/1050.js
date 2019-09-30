const function1050 = function (t, e, i) {
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
    var o = i(41),
        r = i(1),
        s = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._activated = !1, i._selected = !1, i._onMouseOver = function () {
                    i._update(!0)
                }, i._onMouseOut = function () {
                    i._update(!1)
                }, i._onClick = function () {
                    null != i.onClick && i.onClick(i._area_id)
                }, i._area_id = e, i._light = new PIXI.Sprite, i.addChild(i._light), i
            }
            return n(e, t), Object.defineProperty(e.prototype, "area_id", {
                get: function () {
                    return this._area_id
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "selected", {
                get: function () {
                    return this._selected
                },
                set: function (t) {
                    this._selected = t, 1 == this._selected ? this.deactivate() : this.activate(), this._update(!1)
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                this.texture = o.SALLY_EVENT.getTexture(2), this._light.texture = o.SALLY_EVENT.getTexture(3), this._update(!1)
            }, e.prototype.activate = function () {
                1 != this._activated && (this._activated = !0, this.interactive = this.buttonMode = !0, this.on(r.EventType.MOUSEOVER, this._onMouseOver), this.on(r.EventType.MOUSEOUT, this._onMouseOut), this.on(r.EventType.CLICK, this._onClick))
            }, e.prototype.deactivate = function () {
                this._activated = !1, this.interactive = this.buttonMode = !1, this.off(r.EventType.MOUSEOVER, this._onMouseOver), this.off(r.EventType.MOUSEOUT, this._onMouseOut), this.off(r.EventType.CLICK, this._onClick)
            }, e.prototype.dispose = function () {
                this._stopTween(), this.deactivate(), this.onClick = null
            }, e.prototype._update = function (t) {
                this.selected || t ? (this._light.visible = !0, this._stopTween()) : this._startTween()
            }, e.prototype._startTween = function () {
                null == this._t && (this._light.alpha = 1, this._t = createjs.Tween.get(this._light, {
                    loop: !0
                }).to({
                    alpha: 0
                }, 700).to({
                    alpha: 1
                }, 700))
            }, e.prototype._stopTween = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e
        }(PIXI.Sprite);
    e.ExpeditionEventAreaIconBtn = s
}