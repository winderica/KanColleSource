const function1087 = function (t, e, i) {
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
        r = i(1),
        s = i(8),
        a = i(70),
        _ = i(1088),
        l = i(388),
        u = i(390),
        c = i(389),
        h = i(391),
        p = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._extraVoiceBtn = [], e._extraVoiceBtnData = [], e._onPrev = function (t) {
                    if (t.stopPropagation(), null != e._current) {
                        var i = e._data_list.indexOf(e._current);
                        if (!(i < 0)) {
                            var n = i - 1;
                            n < 0 && (n = e._data_list.length - 1), e._current = e._data_list[n], e._update()
                        }
                    }
                }, e._onNext = function (t) {
                    if (t.stopPropagation(), null != e._current) {
                        var i = e._data_list.indexOf(e._current);
                        if (!(i < 0)) {
                            var n = i + 1;
                            n >= e._data_list.length && (n = 0), e._current = e._data_list[n], e._update()
                        }
                    }
                }, e._onVoice = function (t) {
                    if (t.stopPropagation(), null != e._data_list && 0 != e._data_list.length) {
                        var i = e._data_list[0].mst_id;
                        e._playVoice(i, 25)
                    }
                }, e._onMovie = function (t) {
                    if (t.stopPropagation(), null != e._current) {
                        var i = e._current.mst_id;
                        66 == i ? 1 == e._option.takao_flag ? (i = 269, e._option.takao_flag = 0) : e._option.takao_flag = 1 : 67 == i && (1 == e._option.atago_flag ? (i = 270, e._option.atago_flag = 0) : e._option.atago_flag = 1);
                        var n = new s.AreaBox(1, 16777215);
                        n.alpha = 0, o.default.view.overLayer.addChild(n), e._stopVoice();
                        new h.TaskWedding(n, i).start(function () {
                            o.default.view.overLayer.removeChild(n)
                        })
                    }
                }, e._onClickRing = function (t) {
                    if (t.stopPropagation(), null != e._data_list && 0 != e._data_list.length) {
                        var i = e._data_list[0].mst_id;
                        e._playVoice(i, 24)
                    }
                }, e._onClickExtraVoice = function (t, i) {
                    if (t.stopPropagation(), -1 !== i) {
                        e._data_list[0].mst_id;
                        e._playVoice(9997, i)
                    }
                }, e._canvas = new PIXI.Sprite, e.addChild(e._canvas), e._prevBtn = new l.PrevBtn(e._onPrev), e._prevBtn.position.set(10, 582), e.addChild(e._prevBtn), e._nextBtn = new l.NextBtn(e._onNext), e._nextBtn.position.set(55, 582), e.addChild(e._nextBtn), e._voiceBtn = new c.VoiceBtn(e._onVoice), e._voiceBtn.position.set(105, 582), e.addChild(e._voiceBtn), e._movieBtn = new u.MovieBtn(e._onMovie), e._movieBtn.position.set(154, 582), e.addChild(e._movieBtn);
                for (var i = [370, 325, 280, 235], n = 0, r = i.length; n < r; n++) {
                    var p = i[n],
                        d = new _.extraVoiceBtn(e._onClickExtraVoice);
                    d.position.set(p, 582), e.addChild(d), e._extraVoiceBtn[n] = d, e._extraVoiceBtnData[n] = null
                }
                return e._ring = new a.RingLarge, e._ring.position.set(-13, 22), e._ring.interactive = !0, e.addChild(e._ring), e._canvas.interactive = !0, e
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                this._option = e, this._data_list = [];
                for (var i = 0, n = t.mst_ids; i < n.length; i++) {
                    var r = n[i],
                        s = t.isMarriage(r),
                        a = o.default.resources.getShip(r, !1, "card");
                    this._addImageData(r, a, s, new PIXI.Point(45, 105)), a = o.default.resources.getShip(r, !1, "character_full"), this._addImageData(r, a, s), a = o.default.resources.getShip(r, !1, "character_up"), this._addImageData(r, a, s), 1 == t.hasTaiha(r) && (a = o.default.resources.getShip(r, !0, "character_full"), this._addImageData(r, a, s), a = o.default.resources.getShip(r, !0, "character_up"), this._addImageData(r, a, s))
                }
                var _ = t.extraVoices();
                if (null !== _)
                    for (var l = 0, u = _.length; l < u; l++) {
                        var c = _[l],
                            h = c.api_no - 1;
                        this._extraVoiceBtnData[h] = c
                    }
                for (var l = 0, u = this._extraVoiceBtn.length; l < u; l++) this._extraVoiceBtn[l].initialize(this._extraVoiceBtnData[l]);
                this._data_list.length > 0 && (this._current = this._data_list[0], this._update(), this._playVoice(this._current.mst_id, 25)), this._prevBtn.initialize(), this._nextBtn.initialize(), this._voiceBtn.initialize(), this._movieBtn.initialize(), this._ring.initialize()
            }, e.prototype.preactivate = function () {
                this._ring.activate()
            }, e.prototype.activate = function () {
                if (1 != this._canvas.buttonMode) {
                    this._canvas.buttonMode = !0, this._canvas.on(r.EventType.CLICK, this._onNext), this._prevBtn.activate(), this._nextBtn.activate(), this._voiceBtn.activate(), this._movieBtn.activate(), this._ring.buttonMode = !0, this._ring.on(r.EventType.CLICK, this._onClickRing);
                    for (var t = 0, e = this._extraVoiceBtn.length; t < e; t++) this._extraVoiceBtn[t].activate()
                }
            }, e.prototype.deactivate = function () {
                this._canvas.buttonMode = !1, this._canvas.off(r.EventType.CLICK, this._onNext), this._prevBtn.deactivate(), this._nextBtn.deactivate(), this._voiceBtn.deactivate(), this._movieBtn.deactivate(), this._ring.deactivate(), this._ring.buttonMode = !1, this._ring.off(r.EventType.CLICK, this._onClickRing);
                for (var t = 0, e = this._extraVoiceBtn.length; t < e; t++) this._extraVoiceBtn[t].deactivate()
            }, e.prototype.dispose = function () {
                this.removeChildren(), this.deactivate(), this._prevBtn.dispose(), this._nextBtn.dispose(), this._voiceBtn.dispose(), this._movieBtn.dispose(), this._ring.dispose(), this._stopVoice();
                for (var t = 0, e = this._extraVoiceBtn.length; t < e; t++) this._extraVoiceBtn[t].dispose(), this._extraVoiceBtn[t] = null;
                for (var t = 0; t < this._data_list.length; t++) this._data_list[t] = null;
                this._option = null, this._data_list = null, this._current = null, this._canvas = null, this._prevBtn = null, this._nextBtn = null, this._voiceBtn = null, this._movieBtn = null, this._ring = null, this._extraVoiceBtn = null, this._extraVoiceBtnData = null, this._play_voice = null
            }, e.prototype._addImageData = function (t, e, i, n) {
                if (void 0 === n && (n = null), e != PIXI.Texture.EMPTY) {
                    var o = new d;
                    o.mst_id = t, o.texture = e, o.marriage = i, o.offset = n, this._data_list.push(o)
                }
            }, e.prototype._update = function () {
                if (null != this._current) {
                    this._canvas.texture = this._current.texture, null != this._current.offset ? (this._canvas.x = this._current.offset.x, this._canvas.y = this._current.offset.y) : this._canvas.position.set(0, 0), this._movieBtn.visible = this._current.marriage, this._ring.visible = this._current.marriage;
                    for (var t = 0, e = this._extraVoiceBtn.length; t < e; t++) {
                        var i = this._extraVoiceBtnData[t];
                        this._extraVoiceBtn[t].visible = null !== i
                    }
                }
            }, e.prototype._playVoice = function (t, e) {
                this._stopVoice(), this._play_voice = o.default.sound.voice.play(t.toString(), e)
            }, e.prototype._stopVoice = function () {
                null != this._play_voice && o.default.sound.voice.stop(this._play_voice)
            }, e
        }(PIXI.Container);
    e.ShipDetailContent = p;
    var d = function () {
        function t() {}
        return t
    }()
}