const function1496 = function (t, e, i) {
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
    var o = i(28),
        r = i(19),
        s = i(36),
        a = i(482),
        _ = i(483),
        l = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._line = new PIXI.Sprite, e.addChild(e._line), e._info = new a.DeckInfo, e.addChild(e._info), e._gauge_label = new PIXI.Sprite, e._gauge_label.x = 11, e._gauge_label.y = 96, e.addChild(e._gauge_label), e._gauge = new _.Gauge, e._gauge.x = 11, e._gauge.y = 130, e.addChild(e._gauge), e._gauge_f = new _.Gauge, e._gauge_f.x = 11, e._gauge_f.y = 96, e.addChild(e._gauge_f), e._gauge_f.visible = !1, e
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                this._line.texture = s.BATTLE_RESULT_MAIN.getTexture(2), this._line.visible = !1, this._info.alpha = 0, this._info.deck_name.initialize(), this._info.deck_name.text = t, this._gauge_label.texture = s.BATTLE_RESULT_MAIN.getTexture(72), this._gauge_label.alpha = 0, this._gauge.initialize(16711680), this._gauge.alpha = 0, e && (this._info.deck_name.y = 14, this._gauge_label.y = 54, this._gauge_f.initialize(65298), this._gauge_f.alpha = 0, this._gauge_f.visible = !0)
            }, e.prototype.createShowTween = function () {
                var t = this;
                return createjs.Tween.get(this._info).call(function () {
                    t._line.visible = !0
                }).to({
                    alpha: 1
                }, 100)
            }, e.prototype.createTaskShowGauge = function (t, e, i, n, s) {
                void 0 === i && (i = -1), void 0 === n && (n = -1);
                var a, _ = new r.TweenTask;
                this._gauge_label.x += 15, a = createjs.Tween.get(this._gauge_label).wait(s).to({
                    x: this._gauge_label.x - 15,
                    alpha: 1
                }, 200), _.addTween(a), this._gauge.x += 15, a = createjs.Tween.get(this._gauge).wait(s).to({
                    x: this._gauge.x - 15,
                    alpha: 1
                }, 200), _.addTween(a);
                var l = new o.SerialTask;
                l.add(_), a = this._gauge.createTween(t, e);
                var u = new r.TweenTask;
                return u.addTween(a), l.add(u), 1 == this._gauge_f.visible && (this._gauge_f.x += 15, a = createjs.Tween.get(this._gauge_f).wait(s + 100).to({
                    x: this._gauge_f.x - 15,
                    alpha: 1
                }, 200), _.addTween(a), a = this._gauge_f.createTween(i, n), u.addTween(a)), l
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._info.dispose()
            }, e
        }(PIXI.Container);
    e.DeckInfoPanelEnemy = l
}