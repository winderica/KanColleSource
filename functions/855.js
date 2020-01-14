const function855 = function (t, e, i) {
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
        r = i(0),
        s = i(1),
        a = i(20),
        _ = i(8),
        u = i(41),
        l = i(61),
        c = i(13),
        h = i(3),
        p = i(856),
        d = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._white = new _.AreaBox(1, 16777215), e._holoBG = new l.RarityBG, e._holoBG.visible = !1, e._textKaiso = new PIXI.Sprite(h.REMODEL_ANIMATION.getTexture(10)), e._textKaiso.visible = !1, e._cutinBar = new p.CutinBar, e._shipFull = new PIXI.Sprite, e._shipFull.visible = !1, e._shipCard = new PIXI.Sprite, e._shipCard.visible = !1, e
            }
            return n(e, t), e.prototype.dispose = function () {
                this._cb_onComplete = null, this._offset = null, this._white = null, this._commonBG.dispose(), this._commonBG = null, this._holoBG.dispose(), this._holoBG = null, this._textKaiso = null, this._cutinBar = null, this._shipFull = null, this._shipCard = null, this.removeChildren()
            }, e.prototype.preload = function (t, e, i, n) {
                var o = this;
                this._ship_mstid = t, this._offset = i;
                var s = new c.ShipLoader;
                s.add(t, e, "full"), s.add(t, e, "card"), s.load(function () {
                    o._shipFull.texture = r.default.resources.getShip(t, e, "full"), o._shipCard.texture = r.default.resources.getShip(t, e, "card"), o._commonBG = new l.RarityBG, o._commonBG.initiailzeForShip(3, function () {
                        o._holoBG.initiailzeForShip(6, function () {
                            null != n && n()
                        })
                    })
                })
            }, e.prototype.play = function (t) {
                var e = this;
                this._cb_onComplete = t, this.removeChildren(), this.addChild(this._commonBG, this._textKaiso, this._cutinBar, this._white), r.default.settings.renderer.plugins.prepare.upload(this._shipFull, function () {
                    r.default.settings.renderer.plugins.prepare.upload(e._shipCard, function () {
                        createjs.Tween.get(null).wait(200).call(function () {
                            e._00_intro()
                        })
                    })
                })
            }, e.prototype._00_intro = function () {
                var t, e = this,
                    i = new a.TweenTask;
                this._textKaiso.x = -288, this._textKaiso.y = 395, t = createjs.Tween.get(this._textKaiso).set({
                    visible: !0
                }).to({
                    x: 756
                }, 700, createjs.Ease.cubicOut).wait(100).to({
                    x: 1122
                }, 700, createjs.Ease.cubicIn).set({
                    visible: !1
                }), i.addTween(t), this._cutinBar.x = 0, this._cutinBar.y = 270, this._cutinBar.mask.scale.y = 0, t = createjs.Tween.get(this._cutinBar.mask.scale).to({
                    y: 1
                }, 700, createjs.Ease.cubicOut).wait(100).to({
                    y: 0
                }, 700, createjs.Ease.cubicIn).set({
                    visible: !1
                }), i.addTween(t), t = createjs.Tween.get(this._white).to({
                    alpha: 0
                }, 700, createjs.Ease.cubicOut).set({
                    visible: !1
                }), i.addTween(t), i.start(function () {
                    e.removeChild(e._textKaiso), e.removeChild(e._cutinBar), e._cutinBar.dispose(), e.removeChild(e._white), e._01_showShip()
                })
            }, e.prototype._01_showShip = function () {
                var t, e = this,
                    i = new a.TweenTask,
                    n = new PIXI.Container;
                n.addChild(this._holoBG), n.addChild(this._shipFull), this.addChild(n);
                var r = new PIXI.Graphics;
                r.beginFill(0, 0), r.drawRect(-o.default.width / 2, -o.default.height / 2, o.default.width, o.default.height), r.endFill(), r.x = o.default.width / 2, r.y = o.default.height / 2, r.scale.y = 0, this.addChild(r), n.mask = r, this._holoBG.visible = !0, this._shipFull.x = 201 + this._offset.x, this._shipFull.y = 342 + this._offset.y, t = createjs.Tween.get(this._shipFull).set({
                    visible: !0
                }).to({
                    y: -66 + this._offset.y
                }, 2400), i.addTween(t), t = createjs.Tween.get(r.scale).to({
                    y: 1
                }, 500).call(function () {
                    e._commonBG.visible = !1, n.mask.visible = !1
                }), i.addTween(t), i.start(function () {
                    e.removeChild(e._commonBG), e.removeChild(e.mask), n.mask = null, e._02_changeToCard(n)
                })
            }, e.prototype._02_changeToCard = function (t) {
                var e = this;
                r.default.sound.voice.play(this._ship_mstid.toString(), 10);
                var i, n = new a.TweenTask;
                i = createjs.Tween.get(this._shipFull).wait(600).to({
                    x: -147 + this._offset.x,
                    alpha: .5
                }, 900, createjs.Ease.sineOut).to({
                    x: 201 + this._offset.x,
                    alpha: 0
                }, 900, createjs.Ease.sineIn).set({
                    visible: !1
                }), n.addTween(i), this._shipCard.x = 443, this._shipCard.y = 135, this._shipCard.alpha = 0, t.addChild(this._shipCard), i = createjs.Tween.get(this._shipCard).wait(600).set({
                    visible: !0
                }).to({
                    x: 770,
                    alpha: .5
                }, 900, createjs.Ease.sineOut).to({
                    x: 443,
                    alpha: 1
                }, 900, createjs.Ease.sineIn), n.addTween(i), n.start(function () {
                    t.removeChild(e._shipFull), e._03_waitClick()
                })
            }, e.prototype._03_waitClick = function () {
                var t = this,
                    e = new u.GearBtnHome;
                e.initialize(), e.x = o.default.width - e.width / 2, e.y = o.default.height - e.height / 2, e.activate(), this.addChild(e);
                var i = new _.AreaBox(0);
                i.buttonMode = !0, this.addChild(i), i.once(s.EventType.CLICK, function () {
                    t.removeChild(i), t._04_fadeOut(e)
                })
            }, e.prototype._04_fadeOut = function (t) {
                var e = this;
                createjs.Tween.get(this).to({
                    alpha: 0
                }, 100).call(function () {
                    t.dispose(), e.removeChild(t), null != e._cb_onComplete && e._cb_onComplete()
                })
            }, e
        }(PIXI.Container);
    e.KaizoAnimationMain = d
}