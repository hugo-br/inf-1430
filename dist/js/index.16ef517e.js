(function (e) {
  function t(t) {
    for (
      var r, o, s = t[0], u = t[1], c = t[2], d = 0, f = [];
      d < s.length;
      d++
    )
      (o = s[d]),
        Object.prototype.hasOwnProperty.call(a, o) && a[o] && f.push(a[o][0]),
        (a[o] = 0);
    for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
    l && l(t);
    while (f.length) f.shift()();
    return i.push.apply(i, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], r = !0, s = 1; s < n.length; s++) {
        var u = n[s];
        0 !== a[u] && (r = !1);
      }
      r && (i.splice(t--, 1), (e = o((o.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = { index: 0 },
    i = [];
  function o(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.m = e),
    (o.c = r),
    (o.d = function (e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (o.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          o.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = "/");
  var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    u = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var c = 0; c < s.length; c++) t(s[c]);
  var l = u;
  i.push([0, "chunk-vendors"]), n();
})({
  0: function (e, t, n) {
    e.exports = n("689d");
  },
  "01e7": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.store = void 0);
    var r = n("9ab4"),
      a = r.__importDefault(n("2b0e")),
      i = r.__importDefault(n("2f62")),
      o = r.__importDefault(n("0e44")),
      s = r.__importDefault(n("503b"));
    a.default.use(i.default),
      (t.store = new i.default.Store({
        modules: { UserStore: s.default },
        plugins: [o.default()],
      }));
  },
  "037d": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.userStore = void 0);
    var r = n("9ab4"),
      a = n("01e7"),
      i = n("6fc5"),
      o = r.__importDefault(n("503b")),
      s = i.getModule(o.default, a.store);
    t.userStore = s;
  },
  "038c": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", [e._v("TEST")]);
      },
      a = [];
  },
  "043b": function (e, t, n) {
    "use strict";
    n("a658");
  },
  "09d7": function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("1b40"),
      c = s.__importDefault(n("4b6b")),
      l = s.__importDefault(n("3d9b")),
      d = s.__importDefault(n("3428")),
      f = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          var e;
          return (
            r(this, n),
            (e = t.apply(this, arguments)),
            (e.links = [
              {
                title: e.$t("cms.cta.consult_admins"),
                klass: "disabled",
                action: "",
              },
              {
                title: e.$t("cms.cta.add_admin"),
                klass: "success",
                action: "add",
              },
              {
                title: e.$t("cms.cta.refresh_page"),
                klass: "info ml-auto",
                action: "refresh",
              },
            ]),
            e
          );
        }
        return (
          a(n, [
            {
              key: "handleClick",
              value: function (e) {
                switch (e) {
                  case "add":
                    this.$router.push({ path: "add-admin" });
                    break;
                  case "refresh":
                    this.$emit("refresh");
                    break;
                  default:
                }
              },
            },
          ]),
          n
        );
      })(u.Vue);
    (f = s.__decorate(
      [
        u.Component({
          components: {
            AdminList: c.default,
            Actions: l.default,
            PageTitles: d.default,
          },
        }),
      ],
      f
    )),
      (t.default = f);
  },
  "0afd": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("a329"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  "0bc6": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("4dd3"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  "0e3d": function (e, t, n) {},
  "0efb": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("dc22"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  "0f72": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("d9af"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  "101b": function (e, t, n) {
    "use strict";
    n("1226");
  },
  "10f7": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "w-100 margin-auto" },
          [
            n("vue-good-table", {
              attrs: {
                columns: e.columns,
                rows: e.rows,
                "fixed-header": !0,
                "max-height": "80vh",
                styleClass: "vgt-table bordered info-table",
                isLoading: e.isLoading,
                "pagination-options": {
                  enabled: !0,
                  perPage: 20,
                  perPageDropdownEnabled: !0,
                  perPageDropdown: [10, 20, 50, 100],
                  setCurrentPage: 1,
                  nextLabel: "" + e.$t("labels.next"),
                  prevLabel: "" + e.$t("labels.prev"),
                  rowsPerPageLabel: "" + e.$t("labels.rows_per_page"),
                  ofLabel: "" + e.$t("labels.of"),
                  pageLabel: "" + e.$t("labels.pages"),
                  allLabel: "" + e.$t("labels.all"),
                  jumpFirstOrLast: !1,
                },
              },
              on: {
                "update:isLoading": function (t) {
                  e.isLoading = t;
                },
                "update:is-loading": function (t) {
                  e.isLoading = t;
                },
                "on-page-change": e.onPageChange,
                "on-sort-change": e.onSortChange,
                "on-column-filter": e.onColumnFilter,
                "on-per-page-change": e.onPerPageChange,
              },
              scopedSlots: e._u([
                {
                  key: "table-row",
                  fn: function (t) {
                    return [
                      "categories" == t.column.field
                        ? n("span", [
                            e._v(
                              " " + e._s(Number(t.row.categories.length)) + " "
                            ),
                          ])
                        : "isPublished" == t.column.field
                        ? n("span", [
                            t.row.isPublished
                              ? n(
                                  "button",
                                  {
                                    staticClass:
                                      "btn-table-links bg-blue-800 hover:bg-blue-900 border-white",
                                    on: {
                                      click: function (n) {
                                        return e.publish(t.row.productId, !1);
                                      },
                                    },
                                  },
                                  [
                                    e._v(
                                      " " +
                                        e._s(e.$t("cms.buttons.published")) +
                                        " "
                                    ),
                                  ]
                                )
                              : e._e(),
                            t.row.isPublished
                              ? e._e()
                              : n(
                                  "button",
                                  {
                                    staticClass:
                                      "btn-table-links bg-yellow-800 hover:bg-yellow-900 border-white",
                                    on: {
                                      click: function (n) {
                                        return e.publish(t.row.productId, !0);
                                      },
                                    },
                                  },
                                  [
                                    e._v(
                                      " " +
                                        e._s(e.$t("cms.buttons.unpublished")) +
                                        " "
                                    ),
                                  ]
                                ),
                          ])
                        : "action" == t.column.field
                        ? n(
                            "span",
                            [
                              n(
                                "router-link",
                                {
                                  staticClass: "btn-table-links",
                                  attrs: {
                                    to: {
                                      path:
                                        "/cms/products/edit/" + t.row.productId,
                                    },
                                    "data-id": t.row.productId,
                                  },
                                },
                                [
                                  e._v(
                                    " " + e._s(e.$t("cms.buttons.manage")) + " "
                                  ),
                                ]
                              ),
                            ],
                            1
                          )
                        : n("span", [
                            e._v(
                              " " + e._s(t.formattedRow[t.column.field]) + " "
                            ),
                          ]),
                    ];
                  },
                },
              ]),
            }),
          ],
          1
        );
      },
      a = [];
  },
  "11a6": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n("9ab4"),
      a = r.__importDefault(n("bc3a")),
      i = r.__importDefault(n("53c0"));
    t.default = function () {
      var e = {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(i.default.getAccessToken()),
        "x-refresh": i.default.getRefreshToken(),
      };
      return a.default.create({
        headers: e,
        baseURL: "http://localhost:3001/api/admin",
      });
    };
  },
  "11cf": function (e, t, n) {
    "use strict";
    n("0e3d");
  },
  1226: function (e, t, n) {},
  "12f5": function (e, t, n) {
    "use strict";
    n("d3b7"),
      n("96cf"),
      Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.loginAdmin = t.registerUser = void 0);
    var r = n("9ab4"),
      a = r.__importDefault(n("d724")),
      i = r.__importDefault(n("11a6")),
      o = r.__importDefault(n("53c0"));
    function s(e) {
      return r.__awaiter(
        this,
        void 0,
        void 0,
        regeneratorRuntime.mark(function e() {
          var t;
          return regeneratorRuntime.wrap(function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  (t = {
                    email: "test@lol.com",
                    password: "eloajksjdhd",
                    passwordConfirmation: "eloajksjdhd",
                    name: "test1",
                  }),
                    a
                      .default()
                      .post("users", t)
                      .then(function (e) {
                        console.log(e);
                      })
                      .catch(function (e) {
                        e.code,
                          console.log(e.response.data),
                          console.log(e.response.status);
                      });
                case 2:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
    }
    function u(e) {
      return r.__awaiter(
        this,
        void 0,
        void 0,
        regeneratorRuntime.mark(function t() {
          return regeneratorRuntime.wrap(function (t) {
            while (1)
              switch ((t.prev = t.next)) {
                case 0:
                  return t.abrupt(
                    "return",
                    i
                      .default()
                      .post("/sessions", e)
                      .then(function (e) {
                        return (
                          e.data.confirm &&
                            (o.default.clearToken(),
                            o.default.setToken({
                              access_token: String(e.data.accessToken),
                              refresh_token: String(e.data.refreshToken),
                            })),
                          Promise.resolve(e.data)
                        );
                      })
                      .catch(function (e) {
                        return Promise.reject(e);
                      })
                  );
                case 1:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      );
    }
    (t.registerUser = s), (t.loginAdmin = u);
  },
  "143d": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "p-2 pr-4" },
          [
            n("PageTitles", { attrs: { title: e.$t("general.products") } }),
            n("Actions", {
              attrs: { buttons: e.links },
              on: {
                action: function (t) {
                  return e.handleClick(t);
                },
              },
            }),
            n("AddProductsForm"),
          ],
          1
        );
      },
      a = [];
  },
  1498: function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    n("96cf"), Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("1b40"),
      c = n("d86a"),
      l = s.__importDefault(n("c2cb")),
      d = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          var e;
          return (
            r(this, n),
            (e = t.apply(this, arguments)),
            (e.isLoaded = !1),
            (e.product = null),
            e
          );
        }
        return (
          a(n, [
            {
              key: "addProd",
              value: function () {
                return s.__awaiter(
                  this,
                  void 0,
                  void 0,
                  regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (t = {
                              name: "",
                              description: "Une description assez longue",
                              quantity: 12,
                              price: 32,
                              isPublished: !0,
                              categories: [
                                "6182c28508d9310640ee7591",
                                "6182c630d20d59537c402169",
                              ],
                            }),
                              c
                                .addProduct(t)
                                .then(function (e) {
                                  console.log("here then", e);
                                })
                                .catch(function (e) {
                                  return console.error("(1) Outside error:", e);
                                });
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
              },
            },
            {
              key: "deleteProd",
              value: function () {
                return s.__awaiter(
                  this,
                  void 0,
                  void 0,
                  regeneratorRuntime.mark(function e() {
                    var t = this;
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            c.deleteProduct("762b47")
                              .then(function (e) {
                                t.$nextTick(function () {
                                  console.log(e);
                                });
                              })
                              .catch(function (e) {
                                return console.error("(1) Outside error:", e);
                              });
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
              },
            },
            {
              key: "fetchProd",
              value: function () {
                return s.__awaiter(
                  this,
                  void 0,
                  void 0,
                  regeneratorRuntime.mark(function e() {
                    var t = this;
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            c.getProduct("d1cda7")
                              .then(function (e) {
                                console.log(e),
                                  t.$nextTick(function () {
                                    var t = new l.default(e);
                                    console.log(t.capitalize()),
                                      (this.product = t);
                                  });
                              })
                              .catch(function (e) {
                                return console.error("(1) Outside error:", e);
                              });
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
              },
            },
            {
              key: "fetchAllProd",
              value: function () {
                return s.__awaiter(
                  this,
                  void 0,
                  void 0,
                  regeneratorRuntime.mark(function e() {
                    var t = this;
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            c.getAllProducts()
                              .then(function (e) {
                                console.log(e),
                                  t.$nextTick(function () {
                                    (this.product = e), (this.isLoaded = !0);
                                  });
                              })
                              .catch(function (e) {
                                return console.error("(1) Outside error:", e);
                              });
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
              },
            },
            {
              key: "findProd",
              value: function () {
                return s.__awaiter(
                  this,
                  void 0,
                  void 0,
                  regeneratorRuntime.mark(function e() {
                    var t = this;
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            c.findProducts("price>30&select=name,_id,price")
                              .then(function (e) {
                                console.log(e), t.$nextTick(function () {});
                              })
                              .catch(function (e) {
                                return console.error("(1) Outside error:", e);
                              });
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
              },
            },
          ]),
          n
        );
      })(u.Vue);
    (d = s.__decorate([u.Component], d)), (t.default = d);
  },
  1855: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("f47b"),
      a = n("a485");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "2a88cd3b",
        null
      );
    t["default"] = s.exports;
  },
  "18ed": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("6842"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  "1abb": function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("1b40"),
      c = s.__importDefault(n("3d9b")),
      l = s.__importDefault(n("3428")),
      d = s.__importDefault(n("8123")),
      f = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          var e;
          return (
            r(this, n),
            (e = t.apply(this, arguments)),
            (e.links = [
              {
                title: e.$t("cms.cta.add_category"),
                klass: "disabled",
                action: "",
              },
              {
                title: e.$t("cms.cta.all_category"),
                klass: "success",
                action: "link",
              },
            ]),
            e
          );
        }
        return (
          a(n, [
            {
              key: "handleClick",
              value: function (e) {
                switch (e) {
                  case "link":
                    this.$router.push({ name: "list-categories" });
                    break;
                  default:
                    return;
                }
              },
            },
          ]),
          n
        );
      })(u.Vue);
    (f = s.__decorate(
      [
        u.Component({
          components: {
            Actions: c.default,
            PageTitles: l.default,
            AddCategoryForm: d.default,
          },
        }),
      ],
      f
    )),
      (t.default = f);
  },
  "1fcb": function (e, t, n) {
    "use strict";
    var r,
      a = n("9523").default;
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.defaultLocale = t.messages = void 0);
    var i = n("9ab4"),
      o = n("3657"),
      s = i.__importDefault(n("359d")),
      u = i.__importDefault(n("dfdb")),
      c = i.__importDefault(n("53c0"));
    t.messages =
      ((r = {}),
      a(r, o.Locales.EN, s.default),
      a(r, o.Locales.FR, u.default),
      r);
    var l = function () {
      var e = c.default.getLanguage();
      return null !== e && void 0 !== e ? e : "fr";
    };
    t.defaultLocale = l;
  },
  2025: function (e, t, n) {},
  2027: function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("1b40"),
      c = n("3578"),
      l = n("f617"),
      d = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          var e;
          return (
            r(this, n),
            (e = t.apply(this, arguments)),
            (e.isLoading = !0),
            (e.columns = [
              {
                label: e.$t("labels.first_name"),
                field: "firstName",
                sortable: !0,
                thClass: "table-header-name",
              },
              {
                label: e.$t("labels.last_name"),
                field: "lastName",
                sortable: !0,
                thClass: "table-header-name",
              },
              {
                label: e.$t("labels.email"),
                field: "email",
                sortable: !0,
                thClass: "table-header-name",
              },
              {
                label: "Action",
                field: "action",
                html: !0,
                sortable: !1,
                thClass: "text-center",
                tdClass: "text-center",
              },
            ]),
            (e.rows = []),
            (e.totalRecords = 0),
            (e.serverParams = {
              columnFilters: {},
              sort: [{ field: "", type: "" }],
              page: 1,
              perPage: 10,
            }),
            e
          );
        }
        return (
          a(n, [
            {
              key: "mounted",
              value: function () {
                this.loadItems(), this.$parent.$on("refresh", this.refresh);
              },
            },
            {
              key: "refresh",
              value: function () {
                this.loadItems();
              },
            },
            {
              key: "onPageChange",
              value: function (e) {
                this.updateParams({ page: e.currentPage });
              },
            },
            {
              key: "updateParams",
              value: function (e) {
                this.serverParams = Object.assign({}, this.serverParams, e);
              },
            },
            {
              key: "formatPrice",
              value: function (e) {
                return e + " $";
              },
            },
            {
              key: "isPublished",
              value: function (e) {
                return !0 === e ? "green" : "red";
              },
            },
            {
              key: "onColumnFilter",
              value: function (e) {
                this.updateParams(e), this.loadItems();
              },
            },
            {
              key: "loadItems",
              value: function () {
                var e = this;
                c.getAllAdmin()
                  .then(function (t) {
                    e.$nextTick(function () {
                      (this.rows = t),
                        (this.totalRecords = t.length),
                        (this.isLoading = !1);
                    });
                  })
                  .catch(function (e) {
                    return console.error("Errors : ", e);
                  });
              },
            },
          ]),
          n
        );
      })(u.Vue);
    (d = s.__decorate(
      [u.Component({ components: { VueGoodTable: l.VueGoodTable } })],
      d
    )),
      (t.default = d);
  },
  "20f9": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { attrs: { id: "cms" } },
          [
            n("NavigationMenu", { staticClass: "cms-navigation" }),
            n(
              "section",
              { staticClass: "cms-container" },
              [
                n("Header", { staticClass: "cms-header" }),
                n("router-view", {
                  staticClass: "cms-content",
                  on: {
                    notifications: function (t) {
                      return e.showNotifications();
                    },
                  },
                }),
              ],
              1
            ),
          ],
          1
        );
      },
      a = [];
  },
  "20fd": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("e65f"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  "238c": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("2fd9"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  2556: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("37d3"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  "265e": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("nav", [
          n("h2", [e._v("Navigation Boutique")]),
          n(
            "div",
            { attrs: { id: "nav" } },
            [
              n("router-link", { attrs: { to: "/" } }, [e._v("Home")]),
              e._v(" | "),
              n("router-link", { attrs: { to: "/about" } }, [
                e._v(e._s(e.$t("titles.main"))),
              ]),
            ],
            1
          ),
        ]);
      },
      a = [];
  },
  "27f0": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("1abb"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  "2a99": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "w-100 margin-auto" },
          [
            n("vue-good-table", {
              attrs: {
                columns: e.columns,
                rows: e.rows,
                "fixed-header": !0,
                "max-height": "80vh",
                styleClass: "vgt-table bordered info-table",
                isLoading: e.isLoading,
                "pagination-options": {
                  enabled: !0,
                  perPage: 20,
                  perPageDropdownEnabled: !0,
                  perPageDropdown: [10, 20, 50, 100],
                  setCurrentPage: 1,
                  nextLabel: "" + e.$t("labels.next"),
                  prevLabel: "" + e.$t("labels.prev"),
                  rowsPerPageLabel: "" + e.$t("labels.rows_per_page"),
                  ofLabel: "" + e.$t("labels.of"),
                  pageLabel: "" + e.$t("labels.pages"),
                  allLabel: "" + e.$t("labels.all"),
                  jumpFirstOrLast: !1,
                },
              },
              on: {
                "update:isLoading": function (t) {
                  e.isLoading = t;
                },
                "update:is-loading": function (t) {
                  e.isLoading = t;
                },
              },
              scopedSlots: e._u([
                {
                  key: "table-row",
                  fn: function (t) {
                    return [
                      "categories" == t.column.field
                        ? n("span", [
                            e._v(" " + e._s(t.row.products.length) + " "),
                          ])
                        : "action" == t.column.field
                        ? n(
                            "span",
                            [
                              n(
                                "router-link",
                                {
                                  staticClass: "btn-table-links",
                                  attrs: {
                                    to: {
                                      path:
                                        "/cms/categories/edit/" +
                                        t.row.categoryId,
                                    },
                                    "data-id": t.row.productId,
                                  },
                                },
                                [e._v(" " + e._s(e.$t("buttons.manage")) + " ")]
                              ),
                            ],
                            1
                          )
                        : n("span", [
                            e._v(
                              " " + e._s(t.formattedRow[t.column.field]) + " "
                            ),
                          ]),
                    ];
                  },
                },
              ]),
            }),
          ],
          1
        );
      },
      a = [];
  },
  "2b0eb": function (e, t, n) {
    var r = {
      "./default.png": "c63b",
      "./diamond.png": "7ee4",
      "./emeraude.png": "63a6",
      "./ruby.png": "915e",
    };
    function a(e) {
      var t = i(e);
      return n(t);
    }
    function i(e) {
      if (!n.o(r, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return r[e];
    }
    (a.keys = function () {
      return Object.keys(r);
    }),
      (a.resolve = i),
      (e.exports = a),
      (a.id = "2b0eb");
  },
  "2b2c": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("b293"),
      a = n("3eba");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    n("b852");
    var o = n("2877"),
      s = Object(o["a"])(a["default"], r["a"], r["b"], !1, null, null, null);
    t["default"] = s.exports;
  },
  "2bc0": function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("1b40"),
      c = s.__importDefault(n("ee42")),
      l = s.__importDefault(n("df64")),
      d = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          return r(this, n), t.apply(this, arguments);
        }
        return (
          a(n, [
            {
              key: "showNotifications",
              value: function () {
                console.log("dahsboard");
              },
            },
          ]),
          n
        );
      })(u.Vue);
    (d = s.__decorate(
      [
        u.Component({
          components: { NavigationMenu: c.default, Header: l.default },
        }),
      ],
      d
    )),
      (t.default = d);
  },
  "2c2f": function (e, t, n) {},
  "2ce3": function (e, t, n) {
    "use strict";
    n("2025");
  },
  "2fd9": function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("1b40"),
      c = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          return r(this, n), t.apply(this, arguments);
        }
        return (
          a(n, [
            {
              key: "page",
              get: function () {
                return this.title || "";
              },
            },
          ]),
          n
        );
      })(u.Vue);
    s.__decorate(
      [u.Prop(), s.__metadata("design:type", String)],
      c.prototype,
      "title",
      void 0
    ),
      (c = s.__decorate([u.Component], c)),
      (t.default = c);
  },
  "30bb": function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("1b40"),
      c = s.__importDefault(n("bef0")),
      l = s.__importDefault(n("3d9b")),
      d = s.__importDefault(n("3428")),
      f = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          var e;
          return (
            r(this, n),
            (e = t.apply(this, arguments)),
            (e.links = [
              {
                title: "Consulter le tableau",
                klass: "disabled",
                action: "test",
              },
              {
                title: "Ajouter un produit",
                klass: "success",
                action: "addProduct",
              },
              {
                title: e.$t("cms.cta.refresh_page"),
                klass: "info ml-auto",
                action: "refresh",
              },
            ]),
            e
          );
        }
        return (
          a(n, [
            {
              key: "handleClick",
              value: function (e) {
                switch (e) {
                  case "addProduct":
                    this.$router.push({ path: "add-products" });
                    break;
                  case "refresh":
                    this.$emit("refresh");
                    break;
                  default:
                }
              },
            },
          ]),
          n
        );
      })(u.Vue);
    (f = s.__decorate(
      [
        u.Component({
          components: {
            ProductsLists: c.default,
            Actions: l.default,
            PageTitles: d.default,
          },
        }),
      ],
      f
    )),
      (t.default = f);
  },
  3171: function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("1b40"),
      c = s.__importDefault(n("fa82")),
      l = s.__importDefault(n("3d9b")),
      d = s.__importDefault(n("3428")),
      f = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          var e;
          return (
            r(this, n),
            (e = t.apply(this, arguments)),
            (e.links = [
              {
                title: e.$t("cms.cta.consult_table"),
                klass: "disabled",
                action: "",
              },
              {
                title: e.$t("cms.cta.add_category"),
                klass: "success",
                action: "add",
              },
              {
                title: e.$t("cms.cta.refresh_page"),
                klass: "info ml-auto",
                action: "refresh",
              },
            ]),
            e
          );
        }
        return (
          a(n, [
            {
              key: "handleClick",
              value: function (e) {
                switch (e) {
                  case "add":
                    this.$router.push({ path: "add-categories" });
                    break;
                  case "refresh":
                    this.$emit("refresh");
                    break;
                  default:
                }
              },
            },
          ]),
          n
        );
      })(u.Vue);
    (f = s.__decorate(
      [
        u.Component({
          components: {
            CategoryList: c.default,
            Actions: l.default,
            PageTitles: d.default,
          },
        }),
      ],
      f
    )),
      (t.default = f);
  },
  3188: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = function () {
        var e = this,
          t = e.$createElement;
        e._self._c;
        return e._m(0);
      },
      a = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "md:container md:mx-auto" }, [
            n("div", { staticClass: "bg-red-100" }, [
              n("h1", [e._v("This is a page")]),
              n("button", { staticClass: "btn-blue" }, [e._v("Test")]),
            ]),
          ]);
        },
      ],
      i = n("2877"),
      o = {},
      s = Object(i["a"])(o, r, a, !1, null, null, null);
    t["default"] = s.exports;
  },
  3428: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("3e55"),
      a = n("238c");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "5de75956",
        null
      );
    t["default"] = s.exports;
  },
  3578: function (e, t, n) {
    "use strict";
    n("96cf"),
      n("d3b7"),
      Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.deleteAdmin = t.getOneAdmin = t.getAllAdmin = t.registerAdmin = void 0);
    var r = n("9ab4"),
      a = r.__importDefault(n("11a6"));
    function i(e) {
      return r.__awaiter(
        this,
        void 0,
        void 0,
        regeneratorRuntime.mark(function t() {
          return regeneratorRuntime.wrap(function (t) {
            while (1)
              switch ((t.prev = t.next)) {
                case 0:
                  return t.abrupt(
                    "return",
                    a
                      .default()
                      .post("/register", e)
                      .then(function (e) {
                        return e.data;
                      })
                      .catch(function (e) {
                        return Promise.reject(e);
                      })
                  );
                case 1:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      );
    }
    function o() {
      return r.__awaiter(
        this,
        void 0,
        void 0,
        regeneratorRuntime.mark(function e() {
          return regeneratorRuntime.wrap(function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    a
                      .default()
                      .get("/admins")
                      .then(function (e) {
                        return e.data;
                      })
                      .catch(function (e) {
                        return Promise.reject(e);
                      })
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
    }
    function s(e) {
      return r.__awaiter(
        this,
        void 0,
        void 0,
        regeneratorRuntime.mark(function t() {
          return regeneratorRuntime.wrap(function (t) {
            while (1)
              switch ((t.prev = t.next)) {
                case 0:
                  return t.abrupt(
                    "return",
                    a
                      .default()
                      .get("/".concat(e))
                      .then(function (e) {
                        return e.data;
                      })
                      .catch(function (e) {
                        return Promise.reject(e);
                      })
                  );
                case 1:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      );
    }
    function u(e) {
      return r.__awaiter(
        this,
        void 0,
        void 0,
        regeneratorRuntime.mark(function t() {
          return regeneratorRuntime.wrap(function (t) {
            while (1)
              switch ((t.prev = t.next)) {
                case 0:
                  return t.abrupt(
                    "return",
                    a
                      .default()
                      .delete("/".concat(e))
                      .then(function (e) {
                        return console.log(e), e.data;
                      })
                      .catch(function (e) {
                        return (
                          console.log(e),
                          console.log(e.response.data),
                          console.log(e.response.status),
                          console.log(e.response.headers),
                          Promise.reject(e)
                        );
                      })
                  );
                case 1:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      );
    }
    (t.registerAdmin = i),
      (t.getAllAdmin = o),
      (t.getOneAdmin = s),
      (t.deleteAdmin = u);
  },
  "359d": function (e) {
    e.exports = JSON.parse(
      '{"buttons":{"edit":"Edit","manage":"Manage"},"cms":{"buttons":{"edit":"Edit","manage":"Manage","published":"Published","unpublished":"Unpublished"},"cta":{"add_admin":"Add an administrator","add_category":"Add a category","all_category":"See all the categories","delete_category":"Delete this category","consult_admins":"See all administrators","consult_table":"Consult the table","edit_admin":"Update this administrator","edit_category":"Edit this category","refresh_page":"Refresh"},"labels":{"category_info":"Fill in the general information about this category","delete_product":"Delete this product","confirm_delete_product":"Are you sure you want to remove the product","products_info":"Fill in the general information about this product","review_category":"Review the informations and add this category","review_products":"Review the informations and add this product"},"menu":{"admin":"Admins","analytics":"Analytics","categories":"Categories","dashboard":"Dashboard","expeditors":"Expeditors","orders":"Orders","products":"Products","sales":"Sales","schedules":"Schedules","settings":"Settings","users":"Usagers"}},"company":{"name":"Rubydor"},"errors":{"account_created":"This user has already an account","email_not_valid":"Must be a valid email","email_required":"Email is required","errors_found":"Some errors was found","firstName_required":"First name is required","name_required":"Name is required","invalid_username":"Invalid username or password","lastName_required":"Last name is required","password_must_match":"Passwords must match","password_latin":"Password can only contain Latin letters.","password_required":"Password is required","password_too_short":"Password is too short - should be 6 chars minimum"},"general":{"add":"Administrator","admin":"Administrator","admins":"Administrators","database":"Database","description":"Description","category":"Category","categories":"My Categories","generals":"Generals","products":"My Products","revision":"Revision"},"labels":{"all":"All","description":"Description","email":"Email address","first_name":"First Name","last_name":"Last Name","name":"Name","next":"Next","number_of_products":"Number of products","my_possible_actions":"My possibles actions:","isPublished":"Published","of":"of","pages":"pages","password":"Enter a password","password_confirmation":"Confirm the password","prev":"Previous","price":"Price","quantity":"Quantity","update_password":"Change the password","rows_per_page":"Rows per page"},"login":{"forget_password":"Forgot your password?","email":"Email address","password":"Password","or":"or","register":"register","remember_me":"Remember me","signin":"Sign in","sign_account":"Sign in to your account"},"titles":{"main":"Rubydor"}}'
    );
  },
  "35a2": function (e, t, n) {
    "use strict";
    n("ed7c");
  },
  "35a5": function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    n("b0c0"), Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("1b40"),
      c = s.__importDefault(n("3d9b")),
      l = s.__importDefault(n("3428")),
      d = s.__importDefault(n("c809")),
      f = s.__importDefault(n("df29")),
      p = s.__importDefault(n("dd71")),
      m = s.__importDefault(n("2b2c")),
      v = n("d86a"),
      h = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          var e;
          return (
            r(this, n),
            (e = t.apply(this, arguments)),
            (e.productId = e.$route.params.productId),
            (e.title = ""),
            (e.titlePage = ""),
            (e.isModalVisible = !1),
            (e.isPublish = !1),
            (e.visibleSection = "edit"),
            (e.links = [
              { title: "Modifier ce produit", klass: "info", action: "edit" },
              {
                title: "Voir tous les produits",
                klass: "success",
                action: "list",
              },
              { title: "Publier", klass: "success", action: "list" },
              { title: "Voir vignette", klass: "white", action: "thumbnail" },
              { title: "Voir fiche produit", klass: "white", action: "page" },
              {
                title: e.$t("cms.cta.delete_category"),
                klass: "danger ml-auto",
                action: "delete",
              },
            ]),
            e
          );
        }
        return (
          a(n, [
            {
              key: "handleClick",
              value: function (e) {
                switch (e) {
                  case "edit":
                    this.visibleSection = "edit";
                    break;
                  case "list":
                    this.$router.push({ name: "list-products" });
                    break;
                  case "thumbnail":
                    this.visibleSection = "thumbnail";
                    break;
                  case "page":
                    this.visibleSection = "page";
                    break;
                  case "delete":
                    this.isModalVisible = !this.isModalVisible;
                    break;
                  default:
                }
              },
            },
            { key: "mounted", value: function () {} },
            {
              key: "updatePage",
              value: function (e) {
                (this.titlePage = "Produit : ".concat(e.name)),
                  (this.title = e.name);
              },
            },
            {
              key: "showModal",
              value: function () {
                this.isModalVisible = !0;
              },
            },
            {
              key: "closeModal",
              value: function () {
                this.isModalVisible = !1;
              },
            },
            {
              key: "confirmDelete",
              value: function () {
                var e = this;
                v.deleteProduct(this.productId)
                  .then(function (t) {
                    console.log("here then", t),
                      (e.isModalVisible = !1),
                      e.handleClick("list");
                  })
                  .catch(function (e) {
                    return console.error("Error:", e);
                  });
              },
            },
            {
              key: "publish",
              value: function (e, t) {
                v.publishedProduct(e, t)
                  .then(function (e) {})
                  .catch(function (e) {
                    return console.error("Error:", e);
                  });
              },
            },
          ]),
          n
        );
      })(u.Vue);
    (h = s.__decorate(
      [
        u.Component({
          components: {
            Actions: c.default,
            PageTitles: l.default,
            EditProductsForm: d.default,
            CMSModal: m.default,
            ThumbnailPage: f.default,
            PreviewPage: p.default,
          },
        }),
      ],
      h
    )),
      (t.default = h);
  },
  "362b": function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    n("96cf"), Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("1b40"),
      c = n("60e1"),
      l = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          var e;
          return (
            r(this, n),
            (e = t.apply(this, arguments)),
            (e.category = { name: "", description: "" }),
            (e.isLoaded = !1),
            (e.notFound = !1),
            e
          );
        }
        return (
          a(n, [
            {
              key: "fetchProd",
              value: function () {
                return s.__awaiter(
                  this,
                  void 0,
                  void 0,
                  regeneratorRuntime.mark(function e() {
                    var t = this;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              c.getCategory(this.categoryId)
                                .then(function (e) {
                                  console.log(e),
                                    t.$nextTick(function () {
                                      (this.category = e), (this.isLoaded = !0);
                                    });
                                })
                                .catch(function (e) {
                                  console.error("Error:", e),
                                    (t.isLoaded = !0),
                                    (t.notFound = !0);
                                });
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "mounted",
              value: function () {
                this.fetchProd();
              },
            },
            {
              key: "edit",
              value: function () {
                return s.__awaiter(
                  this,
                  void 0,
                  void 0,
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              c.editCategory(this.category)
                                .then(function (e) {
                                  console.log("here then", e), alert("done");
                                })
                                .catch(function (e) {
                                  return console.error("Error:", e);
                                });
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
              },
            },
          ]),
          n
        );
      })(u.Vue);
    s.__decorate(
      [u.Prop(), s.__metadata("design:type", String)],
      l.prototype,
      "categoryId",
      void 0
    ),
      (l = s.__decorate([u.Component({ components: {} })], l)),
      (t.default = l);
  },
  3654: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("c88b"),
      a = n("c9c9");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "33637349",
        null
      );
    t["default"] = s.exports;
  },
  3657: function (e, t, n) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.LOCALES = t.Locales = void 0),
      (function (e) {
        (e["EN"] = "en"), (e["FR"] = "fr");
      })((r = t.Locales || (t.Locales = {}))),
      (t.LOCALES = [
        { value: r.EN, caption: "English" },
        { value: r.FR, caption: "Français" },
      ]);
  },
  3736: function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    n("96cf"), Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("1b40"),
      c = n("12f5"),
      l = n("037d"),
      d = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          var e;
          return (
            r(this, n),
            (e = t.apply(this, arguments)),
            (e.email = "admin@rubydor.ca"),
            (e.password = "hsjhjkah"),
            (e.isLoading = !1),
            (e.error = ""),
            e
          );
        }
        return (
          a(n, [
            {
              key: "adminLogin",
              value: function () {
                return s.__awaiter(
                  this,
                  void 0,
                  void 0,
                  regeneratorRuntime.mark(function e() {
                    var t,
                      n = this;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (this.isLoading = !0),
                                this.resetForm(),
                                (t = {
                                  email: this.email,
                                  password: this.password,
                                }),
                                c
                                  .loginAdmin(t)
                                  .then(function (e) {
                                    if (
                                      (console.log(e),
                                      (n.isLoading = !1),
                                      e.confirm)
                                    ) {
                                      l.userStore.setUser(e.user);
                                      var t = "/cms/products";
                                      return (
                                        n.$route.path !== t &&
                                          n.$router.push(t),
                                        void (window.location.href = t)
                                      );
                                    }
                                    var r = "errors.".concat(e.errorMsg);
                                    n.error = String(n.$t(r));
                                  })
                                  .catch(function (e) {
                                    (n.isLoading = !1), (n.error = "");
                                  });
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "resetForm",
              value: function () {
                this.error = "";
              },
            },
          ]),
          n
        );
      })(u.Vue);
    (d = s.__decorate([u.Component], d)), (t.default = d);
  },
  "37d3": function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    n("b64b"), Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("1b40"),
      c = s.__importDefault(n("53c0")),
      l = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          var e;
          return (
            r(this, n),
            (e = t.apply(this, arguments)),
            (e.selected = 0),
            (e.isEnlarge = !1),
            (e.nav = [
              {
                icon:
                  '<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>',
                selectedIcon:
                  '<svg fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>',
                text: e.$t("cms.menu.dashboard"),
                actif: !0,
                href: "/cms/",
              },
              {
                icon:
                  '<svg fill="currentColor" stroke-width="1" viewBox="0 0 92 92" stroke="currentColor"><path d="M91.8 27.3l-10.7 33.7c-.8 2.4-2.9 4-5.4 4h-41.3c-2.4 0-4.7-1.5-5.5-3.7l-15.8-42.3h-9.1c-2.2 0-4-1.8-4-4s1.8-4 4-4h11.9c1.7 0 3.2 1.1 3.8 2.7l16.3 43.3h38l8.5-27h-47.1c-2.2 0-4-1.8-4-4s1.8-4 4-4h52.6c1.3 0 2.5.7 3.2 1.7.8 1 1 2.4.6 3.6zm-55.4 43c-1.7 0-3.4.7-4.6 1.9-1.2 1.2-1.9 2.9-1.9 4.6 0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9s3.4-.7 4.6-1.9c1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6-1.2-1.2-2.9-1.9-4.6-1.9zm35.9 0c-1.7 0-3.4.7-4.6 1.9s-1.9 2.9-1.9 4.6c0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9 1.7 0 3.4-.7 4.6-1.9 1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6s-2.9-1.9-4.6-1.9z" /></svg>',
                selectedIcon:
                  '<svg fill="currentColor" viewBox="0 0 92 92"><path fill-rule="evenodd" d="M91.8 27.3l-10.7 33.7c-.8 2.4-2.9 4-5.4 4h-41.3c-2.4 0-4.7-1.5-5.5-3.7l-15.8-42.3h-9.1c-2.2 0-4-1.8-4-4s1.8-4 4-4h11.9c1.7 0 3.2 1.1 3.8 2.7l16.3 43.3h38l8.5-27h-47.1c-2.2 0-4-1.8-4-4s1.8-4 4-4h52.6c1.3 0 2.5.7 3.2 1.7.8 1 1 2.4.6 3.6zm-55.4 43c-1.7 0-3.4.7-4.6 1.9-1.2 1.2-1.9 2.9-1.9 4.6 0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9s3.4-.7 4.6-1.9c1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6-1.2-1.2-2.9-1.9-4.6-1.9zm35.9 0c-1.7 0-3.4.7-4.6 1.9s-1.9 2.9-1.9 4.6c0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9 1.7 0 3.4-.7 4.6-1.9 1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6s-2.9-1.9-4.6-1.9z" /></svg>',
                text: e.$t("cms.menu.products"),
                actif: !0,
                href: "/cms/products",
              },
              {
                icon:
                  '<svg fill="currentColor" stroke-width="1" stroke="currentColor" viewBox="0 0 100 100"><g><path d="M61.8,29.4l8.9,8.9l0,0c2,1.9,2,5.1,0,7l0,0L47.5,68.4V47.3V36.6l7.2-7.3C56.6,27.4,59.9,27.4,61.8,29.4z"/></g><path d="M37.5,20H25c-2.8,0-5,2.2-5,5v43.8C20,75,25,80,31.2,80s11.2-5,11.2-11.2V25C42.5,22.2,40.2,20,37.5,20z M31.2,73.8c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S34,73.8,31.2,73.8z"/><g><path d="M75,57.5h-8.8l-6,6H74L73.9,74H49.8l-6,6H75c2.8,0,5-2.2,5-5V62.5C80,59.8,77.8,57.5,75,57.5L75,57.5z"/></g></svg>',
                selectedIcon:
                  '<svg  fill="currentColor" stroke-width="1" stroke="currentColor" viewBox="0 0 100 100"><g><path d="M61.8,29.4l8.9,8.9l0,0c2,1.9,2,5.1,0,7l0,0L47.5,68.4V47.3V36.6l7.2-7.3C56.6,27.4,59.9,27.4,61.8,29.4z"/></g><path d="M37.5,20H25c-2.8,0-5,2.2-5,5v43.8C20,75,25,80,31.2,80s11.2-5,11.2-11.2V25C42.5,22.2,40.2,20,37.5,20z M31.2,73.8c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S34,73.8,31.2,73.8z"/><g><path d="M75,57.5h-8.8l-6,6H74L73.9,74H49.8l-6,6H75c2.8,0,5-2.2,5-5V62.5C80,59.8,77.8,57.5,75,57.5L75,57.5z"/></g></svg>',
                text: e.$t("cms.menu.categories"),
                actif: !0,
                href: "/cms/categories",
              },
              {
                icon:
                  '<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 92 92"><path d="M46 57.1c14.8 0 26.9-12.1 26.9-27 0-15-12.1-27.1-26.9-27.1s-26.9 12.1-26.9 27c0 15 12.1 27.1 26.9 27.1zm0-46.1c10.4 0 18.9 8.5 18.9 19s-8.5 19-18.9 19-18.9-8.5-18.9-19 8.5-19 18.9-19zm12.5 48.7c-1.3-.4-2.8-.1-3.8.8l-8.7 7.4-8.7-7.4c-1.1-.9-2.5-1.2-3.8-.8-5.6 1.8-33.5 11.4-33.5 25.3 0 2.2 1.8 4 4 4h84c2.2 0 4-1.8 4-4 0-13.9-27.9-23.5-33.5-25.3zm-48.4 21.3c4.4-4.7 15-9.9 23.8-12.9l9.5 8.1c1.5 1.3 3.7 1.3 5.2 0l9.5-8.1c8.8 3.1 19.4 8.3 23.8 12.9h-71.8z" /></svg>',
                selectedIcon:
                  '<svg fill="currentColor" viewBox="0 0 92 92"><path d="M46 57.1c14.8 0 26.9-12.1 26.9-27 0-15-12.1-27.1-26.9-27.1s-26.9 12.1-26.9 27c0 15 12.1 27.1 26.9 27.1zm0-46.1c10.4 0 18.9 8.5 18.9 19s-8.5 19-18.9 19-18.9-8.5-18.9-19 8.5-19 18.9-19zm12.5 48.7c-1.3-.4-2.8-.1-3.8.8l-8.7 7.4-8.7-7.4c-1.1-.9-2.5-1.2-3.8-.8-5.6 1.8-33.5 11.4-33.5 25.3 0 2.2 1.8 4 4 4h84c2.2 0 4-1.8 4-4 0-13.9-27.9-23.5-33.5-25.3zm-48.4 21.3c4.4-4.7 15-9.9 23.8-12.9l9.5 8.1c1.5 1.3 3.7 1.3 5.2 0l9.5-8.1c8.8 3.1 19.4 8.3 23.8 12.9h-71.8z" /></svg>',
                text: e.$t("cms.menu.admin"),
                actif: !0,
                href: "/cms/admin",
              },
              {
                icon:
                  '<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>',
                selectedIcon:
                  '<svg fill="currentColor" viewBox="0 0 20 20"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>',
                text: e.$t("cms.menu.analytics"),
                actif: !1,
                href: "/cms/analytics",
              },
              {
                icon:
                  '<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
                selectedIcon:
                  '<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>',
                text: e.$t("cms.menu.schedules"),
                actif: !1,
                href: "/cms/schedules",
              },
            ]),
            e
          );
        }
        return (
          a(n, [
            {
              key: "languages",
              get: function () {
                return Object.keys(this.$i18n.messages);
              },
            },
            {
              key: "onChangeLanguage",
              value: function (e) {
                (this.$i18n.locale === e.target.value &&
                  "none" === e.target.value) ||
                  ((this.$i18n.locale = e.target.value),
                  c.default.setLanguage(e.target.value),
                  window.location.reload());
              },
            },
          ]),
          n
        );
      })(u.Vue);
    (l = s.__decorate([u.Component], l)), (t.default = l);
  },
  "37f0": function (e, t, n) {},
  "38dd": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "home" },
          [
            n("router-link", { attrs: { to: "/cms-login" } }, [e._v("CMS")]),
            n("User"),
            n("br"),
            n("Admin"),
            n("br"),
            n("Products"),
            n("br"),
            n("Categories"),
          ],
          1
        );
      },
      a = [];
  },
  3949: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", [
          n("div", { staticClass: "text-left flow-root" }, [
            n("h4", { staticClass: "actions-title" }, [
              e._v(e._s(e.$t("labels.my_possible_actions"))),
            ]),
          ]),
          n(
            "div",
            {
              staticClass:
                "text-left flex mt-2 p-2 bg-gray-100 rounded-md flex-row flex-wrap border-2 flex-space-between",
            },
            e._l(e.buttons, function (t, r) {
              return n(
                "button",
                {
                  key: r,
                  staticClass: "btn-actions",
                  class: t.klass,
                  on: {
                    click: function (n) {
                      return e.emitAction(t.action);
                    },
                  },
                },
                [e._v(" " + e._s(t.title) + " ")]
              );
            }),
            0
          ),
        ]);
      },
      a = [];
  },
  "3a15": function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    n("96cf"), Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("1b40"),
      c = n("d86a"),
      l = s.__importDefault(n("e4c6")),
      d = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          var e;
          return (
            r(this, n),
            (e = t.apply(this, arguments)),
            (e.product = {
              name: "",
              description: "",
              quantity: 0,
              price: 0,
              isPublished: !1,
              categories: [""],
            }),
            e
          );
        }
        return (
          a(n, [
            {
              key: "addProd",
              value: function () {
                return s.__awaiter(
                  this,
                  void 0,
                  void 0,
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              c.addProduct(this.product)
                                .then(function (e) {
                                  console.log("here then", e), alert("done");
                                })
                                .catch(function (e) {
                                  return console.error("Error:", e);
                                });
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "updateSelected",
              value: function (e) {
                this.product.categories = e;
              },
            },
          ]),
          n
        );
      })(u.Vue);
    (d = s.__decorate(
      [u.Component({ components: { CategoryChoices: l.default } })],
      d
    )),
      (t.default = d);
  },
  "3abe": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "p-2 pr-4" },
          [
            n("PageTitles", { attrs: { title: e.title } }),
            n("Actions", {
              attrs: { buttons: e.links },
              on: {
                action: function (t) {
                  return e.handleClick(t);
                },
              },
            }),
            n("EditAdminForm", {
              attrs: { adminId: e.adminId },
              on: {
                changeName: function (t) {
                  return e.updatePageName(t);
                },
              },
            }),
            n("CMSModal", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: e.isModalVisible,
                  expression: "isModalVisible",
                },
              ],
              on: {
                close: function (t) {
                  return e.closeModal();
                },
              },
              scopedSlots: e._u([
                {
                  key: "header",
                  fn: function () {
                    return [e._v(" Supprimer cette catégorie ")];
                  },
                  proxy: !0,
                },
                {
                  key: "body",
                  fn: function () {
                    return [
                      n("p", [
                        e._v(
                          " Êtes-vous certain de vouloir supprimer la catégorie : " +
                            e._s(e.adminId) +
                            " ? "
                        ),
                      ]),
                    ];
                  },
                  proxy: !0,
                },
                {
                  key: "footer",
                  fn: function () {
                    return [
                      n(
                        "div",
                        {
                          staticClass: "flex flex-row flex-wrap justify-center",
                        },
                        [
                          n(
                            "button",
                            {
                              staticClass:
                                "btn-actions danger w-40 align-center",
                              on: {
                                click: function (t) {
                                  return e.confirmDelete();
                                },
                              },
                            },
                            [e._v(" Supprimer ")]
                          ),
                          n(
                            "button",
                            {
                              staticClass: "btn-actions gray w-40 align-center",
                              on: {
                                click: function (t) {
                                  return e.closeModal();
                                },
                              },
                            },
                            [e._v(" Cancel ")]
                          ),
                        ]
                      ),
                    ];
                  },
                  proxy: !0,
                },
              ]),
            }),
          ],
          1
        );
      },
      a = [];
  },
  "3d9b": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("3949"),
      a = n("be96");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "1402c000",
        null
      );
    t["default"] = s.exports;
  },
  "3dbc": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("cabf"),
      a = n("20fd");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "de318dc6",
        null
      );
    t["default"] = s.exports;
  },
  "3e55": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "text-left flow-root" }, [
          n("h2", { staticClass: "page-title" }, [e._v(e._s(e.page))]),
          n(
            "h2",
            {
              staticClass:
                "page-title font-normal mr-3 ml-3 hidden sm:inline-block",
            },
            [e._v(" | ")]
          ),
          n("h3", { staticClass: "page-title font-normal" }, [
            e._v(e._s(e.$t("company.name"))),
          ]),
        ]);
      },
      a = [];
  },
  "3ea4": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("8dce"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  "3eba": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("f248"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  "434b": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "p-2 pr-4" },
          [
            n("PageTitles", { attrs: { title: e.$t("general.products") } }),
            n("Actions", {
              attrs: { buttons: e.links },
              on: {
                action: function (t) {
                  return e.handleClick(t);
                },
              },
            }),
            n("ProductsLists", { staticClass: "mt-10" }),
          ],
          1
        );
      },
      a = [];
  },
  "447c": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "products-container" }, [
          n("div", { staticClass: "product-card" }, [
            n(
              "div",
              {
                staticClass: "face front",
                class: { "is-generic": e.isLoading },
              },
              [
                e._m(0),
                n("div", { staticClass: "face-content card-body" }, [
                  n("img", {
                    staticClass: "product-image",
                    attrs: { src: e.image },
                  }),
                ]),
                e._m(1),
              ]
            ),
            n("div", { staticClass: "face back" }, [e._v("HERE")]),
          ]),
          e._m(2),
        ]);
      },
      a = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "face-content card-header" }, [
            n("span", { staticClass: "product-exclusivity" }, [e._v("New!")]),
            n("span", { staticClass: "product-price" }, [e._v("350$")]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "face-content card-footer" }, [
            n("span", { staticClass: "product-name" }, [e._v(" Diamond ")]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "text-center flow-root w-full bottom-0" },
            [n("button", { staticClass: "btn-buy" }, [e._v("BUY")])]
          );
        },
      ];
  },
  4765: function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    n("96cf"), Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("1b40"),
      c = n("3578"),
      l = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          var e;
          return (
            r(this, n),
            (e = t.apply(this, arguments)),
            (e.admin = { firstName: "", lastName: "", email: "" }),
            (e.updatedPassword = ""),
            (e.isLoaded = !1),
            (e.notFound = !1),
            e
          );
        }
        return (
          a(n, [
            {
              key: "fetchAdmin",
              value: function () {
                return s.__awaiter(
                  this,
                  void 0,
                  void 0,
                  regeneratorRuntime.mark(function e() {
                    var t = this;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              console.log("here"),
                                c
                                  .getOneAdmin(this.adminId)
                                  .then(function (e) {
                                    t.$nextTick(function () {
                                      (this.admin = e.admin),
                                        (this.updatedPassword = ""),
                                        (this.isLoaded = !0);
                                    });
                                  })
                                  .catch(function (e) {
                                    console.error("Error:", e),
                                      (t.isLoaded = !0),
                                      (t.notFound = !0);
                                  });
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "mounted",
              value: function () {
                this.fetchAdmin();
              },
            },
          ]),
          n
        );
      })(u.Vue);
    s.__decorate(
      [u.Prop(), s.__metadata("design:type", String)],
      l.prototype,
      "adminId",
      void 0
    ),
      (l = s.__decorate([u.Component({ components: {} })], l)),
      (t.default = l);
  },
  4891: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("ab72"),
      a = n("6bd0");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "5787e1b0",
        null
      );
    t["default"] = s.exports;
  },
  4937: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("e5c9"),
      a = n("3ea4");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    var o = n("2877"),
      s = Object(o["a"])(a["default"], r["a"], r["b"], !1, null, null, null);
    t["default"] = s.exports;
  },
  "4b6b": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("5ddf"),
      a = n("b100");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "7e7262ed",
        null
      );
    t["default"] = s.exports;
  },
  "4bfa": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("4caa"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  "4ca1": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("f4a3"),
      a = n("c1c2");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    n("2ce3");
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "95550736",
        null
      );
    t["default"] = s.exports;
  },
  "4caa": function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("1b40"),
      c = (function (e) {
        i(s, e);
        var t = o(s);
        function s() {
          var e;
          return (
            r(this, s),
            (e = t.apply(this, arguments)),
            (e.isLoading = !1),
            (e.source = "default"),
            e
          );
        }
        return (
          a(s, [
            {
              key: "image",
              get: function () {
                var e = n("2b0eb"),
                  t = "diamond";
                return e("./" + t + ".png");
              },
            },
          ]),
          s
        );
      })(u.Vue);
    (c = s.__decorate([u.Component({ components: {} })], c)), (t.default = c);
  },
  "4dd3": function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("1b40"),
      c = s.__importDefault(n("3d9b")),
      l = s.__importDefault(n("3428")),
      d = s.__importDefault(n("df43")),
      f = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          var e;
          return (
            r(this, n),
            (e = t.apply(this, arguments)),
            (e.links = [
              {
                title: e.$t("cms.cta.add_admin"),
                klass: "disabled",
                action: "",
              },
              {
                title: e.$t("cms.cta.consult_admins"),
                klass: "success",
                action: "link",
              },
            ]),
            e
          );
        }
        return (
          a(n, [
            {
              key: "handleClick",
              value: function (e) {
                switch (e) {
                  case "link":
                    this.$router.push({ name: "list-admin" });
                    break;
                  default:
                    return;
                }
              },
            },
          ]),
          n
        );
      })(u.Vue);
    (f = s.__decorate(
      [
        u.Component({
          components: {
            Actions: c.default,
            PageTitles: l.default,
            AddAdminForm: d.default,
          },
        }),
      ],
      f
    )),
      (t.default = f);
  },
  "503b": function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    n("99af"), Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("6fc5"),
      c = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          var e;
          return (
            r(this, n),
            (e = t.apply(this, arguments)),
            (e._id = ""),
            (e._firstName = ""),
            (e._lastName = ""),
            (e._role = "user"),
            (e._email = ""),
            e
          );
        }
        return (
          a(n, [
            {
              key: "setUser",
              value: function (e) {
                console.log("payload", e),
                  (this._firstName = e.firstName || ""),
                  (this._lastName = e.lastName || ""),
                  (this._role = e.role || "user"),
                  (this._email = e.email || ""),
                  (this._id = e._id || "");
              },
            },
            {
              key: "clearUser",
              value: function () {
                (this._firstName = ""),
                  (this._lastName = ""),
                  (this._role = ""),
                  (this._email = ""),
                  (this._id = "");
              },
            },
            {
              key: "name",
              get: function () {
                return "".concat(this._firstName, " ").concat(this._lastName);
              },
            },
          ]),
          n
        );
      })(u.VuexModule);
    s.__decorate(
      [
        u.Mutation,
        s.__metadata("design:type", Function),
        s.__metadata("design:paramtypes", [Object]),
        s.__metadata("design:returntype", void 0),
      ],
      c.prototype,
      "setUser",
      null
    ),
      s.__decorate(
        [
          u.Mutation,
          s.__metadata("design:type", Function),
          s.__metadata("design:paramtypes", []),
          s.__metadata("design:returntype", void 0),
        ],
        c.prototype,
        "clearUser",
        null
      ),
      (c = s.__decorate([u.Module({ name: "user" })], c)),
      (t.default = c);
  },
  "51d2": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("d407"),
      a = n("0bc6");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "b3b28336",
        null
      );
    t["default"] = s.exports;
  },
  "530d": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "cms-form-container" }, [
          n("div", { staticClass: "row-with-info" }, [
            e._m(0),
            n("div", { staticClass: "right-info" }, [
              n("div", [
                n("div", { staticClass: "info-form-row" }, [
                  n("div", { staticClass: "info-form-items" }, [
                    e._m(1),
                    n("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.product.name,
                          expression: "product.name",
                        },
                      ],
                      attrs: {
                        id: "name",
                        type: "text",
                        placeholder: "Nom produit",
                      },
                      domProps: { value: e.product.name },
                      on: {
                        input: function (t) {
                          t.target.composing ||
                            e.$set(e.product, "name", t.target.value);
                        },
                      },
                    }),
                  ]),
                  n("div", { staticClass: "info-form-items" }, [
                    e._m(2),
                    n("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.product.description,
                          expression: "product.description",
                        },
                      ],
                      attrs: {
                        id: "description",
                        placeholder: "Description...",
                      },
                      domProps: { value: e.product.description },
                      on: {
                        input: function (t) {
                          t.target.composing ||
                            e.$set(e.product, "description", t.target.value);
                        },
                      },
                    }),
                  ]),
                  n("div", { staticClass: "info-form-items half" }, [
                    e._m(3),
                    n("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.product.quantity,
                          expression: "product.quantity",
                        },
                      ],
                      attrs: {
                        id: "quantity",
                        type: "number",
                        placeholder: "Entrez une quantité",
                      },
                      domProps: { value: e.product.quantity },
                      on: {
                        input: function (t) {
                          t.target.composing ||
                            e.$set(e.product, "quantity", t.target.value);
                        },
                      },
                    }),
                  ]),
                  n("div", { staticClass: "info-form-items half" }, [
                    e._m(4),
                    n("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.product.price,
                          expression: "product.price",
                        },
                      ],
                      attrs: {
                        id: "price",
                        type: "number",
                        placeholder: "Entrez un prix",
                      },
                      domProps: { value: e.product.price },
                      on: {
                        input: function (t) {
                          t.target.composing ||
                            e.$set(e.product, "price", t.target.value);
                        },
                      },
                    }),
                  ]),
                ]),
              ]),
            ]),
          ]),
          e._m(5),
          n("div", { staticClass: "row-with-info" }, [
            e._m(6),
            n("div", { staticClass: "right-info" }, [
              n("div", [
                n(
                  "div",
                  { staticClass: "info-form-row" },
                  [
                    n("CategoryChoices", {
                      on: {
                        onCheckedCategories: function (t) {
                          return e.updateSelected(t);
                        },
                      },
                    }),
                  ],
                  1
                ),
              ]),
            ]),
          ]),
          n("div", { staticClass: "row-with-info" }, [
            e._m(7),
            n("div", { staticClass: "right-info" }, [
              n(
                "button",
                {
                  staticClass: "btn-submit mt-4",
                  on: {
                    click: function (t) {
                      return e.addProd();
                    },
                  },
                },
                [e._v(" Ajouter le produit ")]
              ),
            ]),
          ]),
        ]);
      },
      a = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "left-info" }, [
            n("span", { staticClass: "info-title" }, [e._v("Générales")]),
            n("span", { staticClass: "info-explication" }, [
              e._v(" Remplissez les information générales sur le produit "),
            ]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("label", { attrs: { for: "name" } }, [
            e._v("Nom"),
            n("sup", [e._v("*")]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("label", { attrs: { for: "description" } }, [
            e._v("Description"),
            n("sup", [e._v("*")]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("label", { attrs: { for: "quantity" } }, [
            e._v("Quantity"),
            n("sup", [e._v("*")]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("label", { attrs: { for: "price" } }, [
            e._v("Price"),
            n("sup", [e._v("*")]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "row-with-info" }, [
            n("div", { staticClass: "left-info" }, [
              n("span", { staticClass: "info-title" }, [e._v("Images")]),
              n("span", { staticClass: "info-explication" }, [
                e._v(" Choissisez le chemin pour les images "),
              ]),
            ]),
            n("div", { staticClass: "right-info" }, [
              n("div", [n("div", { staticClass: "info-form-row" })]),
            ]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "left-info" }, [
            n("span", { staticClass: "info-title" }, [e._v("Catégories")]),
            n("span", { staticClass: "info-explication" }, [
              e._v(" Choissisez les catégories pour ce produit "),
            ]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "left-info" }, [
            n("span", { staticClass: "info-title" }, [e._v("Révision")]),
            n("span", { staticClass: "info-explication" }, [
              e._v(" Revissez les information et ajouter le produit "),
            ]),
          ]);
        },
      ];
  },
  "53c0": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function () {
      var e;
      function t() {
        return e || ((e.access_token = ""), (e.refresh_token = ""), e);
      }
      function n(e) {
        localStorage.setItem("access_token", e.access_token),
          localStorage.setItem("refresh_token", e.refresh_token);
      }
      function r() {
        return localStorage.getItem("access_token");
      }
      function a() {
        return localStorage.getItem("refresh_token");
      }
      function i() {
        localStorage.removeItem("access_token"),
          localStorage.removeItem("refresh_token");
      }
      function o(e) {
        localStorage.setItem("language", e);
      }
      function s() {
        return localStorage.getItem("language");
      }
      return {
        getService: t,
        setToken: n,
        getAccessToken: r,
        getRefreshToken: a,
        clearToken: i,
        getLanguage: s,
        setLanguage: o,
      };
    })();
    t.default = r;
  },
  "551d": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("9d20"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  "58e1": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "cms-form-container" }, [
          n("div", { staticClass: "row-with-info" }, [
            n("div", { staticClass: "left-info" }, [
              n("span", { staticClass: "info-title" }, [
                e._v(" " + e._s(e.$t("general.generals")) + " "),
              ]),
              n("span", { staticClass: "info-explication" }, [
                e._v(" " + e._s(e.$t("cms.labels.category_info")) + " "),
              ]),
            ]),
            n("div", { staticClass: "right-info" }, [
              n("div", [
                n("div", { staticClass: "info-form-row" }, [
                  n("div", { staticClass: "info-form-items half" }, [
                    n("label", { attrs: { for: "firstName" } }, [
                      e._v(" " + e._s(e.$t("labels.first_name"))),
                      n("sup", [e._v("*")]),
                    ]),
                    n("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.admin.firstName,
                          expression: "admin.firstName",
                        },
                      ],
                      attrs: {
                        id: "firstName",
                        type: "text",
                        placeholder: e.$t("labels.first_name") + "...",
                      },
                      domProps: { value: e.admin.firstName },
                      on: {
                        input: function (t) {
                          t.target.composing ||
                            e.$set(e.admin, "firstName", t.target.value);
                        },
                      },
                    }),
                  ]),
                  n("div", { staticClass: "info-form-items half" }, [
                    n("label", { attrs: { for: "lastName" } }, [
                      e._v(" " + e._s(e.$t("labels.last_name"))),
                      n("sup", [e._v("*")]),
                    ]),
                    n("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.admin.lastName,
                          expression: "admin.lastName",
                        },
                      ],
                      attrs: {
                        id: "lastName",
                        type: "text",
                        placeholder: e.$t("labels.last_name") + "...",
                      },
                      domProps: { value: e.admin.lastName },
                      on: {
                        input: function (t) {
                          t.target.composing ||
                            e.$set(e.admin, "lastName", t.target.value);
                        },
                      },
                    }),
                  ]),
                  n("div", { staticClass: "info-form-items" }, [
                    n("label", { attrs: { for: "email" } }, [
                      e._v(" " + e._s(e.$t("labels.email"))),
                      n("sup", [e._v("*")]),
                    ]),
                    n("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.admin.email,
                          expression: "admin.email",
                        },
                      ],
                      attrs: {
                        id: "email",
                        type: "text",
                        placeholder: e.$t("labels.email") + "...",
                      },
                      domProps: { value: e.admin.email },
                      on: {
                        input: function (t) {
                          t.target.composing ||
                            e.$set(e.admin, "email", t.target.value);
                        },
                      },
                    }),
                  ]),
                  n("div", { staticClass: "info-form-items" }, [
                    n("label", { attrs: { for: "password" } }, [
                      e._v(" " + e._s(e.$t("labels.password"))),
                      n("sup", [e._v("*")]),
                    ]),
                    n("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.admin.password,
                          expression: "admin.password",
                        },
                      ],
                      attrs: {
                        id: "password",
                        type: "password",
                        placeholder: e.$t("labels.password") + "...",
                      },
                      domProps: { value: e.admin.password },
                      on: {
                        input: function (t) {
                          t.target.composing ||
                            e.$set(e.admin, "password", t.target.value);
                        },
                      },
                    }),
                  ]),
                  n("div", { staticClass: "info-form-items" }, [
                    n("label", { attrs: { for: "passwordConfirmation" } }, [
                      e._v(" " + e._s(e.$t("labels.password_confirmation"))),
                      n("sup", [e._v("*")]),
                    ]),
                    n("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.admin.passwordConfirmation,
                          expression: "admin.passwordConfirmation",
                        },
                      ],
                      attrs: {
                        id: "passwordConfirmation",
                        type: "password",
                        placeholder:
                          e.$t("labels.password_confirmation") + "...",
                      },
                      domProps: { value: e.admin.passwordConfirmation },
                      on: {
                        input: function (t) {
                          t.target.composing ||
                            e.$set(
                              e.admin,
                              "passwordConfirmation",
                              t.target.value
                            );
                        },
                      },
                    }),
                  ]),
                ]),
              ]),
            ]),
          ]),
          n("div", { staticClass: "row-with-info" }, [
            n("div", { staticClass: "left-info" }, [
              n("span", { staticClass: "info-title" }, [
                e._v(" " + e._s(e.$t("general.revision")) + " "),
              ]),
              n("span", { staticClass: "info-explication" }, [
                e._v(" " + e._s(e.$t("cms.labels.review_category")) + " "),
              ]),
            ]),
            n("div", { staticClass: "right-info" }, [
              e.errors.length > 0
                ? n(
                    "div",
                    { staticClass: "text-red-800 text-sm border-red-800" },
                    [
                      n("h6", [e._v(e._s(e.$t("errors.errors_found")) + " :")]),
                      n(
                        "ul",
                        e._l(e.errors, function (t, r) {
                          return n("li", { key: r }, [
                            e._v(" " + e._s(t) + " "),
                          ]);
                        }),
                        0
                      ),
                    ]
                  )
                : e._e(),
              n(
                "button",
                {
                  staticClass: "btn-submit mt-4",
                  on: {
                    click: function (t) {
                      return e.add();
                    },
                  },
                },
                [e._v(" " + e._s(e.$t("cms.cta.add_admin")) + " ")]
              ),
            ]),
          ]),
        ]);
      },
      a = [];
  },
  "5d4f": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "w-full h-screen", attrs: { id: "app" } },
          [n("router-view")],
          1
        );
      },
      a = [],
      i = (n("101b"), n("2877")),
      o = {},
      s = Object(i["a"])(o, r, a, !1, null, null, null);
    t["default"] = s.exports;
  },
  "5ddf": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "w-100 margin-auto" },
          [
            n("vue-good-table", {
              attrs: {
                columns: e.columns,
                rows: e.rows,
                "fixed-header": !0,
                "max-height": "80vh",
                styleClass: "vgt-table bordered info-table",
                isLoading: e.isLoading,
                "pagination-options": {
                  enabled: !0,
                  perPage: 20,
                  perPageDropdownEnabled: !0,
                  perPageDropdown: [10, 20, 50, 100],
                  setCurrentPage: 1,
                  nextLabel: "" + e.$t("labels.next"),
                  prevLabel: "" + e.$t("labels.prev"),
                  rowsPerPageLabel: "" + e.$t("labels.rows_per_page"),
                  ofLabel: "" + e.$t("labels.of"),
                  pageLabel: "" + e.$t("labels.pages"),
                  allLabel: "" + e.$t("labels.all"),
                  jumpFirstOrLast: !1,
                },
              },
              on: {
                "update:isLoading": function (t) {
                  e.isLoading = t;
                },
                "update:is-loading": function (t) {
                  e.isLoading = t;
                },
              },
              scopedSlots: e._u([
                {
                  key: "table-row",
                  fn: function (t) {
                    return [
                      "categories" == t.column.field
                        ? n("span", [
                            e._v(" " + e._s(t.row.products.length) + " "),
                          ])
                        : "action" == t.column.field
                        ? n(
                            "span",
                            [
                              n(
                                "router-link",
                                {
                                  staticClass: "btn-table-links",
                                  attrs: {
                                    to: {
                                      path: "/cms/admin/edit/" + t.row.adminId,
                                    },
                                  },
                                },
                                [e._v(" " + e._s(e.$t("buttons.manage")) + " ")]
                              ),
                            ],
                            1
                          )
                        : n("span", [
                            e._v(
                              " " + e._s(t.formattedRow[t.column.field]) + " "
                            ),
                          ]),
                    ];
                  },
                },
              ]),
            }),
          ],
          1
        );
      },
      a = [];
  },
  "60e1": function (e, t, n) {
    "use strict";
    n("96cf"),
      n("d3b7"),
      Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.publishedProduct = t.editCategory = t.deleteCategory = t.addCategory = t.getCategory = t.getAllCategories = void 0);
    var r = n("9ab4"),
      a = r.__importDefault(n("d724")),
      i = r.__importDefault(n("11a6"));
    function o() {
      return r.__awaiter(
        this,
        void 0,
        void 0,
        regeneratorRuntime.mark(function e() {
          return regeneratorRuntime.wrap(function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    a
                      .default()
                      .get("/categories/")
                      .then(function (e) {
                        return console.log(e.data), e.data;
                      })
                      .catch(function (e) {
                        return Promise.reject(e);
                      })
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
    }
    function s(e) {
      return r.__awaiter(
        this,
        void 0,
        void 0,
        regeneratorRuntime.mark(function t() {
          return regeneratorRuntime.wrap(function (t) {
            while (1)
              switch ((t.prev = t.next)) {
                case 0:
                  return t.abrupt(
                    "return",
                    a
                      .default()
                      .get("/category/".concat(e))
                      .then(function (e) {
                        return e.data;
                      })
                      .catch(function (e) {
                        return Promise.reject(e);
                      })
                  );
                case 1:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      );
    }
    function u(e) {
      return r.__awaiter(
        this,
        void 0,
        void 0,
        regeneratorRuntime.mark(function t() {
          return regeneratorRuntime.wrap(function (t) {
            while (1)
              switch ((t.prev = t.next)) {
                case 0:
                  return t.abrupt(
                    "return",
                    i
                      .default()
                      .post("/categories", e)
                      .then(function (e) {
                        return e.data;
                      })
                      .catch(function (e) {
                        return Promise.reject(e);
                      })
                  );
                case 1:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      );
    }
    function c(e) {
      return r.__awaiter(
        this,
        void 0,
        void 0,
        regeneratorRuntime.mark(function t() {
          return regeneratorRuntime.wrap(function (t) {
            while (1)
              switch ((t.prev = t.next)) {
                case 0:
                  return t.abrupt(
                    "return",
                    i
                      .default()
                      .delete("/categories/".concat(e))
                      .then(function (e) {
                        return e.data;
                      })
                      .catch(function (e) {
                        return Promise.reject(e);
                      })
                  );
                case 1:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      );
    }
    function l(e) {
      return r.__awaiter(
        this,
        void 0,
        void 0,
        regeneratorRuntime.mark(function t() {
          return regeneratorRuntime.wrap(function (t) {
            while (1)
              switch ((t.prev = t.next)) {
                case 0:
                  return t.abrupt(
                    "return",
                    i
                      .default()
                      .put("/categories/".concat(e.categoryId), e)
                      .then(function (e) {
                        return e.data;
                      })
                      .catch(function (e) {
                        return Promise.reject(e);
                      })
                  );
                case 1:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      );
    }
    function d(e, t) {
      return r.__awaiter(
        this,
        void 0,
        void 0,
        regeneratorRuntime.mark(function n() {
          return regeneratorRuntime.wrap(function (n) {
            while (1)
              switch ((n.prev = n.next)) {
                case 0:
                  return n.abrupt(
                    "return",
                    i
                      .default()
                      .put("/categories/update/".concat(e), { isPublished: t })
                      .then(function (e) {
                        return e.data;
                      })
                      .catch(function (e) {
                        return Promise.reject(e);
                      })
                  );
                case 1:
                case "end":
                  return n.stop();
              }
          }, n);
        })
      );
    }
    (t.getAllCategories = o),
      (t.getCategory = s),
      (t.addCategory = u),
      (t.deleteCategory = c),
      (t.editCategory = l),
      (t.publishedProduct = d);
  },
  6176: function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("1b40"),
      c = s.__importDefault(n("3d9b")),
      l = s.__importDefault(n("3428")),
      d = s.__importDefault(n("94d0")),
      f = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          var e;
          return (
            r(this, n),
            (e = t.apply(this, arguments)),
            (e.links = [
              { title: "Ajouter un produit", klass: "disabled", action: "" },
              {
                title: "Voir tous les produit",
                klass: "success",
                action: "products",
              },
            ]),
            e
          );
        }
        return (
          a(n, [
            {
              key: "handleClick",
              value: function (e) {
                switch (e) {
                  case "products":
                    this.$router.push({ name: "list-products" });
                    break;
                  case "test":
                    break;
                  default:
                }
              },
            },
          ]),
          n
        );
      })(u.Vue);
    (f = s.__decorate(
      [
        u.Component({
          components: {
            Actions: c.default,
            PageTitles: l.default,
            AddProductsForm: d.default,
          },
        }),
      ],
      f
    )),
      (t.default = f);
  },
  6354: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "p-2 pr-4" },
          [
            n("PageTitles", { attrs: { title: e.$t("general.categories") } }),
            n("Actions", {
              attrs: { buttons: e.links },
              on: {
                action: function (t) {
                  return e.handleClick(t);
                },
              },
            }),
            n("AddCategoryForm"),
          ],
          1
        );
      },
      a = [];
  },
  "63a6": function (e, t, n) {
    e.exports = n.p + "img/emeraude.2aa7b477.png";
  },
  "645f": function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    n("c740"), Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("1b40"),
      c = n("d86a"),
      l = n("f617"),
      d = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          var e;
          return (
            r(this, n),
            (e = t.apply(this, arguments)),
            (e.isLoading = !0),
            (e.columns = [
              {
                label: e.$t("labels.name"),
                field: "name",
                sortable: !0,
                thClass: "table-header-name",
                globalSearchDisabled: !0,
                width: "20%",
              },
              {
                label: e.$t("labels.price"),
                field: "price",
                type: "number",
                sortable: !0,
                formatFn: e.formatPrice,
              },
              {
                label: e.$t("labels.quantity"),
                field: "quantity",
                type: "number",
                sortable: !0,
                firstSortType: "asc",
              },
              {
                label: "Categories",
                field: "categories",
                html: !0,
                sortable: !0,
                type: "number",
                thClass: "text-center",
                tdClass: "text-center",
              },
              {
                label: "Status",
                field: "isPublished",
                type: "boolean",
                sortable: !0,
                firstSortType: "desc",
                width: "20%",
                thClass: "text-center",
                tdClass: "text-center",
              },
              {
                label: "Action",
                field: "action",
                html: !0,
                sortable: !1,
                width: "20%",
                thClass: "text-center",
                tdClass: "text-center",
              },
            ]),
            (e.rows = []),
            (e.totalRecords = 0),
            (e.serverParams = {
              columnFilters: {},
              sort: [{ field: "", type: "" }],
              page: 1,
              perPage: 10,
            }),
            e
          );
        }
        return (
          a(n, [
            {
              key: "mounted",
              value: function () {
                this.loadItems(), this.$parent.$on("refresh", this.refresh);
              },
            },
            {
              key: "refresh",
              value: function () {
                this.loadItems();
              },
            },
            {
              key: "onPageChange",
              value: function (e) {
                this.updateParams({ page: e.currentPage });
              },
            },
            {
              key: "updateParams",
              value: function (e) {
                this.serverParams = Object.assign({}, this.serverParams, e);
              },
            },
            { key: "onPerPageChange", value: function (e) {} },
            { key: "onSortChange", value: function (e) {} },
            {
              key: "formatPrice",
              value: function (e) {
                return e + " $";
              },
            },
            {
              key: "onColumnFilter",
              value: function (e) {
                this.updateParams(e), this.loadItems();
              },
            },
            {
              key: "loadItems",
              value: function () {
                var e = this;
                c.getAllProducts()
                  .then(function (t) {
                    e.$nextTick(function () {
                      (this.rows = t),
                        (this.totalRecords = t.length),
                        (this.isLoading = !1);
                    });
                  })
                  .catch(function (e) {
                    return console.error("Errors : ", e);
                  });
              },
            },
            {
              key: "publish",
              value: function (e, t) {
                var n = this,
                  r = this.rows.findIndex(function (t) {
                    return t.productId === e;
                  });
                c.publishedProduct(e, t)
                  .then(function (e) {
                    n.rows[r].isPublished = t;
                  })
                  .catch(function (e) {
                    return console.error("Error:", e);
                  });
              },
            },
          ]),
          n
        );
      })(u.Vue);
    (d = s.__decorate(
      [u.Component({ components: { VueGoodTable: l.VueGoodTable } })],
      d
    )),
      (t.default = d);
  },
  "648e": function (e, t, n) {},
  "682e": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("3a15"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  6837: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("3abe"),
      a = n("e8b7");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "29da980a",
        null
      );
    t["default"] = s.exports;
  },
  6842: function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("ed6d").default,
      i = n("2d0d").default;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = n("9ab4"),
      s = n("1b40"),
      u = (function (e) {
        a(n, e);
        var t = i(n);
        function n() {
          return r(this, n), t.apply(this, arguments);
        }
        return n;
      })(s.Vue);
    (u = o.__decorate([s.Component({ components: {} })], u)), (t.default = u);
  },
  "689d": function (e, t, n) {
    "use strict";
    n("e260"),
      n("e6cf"),
      n("cca6"),
      n("a79d"),
      n("96cf"),
      n("d3b7"),
      n("25f0"),
      Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n("9ab4");
    n("98db");
    var a = r.__importDefault(n("2b0e")),
      i = r.__importDefault(n("9ead")),
      o = r.__importDefault(n("5d4f")),
      s = r.__importDefault(n("a985")),
      u = n("01e7"),
      c = r.__importDefault(n("a925")),
      l = n("1fcb");
    n("2c2f");
    var d = n("ad3d"),
      f = n("ecee"),
      p = n("c074");
    f.library.add(p.faUserSecret, p.faUser),
      a.default.component("font-awesome-icon", d.FontAwesomeIcon);
    (a.default.config.productionTip = !1), a.default.use(c.default);
    var m = new c.default({
      messages: l.messages,
      locale: l.defaultLocale(),
      fallbackLocale: "fr",
    });
    a.default.use(i.default),
      Promise.resolve()
        .then(function () {
          return r.__awaiter(
            void 0,
            void 0,
            void 0,
            regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
        })
        .then(function () {
          return r.__awaiter(
            void 0,
            void 0,
            void 0,
            regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
        })
        .then(function () {
          return r.__awaiter(
            void 0,
            void 0,
            void 0,
            regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        new a.default({
                          i18n: m,
                          router: s.default,
                          store: u.store,
                          render: function (e) {
                            return e(o.default);
                          },
                        }).$mount("#app")
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
        })
        .catch(function (e) {
          console.error(e.toString());
        });
  },
  "6a6c": function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    n("96cf"), Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("1b40"),
      c = s.__importDefault(n("d724")),
      l = s.__importDefault(n("53c0")),
      d = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          return r(this, n), t.apply(this, arguments);
        }
        return (
          a(n, [
            {
              key: "login",
              value: function () {
                return s.__awaiter(
                  this,
                  void 0,
                  void 0,
                  regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (t = {
                              email: "test@lol.com",
                              password: "eloajksjdhd",
                            }),
                              c
                                .default()
                                .post("sessions", t)
                                .then(function (e) {
                                  console.log(e),
                                    l.default.clearToken(),
                                    l.default.setToken({
                                      access_token: String(e.data.accessToken),
                                      refresh_token: String(
                                        e.data.refreshToken
                                      ),
                                    });
                                })
                                .catch(function (e) {
                                  console.log(e);
                                });
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
              },
            },
            {
              key: "register",
              value: function () {
                return s.__awaiter(
                  this,
                  void 0,
                  void 0,
                  regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (t = {
                              email: "test@lol.com",
                              password: "eloajksjdhd",
                              passwordConfirmation: "eloajksjdhd",
                              name: "test1",
                            }),
                              c
                                .default()
                                .post("users", t)
                                .then(function (e) {
                                  console.log(e);
                                })
                                .catch(function (e) {
                                  "409" === e.code &&
                                    console.log("Deja un compte"),
                                    console.log(e.response.data),
                                    console.log(e.response.status);
                                });
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
              },
            },
          ]),
          n
        );
      })(u.Vue);
    s.__decorate(
      [u.Prop(), s.__metadata("design:type", String)],
      d.prototype,
      "msg",
      void 0
    ),
      (d = s.__decorate([u.Component], d)),
      (t.default = d);
  },
  "6b88": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("c1aa"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  "6bd0": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("35a5"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  "6c00": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("434b"),
      a = n("98aa");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "8a8d61a4",
        null
      );
    t["default"] = s.exports;
  },
  "6cf7": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("3736"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  "6d49": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("main", [
          e.isLoaded || e.notFound ? e._e() : n("div", [e._v("Loading ...")]),
          e.isLoaded && e.notFound ? n("div", [e._v("Not found")]) : e._e(),
          e.isLoaded && !e.notFound
            ? n("div", { staticClass: "cms-form-container" }, [
                n("div", { staticClass: "row-with-info" }, [
                  n("div", { staticClass: "left-info" }, [
                    n("span", { staticClass: "info-title" }, [
                      e._v("Générales"),
                    ]),
                    n("span", { staticClass: "info-explication" }, [
                      e._v(
                        " Mettre à jour les information générales sur le produit : "
                      ),
                      n("strong", { staticClass: "text-green-900" }, [
                        e._v(e._s(e.product.name)),
                      ]),
                    ]),
                  ]),
                  n("div", { staticClass: "right-info" }, [
                    n("div", [
                      n("div", { staticClass: "info-form-row" }, [
                        n("div", { staticClass: "info-form-items" }, [
                          e._m(0),
                          n("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: e.product.name,
                                expression: "product.name",
                              },
                            ],
                            attrs: {
                              id: "name",
                              type: "text",
                              placeholder: "Nom produit",
                            },
                            domProps: { value: e.product.name },
                            on: {
                              input: function (t) {
                                t.target.composing ||
                                  e.$set(e.product, "name", t.target.value);
                              },
                            },
                          }),
                        ]),
                        n("div", { staticClass: "info-form-items" }, [
                          e._m(1),
                          n("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: e.product.description,
                                expression: "product.description",
                              },
                            ],
                            attrs: {
                              id: "description",
                              placeholder: "Description...",
                            },
                            domProps: { value: e.product.description },
                            on: {
                              input: function (t) {
                                t.target.composing ||
                                  e.$set(
                                    e.product,
                                    "description",
                                    t.target.value
                                  );
                              },
                            },
                          }),
                        ]),
                        n("div", { staticClass: "info-form-items half" }, [
                          e._m(2),
                          n("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: e.product.quantity,
                                expression: "product.quantity",
                              },
                            ],
                            attrs: {
                              id: "quantity",
                              type: "number",
                              placeholder: "Entrez une quantité",
                            },
                            domProps: { value: e.product.quantity },
                            on: {
                              input: function (t) {
                                t.target.composing ||
                                  e.$set(e.product, "quantity", t.target.value);
                              },
                            },
                          }),
                        ]),
                        n("div", { staticClass: "info-form-items half" }, [
                          e._m(3),
                          n("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: e.product.price,
                                expression: "product.price",
                              },
                            ],
                            attrs: {
                              id: "price",
                              type: "number",
                              placeholder: "Entrez un prix",
                            },
                            domProps: { value: e.product.price },
                            on: {
                              input: function (t) {
                                t.target.composing ||
                                  e.$set(e.product, "price", t.target.value);
                              },
                            },
                          }),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                e._m(4),
                n("div", { staticClass: "row-with-info" }, [
                  e._m(5),
                  n("div", { staticClass: "right-info" }, [
                    n("div", [
                      n(
                        "div",
                        { staticClass: "info-form-row" },
                        [
                          n("CategoryChoices", {
                            attrs: { selectedCategories: e.selected },
                            on: {
                              onCheckedCategories: function (t) {
                                return e.updateSelected(t);
                              },
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]),
                ]),
                n("div", { staticClass: "row-with-info" }, [
                  e._m(6),
                  n("div", { staticClass: "right-info" }, [
                    n(
                      "button",
                      {
                        staticClass: "btn-submit mt-4",
                        on: {
                          click: function (t) {
                            return e.editProd();
                          },
                        },
                      },
                      [e._v(" Mettre à jour le produit ")]
                    ),
                  ]),
                ]),
              ])
            : e._e(),
        ]);
      },
      a = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("label", { attrs: { for: "name" } }, [
            e._v("Nom"),
            n("sup", [e._v("*")]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("label", { attrs: { for: "description" } }, [
            e._v("Description"),
            n("sup", [e._v("*")]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("label", { attrs: { for: "quantity" } }, [
            e._v("Quantity"),
            n("sup", [e._v("*")]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("label", { attrs: { for: "price" } }, [
            e._v("Price"),
            n("sup", [e._v("*")]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "row-with-info" }, [
            n("div", { staticClass: "left-info" }, [
              n("span", { staticClass: "info-title" }, [e._v("Images")]),
              n("span", { staticClass: "info-explication" }, [
                e._v(" Choissisez le chemin pour les images "),
              ]),
            ]),
            n("div", { staticClass: "right-info" }, [
              n("div", [n("div", { staticClass: "info-form-row" })]),
            ]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "left-info" }, [
            n("span", { staticClass: "info-title" }, [e._v("Catégories")]),
            n("span", { staticClass: "info-explication" }, [
              e._v(" Choissisez les catégories pour ce produit "),
            ]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "left-info" }, [
            n("span", { staticClass: "info-title" }, [e._v("Révision")]),
            n("span", { staticClass: "info-explication" }, [
              e._v(" Revissez les information et ajouter le produit "),
            ]),
          ]);
        },
      ];
  },
  "6de7": function (e, t, n) {},
  "6ec9": function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    n("99af"), Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("1b40"),
      c = s.__importDefault(n("3d9b")),
      l = s.__importDefault(n("3428")),
      d = s.__importDefault(n("2b2c")),
      f = n("3578"),
      p = s.__importDefault(n("ebd0")),
      m = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          var e;
          return (
            r(this, n),
            (e = t.apply(this, arguments)),
            (e.adminId = e.$route.params.adminId),
            (e.title = ""),
            (e.isModalVisible = !1),
            (e.links = [
              {
                title: e.$t("cms.cta.edit_category"),
                klass: "disabled",
                action: "",
              },
              {
                title: e.$t("cms.cta.all_category"),
                klass: "success",
                action: "list",
              },
              {
                title: e.$t("cms.cta.delete_category"),
                klass: "danger ml-auto",
                action: "delete",
              },
            ]),
            e
          );
        }
        return (
          a(n, [
            {
              key: "handleClick",
              value: function (e) {
                switch (e) {
                  case "list":
                    this.$router.push({ name: "list-admin" });
                    break;
                  case "delete":
                    this.isModalVisible = !this.isModalVisible;
                    break;
                  default:
                }
              },
            },
            {
              key: "mounted",
              value: function () {
                this.updatePageName(this.adminId);
              },
            },
            {
              key: "updatePageName",
              value: function (e) {
                this.title = ""
                  .concat(this.$t("general.admins"), " : ")
                  .concat(e);
              },
            },
            {
              key: "showModal",
              value: function () {
                this.isModalVisible = !0;
              },
            },
            {
              key: "closeModal",
              value: function () {
                this.isModalVisible = !1;
              },
            },
            {
              key: "confirmDelete",
              value: function () {
                var e = this;
                f.deleteAdmin(this.adminId)
                  .then(function (t) {
                    console.log("here then", t), (e.isModalVisible = !1);
                  })
                  .catch(function (e) {
                    return console.error("Error:", e);
                  });
              },
            },
          ]),
          n
        );
      })(u.Vue);
    (m = s.__decorate(
      [
        u.Component({
          components: {
            Actions: c.default,
            PageTitles: l.default,
            EditAdminForm: p.default,
            CMSModal: d.default,
          },
        }),
      ],
      m
    )),
      (t.default = m);
  },
  "6fca": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("aae4"),
      a = n("8d89");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "5d4d4c8a",
        null
      );
    t["default"] = s.exports;
  },
  7210: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "cms-form-container" }, [
          n("div", { staticClass: "row-with-info" }, [
            n("div", { staticClass: "left-info" }, [
              n("span", { staticClass: "info-title" }, [
                e._v(" " + e._s(e.$t("general.generals")) + " "),
              ]),
              n("span", { staticClass: "info-explication" }, [
                e._v(" " + e._s(e.$t("cms.labels.category_info")) + " "),
              ]),
            ]),
            n("div", { staticClass: "right-info" }, [
              n("div", [
                n("div", { staticClass: "info-form-row" }, [
                  n("div", { staticClass: "info-form-items" }, [
                    n("label", { attrs: { for: "name" } }, [
                      e._v(" " + e._s(e.$t("labels.name"))),
                      n("sup", [e._v("*")]),
                    ]),
                    n("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.category.name,
                          expression: "category.name",
                        },
                      ],
                      attrs: {
                        id: "name",
                        type: "text",
                        placeholder: "Nom de la catégories",
                      },
                      domProps: { value: e.category.name },
                      on: {
                        input: function (t) {
                          t.target.composing ||
                            e.$set(e.category, "name", t.target.value);
                        },
                      },
                    }),
                  ]),
                  n("div", { staticClass: "info-form-items" }, [
                    n("label", { attrs: { for: "description" } }, [
                      e._v(e._s(e.$t("labels.description"))),
                      n("sup", [e._v("*")]),
                    ]),
                    n("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.category.description,
                          expression: "category.description",
                        },
                      ],
                      attrs: {
                        id: "description",
                        placeholder: "Description...",
                      },
                      domProps: { value: e.category.description },
                      on: {
                        input: function (t) {
                          t.target.composing ||
                            e.$set(e.category, "description", t.target.value);
                        },
                      },
                    }),
                  ]),
                ]),
              ]),
            ]),
          ]),
          n("div", { staticClass: "row-with-info" }, [
            n("div", { staticClass: "left-info" }, [
              n("span", { staticClass: "info-title" }, [
                e._v(" " + e._s(e.$t("general.revision")) + " "),
              ]),
              n("span", { staticClass: "info-explication" }, [
                e._v(" " + e._s(e.$t("cms.labels.review_category")) + " "),
              ]),
            ]),
            n("div", { staticClass: "right-info" }, [
              n(
                "button",
                {
                  staticClass: "btn-submit mt-4",
                  on: {
                    click: function (t) {
                      return e.edit();
                    },
                  },
                },
                [e._v(" " + e._s(e.$t("cms.cta.edit_category")) + " ")]
              ),
            ]),
          ]),
        ]);
      },
      a = [];
  },
  "73a7": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("143d"),
      a = n("ea04");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "aadc42a2",
        null
      );
    t["default"] = s.exports;
  },
  "7ee4": function (e, t, n) {
    e.exports = n.p + "img/diamond.f925a253.png";
  },
  8059: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("6354"),
      a = n("27f0");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "65c8fef5",
        null
      );
    t["default"] = s.exports;
  },
  "80ae": function (e, t, n) {},
  8118: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("20f9"),
      a = n("f225");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    n("f7fe");
    var o = n("2877"),
      s = Object(o["a"])(a["default"], r["a"], r["b"], !1, null, null, null);
    t["default"] = s.exports;
  },
  8123: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("ce76"),
      a = n("d26f");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "8000ac6c",
        null
      );
    t["default"] = s.exports;
  },
  "844a": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "container mx-auto", attrs: { id: "tasks-menu" } },
          [
            n("div", { staticClass: "branding sticky top-0" }, [
              n(
                "h1",
                {
                  staticClass:
                    "font-black tracking-wide text-white-300 text-2xl",
                },
                [e._v(" " + e._s(e.$t("titles.main")) + " ")]
              ),
            ]),
            n(
              "nav",
              { staticClass: "task-menu-nav top mt-4" },
              e._l(e.nav, function (t, r) {
                return n(
                  "router-link",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: t.actif,
                        expression: "link.actif",
                      },
                    ],
                    key: "nav-" + r,
                    staticClass:
                      "text-gray-200 font-extrabold text-md menu-nav-links",
                    attrs: { to: { path: t.href } },
                    on: {
                      click: function (t) {
                        e.selected = r;
                      },
                    },
                  },
                  [
                    n("span", {
                      staticClass: "w-8 h-8 p-1 mr-2",
                      class: { "mr-4": e.isEnlarge },
                      domProps: {
                        innerHTML: e._s(
                          e.selected == r ? t.selectedIcon : t.icon
                        ),
                      },
                    }),
                    n("span", { staticClass: "font-medium select-none" }, [
                      e._v(e._s(t.text)),
                    ]),
                  ]
                );
              }),
              1
            ),
            n(
              "nav",
              { staticClass: "task-menu-nav bottom" },
              [
                n(
                  "router-link",
                  {
                    staticClass: "text-gray-400 menu-nav-links",
                    attrs: { to: "/cms/settings" },
                  },
                  [
                    n("span", { staticClass: "w-8 h-8 p-1 mr-2" }, [
                      n(
                        "svg",
                        {
                          attrs: {
                            fill: "white",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 100 100",
                            width: "20",
                            height: "20",
                          },
                        },
                        [
                          n("path", {
                            attrs: {
                              d:
                                "M82.4 56.494l-3.9-2.4c.1-1.2.2-2.3.2-3.5v-.5l4.1-2c2.6-1.3 3.7-4.4 2.4-7l-6-12.4c-1.2-2.5-4.5-3.7-7-2.4l-4.1 2c-1.9-1.6-4-2.9-6.2-3.9v-4.6c0-2.9-2.4-5.3-5.3-5.3H42.8c-2.9 0-5.3 2.4-5.3 5.3v4.6c-1.3.6-2.6 1.3-3.8 2.1l-3.9-2.4c-2.4-1.5-5.8-.7-7.2 1.7l-7.3 11.8c-.7 1.2-1 2.6-.6 4 .3 1.4 1.2 2.5 2.4 3.3l3.9 2.4c-.1 1.2-.2 2.3-.2 3.5v.5l-4.1 2c-2.6 1.3-3.7 4.4-2.4 7l6 12.4c1.2 2.5 4.5 3.7 7 2.4l4.1-2c1.9 1.6 4 2.9 6.2 3.9v4.6c0 2.9 2.4 5.3 5.3 5.3h13.8c2.9 0 5.3-2.4 5.3-5.3v-4.6c1.3-.6 2.6-1.3 3.8-2.1l3.9 2.4c.8.5 1.8.8 2.8.8 1.8 0 3.5-.9 4.5-2.5l7.3-11.8c.7-1.2 1-2.6.6-4-.5-1.4-1.3-2.5-2.5-3.3zm-10.8-8.1c.1.8.1 1.5.1 2.3 0 1.2-.1 2.4-.3 3.5-.3 2.1.6 4.2 2.4 5.3l3.4 2.1-5.4 8.8-3.4-2.1c-1.8-1.1-4.1-1-5.8.2-1.4 1-2.9 1.8-4.4 2.5-2 .8-3.3 2.7-3.3 4.8v4H44.6v-4c0-2.1-1.3-4-3.3-4.8-2.3-.9-4.4-2.3-6.2-3.9-1.6-1.4-3.9-1.7-5.8-.8l-3.6 1.7-4.5-9.3 6.8-3.3-.3-2.4c-.1-.8-.1-1.5-.1-2.3 0-1.2.1-2.4.3-3.5.3-2.1-.6-4.2-2.4-5.3l-3.4-2.1 5.4-8.8 3.4 2.1c1.8 1.1 4.1 1 5.8-.2 1.4-1 2.9-1.8 4.4-2.5 2-.8 3.3-2.7 3.3-4.8v-4h10.3v4c0 2.1 1.3 4 3.3 4.8 2.3.9 4.4 2.3 6.2 3.9 1.6 1.4 3.9 1.7 5.8.8l3.6-1.7 4.5 9.3-6.8 3.3z",
                            },
                          }),
                          n("path", {
                            attrs: {
                              d:
                                "M49.7 35.194c-8.5 0-15.5 6.9-15.5 15.5s6.9 15.5 15.5 15.5 15.5-7 15.5-15.6-6.9-15.4-15.5-15.4zm0 23.9c-4.7 0-8.5-3.8-8.5-8.5s3.8-8.5 8.5-8.5 8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5z",
                            },
                          }),
                        ]
                      ),
                    ]),
                    n("span", { staticClass: "font-medium select-none" }, [
                      e._v(e._s(e.$t("cms.menu.settings"))),
                    ]),
                  ]
                ),
                n("div", { staticClass: "inline-block relative w-5/6" }, [
                  n(
                    "select",
                    {
                      staticClass:
                        "block w-full appearance-none text-gray-500 text-xs bg-white border border-green-400 hover:border-green-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",
                      on: {
                        change: function (t) {
                          return e.onChangeLanguage(t);
                        },
                      },
                    },
                    [
                      n("option", { attrs: { value: "none" } }, [
                        e._v("Langue..."),
                      ]),
                      e._l(e.languages, function (t) {
                        return n("option", { key: t, domProps: { value: t } }, [
                          e._v(" " + e._s(t) + " "),
                        ]);
                      }),
                    ],
                    2
                  ),
                  n(
                    "div",
                    {
                      staticClass:
                        "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",
                    },
                    [
                      n(
                        "svg",
                        {
                          staticClass: "fill-current h-4 w-4",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                          },
                        },
                        [
                          n("path", {
                            attrs: {
                              d:
                                "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z",
                            },
                          }),
                        ]
                      ),
                    ]
                  ),
                ]),
              ],
              1
            ),
          ]
        );
      },
      a = [];
  },
  "85e1": function (e, t, n) {},
  "8bbc": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "p-2 pr-4" },
          [
            n("PageTitles", { attrs: { title: e.title } }),
            n("Actions", {
              attrs: { buttons: e.links },
              on: {
                action: function (t) {
                  return e.handleClick(t);
                },
              },
            }),
            n("EditCategoryForm", {
              attrs: { categoryId: e.categoryId },
              on: {
                changeName: function (t) {
                  return e.updatePageName(t);
                },
              },
            }),
            n("CMSModal", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: e.isModalVisible,
                  expression: "isModalVisible",
                },
              ],
              on: {
                close: function (t) {
                  return e.closeModal();
                },
              },
              scopedSlots: e._u([
                {
                  key: "header",
                  fn: function () {
                    return [e._v(" Supprimer cette catégorie ")];
                  },
                  proxy: !0,
                },
                {
                  key: "body",
                  fn: function () {
                    return [
                      n("p", [
                        e._v(
                          " Êtes-vous certain de vouloir supprimer la catégorie : " +
                            e._s(e.categoryId) +
                            " ? "
                        ),
                      ]),
                    ];
                  },
                  proxy: !0,
                },
                {
                  key: "footer",
                  fn: function () {
                    return [
                      n(
                        "div",
                        {
                          staticClass: "flex flex-row flex-wrap justify-center",
                        },
                        [
                          n(
                            "button",
                            {
                              staticClass:
                                "btn-actions danger w-40 align-center",
                              on: {
                                click: function (t) {
                                  return e.confirmDelete();
                                },
                              },
                            },
                            [e._v(" Supprimer ")]
                          ),
                          n(
                            "button",
                            {
                              staticClass: "btn-actions gray w-40 align-center",
                              on: {
                                click: function (t) {
                                  return e.closeModal();
                                },
                              },
                            },
                            [e._v(" Cancel ")]
                          ),
                        ]
                      ),
                    ];
                  },
                  proxy: !0,
                },
              ]),
            }),
          ],
          1
        );
      },
      a = [];
  },
  "8bce": function (e, t, n) {
    "use strict";
    n("6de7");
  },
  "8c1d": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("da8e"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  "8d89": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("1498"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  "8dce": function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("ed6d").default,
      i = n("2d0d").default;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = n("9ab4"),
      s = n("1b40"),
      u = (function (e) {
        a(n, e);
        var t = i(n);
        function n() {
          return r(this, n), t.apply(this, arguments);
        }
        return n;
      })(s.Vue);
    (u = o.__decorate([s.Component({ components: {} })], u)), (t.default = u);
  },
  "8e54": function (e, t, n) {
    "use strict";
    n("648e");
  },
  "915e": function (e, t, n) {
    e.exports = n.p + "img/ruby.e244f827.png";
  },
  9355: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("f28b"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  9418: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "flex flex-row flex-wrap flex-space-between pt-3" },
          [
            n(
              "div",
              {
                staticClass:
                  "text-right flex flex-row flex-wrap flex-space-between",
              },
              [
                n(
                  "div",
                  { staticClass: "ml-auto pr-5" },
                  [
                    n("font-awesome-icon", {
                      staticClass: "mr-3",
                      attrs: { icon: "fa-solid fa-user" },
                    }),
                    n("span", { staticClass: "text-white" }, [
                      e._v(e._s(e.name)),
                    ]),
                  ],
                  1
                ),
              ]
            ),
          ]
        );
      },
      a = [];
  },
  "94a7": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("362b"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  "94d0": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("530d"),
      a = n("682e");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    n("df65");
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "19fef13c",
        null
      );
    t["default"] = s.exports;
  },
  "96e6": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("7210"),
      a = n("94a7");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "62916104",
        null
      );
    t["default"] = s.exports;
  },
  "987d": function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("ed6d").default,
      i = n("2d0d").default;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = n("9ab4"),
      s = n("1b40"),
      u = o.__importDefault(n("f16d")),
      c = (function (e) {
        a(n, e);
        var t = i(n);
        function n() {
          return r(this, n), t.apply(this, arguments);
        }
        return n;
      })(s.Vue);
    (c = o.__decorate(
      [s.Component({ components: { ProductCard: u.default } })],
      c
    )),
      (t.default = c);
  },
  "98aa": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("30bb"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  "9d20": function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("ed6d").default,
      i = n("2d0d").default;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = n("9ab4"),
      s = n("1b40"),
      u = o.__importDefault(n("f16d")),
      c = (function (e) {
        a(n, e);
        var t = i(n);
        function n() {
          return r(this, n), t.apply(this, arguments);
        }
        return n;
      })(s.Vue);
    (c = o.__decorate(
      [s.Component({ components: { ProductCard: u.default } })],
      c
    )),
      (t.default = c);
  },
  a29f: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("265e"),
      a = n("0afd");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "d0e8720a",
        null
      );
    t["default"] = s.exports;
  },
  a329: function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("ed6d").default,
      i = n("2d0d").default;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = n("9ab4"),
      s = n("1b40"),
      u = (function (e) {
        a(n, e);
        var t = i(n);
        function n() {
          return r(this, n), t.apply(this, arguments);
        }
        return n;
      })(s.Vue);
    (u = o.__decorate([s.Component], u)), (t.default = u);
  },
  a443: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("af8c"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  a485: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("09d7"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  a658: function (e, t, n) {},
  a7ee: function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("ed6d").default,
      i = n("2d0d").default;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = n("9ab4"),
      s = n("1b40"),
      u = o.__importDefault(n("3654")),
      c = o.__importDefault(n("3dbc")),
      l = o.__importDefault(n("6fca")),
      d = o.__importDefault(n("e072")),
      f = (function (e) {
        a(n, e);
        var t = i(n);
        function n() {
          return r(this, n), t.apply(this, arguments);
        }
        return n;
      })(s.Vue);
    (f = o.__decorate(
      [
        s.Component({
          components: {
            User: u.default,
            Admin: c.default,
            Products: l.default,
            Categories: d.default,
          },
        }),
      ],
      f
    )),
      (t.default = f);
  },
  a892: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "background-login" }, [
          n(
            "div",
            {
              staticClass:
                "flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white",
              attrs: { id: "login-form" },
            },
            [
              n("div", { staticClass: "max-w-md w-full space-y-8" }, [
                n("div", [
                  n("h1", { staticClass: "page-title text-4xl" }, [
                    e._v("RUBYDOR"),
                  ]),
                  n(
                    "h2",
                    {
                      staticClass:
                        "mt-6 text-center text-2xl font-extrabold text-gray-900",
                    },
                    [e._v(" " + e._s(e.$t("login.sign_account")) + " ")]
                  ),
                ]),
                n("div", { staticClass: "mt-8 space-y-6" }, [
                  n("input", {
                    attrs: { type: "hidden", name: "remember", value: "true" },
                  }),
                  n(
                    "div",
                    { staticClass: "rounded-md shadow-sm -space-y-px" },
                    [
                      n("div", [
                        n(
                          "label",
                          {
                            staticClass: "sr-only",
                            attrs: { for: "email-address" },
                          },
                          [e._v(e._s(e.$t("login.email")))]
                        ),
                        n("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: e.email,
                              expression: "email",
                            },
                          ],
                          staticClass:
                            "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm",
                          attrs: {
                            id: "email-address",
                            name: "email",
                            type: "email",
                            autocomplete: "email",
                            required: "",
                            placeholder: e.$t("login.email"),
                          },
                          domProps: { value: e.email },
                          on: {
                            input: function (t) {
                              t.target.composing || (e.email = t.target.value);
                            },
                          },
                        }),
                      ]),
                      n("div", [
                        n(
                          "label",
                          {
                            staticClass: "sr-only",
                            attrs: { for: "password" },
                          },
                          [e._v(e._s(e.$t("login.password")))]
                        ),
                        n("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: e.password,
                              expression: "password",
                            },
                          ],
                          staticClass:
                            "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm",
                          attrs: {
                            id: "password",
                            name: "password",
                            type: "password",
                            autocomplete: "current-password",
                            required: "",
                            placeholder: e.$t("login.password"),
                          },
                          domProps: { value: e.password },
                          on: {
                            input: function (t) {
                              t.target.composing ||
                                (e.password = t.target.value);
                            },
                          },
                        }),
                      ]),
                    ]
                  ),
                  n(
                    "div",
                    { staticClass: "flex items-center justify-between" },
                    [
                      n("div", { staticClass: "flex items-center" }, [
                        n("input", {
                          staticClass:
                            "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded",
                          attrs: {
                            id: "remember-me",
                            name: "remember-me",
                            type: "checkbox",
                          },
                        }),
                        n(
                          "label",
                          {
                            staticClass: "ml-2 block text-sm text-gray-900",
                            attrs: { for: "remember-me" },
                          },
                          [e._v(" " + e._s(e.$t("login.remember_me")) + " ")]
                        ),
                      ]),
                      n("div", { staticClass: "text-sm" }, [
                        n(
                          "a",
                          {
                            staticClass:
                              "font-medium text-green-600 hover:text-green-500",
                            attrs: { href: "#" },
                          },
                          [
                            e._v(
                              " " + e._s(e.$t("login.forget_password")) + " "
                            ),
                          ]
                        ),
                      ]),
                    ]
                  ),
                  n("div", [
                    n(
                      "button",
                      {
                        staticClass:
                          "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",
                        attrs: { type: "submit" },
                        on: {
                          click: function (t) {
                            return e.adminLogin();
                          },
                        },
                      },
                      [
                        n(
                          "span",
                          {
                            staticClass:
                              "absolute left-0 inset-y-0 flex items-center pl-3",
                          },
                          [
                            n(
                              "svg",
                              {
                                staticClass:
                                  "h-5 w-5 text-green-800 group-hover:text-green-400",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  "aria-hidden": "true",
                                },
                              },
                              [
                                n("path", {
                                  attrs: {
                                    "fill-rule": "evenodd",
                                    d:
                                      "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
                                    "clip-rule": "evenodd",
                                  },
                                }),
                              ]
                            ),
                          ]
                        ),
                        e._v(" " + e._s(e.$t("login.signin")) + " "),
                      ]
                    ),
                    "" != e.error && "undefined" != e.error
                      ? n(
                          "div",
                          {
                            staticClass:
                              "mt-2 space-y-3 text-sm text-center text-red-800",
                          },
                          [e._v(" " + e._s(e.error) + " ")]
                        )
                      : e._e(),
                  ]),
                ]),
              ]),
            ]
          ),
        ]);
      },
      a = [];
  },
  a985: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n("9ab4"),
      a = r.__importDefault(n("2b0e")),
      i = r.__importDefault(n("8c4f")),
      o = r.__importDefault(n("3188")),
      s = r.__importDefault(n("bee3")),
      u = r.__importDefault(n("a29f")),
      c = r.__importDefault(n("4937")),
      l = r.__importDefault(n("4ca1")),
      d = r.__importDefault(n("8118")),
      f = r.__importDefault(n("c101")),
      p = r.__importDefault(n("6c00")),
      m = r.__importDefault(n("73a7")),
      v = r.__importDefault(n("4891")),
      h = r.__importDefault(n("b4c9")),
      _ = r.__importDefault(n("8059")),
      b = r.__importDefault(n("b1b2")),
      g = r.__importDefault(n("1855")),
      w = r.__importDefault(n("51d2")),
      y = r.__importDefault(n("6837"));
    a.default.use(i.default);
    var C = [
        {
          path: "/",
          name: "TestPage",
          components: { default: l.default, header: u.default },
        },
        {
          path: "/store",
          components: { default: c.default, header: u.default },
          children: [
            { path: "/boutique", alias: "boutique", name: "boutique" },
          ],
        },
        {
          path: "/cms",
          components: { default: d.default },
          children: [
            {
              path: "/",
              alias: "/dashboard",
              name: "dashboard",
              component: s.default,
            },
            { path: "products", name: "list-products", component: p.default },
            { path: "add-products", name: "add-product", component: m.default },
            {
              path: "products/edit/:productId",
              name: "edit-product",
              component: v.default,
            },
            {
              path: "categories",
              name: "list-categories",
              component: h.default,
            },
            {
              path: "add-categories",
              name: "add-categories",
              component: _.default,
            },
            {
              path: "categories/edit/:categoryId",
              name: "edit-categories",
              component: b.default,
            },
            { path: "admin", name: "list-admin", component: g.default },
            { path: "add-admin", name: "add-admin", component: w.default },
            {
              path: "admin/edit/:adminId",
              name: "edit-admin",
              component: y.default,
            },
          ],
        },
        {
          path: "/cms/login",
          name: "login",
          alias: "/cms-login",
          component: f.default,
        },
        {
          path: "/home",
          name: "Homepage",
          components: { default: c.default, header: u.default },
        },
        { path: "/register", name: "register", component: o.default },
        { path: "/about", name: "about", component: o.default },
        {
          path: "/settings",
          component: o.default,
          children: [
            { path: "emails", component: o.default },
            {
              path: "profile",
              components: { default: o.default, helper: o.default },
              meta: { can: "approuver", fail: "/" },
            },
          ],
        },
      ],
      k = new i.default({ mode: "history", base: "/", routes: C });
    t.default = k;
  },
  aae4: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", [
          n("h2", [e._v("Products")]),
          e._v(" GET ONE PRODUCT "),
          n(
            "button",
            {
              staticClass: "btn btn-blue",
              on: {
                click: function (t) {
                  return e.fetchProd();
                },
              },
            },
            [e._v("Get Product")]
          ),
          n("br"),
          n("br"),
          e._v(" GET ALL PRODUCTS "),
          n(
            "button",
            {
              staticClass: "btn btn-blue",
              on: {
                click: function (t) {
                  return e.fetchAllProd();
                },
              },
            },
            [e._v("Get Product")]
          ),
          n("br"),
          n("br"),
          e._v(" Find a product "),
          n(
            "button",
            {
              staticClass: "btn btn-blue",
              on: {
                click: function (t) {
                  return e.findProd();
                },
              },
            },
            [e._v("Find Product")]
          ),
          n("br"),
          n("br"),
          e._v(" POST "),
          n(
            "button",
            {
              staticClass: "btn btn-blue",
              on: {
                click: function (t) {
                  return e.addProd();
                },
              },
            },
            [e._v("Add Product")]
          ),
          n("br"),
          n("br"),
          e._v(" DELETE "),
          n(
            "button",
            {
              staticClass: "btn btn-blue",
              on: {
                click: function (t) {
                  return e.deleteProd();
                },
              },
            },
            [e._v("Delete Product")]
          ),
        ]);
      },
      a = [];
  },
  ab72: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "p-2 pr-4" },
          [
            n("PageTitles", { attrs: { title: e.titlePage } }),
            n("Actions", {
              attrs: { buttons: e.links },
              on: {
                action: function (t) {
                  return e.handleClick(t);
                },
              },
            }),
            "thumbnail" === e.visibleSection
              ? n("ThumbnailPage", { attrs: { productId: e.productId } })
              : "page" === e.visibleSection
              ? n("PreviewPage", { attrs: { productId: e.productId } })
              : n("EditProductsForm", {
                  attrs: { productId: e.productId },
                  on: {
                    updatePage: function (t) {
                      return e.updatePage(t);
                    },
                  },
                }),
            n("CMSModal", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: e.isModalVisible,
                  expression: "isModalVisible",
                },
              ],
              on: {
                close: function (t) {
                  return e.closeModal();
                },
              },
              scopedSlots: e._u([
                {
                  key: "header",
                  fn: function () {
                    return [
                      e._v(
                        " " + e._s(e.$t("cms.labels.delete_product")) + " ? "
                      ),
                    ];
                  },
                  proxy: !0,
                },
                {
                  key: "body",
                  fn: function () {
                    return [
                      n("p", [
                        e._v(
                          " " +
                            e._s(e.$t("cms.labels.confirm_delete_product")) +
                            ": "
                        ),
                        n("strong", [e._v(e._s(e.title))]),
                        e._v(" ? "),
                      ]),
                    ];
                  },
                  proxy: !0,
                },
                {
                  key: "footer",
                  fn: function () {
                    return [
                      n(
                        "div",
                        {
                          staticClass: "flex flex-row flex-wrap justify-center",
                        },
                        [
                          n(
                            "button",
                            {
                              staticClass:
                                "btn-actions danger w-40 align-center",
                              on: {
                                click: function (t) {
                                  return e.confirmDelete();
                                },
                              },
                            },
                            [e._v(" Supprimer ")]
                          ),
                          n(
                            "button",
                            {
                              staticClass: "btn-actions gray w-40 align-center",
                              on: {
                                click: function (t) {
                                  return e.closeModal();
                                },
                              },
                            },
                            [e._v(" Cancel ")]
                          ),
                        ]
                      ),
                    ];
                  },
                  proxy: !0,
                },
              ]),
            }),
          ],
          1
        );
      },
      a = [];
  },
  af8c: function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    n("96cf"), Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("1b40"),
      c = s.__importDefault(n("e4c6")),
      l = n("d86a"),
      d = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          var e;
          return (
            r(this, n),
            (e = t.apply(this, arguments)),
            (e.isLoaded = !1),
            (e.notFound = !1),
            (e.selected = []),
            e
          );
        }
        return (
          a(n, [
            {
              key: "fetchProd",
              value: function () {
                return s.__awaiter(
                  this,
                  void 0,
                  void 0,
                  regeneratorRuntime.mark(function e() {
                    var t = this;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              l.getProduct(this.productId)
                                .then(function (e) {
                                  t.$nextTick(function () {
                                    (this.product = e),
                                      (this.isLoaded = !0),
                                      (this.selected = this.product.categories),
                                      this.$emit("updatePage", e);
                                  });
                                })
                                .catch(function (e) {
                                  (t.isLoaded = !0), (t.notFound = !0);
                                });
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "mounted",
              value: function () {
                this.fetchProd(), this.$parent.$emit("notifications");
              },
            },
            {
              key: "editProd",
              value: function () {
                return s.__awaiter(
                  this,
                  void 0,
                  void 0,
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (this.product.categories = this.selected),
                                l
                                  .editProduct(this.product)
                                  .then(function (e) {
                                    alert("done");
                                  })
                                  .catch(function (e) {
                                    return console.error("Error:", e);
                                  });
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "updateSelected",
              value: function (e) {
                this.selected = e;
              },
            },
          ]),
          n
        );
      })(u.Vue);
    s.__decorate(
      [u.Prop(), s.__metadata("design:type", String)],
      d.prototype,
      "productId",
      void 0
    ),
      (d = s.__decorate(
        [u.Component({ components: { CategoryChoices: c.default } })],
        d
      )),
      (t.default = d);
  },
  b100: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("2027"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  b1b2: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("8bbc"),
      a = n("9355");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "83cd3aee",
        null
      );
    t["default"] = s.exports;
  },
  b293: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("transition", { attrs: { name: "modal-fade" } }, [
          n("div", { staticClass: "modal-backdrop" }, [
            n(
              "div",
              {
                staticClass: "modal",
                attrs: {
                  role: "dialog",
                  "aria-labelledby": "modalTitle",
                  "aria-describedby": "modalDescription",
                },
              },
              [
                n(
                  "header",
                  { staticClass: "modal-header", attrs: { id: "modalTitle" } },
                  [
                    e._t("header", [e._v(" Title ")]),
                    n(
                      "button",
                      {
                        staticClass: "btn-close",
                        attrs: { type: "button", "aria-label": "Close modal" },
                        on: { click: e.close },
                      },
                      [e._v(" x ")]
                    ),
                  ],
                  2
                ),
                n(
                  "section",
                  {
                    staticClass: "modal-body",
                    attrs: { id: "modalDescription" },
                  },
                  [e._t("body", [e._v(" Body ")])],
                  2
                ),
                n(
                  "footer",
                  { staticClass: "modal-footer" },
                  [e._t("footer", [e._v(" Footer ")])],
                  2
                ),
              ]
            ),
          ]),
        ]);
      },
      a = [];
  },
  b3c5: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "product-wrapper" },
          [
            n("ProductCard"),
            n("ProductCard"),
            n("ProductCard"),
            n("ProductCard"),
            n("ProductCard"),
            n("ProductCard"),
            n("ProductCard"),
            n("ProductCard"),
            n("ProductCard"),
            n("ProductCard"),
            n("ProductCard"),
            n("ProductCard"),
          ],
          1
        );
      },
      a = [];
  },
  b4c9: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("d9e5"),
      a = n("e417");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "f2e4b3e6",
        null
      );
    t["default"] = s.exports;
  },
  b72c: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("a7ee"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  b852: function (e, t, n) {
    "use strict";
    n("85e1");
  },
  be96: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("f36f"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  bee3: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("38dd"),
      a = n("b72c");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    var o = n("2877"),
      s = Object(o["a"])(a["default"], r["a"], r["b"], !1, null, null, null);
    t["default"] = s.exports;
  },
  bef0: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("10f7"),
      a = n("f8ad");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "e8880c74",
        null
      );
    t["default"] = s.exports;
  },
  bf1a: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("4765"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  c101: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("a892"),
      a = n("6cf7");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    n("8e54");
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "1e921ce4",
        null
      );
    t["default"] = s.exports;
  },
  c1aa: function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    n("96cf"), Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("1b40"),
      c = n("60e1"),
      l = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          var e;
          return (
            r(this, n),
            (e = t.apply(this, arguments)),
            (e.isLoaded = !1),
            (e.categories = null),
            e
          );
        }
        return (
          a(n, [
            {
              key: "fetchCat",
              value: function () {
                return s.__awaiter(
                  this,
                  void 0,
                  void 0,
                  regeneratorRuntime.mark(function e() {
                    var t = this;
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            c.getCategory("7832yz")
                              .then(function (e) {
                                t.$nextTick(function () {
                                  console.log(e);
                                });
                              })
                              .catch(function (e) {
                                return console.error("(1) Outside error:", e);
                              });
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
              },
            },
            {
              key: "fetchCategories",
              value: function () {
                return s.__awaiter(
                  this,
                  void 0,
                  void 0,
                  regeneratorRuntime.mark(function e() {
                    var t = this;
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            c.getAllCategories()
                              .then(function (e) {
                                console.log(e),
                                  t.$nextTick(function () {
                                    (this.categories = e), (this.isLoaded = !0);
                                  });
                              })
                              .catch(function (e) {
                                return console.error("(1) Outside error:", e);
                              });
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
              },
            },
            {
              key: "addCat",
              value: function () {
                return s.__awaiter(
                  this,
                  void 0,
                  void 0,
                  regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (t = {
                              name: "category test 321",
                              description:
                                "Une description assez longue eeeeeeeeeeeeeeee",
                            }),
                              c
                                .addCategory(t)
                                .then(function (e) {
                                  console.log(e);
                                })
                                .catch(function (e) {
                                  return console.error("(1) Outside error:", e);
                                });
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
              },
            },
            {
              key: "deleteCat",
              value: function () {
                return s.__awaiter(
                  this,
                  void 0,
                  void 0,
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            c.deleteCategory("762b47")
                              .then(function (e) {
                                console.log(e);
                              })
                              .catch(function (e) {
                                return console.error("(1) Outside error:", e);
                              });
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
              },
            },
          ]),
          n
        );
      })(u.Vue);
    (l = s.__decorate([u.Component], l)), (t.default = l);
  },
  c1c2: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("987d"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  c2cb: function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default;
    n("b0c0"), Object.defineProperty(t, "__esModule", { value: !0 });
    var i = (function () {
      function e(t) {
        r(this, e), (this.id = t.id || this.id), (this.name = t.name);
      }
      return (
        a(e, [
          {
            key: "capitalize",
            value: function () {
              return this.name.toUpperCase();
            },
          },
        ]),
        e
      );
    })();
    t.default = i;
  },
  c63b: function (e, t, n) {
    e.exports = n.p + "img/default.6b5212ff.png";
  },
  c809: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("6d49"),
      a = n("a443");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "6cfe2fc2",
        null
      );
    t["default"] = s.exports;
  },
  c88b: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", [
          n("h2", [e._v("USER")]),
          n(
            "button",
            {
              staticClass: "btn btn-grey",
              on: {
                click: function (t) {
                  return e.login();
                },
              },
            },
            [e._v("LOGIN")]
          ),
          n("br"),
          n("br"),
          n(
            "button",
            {
              staticClass: "btn btn-grey",
              on: {
                click: function (t) {
                  return e.register();
                },
              },
            },
            [e._v("Register")]
          ),
        ]);
      },
      a = [];
  },
  c9c9: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("6a6c"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  cabf: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", [
          n("h2", [e._v("ADMIN")]),
          n(
            "button",
            {
              staticClass: "btn btn-grey",
              on: {
                click: function (t) {
                  return e.login();
                },
              },
            },
            [e._v("LOGIN - ADMIN")]
          ),
          n("br"),
          n("br"),
          n(
            "button",
            {
              staticClass: "btn btn-grey",
              on: {
                click: function (t) {
                  return e.register();
                },
              },
            },
            [e._v("Register")]
          ),
        ]);
      },
      a = [];
  },
  cc8b: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", [
          n("h2", [e._v("Category")]),
          e._v(" GET ALL "),
          n(
            "button",
            {
              staticClass: "btn btn-blue",
              on: {
                click: function (t) {
                  return e.fetchCategories();
                },
              },
            },
            [e._v(" Get All Categories ")]
          ),
          n("br"),
          n("br"),
          e._v(" GET ONE "),
          n(
            "button",
            {
              staticClass: "btn btn-blue",
              on: {
                click: function (t) {
                  return e.fetchCat();
                },
              },
            },
            [e._v("Get One Category")]
          ),
          n("br"),
          n("br"),
          e._v(" POST "),
          n(
            "button",
            {
              staticClass: "btn btn-blue",
              on: {
                click: function (t) {
                  return e.addCat();
                },
              },
            },
            [e._v("Add Category")]
          ),
        ]);
      },
      a = [];
  },
  ce76: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "cms-form-container" }, [
          n("div", { staticClass: "row-with-info" }, [
            n("div", { staticClass: "left-info" }, [
              n("span", { staticClass: "info-title" }, [
                e._v(" " + e._s(e.$t("general.generals")) + " "),
              ]),
              n("span", { staticClass: "info-explication" }, [
                e._v(" " + e._s(e.$t("cms.labels.category_info")) + " "),
              ]),
            ]),
            n("div", { staticClass: "right-info" }, [
              n("div", [
                n("div", { staticClass: "info-form-row" }, [
                  n("div", { staticClass: "info-form-items" }, [
                    n("label", { attrs: { for: "name" } }, [
                      e._v(" " + e._s(e.$t("labels.name"))),
                      n("sup", [e._v("*")]),
                    ]),
                    n("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.category.name,
                          expression: "category.name",
                        },
                      ],
                      attrs: {
                        id: "name",
                        type: "text",
                        placeholder: e.$t("labels.name") + "...",
                      },
                      domProps: { value: e.category.name },
                      on: {
                        input: function (t) {
                          t.target.composing ||
                            e.$set(e.category, "name", t.target.value);
                        },
                      },
                    }),
                  ]),
                  n("div", { staticClass: "info-form-items" }, [
                    n("label", { attrs: { for: "description" } }, [
                      e._v(" " + e._s(e.$t("labels.description"))),
                      n("sup", [e._v("*")]),
                    ]),
                    n("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.category.description,
                          expression: "category.description",
                        },
                      ],
                      attrs: {
                        id: "description",
                        placeholder: e.$t("labels.description") + "...",
                      },
                      domProps: { value: e.category.description },
                      on: {
                        input: function (t) {
                          t.target.composing ||
                            e.$set(e.category, "description", t.target.value);
                        },
                      },
                    }),
                  ]),
                ]),
              ]),
            ]),
          ]),
          n("div", { staticClass: "row-with-info" }, [
            n("div", { staticClass: "left-info" }, [
              n("span", { staticClass: "info-title" }, [
                e._v(" " + e._s(e.$t("general.revision")) + " "),
              ]),
              n("span", { staticClass: "info-explication" }, [
                e._v(" " + e._s(e.$t("cms.labels.review_category")) + " "),
              ]),
            ]),
            n("div", { staticClass: "right-info" }, [
              n(
                "button",
                {
                  staticClass: "btn-submit mt-4",
                  on: {
                    click: function (t) {
                      return e.add();
                    },
                  },
                },
                [e._v(" " + e._s(e.$t("cms.cta.add_category")) + " ")]
              ),
            ]),
          ]),
        ]);
      },
      a = [];
  },
  d26f: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("ebbd"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  d407: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "p-2 pr-4" },
          [
            n("PageTitles", { attrs: { title: e.$t("general.admins") } }),
            n("Actions", {
              attrs: { buttons: e.links },
              on: {
                action: function (t) {
                  return e.handleClick(t);
                },
              },
            }),
            n("AddAdminForm"),
          ],
          1
        );
      },
      a = [];
  },
  d53f: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "flex flex-wrap flex-row flex-grow-0" },
          e._l(e.categories, function (t) {
            return n("div", { key: t.categoryId, staticClass: "mr-4" }, [
              n("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: e.checkedCategories,
                    expression: "checkedCategories",
                  },
                ],
                attrs: { type: "checkbox", id: t.categoryId, name: t.name },
                domProps: {
                  value: t._id,
                  checked: t.selected,
                  checked: Array.isArray(e.checkedCategories)
                    ? e._i(e.checkedCategories, t._id) > -1
                    : e.checkedCategories,
                },
                on: {
                  change: [
                    function (n) {
                      var r = e.checkedCategories,
                        a = n.target,
                        i = !!a.checked;
                      if (Array.isArray(r)) {
                        var o = t._id,
                          s = e._i(r, o);
                        a.checked
                          ? s < 0 && (e.checkedCategories = r.concat([o]))
                          : s > -1 &&
                            (e.checkedCategories = r
                              .slice(0, s)
                              .concat(r.slice(s + 1)));
                      } else e.checkedCategories = i;
                    },
                    function (t) {
                      return e.onChange(t);
                    },
                  ],
                },
              }),
              n(
                "label",
                { staticClass: "ml-2", attrs: { for: t.categoryId } },
                [e._v(e._s(t.name))]
              ),
            ]);
          }),
          0
        );
      },
      a = [];
  },
  d724: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n("9ab4"),
      a = r.__importDefault(n("bc3a"));
    t.default = function () {
      return a.default.create({ baseURL: "http://localhost:3001/api" });
    };
  },
  d86a: function (e, t, n) {
    "use strict";
    n("96cf"),
      n("d3b7"),
      Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.publishedProduct = t.deleteProduct = t.editProduct = t.addProduct = t.findProducts = t.getAllProducts = t.getProduct = void 0);
    var r = n("9ab4"),
      a = r.__importDefault(n("d724")),
      i = r.__importDefault(n("11a6"));
    function o(e) {
      return r.__awaiter(
        this,
        void 0,
        void 0,
        regeneratorRuntime.mark(function t() {
          return regeneratorRuntime.wrap(function (t) {
            while (1)
              switch ((t.prev = t.next)) {
                case 0:
                  return t.abrupt(
                    "return",
                    a
                      .default()
                      .get("/products/".concat(e))
                      .then(function (e) {
                        return e.data;
                      })
                      .catch(function (e) {
                        return Promise.reject(e);
                      })
                  );
                case 1:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      );
    }
    function s() {
      return r.__awaiter(
        this,
        void 0,
        void 0,
        regeneratorRuntime.mark(function e() {
          return regeneratorRuntime.wrap(function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    a
                      .default()
                      .get("/products/")
                      .then(function (e) {
                        return e.data;
                      })
                      .catch(function (e) {
                        return Promise.reject(e);
                      })
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
    }
    function u(e) {
      return r.__awaiter(
        this,
        void 0,
        void 0,
        regeneratorRuntime.mark(function t() {
          return regeneratorRuntime.wrap(function (t) {
            while (1)
              switch ((t.prev = t.next)) {
                case 0:
                  return t.abrupt(
                    "return",
                    a
                      .default()
                      .get("/products/find/".concat(e))
                      .then(function (e) {
                        return e.data;
                      })
                      .catch(function (e) {
                        return Promise.reject(e);
                      })
                  );
                case 1:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      );
    }
    function c(e) {
      return r.__awaiter(
        this,
        void 0,
        void 0,
        regeneratorRuntime.mark(function t() {
          return regeneratorRuntime.wrap(function (t) {
            while (1)
              switch ((t.prev = t.next)) {
                case 0:
                  return t.abrupt(
                    "return",
                    i
                      .default()
                      .post("/products", e)
                      .then(function (e) {
                        return e.data;
                      })
                      .catch(function (e) {
                        return Promise.reject(e);
                      })
                  );
                case 1:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      );
    }
    function l(e) {
      return r.__awaiter(
        this,
        void 0,
        void 0,
        regeneratorRuntime.mark(function t() {
          return regeneratorRuntime.wrap(function (t) {
            while (1)
              switch ((t.prev = t.next)) {
                case 0:
                  return t.abrupt(
                    "return",
                    i
                      .default()
                      .put("/products/".concat(e.productId), e)
                      .then(function (e) {
                        return e.data;
                      })
                      .catch(function (e) {
                        return Promise.reject(e);
                      })
                  );
                case 1:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      );
    }
    function d(e) {
      return r.__awaiter(
        this,
        void 0,
        void 0,
        regeneratorRuntime.mark(function t() {
          return regeneratorRuntime.wrap(function (t) {
            while (1)
              switch ((t.prev = t.next)) {
                case 0:
                  return t.abrupt(
                    "return",
                    i
                      .default()
                      .delete("/products/".concat(e))
                      .then(function (e) {
                        return e.data;
                      })
                      .catch(function (e) {
                        return Promise.reject(e);
                      })
                  );
                case 1:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      );
    }
    function f(e, t) {
      return r.__awaiter(
        this,
        void 0,
        void 0,
        regeneratorRuntime.mark(function n() {
          return regeneratorRuntime.wrap(function (n) {
            while (1)
              switch ((n.prev = n.next)) {
                case 0:
                  return n.abrupt(
                    "return",
                    i
                      .default()
                      .put("/products/update/".concat(e), { isPublished: t })
                      .then(function (e) {
                        return e.data;
                      })
                      .catch(function (e) {
                        return Promise.reject(e);
                      })
                  );
                case 1:
                case "end":
                  return n.stop();
              }
          }, n);
        })
      );
    }
    (t.getProduct = o),
      (t.getAllProducts = s),
      (t.findProducts = u),
      (t.addProduct = c),
      (t.editProduct = l),
      (t.deleteProduct = d),
      (t.publishedProduct = f);
  },
  d9af: function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    n("159b"), Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("1b40"),
      c = n("60e1"),
      l = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          var e;
          return (
            r(this, n),
            (e = t.apply(this, arguments)),
            (e.categories = []),
            (e.checkedCategories = []),
            e
          );
        }
        return (
          a(n, [
            {
              key: "mounted",
              value: function () {
                this.loadItems(), this.updatedSelectedCategories();
              },
            },
            {
              key: "loadItems",
              value: function () {
                var e = this;
                c.getAllCategories()
                  .then(function (t) {
                    e.$nextTick(function () {
                      var e = this;
                      t.forEach(function (t) {
                        Object.assign(Object.assign({}, t), { selected: !1 });
                        e.categories.push(t);
                      }),
                        this.updatedSelectedCategories();
                    });
                  })
                  .catch(function (e) {
                    return console.error("Errors : ", e);
                  });
              },
            },
            {
              key: "onChange",
              value: function (e) {
                this.$emit("onCheckedCategories", this.checkedCategories);
              },
            },
            {
              key: "onProductCategoriesLoaded",
              value: function (e) {
                this.selectedCategories = e;
              },
            },
            {
              key: "updatedSelectedCategories",
              value: function () {
                this.checkedCategories = this.selectedCategories;
              },
            },
          ]),
          n
        );
      })(u.Vue);
    s.__decorate(
      [u.Prop(), s.__metadata("design:type", Array)],
      l.prototype,
      "selectedCategories",
      void 0
    ),
      s.__decorate(
        [
          u.Watch("selectedCategories", { immediate: !0, deep: !0 }),
          s.__metadata("design:type", Function),
          s.__metadata("design:paramtypes", [Array]),
          s.__metadata("design:returntype", void 0),
        ],
        l.prototype,
        "onProductCategoriesLoaded",
        null
      ),
      (l = s.__decorate([u.Component({ components: {} })], l)),
      (t.default = l);
  },
  d9e5: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "p-2 pr-4" },
          [
            n("PageTitles", { attrs: { title: e.$t("general.categories") } }),
            n("Actions", {
              attrs: { buttons: e.links },
              on: {
                action: function (t) {
                  return e.handleClick(t);
                },
              },
            }),
            n("CategoryList", { staticClass: "mt-10" }),
          ],
          1
        );
      },
      a = [];
  },
  da8e: function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    n("b0c0"), Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("1b40"),
      c = n("037d"),
      l = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          var e;
          return r(this, n), (e = t.apply(this, arguments)), (e.name = ""), e;
        }
        return (
          a(n, [
            {
              key: "userName",
              get: function () {
                return console.log(c.userStore.name), c.userStore.name;
              },
            },
            {
              key: "mounted",
              value: function () {
                this.$nextTick(function () {
                  this.name = c.userStore.name;
                });
              },
            },
            {
              key: "clickme",
              value: function () {
                c.userStore.setUser({ firstName: "test", lastName: "Lol" }),
                  this.$nextTick(function () {
                    this.name = c.userStore.name;
                  });
              },
            },
          ]),
          n
        );
      })(u.Vue);
    (l = s.__decorate([u.Component], l)), (t.default = l);
  },
  dc22: function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    n("96cf"), n("159b"), Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("1b40"),
      c = n("3578"),
      l = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          var e;
          return (
            r(this, n),
            (e = t.apply(this, arguments)),
            (e.admin = {
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              passwordConfirmation: "",
            }),
            (e.errors = []),
            e
          );
        }
        return (
          a(n, [
            {
              key: "resetForm",
              value: function () {
                this.admin = {
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                  passwordConfirmation: "",
                };
              },
            },
            {
              key: "add",
              value: function () {
                return s.__awaiter(
                  this,
                  void 0,
                  void 0,
                  regeneratorRuntime.mark(function e() {
                    var t = this;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (this.errors = []),
                                c
                                  .registerAdmin(this.admin)
                                  .then(function (e) {
                                    console.log(e),
                                      e.confirm
                                        ? t.resetForm()
                                        : e.errorMsg.forEach(function (e) {
                                            var n = "errors.".concat(e);
                                            t.errors.push(String(t.$t(n)));
                                          });
                                  })
                                  .catch(function (e) {
                                    return console.error("Error:", e);
                                  });
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
              },
            },
          ]),
          n
        );
      })(u.Vue);
    (l = s.__decorate([u.Component({ components: {} })], l)), (t.default = l);
  },
  dd71: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("038c"),
      a = n("18ed");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "6d88df2a",
        null
      );
    t["default"] = s.exports;
  },
  df29: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("b3c5"),
      a = n("551d");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    n("8bce");
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "16c10a4f",
        null
      );
    t["default"] = s.exports;
  },
  df43: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("58e1"),
      a = n("0efb");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "7ac4289f",
        null
      );
    t["default"] = s.exports;
  },
  df64: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("9418"),
      a = n("8c1d");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "1b786e75",
        null
      );
    t["default"] = s.exports;
  },
  df65: function (e, t, n) {
    "use strict";
    n("80ae");
  },
  dfdb: function (e) {
    e.exports = JSON.parse(
      '{"buttons":{"edit":"Éditer","manage":"Gérer"},"cms":{"buttons":{"edit":"Éditer","manage":"Gérer","published":"Publié","unpublished":"Non-publié"},"cta":{"add_admin":"Ajouter un administrateur","add_category":"Ajouter une catégorie","all_category":"Voir toutes les catégories","delete_category":"Supprimez cette catégorie","consult_admins":"Voir tous les administrateurs","consult_table":"Consultez la tableau","edit_admin":"Mettre à jour cet administrateur","edit_category":"Modifier cette catégorie","refresh_page":"Rafraîchir"},"labels":{"category_info":"Remplissez les information générales sur la nouvelle catégorie","delete_product":"Supprimer ce produit","confirm_delete_product":"Êtes-vous certain de vouloir supprimer le produit ","products_info":"Remplissez les information générales sur le nouveau produit","review_category":"Revissez les informations et ajoutez cette nouvelle catégorie","review_products":"Revissez les informations et ajoutez ce nouveau produit"},"menu":{"admin":"Administrateurs","analytics":"Analytique","categories":"Catégories","dashboard":"Tableau de Bord","expeditors":"Expéditeurs","orders":"Commandes","products":"Produits","sales":"Ventes","schedules":"Cédules","settings":"Paramètres","users":"Usagers"}},"company":{"name":"Rubydor"},"errors":{"account_created":"L\'utilisateur a déjà un compte","email_not_valid":"Doit être une adresse couriel valide","email_required":"L\'adresse couriel est requise","errors_found":"Il y a quelques erreurs","firstName_required":"Le prénom est requis","name_required":"Le nom est requis","invalid_username":"Mot de passe ou compte utilisateur invalide","lastName_required":"Le nom de famille est requis","password_must_match":"Les mots de passes doivent être semblables","password_latin":"Les mots de passes doivent seulement contenir des caractères latins","password_required":"Le mot de passe est requis","password_too_short":"Le mot de passe est trop court, le minimum est de 6 caractères"},"general":{"add":"Add","admin":"Administrateur","admins":"Administrateurs","database":"Base de données","description":"Description","category":"Catégories","categories":"Mes catégories","generals":"Générales","products":"Mes produits","revision":"Révision"},"labels":{"all":"Tous","description":"Description","email":"Adresse couriel","first_name":"Prénom","last_name":"Nom de famille","name":"Nom","next":"Prochain","number_of_products":"Nombre de produits","my_possible_actions":"Mes actions possibles :","isPublished":"Publié","of":"de","pages":"pages","password":"Entrez un mot de passe","password_confirmation":"Confirmez le mot de passe","prev":"Précédent","price":"Prix","quantity":"Quantité","update_password":"Mettre à jour le mot de passe","rows_per_page":"Rangée par page"},"login":{"forget_password":"Mot de passe oublié?","email":"Adresse couriel","password":"Mot de passe","or":"ou","register":"s\'enregistrer","remember_me":"Se rappeler de moi","signin":"Se connecter","sign_account":"Se connecter à votre compte"},"titles":{"main":"Rubydor"}}'
    );
  },
  e072: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("cc8b"),
      a = n("6b88");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "04f19a23",
        null
      );
    t["default"] = s.exports;
  },
  e417: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("3171"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  e4c6: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("d53f"),
      a = n("0f72");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    n("043b");
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "199eaf8e",
        null
      );
    t["default"] = s.exports;
  },
  e5c9: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "home" }, [e._v("Homepage")]);
      },
      a = [];
  },
  e65f: function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    n("96cf"), Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("1b40"),
      c = s.__importDefault(n("11a6")),
      l = s.__importDefault(n("53c0")),
      d = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          return r(this, n), t.apply(this, arguments);
        }
        return (
          a(n, [
            {
              key: "login",
              value: function () {
                return s.__awaiter(
                  this,
                  void 0,
                  void 0,
                  regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (t = {
                              email: "test@admin.com",
                              password: "hsjhjkah",
                            }),
                              c
                                .default()
                                .post("/sessions", t)
                                .then(function (e) {
                                  console.log(e),
                                    l.default.clearToken(),
                                    l.default.setToken({
                                      access_token: String(e.data.accessToken),
                                      refresh_token: String(
                                        e.data.refreshToken
                                      ),
                                    });
                                })
                                .catch(function (e) {
                                  console.log(e),
                                    console.log(e.response.data),
                                    console.log(e.response.status);
                                });
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
              },
            },
            {
              key: "register",
              value: function () {
                return s.__awaiter(
                  this,
                  void 0,
                  void 0,
                  regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (t = {
                              email: "test222@admin.com",
                              password: "hsjhjkah",
                              passwordConfirmation: "hsjhjkah",
                              name: "test-admin",
                            }),
                              c
                                .default()
                                .post("/", t)
                                .then(function (e) {
                                  console.log(e);
                                })
                                .catch(function (e) {
                                  409 == e.code &&
                                    console.log("Deja un compte"),
                                    console.log(e.response.data),
                                    console.log(e.response.status);
                                });
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
              },
            },
          ]),
          n
        );
      })(u.Vue);
    s.__decorate(
      [u.Prop(), s.__metadata("design:type", String)],
      d.prototype,
      "msg",
      void 0
    ),
      (d = s.__decorate([u.Component], d)),
      (t.default = d);
  },
  e8b7: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("6ec9"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  ea04: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("6176"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  ebbd: function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    n("96cf"),
      n("b0c0"),
      n("a4d3"),
      n("e01a"),
      Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("60e1"),
      c = n("1b40"),
      l = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          var e;
          return (
            r(this, n),
            (e = t.apply(this, arguments)),
            (e.category = { name: "", description: "" }),
            e
          );
        }
        return (
          a(n, [
            {
              key: "add",
              value: function () {
                return s.__awaiter(
                  this,
                  void 0,
                  void 0,
                  regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (t = {
                                name: this.category.name,
                                description: this.category.description,
                              }),
                                u
                                  .addCategory(t)
                                  .then(function (e) {
                                    console.log(e);
                                  })
                                  .catch(function (e) {
                                    return console.error(
                                      "(1) Outside error:",
                                      e
                                    );
                                  });
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
              },
            },
          ]),
          n
        );
      })(c.Vue);
    (l = s.__decorate([c.Component({ components: {} })], l)), (t.default = l);
  },
  ebd0: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("ecf2"),
      a = n("bf1a");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "272586c3",
        null
      );
    t["default"] = s.exports;
  },
  ecf2: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "cms-form-container" }, [
          n("div", { staticClass: "row-with-info" }, [
            n("div", { staticClass: "left-info" }, [
              n("span", { staticClass: "info-title" }, [
                e._v(" " + e._s(e.$t("general.generals")) + " "),
              ]),
              n("span", { staticClass: "info-explication" }, [
                e._v(" " + e._s(e.$t("cms.labels.category_info")) + " "),
              ]),
            ]),
            n("div", { staticClass: "right-info" }, [
              n("div", [
                n("div", { staticClass: "info-form-row" }, [
                  n("div", { staticClass: "info-form-items half" }, [
                    n("label", { attrs: { for: "first_name" } }, [
                      e._v(" " + e._s(e.$t("labels.first_name"))),
                    ]),
                    n("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.admin.firstName,
                          expression: "admin.firstName",
                        },
                      ],
                      attrs: {
                        id: "first_name",
                        type: "text",
                        placeholder: "Nom de la catégories",
                      },
                      domProps: { value: e.admin.firstName },
                      on: {
                        input: function (t) {
                          t.target.composing ||
                            e.$set(e.admin, "firstName", t.target.value);
                        },
                      },
                    }),
                  ]),
                  n("div", { staticClass: "info-form-items half" }, [
                    n("label", { attrs: { for: "last_name" } }, [
                      e._v(" " + e._s(e.$t("labels.last_name"))),
                    ]),
                    n("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.admin.firstName,
                          expression: "admin.firstName",
                        },
                      ],
                      attrs: {
                        id: "last_name",
                        type: "text",
                        placeholder: "Nom de la catégories",
                      },
                      domProps: { value: e.admin.firstName },
                      on: {
                        input: function (t) {
                          t.target.composing ||
                            e.$set(e.admin, "firstName", t.target.value);
                        },
                      },
                    }),
                  ]),
                  n("div", { staticClass: "info-form-items" }, [
                    n("label", { attrs: { for: "email" } }, [
                      e._v(" " + e._s(e.$t("labels.email"))),
                    ]),
                    n("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.admin.email,
                          expression: "admin.email",
                        },
                      ],
                      attrs: {
                        id: "email",
                        type: "text",
                        placeholder: e.$t("labels.email"),
                      },
                      domProps: { value: e.admin.email },
                      on: {
                        input: function (t) {
                          t.target.composing ||
                            e.$set(e.admin, "email", t.target.value);
                        },
                      },
                    }),
                  ]),
                  n("div", { staticClass: "info-form-items" }, [
                    n("label", { attrs: { for: "updatePassword" } }, [
                      e._v(" " + e._s(e.$t("labels.update_password"))),
                    ]),
                    n("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.updatedPassword,
                          expression: "updatedPassword",
                        },
                      ],
                      attrs: {
                        id: "updatePassword",
                        type: "password",
                        placeholder: e.$t("labels.password"),
                      },
                      domProps: { value: e.updatedPassword },
                      on: {
                        input: function (t) {
                          t.target.composing ||
                            (e.updatedPassword = t.target.value);
                        },
                      },
                    }),
                  ]),
                ]),
              ]),
            ]),
          ]),
          n("div", { staticClass: "row-with-info" }, [
            n("div", { staticClass: "left-info" }, [
              n("span", { staticClass: "info-title" }, [
                e._v(" " + e._s(e.$t("general.revision")) + " "),
              ]),
              n("span", { staticClass: "info-explication" }, [
                e._v(" " + e._s(e.$t("cms.labels.review_category")) + " "),
              ]),
            ]),
            n("div", { staticClass: "right-info" }, [
              n(
                "button",
                {
                  staticClass: "btn-submit mt-4",
                  on: {
                    click: function (t) {
                      return e.edit();
                    },
                  },
                },
                [e._v(" " + e._s(e.$t("cms.cta.edit_admin")) + " ")]
              ),
            ]),
          ]),
        ]);
      },
      a = [];
  },
  ed7c: function (e, t, n) {},
  ee42: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("844a"),
      a = n("2556");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    n("35a2");
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "f3c80cf8",
        null
      );
    t["default"] = s.exports;
  },
  f16d: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("447c"),
      a = n("4bfa");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    n("11cf");
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "bc4820f6",
        null
      );
    t["default"] = s.exports;
  },
  f225: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("2bc0"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  f248: function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("1b40"),
      c = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          return r(this, n), t.apply(this, arguments);
        }
        return (
          a(n, [
            {
              key: "close",
              value: function () {
                this.$emit("close");
              },
            },
          ]),
          n
        );
      })(u.Vue);
    (c = s.__decorate([u.Component({ components: {} })], c)), (t.default = c);
  },
  f28b: function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    n("99af"), Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("1b40"),
      c = s.__importDefault(n("3d9b")),
      l = s.__importDefault(n("3428")),
      d = s.__importDefault(n("96e6")),
      f = s.__importDefault(n("2b2c")),
      p = n("60e1"),
      m = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          var e;
          return (
            r(this, n),
            (e = t.apply(this, arguments)),
            (e.categoryId = e.$route.params.categoryId),
            (e.title = ""),
            (e.isModalVisible = !1),
            (e.links = [
              {
                title: e.$t("cms.cta.edit_category"),
                klass: "disabled",
                action: "",
              },
              {
                title: e.$t("cms.cta.all_category"),
                klass: "success",
                action: "list",
              },
              {
                title: e.$t("cms.cta.delete_category"),
                klass: "danger ml-auto",
                action: "delete",
              },
            ]),
            e
          );
        }
        return (
          a(n, [
            {
              key: "handleClick",
              value: function (e) {
                switch (e) {
                  case "list":
                    this.$router.push({ name: "list-categories" });
                    break;
                  case "delete":
                    this.isModalVisible = !this.isModalVisible;
                    break;
                  default:
                }
              },
            },
            {
              key: "mounted",
              value: function () {
                this.updatePageName(this.categoryId);
              },
            },
            {
              key: "updatePageName",
              value: function (e) {
                this.title = ""
                  .concat(this.$t("general.category"), " : ")
                  .concat(e);
              },
            },
            {
              key: "showModal",
              value: function () {
                this.isModalVisible = !0;
              },
            },
            {
              key: "closeModal",
              value: function () {
                this.isModalVisible = !1;
              },
            },
            {
              key: "confirmDelete",
              value: function () {
                var e = this;
                p.deleteCategory(this.categoryId)
                  .then(function (t) {
                    console.log("here then", t),
                      (e.isModalVisible = !1),
                      e.handleClick("list");
                  })
                  .catch(function (e) {
                    return console.error("Error:", e);
                  });
              },
            },
          ]),
          n
        );
      })(u.Vue);
    (m = s.__decorate(
      [
        u.Component({
          components: {
            Actions: c.default,
            PageTitles: l.default,
            EditCategoryForm: d.default,
            CMSModal: f.default,
          },
        }),
      ],
      m
    )),
      (t.default = m);
  },
  f36f: function (e, t, n) {
    "use strict";
    var r,
      a = n("970b").default,
      i = n("5bc3").default,
      o = n("ed6d").default,
      s = n("2d0d").default;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = n("9ab4"),
      c = n("1b40"),
      l = (function (e) {
        o(n, e);
        var t = s(n);
        function n() {
          return a(this, n), t.apply(this, arguments);
        }
        return (
          i(n, [
            {
              key: "emitAction",
              value: function (e) {
                this.$emit("action", e);
              },
            },
          ]),
          n
        );
      })(c.Vue);
    u.__decorate(
      [
        c.Prop(),
        u.__metadata(
          "design:type",
          "function" === typeof (r = "undefined" !== typeof Array && Array)
            ? r
            : Object
        ),
      ],
      l.prototype,
      "buttons",
      void 0
    ),
      (l = u.__decorate([c.Component({ components: {} })], l)),
      (t.default = l);
  },
  f47b: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "p-2 pr-4" },
          [
            n("PageTitles", { attrs: { title: e.$t("general.admins") } }),
            n("Actions", {
              attrs: { buttons: e.links },
              on: {
                action: function (t) {
                  return e.handleClick(t);
                },
              },
            }),
            n("AdminList", { staticClass: "mt-10" }),
          ],
          1
        );
      },
      a = [];
  },
  f4a3: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "product-wrapper" },
          [
            n("ProductCard"),
            n("ProductCard"),
            n("ProductCard"),
            n("ProductCard"),
            n("ProductCard"),
            n("ProductCard"),
            n("ProductCard"),
            n("ProductCard"),
            n("ProductCard"),
            n("ProductCard"),
            n("ProductCard"),
            n("ProductCard"),
          ],
          1
        );
      },
      a = [];
  },
  f54d: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("fc2a"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  f7fe: function (e, t, n) {
    "use strict";
    n("37f0");
  },
  f8ad: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("645f"),
      a = n.n(r);
    for (var i in r)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return r[e];
          });
        })(i);
    t["default"] = a.a;
  },
  fa82: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("2a99"),
      a = n("f54d");
    for (var i in a)
      ["default"].indexOf(i) < 0 &&
        (function (e) {
          n.d(t, e, function () {
            return a[e];
          });
        })(i);
    var o = n("2877"),
      s = Object(o["a"])(
        a["default"],
        r["a"],
        r["b"],
        !1,
        null,
        "2262f27c",
        null
      );
    t["default"] = s.exports;
  },
  fc2a: function (e, t, n) {
    "use strict";
    var r = n("970b").default,
      a = n("5bc3").default,
      i = n("ed6d").default,
      o = n("2d0d").default;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n("9ab4"),
      u = n("1b40"),
      c = n("60e1"),
      l = n("f617"),
      d = (function (e) {
        i(n, e);
        var t = o(n);
        function n() {
          var e;
          return (
            r(this, n),
            (e = t.apply(this, arguments)),
            (e.isLoading = !0),
            (e.columns = [
              {
                label: e.$t("labels.name"),
                field: "name",
                sortable: !0,
                thClass: "table-header-name",
                globalSearchDisabled: !0,
              },
              {
                label: e.$t("labels.number_of_products"),
                field: "categories",
                html: !0,
                sortable: !0,
                thClass: "text-center",
                tdClass: "text-center",
              },
              {
                label: "Action",
                field: "action",
                html: !0,
                sortable: !1,
                thClass: "text-center",
                tdClass: "text-center",
              },
            ]),
            (e.rows = []),
            (e.totalRecords = 0),
            (e.serverParams = {
              columnFilters: {},
              sort: [{ field: "", type: "" }],
              page: 1,
              perPage: 10,
            }),
            e
          );
        }
        return (
          a(n, [
            {
              key: "mounted",
              value: function () {
                this.loadItems(), this.$parent.$on("refresh", this.refresh);
              },
            },
            {
              key: "refresh",
              value: function () {
                this.loadItems();
              },
            },
            {
              key: "onPageChange",
              value: function (e) {
                this.updateParams({ page: e.currentPage });
              },
            },
            {
              key: "updateParams",
              value: function (e) {
                this.serverParams = Object.assign({}, this.serverParams, e);
              },
            },
            {
              key: "formatPrice",
              value: function (e) {
                return e + " $";
              },
            },
            {
              key: "isPublished",
              value: function (e) {
                return !0 === e ? "green" : "red";
              },
            },
            {
              key: "onColumnFilter",
              value: function (e) {
                this.updateParams(e), this.loadItems();
              },
            },
            {
              key: "loadItems",
              value: function () {
                var e = this;
                c.getAllCategories()
                  .then(function (t) {
                    e.$nextTick(function () {
                      (this.rows = t),
                        (this.totalRecords = t.length),
                        (this.isLoading = !1);
                    });
                  })
                  .catch(function (e) {
                    return console.error("Errors : ", e);
                  });
              },
            },
          ]),
          n
        );
      })(u.Vue);
    (d = s.__decorate(
      [u.Component({ components: { VueGoodTable: l.VueGoodTable } })],
      d
    )),
      (t.default = d);
  },
});
//# sourceMappingURL=index.16ef517e.js.map
