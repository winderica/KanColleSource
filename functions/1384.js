const function1384 = function (t, e, i) {
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
        r = i(2),
        s = i(18),
        a = i(14),
        _ = i(25),
        l = i(1385),
        u = i(65),
        c = i(45),
        h = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._view = new PIXI.Container, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "view", {
                get: function () {
                    return this._view
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.preload = function (t, e, i, n) {
                var o = this;
                this._attacker = t, this._slot1 = e, this._slot2 = i;
                var r = new a.ShipLoader;
                r.add(this._attacker.mst_id, this._attacker.isDamaged(), "full"), r.load(function () {
                    var t = null == o._slot1 ? 0 : o._slot1.mstID,
                        e = null == o._slot2 ? 0 : o._slot2.mstID,
                        i = new _.SlotLoader;
                    t > 0 && (i.add(t, "item_up"), i.add(t, "btxt_flat")), e > 0 && (i.add(e, "item_up"), i.add(e, "btxt_flat")), i.load(function () {
                        null != n && n()
                    })
                })
            }, e.prototype._start = function () {
                this._canvas = new l.CutinCanvasSpSR, this.view.addChild(this._canvas), this._ship = new PIXI.Sprite, this._ready()
            }, e.prototype._ready = function () {
                var t = this._attacker.mst_id,
                    e = this._attacker.isDamaged(),
                    i = o.default.model.ship_graph.get(t).getBattleOffset(e);
                this._ship.texture = o.default.resources.getShip(t, e, "full"), this._ship.position.set(i.x, i.y), this._canvas.chara.addChild(this._ship), this._shipFlash = new c.ShipFlash(o.default.resources.getShip(t, e, "full")), this._shipFlash.position.set(i.x, i.y), this._canvas.chara.addChild(this._shipFlash), this._canvas.chara.alpha = 0, this._attacker.friend ? (this._canvas.chara.x = -399, this._canvas.chara.y = -54) : (this._canvas.chara.x = 676, this._canvas.chara.y = -54), this._canvas.initialize(this._attacker.friend, this._slot1.mstID, this._slot2.mstID), this._anim1()
            }, e.prototype._anim1 = function () {
                var t = this;
                this._canvas.bg.show(200), createjs.Tween.get(this._canvas.chara).wait(200).to({
                    x: (this._attacker.friend ? 0 : 480) - 104,
                    y: (this._attacker.friend ? 0 : 23) - 87,
                    alpha: 1
                }, 300).wait(1200).call(function () {
                    t._anim2()
                }), this._canvas.layer_bg.show(400), this._canvas.layer_item.show(400), this._canvas.layer_name.show(400), this._canvas.layer_center.show(733), this._canvas.layer_center_name.show(1300)
            }, e.prototype._anim2 = function () {
                var t = this;
                this.view.emit("attack"), createjs.Tween.get(this._canvas.chara).call(function () {
                    t._shipFlash.play()
                }).wait(200).call(function () {
                    t._anim3()
                })
            }, e.prototype._anim3 = function () {
                var t = this,
                    e = new u.IntensiveLines;
                e.initialize(), e.alpha = 0, this._view.addChild(e), e.activate(), createjs.Tween.get(e).to({
                    alpha: 1
                }, 200);
                var i = new s.FadeBox(1, 16777215);
                i.alpha = 0, this._view.addChild(i), createjs.Tween.get(i).to({
                    alpha: 1
                }, 500).call(function () {
                    t._anim4(e, i)
                })
            }, e.prototype._anim4 = function (t, e) {
                var i = this;
                this._canvas.dispose(), createjs.Tween.get(t).to({
                    alpha: 0
                }, 300), createjs.Tween.get(e).to({
                    alpha: 0
                }, 300).call(function () {
                    t.deactivate(), i._view.removeChild(t), i._view.removeChild(e), i._endTask()
                })
            }, e.prototype._endTask = function () {
                this._attacker = null, this._slot1 = null, this._slot2 = null, null != this._view.parent && this._view.parent.removeChild(this._view), this._view = null, this._canvas = null, this._ship = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.CutinSpSR = h
}