const function625 = function (t, e, i) {
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
    var o = i(9),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._onUpdate = function () {
                    if (e.children.length < 20 && Math.random() < .1) {
                        var t = new s;
                        e.addChild(t)
                    }
                    for (var i = 0, n = e.children; i < n.length; i++) {
                        var o = n[i],
                            t = o;
                        null != t && t.update()
                    }
                }, e
            }
            return n(e, t), e.prototype.activate = function () {
                null == this._t && (this._t = createjs.Tween.get(null, {
                    loop: !0
                }).wait(35).call(this._onUpdate))
            }, e.prototype.deactivate = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null, this.removeChildren())
            }, e.prototype.dispose = function () {
                this.deactivate()
            }, e
        }(PIXI.Container);
    e.ModelChangeParticleLayer = r;
    var s = function (t) {
        function e() {
            var e = t.call(this, o.COMMON_MISC.getTexture(51)) || this;
            return e._state = 0, e.anchor.set(.5), e.x = 600, e.y = 360 + 300 * Math.random() - 225, e.scale.set(.1), e.alpha = 0, e._dir = Math.random() < .5 ? 1 : -1, e._life = 60 * Math.random() + 30, e._xspd = 1.2 * (7 * Math.random() + 6) * e._dir, e._yspd = 1.2 * -9, e._gg = .36, e
        }
        return n(e, t), e.prototype.update = function () {
            switch (this.x += this._xspd, this.y += this._yspd, this._yspd += this._gg, this.scale.x < .6 && (this.scale.x = this.scale.x + .1, this.scale.y = this.scale.y + .1), this.rotation += 3 * this._dir / 180 * Math.PI, this._state) {
                case 0:
                    this.alpha += .1, this.alpha >= 1 && (this._state = 1);
                    break;
                case 1:
                    this._life--, this._life <= 0 && (this._state = 2);
                    break;
                case 2:
                    this.parent.removeChild(this)
            }
        }, e
    }(PIXI.Sprite)
}