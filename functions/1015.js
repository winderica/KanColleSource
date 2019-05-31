const function1015 = function (t, e, i) {
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
    var o = i(0),
        r = i(2),
        s = i(18),
        a = i(1016),
        _ = i(1017),
        l = function (t) {
            function e(e, i, n) {
                var r = t.call(this) || this;
                return r._hideDetailInfo = function () {
                    r._detail.deactivate(), createjs.Tween.get(r._detail).to({
                        alpha: 0
                    }, 300), createjs.Tween.get(r._fade).wait(100).to({
                        alpha: 0
                    }, 300).call(function () {
                        r._detail.dispose(), o.default.view.overLayer.removeChild(r._fade)
                    })
                }, r._rival_id = e, r._flag_type = i, r._medal_num = n, r
            }
            return n(e, t), e.prototype._start = function () {
                this._showFade()
            }, e.prototype._showFade = function () {
                this._fade = new s.FadeBox(1), this._fade.hide(0), o.default.view.overLayer.addChild(this._fade), this._fade.show(300), this._connectAPI()
            }, e.prototype._connectAPI = function () {
                var t = this,
                    e = new a.RivalDetailAPI(this._rival_id, this._flag_type, this._medal_num);
                e.start(function () {
                    t._showDetailInfo(e.res_model)
                })
            }, e.prototype._showDetailInfo = function (t) {
                var e = this;
                this._detail = new _.ContainerOverlay;
                var i = o.default.model.deck.getIDs(),
                    n = o.default.model.deck.isCombined();
                this._detail.initialize(i, n), this._detail.update(t), this._detail.alpha = 0, this._fade.addChild(this._detail), createjs.Tween.get(this._detail).to({
                    alpha: 1
                }, 300).call(function () {
                    e._detail.once("close", e._hideDetailInfo), e._detail.activate()
                })
            }, e
        }(r.TaskBase);
    e.TaskDetailInfo = l
}