const function1379 = function (t, e, i) {
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
    var o = i(2),
        r = i(18),
        s = i(469),
        a = i(1380),
        _ = i(65),
        l = i(44),
        u = function (t) {
            function e(e, i, n, o) {
                var r = t.call(this) || this;
                return r._attacker = e, r._slot1 = i, r._slot2 = n, r._slot3 = o, r._friend = r._attacker.friend, r._canvas = new a.CutinCanvasSpRDJ, r._view = new PIXI.Container, r.view.addChild(r._canvas), r._ship = new PIXI.Sprite, r
            }
            return n(e, t), Object.defineProperty(e.prototype, "view", {
                get: function () {
                    return this._view
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.preload = function (t) {
                if (null != this._preload_task) t();
                else {
                    var e = this._attacker.mst_id,
                        i = this._attacker.isDamaged(),
                        n = null == this._slot1 ? 0 : this._slot1.mstID,
                        o = null == this._slot2 ? 0 : this._slot2.mstID,
                        r = null == this._slot3 ? 0 : this._slot3.mstID;
                    this._preload_task = new s.CutinResourcesPreloadTask(e, i, !0, n, o, r), this._preload_task.start(function () {
                        t()
                    })
                }
            }, e.prototype._start = function () {
                this._ready()
            }, e.prototype._ready = function () {
                this._ship.texture = this._preload_task.getShipTexture();
                var t = this._preload_task.getShipOffset();
                this._ship.position.set(t.x, t.y), this._canvas.chara.addChild(this._ship), this._shipFlash = new l.ShipFlash(this._preload_task.getShipTexture()), this._shipFlash.position.set(t.x, t.y), this._canvas.chara.addChild(this._shipFlash), this._canvas.chara.alpha = 0, this._friend ? (this._canvas.chara.x = -225, this._canvas.chara.y = -87) : (this._canvas.chara.x = 483, this._canvas.chara.y = -138), this._canvas.initialize(this._friend, this._preload_task), this._anim1()
            }, e.prototype._anim1 = function () {
                var t = this;
                this._canvas.bg.show(366), createjs.Tween.get(this._canvas.chara).wait(200).to({
                    x: (this._friend ? 0 : 465) - 104,
                    alpha: 1
                }, 366).wait(1200).call(function () {
                    t._anim2()
                }), this._canvas.layer_item1.show(400), this._canvas.layer_item2.show(833), this._canvas.layer_item3.show(1266), this._canvas.layer_wave.show(533), this._canvas.layer_names.show(400)
            }, e.prototype._anim2 = function () {
                var t = this;
                this.view.emit("attack"), createjs.Tween.get(this._canvas.chara).call(function () {
                    t._shipFlash.play()
                }).wait(200).call(function () {
                    t._anim3()
                })
            }, e.prototype._anim3 = function () {
                var t = this;
                this._canvas.layer_item1.hide(0), this._canvas.layer_item2.hide(0), this._canvas.layer_item3.hide(0);
                var e = new _.IntensiveLines;
                e.initialize(), e.alpha = 0, this._view.addChild(e), e.activate(), createjs.Tween.get(e).to({
                    alpha: 1
                }, 200);
                var i = new r.FadeBox(1, 16777215);
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
                this._attacker = null, this._slot1 = null, this._slot2 = null, this._slot3 = null, null != this._view.parent && this._view.parent.removeChild(this._view), this._view = null, this._canvas = null, this._ship = null, this._preload_task = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.CutinSpRDJ = u
}