const function780 = function (t, e, i) {
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
            var e = t.call(this) || this, i = new PIXI.Sprite(o.REMODEL_MAIN.getTexture(17)),
                n = new PIXI.Sprite(o.REMODEL_MAIN.getTexture(16));
            i.position.set(-14, -14), i.alpha = 0, e.addChild(i, n), e.btnSoubi3 = n, e.btnSoubi3Light = i;
            var r = createjs.Tween.get(i).to({ alpha: 0 }).to({ alpha: 1 }, 1e3).to({ alpha: 0 }, 1e3);
            return r.loop = !0, r.play(null), e
        }

        return n(e, t), e.prototype.dispose = function () {
            createjs.Tween.removeTweens(this), this.btnSoubi3.texture = PIXI.Texture.EMPTY, this.btnSoubi3Light.texture = PIXI.Texture.EMPTY, this.btnSoubi3 = null, this.btnSoubi3Light = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.InUseMarker = r
}