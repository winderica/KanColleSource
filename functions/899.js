const function899 = function (t, e, i) {
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
    var o = i(35),
        r = i(1),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._state = !1, e.animationParams = {
                    progress: 0
                }, e._onClick = function () {
                    null != e.tween && e.tween.setPaused(!0), e.tween = null;
                    var t = 0;
                    switch (e._state) {
                        case !1:
                            e._state = !0, t = 0;
                            break;
                        case !0:
                            e._state = !1, t = 1
                    }
                    var i = createjs.Tween.get(e.animationParams);
                    i.to({
                        progress: t
                    }, 300).on("change", function () {
                        .5 < e.animationParams.progress ? e.background_on.visible = !1 : e.background_on.visible = !0, e.toggle.x = 3 + 103 * e.animationParams.progress
                    }), i.play(null), e.tween = i
                }, e.toggle = new PIXI.Sprite(o.ARSENAL_MAIN.getTexture(150)), e.background_off = new PIXI.Sprite(o.ARSENAL_MAIN.getTexture(151)), e.background_on = new PIXI.Sprite(o.ARSENAL_MAIN.getTexture(153)), e.background_off.on(r.EventType.CLICK, e._onClick), e.toggle.position.set(106, 0), e.addChild(e.background_off, e.background_on, e.toggle), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "state", {
                get: function () {
                    return this._state
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.update = function (t) {
                null != this.tween && this.tween.setPaused(!0), this.tween = null, this._state = !1, this.toggle.position.set(106, 0), this.background_off.interactive = this.background_off.buttonMode = !!t, this.background_on.visible = !1, this.animationParams.progress = 1
            }, e.prototype.changeToggleState = function (t) {
                switch (null != this.tween && this.tween.setPaused(!0), this.tween = null, this.toggle.x = 3, this.background_on.visible = !1, t) {
                    case !0:
                        this.toggle.x = 3, this.animationParams.progress = 0, this.background_on.visible = !0;
                        break;
                    case !1:
                        this.toggle.x = 106, this.animationParams.progress = 1, this.background_on.visible = !1
                }
                this._state = t
            }, e.prototype.dispose = function () {
                null != this.tween && this.tween.setPaused(!0), this.removeChildren(), this.background_off = null, this.background_on = null, this.toggle = null, this.tween = null
            }, e
        }(PIXI.Container);
    e.HighSpeedToggle = s
}