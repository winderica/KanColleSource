const function1345 = function (t, e, i) {
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
    var o = i(19),
        r = i(1),
        s = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                n._onMouseOver = function () {
                    if (n._img.texture != PIXI.Texture.EMPTY) return void n._effect.deactivate();
                    n._effect.activate()
                }, n._onMouseOut = function () {
                    n._effect.deactivate()
                }, n._handle = -1, n._onClick = function () {
                    if (-1 != n._handle) {
                        if (clearTimeout(n._handle), n._handle = -1, null == n._cb_onDoubleClick) return;
                        n._cb_onDoubleClick(n._no)
                    } else n._handle = setTimeout(function () {
                        n._handle = -1, null != n._cb_onClick && n._cb_onClick(n._no)
                    }, 300)
                }, n._cb_onClick = e, n._cb_onDoubleClick = i, n._effect = new a, n.addChild(n._effect), n._img = new PIXI.Sprite, n._img.position.set(-42, -42), n.addChild(n._img);
                var o = new PIXI.Graphics;
                return o.beginFill(65280, 0), o.drawCircle(0, 0, 24), o.endFill(), o.interactive = !0, n._clickCircle = o, n.addChild(n._clickCircle), n.interactive = !1, n
            }
            return n(e, t), Object.defineProperty(e.prototype, "no", {
                get: function () {
                    return this._no
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t, e, i) {
                this._no = t;
                var n = "blue";
                if (e.distance > i ? n = "red" : (e.distance == i && (n = "yellow"), this._clickCircle.buttonMode = !0, this._clickCircle.on(r.EventType.CLICK, this._onClick)), this._clickCircle.on(r.EventType.MOUSEOVER, this._onMouseOver), this._clickCircle.on(r.EventType.MOUSEOUT, this._onMouseOut), 5 == e.color || -2 == e.color)
                    if (e.passed) {
                        switch (n) {
                            case "red":
                                this._effect.texture = o.MAP_COMMON.getTexture(132);
                                break;
                            case "yellow":
                                this._effect.texture = o.MAP_COMMON.getTexture(131);
                                break;
                            case "blue":
                                this._effect.texture = o.MAP_COMMON.getTexture(130)
                        }
                        this._effect.x = 0, this._effect.y = -2, this._clickCircle.position.set(0, -2)
                    } else {
                        switch (n) {
                            case "red":
                                this._effect.texture = o.MAP_COMMON.getTexture(129);
                                break;
                            case "yellow":
                                this._effect.texture = o.MAP_COMMON.getTexture(128);
                                break;
                            case "blue":
                                this._effect.texture = o.MAP_COMMON.getTexture(127)
                        }
                        this._effect.x = 0, this._effect.y = 0
                    }
                else if (10 == e.color && e.passed) {
                    switch (n) {
                        case "red":
                            this._effect.texture = o.MAP_COMMON.getTexture(135);
                            break;
                        case "yellow":
                            this._effect.texture = o.MAP_COMMON.getTexture(134);
                            break;
                        case "blue":
                            this._effect.texture = o.MAP_COMMON.getTexture(133)
                    }
                    this._effect.x = -11, this._effect.y = 9, this._clickCircle.position.set(-11, 9)
                } else if (13 == e.color && e.passed) {
                    switch (n) {
                        case "red":
                            this._effect.texture = o.MAP_COMMON.getTexture(126);
                            break;
                        case "yellow":
                            this._effect.texture = o.MAP_COMMON.getTexture(125);
                            break;
                        case "blue":
                            this._effect.texture = o.MAP_COMMON.getTexture(124)
                    }
                    this._effect.x = -1, this._effect.y = 1, this._clickCircle.position.set(-1, 1)
                } else if (8 == e.color && e.passed) {
                    switch (n) {
                        case "red":
                            this._effect.texture = o.MAP_COMMON.getTexture(141);
                            break;
                        case "yellow":
                            this._effect.texture = o.MAP_COMMON.getTexture(140);
                            break;
                        case "blue":
                            this._effect.texture = o.MAP_COMMON.getTexture(139)
                    }
                    this._effect.x = 0, this._effect.y = 0
                } else {
                    switch (n) {
                        case "red":
                            this._effect.texture = o.MAP_COMMON.getTexture(138);
                            break;
                        case "yellow":
                            this._effect.texture = o.MAP_COMMON.getTexture(137);
                            break;
                        case "blue":
                            this._effect.texture = o.MAP_COMMON.getTexture(136)
                    }
                    this._effect.x = 0, this._effect.y = 0
                }
            }, e.prototype.dispose = function () {
                this._effect.dispose(), this._clickCircle.off(r.EventType.MOUSEOVER, this._onMouseOver), this._clickCircle.off(r.EventType.MOUSEOUT, this._onMouseOut), this._clickCircle.buttonMode = !1, this._clickCircle.off(r.EventType.CLICK, this._onClick), this._cb_onClick = null, this._cb_onDoubleClick = null
            }, e.prototype.update = function (t) {
                switch (t) {
                    case 1:
                        this._img.texture = o.MAP_COMMON.getTexture(173);
                        break;
                    case 2:
                        this._img.texture = o.MAP_COMMON.getTexture(174);
                        break;
                    case 3:
                        this._img.texture = o.MAP_COMMON.getTexture(175);
                        break;
                    default:
                        this._img.texture = PIXI.Texture.EMPTY
                }
            }, e
        }(PIXI.Container);
    e.AirUnitAppointmentPoint = s;
    var a = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.anchor.set(.5), e.visible = !1, e
        }
        return n(e, t), e.prototype.activate = function () {
            this._startAnimation()
        }, e.prototype.deactivate = function () {
            this._stopAnimation()
        }, e.prototype.dispose = function () {
            this._stopAnimation()
        }, e.prototype._startAnimation = function () {
            this.alpha = 0, this.visible = !0, this._t = createjs.Tween.get(this).to({
                alpha: 1
            }, 1e3).to({
                alpha: 0
            }, 1e3), this._t.loop = !0
        }, e.prototype._stopAnimation = function () {
            this.visible = !1, null != this._t && (this._t.setPaused(!0), this._t = null)
        }, e
    }(PIXI.Sprite)
}