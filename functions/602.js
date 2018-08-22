const function602 = function (t, e, i) {
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
    var o = i(603), r = i(604), s = i(605), a = i(151), _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._onRevampOpen = function () {
                null != e._revamp && e._revamp.open()
            }, e._onRevampClose = function () {
                null != e._revamp && e._revamp.close()
            }, e._waves = new a.RingMenuWaves, e._organize = new o.RingMenuBtn(11), e._organize.position.set(297, 203), e._supply = new o.RingMenuBtn(12), e._supply.position.set(117, 333), e._remodel = new o.RingMenuBtn(13), e._remodel.position.set(476, 333), e._repair = new o.RingMenuBtn(14), e._repair.position.set(186, 543), e._arsenal = new o.RingMenuBtn(15), e._arsenal.position.set(407, 543), e._sally = new s.RingMenuBtnSally, e._sally.position.set(296, 390), e.addChild(e._remodel), e.addChild(e._arsenal), e.addChild(e._sally), e.addChild(e._organize), e.addChild(e._repair), e.addChild(e._supply), e
        }

        return n(e, t), e.prototype.initialize = function () {
            this._waves.initialize(), this._organize.initialize(), this._supply.initialize(), this._remodel.initialize(), this._repair.initialize(), this._arsenal.initialize(this._onRevampOpen, this._onRevampClose), this._sally.initialize(), this._baseX = this.x, this._presetX = -(this.x + Math.floor(this.width / 3))
        }, e.prototype.activate = function () {
            this._organize.activate(), this._supply.activate(), this._remodel.activate(), this._repair.activate(), this._arsenal.activate(), this._sally.activate(), null != this._revamp && this._revamp.activate()
        }, e.prototype.deactivate = function () {
            this._organize.deactivate(), this._supply.deactivate(), this._remodel.deactivate(), this._repair.deactivate(), this._arsenal.deactivate(), this._sally.deactivate(), null != this._revamp && this._revamp.deactivate()
        }, e.prototype.prePosition = function () {
            this.x = this._presetX, this.alpha = 0
        }, e.prototype.startAnimation = function () {
            var t = this;
            this._interactive(!1), createjs.Tween.get(this).wait(200).to({
                x: this._baseX,
                alpha: 1
            }, 300, createjs.Ease.quadOut).call(function () {
                t._interactive(!0)
            })
        }, e.prototype.dispose = function () {
            this._waves.dispose(), this._organize.dispose(), this._supply.dispose(), this._remodel.dispose(), this._repair.dispose(), this._arsenal.dispose(), this._sally.dispose(), null != this._revamp && this._revamp.dispose()
        }, e.prototype.setRevampFlg = function (t) {
            1 == t ? this._addRevampBtn() : this._removeRevampBtn()
        }, e.prototype._addRevampBtn = function () {
            null == this._revamp && (this._revamp = new r.RingMenuBtnRevamp(31), this._revamp.position.set(407, 543), this._revamp.initialize(), this._revamp.activate(), this.addChildAt(this._revamp, 0))
        }, e.prototype._removeRevampBtn = function () {
            null != this._revamp && (null != this._revamp.parent && this._revamp.parent.removeChild(this._revamp), this._revamp.dispose(), this._revamp = null)
        }, e.prototype._interactive = function (t) {
            this._organize.interactiveApply(t), this._supply.interactiveApply(t), this._remodel.interactiveApply(t), this._repair.interactiveApply(t), this._arsenal.interactiveApply(t), null != this._revamp && this._revamp.interactiveApply(t)
        }, e
    }(PIXI.Container);
    e.RingMenuLayer = _
}