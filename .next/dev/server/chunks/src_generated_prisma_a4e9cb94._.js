module.exports = [
"[project]/src/generated/prisma/query_compiler_bg.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var h = Object.defineProperty;
var T = Object.getOwnPropertyDescriptor;
var M = Object.getOwnPropertyNames;
var j = Object.prototype.hasOwnProperty;
var D = (e, t)=>{
    for(var n in t)h(e, n, {
        get: t[n],
        enumerable: !0
    });
}, O = (e, t, n, _)=>{
    if (t && typeof t == "object" || typeof t == "function") for (let r of M(t))!j.call(e, r) && r !== n && h(e, r, {
        get: ()=>t[r],
        enumerable: !(_ = T(t, r)) || _.enumerable
    });
    return e;
};
var B = (e)=>O(h({}, "__esModule", {
        value: !0
    }), e);
var xe = {};
D(xe, {
    QueryCompiler: ()=>F,
    __wbg_Error_e83987f665cf5504: ()=>q,
    __wbg_Number_bb48ca12f395cd08: ()=>C,
    __wbg_String_8f0eb39a4a4c2f66: ()=>k,
    __wbg___wbindgen_boolean_get_6d5a1ee65bab5f68: ()=>W,
    __wbg___wbindgen_debug_string_df47ffb5e35e6763: ()=>V,
    __wbg___wbindgen_in_bb933bd9e1b3bc0f: ()=>z,
    __wbg___wbindgen_is_object_c818261d21f283a4: ()=>L,
    __wbg___wbindgen_is_string_fbb76cb2940daafd: ()=>P,
    __wbg___wbindgen_is_undefined_2d472862bd29a478: ()=>Q,
    __wbg___wbindgen_jsval_loose_eq_b664b38a2f582147: ()=>Y,
    __wbg___wbindgen_number_get_a20bf9b85341449d: ()=>G,
    __wbg___wbindgen_string_get_e4f06c90489ad01b: ()=>J,
    __wbg___wbindgen_throw_b855445ff6a94295: ()=>X,
    __wbg_entries_e171b586f8f6bdbf: ()=>H,
    __wbg_getTime_14776bfb48a1bff9: ()=>K,
    __wbg_get_7bed016f185add81: ()=>Z,
    __wbg_get_with_ref_key_1dc361bd10053bfe: ()=>v,
    __wbg_instanceof_ArrayBuffer_70beb1189ca63b38: ()=>ee,
    __wbg_instanceof_Uint8Array_20c8e73002f7af98: ()=>te,
    __wbg_isSafeInteger_d216eda7911dde36: ()=>ne,
    __wbg_length_69bca3cb64fc8748: ()=>re,
    __wbg_length_cdd215e10d9dd507: ()=>_e,
    __wbg_new_0_f9740686d739025c: ()=>oe,
    __wbg_new_1acc0b6eea89d040: ()=>ce,
    __wbg_new_5a79be3ab53b8aa5: ()=>ie,
    __wbg_new_68651c719dcda04e: ()=>se,
    __wbg_new_e17d9f43105b08be: ()=>ue,
    __wbg_prototypesetcall_2a6620b6922694b2: ()=>fe,
    __wbg_set_3f1d0b984ed272ed: ()=>be,
    __wbg_set_907fb406c34a251d: ()=>de,
    __wbg_set_c213c871859d6500: ()=>ae,
    __wbg_set_message_82ae475bb413aa5c: ()=>ge,
    __wbg_set_wasm: ()=>N,
    __wbindgen_cast_2241b6af4c4b2941: ()=>le,
    __wbindgen_cast_4625c577ab2ec9ee: ()=>we,
    __wbindgen_cast_9ae0607507abb057: ()=>pe,
    __wbindgen_cast_d6cd19b81560fd6e: ()=>ye,
    __wbindgen_init_externref_table: ()=>me
});
module.exports = B(xe);
var A = ()=>{};
A.prototype = A;
let o;
function N(e) {
    o = e;
}
let p = null;
function a() {
    return (p === null || p.byteLength === 0) && (p = new Uint8Array(o.memory.buffer)), p;
}
let y = new TextDecoder("utf-8", {
    ignoreBOM: !0,
    fatal: !0
});
y.decode();
const U = 2146435072;
let S = 0;
function R(e, t) {
    return S += t, S >= U && (y = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    }), y.decode(), S = t), y.decode(a().subarray(e, e + t));
}
function m(e, t) {
    return e = e >>> 0, R(e, t);
}
let f = 0;
const g = new TextEncoder;
"encodeInto" in g || (g.encodeInto = function(e, t) {
    const n = g.encode(e);
    return t.set(n), {
        read: e.length,
        written: n.length
    };
});
function l(e, t, n) {
    if (n === void 0) {
        const i = g.encode(e), d = t(i.length, 1) >>> 0;
        return a().subarray(d, d + i.length).set(i), f = i.length, d;
    }
    let _ = e.length, r = t(_, 1) >>> 0;
    const s = a();
    let c = 0;
    for(; c < _; c++){
        const i = e.charCodeAt(c);
        if (i > 127) break;
        s[r + c] = i;
    }
    if (c !== _) {
        c !== 0 && (e = e.slice(c)), r = n(r, _, _ = c + e.length * 3, 1) >>> 0;
        const i = a().subarray(r + c, r + _), d = g.encodeInto(e, i);
        c += d.written, r = n(r, _, c, 1) >>> 0;
    }
    return f = c, r;
}
let b = null;
function u() {
    return (b === null || b.buffer.detached === !0 || b.buffer.detached === void 0 && b.buffer !== o.memory.buffer) && (b = new DataView(o.memory.buffer)), b;
}
function x(e) {
    return e == null;
}
function I(e) {
    const t = typeof e;
    if (t == "number" || t == "boolean" || e == null) return `${e}`;
    if (t == "string") return `"${e}"`;
    if (t == "symbol") {
        const r = e.description;
        return r == null ? "Symbol" : `Symbol(${r})`;
    }
    if (t == "function") {
        const r = e.name;
        return typeof r == "string" && r.length > 0 ? `Function(${r})` : "Function";
    }
    if (Array.isArray(e)) {
        const r = e.length;
        let s = "[";
        r > 0 && (s += I(e[0]));
        for(let c = 1; c < r; c++)s += ", " + I(e[c]);
        return s += "]", s;
    }
    const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
    let _;
    if (n && n.length > 1) _ = n[1];
    else return toString.call(e);
    if (_ == "Object") try {
        return "Object(" + JSON.stringify(e) + ")";
    } catch  {
        return "Object";
    }
    return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : _;
}
function $(e, t) {
    return e = e >>> 0, a().subarray(e / 1, e / 1 + t);
}
function w(e) {
    const t = o.__wbindgen_externrefs.get(e);
    return o.__externref_table_dealloc(e), t;
}
const E = typeof FinalizationRegistry > "u" ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((e)=>o.__wbg_querycompiler_free(e >>> 0, 1));
class F {
    __destroy_into_raw() {
        const t = this.__wbg_ptr;
        return this.__wbg_ptr = 0, E.unregister(this), t;
    }
    free() {
        const t = this.__destroy_into_raw();
        o.__wbg_querycompiler_free(t, 0);
    }
    compileBatch(t) {
        const n = l(t, o.__wbindgen_malloc, o.__wbindgen_realloc), _ = f, r = o.querycompiler_compileBatch(this.__wbg_ptr, n, _);
        if (r[2]) throw w(r[1]);
        return w(r[0]);
    }
    constructor(t){
        const n = o.querycompiler_new(t);
        if (n[2]) throw w(n[1]);
        return this.__wbg_ptr = n[0] >>> 0, E.register(this, this.__wbg_ptr, this), this;
    }
    compile(t) {
        const n = l(t, o.__wbindgen_malloc, o.__wbindgen_realloc), _ = f, r = o.querycompiler_compile(this.__wbg_ptr, n, _);
        if (r[2]) throw w(r[1]);
        return w(r[0]);
    }
}
Symbol.dispose && (F.prototype[Symbol.dispose] = F.prototype.free);
function q(e, t) {
    return Error(m(e, t));
}
function C(e) {
    return Number(e);
}
function k(e, t) {
    const n = String(t), _ = l(n, o.__wbindgen_malloc, o.__wbindgen_realloc), r = f;
    u().setInt32(e + 4 * 1, r, !0), u().setInt32(e + 4 * 0, _, !0);
}
function W(e) {
    const t = e, n = typeof t == "boolean" ? t : void 0;
    return x(n) ? 16777215 : n ? 1 : 0;
}
function V(e, t) {
    const n = I(t), _ = l(n, o.__wbindgen_malloc, o.__wbindgen_realloc), r = f;
    u().setInt32(e + 4 * 1, r, !0), u().setInt32(e + 4 * 0, _, !0);
}
function z(e, t) {
    return e in t;
}
function L(e) {
    const t = e;
    return typeof t == "object" && t !== null;
}
function P(e) {
    return typeof e == "string";
}
function Q(e) {
    return e === void 0;
}
function Y(e, t) {
    return e == t;
}
function G(e, t) {
    const n = t, _ = typeof n == "number" ? n : void 0;
    u().setFloat64(e + 8 * 1, x(_) ? 0 : _, !0), u().setInt32(e + 4 * 0, !x(_), !0);
}
function J(e, t) {
    const n = t, _ = typeof n == "string" ? n : void 0;
    var r = x(_) ? 0 : l(_, o.__wbindgen_malloc, o.__wbindgen_realloc), s = f;
    u().setInt32(e + 4 * 1, s, !0), u().setInt32(e + 4 * 0, r, !0);
}
function X(e, t) {
    throw new Error(m(e, t));
}
function H(e) {
    return Object.entries(e);
}
function K(e) {
    return e.getTime();
}
function Z(e, t) {
    return e[t >>> 0];
}
function v(e, t) {
    return e[t];
}
function ee(e) {
    let t;
    try {
        t = e instanceof ArrayBuffer;
    } catch  {
        t = !1;
    }
    return t;
}
function te(e) {
    let t;
    try {
        t = e instanceof Uint8Array;
    } catch  {
        t = !1;
    }
    return t;
}
function ne(e) {
    return Number.isSafeInteger(e);
}
function re(e) {
    return e.length;
}
function _e(e) {
    return e.length;
}
function oe() {
    return new Date;
}
function ce() {
    return new Object;
}
function ie(e) {
    return new Uint8Array(e);
}
function se() {
    return new Map;
}
function ue() {
    return new Array;
}
function fe(e, t, n) {
    Uint8Array.prototype.set.call($(e, t), n);
}
function be(e, t, n) {
    e[t] = n;
}
function de(e, t, n) {
    return e.set(t, n);
}
function ae(e, t, n) {
    e[t >>> 0] = n;
}
function ge(e, t) {
    /*TURBOPACK member replacement*/ __turbopack_context__.g.PRISMA_WASM_PANIC_REGISTRY.set_message(m(e, t));
}
function le(e, t) {
    return m(e, t);
}
function we(e) {
    return BigInt.asUintN(64, e);
}
function pe(e) {
    return e;
}
function ye(e) {
    return e;
}
function me() {
    const e = o.__wbindgen_externrefs, t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, !0), e.set(t + 3, !1);
}
0 && (module.exports = {
    QueryCompiler,
    __wbg_Error_e83987f665cf5504,
    __wbg_Number_bb48ca12f395cd08,
    __wbg_String_8f0eb39a4a4c2f66,
    __wbg___wbindgen_boolean_get_6d5a1ee65bab5f68,
    __wbg___wbindgen_debug_string_df47ffb5e35e6763,
    __wbg___wbindgen_in_bb933bd9e1b3bc0f,
    __wbg___wbindgen_is_object_c818261d21f283a4,
    __wbg___wbindgen_is_string_fbb76cb2940daafd,
    __wbg___wbindgen_is_undefined_2d472862bd29a478,
    __wbg___wbindgen_jsval_loose_eq_b664b38a2f582147,
    __wbg___wbindgen_number_get_a20bf9b85341449d,
    __wbg___wbindgen_string_get_e4f06c90489ad01b,
    __wbg___wbindgen_throw_b855445ff6a94295,
    __wbg_entries_e171b586f8f6bdbf,
    __wbg_getTime_14776bfb48a1bff9,
    __wbg_get_7bed016f185add81,
    __wbg_get_with_ref_key_1dc361bd10053bfe,
    __wbg_instanceof_ArrayBuffer_70beb1189ca63b38,
    __wbg_instanceof_Uint8Array_20c8e73002f7af98,
    __wbg_isSafeInteger_d216eda7911dde36,
    __wbg_length_69bca3cb64fc8748,
    __wbg_length_cdd215e10d9dd507,
    __wbg_new_0_f9740686d739025c,
    __wbg_new_1acc0b6eea89d040,
    __wbg_new_5a79be3ab53b8aa5,
    __wbg_new_68651c719dcda04e,
    __wbg_new_e17d9f43105b08be,
    __wbg_prototypesetcall_2a6620b6922694b2,
    __wbg_set_3f1d0b984ed272ed,
    __wbg_set_907fb406c34a251d,
    __wbg_set_c213c871859d6500,
    __wbg_set_message_82ae475bb413aa5c,
    __wbg_set_wasm,
    __wbindgen_cast_2241b6af4c4b2941,
    __wbindgen_cast_4625c577ab2ec9ee,
    __wbindgen_cast_9ae0607507abb057,
    __wbindgen_cast_d6cd19b81560fd6e,
    __wbindgen_init_externref_table
});
}),
"[project]/src/generated/prisma/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */ // biome-ignore-all lint: generated file
Object.defineProperty(exports, "__esModule", {
    value: true
});
const { PrismaClientKnownRequestError, PrismaClientUnknownRequestError, PrismaClientRustPanicError, PrismaClientInitializationError, PrismaClientValidationError, getPrismaClient, sqltag, empty, join, raw, skip, Decimal, Debug, DbNull, JsonNull, AnyNull, NullTypes, makeStrictEnum, Extensions, warnOnce, defineDmmfProperty, Public, getRuntime, createParam } = __turbopack_context__.r("[project]/src/generated/prisma/runtime/client.js [app-route] (ecmascript)");
const Prisma = {};
exports.Prisma = Prisma;
exports.$Enums = {};
/**
 * Prisma Client JS version: 7.1.0
 * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
 */ Prisma.prismaVersion = {
    client: "7.1.0",
    engine: "ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba"
};
Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.Decimal = Decimal;
/**
 * Re-export of sql-template-tag
 */ Prisma.sql = sqltag;
Prisma.empty = empty;
Prisma.join = join;
Prisma.raw = raw;
Prisma.validator = Public.validator;
/**
* Extensions
*/ Prisma.getExtensionContext = Extensions.getExtensionContext;
Prisma.defineExtension = Extensions.defineExtension;
/**
 * Shorthand utilities for JSON filtering
 */ Prisma.DbNull = DbNull;
Prisma.JsonNull = JsonNull;
Prisma.AnyNull = AnyNull;
Prisma.NullTypes = NullTypes;
const path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
/**
 * Enums
 */ exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.Prisma.PolaRuangRevisiRtrwScalarFieldEnum = {
    gid: 'gid',
    namobj: 'namobj',
    jnsrpr: 'jnsrpr',
    wadmkc: 'wadmkc',
    kkop_1: 'kkop_1',
    kp2b_2: 'kp2b_2',
    krb_03: 'krb_03',
    cagbud: 'cagbud',
    resair: 'resair',
    ksmpdn: 'ksmpdn',
    hankam: 'hankam',
    kkarst: 'kkarst',
    ptbgmb: 'ptbgmb',
    mgrsat: 'mgrsat',
    rdbumi: 'rdbumi',
    remark: 'remark',
    luasha: 'luasha'
};
exports.Prisma.Base_layersScalarFieldEnum = {
    id: 'id',
    name: 'name'
};
exports.Prisma.Failed_jobsScalarFieldEnum = {
    id: 'id',
    uuid: 'uuid',
    connection: 'connection',
    queue: 'queue',
    payload: 'payload',
    exception: 'exception',
    failed_at: 'failed_at'
};
exports.Prisma.Infrastruktur_struktur_ruang_badauScalarFieldEnum = {
    gid: 'gid',
    namobj: 'namobj',
    stsjrn: 'stsjrn'
};
exports.Prisma.Infrastruktur_struktur_ruang_geoparkScalarFieldEnum = {
    gid: 'gid',
    namobj: 'namobj',
    stsjrn: 'stsjrn'
};
exports.Prisma.Infrastruktur_struktur_ruang_tanjung_kelayangScalarFieldEnum = {
    gid: 'gid',
    namobj: 'namobj',
    stsjrn: 'stsjrn'
};
exports.Prisma.ItemsScalarFieldEnum = {
    id: 'id',
    name: 'name',
    main_category_id: 'main_category_id'
};
exports.Prisma.Jaringan_struktur_ruang_badauScalarFieldEnum = {
    gid: 'gid',
    namobj: 'namobj',
    stsjrn: 'stsjrn'
};
exports.Prisma.Jaringan_struktur_ruang_geoparkScalarFieldEnum = {
    gid: 'gid',
    namobj: 'namobj',
    stsjrn: 'stsjrn'
};
exports.Prisma.Jaringan_struktur_ruang_tanjung_kelayangScalarFieldEnum = {
    gid: 'gid',
    namobj: 'namobj',
    stsjrn: 'stsjrn'
};
exports.Prisma.LayersScalarFieldEnum = {
    id: 'id',
    layer_name: 'layer_name',
    geom_type: 'geom_type',
    url: 'url',
    created_at: 'created_at',
    updated_at: 'updated_at',
    map_type: 'map_type',
    thumbnail: 'thumbnail',
    attribution: 'attribution',
    layer_type: 'layer_type',
    parents: 'parents'
};
exports.Prisma.LocationsScalarFieldEnum = {
    id: 'id',
    name: 'name',
    item_id: 'item_id'
};
exports.Prisma.Main_categoriesScalarFieldEnum = {
    id: 'id',
    title: 'title'
};
exports.Prisma.MigrationsScalarFieldEnum = {
    id: 'id',
    migration: 'migration',
    batch: 'batch'
};
exports.Prisma.Password_reset_tokensScalarFieldEnum = {
    email: 'email',
    token: 'token',
    created_at: 'created_at'
};
exports.Prisma.Personal_access_tokensScalarFieldEnum = {
    id: 'id',
    tokenable_type: 'tokenable_type',
    tokenable_id: 'tokenable_id',
    name: 'name',
    token: 'token',
    abilities: 'abilities',
    last_used_at: 'last_used_at',
    expires_at: 'expires_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Prisma.Pola_ruang_badauScalarFieldEnum = {
    gid: 'gid',
    namobj: 'namobj',
    jnsrpr: 'jnsrpr',
    wadmkc: 'wadmkc',
    wadmkd: 'wadmkd',
    kkop_1: 'kkop_1',
    lp2b_2: 'lp2b_2',
    krb_03: 'krb_03',
    tod_04: 'tod_04',
    teb_05: 'teb_05',
    puslit: 'puslit',
    cagbud: 'cagbud',
    resair: 'resair',
    ksmpdn: 'ksmpdn',
    hankam: 'hankam',
    kkarst: 'kkarst',
    ptbgmb: 'ptbgmb',
    mgrsat: 'mgrsat',
    rdbumi: 'rdbumi',
    tpz_00: 'tpz_00',
    remark: 'remark',
    luasha: 'luasha'
};
exports.Prisma.Pola_ruang_geoparkScalarFieldEnum = {
    gid: 'gid',
    namobj: 'namobj',
    jnsrpr: 'jnsrpr',
    wadmkc: 'wadmkc',
    wadmkd: 'wadmkd',
    kkop_1: 'kkop_1',
    lp2b_2: 'lp2b_2',
    krb_03: 'krb_03',
    tod_04: 'tod_04',
    teb_05: 'teb_05',
    puslit: 'puslit',
    cagbud: 'cagbud',
    resair: 'resair',
    ksmpdn: 'ksmpdn',
    hankam: 'hankam',
    kkarst: 'kkarst',
    ptbgmb: 'ptbgmb',
    mgrsat: 'mgrsat',
    rdbumi: 'rdbumi',
    tpz_00: 'tpz_00',
    remark: 'remark',
    luasha: 'luasha'
};
exports.Prisma.Pola_ruang_tanjung_kelayangScalarFieldEnum = {
    gid: 'gid',
    namobj: 'namobj',
    jnsrpr: 'jnsrpr',
    wadmkc: 'wadmkc',
    wadmkd: 'wadmkd',
    kkop_1: 'kkop_1',
    lp2b_2: 'lp2b_2',
    krb_03: 'krb_03',
    tod_04: 'tod_04',
    teb_05: 'teb_05',
    puslit: 'puslit',
    cagbud: 'cagbud',
    resair: 'resair',
    ksmpdn: 'ksmpdn',
    hankam: 'hankam',
    kkarst: 'kkarst',
    ptbgmb: 'ptbgmb',
    mgrsat: 'mgrsat',
    rdbumi: 'rdbumi',
    tpz_00: 'tpz_00',
    remark: 'remark',
    luasha: 'luasha'
};
exports.Prisma.Spatial_ref_sysScalarFieldEnum = {
    srid: 'srid',
    auth_name: 'auth_name',
    auth_srid: 'auth_srid',
    srtext: 'srtext',
    proj4text: 'proj4text'
};
exports.Prisma.Sub_locationsScalarFieldEnum = {
    id: 'id',
    location_id: 'location_id',
    name: 'name',
    url: 'url',
    layer_type: 'layer_type'
};
exports.Prisma.UsersScalarFieldEnum = {
    id: 'id',
    fullname: 'fullname',
    password: 'password',
    email: 'email',
    is_active: 'is_active',
    is_superuser: 'is_superuser',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Prisma.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.Prisma.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.Prisma.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.Prisma.ModelName = {
    PolaRuangRevisiRtrw: 'PolaRuangRevisiRtrw',
    base_layers: 'base_layers',
    failed_jobs: 'failed_jobs',
    infrastruktur_struktur_ruang_badau: 'infrastruktur_struktur_ruang_badau',
    infrastruktur_struktur_ruang_geopark: 'infrastruktur_struktur_ruang_geopark',
    infrastruktur_struktur_ruang_tanjung_kelayang: 'infrastruktur_struktur_ruang_tanjung_kelayang',
    items: 'items',
    jaringan_struktur_ruang_badau: 'jaringan_struktur_ruang_badau',
    jaringan_struktur_ruang_geopark: 'jaringan_struktur_ruang_geopark',
    jaringan_struktur_ruang_tanjung_kelayang: 'jaringan_struktur_ruang_tanjung_kelayang',
    layers: 'layers',
    locations: 'locations',
    main_categories: 'main_categories',
    migrations: 'migrations',
    password_reset_tokens: 'password_reset_tokens',
    personal_access_tokens: 'personal_access_tokens',
    pola_ruang_badau: 'pola_ruang_badau',
    pola_ruang_geopark: 'pola_ruang_geopark',
    pola_ruang_tanjung_kelayang: 'pola_ruang_tanjung_kelayang',
    spatial_ref_sys: 'spatial_ref_sys',
    sub_locations: 'sub_locations',
    users: 'users'
};
/**
 * Create the Client
 */ const config = {
    "previewFeatures": [],
    "clientVersion": "7.1.0",
    "engineVersion": "ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba",
    "activeProvider": "postgresql",
    "inlineSchema": "generator client {\n  provider   = \"prisma-client-js\"\n  output     = \"../src/generated/prisma\"\n  engineType = \"library\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel PolaRuangRevisiRtrw {\n  gid    Int                      @id @default(autoincrement())\n  namobj String?                  @db.VarChar(250)\n  jnsrpr Float?\n  wadmkc String?                  @db.VarChar(250)\n  kkop_1 String?                  @db.VarChar(250)\n  kp2b_2 String?                  @db.VarChar(250)\n  krb_03 String?                  @db.VarChar(250)\n  cagbud String?                  @db.VarChar(250)\n  resair String?                  @db.VarChar(250)\n  ksmpdn String?                  @db.VarChar(250)\n  hankam String?                  @db.VarChar(250)\n  kkarst String?                  @db.VarChar(250)\n  ptbgmb String?                  @db.VarChar(250)\n  mgrsat String?                  @db.VarChar(250)\n  rdbumi String?                  @db.VarChar(250)\n  remark String?                  @db.VarChar(250)\n  luasha Decimal?                 @db.Decimal\n  geom   Unsupported(\"geometry\")?\n\n  @@index([geom], type: Gist)\n  @@map(\"pola_ruang_revisi_rtrw\")\n}\n\nmodel base_layers {\n  id   BigInt @id @default(autoincrement())\n  name String @db.VarChar(255)\n}\n\nmodel failed_jobs {\n  id         BigInt   @id @default(autoincrement())\n  uuid       String   @unique(map: \"failed_jobs_uuid_unique\") @db.VarChar(255)\n  connection String\n  queue      String\n  payload    String\n  exception  String\n  failed_at  DateTime @default(now()) @db.Timestamp(0)\n}\n\nmodel infrastruktur_struktur_ruang_badau {\n  gid    Int                      @id @default(autoincrement())\n  namobj String?                  @db.VarChar(250)\n  stsjrn Float?\n  geom   Unsupported(\"geometry\")?\n\n  @@index([geom], type: Gist)\n}\n\nmodel infrastruktur_struktur_ruang_geopark {\n  gid    Int                      @id @default(autoincrement())\n  namobj String?                  @db.VarChar(250)\n  stsjrn Float?\n  geom   Unsupported(\"geometry\")?\n\n  @@index([geom], type: Gist)\n}\n\nmodel infrastruktur_struktur_ruang_tanjung_kelayang {\n  gid    Int                      @id @default(autoincrement())\n  namobj String?                  @db.VarChar(250)\n  stsjrn Float?\n  geom   Unsupported(\"geometry\")?\n\n  @@index([geom], type: Gist)\n}\n\nmodel items {\n  id               BigInt          @id @default(autoincrement())\n  name             String          @db.VarChar(255)\n  main_category_id BigInt\n  main_categories  main_categories @relation(fields: [main_category_id], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"items_main_category_id_foreign\")\n  locations        locations[]\n}\n\nmodel jaringan_struktur_ruang_badau {\n  gid    Int                      @id @default(autoincrement())\n  namobj String?                  @db.VarChar(250)\n  stsjrn Float?\n  geom   Unsupported(\"geometry\")?\n\n  @@index([geom], type: Gist)\n}\n\nmodel jaringan_struktur_ruang_geopark {\n  gid    Int                      @id @default(autoincrement())\n  namobj String?                  @db.VarChar(250)\n  stsjrn Float?\n  geom   Unsupported(\"geometry\")?\n\n  @@index([geom], type: Gist)\n}\n\nmodel jaringan_struktur_ruang_tanjung_kelayang {\n  gid    Int                      @id @default(autoincrement())\n  namobj String?                  @db.VarChar(250)\n  stsjrn Float?\n  geom   Unsupported(\"geometry\")?\n\n  @@index([geom], type: Gist)\n}\n\nmodel layers {\n  id          BigInt   @id @default(autoincrement())\n  layer_name  String   @db.VarChar(70)\n  geom_type   String   @db.VarChar(50)\n  url         String   @db.VarChar(255)\n  created_at  DateTime @default(now()) @db.Timestamp(6)\n  updated_at  DateTime @default(now()) @db.Timestamp(6)\n  map_type    String   @db.VarChar(20)\n  thumbnail   String?  @db.VarChar(255)\n  attribution String?  @db.VarChar(255)\n  layer_type  String?  @db.VarChar(50)\n  parents     Int?\n}\n\nmodel locations {\n  id            BigInt          @id @default(autoincrement())\n  name          String          @db.VarChar(255)\n  item_id       BigInt\n  items         items           @relation(fields: [item_id], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"locations_item_id_foreign\")\n  sub_locations sub_locations[]\n}\n\nmodel main_categories {\n  id    BigInt  @id @default(autoincrement())\n  title String  @db.VarChar(255)\n  items items[]\n}\n\nmodel migrations {\n  id        Int    @id @default(autoincrement())\n  migration String @db.VarChar(255)\n  batch     Int\n}\n\nmodel password_reset_tokens {\n  email      String    @id @db.VarChar(255)\n  token      String    @db.VarChar(255)\n  created_at DateTime? @db.Timestamp(0)\n}\n\nmodel personal_access_tokens {\n  id             BigInt    @id @default(autoincrement())\n  tokenable_type String    @db.VarChar(255)\n  tokenable_id   BigInt\n  name           String    @db.VarChar(255)\n  token          String    @unique(map: \"personal_access_tokens_token_unique\") @db.VarChar(64)\n  abilities      String?\n  last_used_at   DateTime? @db.Timestamp(0)\n  expires_at     DateTime? @db.Timestamp(0)\n  created_at     DateTime? @db.Timestamp(0)\n  updated_at     DateTime? @db.Timestamp(0)\n\n  @@index([tokenable_type, tokenable_id], map: \"personal_access_tokens_tokenable_type_tokenable_id_index\")\n}\n\nmodel pola_ruang_badau {\n  gid    Int                      @id @default(autoincrement())\n  namobj String?                  @db.VarChar(250)\n  jnsrpr Float?\n  wadmkc String?                  @db.VarChar(250)\n  wadmkd String?                  @db.VarChar(250)\n  kkop_1 String?                  @db.VarChar(250)\n  lp2b_2 String?                  @db.VarChar(250)\n  krb_03 String?                  @db.VarChar(250)\n  tod_04 String?                  @db.VarChar(250)\n  teb_05 String?                  @db.VarChar(250)\n  puslit String?                  @db.VarChar(250)\n  cagbud String?                  @db.VarChar(250)\n  resair String?                  @db.VarChar(250)\n  ksmpdn String?                  @db.VarChar(250)\n  hankam String?                  @db.VarChar(250)\n  kkarst String?                  @db.VarChar(250)\n  ptbgmb String?                  @db.VarChar(250)\n  mgrsat String?                  @db.VarChar(250)\n  rdbumi String?                  @db.VarChar(250)\n  tpz_00 String?                  @db.VarChar(250)\n  remark String?                  @db.VarChar(250)\n  luasha Decimal?                 @db.Decimal\n  geom   Unsupported(\"geometry\")?\n\n  @@index([geom], type: Gist)\n}\n\nmodel pola_ruang_geopark {\n  gid    Int                      @id @default(autoincrement())\n  namobj String?                  @db.VarChar(250)\n  jnsrpr Float?\n  wadmkc String?                  @db.VarChar(250)\n  wadmkd String?                  @db.VarChar(250)\n  kkop_1 String?                  @db.VarChar(250)\n  lp2b_2 String?                  @db.VarChar(250)\n  krb_03 String?                  @db.VarChar(250)\n  tod_04 String?                  @db.VarChar(250)\n  teb_05 String?                  @db.VarChar(250)\n  puslit String?                  @db.VarChar(250)\n  cagbud String?                  @db.VarChar(250)\n  resair String?                  @db.VarChar(250)\n  ksmpdn String?                  @db.VarChar(250)\n  hankam String?                  @db.VarChar(250)\n  kkarst String?                  @db.VarChar(250)\n  ptbgmb String?                  @db.VarChar(250)\n  mgrsat String?                  @db.VarChar(250)\n  rdbumi String?                  @db.VarChar(250)\n  tpz_00 String?                  @db.VarChar(250)\n  remark String?                  @db.VarChar(250)\n  luasha Decimal?                 @db.Decimal\n  geom   Unsupported(\"geometry\")?\n\n  @@index([geom], type: Gist)\n}\n\nmodel pola_ruang_tanjung_kelayang {\n  gid    Int                      @id @default(autoincrement())\n  namobj String?                  @db.VarChar(250)\n  jnsrpr Float?\n  wadmkc String?                  @db.VarChar(250)\n  wadmkd String?                  @db.VarChar(250)\n  kkop_1 String?                  @db.VarChar(250)\n  lp2b_2 String?                  @db.VarChar(250)\n  krb_03 String?                  @db.VarChar(250)\n  tod_04 String?                  @db.VarChar(250)\n  teb_05 String?                  @db.VarChar(250)\n  puslit String?                  @db.VarChar(250)\n  cagbud String?                  @db.VarChar(250)\n  resair String?                  @db.VarChar(250)\n  ksmpdn String?                  @db.VarChar(250)\n  hankam String?                  @db.VarChar(250)\n  kkarst String?                  @db.VarChar(250)\n  ptbgmb String?                  @db.VarChar(250)\n  mgrsat String?                  @db.VarChar(250)\n  rdbumi String?                  @db.VarChar(250)\n  tpz_00 String?                  @db.VarChar(250)\n  remark String?                  @db.VarChar(250)\n  luasha Decimal?                 @db.Decimal\n  geom   Unsupported(\"geometry\")?\n\n  @@index([geom], type: Gist)\n}\n\n/// This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\nmodel spatial_ref_sys {\n  srid      Int     @id\n  auth_name String? @db.VarChar(256)\n  auth_srid Int?\n  srtext    String? @db.VarChar(2048)\n  proj4text String? @db.VarChar(2048)\n}\n\nmodel sub_locations {\n  id          BigInt    @id @default(autoincrement())\n  location_id BigInt\n  name        String    @db.VarChar(255)\n  url         String?   @db.VarChar(255)\n  layer_type  String?   @db.VarChar(255)\n  locations   locations @relation(fields: [location_id], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"sub_locations_location_id_foreign\")\n}\n\nmodel users {\n  id           Int      @id @default(autoincrement())\n  fullname     String   @unique(map: \"ix_users_fullname\") @db.VarChar(200)\n  password     String   @db.VarChar(255)\n  email        String   @unique(map: \"ix_users_email\") @db.VarChar(150)\n  is_active    Boolean\n  is_superuser Boolean\n  created_at   DateTime @default(now()) @db.Timestamp(6)\n  updated_at   DateTime @default(now()) @db.Timestamp(6)\n}\n"
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"PolaRuangRevisiRtrw\":{\"fields\":[{\"name\":\"gid\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"namobj\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"jnsrpr\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"wadmkc\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"kkop_1\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"kp2b_2\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"krb_03\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"cagbud\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"resair\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"ksmpdn\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"hankam\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"kkarst\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"ptbgmb\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"mgrsat\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"rdbumi\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"remark\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"luasha\",\"kind\":\"scalar\",\"type\":\"Decimal\"}],\"dbName\":\"pola_ruang_revisi_rtrw\"},\"base_layers\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"failed_jobs\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"connection\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"queue\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"payload\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"exception\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"failed_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"infrastruktur_struktur_ruang_badau\":{\"fields\":[{\"name\":\"gid\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"namobj\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"stsjrn\",\"kind\":\"scalar\",\"type\":\"Float\"}],\"dbName\":null},\"infrastruktur_struktur_ruang_geopark\":{\"fields\":[{\"name\":\"gid\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"namobj\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"stsjrn\",\"kind\":\"scalar\",\"type\":\"Float\"}],\"dbName\":null},\"infrastruktur_struktur_ruang_tanjung_kelayang\":{\"fields\":[{\"name\":\"gid\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"namobj\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"stsjrn\",\"kind\":\"scalar\",\"type\":\"Float\"}],\"dbName\":null},\"items\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"main_category_id\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"main_categories\",\"kind\":\"object\",\"type\":\"main_categories\",\"relationName\":\"itemsTomain_categories\"},{\"name\":\"locations\",\"kind\":\"object\",\"type\":\"locations\",\"relationName\":\"itemsTolocations\"}],\"dbName\":null},\"jaringan_struktur_ruang_badau\":{\"fields\":[{\"name\":\"gid\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"namobj\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"stsjrn\",\"kind\":\"scalar\",\"type\":\"Float\"}],\"dbName\":null},\"jaringan_struktur_ruang_geopark\":{\"fields\":[{\"name\":\"gid\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"namobj\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"stsjrn\",\"kind\":\"scalar\",\"type\":\"Float\"}],\"dbName\":null},\"jaringan_struktur_ruang_tanjung_kelayang\":{\"fields\":[{\"name\":\"gid\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"namobj\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"stsjrn\",\"kind\":\"scalar\",\"type\":\"Float\"}],\"dbName\":null},\"layers\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"layer_name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"geom_type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"url\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"map_type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"thumbnail\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"attribution\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"layer_type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"parents\",\"kind\":\"scalar\",\"type\":\"Int\"}],\"dbName\":null},\"locations\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"item_id\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"items\",\"kind\":\"object\",\"type\":\"items\",\"relationName\":\"itemsTolocations\"},{\"name\":\"sub_locations\",\"kind\":\"object\",\"type\":\"sub_locations\",\"relationName\":\"locationsTosub_locations\"}],\"dbName\":null},\"main_categories\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"items\",\"kind\":\"object\",\"type\":\"items\",\"relationName\":\"itemsTomain_categories\"}],\"dbName\":null},\"migrations\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"migration\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"batch\",\"kind\":\"scalar\",\"type\":\"Int\"}],\"dbName\":null},\"password_reset_tokens\":{\"fields\":[{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"token\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"personal_access_tokens\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"tokenable_type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tokenable_id\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"token\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"abilities\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"last_used_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"expires_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"pola_ruang_badau\":{\"fields\":[{\"name\":\"gid\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"namobj\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"jnsrpr\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"wadmkc\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"wadmkd\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"kkop_1\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lp2b_2\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"krb_03\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tod_04\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"teb_05\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"puslit\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"cagbud\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"resair\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"ksmpdn\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"hankam\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"kkarst\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"ptbgmb\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"mgrsat\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"rdbumi\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tpz_00\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"remark\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"luasha\",\"kind\":\"scalar\",\"type\":\"Decimal\"}],\"dbName\":null},\"pola_ruang_geopark\":{\"fields\":[{\"name\":\"gid\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"namobj\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"jnsrpr\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"wadmkc\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"wadmkd\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"kkop_1\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lp2b_2\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"krb_03\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tod_04\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"teb_05\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"puslit\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"cagbud\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"resair\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"ksmpdn\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"hankam\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"kkarst\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"ptbgmb\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"mgrsat\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"rdbumi\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tpz_00\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"remark\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"luasha\",\"kind\":\"scalar\",\"type\":\"Decimal\"}],\"dbName\":null},\"pola_ruang_tanjung_kelayang\":{\"fields\":[{\"name\":\"gid\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"namobj\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"jnsrpr\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"wadmkc\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"wadmkd\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"kkop_1\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lp2b_2\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"krb_03\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tod_04\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"teb_05\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"puslit\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"cagbud\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"resair\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"ksmpdn\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"hankam\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"kkarst\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"ptbgmb\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"mgrsat\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"rdbumi\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tpz_00\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"remark\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"luasha\",\"kind\":\"scalar\",\"type\":\"Decimal\"}],\"dbName\":null},\"spatial_ref_sys\":{\"fields\":[{\"name\":\"srid\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"auth_name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"auth_srid\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"srtext\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"proj4text\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"sub_locations\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"location_id\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"url\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"layer_type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"locations\",\"kind\":\"object\",\"type\":\"locations\",\"relationName\":\"locationsTosub_locations\"}],\"dbName\":null},\"users\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"fullname\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"is_active\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"is_superuser\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
defineDmmfProperty(exports.Prisma, config.runtimeDataModel);
config.compilerWasm = {
    getRuntime: async ()=>__turbopack_context__.r("[project]/src/generated/prisma/query_compiler_bg.js [app-route] (ecmascript)"),
    getQueryCompilerWasmModule: async ()=>{
        const { Buffer } = __turbopack_context__.r("[externals]/node:buffer [external] (node:buffer, cjs)");
        const { wasm } = __turbopack_context__.r("[project]/src/generated/prisma/query_compiler_bg.wasm-base64.js [app-route] (ecmascript)");
        const queryCompilerWasmFileBytes = Buffer.from(wasm, 'base64');
        return new WebAssembly.Module(queryCompilerWasmFileBytes);
    }
};
const PrismaClient = getPrismaClient(config);
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);
}),
];

//# sourceMappingURL=src_generated_prisma_a4e9cb94._.js.map