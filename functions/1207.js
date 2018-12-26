const function1207 = function (t, e, i) {
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
    var o = i(420),
        r = i(5),
        s = i(0),
        a = i(423),
        _ = i(424),
        l = i(426),
        u = i(427),
        c = i(428),
        h = i(1),
        p = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._isDEBUG = !1, e._revampRecipeBox = new Array(3), e._ship1st = s.default.model.deck.get(1).getShipModel(0).mstID, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "revamp2ndShip", {
                get: function () {
                    return this._revamp2ndShip
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "revampakashi", {
                get: function () {
                    return this._revampAkashi
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "revampRecipeBox", {
                get: function () {
                    return this._revampRecipeBox
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "revampParticleLayer", {
                get: function () {
                    return this._revampParticleLayer
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "revampRingParticleLayer", {
                get: function () {
                    return this._revampRingParticleLayer
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "revampParticleOverLayer", {
                get: function () {
                    return this._revampParticleOverLayer
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "revampBaloon", {
                get: function () {
                    return this._revampBaloon
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "debugBtn", {
                get: function () {
                    return this._debugBtn
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "pushAnyScreen", {
                get: function () {
                    return this._pushAnyScreen
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "fadeMask", {
                get: function () {
                    return this._fadeMask
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "revampItemChange", {
                get: function () {
                    return this._revampItemChange
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "sceneChangeGuard", {
                get: function () {
                    return this._sceneChangeGuard
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                this._revamp2ndShip = new PIXI.Sprite, this._revamp2ndShip.position.set(0, 0), this.addChild(this._revamp2ndShip), this._revampAkashi = new l.RevampAkashi(this._ship1st), this._revampAkashi.activate(), this.addChild(this._revampAkashi), this._tit2_bg = new PIXI.Sprite(o.REVAMP_REVAMP.getTexture(26)), this._tit2_bg.position.set(0, 102), this._blue_txt_30 = new PIXI.Sprite(o.REVAMP_REVAMP.getTexture(9)), this._blue_txt_30.position.set(186, 112), this.addChild(this._tit2_bg), this.addChild(this._blue_txt_30), this._debugBtn = new d, this._debugBtn.visible = !1, this._isDEBUG && (this._debugBtn.visible = !0, this._debugBtn.initialize(7, 7), this._debugBtn.scale.set(2, 2), this._debugBtn.position.set(417, 300), this.addChild(this._debugBtn)), this._revampBaloon = new _.RevampBalloon, this._revampBaloon.position.set(855, 207), this.addChild(this._revampBaloon), this._revampParticleLayer = new u.RevampParticleLayer(-1), this._revampParticleLayer.position.set(0, 0), this.addChild(this._revampParticleLayer), this._revampParticleOverLayer = new u.RevampParticleLayer(0), this._revampParticleOverLayer.position.set(0, 0);
                for (var t = 0; t < 3; t++) this._revampRecipeBox[t] = new a.RevampRecipeBox, this._revampRecipeBox[t].position.set(168, 180 * t + 159), this.addChild(this._revampRecipeBox[t]);
                this._pushAnyScreen = new d, this._pushAnyScreen.initialize(2, 2), this._pushAnyScreen.width = 1200, this._pushAnyScreen.height = 720, this._pushAnyScreen.interactive = this._pushAnyScreen.buttonMode = !1, this.addChild(this._pushAnyScreen), this._fadeMask = new PIXI.Graphics, this._fadeMask.beginFill(0), this._fadeMask.drawRect(0, 0, r.default.width, r.default.height), this.addChild(this._fadeMask), this._revampItemChange = new c.RevampItemChange, this._revampItemChange.position.set(0, 0), this._sceneChangeGuard = new PIXI.Graphics, this._sceneChangeGuard.beginFill(0), this._sceneChangeGuard.drawRect(0, 0, 1200, 139), this._sceneChangeGuard.drawRect(0, 0, 162, 720), this._sceneChangeGuard.alpha = .001, this._sceneChangeGuard.interactive = !1, s.default.view.overLayer.addChild(this._sceneChangeGuard)
            }, e.prototype.dispose = function () {
                this._ship1st = null, this._revamp2ndShip = null, this._revampAkashi.dispose(), this._revampAkashi = null;
                for (var t = 0; t < 3; t++) this._revampRecipeBox[t].dispose();
                this._revampRecipeBox = null, this._revampBaloon.dispose(), this._revampBaloon = null, this._revampParticleLayer.dispose(), this._revampParticleLayer = null, this._revampParticleOverLayer.dispose(), this._revampParticleOverLayer = null, this._tit2_bg = null, this._blue_txt_30 = null, this._pushAnyScreen = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.ViewTop = p;
    var d = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._onMouseOver = function () {
                e._setTexture(e._texture_no_on)
            }, e._onMouseOut = function () {
                e._setTexture(e._texture_no)
            }, e
        }
        return n(e, t), e.prototype.initialize = function (t, e) {
            this._texture_no = t, this._texture_no_on = e, this._setTexture(this._texture_no), null != this._texture_no_on && (this.interactive = this.buttonMode = !0, this.on(h.EventType.MOUSEOVER, this._onMouseOver), this.on(h.EventType.MOUSEOUT, this._onMouseOut))
        }, e.prototype.dispose = function () {
            this.interactive = this.buttonMode = !1, this.off(h.EventType.MOUSEOVER, this._onMouseOver), this.off(h.EventType.MOUSEOUT, this._onMouseOut)
        }, e.prototype._setTexture = function (t) {
            this.texture = o.REVAMP_LIST.getTexture(t)
        }, e
    }(PIXI.Sprite)
}