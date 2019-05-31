const function826 = function (t, e, i) {
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
        a = i(23),
        _ = i(8),
        l = i(38),
        u = i(13),
        c = i(827),
        h = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.bg = new _.AreaBox(1, 16777215), e.black = new _.AreaBox(1, 0), e.bgGrad = new PIXI.Sprite(r.default.resources.getUIImage("vignette_frame")), e.shipLayer = new a.Container, e.ship = new PIXI.Sprite, e.overlay = new PIXI.Sprite, e.silhouette1 = new PIXI.Sprite, e.silhouette2 = new PIXI.Sprite, e.text1 = new PIXI.Sprite, e.text2 = new PIXI.Sprite, e.text1.position.set(0), e.text2.position.set(0, o.default.height), e.text2.anchor.set(0, 1), e.text1.visible = !1, e.text2.visible = !1, e.shipLayer.addChild(e.silhouette1, e.silhouette2, e.ship, e.overlay), e.addChild(e.bg, e.bgGrad, e.shipLayer, e.text1, e.text2, e.black), e
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
                var n = new u.ShipLoader;
                n.add(t, !1, "full_x2"), n.add(t, !1, "text_class"), n.add(t, !1, "text_name"), n.load(function () {
                    i.text1.texture = r.default.resources.getShip(t, !1, "text_class"), i.text2.texture = r.default.resources.getShip(t, !1, "text_name");
                    var n = r.default.resources.getShip(t, !1, "full_x2");
                    i.ship.texture = n, i.overlay.texture = n, i.silhouette1.texture = n, i.silhouette2.texture = n, i.overlay.tint = 0, i.silhouette1.tint = 0, i.silhouette2.tint = 0, i.silhouette1.alpha = .4, i.silhouette2.alpha = .15, i._obj = c.SpKaizoConst.getObj(i._ship_mstid), e()
                })
            }, e.prototype._anim1 = function () {
                var t = this,
                    e = this._obj[0];
                this.shipLayer.scale.set(e.scale), this.shipLayer.position.set(e.x, e.y), createjs.Tween.get(this.black).to({
                    alpha: 0
                }, 600);
                var i = createjs.Tween.get(this.shipLayer);
                c.SpKaizoConst.getObject(this._ship_mstid, 0, i)(), i.call(function () {
                    t._anim2()
                }), createjs.Tween.get(this.overlay).to({
                    alpha: 0
                }, 4500), createjs.Tween.get(this.silhouette2).wait(500).to({
                    x: 35
                }, 4e3)
            }, e.prototype._anim2 = function () {
                var t = this,
                    e = this._obj[1];
                this.shipLayer.scale.set(e.scale), this.shipLayer.position.set(e.x, e.y), c.SpKaizoConst.getSilhouetteAnim(this._ship_mstid, 0, this.silhouette1)();
                var i = createjs.Tween.get(this.shipLayer);
                c.SpKaizoConst.getObject(this._ship_mstid, 1, i)(), i.call(function () {
                    t._anim3()
                })
            }, e.prototype._anim3 = function () {
                var t = this,
                    e = this._obj[2];
                this.shipLayer.scale.set(e.scale), this.shipLayer.position.set(e.x, e.y), c.SpKaizoConst.getSilhouetteAnim(this._ship_mstid, 1, this.silhouette1)();
                var i = createjs.Tween.get(this.shipLayer);
                c.SpKaizoConst.getObject(this._ship_mstid, 2, i)(), i.call(function () {
                    t._anim4()
                })
            }, e.prototype._anim4 = function () {
                var t = this,
                    e = this._obj[3];
                this.shipLayer.scale.set(e.scale), this.shipLayer.position.set(e.x, e.y), createjs.Tween.get(null).wait(1e3).call(function () {
                    r.default.sound.voice.play(t._ship_mstid.toString(), 10)
                });
                var i = createjs.Tween.get(this.shipLayer);
                c.SpKaizoConst.getObject(this._ship_mstid, 3, i)(), i.call(function () {
                    var e = createjs.Tween.get(t.shipLayer);
                    c.SpKaizoConst.getObject(t._ship_mstid, 4, e)(), e.call(function () {
                        var e = createjs.Tween.get(t.shipLayer);
                        c.SpKaizoConst.getObject(t._ship_mstid, 5, e)(), e.call(function () {
                            t._anim5()
                        })
                    })
                })
            }, e.prototype._anim5 = function () {
                var t = this,
                    e = this._obj[4];
                this.text1.visible = !0, this.text2.visible = !0, this.shipLayer.scale.set(e.scale), this.shipLayer.position.set(e.x, e.y);
                var i = createjs.Tween.get(this.shipLayer);
                c.SpKaizoConst.getObject(this._ship_mstid, 6, i)(), i.wait(1e3).call(function () {
                    t._03_waitClick()
                })
            }, e.prototype._03_waitClick = function () {
                var t = this,
                    e = new l.GearBtnHome;
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
    e.SpKaizoAnimation = h
}