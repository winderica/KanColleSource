const function1046 = function (t, e, i) {
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
    var o = i(0), r = i(2), s = i(18), a = i(38), _ = i(1047), l = i(1), u = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._showDialog = function () {
                n._dialog = new c, n._dialog.alpha = 0, n._dialog.initialize(), o.default.view.overLayer.addChild(n._dialog), createjs.Tween.get(n._dialog).to({ alpha: 1 }, 150).call(n._waitClick)
            }, n._waitClick = function () {
                n._dialog.btn_y.interactive = n._dialog.btn_y.buttonMode = !0, n._dialog.btn_y.once(l.EventType.CLICK, n._onClickYes), n._dialog.btn_n.interactive = n._dialog.btn_n.buttonMode = !0, n._dialog.btn_n.once(l.EventType.CLICK, n._onClickNo)
            }, n._onClickYes = function () {
                n._deactivate(), new _.ExpeditionCancelAPI(n._deck_id).start(n._hideDialog)
            }, n._onClickNo = function () {
                n._deactivate(), n._hideDialog()
            }, n._hideDialog = function () {
                createjs.Tween.get(n._dialog).to({ alpha: 0 }, 150).call(function () {
                    n._dialog.parent.removeChild(n._dialog), n._fade.hide(100, function () {
                        n._fade.parent.removeChild(n._fade), n._endTask()
                    })
                })
            }, n._view = e, n._deck_id = i, n
        }

        return n(e, t), e.prototype._start = function () {
            this._fade = new s.FadeBox(.6), this._fade.hide(), o.default.view.overLayer.addChild(this._fade), this._fade.show(100, this._showDialog)
        }, e.prototype._deactivate = function () {
            this._dialog.btn_y.interactive = this._dialog.btn_y.buttonMode = !1, this._dialog.btn_y.off(l.EventType.CLICK, this._onClickYes), this._dialog.btn_n.interactive = this._dialog.btn_n.buttonMode = !1, this._dialog.btn_n.off(l.EventType.CLICK, this._onClickNo)
        }, e.prototype._endTask = function (e) {
            void 0 === e && (e = !1), this._view = null, this._fade = null, this._dialog = null, t.prototype._endTask.call(this)
        }, e
    }(r.TaskBase);
    e.CancelExpeditionTask = u;
    var c = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._activated = !1, e
        }

        return n(e, t), Object.defineProperty(e.prototype, "btn_y", {
            get: function () {
                return this._btn_y
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "btn_n", {
            get: function () {
                return this._btn_n
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function () {
            var t = new PIXI.Sprite(a.SALLY_EXPEDITION.getTexture(41));
            this._btn_y = new PIXI.Sprite(a.SALLY_EXPEDITION.getTexture(17)), this._btn_n = new PIXI.Sprite(a.SALLY_EXPEDITION.getTexture(16)), t.position.set(219, 207), this._btn_y.position.set(375, 411), this._btn_n.position.set(645, 411), this.addChild(t), this.addChild(this._btn_y), this.addChild(this._btn_n)
        }, e
    }(PIXI.Container)
}