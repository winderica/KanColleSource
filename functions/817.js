const function817 = function (t, e, i) {
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
            e._onClickBack = function () {
                e.onClickBack()
            };
            var i = new PIXI.Sprite(o.REMODEL_MAIN.getTexture(48)),
                n = new PIXI.Sprite(o.REMODEL_MAIN.getTexture(0));
            return n.interactive = n.buttonMode = !0, n.addListener(r.EventType.CLICK, e._onClickBack), n.position.set(221, 206), e.addChild(i, n), e.buttonBack = n, e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.buttonBack.texture = PIXI.Texture.EMPTY, this.buttonBack.removeAllListeners(r.EventType.CLICK), this.onClickBack = this._onClickBack = null, this.buttonBack = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.MarriageAlert = s
}