const function1285 = function (t, e, i) {
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
    var o = i(20), r = i(1), s = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._handle = -1, n._onClick = function () {
                if (-1 != n._handle) {
                    if (clearTimeout(n._handle), n._handle = -1, null == n._cb_onDoubleClick) return;
                    n._cb_onDoubleClick(n._no)
                } else n._handle = setTimeout(function () {
                    n._handle = -1, null != n._cb_onClick && n._cb_onClick(n._no)
                }, 300)
            }, n._cb_onClick = e, n._cb_onDoubleClick = i, n.beginFill(65280, 0), n.drawCircle(0, 0, 15), n.endFill(), n._state = 0, n._img = new PIXI.Sprite, n._img.position.set(-42, -42), n.addChild(n._img), n.interactive = !0, n
        }

        return n(e, t), Object.defineProperty(e.prototype, "no", {
            get: function () {
                return this._no
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function (t) {
            this._no = t, this.buttonMode = !0, this.on(r.EventType.CLICK, this._onClick)
        }, e.prototype.dispose = function () {
            this.buttonMode = !1, this.off(r.EventType.CLICK, this._onClick), this._cb_onClick = null, this._cb_onDoubleClick = null
        }, e.prototype.update = function (t) {
            switch (t) {
                case 1:
                    this._img.texture = o.MAP_COMMON.getTexture(147);
                    break;
                case 2:
                    this._img.texture = o.MAP_COMMON.getTexture(148);
                    break;
                case 3:
                    this._img.texture = o.MAP_COMMON.getTexture(149);
                    break;
                default:
                    this._img.texture = PIXI.Texture.EMPTY
            }
        }, e
    }(PIXI.Graphics);
    e.AirUnitAppointmentPoint = s
}