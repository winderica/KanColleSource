const function1041 = function (t, e, i) {
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
        r = i(4),
        s = i(15),
        a = i(39),
        _ = i(1042),
        l = i(1043),
        u = i(1044),
        c = i(1),
        h = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._target_id = -1, i._onMouseOver = function () {
                    i._focus.alpha = 1, i._txt_id.style.fill = 16774898, i._txt_name.style.fill = 16774898
                }, i._onMouseOut = function () {
                    i._focus.alpha = 0, i._txt_id.style.fill = 4999235, i._txt_name.style.fill = 4999235
                }, i._onClick = function (t) {
                    var e = t.data,
                        n = o.default.model.basic.member_id,
                        r = s.__create_serial_id__(n, e.global.x, e.global.y);
                    o.default.model.expedition.serial_id = r, null != i._cb_onClick && i._cb_onClick(i._target_id)
                }, i._cb_onClick = e, i._focus = new PIXI.extras.TilingSprite(PIXI.Texture.EMPTY, 655, 45), i.addChild(i._focus), i._txt_id = new r.TextBox(21, 4999235), i._txt_id.anchor.set(1, 0), i._txt_id.position.set(43, 12), i.addChild(i._txt_id), i._txt_name = new r.TextBox(21, 4999235), i._txt_name.position.set(49, 12), i.addChild(i._txt_name), i._txt_numship = new r.TextBox(28, 3768020), i._txt_numship.anchor.x = 1, i._txt_numship.position.set(420, 4), i.addChild(i._txt_numship), i._txt_numship_label = new r.TextBox(16, 4999235), i._txt_numship_label.position.set(420, 15), i.addChild(i._txt_numship_label), i._difficulty = new _.ExpeditionDifficulty, i._difficulty.position.set(495, 7), i.addChild(i._difficulty), i._state = new l.ExpeditionStateIcon, i._state.position.set(543, 7), i.addChild(i._state), i._deckIcon = new u.ExpeditionDeckIcon, i._deckIcon.position.set(616, 22), i.addChild(i._deckIcon), i._hit_area = new PIXI.Graphics, i._hit_area.beginFill(0, 0), i._hit_area.drawRect(0, 0, 655, 45), i._hit_area.endFill(), i.addChild(i._hit_area), i
            }
            return n(e, t), Object.defineProperty(e.prototype, "target_id", {
                get: function () {
                    return this._target_id
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                this._focus.texture = a.SALLY_EXPEDITION.getTexture(31), this._focus.alpha = 0, this._hit_area.interactive = !0
            }, e.prototype.update = function (t, e) {
                if (null == t) this._target_id = -1, this.visible = !1;
                else {
                    this._target_id = t.mstID, this._txt_id.text = t.dispID, this._txt_name.text = t.name;
                    var i = t.required_num;
                    i > 0 ? (this._txt_numship.text = i.toString(), this._txt_numship_label.text = i < 6 ? "\u96bb\u4ee5\u4e0a" : "\u96bb\u9060\u5f81", this._txt_numship.visible = !0, this._txt_numship_label.visible = !0) : (this._txt_numship.visible = !1, this._txt_numship_label.visible = !1), this._difficulty.update(t.difficulty), this._state.update(t.state), this._deckIcon.update(e), this.visible = !0
                }
            }, e.prototype.activate = function () {
                1 != this._hit_area.buttonMode && (this._hit_area.buttonMode = !0, this._hit_area.on(c.EventType.MOUSEOVER, this._onMouseOver), this._hit_area.on(c.EventType.MOUSEOUT, this._onMouseOut), this._hit_area.on(c.EventType.CLICK, this._onClick))
            }, e.prototype.deactivate = function () {
                this._hit_area.buttonMode = !1, this._hit_area.off(c.EventType.MOUSEOVER, this._onMouseOver), this._hit_area.off(c.EventType.MOUSEOUT, this._onMouseOut), this._hit_area.off(c.EventType.CLICK, this._onClick)
            }, e.prototype.dispose = function () {
                this.deactivate(), this.removeChildren(), this._cb_onClick = null, this._txt_id.destroy(), this._txt_name.destroy(), this._txt_numship.destroy(), this._txt_numship_label.destroy(), this._difficulty.dispose(), this._state.dispose(), this._deckIcon.dispose()
            }, e.prototype.getDeckIconTween = function (t, e) {
                var i = this._deckIcon;
                return i.alpha = 0, i.scale.set(2.3), i.update(t), createjs.Tween.get(i).to({
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1
                }, 400).wait(100).call(function () {
                    var t = [1, 0, 0, .5, 0, 1, 0, .5, 0, 0, 1, .5, 0, 0, 0, 1],
                        e = new PIXI.filters.ColorMatrixFilter;
                    e.matrix = t, i.filters = [e]
                }).wait(100).call(function () {
                    i.filters = null
                }).wait(200).call(e)
            }, e
        }(PIXI.Container);
    e.ExpeditionListItem = h
}