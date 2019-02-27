const function10 = function (t, e, i) {
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
    var o = i(545),
        r = i(0),
        s = i(2),
        a = i(7),
        _ = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._url = "", e._api_result = -1, e._api_result_msg = "", e._raw_data = null, e._post_data = {
                    api_token: r.default.settings.api_token,
                    api_verno: "1"
                }, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "url", {
                get: function () {
                    return r.default.settings.api_root + "/" + this._url
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "post_data", {
                get: function () {
                    return this._post_data
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._start = function () {
                r.default.view.loading.show(200), this._connect()
            }, e.prototype._connect = function () {
                var t = this;
                axios.post(this.url, o.stringify(this._post_data)).then(function (e) {
                    t._success(e)
                }).catch(function (e) {
                    t._failed(e)
                })
            }, e.prototype._success = function (t) {
                var e = t.data,
                    i = e.replace(/[\s\S]*svdata=/, "");
                this._parse(i)
            }, e.prototype._parse = function (t) {
                var e = JSON.parse(t);
                this._api_result = a.ObjUtil.getNumber(e, "api_result"), this._api_result_msg = a.ObjUtil.getString(e, "api_result_msg"), this._raw_data = a.ObjUtil.getObject(e, "api_data"), 1 == this._api_result ? this._endTask() : this._endTask(!0)
            }, e.prototype._failed = function (t) {
                this._endTask(!0)
            }, e.prototype._endTask = function (e) {
                void 0 === e && (e = !1), r.default.view.loading.hide(200), t.prototype._endTask.call(this, e)
            }, e.prototype._failedEnd = function () {
                if (null != this._cb_failed) {
                    var t = this._cb_failed;
                    this._cb_failed = null, t()
                } else r.default.view.showError("Failed API " + this.url)
            }, e
        }(s.TaskBase);
    e.APIBase = _
}