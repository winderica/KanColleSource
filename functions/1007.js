const function1007 = function (t, e, i) {
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
    var o = i(5),
        r = i(0),
        s = i(17),
        a = i(2),
        _ = i(18),
        u = i(1008),
        l = i(1010),
        c = i(356),
        h = i(364),
        p = function (t) {
            function e(e, i, n, o, s) {
                var a = t.call(this) || this;
                return a._showBeginnerAlert = function () {
                    new u.ShowIntroAlertDialogTask(a._layer).start(a._showMapIntro)
                }, a._showMapIntro = function () {
                    var t = r.default.model.basic.level,
                        e = [];
                    t >= 80 && (4 == a._before_selected_type || 3 == a._before_selected_type ? e.push(4) : 0 == a._before_selected_type && e.push(4)), t >= 35 && e.push(3), e.push(2), e.push(1);
                    var i = a._model.getSelectedOperationType();
                    new l.ShowMapIntroDialogTask(a._layer, a._model, e).start(function () {
                        var t = a._model.getSelectedOperationType(),
                            e = 0 == t;
                        i != t && null != a._mapThumbnailPanel ? new c.TaskLoadGaugeResources([a._model]).start(function () {
                            a._mapThumbnailPanel.updateGauge(a._model), 465 == a._model.mst_id && a._mapThumbnailPanel.updateThumbnail(a._model), a._hideFade(e)
                        }) : a._hideFade(e)
                    })
                }, a._model = e, a._before_selected_type = i, a._layer = n, a._mapThumbnailPanel = o, a._detailPanel = s, a
            }
            return n(e, t), e.prototype._start = function () {
                if (this._model.area_id == s.EVENT_AREA_ID) {
                    this._fade = new _.FadeBox(.6), this._fade.hide(0), this._layer.addChild(this._fade);
                    var t = this._model.map_no,
                        e = r.default.model.basic.level;
                    1 == t || e < 35 ? this._fade.show(300, this._showBeginnerAlert) : this._fade.show(300, this._showMapIntro);
                    var i = this._voicePlayList(t);
                    null != i && this._voicePlay(i)
                } else this._showDetailPanel()
            }, e.prototype._voicePlayList = function (t) {
                switch (t) {
                    case 1:
                        return {
                            voice: [411, 415], delay: [0, 200]
                        };
                    case 2:
                        return {
                            voice: [411, 416, 424], delay: [0, 200, 200]
                        };
                    case 3:
                        return {
                            voice: [411, 417, 422, 424], delay: [0, 200, 200, 200]
                        };
                    case 4:
                        return {
                            voice: [411, 418, 423, 424], delay: [0, 200, 200, 200]
                        };
                    case 5:
                        return {
                            voice: [412, 419, 424], delay: [0, 200, 200]
                        };
                    case 6:
                        return {
                            voice: [412, 421, 423, 424], delay: [0, 200, 200, 200, 200]
                        };
                    default:
                        return null
                }
            }, e.prototype._voicePlay = function (t) {
                var e = this,
                    i = t.voice,
                    n = t.delay;
                h.EventOperationVoice.voice = r.default.sound.voice.play("9999", i[0], function () {
                    i.shift(), n.shift(), i.length > 0 && e._voiceNextDelay(t)
                })
            }, e.prototype._voiceNextDelay = function (t) {
                var e = this,
                    i = t.delay;
                i[0] <= 0 ? this._voicePlay(t) : h.EventOperationVoice.tween = createjs.Tween.get(null).wait(i[0]).call(function () {
                    e._voicePlay(t)
                })
            }, e.prototype._hideFade = function (t) {
                var e = this;
                this._fade.hide(300, function () {
                    e._layer.removeChild(e._fade), t ? e._endTask(!0) : e._showDetailPanel()
                })
            }, e.prototype._showDetailPanel = function () {
                var t = this,
                    e = this._detailPanel;
                e.update(this._model), e.x = o.default.width, e.visible = !0, createjs.Tween.get(e).to({
                    x: 840
                }, 200).call(function () {
                    e.activate(), t._endTask()
                })
            }, e.prototype._endTask = function (e) {
                void 0 === e && (e = !1), this._model = null, this._layer = null, this._mapThumbnailPanel = null, this._detailPanel = null, this._fade = null, t.prototype._endTask.call(this, e)
            }, e
        }(a.TaskBase);
    e.TaskShowDetailPanel = p
}