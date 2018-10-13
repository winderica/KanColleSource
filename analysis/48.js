const function48 = function (t, e, i) {
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
    var o = i(2), r = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._onClose = function () {
                n._dialog.get_icon.deactivate(), n._dialog.close_btn.deactivate(), n._dialog.message.update(null), createjs.Tween.get(n._dialog.bg).to({ alpha: 0 }, 200), createjs.Tween.get(n._dialog.light).to({ alpha: 0 }, 200), createjs.Tween.get(n._dialog.container).to({ alpha: 0 }, 200).call(function () {
                    n._removeContent(), n._dialog.light.deactivate(), n._endTask()
                })
            }, n._dialog = e, n._model = i, n
        }

        return n(e, t), e.prototype._start = function () {
            this._dialog.bg.alpha = 0, this._dialog.bg.scale.set(.5), this._dialog.light.deactivate(), this._dialog.light.alpha = 0, this._dialog.light.scale.set(.8), this._dialog.container.alpha = 0, this._dialog.container.scale.set(1.7), this._dialog.get_icon.deactivate(), this._dialog.close_btn.deactivate(), this._createContent()
        }, e.prototype._showDialog = function () {
            var t = this;
            createjs.Tween.get(this._dialog.bg).to({
                scaleX: 1,
                scaleY: 1,
                alpha: 1
            }, 200), this._dialog.light.activate(), createjs.Tween.get(this._dialog.light).to({
                scaleX: 1,
                scaleY: 1,
                alpha: 1
            }, 200).call(function () {
                t._showContent()
            })
        }, e.prototype._showContent = function () {
            var t = this;
            createjs.Tween.get(this._dialog.container).to({
                scaleX: 1,
                scaleY: 1,
                alpha: 1
            }, 500).call(function () {
                t._showContentComplete()
            })
        }, e.prototype._showContentComplete = function () {
            if (this._dialog.get_icon.activate(), this._dialog.close_btn.activate(this._onClose), null != this._model && "" != this._model.message) {
                var t = this._model.message;
                t = t.replace(/<br.*>/, "\n"), this._dialog.message.update(t)
            }
        }, e.prototype._endTask = function () {
            this._dialog = null, t.prototype._endTask.call(this)
        }, e
    }(o.TaskBase);
    e.TaskRewardDialogBase = r
}