const function873 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = i(35),
        r = i(874),
        s = i(875),
        a = i(877),
        _ = i(878),
        u = i(879),
        l = i(880),
        c = i(882),
        h = i(884),
        p = i(885),
        d = i(886),
        f = i(1),
        y = function () {
            function t(t, e, i, n, y) {
                var m = this;
                this.hammerMotivation = !1, this.spannerMotivation = !1, this.ANIMATION_KEY_UNLOCK = {
                    alpha: 0,
                    y: 0
                }, this._onClickGet = function () {
                    m.onClickGet(m.memDockId)
                }, this._onClickSelect = function () {
                    m.onClickSelect(m.memDockId)
                }, this._onClickHighSpeed = function () {
                    m.onClickHighSpeed(m.memDockId)
                }, this._onMouseOverHighSpeed = function () {
                    m.buttonHighSpeed.texture = o.ARSENAL_MAIN.getTexture(24)
                }, this._onMouseOutHighSpeed = function () {
                    m.buttonHighSpeed.texture = o.ARSENAL_MAIN.getTexture(22)
                }, this._onClickNoDock = function () {
                    m.hasKey && m.focusableNoDock && m.onClickNoDock(m.memDockId)
                }, this.great_steelFrame_bg = new PIXI.Sprite(o.ARSENAL_MAIN.getTexture(65)), this.spanner = new a.Spanner(y), this.hammer = new s.Hammer(y), this.carry = new r.Carry(y), this.kDockStateView = new d.KDockStateView, this.buttonGet = new h.GetButton, this.buttonSelect = new p.SelectButton, this.iconHighSpeedDisable = new PIXI.Sprite(o.ARSENAL_MAIN.getTexture(23)), this.buttonHighSpeed = new PIXI.Sprite(o.ARSENAL_MAIN.getTexture(22)), this.normalBuildStage = new l.NormalBuildStage, this.largeBuildStage = new c.LargeBuildStage, this.noDockView = new u.NoDockView(n), this.burner = new _.Burner(y), this.steelFrame_mask_door = new PIXI.Sprite(o.ARSENAL_MAIN.getTexture(146)), this.txt_open = new PIXI.Sprite(o.ARSENAL_MAIN.getTexture(155)), this.txt_open.alpha = 0, this.txt_open.visible = !1, this.txt_open.position.set(285, 54), this.normalBuildStage.visible = !1, this.largeBuildStage.visible = !1, this.great_steelFrame_bg.visible = !1, this.spanner.visible = !1, this.hammer.visible = !1, this.burner.visible = !1, this.carry.visible = !1, this.noDockView.visible = !1, this.iconHighSpeedDisable.x = this.buttonHighSpeed.x = 531, this.kDockStateView.position.set(63, 0), this.buttonGet.position.set(345, 28), this.great_steelFrame_bg.position.set(239, 0), this.buttonSelect.position.set(345, 28), this.normalBuildStage.position.set(238, -3), this.largeBuildStage.position.set(238, -3), this.steelFrame_mask_door.x = 637, this.noDockView.position.set(6, -15), this.buttonGet.onClick = this._onClickGet, this.buttonSelect.onClick = this._onClickSelect, this.noDockView.onClick = this._onClickNoDock, this.buttonHighSpeed.on(f.EventType.CLICK, this._onClickHighSpeed), this.buttonHighSpeed.on(f.EventType.MOUSEOUT, this._onMouseOutHighSpeed), this.buttonHighSpeed.on(f.EventType.MOUSEOVER, this._onMouseOverHighSpeed), this.buttonHighSpeed.interactive = this.buttonHighSpeed.buttonMode = !0, e.addChild(this.great_steelFrame_bg, this.kDockStateView, this.noDockView), i.addChild(this.carry, this.normalBuildStage, this.largeBuildStage, this.spanner, this.hammer, this.burner, this.steelFrame_mask_door), n.addChild(this.iconHighSpeedDisable, this.buttonSelect, this.buttonGet, this.buttonHighSpeed, this.txt_open), this.completeTime = 0, this.layerBase = e, this.layerBuild = i, this.layerInteractive = n, this.syncAnimationKey = y, this.memDockId = t, this._state = 0
            }
            return Object.defineProperty(t.prototype, "state", {
                get: function () {
                    return this._state
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.showHighSpeedButton = function (t) {
                this.buttonHighSpeed.visible = !1, this.iconHighSpeedDisable.visible = !1, t ? this.buttonHighSpeed.visible = !0 : this.iconHighSpeedDisable.visible = !0
            }, t.prototype.hideHighSpeedButton = function () {
                this.buttonHighSpeed.visible = !1, this.iconHighSpeedDisable.visible = !1
            }, t.prototype.Build = function (t, e, i, o, r, s, a, _, u) {
                var l = this;
                this._state = t ? 3 : 2, this.steelFrame_mask_door.visible = !0, this.hammerMotivation = o, this.spannerMotivation = r, this.great_steelFrame_bg.visible = !1, this.buttonGet.visible = !1, this.buttonSelect.visible = !1, this.hammer.visible = !1, this.spanner.visible = !1, this.burner.visible = !1, this.carry.visible = !1, this.largeBuildStage.visible = !1, this.normalBuildStage.visible = !1, this.noDockView.visible = !1, this.kDockStateView.build(a), this.kDockStateView.update(_), this.normalBuildStage.updatePhaseMax(u), this.largeBuildStage.updatePhaseMax(u), this.normalBuildStage.update(.1), this.largeBuildStage.update(.1), this.hideHighSpeedButton(), t ? (this.burner.visible = !0, this.burner.useBurner(function (t) {
                    l.kDockStateView.updateProgress(a, _, t), l.normalBuildStage.update(t), l.largeBuildStage.update(t)
                }, function () {
                    l.kDockStateView.updateProgress(a, _, 1), l.burner.complete(), l.hammerMotivation && (l.hammer.visible = !0, l.hammer.x = 825, l.hammer.useBurnerd()), l.spannerMotivation && (l.spanner.visible = !0, l.spanner.x = 825, l.spanner.useBurnerd()), l._buildComplete();
                    var t = n.default.model.deck.get(1).getShipList()[0].mstID;
                    n.default.sound.voice.play(t.toString(), 5)
                })) : (i ? this.buttonHighSpeed.visible = !0 : this.iconHighSpeedDisable.visible = !0, o && (this.hammer.visible = !0, this.hammer.build()), r && (this.spanner.visible = !0, this.spanner.build()), this.carry.build(), this.carry.visible = !0), e ? (this.great_steelFrame_bg.visible = !0, this.largeBuildStage.visible = !0) : this.normalBuildStage.visible = !0, this.totalRequireTime = 60 * s * 1e3, this.completeTime = a
            }, t.prototype.changeState = function (t) {
                this._state = t
            }, t.prototype.Standby = function () {
                this.__Standby__()
            }, t.prototype.__Standby__ = function () {
                this._state = 0, this.iconHighSpeedDisable.visible = !0, this.steelFrame_mask_door.visible = !0, this.kDockStateView.standby(), this.normalBuildStage.update(0), this.largeBuildStage.update(0), this.kDockStateView.visible = !0, this.buttonSelect.visible = !0, this.buttonGet.visible = !1, this.largeBuildStage.visible = !1, this.normalBuildStage.visible = !0, this.great_steelFrame_bg.visible = !1, this.noDockView.visible = !1
            }, t.prototype.UnLockDock = function () {
                var t = this;
                createjs.Tween.removeTweens(this.ANIMATION_KEY_UNLOCK), this.txt_open.alpha = 0, this.txt_open.visible = !0, this.txt_open.alpha = this.ANIMATION_KEY_UNLOCK.alpha = 0, this.txt_open.y = this.ANIMATION_KEY_UNLOCK.y = 54;
                var e = createjs.Tween.get(this.ANIMATION_KEY_UNLOCK);
                e.to({
                    alpha: 1,
                    y: -26.25
                }, 500).to({
                    alpha: 0,
                    y: -52
                }, 400).call(function () {
                    e.removeAllEventListeners("change"), e.setPaused(!0), t.txt_open.alpha = t.ANIMATION_KEY_UNLOCK.alpha = 0, t.txt_open.y = t.ANIMATION_KEY_UNLOCK.y = -105
                }).addEventListener("change", function () {
                    t.txt_open.alpha = t.ANIMATION_KEY_UNLOCK.alpha, t.txt_open.y = t.ANIMATION_KEY_UNLOCK.y
                }), e.play(null), this.noDockView.hidePop(), this.noDockView.visible = !1, this.__Standby__()
            }, t.prototype.updateMotivation = function (t, e) {
                this.hammerMotivation = t, this.spannerMotivation = e
            }, t.prototype.Resume = function (t, e, i, n, o, r, s, a) {
                this._state = 2, this.hammerMotivation = i, this.spannerMotivation = n, this.steelFrame_mask_door.visible = !0, this.largeBuildStage.visible = !1, this.normalBuildStage.visible = !1, this.buttonGet.visible = !1, this.buttonSelect.visible = !1, this.hammer.visible = !1, this.spanner.visible = !1, this.burner.visible = !1, this.carry.visible = !1, this.noDockView.visible = !1, this.normalBuildStage.updatePhaseMax(a), this.largeBuildStage.updatePhaseMax(a), i && (this.hammer.visible = !0, this.hammer.resume()), n && (this.spanner.visible = !0, this.spanner.resume()), t ? (this.great_steelFrame_bg.visible = !0, this.largeBuildStage.visible = !0) : this.normalBuildStage.visible = !0, this.hideHighSpeedButton(), e ? this.buttonHighSpeed.visible = !0 : this.iconHighSpeedDisable.visible = !0, this.kDockStateView.build(r), this.kDockStateView.update(s), this.carry.visible = !0, this.carry.resume(), this.totalRequireTime = 60 * o * 1e3, this.completeTime = r
            }, t.prototype.Complete = function () {
                this.hammer.visible = !1, this.spanner.visible = !1, this.hammerMotivation && (this.hammer.visible = !0), this.spannerMotivation && (this.spanner.visible = !0), this.__Complete__()
            }, t.prototype.NoDock = function (t, e) {
                this._state = -1, this.steelFrame_mask_door.visible = !1, this.noDockView.visible = !0, this.kDockStateView.visible = !1, this.buttonGet.visible = !1, this.buttonSelect.visible = !1, this.noDockView.update(t, e), this.focusableNoDock = t, this.hasKey = e
            }, t.prototype.forceComplete = function (t) {
                t ? this.largeBuildStage.forceComplete() : this.normalBuildStage.forceComplete()
            }, t.prototype.Completed = function (t, e) {
                this.steelFrame_mask_door.visible = !0, this.hammer.visible = !1, this.spanner.visible = !1, this.great_steelFrame_bg.visible = !1, this.largeBuildStage.visible = !1, this.normalBuildStage.visible = !1, this.hammerMotivation && (this.hammer.visible = !0), this.spannerMotivation && (this.spanner.visible = !0), e ? (this.great_steelFrame_bg.visible = !0, this.largeBuildStage.visible = !0, this.largeBuildStage.updatePhaseMax(t), this.largeBuildStage.update(1)) : (this.normalBuildStage.visible = !0, this.normalBuildStage.updatePhaseMax(t), this.normalBuildStage.update(1)), this.__Complete__()
            }, t.prototype.__Complete__ = function () {
                this._buildComplete(), this.hammer.visible && this.hammer.complete(), this.spanner.visible && this.spanner.complete(), this.carry.visible && this.carry.complete(), this.burner.visible && this.burner.complete()
            }, t.prototype._buildComplete = function () {
                this._state = 3, this.buttonSelect.visible = !1, this.buttonGet.visible = !0, this.kDockStateView.complete()
            }, t.prototype.UseBanner = function (t, e) {
                var i = this;
                this.hammer.visible && this.hammer.useBurner(), this.spanner.visible && this.spanner.useBurner(), this.carry.visible && this.carry.useBurner(), this.burner.visible = !0, this.burner.useBurner(function (n) {
                    i.kDockStateView.updateProgress(t, e, n), i.normalBuildStage.update(n), i.largeBuildStage.update(n)
                }, function () {
                    i.buttonSelect.visible = !1, i.buttonGet.visible = !0, i.burner.complete(), i.hammerMotivation && i.hammer.useBurnerd(), i.spannerMotivation && i.spanner.useBurnerd(), i.kDockStateView.complete();
                    var t = n.default.model.deck.get(1).getShipList()[0].mstID;
                    n.default.sound.voice.play(t.toString(), 5)
                })
            }, t.prototype.Receive = function () {
                this.burner.visible && this.burner.receive()
            }, t.prototype.Received = function () {
                this.hammer.visible && this.hammer.received(), this.spanner.visible && this.spanner.received(), this.carry.visible && this.carry.received(), this.__Standby__()
            }, t.prototype.onUpdateTime = function (t) {
                this.kDockStateView.update(t);
                var e = this.completeTime - t,
                    i = 1 - e / this.totalRequireTime;
                this.normalBuildStage.update(i), this.largeBuildStage.update(i)
            }, t.prototype.updateCondition = function (t, e) {
                this.buttonGet.updateCondition(t, e), this.buttonSelect.updateCondition(t, e)
            }, t.prototype.dispose = function () {
                this.normalBuildStage.dispose(), this.largeBuildStage.dispose(), this.buttonGet.dispose(), this.buttonSelect.dispose(), this.kDockStateView.dispose(), this.noDockView.dispose(), this.burner.dispose(), this.spanner.dispose(), this.hammer.dispose(), this.carry.dispose(), this.layerBase.removeChildren(), this.layerBuild.removeChildren(), this.layerInteractive.removeChildren(), this.onClickGet = null, this.onClickSelect = null, this.onClickHighSpeed = null, this.onClickNoDock = null, this.completeTime = null, this.totalRequireTime = null, this.memDockId = null, this.syncAnimationKey = null, this.great_steelFrame_bg = null, this.normalBuildStage = null, this.largeBuildStage = null, this.buttonGet = null, this.buttonSelect = null, this.buttonHighSpeed = null, this.iconHighSpeedDisable = null, this.kDockStateView = null, this.noDockView = null, this.burner = null, this.spanner = null, this.hammer = null, this.carry = null, this.txt_open = null, this.steelFrame_mask_door = null, this.layerBase = null, this.layerBuild = null, this.layerInteractive = null, this.hammerMotivation = null, this.spannerMotivation = null, this.focusableNoDock = null, this.hasKey = null, this._state = null
            }, t
        }();
    e.KDockView = y
}