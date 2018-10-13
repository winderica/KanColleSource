const function1450 = function (t, e, i) {
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
    var o = i(5), r = i(6), s = i(15), a = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), e.prototype.showCenter = function (t) {
            var e = this, i = new _(t), n = o.default.width / 2, s = o.default.height / 2;
            i.position.set(n, s), i.bg.scale.y = 0, i.text.x += 150, i.text.alpha = 0, this.addChild(i), r.SE.play("117"), createjs.Tween.get(i.bg.scale).to({ y: 1 }, 300).wait(1150).to({ y: 0 }, 300).call(function () {
                e.removeChild(i), e.emit("complete")
            }), createjs.Tween.get(i.text).wait(300).to({
                x: 90,
                alpha: 1
            }, 300).to({ x: -90 }, 350).call(function () {
                e.emit("showed")
            }).to({ x: -150, alpha: 0 }, 500)
        }, e.prototype.showTop = function (t) {
            var e = this, i = new _(t), n = o.default.width / 2;
            i.position.set(n, 117), i.bg.scale.y = 0, i.text.x = -n + i.text.width / 2 - 195, i.text.alpha = 0, this.addChild(i), r.SE.play("117"), createjs.Tween.get(i.bg.scale).to({ y: 1 }, 300).wait(1450).to({ y: 0 }, 300).call(function () {
                e.removeChild(i), e.emit("complete")
            }), createjs.Tween.get(i.text).wait(250).to({ alpha: 1 }, 100).to({ x: -n + i.text.width / 2 }, 200).to({ x: -n + i.text.width / 2 + 90 }, 750).call(function () {
                e.emit("showed")
            }).to({ x: 10, alpha: 0 }, 350), createjs.Tween.get(i.subText).wait(750).call(function () {
                i.subText.position.set(0, 110), i.subText.visible = !0
            }).wait(700).to({ x: -n, alpha: 0 }, 300)
        }, e
    }(PIXI.Container);
    e.LayerInfo = a;
    var _ = function (t) {
        function e(e) {
            var i, n, r, a = t.call(this) || this;
            i = 4 == e || 3 == e ? s.BATTLE_MAIN.getTexture(64) : s.BATTLE_MAIN.getTexture(65), n = a._getTextTextureNo(e), r = 1 == e || 2 == e ? s.BATTLE_MAIN.getTexture(66) : 4 == e || 3 == e ? s.BATTLE_MAIN.getTexture(67) : PIXI.Texture.EMPTY, a._bg = new PIXI.Container;
            var _ = new PIXI.Sprite(i);
            return _.width = o.default.width, _.x = -Math.round(_.width / 2), _.y = -Math.round(_.height / 2), a._bg.addChild(_), a._text = new PIXI.Sprite(n), a._text.anchor.set(.5), a._subText = new PIXI.Sprite(r), a._subText.anchor.set(.5), a._subText.visible = !1, a.addChild(a._bg), a.addChild(a._text), a.addChild(a._subText), a
        }

        return n(e, t), Object.defineProperty(e.prototype, "bg", {
            get: function () {
                return this._bg
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "text", {
            get: function () {
                return this._text
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "subText", {
            get: function () {
                return this._subText
            }, enumerable: !0, configurable: !0
        }), e.prototype._getTextTextureNo = function (t) {
            var e = -1;
            if (0 == t) e = 70; else if (1 == t) e = 78; else if (2 == t) e = 79; else if (4 == t) e = 81; else if (3 == t) e = 80; else if (5 == t) e = 68; else {
                if (6 != t) return PIXI.Texture.EMPTY;
                e = 69
            }
            return s.BATTLE_MAIN.getTexture(e)
        }, e
    }(PIXI.Container)
}