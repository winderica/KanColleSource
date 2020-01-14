const function637 = function (t, e, i) {
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
    var o = i(1),
        r = i(15),
        s = i(10),
        a = i(638),
        _ = function (t) {
            function e(e) {
                void 0 === e && (e = null);
                var i = t.call(this) || this;
                return i._closeCb = e, i._container = null, i._base = null, i._chara = null, i._arrow = null, i._back = null, i
            }
            return n(e, t), e.prototype.initialize = function (t) {
                var e = this;
                new r.UIImageLoader("port").add("port_tutorial.json").load(function () {
                    e._container = new PIXI.Container, e._container.interactive = !0, e._container.buttonMode = !0, e._container.on(o.EventType.CLICK, e.fadeOut.bind(e, !1)), e._base = new PIXI.Sprite, e._container.addChild(e._base), e._chara = new PIXI.Container;
                    var i = new PIXI.Sprite(a.PORT_TUTORIAL.getTexture(1));
                    i.name = "chara1";
                    var n = new PIXI.Sprite(a.PORT_TUTORIAL.getTexture(2));
                    n.name = "chara2", n.visible = !1, e._chara.addChild(i, n), e._container.addChild(e._chara), e._arrow = new PIXI.Sprite(a.PORT_TUTORIAL.getTexture(0)), e._container.addChild(e._arrow), e._back = new PIXI.Sprite(s.COMMON_MISC.getTexture(22)), e._back.anchor.set(.5, 0), e._back.visible = !1, e._back.interactive = !0, e._back.buttonMode = !0, e._back.on(o.EventType.CLICK, e.fadeOut.bind(e, !0)), e.addChild(e._container, e._back), e.update(t), e.activate()
                })
            }, e.prototype.update = function (t) {
                return this.alpha = 1, t < 10 ? this._tutorial1() : t < 20 ? this._tutorial2() : t < 30 ? this._tutorial3() : t < 40 ? this._tutorial4() : t < 50 ? this._tutorial5() : this._tutorial6()
            }, e.prototype.fadeOut = function (t) {
                var e = this;
                void 0 === t && (t = !1), createjs.Tween.get(this).to({
                    alpha: 0
                }, 300).call(function () {
                    e.visible = !1, t && null !== e._closeCb && e._closeCb()
                })
            }, e.prototype.activate = function () {
                var t = this;
                if (null !== this._chara && (this.deactivate(), this._tweenChara = createjs.Tween.get({}, {
                        loop: !0
                    }).wait(500).call(function () {
                        for (var e = 0, i = t._chara.children.length; e < i; e++) {
                            var n = t._chara.children[e],
                                o = n.visible;
                            n.visible = !o
                        }
                    }), this._arrow.visible)) {
                    this._tweenArrow = createjs.Tween.get(this._arrow, {
                        loop: !0,
                        paused: !0
                    });
                    var e = [];
                    switch (this._arrowAnimationAlign) {
                        case "up":
                            var i = this._arrow.y;
                            e = [{
                                y: i - 18
                            }, {
                                y: i
                            }];
                            break;
                        case "left":
                        default:
                            var n = this._arrow.x;
                            e = [{
                                x: n - 18
                            }, {
                                x: n
                            }]
                    }
                    this._tweenArrow.wait(300).set(e[0]).wait(300).set(e[1]).setPaused(!1)
                }
            }, e.prototype.deactivate = function () {
                this._tweenArrow && (this._tweenArrow.setPaused(!0), createjs.Tween.removeTweens(this._tweenArrow), this._tweenArrow = null), this._tweenChara && (this._tweenChara.setPaused(!0), createjs.Tween.removeTweens(this._tweenChara), this._tweenChara = null), this._chara.getChildByName("chara1").visible = !0, this._chara.getChildByName("chara2").visible = !1
            }, e.prototype._tutorial1 = function () {
                this._base.texture = a.PORT_TUTORIAL.getTexture(3), this._base.position.set(0, 43), this._chara.position.set(350, 0), this._arrow.position.set(-75, 110), this._arrow.rotation = 0, this._back.visible = !1, this.position.set(510, 370), this._arrowAnimationAlign = "left"
            }, e.prototype._tutorial2 = function () {
                this._base.texture = a.PORT_TUTORIAL.getTexture(4), this._base.position.set(0, 43), this._chara.position.set(350, 0), this._arrow.position.set(-75, 110), this._arrow.rotation = 0, this._back.visible = !1, this.position.set(400, 36), this._arrowAnimationAlign = "left"
            }, e.prototype._tutorial3 = function () {
                this._base.texture = a.PORT_TUTORIAL.getTexture(5), this._base.position.set(0, 43), this._chara.position.set(350, 0), this._arrow.position.set(384, -20), this._arrow.rotation = 90 * Math.PI / 180, this._back.visible = !1, this.position.set(508, 88), this._arrowAnimationAlign = "up"
            }, e.prototype._tutorial4 = function () {
                this._base.texture = a.PORT_TUTORIAL.getTexture(6), this._base.position.set(0, 43), this._chara.position.set(350, 0), this._arrow.position.set(-75, 110), this._arrow.rotation = 0, this._back.visible = !1, this.position.set(437, 239), this._arrowAnimationAlign = "left"
            }, e.prototype._tutorial5 = function () {
                this._base.texture = a.PORT_TUTORIAL.getTexture(7), this._base.position.set(0, 43), this._chara.position.set(350, 0), this._arrow.position.set(-75, 110), this._arrow.rotation = 0, this._back.visible = !1, this.position.set(220, 174), this._arrowAnimationAlign = "left"
            }, e.prototype._tutorial6 = function () {
                this._base.texture = a.PORT_TUTORIAL.getTexture(8), this._base.position.set(0, 43), this._chara.position.set(750, 4), this._arrow.visible = !1, this._arrow.rotation = 0, this._back.visible = !0, this._back.position.set(Math.round(this._base.width / 2), this._base.height + 30), this.position.set(126, 212), this._arrowAnimationAlign = "none", this._container.buttonMode = !1, this._container.removeAllListeners(o.EventType.CLICK)
            }, e.prototype.dispose = function () {
                this.deactivate(), this._container.interactive = !1, this._container.buttonMode = !1, this._container.removeAllListeners(o.EventType.CLICK), this._back.interactive = !0, this._back.buttonMode = !0, this._back.removeAllListeners(o.EventType.CLICK), this.removeChildren()
            }, e
        }(PIXI.Container);
    e.Tutorial = _
}