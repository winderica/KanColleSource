const function825 = function (t, e, i) {
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
        r = i(8),
        s = i(14),
        a = i(13),
        _ = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.bg = new r.AreaBox(1, 16777215), e.black = new r.AreaBox(1), e.bgGrad = new PIXI.Sprite, e.ship = new PIXI.Sprite, e.silhouette = new PIXI.Sprite, e.shipLayer1 = new PIXI.Container, e.shipLayer2 = new PIXI.Container, e.bg.alpha = 0, e.black.alpha = 0, e.bgGrad.alpha = 0, e.shipLayer1.alpha = 0, e.shipLayer2.alpha = 0, e.shipLayer1.x = -290, e.shipLayer2.x = -290, e.shipLayer1.scale.set(.8), e.shipLayer2.scale.set(.8), e.shipLayer1.addChild(e.ship), e.shipLayer2.addChild(e.silhouette), e.addChild(e.bg, e.shipLayer1, e.shipLayer2, e.bgGrad, e.black), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this.bg = null, this.bgGrad = null, this.black = null, this.shipLayer1 = null, this.shipLayer2 = null, this.ship = null, this.silhouette = null, this._cb_onComplete = null
            }, e.prototype.play = function (t, e, i) {
                var n = this;
                this._callback = e, this._cb_onComplete = i, this._preload(t, function () {
                    createjs.Tween.get(n.bg).to({
                        alpha: 1
                    }, 500).call(function () {
                        n.anim1()
                    })
                })
            }, e.prototype._preload = function (t, e) {
                var i = this,
                    n = new s.UIImageLoader("remodel");
                n.add("bg/vignette_frame.png", "vignette_frame"), n.load(function () {
                    var n = new a.ShipLoader;
                    n.add(t[0], !1, "full"), n.add(t[1], !1, "full"), n.load(function () {
                        i.bgGrad.texture = o.default.resources.getUIImage("vignette_frame"), i.ship.texture = o.default.resources.getShip(t[0], !1, "full"), i.silhouette.texture = o.default.resources.getShip(t[1], !1, "full"), i.silhouette.tint = 0;
                        var n = o.default.model.ship_graph.get(t[0]).getCenterOffset(!1),
                            r = o.default.model.ship_graph.get(t[1]).getCenterOffset(!1);
                        i.ship.x = 330 + n.x, i.ship.y = n.y - 50, i.silhouette.x = 330 + r.x, i.silhouette.y = r.y - 50, e()
                    })
                })
            }, e.prototype.anim1 = function () {
                var t = this;
                createjs.Tween.get(this.bgGrad).to({
                    alpha: 1
                }, 1e3), createjs.Tween.get(this.shipLayer1).to({
                    alpha: 1
                }, 1e3).wait(300).call(function () {
                    t.anim2()
                })
            }, e.prototype.anim2 = function () {
                createjs.Tween.get(this.shipLayer1).to({
                    x: 0
                }, 2300, createjs.Ease.quintOut), createjs.Tween.get(this.shipLayer1).wait(300).to({
                    alpha: 0
                }, 1500), createjs.Tween.get(this.shipLayer2).to({
                    x: 0
                }, 2300, createjs.Ease.quintOut), createjs.Tween.get(this.shipLayer2).wait(300).to({
                    alpha: 1
                }, 1500), this.anim3()
            }, e.prototype.anim3 = function () {
                var t = this;
                createjs.Tween.get(this.black).wait(1300).to({
                    alpha: 1
                }, 1e3).call(function () {
                    t.bg.visible = !1, t.shipLayer2.visible = !1, t._callback(), createjs.Tween.get(t).to({
                        alpha: 0
                    }, 1e3).call(function () {
                        t._cb_onComplete()
                    })
                })
            }, e
        }(PIXI.Container);
    e.SpKaizoIntro = _
}