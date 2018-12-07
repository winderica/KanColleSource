const function220 = function (t, e, i) {
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
            return e._onClick = function () {
                e.onClick()
            }, e.on(r.EventType.CLICK, e._onClick), e.interactive = e.buttonMode = !0, e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.removeAllListeners(r.EventType.CLICK), this.texture = PIXI.Texture.EMPTY, this.onClick = null
        }, e.prototype.update = function (t) {
            switch (t) {
                case 0:
                    this.texture = o.COMMON_MAIN.getTexture(48);
                    break;
                case 1:
                    this.texture = o.COMMON_MAIN.getTexture(47);
                    break;
                case 4:
                    this.texture = o.COMMON_MAIN.getTexture(49);
                    break;
                case 3:
                    this.texture = o.COMMON_MAIN.getTexture(50);
                    break;
                case 2:
                    this.texture = o.COMMON_MAIN.getTexture(51)
            }
        }, e
    }(PIXI.Sprite);
    e.ShipSortButton = s
}