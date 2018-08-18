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
    var o = i(5), r = i(0), s = i(17), a = i(2), _ = i(16), u = i(953), l = i(955), c = function (t) {
        function e(e, i, n, o) {
            var s = t.call(this) || this;
            return s._showBeginnerAlert = function () {
                new u.ShowIntroAlertDialogTask(s._layer).start(s._showMapIntro)
            }, s._showMapIntro = function () {
                var t = r.default.model.basic.level, e = [];
                t >= 80 && (4 != s._before_selected_type && 3 != s._before_selected_type || e.push(4)), t >= 35 && e.push(3), e.push(2), e.push(1), new l.ShowMapIntroDialogTask(s._layer, s._model, e).start(s._hideFade)
            }, s._hideFade = function () {
                s._fade.hide(300, function () {
                    s._layer.removeChild(s._fade), 0 == s._model.getSelectedOperationType() ? s._endTask(!0) : s._showDetailPanel()
                })
            }, s._model = e, s._before_selected_type = i, s._layer = n, s._detailPanel = o, s
        }

        return n(e, t), e.prototype._start = function () {
            if (this._model.area_id == s.EVENT_AREA_ID) {
                this._fade = new _.FadeBox(.6), this._fade.hide(0), this._layer.addChild(this._fade);
                var t = this._model.map_no, e = r.default.model.basic.level;
                1 == t || e < 35 ? this._fade.show(300, this._showBeginnerAlert) : this._fade.show(300, this._showMapIntro)
            } else this._showDetailPanel()
        }, e.prototype._showDetailPanel = function () {
            var t = this, e = this._detailPanel;
            e.update(this._model), e.x = o.default.width, e.visible = !0, createjs.Tween.get(e).to({ x: 840 }, 200).call(function () {
                e.activate(), t._endTask()
            })
        }, e.prototype._endTask = function (e) {
            void 0 === e && (e = !1), this._model = null, this._layer = null, this._detailPanel = null, this._fade = null, t.prototype._endTask.call(this, e)
        }, e
    }(a.TaskBase);
    e.TaskShowDetailPanel = c
}