const function1306 = function (t, e, i) {
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
    var o = i(273), r = i(1307), s = i(1315), a = i(1402), _ = i(1415), u = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._view = new _.ViewMain, e._view.shutter.initializeLight(), e._view.shutter.close(0), e.content.addChild(e._view), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "data", {
            get: function () {
                return this._data
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "view", {
            get: function () {
                return this._view
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function (e) {
            t.prototype.initialize.call(this, e), this._data = new a.BattleData(e), e.isPractice()
        }, e.prototype.dispose = function () {
            this._view.dispose(), t.prototype.dispose.call(this)
        }, e.prototype.start = function () {
            var t = this;
            new r.TaskInit(this).start(function () {
                t._main()
            })
        }, e.prototype._main = function () {
            var t = this;
            new s.TaskMain(this).start(function () {
                t._end()
            })
        }, e.prototype._end = function () {
            var t = this.data.model.deck_f.ships, e = this.data.model.deck_e.ships;
            this.data.model.ship_info.add(t, e);
            var i = (new Date).getTime();
            this.data.model.actual_survey_time = i - this.data.model.actual_survey_time, this.data.model.prediction_time = this.data.model.actual_survey_time, this.emit("complete")
        }, e
    }(o.BattleSceneBase);
    e.BattleScene = u
}