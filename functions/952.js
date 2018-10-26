const function952 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(5), r = i(0), s = i(2), a = i(17), _ = i(953), u = i(1), l = function (t) {
        function e(e, i, n, o, r) {
            var s = t.call(this) || this;
            return s._result = !1, s._onCancel = function () {
                s._result = !1, s._close()
            }, s._onChange = function () {
                s._result = !0, s._close()
            }, s._layer = e, s._area_id = i, s._airunit_id = n, s._index = o, s._item = r, s
        }

        return n(e, t), Object.defineProperty(e.prototype, "result", {
            get: function () {
                return this._result
            }, enumerable: !0, configurable: !0
        }), e.prototype.cancel = function () {
            this._onCancel()
        }, e.prototype._start = function () {
            this._cancel_area = new a.FadeBox(.2), this._layer.addChild(this._cancel_area), this._openPanel()
        }, e.prototype._openPanel = function () {
            var t = this, e = null, i = r.default.model.airunit.getAirUnit(this._area_id, this._airunit_id),
                n = i.squadrons[this._index];
            n.mem_id > 0 && (e = r.default.model.slot.get(n.mem_id));
            var s = this._item;
            this._panel = new _.AirUnitChangeConfirmPanel(this._onChange), this._panel.initialize(), this._panel.update(e, s), this._panel.position.set(o.default.width, 102), this._layer.addChild(this._panel), createjs.Tween.get(this._panel).to({ x: 840 }, 200).call(function () {
                t._cancel_area.on(u.EventType.CLICK, t._onCancel), t._cancel_area.buttonMode = !0, t._panel.activate()
            })
        }, e.prototype._close = function () {
            var t = this;
            this._cancel_area.off(u.EventType.CLICK, this._onCancel), this._cancel_area.buttonMode = !1, this._panel.deactivate(), createjs.Tween.get(this._panel).to({ x: o.default.width }, 200).call(function () {
                t._panel.dispose(), t._layer.removeChild(t._panel), t._layer.removeChild(t._cancel_area), t._endTask()
            })
        }, e.prototype._endTask = function () {
            this._layer = null, this._cancel_area = null, this._panel = null, this._item = null, t.prototype._endTask.call(this)
        }, e
    }(s.TaskBase);
    e.TaskShowAirUnitChangeConfirm = l
}