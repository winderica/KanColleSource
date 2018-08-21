const function1074 = function (t, e, i) {
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
            return e._n100 = new s, e.addChild(e._n100), e._n010 = new s, e._n010.x = 18, e.addChild(e._n010), e._n001 = new s, e._n001.x = 36, e.addChild(e._n001), e
        }

        return n(e, t), e.prototype.update = function (t) {
            if (t < 0 || t > 999) this._n100.texture = PIXI.Texture.EMPTY, this._n010.texture = PIXI.Texture.EMPTY, this._n001.texture = PIXI.Texture.EMPTY; else {
                this._n100.update(Math.floor(t / 100));
                var e = t % 100;
                this._n010.update(Math.floor(e / 10)), e = t % 10, this._n001.update(e)
            }
        }, e
    }(PIXI.Container);
    e.DetailPanelNumbers = r;
    var s = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype.update = function (t) {
            if (t < 0 || t > 9) this.texture = PIXI.Texture.EMPTY; else {
                var e = [94, 95, 96, 97, 98, 99, 100, 101, 102, 103][t];
                this.texture = o.ALBUM_MAIN.getTexture(e)
            }
        }, e
    }(PIXI.Sprite)
}