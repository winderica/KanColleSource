const function965 = function (t, e, i) {
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
        r = i(966),
        s = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._cancel = !0, n._waitClick = function () {
                    n._dialog.btn_no.activate(n._onNo), n._dialog.btn_yes.activate(n._onYes)
                }, n._onNo = function () {
                    n._dialog.btn_no.deactivate(), n._dialog.btn_yes.deactivate(), n._closeDialog()
                }, n._onYes = function () {
                    n._dialog.btn_no.deactivate(), n._dialog.btn_yes.deactivate(), n._cancel = !1, n._closeDialog()
                }, n._layer = e, n._model = i, n
            }
            return n(e, t), Object.defineProperty(e.prototype, "cancel", {
                get: function () {
                    return this._cancel
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._start = function () {
                0 == this._model.getSelectedOperationType() ? (this._cancel = !1, this._endTask()) : this._openDialog()
            }, e.prototype._openDialog = function () {
                var t = this;
                this._dialog = new r.OperationSelectConfirmDialog, this._dialog.initialize(), this._dialog.fade.hide(0), this._dialog.bg.alpha = 0, this._layer.addChild(this._dialog), this._dialog.fade.show(200, function () {
                    createjs.Tween.get(t._dialog.bg).to({
                        alpha: 1
                    }, 300).call(t._waitClick)
                })
            }, e.prototype._closeDialog = function () {
                var t = this;
                createjs.Tween.get(this._dialog).to({
                    alpha: 0
                }, 200).call(function () {
                    t._dialog.fade.hide(100, function () {
                        t._layer.removeChild(t._dialog), t._endTask()
                    })
                })
            }, e.prototype._endTask = function () {
                this._layer = null, this._model = null, this._dialog = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.ChangeConfirmTask = s
}