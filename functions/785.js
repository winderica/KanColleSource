const function785 = function (t, e, i) {
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
    var o = i(4), r = i(3), s = function (t) {
        function e(e, i) {
            var n = t.call(this) || this, s = r.REMODEL_POWERUP.getTexture(e), a = r.REMODEL_POWERUP.getTexture(i),
                _ = new o.TextBox(30, 5523516), u = new o.TextBox(30, 5523516),
                l = new PIXI.Sprite(r.REMODEL_POWERUP.getTexture(41));
            return _.anchor.x = 0, u.anchor.x = 0, l.anchor.x = 0, l.position.set(233 - Math.floor(l.width / 2), 6), l.visible = !1, n.addChild(_, u, l), n.textureNormalFrame = s, n.textureMaxFrame = a, n.textBefore = _, n.textAfter = u, n.textMax = l, n
        }

        return n(e, t), e.prototype.update = function (t, e, i) {
            this.textBefore.text = t.toString(), this.textAfter.text = e.toString(), this.textMax.visible = !1, t == e || i ? this.textAfter.style.fill = 5523516 : (this.textAfter.style.fill = 1949120, this.textMax.visible = !0), this.texture = this.textureNormalFrame, i && (this.texture = this.textureMaxFrame), this.textBefore.position.set(108 + Math.floor(34.0125 - this.textBefore.width / 2), 14), this.textAfter.position.set(203 + Math.floor(31.5 - this.textAfter.width / 2), 14)
        }, e.prototype.dispose = function () {
            this.texture = PIXI.Texture.EMPTY, this.textBefore.texture = PIXI.Texture.EMPTY, this.textAfter.texture = PIXI.Texture.EMPTY, this.textMax.texture = PIXI.Texture.EMPTY, this.textBefore.text = "", this.textAfter.text = "", this.removeChild(this.textBefore), this.removeChild(this.textAfter), this.textBefore = null, this.textBefore = null, this.textAfter = null, this.textureNormalFrame = null, this.textureMaxFrame = null, this.removeChildren()
        }, e
    }(PIXI.Sprite), a = function (t) {
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
    var u = function (t) {
        function e() {
            return t.call(this, 34, 35) || this
        }

        return n(e, t), e
    }(s);
    e.TaikuBeforeAfterConfirm = u;
    var l = function (t) {
        function e() {
            return t.call(this, 36, 37) || this
        }

        return n(e, t), e
    }(s);
    e.SoukouBeforeAfterConfirm = l
}