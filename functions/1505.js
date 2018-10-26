const function1505 = function (t, e, i) {
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
    var o = i(4), r = i(36), s = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._extra_war_result = new a, e._extra_war_result.position.set(227, 177), e._extra_war_result.visible = !1, e.addChild(e._extra_war_result), e._useitem_icon = new PIXI.Sprite, e._useitem_icon.position.set(324, 290), e._useitem_icon.visible = !1, e.addChild(e._useitem_icon), e._map_incentive = new PIXI.Sprite, e._map_incentive.position.set(270, 525), e._map_incentive.visible = !1, e.addChild(e._map_incentive), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "extra_war_result", {
            get: function () {
                return this._extra_war_result
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "useitem_icon", {
            get: function () {
                return this._useitem_icon
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "map_incentive", {
            get: function () {
                return this._map_incentive
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function () {
            this._extra_war_result.initialize(), this._map_incentive.texture = r.BATTLE_RESULT_MAIN.getTexture(77)
        }, e.prototype.dispose = function () {
            this.removeChildren(), this._extra_war_result.dispose()
        }, e
    }(PIXI.Container);
    e.ExtraResultPanel = s;
    var a = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._title = new PIXI.Sprite, e.addChild(e._title), e._plus = new PIXI.Sprite, e._plus.position.set(153, 47), e.addChild(e._plus), e._label = new o.TextBox(28, 16777215), e._label.anchor.x = 1, e._label.position.set(267, 36), e.addChild(e._label), e
        }

        return n(e, t), e.prototype.initialize = function () {
            this._title.texture = r.BATTLE_RESULT_MAIN.getTexture(87), this._plus.texture = r.BATTLE_RESULT_MAIN.getTexture(86)
        }, e.prototype.update = function (t) {
            this._label.text = t.toString()
        }, e.prototype.dispose = function () {
            this.removeChildren(), this._label.destroy()
        }, e
    }(PIXI.Container)
}