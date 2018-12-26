const function582 = function (t, e, i) {
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
    var o = i(5),
        r = i(4),
        s = i(191),
        a = i(1),
        _ = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._tween = new Array(2), i._textScrollEnable = !0, i._onChibiClick = function () {
                    i._textScrollEnable && !i._musicChibiJumping && (i._musicChibiJumping = !0, i._tween[4] = createjs.Tween.get(i._musicChibi).to({
                        y: i._offset_y + 144.5
                    }, 1).to({
                        y: i._offset_y + 144.5 - 48
                    }, 250, createjs.Ease.cubicOut).to({
                        y: i._offset_y + 144.5
                    }, 250, createjs.Ease.cubicIn).call(function () {
                        i._tween[4] = null, i._musicChibiJumping = !1
                    }))
                }, i._furnitureJukeBoxBGMLineModel = e, i._textScrollEnable = !0, i
            }
            return n(e, t), Object.defineProperty(e.prototype, "jukebox_close", {
                get: function () {
                    return this._close
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "jukebox_btn_bgm", {
                get: function () {
                    return this._btn_bgm
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.init = function () {
                this._offset_x = 148, this._offset_y = 264, this._bg = new PIXI.Sprite(s.JUKEBOX_COMMON.getTexture(5)), this._bg.position.set(this._offset_x, this._offset_y), this.addChild(this._bg), this._close = new PIXI.Sprite(s.JUKEBOX_COMMON.getTexture(9)), this._close.position.set(this._offset_x + 892, this._offset_y + 4), this._close.interactive = this._close.buttonMode = !0, this.addChild(this._close), 1 == this._furnitureJukeBoxBGMLineModel.api_bgm_flag && (this._btn_bgm = new PIXI.Sprite(s.JUKEBOX_COMMON.getTexture(6)), this._btn_bgm.position.set(this._offset_x + 639, this._offset_y - 4), this._btn_bgm.interactive = this._btn_bgm.buttonMode = !0, this.addChild(this._btn_bgm)), this._text_mask = new PIXI.Graphics, this._text_mask.beginFill(11184810), this._text_mask.drawRect(this._offset_x + 216, this._offset_y + 52, 510, 22), this._text_mask.endFill(), this.addChild(this._text_mask), this._text = new r.TextBox(19, 4473924), this._text.mask = this._text_mask, this._text.position.set(o.default.width, this._offset_y + 51), this._text.anchor.set(.5, 0), this._text.text = "\u300c" + this._furnitureJukeBoxBGMLineModel.api_name + "\u300d\u3000\u30ea\u30af\u30a8\u30b9\u30c8\u4e2d\u266a", this.addChild(this._text), this._musicChibi = new PIXI.Sprite(s.JUKEBOX_COMMON.getTexture(12)), this._musicChibi.position.set(this._offset_x + 36.5, this._offset_y + 144.5), this._musicChibi.anchor.set(.5, .5), this._musicChibi.interactive = !0, this.addChild(this._musicChibi)
            }, e.prototype.text_scroll = function () {
                this._textScrollEnable && (this._tween[0] = createjs.Tween.get(this._text, {
                    loop: !0
                }).to({
                    x: 1138
                }, 1).to({
                    x: 613
                }, 5e3).wait(1e3).to({
                    x: 88
                }, 5e3))
            }, e.prototype.musicChibiAnime = function () {
                this._musicChibiMove(), this._musicChibiTexture(), this._musicChibiRot(), this._musicChibi.on(a.EventType.CLICK, this._onChibiClick), this._musicChibiJumping = !1
            }, e.prototype._musicChibiMove = function () {
                var t = this;
                this._textScrollEnable && (this._tween[1] = createjs.Tween.get(this._musicChibi, {
                    loop: !0
                }).to({
                    x: 867,
                    width: 94,
                    height: 82
                }, 1).to({
                    x: 232
                }, 5e3).to({
                    width: 1
                }, 500).call(function () {
                    t._musicChibi.scale.x = -1, t._musicChibi.width = 1
                }).to({
                    width: 94
                }, 500).to({
                    x: 867
                }, 5e3).to({
                    width: 1
                }, 500).call(function () {
                    t._musicChibi.scale.x = 1, t._musicChibi.width = 1
                }).to({
                    width: 94
                }, 500))
            }, e.prototype._musicChibiTexture = function () {
                var t = this;
                this._textScrollEnable && (this._tween[2] = createjs.Tween.get(this._musicChibi, {
                    loop: !0
                }).wait(250).call(function () {
                    t._musicChibi.texture = s.JUKEBOX_COMMON.getTexture(12)
                }).wait(250).call(function () {
                    t._musicChibi.texture = s.JUKEBOX_COMMON.getTexture(13)
                }).wait(250).call(function () {
                    t._musicChibi.texture = s.JUKEBOX_COMMON.getTexture(14)
                }).wait(250).call(function () {
                    t._musicChibi.texture = s.JUKEBOX_COMMON.getTexture(13)
                }))
            }, e.prototype._musicChibiRot = function () {
                this._textScrollEnable && (this._tween[3] = createjs.Tween.get(this._musicChibi, {
                    loop: !0
                }).to({
                    rotation: .05
                }, 1).wait(249).to({
                    rotation: -.05
                }, 1).wait(249))
            }, e.prototype.discard = function () {
                this._musicChibi.off(a.EventType.CLICK, this._onChibiClick), this._textScrollEnable = !1;
                for (var t = 0; t < this._tween.length; t++) null != this._tween[t] && (this._tween[t].setPaused(!0), this._tween[t].removeAllEventListeners());
                this.removeChildren(), this._text.destroy()
            }, e
        }(PIXI.Container);
    e.JukeBoxDisp = _
}