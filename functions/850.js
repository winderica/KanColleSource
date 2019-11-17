const function850 = function (t, e, i) {
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
    var o = i(8),
        r = i(1),
        s = i(51),
        a = i(3),
        _ = i(851),
        l = function (t) {
            function e(e, i, n, o, r, s, a) {
                var _ = t.call(this, 0) || this;
                return _._onMove = function (t) {
                    var e = t.data.global;
                    _._dragSlotItem.position.set(e.x, e.y);
                    var i = -1;
                    _._slotArea.forEach(function (e, n) {
                        var o = t.data.getLocalPosition(e),
                            r = e.getChildByName("over");
                        1 == e.hitArea.contains(o.x, o.y) ? (r.alpha = _._beforeIndex == n || n >= _._availSlotNumber ? 0 : 1, i = n) : r.alpha = 0
                    }), _._afterIndex = i
                }, _._onUp = function () {
                    _._cbDrop(_._beforeIndex, _._afterIndex, _._equipmentList), _._cbEnd()
                }, _._onOut = function () {
                    _._cbEnd()
                }, _._afterIndex = -1, _._beforeIndex = n, _._slotItems = o, _._equipmentList = r, _._cbDrop = s, _._cbEnd = a, _.interactive = !1, _._slotArea = [], _._delayRun = createjs.Tween.get(null).wait(500).call(function () {
                    _._activate(e, i)
                }), _
            }
            return n(e, t), e.prototype.inDraggingEventWaiting = function () {
                return null == this._drag
            }, e.prototype.cancel = function () {
                this._delayRun.setPaused(!0), this._cbEnd()
            }, e.prototype.dispose = function () {
                this.removeChildren(), this.off(r.EventType.MOUSEMOVE, this._onMove), this.off(r.EventType.MOUSEUP, this._onUp), this.off(r.EventType.MOUSEOUT, this._onOut), this._dragSlotItem && this._dragSlotItem.dispose(), null != this._drag && (this._slotItems[this._beforeIndex].alpha = 1, this._drag.removeChildren(), this._slotArea.forEach(function (t) {
                    t.removeChildren()
                })), this._drag = null, this._slotArea = null, this._delayRun = null, this._dragSlotItem = null, this._afterIndex = null, this._availSlotNumber = null, this._beforeIndex = null, this._slotItems = null, this._equipmentList = null, this._cbEnd = null, this._cbDrop = null
            }, e.prototype._activate = function (t, e) {
                var i = this;
                this.interactive = !0, this._availSlotNumber = this._equipmentList.length, this._afterIndex = this._beforeIndex, this._drag = new PIXI.Container, this._slotItems[this._beforeIndex].alpha = .5, this._slotItems.forEach(function (e, n) {
                    var r = new o.AreaBox(0, 16777215, s.RemodelConst.DETAIL_LISTITEM.WIDTH, s.RemodelConst.DETAIL_LISTITEM.HEIGHT);
                    r.hitArea = new PIXI.Rectangle(0, 0, s.RemodelConst.DETAIL_LISTITEM.WIDTH, s.RemodelConst.DETAIL_LISTITEM.HEIGHT);
                    var _ = new PIXI.Sprite(a.REMODEL_MAIN.getTexture(22));
                    _.alpha = 0, _.name = "over", _.position.set(-30, 0), r.addChild(_);
                    var l = t.x + i._slotItems[n].x,
                        u = t.y + i._slotItems[n].y;
                    r.position.set(l, u), i._slotArea.push(r), i._drag.addChild(r)
                }), this._dragSlotItem = new _.SimpleSlotItemSlot, this._dragSlotItem.update(this._equipmentList[this._beforeIndex]), this._dragSlotItem.pivot.set(Math.round(this._dragSlotItem.width / 2), Math.round(this._dragSlotItem.height / 2)), this._dragSlotItem.position.set(e.x, e.y), this._drag.addChild(this._dragSlotItem), this.addChild(this._drag), a.SE.play("237"), this.on(r.EventType.MOUSEMOVE, this._onMove), this.on(r.EventType.MOUSEUP, this._onUp), this.on(r.EventType.MOUSEOUT, this._onOut)
            }, e
        }(o.AreaBox);
    e.SlotItemDragging = l
}