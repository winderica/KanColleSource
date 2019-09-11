const function434 = function (t, e, i) {
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
        r = i(138),
        s = i(1232),
        a = i(435),
        _ = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._bg = new l, e._bg.position.set(0, 633), e._bg.alpha = 0, e._compass = new s.CompCompass, e._compass.position.set(54, 766), e._compass.alpha = 0, e.addChild(e._bg), e.addChild(e._compass), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "text", {
                get: function () {
                    return this._bg.text
                },
                set: function (t) {
                    this._bg.text = t
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                this._bg.initialize(), this._compass.initialize()
            }, e.prototype.activate = function (t) {
                var e = this;
                this._stopTweens(), this._t_bg = createjs.Tween.get(this._bg).to({
                    alpha: 1,
                    y: 580
                }, 400), this._compass.activate(), this._t_compass = createjs.Tween.get(this._compass).to({
                    alpha: 1,
                    y: 668,
                    rotation: Math.PI / 4
                }, 400).call(function () {
                    e._t_bg = null, e._t_compass = null, null != t && t()
                })
            }, e.prototype.deactivate = function (t) {
                var e = this;
                void 0 === t && (t = null), this._stopTweens(), this._t_bg = createjs.Tween.get(this._bg).to({
                    alpha: 0,
                    y: 633
                }, 400), this._compass.activate(), this._t_compass = createjs.Tween.get(this._compass).to({
                    alpha: 0,
                    y: 766,
                    rotation: 0
                }, 400).call(function () {
                    e._t_bg = null, e._t_compass = null, null != t && t()
                })
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._stopTweens(), this._bg.dispose(), this._bg = null, this._compass.dispose(), this._compass = null
            }, e.prototype.showItemGetText = function (t, e) {
                this._bg.showItemGetText(t, e)
            }, e.prototype.showUzushioText = function (t, e, i) {
                this._bg.showUzushioText(t, e, i)
            }, e.prototype._stopTweens = function () {
                null != this._t_bg && (this._t_bg.setPaused(!0), this._t_bg = null), null != this._t_compass && (this._t_compass.setPaused(!0), this._t_compass = null)
            }, e
        }(PIXI.Container);
    e.CompMessageBox = _;
    var l = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._bg = new PIXI.Sprite, e._icon = new a.CompDropItemIcon, e._icon.position.set(416, 23), e._icon.visible = !1, e._text = new o.TextBox(30, 16777215), e._text.position.set(414, 23), e._text.style.wordWrap = !1, e._text.style.breakWords = !1, e.addChild(e._bg), e.addChild(e._icon), e.addChild(e._text), e
        }
        return n(e, t), Object.defineProperty(e.prototype, "text", {
            get: function () {
                return this._text.text
            },
            set: function (t) {
                this._text.text = t, this._icon.visible = !1
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.initialize = function () {
            this._bg.texture = r.SALLY_MAP_PARTS.getTexture(18)
        }, e.prototype.showItemGetText = function (t, e) {
            this._icon.update(t), this._icon.visible = !0, this._text.text = "\u3000\xd7" + e + "\n\u3092\u5165\u624b\u3057\u307e\u3057\u305f\uff01"
        }, e.prototype.showUzushioText = function (t, e, i) {
            this._icon.update(t), this._icon.visible = !0, this._text.text = "\u3000\xd7" + e + "\n\u3092\u843d\u3068\u3057\u3066\u3057\u307e\u3044\u307e\u3057\u305f\u2026\u3002", 1 == i && (this._text.text += "\n(\u96fb\u63a2\u304c\u5f79\u7acb\u3063\u3066\u3001\u88ab\u5bb3\u3092\u6291\u3048\u3089\u308c\u305f\uff01)")
        }, e.prototype.dispose = function () {
            this.removeChildren(), this._text.destroy()
        }, e
    }(PIXI.Container)
}