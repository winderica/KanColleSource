const function361 = function (t, e, i) {
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
        s = i(327),
        a = i(8),
        _ = i(975),
        l = function (t) {
            function e(e, i, n) {
                var r = t.call(this) || this;
                r._ships = e, r._rader = i, r._onUpdate = n, r._fuel = 0, r._ammo = 0;
                for (var s = 0; s < e.length; s++) {
                    var a = e[s];
                    null != a && (r._fuel += a.getFuelForSupply(), r._ammo += a.getAmmoForSupply())
                }
                var _ = o.default.model.useItem.getCount(31),
                    l = o.default.model.useItem.getCount(32);
                return r._fuelActive = r._fuel > 0 && r._fuel <= _, r._ammoActive = r._ammo > 0 && r._ammo <= l, r
            }
            return n(e, t), e.prototype._start = function () {
                this._clickGuard = new a.AreaBox(0), o.default.view.overLayer.addChild(this._clickGuard), this._hideRader()
            }, e.prototype._hideRader = function () {
                var t = this;
                createjs.Tween.get(this._rader.scale).to({
                    x: 0,
                    y: 0
                }, 300, createjs.Ease.quadIn).call(function () {
                    t._showSupplyAnimationBox()
                })
            }, e.prototype._showSupplyAnimationBox = function () {
                var t = this;
                this._box = new _.TempSupplyBox, this._box.initialize(), this._box.x = 360, this._box.y = 120, this._box.alpha = 0;
                var e = this._rader.parent;
                null != e && e.addChild(this._box), this._box.update(this._fuel, this._ammo), createjs.Tween.get(this._box).to({
                    alpha: 1
                }, 500).call(function () {
                    t._playSupplyAnimation()
                })
            }, e.prototype._playSupplyAnimation = function () {
                var t = this;
                this._box.play(this._fuelActive, this._ammoActive, function () {
                    1 == t._fuelActive && (t._fuel = 0), 1 == t._ammoActive && (t._ammo = 0), t._box.update(t._fuel, t._ammo), t._connectionAPI()
                })
            }, e.prototype._getSupplyType = function () {
                return 1 == this._fuelActive ? 1 == this._ammoActive ? 3 : 1 : 1 == this._ammoActive ? 2 : 0
            }, e.prototype._connectionAPI = function () {
                for (var t = this, e = this._getSupplyType(), i = [], n = 0; n < this._ships.length; n++) {
                    var o = this._ships[n];
                    null != o && i.push(o.memID)
                }
                new s.ChargeAPI(e, i, !1).start(function () {
                    createjs.Tween.get(t._box).to({
                        alpha: 0
                    }, 500).call(function () {
                        t._reShowRader()
                    })
                })
            }, e.prototype._reShowRader = function () {
                var t = this;
                null != this._onUpdate && this._onUpdate(), null != this._box.parent && this._box.parent.removeChild(this._box), createjs.Tween.get(this._rader.scale).to({
                    x: 1,
                    y: 1
                }, 300, createjs.Ease.quadOut).call(function () {
                    null != t._clickGuard.parent && t._clickGuard.parent.removeChild(t._clickGuard), t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._ships = null, this._rader = null, this._onUpdate = null, this._clickGuard = null, this._box && this._box.dispose(), this._box = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.TaskTemporarySupply = l
}