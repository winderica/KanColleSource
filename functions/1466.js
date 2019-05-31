const function1466 = function (t, e, i) {
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
    var o = i(275),
        r = i(1467),
        s = i(1474),
        a = i(1478),
        _ = i(1510),
        l = i(1511),
        u = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._view = new l.ViewMain, e.addChild(e._view), e._layer_bonus = new PIXI.Container, e.addChild(e._layer_bonus), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "data", {
                get: function () {
                    return this._data
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "view", {
                get: function () {
                    return this._view
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "layer_bonus", {
                get: function () {
                    return this._layer_bonus
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.start = function (e) {
                var i = this;
                t.prototype.start.call(this, e), this._data = new r.BattleResultData(e), new s.TaskInit(this).start(function () {
                    i._main()
                })
            }, e.prototype._main = function () {
                var t = this;
                new a.TaskMain(this).start(function () {
                    t._end()
                })
            }, e.prototype._end = function () {
                var t = this;
                new _.TaskEnd(this).start(function () {
                    t.emit("complete")
                })
            }, e
        }(o.BattleResultSceneBase);
    e.BattleResultScene = u
}