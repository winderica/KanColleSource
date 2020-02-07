const function779 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(222),
        o = i(87),
        r = i(3),
        s = i(780),
        a = i(781),
        _ = i(337),
        u = function () {
            function t(t) {
                var e = this;
                this.LIST_MAX = 10, this._onChangePage = function (t) {
                    e._pageIndex != t && e._updatePage(t)
                }, this._onClickListItem = function (t, i) {
                    e.supplyEditor.containts(i) ? (r.SE.play("238"), e.supplyEditor.remove(i)) : (r.SE.play("241"), e.supplyEditor.push(i)), e._updatePage(e._pageIndex), e.onUpdateSupplyEdit()
                }, this._onClickSupplySelectAll = function () {
                    for (var t = 0, i = 0, o = e.otherShips.slice(e._pageIndex * e.otherSupplyListItems.length, e._pageIndex * e.otherSupplyListItems.length + e.otherSupplyListItems.length), s = 0; s < o.length; s++) {
                        var a = o[s],
                            _ = n.SupplyUtil.CheckRequireSupplyShip(a.memID);
                        if (_) {
                            t++;
                            var u = e.supplyEditor.containts(a.memID);
                            u && i++
                        }
                    }
                    if (i < t) {
                        for (var s = 0; s < o.length; s++) {
                            var a = o[s],
                                _ = n.SupplyUtil.CheckRequireSupplyShip(a.memID);
                            if (_) {
                                0 == e.supplyEditor.containts(a.memID) && e.supplyEditor.push(a.memID)
                            }
                        }
                        r.SE.play("241")
                    } else {
                        if (i == t)
                            for (var s = 0; s < o.length; s++) {
                                var a = o[s],
                                    _ = n.SupplyUtil.CheckRequireSupplyShip(a.memID);
                                if (_) {
                                    var u = e.supplyEditor.containts(a.memID);
                                    u && e.supplyEditor.remove(a.memID)
                                }
                            }
                        r.SE.play("238")
                    }
                    e._updatePage(e._pageIndex), e.onUpdateSupplyEdit()
                }, this.mainView = t, this.otherSupplyListItems = [];
                for (var i = 0; i < this.LIST_MAX; i++) {
                    var u = new s.OtherSupplyListItem(i);
                    u.position.set(155, 44 * i + 206), this.otherSupplyListItems.push(u)
                }
                this.pagerView = new o.PagerView, this.pagerView.position.set(285, 663), this.supplySelectAllButton = new a.SupplySelectAllButton, this.supplyEditor = new _.SupplyEditor
            }
            return t.prototype.getSupplyEdit = function () {
                return this.supplyEditor
            }, Object.defineProperty(t.prototype, "pageIndex", {
                get: function () {
                    return this._pageIndex
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.start = function (t, e) {
                this.supplyEditor.clear(), this.otherShips = t, this.supplySelectAllButton.position.set(162, 164), this.mainView.addChild(this.supplySelectAllButton);
                for (var i = 0; i < this.otherSupplyListItems.length; i++) {
                    var n = this.otherSupplyListItems[i];
                    n.onClick = this._onClickListItem, this.mainView.addChild(n)
                }
                var o = this.calcPageCount(this.otherShips.length, this.otherSupplyListItems.length);
                this.pagerView.init(o), this.mainView.addChild(this.pagerView), this.pagerView.onChangePage = this._onChangePage, this.supplySelectAllButton.onClick = this._onClickSupplySelectAll, this._updatePage(e), this.onUpdateSupplyEdit()
            }, t.prototype.reload = function () {
                this.supplyEditor.clear(), this._updatePage(this.pageIndex), this.onUpdateSupplyEdit()
            }, t.prototype._updatePage = function (t) {
                for (var e = 0, i = 0, o = this.otherShips.slice(t * this.otherSupplyListItems.length, t * this.otherSupplyListItems.length + this.otherSupplyListItems.length), r = 0; r < this.otherSupplyListItems.length; r++) {
                    var s = this.otherSupplyListItems[r];
                    if (s.empty(), r < o.length) {
                        var a = o[r],
                            _ = n.SupplyUtil.CheckRequireSupplyShip(a.memID);
                        if (s.checkDisable(), _) {
                            e++, s.checkOff();
                            this.supplyEditor.containts(a.memID) && (i++, s.checkOn())
                        }
                        s.update(r, a, _)
                    }
                }
                var u = 1;
                0 < e && (u = 2, i == e && (u = 3)), this.supplySelectAllButton.update(u), this.pagerView.changePage(t), this._pageIndex = t
            }, t.prototype.dispose = function () {
                var t = this;
                this.mainView.removeChildren(), this.otherSupplyListItems.forEach(function (e) {
                    e.onClick = t._onClickListItem = null, e.dispose(), e = null
                }), this.pagerView.onChangePage = this._onChangePage = null, this.supplySelectAllButton.onClick = this._onClickSupplySelectAll = null, this.onUpdateSupplyEdit = null, this.mainView = null, this.otherSupplyListItems = null, this.pagerView.dispose(), this.pagerView = null, this.supplySelectAllButton.dispose(), this.supplySelectAllButton = null, this.supplyEditor = null, this.otherShips = null, this._pageIndex = null
            }, t.prototype.calcPageCount = function (t, e) {
                var i = 0 == t ? 0 : t / e;
                return i += 0 == t ? 0 : 0 < t % e ? 1 : 0, i = Math.floor(i)
            }, t
        }();
    e.TaskEditSupplyOther = u
}