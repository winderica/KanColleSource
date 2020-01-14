const function731 = function (t, e, i) {
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
    var o = i(57),
        r = i(167),
        s = i(58),
        a = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._onClickMamiya = function () {
                    e.onClickMamiya()
                }, e._onClickIrako = function () {
                    e.onClickIrako()
                }, e._onClickMamiyaAndIrako = function () {
                    e.onClickMamiyaAndIrako()
                }, e._onClickBack = function () {
                    e.onClickBack()
                };
                var i = o.ORGANIZE_MAIN.getTexture(6);
                e.message = new PIXI.Sprite(r.OrganizeConst.getMamiyaOption().res_info4);
                var n = r.OrganizeConst.getMamiyaOption().res_btn_mamiya;
                e.buttonMamiya = new s.SimpleButton(n, n), n = r.OrganizeConst.getMamiyaOption().res_btn_irako, e.buttonIrako = new s.SimpleButton(n, n), n = r.OrganizeConst.getMamiyaOption().res_btn_m_i, e.buttonMamiyaAndIrako = new s.SimpleButton(n, n), e.buttonBack = new s.SimpleButton(i, i);
                var a = new PIXI.Sprite(r.OrganizeConst.getMamiyaOption().res_btn_mamiya_g),
                    _ = new PIXI.Sprite(r.OrganizeConst.getMamiyaOption().res_btn_irako_g),
                    u = new PIXI.Sprite(r.OrganizeConst.getMamiyaOption().res_btn_m_i_g);
                return e.buttonMamiya.position = a.position = new PIXI.Point(100, 43), e.buttonIrako.position = _.position = new PIXI.Point(753, 43), e.buttonMamiyaAndIrako.position = u.position = new PIXI.Point(390, 114), e.buttonBack.position.set(762, 135), e.buttonMamiya.onClick = e._onClickMamiya, e.buttonIrako.onClick = e._onClickIrako, e.buttonMamiyaAndIrako.onClick = e._onClickMamiyaAndIrako, e.buttonBack.onClick = e._onClickBack, e.addChild(e.message, a, _, u, e.buttonMamiya, e.buttonIrako, e.buttonMamiyaAndIrako, e.buttonBack), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.buttonMamiya.dispose(), this.buttonIrako.dispose(), this.buttonMamiyaAndIrako.dispose(), this.buttonBack.dispose(), this._onClickBack = this._onClickIrako = this._onClickMamiya = this._onClickMamiyaAndIrako = null, this.buttonMamiya = null, this.buttonIrako = null, this.buttonMamiyaAndIrako = null, this.buttonBack = null, this.message = null, this.onClickMamiya = null, this.onClickIrako = null, this.onClickMamiyaAndIrako = null, this.onClickBack = null, this.removeChildren()
            }, e.prototype.update = function (t, e, i) {
                t ? (this.buttonMamiya.visible = !0, this.buttonMamiya.interactive = !0, this.buttonMamiya.buttonMode = !0) : (this.buttonMamiya.visible = !1, this.buttonMamiya.interactive = !1, this.buttonMamiya.buttonMode = !1), e ? (this.buttonIrako.visible = !0, this.buttonIrako.interactive = !0, this.buttonIrako.buttonMode = !0) : (this.buttonIrako.visible = !1, this.buttonIrako.interactive = !1, this.buttonIrako.buttonMode = !1), i ? (this.buttonMamiyaAndIrako.visible = !0, this.buttonMamiyaAndIrako.interactive = !0, this.buttonMamiyaAndIrako.buttonMode = !0) : (this.buttonMamiyaAndIrako.visible = !1, this.buttonMamiyaAndIrako.interactive = !1, this.buttonMamiyaAndIrako.buttonMode = !1)
            }, e
        }(PIXI.Container);
    e.SweetsSelectView = a
}