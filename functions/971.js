const function971 = function (t, e, i) {
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
        r = i(972),
        s = i(973),
        a = i(976),
        _ = i(1),
        u = function (t) {
            function e(e, i, n, o) {
                void 0 === o && (o = !1);
                var s = t.call(this) || this;
                return s._onClick = function () {
                    s._dialog.change_btn.deactivate(), s._dialog.interactive = !1, s._dialog.buttonMode = !1;
                    var t = s._model.getSelectedOperationType();
                    0 == t ? s._showSelectView(t) : s._close()
                }, s._onClickChangeBtn = function () {
                    s._dialog.change_btn.deactivate(), s._dialog.interactive = !1, s._dialog.buttonMode = !1, s._dialog.off(_.EventType.CLICK, s._onClick);
                    var t = s._model.getSelectedOperationType();
                    s._showSelectView(t)
                }, s._onOperationSelect = function (t) {
                    var e = new a.ChangeConfirmTask(s._layer, s._model);
                    e.start(function () {
                        0 == e.cancel && (s._dialog.board.selectView.deactivate(), s._dialog.board.selectView.showCircle(t, function () {
                            if (1 == s._skip_api_connection) s._close();
                            else {
                                new r.APIOperationChange(s._model, t).start(function () {
                                    s._close()
                                })
                            }
                        }))
                    })
                }, s._onOperationSelectCancel = function () {
                    s._dialog.board.selectView.deactivate(), s._close()
                }, s._layer = e, s._model = i, s._selectable = n, s._skip_api_connection = o, s
            }
            return n(e, t), e.prototype._start = function () {
                this._dialog = new s.MapIntroDialog, this._dialog.chara.alpha = 0, this._dialog.board.scale.y = 0, this._dialog.operation.visible = !1, this._dialog.change_btn.visible = !1;
                var t = this._model.mst_id,
                    e = this._model.getSelectedOperationType();
                this._dialog.initialize(t, e), this._open()
            }, e.prototype._open = function () {
                var t = this;
                this._layer.addChild(this._dialog), createjs.Tween.get(this._dialog.chara).to({
                    alpha: 1
                }, 250), createjs.Tween.get(this._dialog.board).wait(150).to({
                    scaleY: 1
                }, 250).call(function () {
                    0 != t._model.getSelectedOperationType() && 0 == t._model.isCleared() && (t._dialog.operation.visible = !0, t._dialog.change_btn.visible = !0, t._dialog.change_btn.activate(t._onClickChangeBtn)), t._wait()
                })
            }, e.prototype._wait = function () {
                this._dialog.interactive = !0, this._dialog.buttonMode = !0, this._dialog.once(_.EventType.CLICK, this._onClick)
            }, e.prototype._showSelectView = function (t) {
                var e = this._dialog.board.showSelectView();
                e.initialize(t, this._selectable), e.activate(this._onOperationSelect, this._onOperationSelectCancel)
            }, e.prototype._close = function () {
                var t = this;
                this._dialog.operation.visible = !1, this._dialog.change_btn.visible = !1, createjs.Tween.get(this._dialog.chara).to({
                    alpha: 0
                }, 150), createjs.Tween.get(this._dialog.board).wait(100).to({
                    scaleY: 0
                }, 150).call(function () {
                    t._dialog.dispose(), t._layer.removeChild(t._dialog), t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._layer = null, this._model = null, this._selectable = null, this._dialog = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.ShowMapIntroDialogTask = u
}