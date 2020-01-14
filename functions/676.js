const function676 = function (t, e, i) {
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
        r = i(15),
        s = i(17),
        a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._skinID = e, i
            }
            return n(e, t), e.prototype._start = function () {
                this._load()
            }, e.prototype._load = function () {
                var t = this,
                    e = new r.UIImageLoader("port");
                e.add("port_main.json"), e.add("port_ringmenu.json"), e.add("port_sidemenu.json"), e.add("port_option.json"), s.FRIENDLY && e.add("port_friendly_request.json"), 101 == this._skinID || 102 == this._skinID ? e.add("port_skin_1.json") : 201 == this._skinID ? (e.add("port_skin_2.json"), e.add("port_skin_circle_2.json")) : 301 == this._skinID ? (e.add("port_skin_3.json"), e.add("port_skin_circle_2.json")) : 311 == this._skinID && e.add("port_skin_3k.json"), e.load(function () {
                    t._endTask()
                })
            }, e
        }(o.TaskBase);
    e.TaskLoadResources = a
}