const function1293 = function (t, e, i) {
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
    var o = i(1294),
        r = i(1295),
        s = i(1296),
        a = i(1),
        _ = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._onMouseOver = function () {
                    null == n._move_tween && 1 != n._title.complete && (0 == n.x ? n._move_tween = createjs.Tween.get(n).to({
                        x: 831
                    }, 300, createjs.Ease.quadOut).call(function () {
                        n._move_tween = null
                    }) : n._move_tween = createjs.Tween.get(n).to({
                        x: 0
                    }, 300, createjs.Ease.quadOut).call(function () {
                        n._move_tween = null
                    }))
                }, n._title = new r.AirUnitAppointmentTitle(e), n._title.position.set(14, 60), n.addChild(n._title), n._panel = new s.AirUnitPanel, n._panel.position.set(11, 123), n.addChild(n._panel), n._cancel_btn = new o.PanelCancelBtn(i), n._cancel_btn.position.set(285, 48), n.addChild(n._cancel_btn), n
            }
            return n(e, t), Object.defineProperty(e.prototype, "title", {
                get: function () {
                    return this._title
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "cancel_btn", {
                get: function () {
                    return this._cancel_btn
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "panel", {
                get: function () {
                    return this._panel
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t, e) {
                var i = null == e ? 0 : e.length;
                this._title.initialize(i), this._cancel_btn.initialize(), this._panel.initialize(t, e)
            }, e.prototype.activate = function () {
                this._panel.on(a.EventType.MOUSEOVER, this._onMouseOver)
            }, e.prototype.deactivate = function () {
                null != this._move_tween && (this._move_tween.setPaused(!0), this._move_tween = null), this._panel.off(a.EventType.MOUSEOVER, this._onMouseOver)
            }, e.prototype.update = function (t) {
                this._title.update(t), this._panel.update(t, !0)
            }, e.prototype.dispose = function () {
                this.deactivate(), this._title.dispose(), this._cancel_btn.dispose(), this._panel.dispose()
            }, e
        }(PIXI.Container);
    e.AirUnitPanelSet = _
}