const function1365 = function (t, e, i) {
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
    var o = i(2), r = i(12), s = i(6), a = i(15), _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._fire1 = new l, e._fire2 = new l, e._fire2.position.set(-35, -21), e._smoke1 = new c, e._smoke1.position.set(36, -3), e._smoke2 = new c, e._smoke2.position.set(-2, -24), e._fire3 = new h, e._fire3.position.set(17, 0), e._fire4 = new h, e._fire4.position.set(-18, -21), e.addChild(e._fire1, e._fire2), e.addChild(e._smoke1, e._smoke2), e.addChild(e._fire3, e._fire4), e._animatin_task = new u(e), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "fire1", {
            get: function () {
                return this._fire1
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "fire2", {
            get: function () {
                return this._fire2
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "smoke1", {
            get: function () {
                return this._smoke1
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "smoke2", {
            get: function () {
                return this._smoke2
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "fire3", {
            get: function () {
                return this._fire3
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "fire4", {
            get: function () {
                return this._fire4
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function () {
            this._fire1.initialize(), this._fire2.initialize(), this._smoke1.initialize(), this._smoke2.initialize(), this._fire3.initialize(), this._fire4.initialize()
        }, e.prototype.getAnimationTask = function () {
            return this._animatin_task
        }, e
    }(PIXI.Container);
    e.AntiAircraftFire = _;
    var u = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._aa_fire = e, i
        }

        return n(e, t), e.prototype._start = function () {
            var t = this;
            s.SE.play("116"), this._aa_fire.fire1.getTween(0), this._aa_fire.fire2.getTween(133), this._aa_fire.smoke1.getTween(200), this._aa_fire.smoke2.getTween(333).call(function () {
                t._endTask()
            }), this._aa_fire.fire3.getTween(200), this._aa_fire.fire4.getTween(366)
        }, e
    }(o.TaskBase), l = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.anchor.set(0, .5), e.scale.set(0), e
        }

        return n(e, t), e.prototype.initialize = function () {
            this.texture = a.BATTLE_MAIN.getTexture(39)
        }, e.prototype.getTween = function (t) {
            return createjs.Tween.get(this).wait(t).to({ scaleX: 1, scaleY: 1 }, 200).to({ alpha: 0 }, 200)
        }, e
    }(r.Sprite), c = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.anchor.set(.5), e.scale.set(0), e.alpha = 0, e
        }

        return n(e, t), e.prototype.initialize = function () {
            this.texture = a.BATTLE_MAIN.getTexture(112)
        }, e.prototype.getTween = function (t) {
            return createjs.Tween.get(this).wait(t).to({
                scaleX: 1,
                scaleY: 1,
                alpha: 1
            }, 200).to({ alpha: 0 }, 400)
        }, e
    }(r.Sprite), h = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._content = new PIXI.Sprite, e._content.anchor.set(.5), e._content.alpha = 0, e.addChild(e._content), e
        }

        return n(e, t), e.prototype.initialize = function () {
            this._content.texture = a.BATTLE_MAIN.getTexture(40)
        }, e.prototype.getTween = function (t) {
            return createjs.Tween.get(this._content).wait(t).to({ x: 27, alpha: 1 }, 133).to({
                x: 74,
                alpha: 0
            }, 366)
        }, e
    }(PIXI.Container)
}