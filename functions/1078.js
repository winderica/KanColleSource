const function1078 = function (t, e, i) {
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
    var o = i(202), r = i(155), s = i(1079), a = i(383), _ = i(384), l = i(386), u = function (t) {
        function e(e, i, n) {
            var r = t.call(this) || this;
            return r._bg = new PIXI.Sprite, r._bg.position.set(147, 60), r.addChild(r._bg), r._pager = new _.PagerContainer(i), r._pager.position.set(195, 14), r.addChild(r._pager), r._content = new s.MainContainer(n), r._content.position.set(126, 66), r.addChild(r._content), r._tab_container = new l.TabBtnContainer(e), r._tab_container.position.set(0, 60), r.addChild(r._tab_container), r._mini_chara = new a.MiniChara, r._mini_chara.position.set(104, 564), r.addChild(r._mini_chara), r._back_btn = new o.BackBtn, r._back_btn.position.set(0, 659), r.addChild(r._back_btn), r
        }

        return n(e, t), Object.defineProperty(e.prototype, "pager", {
            get: function () {
                return this._pager
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "content", {
            get: function () {
                return this._content
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "tab_container", {
            get: function () {
                return this._tab_container
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function (t) {
            this._bg.texture = r.ALBUM_MAIN.getTexture(20), this._pager.initialize(), this._tab_container.initialize(), this._content.initialize(), this._pager.update(0, 0), this._content.update(1, 0, null), this._tab_container.update(1, 0), this._mini_chara.initialize(), this._back_btn.initialize(t)
        }, e.prototype.activate = function () {
            this._pager.activate(), this._content.activate(), this._tab_container.activate(), this._mini_chara.activate(), this._back_btn.activate()
        }, e.prototype.deactivate = function () {
            this._pager.deactivate(), this._content.deactivate(), this._tab_container.deactivate(), this._mini_chara.deactivate(), this._back_btn.deactivate()
        }, e.prototype.dispose = function () {
            this.removeChildren(), this._pager.dispose(), this._content.dispose(), this._tab_container.dispose(), this._mini_chara.dispose(), this._back_btn.dispose(), this._bg = null, this._pager = null, this._content = null, this._tab_container = null, this._mini_chara = null, this._back_btn = null
        }, e
    }(PIXI.Container);
    e.MainView = u
}