const function31 = function (t, e, i) {
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
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._list = [], e
            }
            return n(e, t), e.prototype.add = function (t) {
                return this._list.push(t), this
            }, e.prototype._start = function () {
                this._connect()
            }, e.prototype._connect = function () {
                var t = this;
                if (0 == this._list.length) o.default.view.loading.hide(200), this._endTask();
                else {
                    o.default.view.loading.show(200);
                    this._list.shift().start(function () {
                        t._complete()
                    }, function () {
                        t._failed()
                    })
                }
            }, e.prototype._complete = function () {
                this._connect()
            }, e.prototype._failed = function () {
                this._endTask(!0)
            }, e.prototype._failedEnd = function () {
                if (null != this._cb_failed) {
                    var t = this._cb_failed;
                    this._cb_failed = null, t()
                } else o.default.view.showError("Failed Serial API Connection. ")
            }, e
        }(r.TaskBase);
    e.APIConnector = s
}