const function876 = function (t, e, i) {
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
    var o = i(3),
        r = i(877),
        s = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = new PIXI.Sprite(o.ARSENAL_MAIN.getTexture(46));
                return e.ship = new r.LargeBuildShip, e.ship.position.set(22, 13), i.position.set(12, 82), e.addChild(i, e.ship), e
            }
            return n(e, t), e.prototype.updatePhaseMax = function (t) {
                this.phaseMax = t
            }, e.prototype.update = function (t) {
                if (0 == t) this.ship.update(0);
                else {
                    var e = Math.floor(this.phaseMax * t);
                    0 == e && (e = 1), this.ship.update(e)
                }
            }, e.prototype.forceComplete = function () {
                this.ship.update(this.phaseMax)
            }, e.prototype.dispose = function () {
                this.ship.dispose(), this.ship = null, this.phaseMax = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.LargeBuildStage = s
}