const function479 = function (t, e, i) {
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
    var o = i(165), r = i(4), s = i(36), a = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._user_name = new r.TextBox(21, 16774898), e._user_name.position.set(12, 11), e.addChild(e._user_name), e._level = new _, e._level.position.set(276, 12), e.addChild(e._level), e._deck_name = new u, e._deck_name.position.set(12, 54), e.addChild(e._deck_name), e._medal = new o.MedalIcon, e._medal.position.set(420, 47), e.addChild(e._medal), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "user_name", {
            get: function () {
                return this._user_name
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "level", {
            get: function () {
                return this._level
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "deck_name", {
            get: function () {
                return this._deck_name
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "medal", {
            get: function () {
                return this._medal
            }, enumerable: !0, configurable: !0
        }), e.prototype.dispose = function () {
            this.removeChildren(), this._user_name.destroy(), this._level.dispose(), this._deck_name.dispose(), this._medal.dispose()
        }, e
    }(PIXI.Container);
    e.DeckInfo = a;
    var _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._text = new r.TextBox(21, 16774898), e._text.x = 29, e._text.y = -1, e.addChild(e._text), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "text", {
            get: function () {
                return this._text.text
            }, set: function (t) {
                this._text.text = t
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function () {
            this.texture = s.BATTLE_RESULT_MAIN.getTexture(68)
        }, e.prototype.dispose = function () {
            this.removeChildren(), this._text.destroy()
        }, e
    }(PIXI.Sprite), u = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._text = new r.TextBox(21, 16774898), e._text.x = 71, e._text.y = -3, e.addChild(e._text), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "text", {
            get: function () {
                return this._text.text
            }, set: function (t) {
                this._text.text = t
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function () {
            this.texture = s.BATTLE_RESULT_MAIN.getTexture(76)
        }, e.prototype.dispose = function () {
            this.removeChildren(), this._text.destroy()
        }, e
    }(PIXI.Sprite)
}