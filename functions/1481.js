const function1481 = function (t, e, i) {
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
    var o = i(18), r = i(22), s = i(29), a = i(41), _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._img = new PIXI.Sprite, e.addChild(e._img), e
        }

        return n(e, t), e.prototype.initialize = function (t) {
            if (t == o.EVENT_AREA_ID) this._img.texture = a.SALLY_EVENT.getTexture(0); else switch (t) {
                case 1:
                    this._img.texture = s.SALLY_COMMON.getTexture(1);
                    break;
                case 2:
                    this._img.texture = s.SALLY_COMMON.getTexture(3);
                    break;
                case 3:
                    this._img.texture = s.SALLY_COMMON.getTexture(5);
                    break;
                case 4:
                    this._img.texture = s.SALLY_COMMON.getTexture(9);
                    break;
                case 5:
                    this._img.texture = s.SALLY_COMMON.getTexture(11);
                    break;
                case 6:
                    this._img.texture = s.SALLY_COMMON.getTexture(13);
                    break;
                case 7:
                    this._img.texture = s.SALLY_COMMON.getTexture(7);
                    break;
                default:
                    this._img.texture = PIXI.Texture.EMPTY
            }
            this._img.x = -Math.round(this._img.width / 2), this._img.y = -Math.round(this._img.height / 2)
        }, e
    }(r.Container);
    e.AreaIcon = _
}