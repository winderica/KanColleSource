const function555 = function (t, e, i) {
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
    var o = i(184), r = i(23), s = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._wave1 = new a(0, 1300), e.addChild(e._wave1), e._wave2 = new a(650, 650), e.addChild(e._wave2), e._wave3 = new a(1300, 0), e.addChild(e._wave3), e._ship = new PIXI.Sprite, e._ship.y = -10, e._ship.anchor.y = 1, e.addChild(e._ship), e
        }

        return n(e, t), e.prototype.initialize = function () {
            this._wave1.initialize(), this._wave2.initialize(), this._wave3.initialize(), this._ship.texture = o.TITLE_MAIN.getTexture(1), this._ship.x = -Math.round(this._ship.width / 2)
        }, e.prototype.activate = function () {
            null == this._t && (this._wave1.activate(), this._wave2.activate(), this._wave3.activate(), this._t = createjs.Tween.get(this._ship, { loop: !0 }).to({ y: -18 }, 800, createjs.Ease.circOut).to({ y: -10 }, 800, createjs.Ease.circIn))
        }, e.prototype.deactivate = function () {
            null != this._t && (this._wave1.deactivate(), this._wave2.deactivate(), this._wave3.deactivate(), this._t.setPaused(!0), this._t = null, this._ship.y = -10)
        }, e.prototype.dispose = function () {
            this._wave1.dispose(), this._wave2.dispose(), this._wave3.dispose(), this.deactivate()
        }, e
    }(PIXI.Container);
    e.Pukapuka = s;
    var a = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._waittime1 = e, n._waittime2 = i, n._img = new PIXI.Sprite, n.addChild(n._img), n
        }

        return n(e, t), e.prototype.initialize = function () {
            this._init(), this._img.texture = o.TITLE_MAIN.getTexture(0), this._img.x = -Math.round(this._img.width / 2), this._img.y = -Math.round(this._img.height / 2)
        }, e.prototype.activate = function () {
            var t = this;
            null == this._t && (this._t = createjs.Tween.get(this, { loop: !0 }).wait(this._waittime1).to({
                scaleX: 1,
                scaleY: 1,
                alpha: 1
            }, 500).to({ scaleX: 1.5, scaleY: 1.5 }, 1e3).to({
                scaleX: 1.7,
                scaleY: 1.7,
                alpha: 0
            }, 500).call(function () {
                t._init()
            }).wait(this._waittime2))
        }, e.prototype.deactivate = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null, this._init())
        }, e.prototype.dispose = function () {
            this.deactivate()
        }, e.prototype._init = function () {
            this.alpha = 0, this.scale.set(.5)
        }, e
    }(r.Container)
}