const function796 = function (t, e, i) {
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
    var o = i(4),
        r = i(129),
        s = i(797),
        a = i(15),
        _ = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = new PIXI.Sprite(r.REMODEL_POWERUP.getTexture(16));
                e.textType = new o.TextBox(21, 16777215), e.textName = new o.TextBox(36, 16777215), e.textLevel = new o.TextBox(65, 16777215), e.starRate = new s.StarRate;
                var n = a.CreateRect.gradientLeftToRight(220, 50, .65, .9);
                return e.containerName = new PIXI.Container, e.containerName.mask = n, e.containerName.addChild(e.textName, n), e.textType.position.set(18, 8), e.containerName.position.set(18, 36), e.textLevel.position.set(230, 89), e.starRate.position.set(15, 165), e.textLevel.anchor.x = 1, e.addChild(i, e.textType, e.containerName, e.textLevel, e.starRate), e
            }
            return n(e, t), e.prototype.update = function (t, e, i, n) {
                this.containerName.cacheAsBitmap = !1, this.textType.text = t, this.textName.text = e, this.textLevel.text = "" + i, this.starRate.update(n), this.containerName.cacheAsBitmap = !0
            }, e.prototype.dispose = function () {
                this.removeChildren(), this.containerName.cacheAsBitmap = !1, this.containerName.mask = null, this.containerName.removeChildren(), this.starRate.dispose(), this.textType.destroy(), this.textName.destroy(), this.textLevel.destroy(), this.textType = null, this.textName = null, this.textLevel = null, this.starRate = null, this.containerName = null
            }, e
        }(PIXI.Container);
    e.ShipInfoBox = _
}