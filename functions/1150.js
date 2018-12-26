const function1150 = function (t, e, i) {
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
    var o = i(11),
        r = i(1151),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._result = !1, e._api = null, e._retry_count = 0, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "result", {
                get: function () {
                    return this._result
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._start = function () {
                var t = this;
                createjs.Tween.get(null).wait(500).call(function () {
                    t._check()
                })
            }, e.prototype._check = function () {
                var t = this;
                this._retry_count++, this._api = new r.PayCheckAPI, this._api.start(function () {
                    t._checked()
                })
            }, e.prototype._checked = function () {
                var t = this;
                2 == this._api.result ? (this._result = !0, this._endTask()) : this._retry_count >= 3 ? this._endTask() : createjs.Tween.get(null).wait(1e3).call(function () {
                    t._check()
                })
            }, e.prototype._endTask = function () {
                this._api = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.TaskPayCheck = s
}