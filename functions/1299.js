const function1299 = function (t, e, i) {
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
        r = i(29),
        s = i(19),
        a = i(1300),
        _ = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o._buff = function () {
                    for (var t = o._scene.view.map.ship_icon.under, e = new r.SerialTask, i = 0; i < o._buff_count; i++) e.add(new a.TaskReplenishmentBuff(t));
                    e.start(o._hideBalloon)
                }, o._hideBalloon = function () {
                    var t = o._balloon.y + 23;
                    createjs.Tween.get(o._balloon).to({
                        y: t,
                        alpha: 0
                    }, 100).call(function () {
                        o._balloon.parent.removeChild(o._balloon), o._endTask()
                    })
                }, o._scene = e, o._buff_count = i, o._offset = n, o
            }
            return n(e, t), e.prototype._start = function () {
                this._showBalloon()
            }, e.prototype._showBalloon = function () {
                var t = this._scene.view.map.ship_icon;
                this._balloon = new u, this._balloon.initialize(), this._balloon.x = t.x + 21, this._balloon.y = t.y - 6, this._balloon.alpha = 0, null != this._offset && (this._balloon.x += this._offset.x, this._balloon.y += this._offset.y), this._scene.view.universal_layer.addChild(this._balloon), createjs.Tween.get(this._balloon).wait(200).to({
                    y: this._balloon.y - 23,
                    alpha: 1
                }, 100).wait(200).call(this._buff)
            }, e
        }(o.TaskBase);
    e.TaskReplenishmentBalloonEffect = _;
    var u = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._bg = new PIXI.Sprite, e._bg.position.set(-11, -128), e.addChild(e._bg), e._icon = new PIXI.Sprite, e._icon.position.set(-3, -105), e.addChild(e._icon), e._label = new PIXI.Sprite, e._label.position.set(9, -47), e.addChild(e._label), e
        }
        return n(e, t), e.prototype.initialize = function () {
            this._bg.texture = s.MAP_COMMON.getTexture(49), this._icon.texture = s.MAP_COMMON.getTexture(78), this._label.texture = s.MAP_COMMON.getTexture(182)
        }, e
    }(PIXI.Container)
}