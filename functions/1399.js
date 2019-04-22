const function1399 = function (t, e, i) {
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
        a = i(13),
        _ = i(25),
        l = i(1400),
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
            }), e.prototype.preload = function (t, e, i, n, o) {
                var r = this;
                this._attacker = t, this._slot1 = e, this._slot2 = i, this._slot3 = n;
                var s = new a.ShipLoader,
                    l = this._attacker.isDamaged(),
                    u = this._attacker.mst_id;
                (571 != u && 576 != u || 0 != l) && (541 != u && 573 != u || 0 != l) ? s.add(u, l, "full"): s.add(u, !1, "special"), s.load(function () {
                    var t = null == r._slot1 ? 0 : r._slot1.mstID,
                        e = null == r._slot2 ? 0 : r._slot2.mstID,
                        i = null == r._slot3 ? 0 : r._slot3.mstID,
                        n = new _.SlotLoader;
                    t > 0 && (n.add(t, "item_up"), n.add(t, "btxt_flat")), e > 0 && (n.add(e, "item_up"), n.add(e, "btxt_flat")), i > 0 && (n.add(i, "item_up"), n.add(i, "btxt_flat")), n.load(function () {
                        null != o && o()
                    })
                })
            }, e.prototype._start = function () {
                this._canvas = new l.CutinCanvasSpSSS, this.view.addChild(this._canvas), this._ship = new PIXI.Sprite, this._ready()
            }, e.prototype._ready = function () {
                var t, e, i = this._attacker.mst_id,
                    n = this._attacker.isDamaged();
                571 != i && 576 != i || 0 != n ? 541 == i && 0 == n ? (t = new PIXI.Point(-227, 165), e = "special") : 573 == i && 0 == n ? (t = new PIXI.Point(-115, 184), e = "special") : (t = o.default.model.ship_graph.get(i).getBattleOffset(n), e = "full") : (t = new PIXI.Point(-139, 201), e = "special"), this._ship.texture = o.default.resources.getShip(i, n, e), this._ship.position.set(t.x, t.y), this._canvas.chara.addChild(this._ship), this._shipFlash = new c.ShipFlash(o.default.resources.getShip(i, n, e)), this._shipFlash.position.set(t.x, t.y), this._canvas.chara.addChild(this._shipFlash), this._canvas.chara.alpha = 0, this._attacker.friend ? (this._canvas.chara.x = -150, this._canvas.chara.y = -87) : (this._canvas.chara.x = 173, this._canvas.chara.y = -64), this._canvas.initialize(this._attacker.friend, this._slot1.mstID, this._slot2.mstID, this._slot3.mstID), this._anim1()
            }, e.prototype._anim1 = function () {
                var t = this;
                this._canvas.bg.show(333), createjs.Tween.get(this._canvas.chara).wait(166).to({
                    x: 48 + (this._attacker.friend ? 0 : 336),
                    alpha: 1
                }, 300), this._canvas.item1.show(400), this._canvas.item2.show(833), this._canvas.item3.show(1266);
                var e = this._attacker.friend ? 75 : 1125;
                createjs.Tween.get(this._canvas.name1).wait(400).to({
                    x: e,
                    alpha: 1
                }, 200), createjs.Tween.get(this._canvas.name2).wait(833).to({
                    x: e,
                    alpha: 1
                }, 200), createjs.Tween.get(this._canvas.name3).wait(1266).to({
                    x: e,
                    alpha: 1
                }, 200).call(function () {
                    t._anim2()
                })
            }, e.prototype._anim2 = function () {
                var t = this;
                this.view.emit("attack"), createjs.Tween.get(this._canvas.chara).wait(133).call(function () {
                    t._shipFlash.play()
                }).wait(200).call(function () {
                    t._shipFlash.play()
                }).wait(133).call(function () {
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
                this._attacker = null, this._slot1 = null, this._slot2 = null, this._slot3 = null, null != this._view.parent && this._view.parent.removeChild(this._view), this._view = null, this._canvas = null, this._ship = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.CutinSpSSS = h
}