const function797 = function (t, e, i) {
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
        r = i(3),
        s = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n.textureNormalFrame = r.REMODEL_POWERUP.getTexture(e), n.textureMaxFrame = r.REMODEL_POWERUP.getTexture(i), n.textBefore = new o.TextBox(30, 5523516), n.textAfter = new o.TextBox(30, 5523516), n.textMax = new PIXI.Sprite(r.REMODEL_POWERUP.getTexture(41)), n.textBefore.anchor.x = 0, n.textAfter.anchor.x = 0, n.textMax.anchor.x = 0, n.textMax.position.set(233 - Math.floor(n.textMax.width / 2), 6), n.textMax.visible = !1, n.addChild(n.textBefore, n.textAfter, n.textMax), n
            }
            return n(e, t), e.prototype.update = function (t, e, i) {
                this.textBefore.text = t.toString(), this.textAfter.text = e.toString(), this.textMax.visible = !1, t == e || i ? this.textAfter.style.fill = 5523516 : (this.textAfter.style.fill = 1949120, this.textMax.visible = !0), this.texture = i ? this.textureMaxFrame : this.textureNormalFrame, this.textBefore.position.set(108 + Math.floor(34.0125 - this.textBefore.width / 2), 14), this.textAfter.position.set(203 + Math.floor(31.5 - this.textAfter.width / 2), 14)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this.textBefore.destroy(), this.textAfter.destroy(), this.textBefore = null, this.textBefore = null, this.textAfter = null, this.textureNormalFrame = null, this.textureMaxFrame = null
            }, e
        }(PIXI.Sprite),
        a = function (t) {
            function e() {
                return t.call(this, 30, 31) || this
            }
            return n(e, t), e
        }(s);
    e.KaryokuBeforeAfterConfirm = a;
    var _ = function (t) {
        function e() {
            return t.call(this, 32, 33) || this
        }
        return n(e, t), e
    }(s);
    e.RaisouBeforeAfterConfirm = _;
    var l = function (t) {
        function e() {
            return t.call(this, 34, 35) || this
        }
        return n(e, t), e
    }(s);
    e.TaikuBeforeAfterConfirm = l;
    var u = function (t) {
        function e() {
            return t.call(this, 36, 37) || this
        }
        return n(e, t), e
    }(s);
    e.SoukouBeforeAfterConfirm = u
}