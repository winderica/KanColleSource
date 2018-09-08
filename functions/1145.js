const function1145 = function (t, e, i) {
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
    var o = i(76), r = i(301), s = i(77), a = i(3), _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._soldout = new PIXI.Sprite, e._soldout.x = 147, e._soldout.y = 207, e._soldout.visible = !1, e.addChild(e._soldout), e
        }

        return n(e, t), e.prototype.initialize = function () {
            t.prototype.initialize.call(this), this._soldout.texture = a.ITEM_FSHOP.getTexture(21)
        }, e.prototype.updateFromModel = function (e) {
            if (this.clean(), this._soldout.visible = e.has(), e.isActive()) {
                this._img.scale.set(1), this._img.position.set(0, 0);
                var i = o.FurnitureLoader.getPath(e.mstID, "thumbnail"),
                    n = o.FurnitureLoader.getVersionQuery(e.mstID), r = i + ("" == n ? "" : "?" + n),
                    a = PIXI.Texture.fromImage(r);
                t.prototype.update.call(this, a)
            } else {
                switch (e.type) {
                    case 0:
                        this._img.scale.set(1.45), this._img.position.set(-757, -99);
                        break;
                    case 1:
                        this._img.scale.set(.64), this._img.position.set(-96, 3);
                        break;
                    case 2:
                        this._img.scale.set(.64), this._img.position.set(3, 3);
                        break;
                    case 3:
                        this._img.scale.set(1), this._img.position.set(0, 0);
                        break;
                    case 4:
                        this._img.scale.set(.73), this._img.position.set(1, -90);
                        break;
                    case 5:
                        this._img.scale.set(.56), this._img.position.set(-34, 9)
                }
                var _ = e.mstID,
                    r = o.FurnitureLoader.getPath(_, "normal") + s.VersionUtil.getResourceVersion(2, _),
                    a = PIXI.Texture.fromImage(r);
                t.prototype.update.call(this, a)
            }
        }, e.prototype.clean = function () {
            this._soldout.visible = !1, t.prototype.clean.call(this)
        }, e
    }(r.FurnitureThumbnail);
    e.Thumbnail = _
}