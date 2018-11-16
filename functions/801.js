const function801 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(5), o = i(0), r = i(30), s = i(161), a = i(52), _ = i(86), u = i(802), l = i(803), c = function () {
        function t(t) {
            var e = this;
            this._onClickShip = function (t, i) {
                e.onClickShip(i);
                o.default.view.clickGuard = !0, e.backAreaChoiceShip.width = n.default.width, createjs.Tween.get(e.backAreaChoiceShip).to({ alpha: 0 }, 125), createjs.Tween.get(e.shipList).to({ x: n.default.width }, 125).call(function () {
                    o.default.view.clickGuard = !1, e.onComplete()
                })
            }, this._onClickBack = function () {
                o.default.view.clickGuard = !0, e.backAreaChoiceShip.width = n.default.width, createjs.Tween.get(e.backAreaChoiceShip).to({ alpha: 0 }, 125), createjs.Tween.get(e.shipList).to({ x: n.default.width }, 125).call(function () {
                    o.default.view.clickGuard = !1, e.onComplete()
                })
            }, this._onClickPager_ = function (t) {
                e.pageIndex != t && e._updatePage_(t)
            }, this._onClickSort_ = function () {
                switch (s.SceneMemory.shipSortKeyType) {
                    case 1:
                        s.SceneMemory.shipSortKeyType = 2;
                        break;
                    case 2:
                        s.SceneMemory.shipSortKeyType = 3;
                        break;
                    case 3:
                        s.SceneMemory.shipSortKeyType = 4;
                        break;
                    case 4:
                        s.SceneMemory.shipSortKeyType = 1
                }
                e._updateSort_(s.SceneMemory.shipSortKeyType), e._updatePage_(e.pageIndex)
            }, this.mainView = t, this.backAreaChoiceShip = new u.BackAreaChoiceShip, this.shipList = new l.ShipList, this.shipList.pagerView.onChangePage = this._onClickPager_, this.shipList.shipSortButton.onClick = this._onClickSort_, this.backAreaChoiceShip.onClick = this._onClickBack, this.shipList.onClick = this._onClickShip
        }

        return t.prototype.dispose = function () {
            this.mainView.removeChild(this.backAreaChoiceShip), this.mainView.removeChild(this.shipList), this.onClickShip = null, this.onComplete = null, this._onClickBack = null, this._onClickShip = null, this.backAreaChoiceShip && this.backAreaChoiceShip.dispose(), this.shipList && this.shipList.dispose(), this.mainView = null, this.backAreaChoiceShip = null, this.shipList = null, this.targets = null, this.pageIndex = null
        }, t.prototype.start = function (t, e) {
            var i = this;
            o.default.view.clickGuard = !0;
            var a;
            a = _.RemodelUtil.createShipListForPowerUp(), a = r.ShipUtil.filter(a, !0, t), this._updateTargets_(a), this._updateSort_(s.SceneMemory.shipSortKeyType), this._updatePage_(e), this.shipList.position.set(n.default.width, 141), this.backAreaChoiceShip.alpha = 0, this.mainView.addChild(this.backAreaChoiceShip), this.mainView.addChild(this.shipList);
            createjs.Tween.get(this.backAreaChoiceShip).to({ alpha: 1 }, 125), createjs.Tween.get(this.shipList).to({ x: 638 }, 125).call(function () {
                i.backAreaChoiceShip.width = 684, o.default.view.clickGuard = !1
            })
        }, t.prototype._updateTargets_ = function (t) {
            var e = _.RemodelUtil.calcPageCount(t.length);
            this.shipList.pagerView.init(e), this.targets = t
        }, t.prototype._updateSort_ = function (t) {
            r.ShipUtil.sort(this.targets, t), 1 == t && (this.targets = this.targets.reverse()), s.SceneMemory.shipSortKeyType = t, this.shipList.shipSortButton.update(t)
        }, t.prototype._updatePage_ = function (t) {
            var e = this.targets.slice(a.RemodelConst.ITEM_NUM * t, a.RemodelConst.ITEM_NUM * t + a.RemodelConst.ITEM_NUM);
            this.shipList.clear();
            for (var i = 0; i < e.length; i++) {
                var n = e[i], r = o.default.model.ship.getMst(n.mstID), s = o.default.model.deck.isInDeck(n.memID);
                this.shipList.update(i, n, r, s)
            }
            this.pageIndex = t
        }, t
    }();
    e.TaskShipChoice = c
}