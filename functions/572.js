const function572 = function (t, e, i) {
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
    var o = i(2),
        r = i(0),
        s = i(131);
    ! function (t) {
        function e(t, e) {
            return encodeURI(t) + "=" + encodeURI(e)
        }

        function i(t) {
            var e = s.PostMessageType.OPTIONS_LOAD + "\t";
            new a(e).start(function () {
                null != t && t()
            })
        }

        function n(t, e) {
            void 0 === e && (e = null);
            var i = s.PostMessageType.OPTIONS_SAVE + "\t" + t;
            new a(i).start(function () {
                null != e && e()
            })
        }

        function o(e, i) {
            return e && t.hasItem(e, i) ? decodeURI(i.replace(new RegExp("(?:^|.*;\\s*)" + encodeURI(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"), "$1")) : null
        }

        function r(t, e) {
            return new RegExp("(?:^|;\\s*)" + encodeURI(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(e)
        }

        function _(e, i, n) {
            if (1 == t.hasItem(e, i)) {
                var o = parseInt(t.getItem(e, i));
                if (0 == isNaN(o)) return o
            }
            return n
        }

        function u(e, i, n) {
            return 1 == t.hasItem(e, i) ? "1" == t.getItem(e, i) : n
        }
        t.format = e, t.load = i, t.save = n, t.getItem = o, t.hasItem = r, t.getNumValue = _, t.getBoolValue = u
    }(e.OptionUtil || (e.OptionUtil = {}));
    var a = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._onCallback = function (t) {
                window.removeEventListener("message", i._onCallback), t.origin == i._GadgetIP && (r.default.option.post_data = t.data, i._endTask())
            }, i._message = e, i
        }
        return n(e, t), e.prototype._start = function () {
            try {
                this._GadgetIP = "http://" + r.default.settings.osapi_root, window.addEventListener("message", this._onCallback), window.parent.postMessage(this._message, this._GadgetIP)
            } catch (t) {
                window.removeEventListener("message", this._onCallback), r.default.option.post_data = "", this._endTask()
            }
        }, e
    }(o.TaskBase)
}