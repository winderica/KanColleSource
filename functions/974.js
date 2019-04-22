const function974 = function (t, e, i) {
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
    var o = i(5),
        r = i(358),
        s = i(975),
        a = function (t) {
            function e(e, i, n) {
                var r = t.call(this, n) || this;
                return r._panel = new s.PanelDeckSelect(e, i, r._onGo), r._panel.position.set(o.default.width, 102), r.addChild(r._panel), r
            }
            return n(e, t), Object.defineProperty(e.prototype, "panel", {
                get: function () {
                    return this._panel
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t, e, i) {
                this._panel.initialize(t, e, i)
            }, e.prototype.activate = function () {
                t.prototype.activate.call(this), this._panel.activate()
            }, e.prototype.deactivate = function () {
                t.prototype.deactivate.call(this), this._panel.deactivate()
            }, e.prototype.dispose = function () {
                t.prototype.dispose.call(this), this._panel.dispose(), this._panel = null
            }, e
        }(r.ContainerDeckSelectBase);
    e.ContainerDeckSelect = a
}