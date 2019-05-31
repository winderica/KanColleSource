const function1036 = function (t, e, i) {
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
    var o = i(358),
        r = i(1037),
        s = function (t) {
            function e(e) {
                var i = t.call(this, e) || this;
                return i._panel = new r.PanelDeckSelect(i._onGo), i._panel.position.set(1200, 102), i.addChild(i._panel), i
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
                t.prototype.dispose.call(this), this._panel.dispose()
            }, e
        }(o.ContainerDeckSelectBase);
    e.ContainerDeckSelect = s
}