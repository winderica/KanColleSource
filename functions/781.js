const function781 = function (t, e, i) {
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
    var o = i(3), r = function (t) {
        function e() {
            var e = t.call(this) || this;
            e.TYPE_SET = "typeset", e.TYPE_UNSET = "typeunset";
            var i = o.COMMON_MAIN.getTexture(35), n = o.COMMON_MAIN.getTexture(36);
            return e.listItem = i, e.listItemInUse = n, e
        }

        return n(e, t), e.prototype.update = function (t) {
            switch (this.texture = PIXI.Texture.EMPTY, t) {
                case this.TYPE_SET:
                    this.texture = this.listItemInUse;
                    break;
                case this.TYPE_UNSET:
                    this.texture = this.listItem
            }
        }, e.prototype.dispose = function () {
            this.texture = PIXI.Texture.EMPTY, this.listItem = null, this.listItemInUse = null, this.removeChildren()
        }, e
    }(PIXI.Sprite);
    e.ListHeader = r
}