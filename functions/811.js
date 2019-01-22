const function811 = function (t, e, i) {
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
        s = i(37),
        a = i(3),
        _ = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = new PIXI.Sprite(a.REMODEL_GRADEUP.getTexture(7));
                i.position.set(2, 2), e.addChild(i), e._shipCanvas = new PIXI.Sprite, e.addChild(e._shipCanvas), e._levelText = new r.TextBox(66, 16777215), e._levelText.position.set(809, 89), e.addChild(e._levelText);
                var n = new PIXI.Sprite(a.REMODEL_GRADEUP.getTexture(8));
                n.position.set(0, 3), e.addChild(n);
                var o = new PIXI.Sprite(a.REMODEL_GRADEUP.getTexture(9));
                return o.position.set(705, 95), e.addChild(o), e._nameText = new r.TextBox(39, 16777215), e._nameText.anchor.x = 1, e._nameText.position.set(969, 17), e.addChild(e._nameText), e
            }
            return n(e, t), e.prototype.update = function (t) {
                var e = t.mstID,
                    i = t.isDamaged();
                1 == o.default.resources.isLoadedShip(e, i, "remodel") ? this._shipCanvas.texture = o.default.resources.getShip(e, i, "remodel") : (this._shipCanvas.texture = PIXI.Texture.EMPTY, new s.TaskLoadShipResource("remodel", this._shipCanvas, e, i).start()), this._levelText.text = t.level.toString(), this._nameText.text = t.shipTypeName + " " + t.name
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._levelText.destroy(), this._nameText.destroy(), this._shipCanvas = null, this._levelText = null, this._nameText = null
            }, e
        }(PIXI.Container);
    e.KaizoDetailHeader = _
}