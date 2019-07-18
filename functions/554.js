const function554 = function (t, e, i) {
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
    var o = i(0),
        r = i(1),
        s = i(189),
        a = i(271),
        _ = i(188),
        u = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype.initialize = function () {
                var t = o.default.resources.getUIImage("title_bg2");
                this._bg = new PIXI.Sprite(t), this._container = new PIXI.Container, this._container.alpha = 0, this._logo = new PIXI.Sprite(_.TITLE_MAIN.getTexture(3)), this._logo.anchor.set(.5, .5), this._logo.position.set(942, 273), this._kira = new a.KiraLayer, this._kira.position.set(765, 114), this._kira.initialize(), this._btn = new l, this._btn.initialize(), this._btn.position.set(914, 755), this._btn.alpha = 0, this.addChild(this._bg), this._container.addChild(this._logo), this._container.addChild(this._kira), this._container.addChild(this._btn), this.addChild(this._container)
            }, e.prototype.dispose = function () {
                this._kira.dispose(), this._btn.dispose()
            }, e.prototype.showTween = function (t) {
                var e = this;
                createjs.Tween.get(this._container).to({
                    alpha: 1
                }, 300).call(function () {
                    e._showTween2(t)
                })
            }, e.prototype.waitClickTween = function (t) {
                var e = this;
                this._btn.interactive = this._btn.buttonMode = !0, this._btn.once(r.EventType.CLICK, function () {
                    e._btn.interactive = e._btn.buttonMode = !1, createjs.Tween.get(e._btn).to({
                        alpha: 0
                    }, 200), t()
                })
            }, e.prototype._showTween2 = function (t) {
                var e = this;
                createjs.Tween.get(this._btn).to({
                    y: 605,
                    alpha: 1
                }, 1e3).wait(800).call(function () {
                    e._showTween3(t)
                })
            }, e.prototype._showTween3 = function (t) {
                var e = this;
                createjs.Tween.get(this._btn.scale).to({
                    x: 1.1,
                    y: 1.1
                }, 100).call(function () {
                    e._btn.disabled = !1
                }).to({
                    x: 1,
                    y: 1
                }, 100).call(function () {
                    var i = new s.WorldTextImage;
                    i.anchor.set(.5, .5), i.position.set(912, 684), e.addChild(i), i.load("title"), t()
                })
            }, e
        }(PIXI.Container);
    e.TitleView2 = u;
    var l = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._disabled = !0, e._onMouseOver = function () {
                e.setTexture(7)
            }, e._onMouseOut = function () {
                e.setTexture(e._base_texture_no)
            }, e._onMouseDown = function () {
                e.setTexture(5)
            }, e._onMouseUp = function () {
                e.setTexture(e._base_texture_no)
            }, e.anchor.set(.5, .5), e
        }
        return n(e, t), Object.defineProperty(e.prototype, "disabled", {
            get: function () {
                return this._disabled
            },
            set: function (t) {
                this._disabled = t, this.setTexture(this._base_texture_no)
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.initialize = function () {
            this.texture = _.TITLE_MAIN.getTexture(this._base_texture_no), this.on(r.EventType.MOUSEOVER, this._onMouseOver), this.on(r.EventType.MOUSEOUT, this._onMouseOut), this.on(r.EventType.MOUSEDOWN, this._onMouseDown), this.on(r.EventType.CLICK, this._onMouseUp)
        }, e.prototype.dispose = function () {
            this.off(r.EventType.MOUSEOVER, this._onMouseOver), this.off(r.EventType.MOUSEOUT, this._onMouseOut), this.off(r.EventType.MOUSEDOWN, this._onMouseDown), this.off(r.EventType.CLICK, this._onMouseUp)
        }, Object.defineProperty(e.prototype, "_base_texture_no", {
            get: function () {
                return this._disabled ? 6 : 4
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.setTexture = function (t) {
            this.texture = _.TITLE_MAIN.getTexture(t)
        }, e
    }(PIXI.Sprite)
}