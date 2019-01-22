const function385 = function (t, e, i) {
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
    var o = i(386),
        r = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i.PAGE_NUM = 7, i._pagers = [];
                for (var n = 0; n < i.PAGE_NUM; n++) {
                    var r = new o.Pager(e);
                    r.x = 138 * n, i.addChild(r), i._pagers.push(r)
                }
                return i
            }
            return n(e, t), e.prototype.initialize = function () {
                for (var t = 0, e = this._pagers; t < e.length; t++) {
                    e[t].initialize()
                }
            }, e.prototype.update = function (t, e) {
                for (var i = 0; i < this._pagers.length; i++) {
                    var n = this._pagers[i],
                        o = t + 10 * i;
                    n.update(o), n.selected = e >= o && e < o + 10
                }
            }, e.prototype.activate = function () {
                for (var t = 0, e = this._pagers; t < e.length; t++) {
                    e[t].activate()
                }
            }, e.prototype.deactivate = function () {
                for (var t = 0, e = this._pagers; t < e.length; t++) {
                    e[t].deactivate()
                }
            }, e.prototype.dispose = function () {
                this.removeChildren();
                for (var t = 0, e = this._pagers; t < e.length; t++) {
                    e[t].dispose()
                }
                this._pagers = null
            }, e
        }(PIXI.Container);
    e.PagerContainer = r
}