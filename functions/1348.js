const function1348 = function (t, e, i) {
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
    var o = i(5), r = i(0), s = i(12), a = i(254), _ = i(44), u = function (t) {
        function e(e, i, n, o) {
            return t.call(this, e, i, n, o) || this
        }

        return n(e, t), e.prototype.resume = function () {
            var t = this;
            null != this._slot2 ? (this._telop2.initialize(this._slot2.mstID, this._attacker.friend), this._view.addChildAt(this._telop2, 0), this._telop2.play(), createjs.Tween.get(this).wait(150).call(function () {
                t._resume()
            })) : this._resume()
        }, e.prototype._start = function () {
            var t = this, e = this._attacker.mst_id, i = this._attacker.isDamaged();
            this._ship_sprite = new s.Sprite(r.default.resources.getShip(e, i, "full")), this._shipFlash = new _.ShipFlash(r.default.resources.getShip(e, i, "full"));
            var n = r.default.model.ship_graph.get(e).getBattleOffset(i);
            this._ship_sprite.x = n.x, this._ship_sprite.y = n.y;
            var a = this._base_pos, u = this._friend ? 1 : -1;
            this._view.chara.position.set(a.x - 180 * u, a.y + 120), this._view.chara.alpha = 0;
            var l = 344 - n.x, c = 597 - n.y;
            if (this._ship_sprite.x += l, this._ship_sprite.y += c, this._ship_sprite.anchor.set(l / this._ship_sprite.width, c / this._ship_sprite.height), this._shipFlash.position = this._ship_sprite.position, this._shipFlash.anchor = this._ship_sprite.anchor, this._shipFlash.scale = this._ship_sprite.scale, this._view.chara.addChild(this._ship_sprite), this._view.chara.addChild(this._shipFlash), createjs.Tween.get(this._view.chara).wait(235).to({
                x: a.x - 30 * u,
                y: a.y + 15,
                alpha: 1
            }, 300).to({ x: a.x, y: a.y }, 250).call(function () {
                t._view.emit("attack"), t._shipFlash.play()
            }).wait(135), null != this._slot1 || null != this._slot2) {
                var h = this._view.box;
                h.initilize(this._attacker);
                var p = 0;
                1 == this._attacker.friend ? h.x = -60 : (p = o.default.width - h.width, h.x = p + 60), h.y = o.default.height - h.height, h.alpha = 0, createjs.Tween.get(h).wait(365).to({
                    x: p,
                    alpha: 1
                }, 165).wait(900).to({ alpha: 0 }, 200), null != this._slot1 && (this._telop1.initialize(this._slot1.mstID, this._attacker.friend), this._view.addChildAt(this._telop1, 0), this._telop1.play())
            }
        }, e.prototype._resume = function () {
            var t = this;
            createjs.Tween.get(this._ship_sprite).call(function () {
                t._view.emit("attack"), t._shipFlash.play()
            }).wait(135).wait(200).to({ scaleY: 1.66, alpha: 0 }, 466).call(function () {
                t._ship_sprite.parent.removeChild(t._ship_sprite), t._endTask()
            })
        }, e
    }(a.CutinDouble);
    e.CutinDouble4 = u
}