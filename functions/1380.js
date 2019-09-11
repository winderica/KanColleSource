const function1380 = function (t, e, i) {
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
        s = i(20),
        a = i(6),
        _ = i(44),
        l = i(460),
        u = i(1381),
        c = i(65),
        h = function (t) {
            function e(e, i, n, o, r) {
                var s = t.call(this, i, n, o, r, !0) || this;
                return s._layer = e, s._friend = s._attacker.friend, s
            }
            return n(e, t), e.prototype._start = function () {
                var t = this,
                    e = this._friend ? 1 : -1;
                this._canvas = new u.CutinKuboNightCanvas, this._canvas.bg.alpha = 0;
                var i = this._attacker.mst_id,
                    n = this._attacker.isDamaged(),
                    r = o.default.resources.getShip(i, n, "full"),
                    l = new PIXI.Sprite(r),
                    c = new _.ShipFlash(r),
                    h = o.default.model.ship_graph.get(i).getBattleOffset(n);
                l.position.set(h.x, h.y), c.position.set(h.x, h.y), this._canvas.chara.addChild(l), this._canvas.chara.addChild(c), this._canvas.chara.alpha = 0, this._canvas.chara.x = (this._friend ? 0 : 600) - 54, this._canvas.chara.y = 615, this._canvas.plane1.position.set(600 - 917 * e, 387), this._canvas.plane1.initialize(this._slot_mst_id1, this._friend);
                var p, d = new s.TweenTask;
                this._canvas.bar1.initialize(this._slot_mst_id1, this._friend), p = 1600, d.addTweens(this._canvas.bar1.createTween(p)), this._canvas.bar2.initialize(this._slot_mst_id2, this._friend), p = 1600, d.addTweens(this._canvas.bar2.createTween(p)), this._canvas.bar3.initialize(this._slot_mst_id3, this._friend), p = 1600, d.addTweens(this._canvas.bar3.createTween(p)), d.start(function () {
                    var e = new s.TweenTask;
                    e.addTweens(t._canvas.bar1.createTween2(1300)), e.addTweens(t._canvas.bar2.createTween2(1300)), e.addTweens(t._canvas.bar3.createTween2(1300)), e.start()
                }), this._layer.addChild(this._canvas), createjs.Tween.get(this._canvas.bg).to({
                    alpha: 1
                }, 250), createjs.Tween.get(this._canvas.chara).to({
                    y: -87,
                    alpha: 1
                }, 500).wait(700).call(function () {
                    c.play()
                }).wait(100).wait(1500).call(function () {
                    c.play()
                }).wait(100).call(function () {
                    null != t._cb_onAttack && t._cb_onAttack()
                }).wait(100).to({
                    y: -351,
                    alpha: 0
                }, 500), createjs.Tween.get(this._canvas.plane1).wait(300).call(function () {
                    t._canvas.plane1.activate()
                }).to({
                    x: 600 - 38 * e
                }, 400).wait(700).to({
                    x: 600 + 863 * e
                }, 400).call(function () {
                    t._canvas.plane1.deactivate()
                }), createjs.Tween.get(null).wait(750).call(function () {
                    a.SE.play("105")
                }).wait(250).call(function () {
                    a.SE.play("109")
                }).wait(600).call(function () {
                    a.SE.play("105")
                }).wait(200).call(function () {
                    a.SE.play("109")
                }), this._anim2()
            }, e.prototype._anim2 = function () {
                var t = this,
                    e = new c.IntensiveLines;
                e.initialize(), e.alpha = 0, this._layer.addChild(e), createjs.Tween.get(e).wait(3100).call(function () {
                    e.activate()
                }).to({
                    alpha: 1
                }, 200).wait(300).to({
                    alpha: 0
                }, 300);
                var i = new r.AreaBox(1, 16777215);
                i.alpha = 0, this._layer.addChild(i), createjs.Tween.get(i).wait(3100).to({
                    alpha: 1
                }, 500).call(function () {
                    t._layer.removeChild(t._canvas)
                }).to({
                    alpha: 0
                }, 300).call(function () {
                    t._layer.removeChild(e), t._layer.removeChild(i), t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._layer = null, this._canvas = null, t.prototype._endTask.call(this)
            }, e
        }(l.CutinKuboBase);
    e.CutinKuboNight = h
}