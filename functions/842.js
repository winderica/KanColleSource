const function842 = function (t, e, i) {
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
    var o = i(843), r = i(844), s = i(81), a = i(4), _ = i(221), u = i(3), l = i(23), c = i(13), h = i(845),
        p = i(1), d = function (t) {
            function e() {
                var e = t.call(this) || this;
                e.hpAnimationParams = {
                    nowHp: 0,
                    maxHp: 0,
                    progress: 0
                }, e.completeTime = 0, e._craneAnimation = null, e.ANIMATION_HIGHSPEED = {}, e._onClickUseItem = function () {
                    e.onClickHiSpeed(e.memDockId)
                }, e._onUseRepairItemAnimation = function () {
                    null != e.useRepairItemTween && e.useRepairItemTween.setPaused(!0);
                    var t = { progress: 0 }, i = createjs.Tween.get(t).to({ progress: 0 }, 0).to({ progress: 1 }, 1500),
                        n = e.completeTime - Date.now();
                    i.addEventListener("change", function () {
                        var i = e.hpAnimationParams.nowHp + t.progress * (e.hpAnimationParams.maxHp - e.hpAnimationParams.nowHp),
                            o = Math.floor(n * t.progress), r = Math.floor(n - o);
                        l.MathUtil.timeToString(r);
                        e.repairHpGaugeView.update(i, e.hpAnimationParams.maxHp), e.textHp.text = (Math.floor(i) + "/" + e.hpAnimationParams.maxHp).toString()
                    }), e.useRepairItemTween = i
                };
                var i = new PIXI.Sprite(u.REPAIR_MAIN.getTexture(10)),
                    n = new PIXI.Sprite(u.REPAIR_MAIN.getTexture(42));
                n.anchor.set(1, 1), n.position.set(95, 25);
                var h = new a.TextBox(22, 16777215);
                h.style.lineHeight = 1, h.anchor.set(1, 1), h.position.set(145, 30);
                var p = new s.StarRateView;
                p.position.set(150, 10);
                var d = new a.TextBox(27, 16774898);
                d.anchor.set(0, 1);
                var f = c.CreateRect.gradientLeftToRight(185, 40, .7, .9);
                f.anchor.set(0, 1);
                var y = new PIXI.Container;
                y.position.set(0, 64), y.mask = f, y.addChild(d, f);
                var v = new a.TextBox(18, 16777215);
                v.anchor.set(1, 1), v.position.set(234, 64);
                var g = new _.RepairHpGaugeView;
                g.position.set(0, 66);
                var m = new PIXI.Container;
                m.name = "info", m.position.set(436, 20), m.addChild(n, h, p, y, v, g);
                var b = new a.TextBox(28, 5523516);
                b.position.set(735, 55);
                var w = new o.UseItemButton;
                w.onClick = e._onClickUseItem, w.position.set(876, 4), e._craneContainer = new PIXI.Container;
                var x = new r.RepairShipBanner;
                return x.position.set(66, 36), e.addChild(i, m, b, w, e._craneContainer, x), e.useItemButton = w, e.repairShipBanner = x, e.textHp = v, e.textLevel = h, e.textName = d, e.textTime = b, e.starRateView = p, e.repairHpGaugeView = g, e.containerName = y, e.informationContainer = m, e
            }

            return n(e, t), Object.defineProperty(e.prototype, "state", {
                get: function () {
                    return this._state
                }, enumerable: !0, configurable: !0
            }), e.prototype.updateDockInfo = function (t, e) {
                this.memDockId = t, this.completeTime = e, this.textTime.text = l.MathUtil.timeToString(e - Date.now())
            }, e.prototype.updateShipInfo = function (t, e, i, n, o, r, s, a) {
                this.containerName.cacheAsBitmap = !1, this.name = t;
                var _ = n + "/" + o, u = r.toString(), l = t;
                this.textName.style.fill = 16774898, a && (this.textName.style.fill = 16766947), this.repairShipBanner.update(e, i, a), this.textHp.text = _, this.textLevel.text = u, this.textName.text = l, this.starRateView.update(s), this.repairHpGaugeView.update(n, o), this.hpAnimationParams.nowHp = n, this.hpAnimationParams.maxHp = o, this.containerName.cacheAsBitmap = !0
            }, e.prototype.updateState = function (t) {
                this._state = t
            }, e.prototype.stopAnimation = function () {
                null != this.craneCarTween && this.craneCarTween.setPaused(!0), this.craneCarTween = null, null !== this._craneAnimation && (this._craneAnimation.off("high_speed_timer_stop"), this._craneAnimation.off("high_speed_complete"), this._craneAnimation.end())
            }, e.prototype.playAnimation = function () {
                null == this.craneCarTween && (this._craneContainer.removeChildren(), this._craneAnimation = new h.CraneAnimation, this._craneContainer.addChild(this._craneAnimation), this._craneAnimation.play())
            }, e.prototype.playTimelimit = function (t, e) {
                var i = this;
                null != this.craneCarTween && (this.craneCarTween.setPaused(!0), this.craneCarTween = null);
                var n = { progress: 0 }, o = createjs.Tween.get(n);
                o.to({ progress: 1 }, 1e3), o.call(function () {
                    o.removeAllEventListeners("change"), null !== i._craneAnimation && (i._craneAnimation.dispose(), i._craneAnimation = null, i._craneContainer.removeChildren()), e()
                }), o.addEventListener("change", function () {
                    var t = i.hpAnimationParams.nowHp + n.progress * (i.hpAnimationParams.maxHp - i.hpAnimationParams.nowHp);
                    i.repairHpGaugeView.update(t, i.hpAnimationParams.maxHp), i.textHp.text = (Math.floor(t) + "/" + i.hpAnimationParams.maxHp).toString(), null !== i._craneAnimation && i._craneAnimation.timeLimit()
                }), o.play(null), this.craneCarTween = o
            }, e.prototype.playHispeed = function (t) {
                var e = this;
                this.useItemButton.visible = !0, this.useItemButton.interactive = !1, this.useItemButton.emit(p.EventType.MOUSEOVER), null != this.craneCarTween && (this.craneCarTween.setPaused(!0), this.craneCarTween = null);
                var i = createjs.Tween.get(this.ANIMATION_HIGHSPEED, { loop: !0 });
                null === this._craneAnimation && (this._craneAnimation = new h.CraneAnimation, this._craneContainer.addChild(this._craneAnimation)), this._craneAnimation.once("high_speed_timer_stop", function () {
                    i.setPaused(!0), e._onUseRepairItemAnimation()
                }).once("high_speed_complete", function () {
                    e._craneAnimation.dispose(), e._craneAnimation = null, e._craneContainer.removeChildren(), e.useItemButton.interactive = !0, e.useItemButton.emit(p.EventType.MOUSEOUT), t()
                }), this._craneAnimation.highSpeed(), i.wait(500).call(function () {
                    e.updateTime(Date.now(), e.completeTime)
                }), i.play(null)
            }, e.prototype.updateTime = function (t, e) {
                this._updateTime(t, e)
            }, e.prototype._updateTime = function (t, e) {
                var i = "00:00:00";
                0 < e - t && (i = l.MathUtil.timeToString(e - t)), this.textTime.text = i
            }, e.prototype.updateUsable = function (t) {
                t ? this.useItemButton.active() : this.useItemButton.disable()
            }, e.prototype.dispose = function () {
                createjs.Tween.removeTweens(this.ANIMATION_HIGHSPEED), this.useItemButton.dispose(), this.repairShipBanner.dispose(), this.starRateView.dispose(), this.repairHpGaugeView.dispose(), null != this.craneCarTween && (this.craneCarTween.setPaused(!0), createjs.Tween.removeTweens(this.craneCarTween.target)), null != this.useRepairItemTween && (this.useRepairItemTween.setPaused(!0), createjs.Tween.removeTweens(this.useRepairItemTween.target)), this.onClickHiSpeed = null, this.useItemButton = null, this.repairShipBanner = null, this.starRateView = null, this.textName = null, this.textLevel = null, this.textHp = null, this.textTime = null, this.repairHpGaugeView = null, this.memDockId = null, this.craneCarTween = null, this.hpAnimationParams = null, this.completeTime = null, this.useRepairItemTween = null, this.informationContainer.removeChildren(), this.informationContainer = null, null !== this._craneAnimation && (this._craneAnimation.dispose(), this._craneAnimation = null, this._craneContainer.removeChildren()), this._craneContainer = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.ShipInDock = d
}