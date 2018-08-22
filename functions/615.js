const function615 = function (t, e, i) {
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
    var o = i(0), r = i(2), s = i(24), a = i(65), _ = i(22), u = i(64), l = i(9), c = i(616), h = i(617),
        p = i(618), d = i(202), f = function (t) {
            function e(e, i, n, o) {
                var r = t.call(this) || this;
                return r._layer = e, r._items = i, r._direction = n, r._effType = o, r
            }

            return n(e, t), e.prototype._start = function () {
                switch (this._effType) {
                    case 0:
                        this._effctSlotitem();
                        break;
                    case 1:
                        this._effctUseitem();
                        break;
                    case 2:
                        this._effctTojoin()
                }
            }, e.prototype._effctSlotitem = function () {
                for (var t = this, e = new p.MeltIntoSprite, i = 0, n = this._items; i < n.length; i++) {
                    var o = n[i];
                    e.add(o)
                }
                e.initialize(function () {
                    var i = 1 == t._direction, n = (i ? 0 : 1200) + e.width / 2 * (i ? -1 : 1),
                        o = 600 + e.width / 4 * (i ? -1 : 1), r = n + .5 * (o - n);
                    e.x = n, e.y = 720, t._layer.addChild(e);
                    var s = new c.MeltIntoSlotitemFilter(o, e.width, t._direction);
                    e.filters = [s];
                    for (var a = new PIXI.Point(n, 720), h = new PIXI.Point(r, 0), p = new PIXI.Point(o, 240), d = u.TweenUtil.signOut, f = u.TweenUtil.create2BezierPoints(a, h, p, 1e3, d), y = createjs.Tween.get(e), v = 0, g = f; v < g.length; v++) {
                        var m = g[v];
                        y.to({ x: m.x, y: m.y }, m.t)
                    }
                    var b = { rate: 1, grad: .4 };
                    createjs.Tween.get(b, {
                        onChange: function () {
                            s.uniforms.x = e.x, s.uniforms.rate = b.rate, s.uniforms.grad = b.grad
                        }
                    }).wait(600).to({ rate: -.4 }, 400).wait(500).call(function () {
                        t._layer.removeChild(e), t._endTask()
                    });
                    var w = new PIXI.Sprite(l.COMMON_MISC.getTexture(116));
                    w.anchor.set(.5), w.alpha = 0;
                    var x = new _.Container;
                    x.x = o, x.y = 240, x.scale.set(.5), x.addChild(w), t._layer.addChild(x), createjs.Tween.get(x).wait(600).to({
                        scaleX: 1,
                        scaleY: 1
                    }, 800, createjs.Ease.cubicOut), createjs.Tween.get(w).wait(600).to({ alpha: .9 }, 200).wait(150).to({ alpha: 0 }, 450).call(function () {
                        var t = x.parent;
                        null != t && t.removeChild(x)
                    })
                })
            }, e.prototype._effctUseitem = function () {
                for (var t = this, e = new p.MeltIntoSprite, i = 0, n = this._items; i < n.length; i++) {
                    var o = n[i];
                    e.add(o)
                }
                e.initialize(function () {
                    var i = 1 == t._direction, n = (i ? 0 : 1200) + e.width / 2 * (i ? -1 : 1),
                        o = 600 + e.width / 4 * (i ? -1 : 1), r = n + .5 * (o - n);
                    e.x = n, e.y = 720, t._layer.addChild(e);
                    var s = new h.MeltIntoUseitemFilter(o, 240, e.width, e.height, t._direction);
                    e.filters = [s];
                    for (var a = new PIXI.Point(n, 720), c = new PIXI.Point(r, 0), p = new PIXI.Point(o, 240), d = u.TweenUtil.signOut, f = u.TweenUtil.create2BezierPoints(a, c, p, 1e3, d), y = createjs.Tween.get(e), v = 0, g = f; v < g.length; v++) {
                        var m = g[v];
                        y.to({ x: m.x, y: m.y }, m.t)
                    }
                    var b = { rate: 1, grad: .4 };
                    createjs.Tween.get(b, {
                        onChange: function () {
                            s.uniforms.x = e.x, s.uniforms.rate = b.rate, s.uniforms.grad = b.grad
                        }
                    }).wait(600).to({ rate: -.4 }, 400).wait(500).call(function () {
                        t._layer.removeChild(e), t._endTask()
                    });
                    var w = new PIXI.Sprite(l.COMMON_MISC.getTexture(116));
                    w.anchor.set(.5), w.alpha = 0;
                    var x = new _.Container;
                    x.x = o, x.y = 240, x.scale.set(.5), x.addChild(w), t._layer.addChild(x), createjs.Tween.get(x).wait(600).to({
                        scaleX: 1,
                        scaleY: 1
                    }, 800, createjs.Ease.cubicOut), createjs.Tween.get(w).wait(600).to({ alpha: .9 }, 200).wait(150).to({ alpha: 0 }, 450).call(function () {
                        var t = x.parent;
                        null != t && t.removeChild(x)
                    })
                })
            }, e.prototype._effctTojoin = function () {
                var t = this, e = this._items[0].id, i = this._items[0].type;
                this._getTextureForTojoinEffct(e, i, function (e) {
                    var i = new d.CenteringSprite(e);
                    i.x = 600 + 195 * (1 == t._direction ? -1 : 1), i.y = 240, i.scale.set(1.1), i.alpha = 0, t._layer.addChild(i), createjs.Tween.get(i).to({
                        scaleX: 1,
                        scaleY: 1,
                        alpha: 1
                    }, 300).wait(250).to({ x: 600, alpha: 0 }, 600, createjs.Ease.sineIn).wait(500).call(function () {
                        t._layer.removeChild(i), t._endTask()
                    })
                })
            }, e.prototype._getTextureForTojoinEffct = function (t, e, i) {
                if (6 == e) {
                    var n = new a.UseitemLoader;
                    n.add(t, 1), n.load(function () {
                        if (i) {
                            var e = o.default.resources.getUseitem(t, 1);
                            return i(e)
                        }
                    })
                } else if (2 == e) {
                    var n = new s.SlotLoader;
                    n.add(t, "card"), n.load(function () {
                        if (i) {
                            var e = o.default.resources.getSlotitem(t, "card");
                            return i(e)
                        }
                    })
                }
            }, e.prototype._endTask = function () {
                this._layer = null, this._items = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.MeltIntoTask = f
}