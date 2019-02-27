const function397 = function (t, e, i) {
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
    var o = i(310),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._eye_open_flag = !0, e._onUpdate = function () {
                    for (var t = 0, i = e._flowers; t < i.length; t++) {
                        i[t].update()
                    }
                }, e._flowers = [];
                var i = new s;
                return i.position.set(151, 10), e.addChild(i), e._flowers.push(i), i = new s, i.position.set(166, 43), e.addChild(i), e._flowers.push(i), i = new s, i.position.set(40, 177), e.addChild(i), e._flowers.push(i), e
            }
            return n(e, t), e.prototype.initialize = function () {
                for (var t = 0, e = this._flowers; t < e.length; t++) {
                    e[t].initialize()
                }
                this._update()
            }, e.prototype.activate = function () {
                this._startWaiting()
            }, e.prototype.deactivate = function () {
                this._stopWaiting()
            }, e.prototype.dispose = function () {
                this.deactivate()
            }, e.prototype._update = function () {
                1 == this._eye_open_flag ? this.texture = o.ITEM_MINI.getTexture(0) : this.texture = o.ITEM_MINI.getTexture(1)
            }, e.prototype._startWaiting = function () {
                var t = this;
                if (null == this._t) {
                    var e = 0;
                    e = 1 == this._eye_open_flag ? 3e3 * Math.random() + 200 : 200 * Math.random() + 100, this._t = createjs.Tween.get(null, {
                        onChange: this._onUpdate
                    }).wait(e).call(function () {
                        t._eye_open_flag = !t._eye_open_flag, t._update(), t._t = null, t._startWaiting()
                    })
                }
            }, e.prototype._stopWaiting = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e
        }(PIXI.Sprite);
    e.MiniChara = r;
    var s = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._i = 0, e._rnd = 0, e._startY = 0, e._rnd = .04 * Math.random() + .05, e
        }
        return n(e, t), e.prototype.initialize = function () {
            this.texture = o.ITEM_MINI.getTexture(2), this._startY = this.y
        }, e.prototype.update = function () {
            this.y = this._startY + 2 * Math.sin(this._i * this._rnd), this._i += .5
        }, e
    }(PIXI.Sprite)
}