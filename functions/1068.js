const function1068 = function (t, e, i) {
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
    var o = i(383),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._eye_open_flag = !0, e._disposed = !1, e._onUpdate = function () {}, e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._update()
            }, e.prototype.activate = function () {
                this._startWaiting()
            }, e.prototype.deactivate = function () {
                this._stopWaiting()
            }, e.prototype.dispose = function () {
                this._disposed = !0, this._t.setPaused(!0), this._t = null, this.deactivate()
            }, e.prototype._update = function () {
                1 == this._eye_open_flag ? this.texture = o.RECORD_MINI.getTexture(0) : this.texture = o.RECORD_MINI.getTexture(1)
            }, e.prototype._startWaiting = function () {
                var t = this;
                if (null == this._t && !this._disposed) {
                    var e = 0;
                    e = 1 == this._eye_open_flag ? 3e3 * Math.random() + 1e4 : 200 * Math.random() + 100, this._t = createjs.Tween.get(null, {
                        onChange: this._onUpdate
                    }).wait(e).call(function () {
                        t._eye_open_flag = !t._eye_open_flag, t._update(), t._t = null, t._startWaiting()
                    })
                }
            }, e.prototype._stopWaiting = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e
        }(PIXI.Sprite);
    e.RecordMiniChara = r
}