const function1280 = function (t, e, i) {
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
        r = i(2),
        s = i(12),
        a = i(8),
        _ = i(20),
        l = i(1281),
        u = i(1),
        c = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._shutter = e, n._item_ids = i, n
            }
            return n(e, t), e.prototype._start = function () {
                var t = this;
                this._view = new l.MapEndView, this._view.initialize(this._item_ids), this._view.alpha = 0, this._view.content.alpha = 0, this._view.gearBtn.visible = !1, this._shutter.addChild(this._view);
                var e = _.MAP_COMMON.getTexture(105);
                this._telopBG = new s.Sprite(e), this._telopBG.position.set(o.default.width / 2, o.default.height / 2), this._telopBG.anchor.set(.5), this._telopBG.scale.y = 0, this._shutter.addChild(this._telopBG), createjs.Tween.get(this._telopBG).to({
                    scaleY: 1
                }, 300).call(function () {
                    t._showMessage()
                })
            }, e.prototype._showMessage = function () {
                var t = this,
                    e = _.MAP_COMMON.getTexture(108);
                this._telopText = new s.Sprite(e), this._telopText.position.set(o.default.width / 2 + 240, o.default.height / 2), this._telopText.anchor.set(.5), this._telopText.alpha = 0, this._shutter.addChild(this._telopText), createjs.Tween.get(this._telopText).to({
                    x: o.default.width / 2 + 180,
                    alpha: 1
                }, 300).to({
                    x: o.default.width / 2
                }, 400).to({
                    x: o.default.width / 2 - 60,
                    alpha: 0
                }, 400).call(function () {
                    t._shutter.removeChild(t._telopText), t._closeTelop()
                })
            }, e.prototype._closeTelop = function () {
                var t = this;
                createjs.Tween.get(this._telopBG).to({
                    scaleY: 0
                }, 300).call(function () {
                    t._shutter.removeChild(t._telopBG)
                }), createjs.Tween.get(this._view).to({
                    alpha: 1
                }, 200).call(function () {
                    t._showContent()
                })
            }, e.prototype._showContent = function () {
                var t = this;
                this._shutter.close(), this._shutter.once("closed", function () {
                    createjs.Tween.get(t._view.content).to({
                        alpha: 1
                    }, 200).call(function () {
                        t._waitClick()
                    })
                })
            }, e.prototype._waitClick = function () {
                var t = this,
                    e = new a.AreaBox(0);
                e.interactive = !0, e.buttonMode = !0, this._shutter.addChild(e), this._view.gearBtn.visible = !0, this._view.gearBtn.activate(), e.once(u.EventType.CLICK, function () {
                    t._shutter.removeChild(e), t._hideView()
                })
            }, e.prototype._hideView = function () {
                var t = this;
                createjs.Tween.get(this._view).to({
                    alpha: 0
                }, 200).call(function () {
                    t._view.gearBtn.deactivate(), t._shutter.removeChild(t._view), t._endTask()
                })
            }, e
        }(r.TaskBase);
    e.TaskShowMapEndView = c
}