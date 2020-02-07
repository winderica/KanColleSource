const function400 = function (t, e, i) {
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
        r = i(11),
        s = i(175),
        a = i(345),
        _ = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._layer = e, n._mst_id = i, n._marriageAnimation = new a.MarriageAnimation(i), n
            }
            return n(e, t), e.prototype._start = function () {
                var t = this;
                this._marriageAnimation.PreLoad(function () {
                    t._marriageAnimation.Initialize(), o.default.view.overLayer.addChild(t._marriageAnimation), t._marriageAnimation.Play(!0, function () {
                        o.default.view.overLayer.removeChild(t._marriageAnimation), t._resetBGM()
                    })
                })
            }, e.prototype._resetBGM = function () {
                var t = s.AlbumConst.BGM_ID_FOR_SHIP;
                o.default.sound.bgm.play(t), this._endTask()
            }, e.prototype._endTask = function () {
                this._layer = null, this._btn = null, this._marriageAnimation.Dispose(), this._marriageAnimation = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.TaskWedding = _
}