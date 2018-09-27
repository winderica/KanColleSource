const function1494 = function (t, e, i) {
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
    var o = i(28), r = i(19), s = i(39), a = i(36), _ = i(477), u = i(478), l = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._line = new PIXI.Sprite, e.addChild(e._line), e._info = new _.DeckInfo, e.addChild(e._info), e._gauge_label = new PIXI.Sprite, e._gauge_label.x = 11, e._gauge_label.y = 96, e.addChild(e._gauge_label), e._gauge = new u.Gauge, e._gauge.x = 11, e._gauge.y = 130, e.addChild(e._gauge), e
        }

        return n(e, t), e.prototype.initialize = function (t, e, i, n) {
            this._line.visible = !1, this._line.texture = a.BATTLE_RESULT_MAIN.getTexture(2), this._info.alpha = 0, this._info.user_name.text = t, this._info.level.initialize(), this._info.level.text = e.toString(), this._info.deck_name.initialize(), this._info.deck_name.text = i, this._gauge_label.texture = a.BATTLE_RESULT_MAIN.getTexture(72), this._gauge_label.alpha = 0, this._gauge.initialize(65298), this._gauge.alpha = 0, n && (this._gauge_label.visible = !1, this._gauge.visible = !1)
        }, e.prototype.createShowTween = function () {
            var t = this;
            return createjs.Tween.get(this._info).call(function () {
                t._line.visible = !0
            }).to({ alpha: 1 }, 100)
        }, e.prototype.createHideGaugeTweens = function (t) {
            return [createjs.Tween.get(this._gauge_label).to({ alpha: 0 }, 200), createjs.Tween.get(this._gauge).to({ alpha: 0 }, 200), createjs.Tween.get(this._line).wait(200).to({ x: t }, 500), createjs.Tween.get(this._info).wait(200).to({ x: t }, 500)]
        }, e.prototype.createTaskShowGauge = function (t, e, i) {
            if (0 == this._gauge.visible) return new s.WaitTask(0);
            var n, a = new r.TweenTask;
            this._gauge_label.x += 15, n = createjs.Tween.get(this._gauge_label).wait(i).to({
                x: this._gauge_label.x - 15,
                alpha: 1
            }, 200), a.addTween(n), this._gauge.x += 15, n = createjs.Tween.get(this._gauge).wait(i).to({
                x: this._gauge.x - 15,
                alpha: 1
            }, 200), a.addTween(n);
            var _ = new o.SerialTask;
            _.add(a), n = this._gauge.createTween(t, e);
            var u = new r.TweenTask;
            return u.addTween(n), _.add(u), _
        }, e.prototype.createShowDeckNameTween = function (t, e, i) {
            return this._info.deck_name.text = t, createjs.Tween.get(this._info.deck_name).wait(i).to({ alpha: 1 }, e)
        }, e.prototype.createHideDeckNameTween = function (t, e) {
            return createjs.Tween.get(this._info.deck_name).wait(e).to({ alpha: 0 }, t)
        }, e
    }(PIXI.Container);
    e.DeckInfoPanelFriend = l
}