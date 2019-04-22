const function821 = function (t, e, i) {
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
        a = i(8),
        _ = i(38),
        l = i(13),
        u = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.bg = new a.AreaBox(1, 16777215), e.black = new a.AreaBox(1, 0), e.bgGrad = new PIXI.Sprite(r.default.resources.getUIImage("vignette_frame")), e.shipLayer = new PIXI.Container, e.ship = new PIXI.Sprite, e.overlay = new PIXI.Sprite, e.silhouette1 = new PIXI.Sprite, e.silhouette2 = new PIXI.Sprite, e.text1 = new PIXI.Sprite, e.text2 = new PIXI.Sprite, e.text1.position.set(0), e.text2.position.set(0, o.default.height), e.text2.anchor.set(0, 1), e.text1.visible = !1, e.text2.visible = !1, e.shipLayer.addChild(e.silhouette1, e.silhouette2, e.ship, e.overlay), e.addChild(e.bg, e.bgGrad, e.shipLayer, e.text1, e.text2, e.black), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this._cb_onComplete = null, this._offset = null, this.removeChildren()
            }, e.prototype.play = function (t, e) {
                var i = this;
                this._cb_onComplete = e, this.preload(t, function () {
                    i._anim1()
                })
            }, e.prototype.preload = function (t, e) {
                var i = this;
                this._ship_mstid = t, this._offset = r.default.model.ship_graph.get(t).getCenterOffset(!1);
                var n = new l.ShipLoader;
                n.add(t, !1, "full_x2"), n.add(t, !1, "text_class"), n.add(t, !1, "text_name"), n.load(function () {
                    i.text1.texture = r.default.resources.getShip(t, !1, "text_class"), i.text2.texture = r.default.resources.getShip(t, !1, "text_name");
                    var n = r.default.resources.getShip(t, !1, "full_x2");
                    i.ship.texture = n, i.overlay.texture = n, i.silhouette1.texture = n, i.silhouette2.texture = n, i.overlay.tint = 0, i.silhouette1.tint = 0, i.silhouette2.tint = 0, i.silhouette1.alpha = .4, i.silhouette2.alpha = .15, e()
                })
            }, e.prototype._anim1 = function () {
                var t = this;
                this.shipLayer.scale.set(2), this.shipLayer.position.set(-1300, -1750), createjs.Tween.get(this.black).to({
                    alpha: 0
                }, 600), createjs.Tween.get(this.shipLayer).wait(500).to({
                    x: 100,
                    y: -1070
                }, 1e3, createjs.Ease.cubicOut).wait(400).call(function () {
                    t._anim2()
                }), createjs.Tween.get(this.shipLayer.scale).wait(500).to({
                    x: 1.25,
                    y: 1.25
                }, 1e3, createjs.Ease.cubicOut), createjs.Tween.get(this.overlay).to({
                    alpha: 0
                }, 4500), createjs.Tween.get(this.silhouette2).wait(500).to({
                    x: 35
                }, 4e3)
            }, e.prototype._anim2 = function () {
                var t = this;
                this.silhouette1.x += 5, this.shipLayer.scale.set(1), this.shipLayer.position.set(-900, -1700), createjs.Tween.get(this.silhouette1).wait(800).to({
                    alpha: .2
                }, 600), createjs.Tween.get(this.shipLayer).wait(200).to({
                    x: -1500,
                    y: -1990
                }, 1200, createjs.Ease.cubicInOut), createjs.Tween.get(this.shipLayer.scale).wait(200).to({
                    x: 1.6,
                    y: 1.6
                }, 1200, createjs.Ease.cubicInOut).wait(100).call(function () {
                    t._anim3()
                })
            }, e.prototype._anim3 = function () {
                var t = this;
                this.silhouette1.visible = !1, this.shipLayer.scale.set(2), this.shipLayer.position.set(-1830, -1270), createjs.Tween.get(this.shipLayer).wait(300).to({
                    x: -805,
                    y: -290
                }, 1e3, createjs.Ease.quadInOut), createjs.Tween.get(this.shipLayer.scale).wait(300).to({
                    x: .75,
                    y: .75
                }, 1e3, createjs.Ease.quadInOut).wait(500).call(function () {
                    t._anim4()
                })
            }, e.prototype._anim4 = function () {
                var t = this;
                this.shipLayer.scale.set(1.6), this.shipLayer.position.set(-600, -900), createjs.Tween.get(null).wait(1e3).call(function () {
                    r.default.sound.voice.play(t._ship_mstid.toString(), 10)
                }), createjs.Tween.get(this.shipLayer).to({
                    x: -1230,
                    y: -1570
                }, 300, createjs.Ease.cubicOut), createjs.Tween.get(this.shipLayer.scale).to({
                    x: 2.5,
                    y: 2.5
                }, 300, createjs.Ease.cubicOut).wait(300).call(function () {
                    createjs.Tween.get(t.shipLayer).to({
                        x: -3400,
                        y: -360
                    }, 800, createjs.Ease.cubicOut), createjs.Tween.get(t.shipLayer.scale).to({
                        x: 2.6,
                        y: 2.6
                    }, 800, createjs.Ease.cubicOut).wait(300).call(function () {
                        createjs.Tween.get(t.shipLayer).to({
                            x: -3820,
                            y: -340
                        }, 100), createjs.Tween.get(t.shipLayer.scale).to({
                            x: 2.9,
                            y: 2.9
                        }, 100).call(function () {
                            t._anim5()
                        })
                    })
                })
            }, e.prototype._anim5 = function () {
                var t = this;
                this.text1.visible = !0, this.text2.visible = !0, this.shipLayer.scale.set(1.2), this.shipLayer.position.set(-740, -235), createjs.Tween.get(this.shipLayer).to({
                    x: -380,
                    y: 10
                }, 1e3, createjs.Ease.quartOut), createjs.Tween.get(this.shipLayer.scale).to({
                    x: .85,
                    y: .85
                }, 1e3, createjs.Ease.quartOut).wait(1e3).call(function () {
                    t._03_waitClick()
                })
            }, e.prototype._03_waitClick = function () {
                var t = this,
                    e = new _.GearBtnHome;
                e.initialize(), e.x = o.default.width - e.width / 2, e.y = o.default.height - e.height / 2, e.activate(), this.addChild(e);
                var i = new a.AreaBox(0);
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
    e.SpKaizoAnimation = u
}