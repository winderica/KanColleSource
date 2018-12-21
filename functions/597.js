const function597 = function (t, e, i) {
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
    var o = i(0), r = i(1), s = i(13), a = i(18), _ = i(6), l = i(598), u = i(599), c = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._opened = !1, e._close_complete = function () {
                e._bg.hide(600, function () {
                    e._bg.visible = !1, e._optionLayer.visible = !1, e._opened = !1
                }), createjs.Tween.get(e._optionLayer).wait(100).to({
                    x: 1164,
                    y: 642
                }, 200), createjs.Tween.get(e._optionLayer).wait(200).to({ alpha: 0 }, 100)
            }, e.changeTab = function (t) {
                if (e._nowTab != t) switch (e._nowTab = t, e._nowTab) {
                    case 0:
                        e._sound.visible = !0, e._interface.visible = !1, e._tabIcon.position.set(77, 16), e._tabSound.texture = l.PORT_OPTION.getTexture(15), e._tabSound.position.set(36, 0), e._txtSound.position.set(98, 19), e._tabInterface.texture = l.PORT_OPTION.getTexture(13), e._tabInterface.position.set(209, 12), e._txtInterface.position.set(241, 24);
                        break;
                    case 1:
                        e._sound.visible = !1, e._interface.visible = !0, e._tabIcon.position.set(223, 16), e._interface.setSkinID(o.default.model.basic.getUISkinID()), e._tabSound.texture = l.PORT_OPTION.getTexture(13), e._tabSound.position.set(36, 12), e._txtSound.position.set(94, 24), e._tabInterface.texture = l.PORT_OPTION.getTexture(15), e._tabInterface.position.set(209, 0), e._txtInterface.position.set(245, 19)
                }
            }, e._onClick = function () {
                0 == e._bg.isNowAnimation() && (1 == e._opened ? e._close() : 0 == e._opened && e._open())
            }, e._nowTab = 0, e._optionLayer = new PIXI.Container, e._optionLayer.position.set(1164, 642), e._optionLayer.visible = !1, e._optionBg = new PIXI.Sprite, e._tabSide = new PIXI.Sprite, e._tabIcon = new PIXI.Sprite, e._tabSound = new PIXI.Sprite, e._txtSound = new PIXI.Sprite, e._tabInterface = new PIXI.Sprite, e._txtInterface = new PIXI.Sprite, e._tabSound.interactive = e._tabSound.buttonMode = !0, e._tabInterface.interactive = e._tabInterface.buttonMode = !0, e._tabSound.on(r.EventType.CLICK, function () {
                e.changeTab(0)
            }), e._tabInterface.on(r.EventType.CLICK, function () {
                e.changeTab(1)
            }), e._bg = new a.FadeBox(.5), e._bg.hide(), e._bg.visible = !1, e._btn = new PIXI.Sprite, e._btn.position.set(1131, 645), e._sound = new h, e._sound.visible = !0, e._interface = new p, e._interface.visible = !1, e._optionLayer.addChild(e._optionBg), e._optionLayer.addChild(e._tabSide, e._tabSound, e._tabInterface, e._txtSound, e._txtInterface, e._tabIcon), e._optionLayer.addChild(e._sound, e._interface), e.addChild(e._bg, e._optionLayer, e._btn), e
        }

        return n(e, t), e.prototype.initialize = function () {
            this._sound.initialize(), this._interface.initialize(), this._btn.texture = l.PORT_OPTION.getTexture(3), this._optionBg.texture = l.PORT_OPTION.getTexture(12), this._tabSide.texture = l.PORT_OPTION.getTexture(14), this._tabIcon.texture = l.PORT_OPTION.getTexture(2), this._tabSound.texture = l.PORT_OPTION.getTexture(15), this._tabInterface.texture = l.PORT_OPTION.getTexture(13), this._txtSound.texture = l.PORT_OPTION.getTexture(28), this._txtInterface.texture = l.PORT_OPTION.getTexture(27), this._tabSide.position.set(2, 12), this._tabIcon.position.set(77, 16), this._optionBg.position.set(2, 55), this._tabSound.position.set(36, 0), this._txtSound.position.set(98, 19), this._tabInterface.position.set(209, 12), this._txtInterface.position.set(241, 24), this._btn.interactive = this._btn.buttonMode = !0, this._btn.on(r.EventType.CLICK, this._onClick)
        }, e.prototype.dispose = function () {
            this._btn.interactive = this._btn.buttonMode = !1, this._btn.off(r.EventType.CLICK, this._onClick)
        }, e.prototype._open = function () {
            var t = this;
            this._start_bgm_volume = o.default.option.vol_bgm, this._sound.setState(this._start_bgm_volume), this.changeTab(0), this._base_skinID = o.default.model.basic.getUISkinID(), this._bg.visible = !0, this._bg.show(600, function () {
                t._opened = !0
            }), this._optionLayer.alpha = 0, this._optionLayer.visible = !0, createjs.Tween.get(this._optionLayer).wait(100).to({
                x: 782,
                y: 202
            }, 200), createjs.Tween.get(this._optionLayer).wait(200).to({ alpha: 1 }, 100).call(function () {
                o.default.view.portMain.closeLogBox()
            })
        }, e.prototype._close = function () {
            this._close_pre()
        }, e.prototype._close_pre = function () {
            var t = this, e = this._sound.slider_bgm.value;
            o.default.option.vol_bgm = e, o.default.option.vol_se = this._sound.slider_se.value, o.default.option.vol_voice = this._sound.slider_voice.value, o.default.option.voice_be_left = this._sound.toggle1.value, o.default.option.voice_duty = this._sound.toggle2.value, o.default.option.save(), 0 == this._start_bgm_volume && e > 0 ? o.default.sound.bgm.play(o.default.sound.bgm.bgm_id) : this._start_bgm_volume > 0 && 0 == e && o.default.sound.bgm.stop();
            var i = o.default.model.basic.getUISkinID();
            if (this._base_skinID != i) {
                new u.SetSkinAPI(i).start(function () {
                    t._close_complete()
                })
            } else this._close_complete()
        }, e
    }(PIXI.Container);
    e.Option = c;
    var h = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._text = new PIXI.Sprite, e._txtBgm = new PIXI.Sprite, e._txtSe = new PIXI.Sprite, e._txtVoice = new PIXI.Sprite, e._txtToggle1 = new PIXI.Sprite, e._txtToggle2 = new PIXI.Sprite, e._slider_bgm = new f, e._slider_bgm.position.set(79, 164), e._slider_se = new d, e._slider_se.position.set(79, 257), e._slider_voice = new d, e._slider_voice.position.set(79, 351), e._toggle1 = new y, e._toggle1.position.set(90, 398), e._toggle2 = new y, e._toggle2.position.set(255, 398), e.addChild(e._text), e.addChild(e._txtBgm), e.addChild(e._txtSe), e.addChild(e._txtVoice), e.addChild(e._txtToggle1), e.addChild(e._txtToggle2), e.addChild(e._slider_bgm), e.addChild(e._slider_se), e.addChild(e._slider_voice), e.addChild(e._toggle1), e.addChild(e._toggle2), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "slider_bgm", {
            get: function () {
                return this._slider_bgm
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "slider_se", {
            get: function () {
                return this._slider_se
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "slider_voice", {
            get: function () {
                return this._slider_voice
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "toggle1", {
            get: function () {
                return this._toggle1
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "toggle2", {
            get: function () {
                return this._toggle2
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function () {
            this._text.texture = l.PORT_OPTION.getTexture(16), this._txtBgm.texture = l.PORT_OPTION.getTexture(19), this._txtSe.texture = l.PORT_OPTION.getTexture(21), this._txtVoice.texture = l.PORT_OPTION.getTexture(24), this._txtToggle1.texture = l.PORT_OPTION.getTexture(25), this._txtToggle2.texture = l.PORT_OPTION.getTexture(26), this._text.position.set(142, 72), this._txtBgm.position.set(80, 124), this._txtSe.position.set(80, 217), this._txtVoice.position.set(80, 311), this._txtToggle1.position.set(38, 398), this._txtToggle2.position.set(198, 398), this._slider_bgm.initialize(), this._slider_se.initialize(), this._slider_voice.initialize(), this._toggle1.initialize(), this._toggle2.initialize()
        }, e.prototype.dispose = function () {
            this._slider_bgm.dispose(), this._slider_se.dispose(), this._slider_voice.dispose(), this._toggle1.dispose(), this._toggle2.dispose()
        }, e.prototype.setState = function (t) {
            this._slider_bgm.value = t, null == this._slider_bgm.temp_value && (this._slider_bgm.temp_value = t), this._slider_se.value = o.default.option.vol_se, null == this._slider_se.temp_value && (this._slider_se.temp_value = o.default.option.vol_se), this._slider_voice.value = o.default.option.vol_voice, null == this._slider_voice.temp_value && (this._slider_voice.temp_value = o.default.option.vol_voice), this._toggle1.value = o.default.option.voice_be_left, this._toggle2.value = o.default.option.voice_duty
        }, e
    }(PIXI.Container), p = function (t) {
        function e() {
            var e = t.call(this) || this;
            e.setSkinID = function (t) {
                e._skinID = t, e._selector.x = 51, e._selector.y = e._getY(t)
            }, e._onChangeSkin = function () {
                if (o.default.model.basic.getUISkinID() != e._skinID) {
                    _.SE.play("204"), o.default.view.loading.show();
                    var t = new s.UIImageLoader("port");
                    101 == e._skinID || 102 == e._skinID ? t.add("port_skin_1.json") : 201 == e._skinID ? (t.add("port_skin_2.json"), t.add("port_skin_circle_2.json")) : 301 == e._skinID ? (t.add("port_skin_3.json"), t.add("port_skin_circle_2.json")) : 311 == e._skinID && t.add("port_skin_3k.json"), t.load(function () {
                        o.default.model.basic.setUISkinID(e._skinID), o.default.view.portMain.changeSkin(e._skinID), o.default.view.loading.hide()
                    })
                }
            }, e._selector_bg = new PIXI.Sprite, e._selector_bg.position.set(48, 92), e._selector = new PIXI.Sprite, e._selector.position.set(0), e.btn = new PIXI.Sprite, e.btn.position.set(27, 417), e.btn.interactive = e.btn.buttonMode = !0, e.btn.on(r.EventType.MOUSEOVER, function () {
                e.btn.texture = l.PORT_OPTION.getTexture(1)
            }), e.btn.on(r.EventType.MOUSEOUT, function () {
                e.btn.texture = l.PORT_OPTION.getTexture(0)
            }), e.btn.on(r.EventType.CLICK, function () {
                e._onChangeSkin()
            }), e.type1 = new PIXI.Sprite, e.type2 = new PIXI.Sprite, e.type3 = new PIXI.Sprite, e.type4 = new PIXI.Sprite, e.type5 = new PIXI.Sprite, e.type1.position.set(98, 92), e.type2.position.set(98, 140), e.type3.position.set(98, 188), e.type4.position.set(98, 234), e.type5.position.set(98, 280);
            for (var i = [101, 102, 201, 301, 311], n = [], a = this, u = 0; u < i.length; u++) !function (t) {
                var o = new PIXI.Graphics;
                o.beginFill(16777215, 0), o.drawRect(0, 0, 28, 28), o.endFill(), o.position.x = 51, o.position.y = a._getY(i[t]), o.interactive = o.buttonMode = !0, o.on(r.EventType.CLICK, function () {
                    _.SE.play("246"), e.setSkinID(i[t])
                }), n.push(o)
            }(u);
            return e.addChild(e._selector_bg, e._selector, e.btn, e.type1, e.type2, e.type3, e.type4, e.type5), n.forEach(function (t) {
                e.addChild(t)
            }), e
        }

        return n(e, t), e.prototype.initialize = function () {
            this._selector_bg.texture = l.PORT_OPTION.getTexture(8), this._selector.texture = l.PORT_OPTION.getTexture(7), this.btn.texture = l.PORT_OPTION.getTexture(0), this.type1.texture = l.PORT_OPTION.getTexture(17), this.type2.texture = l.PORT_OPTION.getTexture(18), this.type3.texture = l.PORT_OPTION.getTexture(20), this.type4.texture = l.PORT_OPTION.getTexture(22), this.type5.texture = l.PORT_OPTION.getTexture(23)
        }, e.prototype._getY = function (t) {
            switch (t) {
                case 101:
                    return 93;
                case 102:
                    return 140;
                case 201:
                    return 188;
                case 301:
                    return 234;
                case 311:
                    return 281
            }
            return 0
        }, e
    }(PIXI.Container), d = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._MIN_XPOS = 9, e._MAX_XPOS = 252, e._dragging = !1, e._value = 0, e._onBarClick = function (t) {
                var i = t.data, n = i.getLocalPosition(e);
                e.value = (n.x - e._MIN_XPOS) / e._dragging_range * 100, e.value > 0 && (e.temp_value = e.value)
            }, e._onMouseDown = function () {
                1 != e._dragging && (e.value > 0 && (e.temp_value = e.value), e._dragging = !0)
            }, e._onMouseMove = function (t) {
                if (1 == e._dragging) {
                    var i = t.data, n = i.getLocalPosition(e);
                    e.value = (n.x - e._MIN_XPOS) / e._dragging_range * 100
                }
            }, e._onMouseUp = function () {
                e._dragging = !1, e.value > 0 && (e.temp_value = e.value)
            }, e._onClick = function () {
                e.value = e.value > 0 ? 0 : e.temp_value
            }, e._bg = new PIXI.Sprite, e._maskGra = new PIXI.Graphics, e._maskGra.beginFill(0), e._maskGra.drawRect(0, 0, 258, 12), e._maskGra.endFill(), e._maskGra.position.set(0, 0), e._bar = new PIXI.Sprite, e._bar.position.set(3, 2), e._bar.mask = e._maskGra, e._volume_container = new PIXI.Container, e._vol = new PIXI.Sprite, e._vol.position.set(-41, -6), e._vol_mute = new PIXI.Sprite, e._vol_mute.position.set(-39, -9), e._thumb = new PIXI.Sprite, e._thumb.anchor.set(.5, .5), e._volume_container.addChild(e._vol), e._volume_container.addChild(e._vol_mute), e.addChild(e._bg), e.addChild(e._bar), e.addChild(e._maskGra), e.addChild(e._volume_container), e.addChild(e._thumb), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "_dragging_range", {
            get: function () {
                return this._MAX_XPOS - this._MIN_XPOS
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "value", {
            get: function () {
                return this._value
            }, set: function (t) {
                this._updateValue(t)
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "temp_value", {
            get: function () {
                return this._temp_value
            }, set: function (t) {
                this._temp_value = t
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function () {
            this._bg.texture = l.PORT_OPTION.getTexture(29), this._bar.texture = l.PORT_OPTION.getTexture(30), this._vol.texture = l.PORT_OPTION.getTexture(5), this._vol_mute.texture = l.PORT_OPTION.getTexture(6), this._thumb.texture = l.PORT_OPTION.getTexture(9), this._bg.interactive = this._bg.buttonMode = !0, this._bg.on(r.EventType.CLICK, this._onBarClick), this._thumb.interactive = this._thumb.buttonMode = !0, this._thumb.on(r.EventType.MOUSEDOWN, this._onMouseDown), this._thumb.on(r.EventType.MOUSEMOVE, this._onMouseMove), this._thumb.on(r.EventType.MOUSEUP, this._onMouseUp), this._thumb.on("pointerupoutside", this._onMouseUp), this._volume_container.interactive = this._volume_container.buttonMode = !0, this._volume_container.on(r.EventType.CLICK, this._onClick)
        }, e.prototype.dispose = function () {
            this._bg.interactive = this._bg.buttonMode = !1, this._bg.off(r.EventType.CLICK, this._onBarClick), this._thumb.interactive = this._thumb.buttonMode = !1, this._thumb.off(r.EventType.MOUSEDOWN, this._onMouseDown), this._thumb.off(r.EventType.MOUSEMOVE, this._onMouseMove), this._thumb.off(r.EventType.MOUSEUP, this._onMouseUp), this._thumb.off("pointerupoutside", this._onMouseUp), this._volume_container.interactive = this._volume_container.buttonMode = !1, this._volume_container.off(r.EventType.CLICK, this._onClick)
        }, e.prototype._updateValue = function (t) {
            t = Math.max(0, t), t = Math.min(100, t), this._value = t, this._maskGra.scale.set(t / 100, 1), this._updateVolIcon(), this._updateThumbPos()
        }, e.prototype._updateVolIcon = function () {
            this._vol_mute.visible = this.value <= 0
        }, e.prototype._updateThumbPos = function () {
            var t = this.value / 100;
            this._thumb.position.set(this._MIN_XPOS + this._dragging_range * t, 8)
        }, e
    }(PIXI.Container), f = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), e.prototype._updateValue = function (e) {
            t.prototype._updateValue.call(this, e), o.default.sound.bgm.changeVolume(this.value)
        }, e
    }(d), y = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._OFF_XPOS = 74, e._ON_XPOS = 18, e._value = !1, e._onClick = function () {
                if (null == e._t) {
                    e._value = !e.value;
                    var t = e.value ? e._ON_XPOS : e._OFF_XPOS;
                    e._t = createjs.Tween.get(e._thumb).to({ x: t }, 200).call(function () {
                        e._t = null, e._updateBG()
                    })
                }
            }, e._bg = new PIXI.Sprite, e._thumb = new PIXI.Sprite, e._thumb.anchor.set(.5, .5), e._thumb.y = 19, e.addChild(e._bg), e.addChild(e._thumb), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "value", {
            get: function () {
                return this._value
            }, set: function (t) {
                this._value = t, this._updateBG()
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function () {
            this._thumb.texture = l.PORT_OPTION.getTexture(9), this._updateBG(), this.interactive = this.buttonMode = !0, this.on(r.EventType.CLICK, this._onClick)
        }, e.prototype.dispose = function () {
            this.interactive = this.buttonMode = !1, this.off(r.EventType.CLICK, this._onClick)
        }, e.prototype._updateBG = function () {
            1 == this.value ? this._bg.texture = l.PORT_OPTION.getTexture(11) : this._bg.texture = l.PORT_OPTION.getTexture(10), this._thumb.x = this.value ? this._ON_XPOS : this._OFF_XPOS
        }, e
    }(PIXI.Container)
}