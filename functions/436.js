const function436 = function (t, e, i) {
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
        s = i(13),
        a = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o._scene = e, o._ship_mst_id = i, o._ship_damaged = n, o
            }
            return n(e, t), e.prototype._start = function () {
                var t = this,
                    e = new s.ShipLoader;
                e.add(this._ship_mst_id, this._ship_damaged, "full"), e.load(function () {
                    t._loadComplete()
                })
            }, e.prototype._loadComplete = function () {
                var t = this,
                    e = o.default.resources.getShip(this._ship_mst_id, this._ship_damaged, "full"),
                    i = PIXI.Sprite.from(e.baseTexture);
                i.alpha = 0;
                var n = o.default.model.ship_graph.get(this._ship_mst_id).getMapOffset(this._ship_damaged);
                i.position.set(n.x - 80, n.y - 93), this._scene.view.chara_layer.addChild(i), createjs.Tween.get(i).to({
                    alpha: 1
                }, 300).wait(700).to({
                    alpha: 0,
                    x: i.x - 75
                }, 300).call(function () {
                    t._scene.view.chara_layer.removeChild(i), t._endTask()
                })
            }, e
        }(r.TaskBase);
    e.AnimFlagShip = a
}