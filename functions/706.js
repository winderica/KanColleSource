const function706 = function (t, e, i) {
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
        r = i(1),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._onClickEdit = function () {
                    e.onClick(1)
                }, e._onClickExpansion = function () {
                    e.onClick(2)
                }, e.buttonSave = new PIXI.Sprite, e.buttonLoad = new PIXI.Sprite, e.buttonLoad.y = 43, e.buttonSave.interactive = e.buttonLoad.interactive = !0, e.buttonSave.buttonMode = e.buttonLoad.buttonMode = !0, e.buttonSave.addListener(r.EventType.CLICK, e._onClickEdit), e.buttonLoad.addListener(r.EventType.CLICK, e._onClickExpansion), e.addChild(e.buttonSave, e.buttonLoad), e.update(0), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.buttonLoad.removeAllListeners(r.EventType.CLICK), this.buttonSave.removeAllListeners(r.EventType.CLICK), this.onClick = null, this.buttonSave = null, this.buttonLoad = null, this.removeChildren()
            }, e.prototype.update = function (t) {
                switch (t) {
                    case 0:
                        var e = o.ORGANIZE_MAIN.getTexture(48),
                            i = o.ORGANIZE_MAIN.getTexture(45);
                        this.buttonSave.texture = e, this.buttonLoad.texture = i;
                        break;
                    case 1:
                        var n = o.ORGANIZE_MAIN.getTexture(50),
                            r = o.ORGANIZE_MAIN.getTexture(46);
                        this.buttonSave.texture = n, this.buttonLoad.texture = r;
                        break;
                    case 2:
                        var s = o.ORGANIZE_MAIN.getTexture(49),
                            a = o.ORGANIZE_MAIN.getTexture(47);
                        this.buttonSave.texture = s, this.buttonLoad.texture = a
                }
            }, e.prototype.show = function () {
                this.visible = !0
            }, e.prototype.hide = function () {
                this.visible = !1
            }, e
        }(PIXI.Container);
    e.PresetButtonLayer = s
}