const function1310 = function (t, e, i) {
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
    var o = i(19),
        r = i(1),
        s = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._airunit_count = 0, i._airunit_id = 0, i._complete = !1, i._onClick = function () {
                    null != i._cb_onClick && 0 != i.buttonMode && i._cb_onClick()
                }, i._cb_onClick = e, i._img = new PIXI.Sprite, i.addChild(i._img), i.interactive = !0, i
            }
            return n(e, t), Object.defineProperty(e.prototype, "complete", {
                get: function () {
                    return this._complete
                },
                set: function (t) {
                    this._complete = t, this.buttonMode = t, this._update()
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t) {
                this._airunit_count = t, this.on(r.EventType.CLICK, this._onClick)
            }, e.prototype.update = function (t) {
                this._airunit_count > 1 ? this._airunit_id = t : this._airunit_id = 0, this.complete = !1, this._update()
            }, e.prototype.dispose = function () {
                this.off(r.EventType.CLICK, this._onClick)
            }, e.prototype._update = function () {
                if (1 == this.complete) this._img.texture = o.MAP_COMMON.getTexture(180), this._img.position.set(0, 0);
                else {
                    switch (this._airunit_id) {
                        case 0:
                            this._img.texture = o.MAP_COMMON.getTexture(176);
                            break;
                        case 1:
                            this._img.texture = o.MAP_COMMON.getTexture(177);
                            break;
                        case 2:
                            this._img.texture = o.MAP_COMMON.getTexture(178);
                            break;
                        case 3:
                            this._img.texture = o.MAP_COMMON.getTexture(179);
                            break;
                        default:
                            this._img.texture = PIXI.Texture.EMPTY
                    }
                    this._img.position.set(11, 9)
                }
            }, e
        }(PIXI.Container);
    e.AirUnitAppointmentTitle = s
}