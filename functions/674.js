const function674 = function (t, e, i) {
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
    var o = i(3), r = i(56), s = i(13), a = i(4), _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onClickUpdate = function () {
                e.onClickUpdate()
            }, e._onKeyDown = function () {
                var t = s.EditTextBoxUtil.text;
                e._mirrorText.text = t;
                var i = s.EditTextBoxUtil.validation(t, e.baseText);
                e.__updateButton__(i, e._editable)
            };
            var i = o.ORGANIZE_MAIN.getTexture(27), n = o.ORGANIZE_MAIN.getTexture(57),
                _ = o.ORGANIZE_MAIN.getTexture(58), u = o.ORGANIZE_MAIN.getTexture(59), l = new PIXI.Sprite(i);
            return e.editButton = new PIXI.Sprite(n), e.updateButton = new r.SimpleButton(_, u), s.EditTextBoxUtil.init(780, 155, 332.25, 20.25, 4999235, "font_j"), s.EditTextBoxUtil.onLengthCheck(12, e._onKeyDown), e._mirrorText = new a.TextBox(27, 4999235), e._mirrorText.position.set(87, 4), e._mirrorText.visible = !1, e.updateButton.position.set(l.width, 1), e.updateButton.onClick = e._onClickUpdate, e.editButton.position.set(l.width, 1), e.addChild(l, e.editButton, e.updateButton, e._mirrorText), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "text", {
            get: function () {
                return s.EditTextBoxUtil.text
            }, enumerable: !0, configurable: !0
        }), e.prototype.__updateButton__ = function (t, e) {
            this.updateButton.interactive = !1, this.editButton.visible = !1, this.updateButton.visible = !1, t && e ? (this.updateButton.reset(), this.updateButton.interactive = !0, this.editButton.visible = !1, this.updateButton.visible = !0) : e && (this.editButton.visible = !0)
        }, e.prototype.dispose = function () {
            this.updateButton.dispose(), this.updateButton = null, this.removeChildren()
        }, e.prototype.reload = function (t) {
            this.baseText = this._mirrorText.text = s.EditTextBoxUtil.text = t;
            var e = s.EditTextBoxUtil.validation(t, this.baseText);
            this.__updateButton__(e, this._editable)
        }, Object.defineProperty(e.prototype, "writable", {
            set: function (t) {
                s.EditTextBoxUtil.setVisibility(t), this._mirrorText.visible = !t
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "editable", {
            set: function (t) {
                this.editButton.visible = this._editable = t
            }, enumerable: !0, configurable: !0
        }), e
    }(PIXI.Container);
    e.EditNameArea = _
}