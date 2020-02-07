const function1571 = function (t, e, i) {
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
    var o = i(4),
        r = i(36),
        s = i(1572),
        a = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._line_v = new PIXI.Sprite, e._line_v.position.set(0, 0), e._line_v.scale.set(1, 3.7), e._line_h = new PIXI.Sprite, e._line_h.position.set(15, 149), e._bonus_label = new PIXI.Sprite, e._bonus_label.position.set(21, 11), e._title_label = new PIXI.Sprite, e._title_label.position.set(30, 62), e._sub_title = new PIXI.Sprite, e.addChild(e._sub_title), e._exp_label = new PIXI.Sprite, e._exp_label.position.set(479, 117), e._exp_text = new o.TextBox(32, 16774898), e._exp_text.anchor.set(1, 0), e._exp_text.position.set(471, 99), e._exp_ships = [], e.addChild(e._line_v), e.addChild(e._line_h), e.addChild(e._bonus_label), e.addChild(e._title_label), e.addChild(e._exp_label), e.addChild(e._exp_text), e._extra_result = new s.ExtraResultPanel, e.addChild(e._extra_result), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "extra_result", {
                get: function () {
                    return this._extra_result
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t, e, i, n) {
                this._line_v.texture = r.BATTLE_RESULT_MAIN.getTexture(2), this._line_h.texture = r.BATTLE_RESULT_MAIN.getTexture(20), this._bonus_label.texture = r.BATTLE_RESULT_MAIN.getTexture(71), this._title_label.texture = 0 == i ? r.BATTLE_RESULT_MAIN.getTexture(69) : r.BATTLE_RESULT_MAIN.getTexture(74), this._sub_title.texture = r.BATTLE_RESULT_MAIN.getTexture(70), this._exp_label.texture = r.BATTLE_RESULT_MAIN.getTexture(75), this._exp_text.text = t.toString();
                var o = 176;
                n ? (this._line_h.y = 97, this._sub_title.x = 203, this._sub_title.y = 68, this._exp_text.y = 60, this._exp_label.y = 80, o -= 68) : (this._line_h.y = 149, this._sub_title.x = 35, this._sub_title.y = 110, this._exp_text.y = 99, this._exp_label.y = 117);
                for (var s = 0; s < e.length; s++) {
                    var a = e[s],
                        u = new _;
                    u.x = 6, u.y = o + 68 * s, this._exp_ships.push(u), this.addChild(u), a >= 0 ? u.initialize(a) : u.visible = !1
                }
                this._extra_result.initialize()
            }, e.prototype.createShowShipExpTweens = function (t, e, i) {
                void 0 === i && (i = 0);
                for (var n = [], o = 0; o < this._exp_ships.length; o++) {
                    var r = this._exp_ships[o];
                    t[o] >= 0 ? (r.initialize(t[o]), r.visible = !0) : r.visible = !1, n.push(createjs.Tween.get(r).wait(i).to({
                        alpha: 1
                    }, e))
                }
                return n
            }, e.prototype.createHideShipExpTweens = function (t, e) {
                void 0 === e && (e = 0);
                for (var i = [], n = 0; n < this._exp_ships.length; n++) {
                    var o = this._exp_ships[n];
                    i.push(createjs.Tween.get(o).wait(e).to({
                        alpha: 0
                    }, t))
                }
                return i
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._line_v = null, this._line_h = null, this._bonus_label = null, this._exp_label = null, this._exp_text.destroy(), this._exp_text = null;
                for (var t = 0, e = this._exp_ships; t < e.length; t++) {
                    e[t].dispose()
                }
                this._exp_ships = null, this._extra_result.dispose(), this._extra_result = null
            }, e
        }(PIXI.Container);
    e.PanelExp = a;
    var _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._plus = new PIXI.Sprite, e._plus.position.set(18, 9), e._exp = new PIXI.Sprite, e._exp.position.set(120, 12), e._text = new o.TextBox(24, 16774898), e._text.anchor.set(1, 0), e._text.position.set(111, 0), e.addChild(e._plus), e.addChild(e._exp), e.addChild(e._text), e
        }
        return n(e, t), e.prototype.initialize = function (t) {
            this._plus.texture = r.BATTLE_RESULT_MAIN.getTexture(86), this._exp.texture = r.BATTLE_RESULT_MAIN.getTexture(75), this._text.text = t.toString()
        }, e.prototype.dispose = function () {
            this.removeChildren(), this._plus = null, this._exp = null, this._text.destroy(), this._text = null
        }, e
    }(PIXI.Container)
}