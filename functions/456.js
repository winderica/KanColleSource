const function456 = function (t, e, i) {
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
        s = i(254),
        a = i(44),
        _ = function (t) {
            function e(e, i, n, o) {
                return t.call(this, e, i, n, o) || this
            }
            return n(e, t), e.prototype.resume = function () {
                var t = this;
                null != this._slot2 ? (this._telop2.initialize(this._slot2.mstID, this._attacker.friend), this._view.addChildAt(this._telop2, 0), this._telop2.play(), createjs.Tween.get(this).wait(150).call(function () {
                    t._resume()
                })) : this._resume()
            }, e.prototype._start = function () {
                var t = this,
                    e = this._attacker.mst_id,
                    i = this._attacker.isDamaged();
                this._ship_sprite = new PIXI.Sprite(r.default.resources.getShip(e, i, "full")), this._shipFlash = new a.ShipFlash(r.default.resources.getShip(e, i, "full"));
                var n = r.default.model.ship_graph.get(e).getBattleOffset(i);
                this._ship_sprite.x = n.x, this._ship_sprite.y = n.y;
                var s = this._base_pos,
                    _ = this._friend ? 1 : -1;
                if (this._view.chara.position.set(s.x - 180 * _, s.y + 120), this._view.chara.alpha = 0, this._view.chara.addChild(this._ship_sprite), this._view.chara.addChild(this._shipFlash), createjs.Tween.get(this._view.chara).wait(235).to({
                        x: s.x - 30 * _,
                        y: s.y + 15,
                        alpha: 1
                    }, 300).to({
                        x: s.x,
                        y: s.y
                    }, 250).call(function () {
                        t._view.emit("attack"), t._shipFlash.position = t._ship_sprite.position, t._shipFlash.play()
                    }).wait(135), null != this._slot1 || null != this._slot2) {
                    var l = this._view.box;
                    l.initilize(this._attacker);
                    var u = 0;
                    1 == this._attacker.friend ? l.x = -60 : (u = o.default.width - l.width, l.x = u + 60), l.y = o.default.height - l.height, l.alpha = 0, createjs.Tween.get(l).wait(365).to({
                        x: u,
                        alpha: 1
                    }, 165).wait(900).to({
                        alpha: 0
                    }, 200), null != this._slot1 && (this._telop1.initialize(this._slot1.mstID, this._attacker.friend), this._view.addChildAt(this._telop1, 0), this._telop1.play())
                }
            }, e.prototype._resume = function () {
                var t = this,
                    e = this._base_pos,
                    i = this._friend ? 1 : -1;
                createjs.Tween.get(this._view.chara).call(function () {
                    t._view.emit("attack"), t._shipFlash.play()
                }).wait(135).wait(200).to({
                    x: e.x + 38 * i,
                    y: e.y - 23
                }, 135).to({
                    x: e.x + 135 * i,
                    y: e.y - 75,
                    alpha: 0
                }, 335).call(function () {
                    t._ship_sprite.parent.removeChild(t._ship_sprite), t._endTask()
                })
            }, e
        }(s.CutinDouble);
    e.CutinDouble1 = _
}