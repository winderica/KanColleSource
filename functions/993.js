const function993 = function (t, e, i) {
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
    var o = i(26),
        r = i(1),
        s = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._activated = !1, i._selected = !1, i._onClick = function () {
                    null != i._cb_onClick && i._cb_onClick(i._airunit_id)
                }, i._cb_onClick = e, i._bg = new PIXI.Sprite, i.addChild(i._bg), i._label = new PIXI.Sprite, i._label.position.set(8, 11), i.addChild(i._label), i.interactive = !0, i
            }
            return n(e, t), Object.defineProperty(e.prototype, "selected", {
                get: function () {
                    return this._selected
                },
                set: function (t) {
                    this._selected != t && (this._selected = t, 1 == this._activated && 0 == this._selected ? this.activate() : this._deactivate(), 1 == this.visible && this.update())
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "airunit_id", {
                get: function () {
                    return this._airunit_id
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t, e) {
                if (this._airunit_id = t, t > e) return void(this.visible = !1);
                if (1 == e && 1 == t) this._label.texture = o.SALLY_AIRUNIT.getTexture(119);
                else switch (t) {
                    case 1:
                        this._label.texture = o.SALLY_AIRUNIT.getTexture(120);
                        break;
                    case 2:
                        this._label.texture = o.SALLY_AIRUNIT.getTexture(121);
                        break;
                    case 3:
                        this._label.texture = o.SALLY_AIRUNIT.getTexture(122);
                        break;
                    default:
                        this._label.texture = PIXI.Texture.EMPTY
                }
                this.update(), this.visible = !0
            }, e.prototype.update = function () {
                1 == this._selected ? this._bg.texture = o.SALLY_AIRUNIT.getTexture(125) : this._bg.texture = o.SALLY_AIRUNIT.getTexture(124)
            }, e.prototype.activate = function () {
                this._activated = !0, 1 != this._selected && 1 != this.buttonMode && (this.buttonMode = !0, this.on(r.EventType.CLICK, this._onClick))
            }, e.prototype.deactivate = function () {
                this._activated = !1, this._deactivate()
            }, e.prototype.dispose = function () {
                this._deactivate(), this._cb_onClick = null
            }, e.prototype._deactivate = function () {
                this.buttonMode = !1, this.off(r.EventType.CLICK, this._onClick)
            }, e
        }(PIXI.Container);
    e.AirUnitPanelTab = s
}