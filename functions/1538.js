const function1538 = function (t, e, i) {
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
        r = i(6),
        s = i(36),
        a = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._name_and_level = new _, e._up_to_the_next_level = new l, e._up_to_the_next_level.position.set(0, 30), e.addChild(e._name_and_level), e.addChild(e._up_to_the_next_level), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "name_and_level", {
                get: function () {
                    return this._name_and_level
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "up_to_the_next_level", {
                get: function () {
                    return this._up_to_the_next_level
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function () {
                this.removeChildren(), this._name_and_level.dispose(), this._name_and_level = null, this._up_to_the_next_level.dispose(), this._up_to_the_next_level = null
            }, e.prototype.levelup = function () {
                this._name_and_level.levelup(), this._up_to_the_next_level.levelup()
            }, e
        }(PIXI.Container);
    e.BannerInfoFriend = a;
    var _ = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._name = new o.TextBox(18, 16774898), e._name_mask = new PIXI.Graphics, e._name.addChild(e._name_mask), e._name.mask = e._name_mask, e._level_label = new PIXI.Sprite, e._level_label.position.set(131, 3), e._level = new o.TextBox(16, 16774898), e._level.anchor.set(1, 0), e._level.position.set(200, 5), e.addChild(e._name), e.addChild(e._level_label), e.addChild(e._level), e
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                this._level_label.texture = s.BATTLE_RESULT_MAIN.getTexture(68), this._name.text = t, this._name_mask.clear(), this._name_mask.beginFill(0), this._name_mask.drawRect(0, 0, 126, this._name.height), this._name_mask.endFill(), this._level.text = e.toString(), this._now_level = e
            }, e.prototype.levelup = function () {
                this._now_level++, this._level.text = this._now_level.toString()
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._name.destroy(), this._name = null, this._name_mask = null, this._level_label = null, this._level.destroy(), this._level = null
            }, e
        }(PIXI.Container),
        l = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._next_label = new PIXI.Sprite, e._next_label.position.set(0, 6), e._next = new o.TextBox(16, 16777215), e._next.anchor.set(1, 0), e._next.position.set(200, 5), e._next.alpha = 0, e.addChild(e._next_label), e.addChild(e._next), e
            }
            return n(e, t), e.prototype.showExpText = function () {
                createjs.Tween.get(this._next).wait(10).to({
                    alpha: 1
                }, 0)
            }, e.prototype.initialize = function (t) {
                this._next_label.texture = s.BATTLE_RESULT_MAIN.getTexture(78), this.update(t)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._next_label = null, this._next.destroy(), this._next = null
            }, e.prototype.update = function (t) {
                this._next.text = t < 0 ? "" : Math.floor(t).toString()
            }, e.prototype.levelup = function () {
                var t = this,
                    e = new PIXI.Sprite(s.BATTLE_RESULT_MAIN.getTexture(9));
                e.anchor.set(.5), e.position.set(147, 18), e.alpha = 0, r.SE.play("221"), this.addChild(e), createjs.Tween.get(e).to({
                    y: -6,
                    alpha: 1
                }, 200).to({
                    y: 18
                }, 0).to({
                    y: -6,
                    alpha: 1
                }, 200).to({
                    alpha: 0
                }, 700).call(function () {
                    t.removeChild(e)
                })
            }, e
        }(PIXI.Container)
}