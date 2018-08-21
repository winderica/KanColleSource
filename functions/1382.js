const function1382 = function (t, e, i) {
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
    var o = i(0), r = i(2), s = i(16), a = i(14), _ = i(23), u = i(1383), l = i(63), c = i(44), h = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._view = new PIXI.Container, e
        }

        return n(e, t), Object.defineProperty(e.prototype, "view", {
            get: function () {
                return this._view
            }, enumerable: !0, configurable: !0
        }), e.prototype.preload = function (t, e, i, n, o) {
            var r = this;
            this._attacker = t, this._slot1 = e, this._slot2 = i, this._slot3 = n;
            var s = new a.ShipLoader;
            s.add(this._attacker.mst_id, this._attacker.isDamaged(), "full"), s.load(function () {
                var t = null == r._slot1 ? 0 : r._slot1.mstID, e = null == r._slot2 ? 0 : r._slot2.mstID,
                    i = null == r._slot3 ? 0 : r._slot3.mstID, n = new _.SlotLoader;
                t > 0 && (n.add(t, "item_up"), n.add(t, "btxt_flat")), e > 0 && (n.add(e, "item_up"), n.add(e, "btxt_flat")), i > 0 && (n.add(i, "item_up"), n.add(i, "btxt_flat")), n.load(function () {
                    null != o && o()
                })
            })
        }, e.prototype._start = function () {
            this._canvas = new u.CutinCanvasSpSSF, this.view.addChild(this._canvas), this._ship = new PIXI.Sprite, this._ready()
        }, e.prototype._ready = function () {
            var t = this._attacker.mst_id, e = this._attacker.isDamaged(),
                i = o.default.model.ship_graph.get(t).getBattleOffset(e);
            this._ship.texture = o.default.resources.getShip(t, e, "full"), this._ship.position.set(i.x, i.y), this._canvas.chara.addChild(this._ship), this._shipFlash = new c.ShipFlash(o.default.resources.getShip(t, e, "full")), this._shipFlash.position.set(i.x, i.y), this._canvas.chara.addChild(this._shipFlash), this._canvas.chara.alpha = 0, this._attacker.friend ? (this._canvas.chara.x = -180, this._canvas.chara.y = -107) : (this._canvas.chara.x = 173, this._canvas.chara.y = -65), this._canvas.initialize(this._attacker.friend, this._slot1.mstID, this._slot2.mstID, this._slot3.mstID), this._anim1()
        }, e.prototype._anim1 = function () {
            var t = this;
            this._canvas.bg.show(333), createjs.Tween.get(this._canvas.chara).wait(166).to({
                x: 158 + (this._attacker.friend ? 0 : 203),
                alpha: 1
            }, 300), this._canvas.bg_box.show(266), this._canvas.item_layer.show(400), this._canvas.name_layer.show(600), this._canvas.name_layer.once("complete", function () {
                t._anim2()
            })
        }, e.prototype._anim2 = function () {
            var t = this;
            this.view.emit("attack"), createjs.Tween.get(this._canvas.chara).call(function () {
                t._shipFlash.play()
            }).wait(200).call(function () {
                t._anim3()
            })
        }, e.prototype._anim3 = function () {
            var t = this, e = new l.IntensiveLines;
            e.initialize(), e.alpha = 0, this._view.addChild(e), e.activate(), createjs.Tween.get(e).to({ alpha: 1 }, 200);
            var i = new s.FadeBox(1, 16777215);
            i.alpha = 0, this._view.addChild(i), createjs.Tween.get(i).to({ alpha: 1 }, 500).call(function () {
                t._anim4(e, i)
            })
        }, e.prototype._anim4 = function (t, e) {
            var i = this;
            this._canvas.dispose(), createjs.Tween.get(t).to({ alpha: 0 }, 300), createjs.Tween.get(e).to({ alpha: 0 }, 300).call(function () {
                t.deactivate(), i._view.removeChild(t), i._view.removeChild(e), i._endTask()
            })
        }, e.prototype._endTask = function () {
            this._attacker = null, this._slot1 = null, this._slot2 = null, this._slot3 = null, null != this._view.parent && this._view.parent.removeChild(this._view), this._view = null, this._canvas = null, this._ship = null, t.prototype._endTask.call(this)
        }, e
    }(r.TaskBase);
    e.CutinSpSSF = h
}