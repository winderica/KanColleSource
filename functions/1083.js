const function1083 = function (t, e, i) {
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
    var o = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._progress = 0, e
        }
        return n(e, t), Object.defineProperty(e.prototype, "progress", {
            get: function () {
                return this._progress
            },
            set: function (t) {
                this._progress = t, this._draw(this._progress)
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.update = function (t) {
            if (this._model = t, null == t) return void this._clear();
            this._startAnimation()
        }, e.prototype.dispose = function () {
            this._stopAnimation()
        }, e.prototype._clear = function () {
            this._stopAnimation(), this.clear()
        }, e.prototype._startAnimation = function () {
            var t = this;
            this._stopAnimation(), this._progress = 0, this._t = createjs.Tween.get(this).to({
                progress: 1
            }, 1e3).call(function () {
                t._t = null, t._progress = 0
            })
        }, e.prototype._stopAnimation = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null)
        }, e.prototype._draw = function (t) {
            var e = [(this._model.karyoku > 100 ? 100 : this._model.karyoku) * t, (this._model.raisou > 100 ? 100 : this._model.raisou) * t, (this._model.taiku > 100 ? 100 : this._model.taiku) * t, (this._model.kaihi > 100 ? 100 : this._model.kaihi) * t, (this._model.taikyu > 100 ? 100 : this._model.taikyu) * t],
                i = e.map(function (t, e, i) {
                    var n = (72 * e - 90) / 180 * Math.PI;
                    return [95 * t / 100 * Math.cos(n), 95 * t / 100 * Math.sin(n)]
                });
            this.clear(), this.lineStyle(1.4, 16774898), this.beginFill(1949120), this.moveTo(i[0][0], i[0][1]);
            for (var n = 0; n < 5; n++) {
                var o = (n + 1) % 5;
                i[n][0] == i[o][0] && i[n][1] == i[o][1] || this.lineTo(i[o][0], i[o][1])
            }
            this.endFill()
        }, e
    }(PIXI.Graphics);
    e.RaderGraph = o;
    var r = function () {
        function t() {
            this.karyoku = 0, this.raisou = 0, this.taiku = 0, this.kaihi = 0, this.taikyu = 0
        }
        return t
    }();
    e.RaderGraphModel = r
}