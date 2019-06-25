const function1361 = function (t, e, i) {
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
        s = i(12),
        a = i(255),
        _ = i(45),
        u = function (t) {
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
                this._ship_sprite = new s.Sprite(r.default.resources.getShip(e, i, "full")), this._shipFlash = new _.ShipFlash(r.default.resources.getShip(e, i, "full"));
                var n = r.default.model.ship_graph.get(e).getBattleOffset(i);
                this._ship_sprite.x = n.x, this._ship_sprite.y = n.y;
                var a = this._base_pos;
                this._view.chara.position.set(a.x, a.y);
                var u = 344 - n.x,
                    l = 597 - n.y;
                if (this._ship_sprite.x += u, this._ship_sprite.y += l, this._ship_sprite.anchor.set(u / this._ship_sprite.width, l / this._ship_sprite.height), this._ship_sprite.scale.set(1.25), this._ship_sprite.alpha = 0, this._shipFlash.position = this._ship_sprite.position, this._shipFlash.anchor = this._ship_sprite.anchor, this._shipFlash.scale = this._ship_sprite.scale, this._view.chara.addChild(this._ship_sprite), this._view.chara.addChild(this._shipFlash), createjs.Tween.get(this._ship_sprite).wait(235).to({
                        scaleX: 1,
                        scaleY: 1,
                        alpha: 1
                    }, 533, createjs.Ease.sineOut).call(function () {
                        t._view.emit("attack"), t._shipFlash.scale = t._ship_sprite.scale, t._shipFlash.play()
                    }).wait(135), null != this._slot1 || null != this._slot2) {
                    var c = this._view.box;
                    c.initilize(this._attacker);
                    var h = 0;
                    1 == this._attacker.friend ? c.x = -60 : (h = o.default.width - c.width, c.x = h + 60), c.y = o.default.height - c.height, c.alpha = 0, createjs.Tween.get(c).wait(365).to({
                        x: h,
                        alpha: 1
                    }, 165).wait(900).to({
                        alpha: 0
                    }, 200), null != this._slot1 && (this._telop1.initialize(this._slot1.mstID, this._attacker.friend), this._view.addChildAt(this._telop1, 0), this._telop1.play())
                }
            }, e.prototype._resume = function () {
                var t = this;
                createjs.Tween.get(this._ship_sprite).call(function () {
                    t._view.emit("attack"), t._shipFlash.play()
                }).wait(135).wait(200).to({
                    scaleX: 1.25,
                    scaleY: 1.25,
                    alpha: 0
                }, 466).call(function () {
                    t._ship_sprite.parent.removeChild(t._ship_sprite), t._endTask()
                })
            }, e
        }(a.CutinDouble);
    e.CutinDouble2 = u
}