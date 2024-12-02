/* esm.sh - esbuild bundle(openai@4.73.1/helpers/zod) es2022 production */
function O(e,t){let r={...e};return Object.defineProperties(r,{$brand:{value:"auto-parseable-response-format",enumerable:!1},$parseRaw:{value:t,enumerable:!1}}),r}function $(e,{parser:t,callback:r}){let n={...e};return Object.defineProperties(n,{$brand:{value:"auto-parseable-tool",enumerable:!1},$parseRaw:{value:t,enumerable:!1},$callback:{value:r,enumerable:!1}}),n}var j=Symbol("Let zodToJsonSchema decide on which parser to use"),A={name:void 0,$refStrategy:"root",effectStrategy:"input",pipeStrategy:"all",dateStrategy:"format:date-time",mapStrategy:"entries",nullableStrategy:"from-target",removeAdditionalStrategy:"passthrough",definitionPath:"definitions",target:"jsonSchema7",strictUnions:!1,errorMessages:!1,markdownDescription:!1,patternStrategy:"escape",applyRegexFlags:!1,emailStrategy:"format:email",base64Strategy:"contentEncoding:base64",nameStrategy:"ref"},T=e=>typeof e=="string"?{...A,basePath:["#"],definitions:{},name:e}:{...A,basePath:["#"],definitions:{},...e};var h=e=>"_def"in e?e._def:e;function M(e){if(!e)return!0;for(let t in e)return!1;return!0}var w=e=>{let t=T(e),r=t.name!==void 0?[...t.basePath,t.definitionPath,t.name]:t.basePath;return{...t,currentPath:r,propertyPath:void 0,seenRefs:new Set,seen:new Map(Object.entries(t.definitions).map(([n,a])=>[h(a),{def:h(a),path:[...t.basePath,t.definitionPath,n],jsonSchema:void 0}]))}};function x(e,t,r,n){n?.errorMessages&&r&&(e.errorMessage={...e.errorMessage,[t]:r})}function p(e,t,r,n,a){e[t]=r,x(e,t,n,a)}import{ZodFirstPartyTypeKind as u}from"./zod.mjs";function R(){return{}}import{ZodFirstPartyTypeKind as le}from"./zod.mjs";function N(e,t){let r={type:"array"};return e.type?._def?.typeName!==le.ZodAny&&(r.items=i(e.type._def,{...t,currentPath:[...t.currentPath,"items"]})),e.minLength&&p(r,"minItems",e.minLength.value,e.minLength.message,t),e.maxLength&&p(r,"maxItems",e.maxLength.value,e.maxLength.message,t),e.exactLength&&(p(r,"minItems",e.exactLength.value,e.exactLength.message,t),p(r,"maxItems",e.exactLength.value,e.exactLength.message,t)),r}function E(e,t){let r={type:"integer",format:"int64"};if(!e.checks)return r;for(let n of e.checks)switch(n.kind){case"min":t.target==="jsonSchema7"?n.inclusive?p(r,"minimum",n.value,n.message,t):p(r,"exclusiveMinimum",n.value,n.message,t):(n.inclusive||(r.exclusiveMinimum=!0),p(r,"minimum",n.value,n.message,t));break;case"max":t.target==="jsonSchema7"?n.inclusive?p(r,"maximum",n.value,n.message,t):p(r,"exclusiveMaximum",n.value,n.message,t):(n.inclusive||(r.exclusiveMaximum=!0),p(r,"maximum",n.value,n.message,t));break;case"multipleOf":p(r,"multipleOf",n.value,n.message,t);break}return r}function z(){return{type:"boolean"}}function L(e,t){return i(e.type._def,t)}var I=(e,t)=>i(e.innerType._def,t);function D(e,t,r){let n=r??t.dateStrategy;if(Array.isArray(n))return{anyOf:n.map((a,o)=>D(e,t,a))};switch(n){case"string":case"format:date-time":return{type:"string",format:"date-time"};case"format:date":return{type:"string",format:"date"};case"integer":return fe(e,t)}}var fe=(e,t)=>{let r={type:"integer",format:"unix-time"};if(t.target==="openApi3")return r;for(let n of e.checks)switch(n.kind){case"min":p(r,"minimum",n.value,n.message,t);break;case"max":p(r,"maximum",n.value,n.message,t);break}return r};function F(e,t){return{...i(e.innerType._def,t),default:e.defaultValue()}}function C(e,t,r){return t.effectStrategy==="input"?i(e.schema._def,t,r):{}}function U(e){return{type:"string",enum:[...e.values]}}var de=e=>"type"in e&&e.type==="string"?!1:"allOf"in e;function B(e,t){let r=[i(e.left._def,{...t,currentPath:[...t.currentPath,"allOf","0"]}),i(e.right._def,{...t,currentPath:[...t.currentPath,"allOf","1"]})].filter(o=>!!o),n=t.target==="jsonSchema2019-09"?{unevaluatedProperties:!1}:void 0,a=[];return r.forEach(o=>{if(de(o))a.push(...o.allOf),o.unevaluatedProperties===void 0&&(n=void 0);else{let s=o;if("additionalProperties"in o&&o.additionalProperties===!1){let{additionalProperties:c,...d}=o;s=d}else n=void 0;a.push(s)}}),a.length?{allOf:a,...n}:void 0}function J(e,t){let r=typeof e.value;return r!=="bigint"&&r!=="number"&&r!=="boolean"&&r!=="string"?{type:Array.isArray(e.value)?"array":"object"}:t.target==="openApi3"?{type:r==="bigint"?"integer":r,enum:[e.value]}:{type:r==="bigint"?"integer":r,const:e.value}}import{ZodFirstPartyTypeKind as k}from"./zod.mjs";var _,g={cuid:/^[cC][^\s-]{8,}$/,cuid2:/^[0-9a-z]+$/,ulid:/^[0-9A-HJKMNP-TV-Z]{26}$/,email:/^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,emoji:()=>(_===void 0&&(_=RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$","u")),_),uuid:/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,ipv4:/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,ipv6:/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,base64:/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,nanoid:/^[a-zA-Z0-9_-]{21}$/};function P(e,t){let r={type:"string"};function n(a){return t.patternStrategy==="escape"?ge(a):a}if(e.checks)for(let a of e.checks)switch(a.kind){case"min":p(r,"minLength",typeof r.minLength=="number"?Math.max(r.minLength,a.value):a.value,a.message,t);break;case"max":p(r,"maxLength",typeof r.maxLength=="number"?Math.min(r.maxLength,a.value):a.value,a.message,t);break;case"email":switch(t.emailStrategy){case"format:email":l(r,"email",a.message,t);break;case"format:idn-email":l(r,"idn-email",a.message,t);break;case"pattern:zod":f(r,g.email,a.message,t);break}break;case"url":l(r,"uri",a.message,t);break;case"uuid":l(r,"uuid",a.message,t);break;case"regex":f(r,a.regex,a.message,t);break;case"cuid":f(r,g.cuid,a.message,t);break;case"cuid2":f(r,g.cuid2,a.message,t);break;case"startsWith":f(r,RegExp(`^${n(a.value)}`),a.message,t);break;case"endsWith":f(r,RegExp(`${n(a.value)}$`),a.message,t);break;case"datetime":l(r,"date-time",a.message,t);break;case"date":l(r,"date",a.message,t);break;case"time":l(r,"time",a.message,t);break;case"duration":l(r,"duration",a.message,t);break;case"length":p(r,"minLength",typeof r.minLength=="number"?Math.max(r.minLength,a.value):a.value,a.message,t),p(r,"maxLength",typeof r.maxLength=="number"?Math.min(r.maxLength,a.value):a.value,a.message,t);break;case"includes":{f(r,RegExp(n(a.value)),a.message,t);break}case"ip":{a.version!=="v6"&&l(r,"ipv4",a.message,t),a.version!=="v4"&&l(r,"ipv6",a.message,t);break}case"emoji":f(r,g.emoji,a.message,t);break;case"ulid":{f(r,g.ulid,a.message,t);break}case"base64":{switch(t.base64Strategy){case"format:binary":{l(r,"binary",a.message,t);break}case"contentEncoding:base64":{p(r,"contentEncoding","base64",a.message,t);break}case"pattern:zod":{f(r,g.base64,a.message,t);break}}break}case"nanoid":f(r,g.nanoid,a.message,t);case"toLowerCase":case"toUpperCase":case"trim":break;default:}return r}var ge=e=>Array.from(e).map(t=>/[a-zA-Z0-9]/.test(t)?t:`\\${t}`).join(""),l=(e,t,r,n)=>{e.format||e.anyOf?.some(a=>a.format)?(e.anyOf||(e.anyOf=[]),e.format&&(e.anyOf.push({format:e.format,...e.errorMessage&&n.errorMessages&&{errorMessage:{format:e.errorMessage.format}}}),delete e.format,e.errorMessage&&(delete e.errorMessage.format,Object.keys(e.errorMessage).length===0&&delete e.errorMessage)),e.anyOf.push({format:t,...r&&n.errorMessages&&{errorMessage:{format:r}}})):p(e,"format",t,r,n)},f=(e,t,r,n)=>{e.pattern||e.allOf?.some(a=>a.pattern)?(e.allOf||(e.allOf=[]),e.pattern&&(e.allOf.push({pattern:e.pattern,...e.errorMessage&&n.errorMessages&&{errorMessage:{pattern:e.errorMessage.pattern}}}),delete e.pattern,e.errorMessage&&(delete e.errorMessage.pattern,Object.keys(e.errorMessage).length===0&&delete e.errorMessage)),e.allOf.push({pattern:V(t,n),...r&&n.errorMessages&&{errorMessage:{pattern:r}}})):p(e,"pattern",V(t,n),r,n)},V=(e,t)=>{let r=typeof e=="function"?e():e;if(!t.applyRegexFlags||!r.flags)return r.source;let n={i:r.flags.includes("i"),m:r.flags.includes("m"),s:r.flags.includes("s")},a=n.i?r.source.toLowerCase():r.source,o="",s=!1,c=!1,d=!1;for(let m=0;m<a.length;m++){if(s){o+=a[m],s=!1;continue}if(n.i){if(c){if(a[m].match(/[a-z]/)){d?(o+=a[m],o+=`${a[m-2]}-${a[m]}`.toUpperCase(),d=!1):a[m+1]==="-"&&a[m+2]?.match(/[a-z]/)?(o+=a[m],d=!0):o+=`${a[m]}${a[m].toUpperCase()}`;continue}}else if(a[m].match(/[a-z]/)){o+=`[${a[m]}${a[m].toUpperCase()}]`;continue}}if(n.m){if(a[m]==="^"){o+=`(^|(?<=[\r
]))`;continue}else if(a[m]==="$"){o+=`($|(?=[\r
]))`;continue}}if(n.s&&a[m]==="."){o+=c?`${a[m]}\r
`:`[${a[m]}\r
]`;continue}o+=a[m],a[m]==="\\"?s=!0:c&&a[m]==="]"?c=!1:!c&&a[m]==="["&&(c=!0)}try{let m=new RegExp(o)}catch{return console.warn(`Could not convert regex pattern at ${t.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`),r.source}return o};function v(e,t){if(t.target==="openApi3"&&e.keyType?._def.typeName===k.ZodEnum)return{type:"object",required:e.keyType._def.values,properties:e.keyType._def.values.reduce((n,a)=>({...n,[a]:i(e.valueType._def,{...t,currentPath:[...t.currentPath,"properties",a]})??{}}),{}),additionalProperties:!1};let r={type:"object",additionalProperties:i(e.valueType._def,{...t,currentPath:[...t.currentPath,"additionalProperties"]})??{}};if(t.target==="openApi3")return r;if(e.keyType?._def.typeName===k.ZodString&&e.keyType._def.checks?.length){let n=Object.entries(P(e.keyType._def,t)).reduce((a,[o,s])=>o==="type"?a:{...a,[o]:s},{});return{...r,propertyNames:n}}else if(e.keyType?._def.typeName===k.ZodEnum)return{...r,propertyNames:{enum:e.keyType._def.values}};return r}function q(e,t){if(t.mapStrategy==="record")return v(e,t);let r=i(e.keyType._def,{...t,currentPath:[...t.currentPath,"items","items","0"]})||{},n=i(e.valueType._def,{...t,currentPath:[...t.currentPath,"items","items","1"]})||{};return{type:"array",maxItems:125,items:{type:"array",items:[r,n],minItems:2,maxItems:2}}}function K(e){let t=e.values,n=Object.keys(e.values).filter(o=>typeof t[t[o]]!="number").map(o=>t[o]),a=Array.from(new Set(n.map(o=>typeof o)));return{type:a.length===1?a[0]==="string"?"string":"number":["string","number"],enum:n}}function W(){return{not:{}}}function G(e){return e.target==="openApi3"?{enum:["null"],nullable:!0}:{type:"null"}}var b={ZodString:"string",ZodNumber:"number",ZodBigInt:"integer",ZodBoolean:"boolean",ZodNull:"null"};function Q(e,t){if(t.target==="openApi3")return H(e,t);let r=e.options instanceof Map?Array.from(e.options.values()):e.options;if(r.every(n=>n._def.typeName in b&&(!n._def.checks||!n._def.checks.length))){let n=r.reduce((a,o)=>{let s=b[o._def.typeName];return s&&!a.includes(s)?[...a,s]:a},[]);return{type:n.length>1?n:n[0]}}else if(r.every(n=>n._def.typeName==="ZodLiteral"&&!n.description)){let n=r.reduce((a,o)=>{let s=typeof o._def.value;switch(s){case"string":case"number":case"boolean":return[...a,s];case"bigint":return[...a,"integer"];case"object":if(o._def.value===null)return[...a,"null"];case"symbol":case"undefined":case"function":default:return a}},[]);if(n.length===r.length){let a=n.filter((o,s,c)=>c.indexOf(o)===s);return{type:a.length>1?a:a[0],enum:r.reduce((o,s)=>o.includes(s._def.value)?o:[...o,s._def.value],[])}}}else if(r.every(n=>n._def.typeName==="ZodEnum"))return{type:"string",enum:r.reduce((n,a)=>[...n,...a._def.values.filter(o=>!n.includes(o))],[])};return H(e,t)}var H=(e,t)=>{let r=(e.options instanceof Map?Array.from(e.options.values()):e.options).map((n,a)=>i(n._def,{...t,currentPath:[...t.currentPath,"anyOf",`${a}`]})).filter(n=>!!n&&(!t.strictUnions||typeof n=="object"&&Object.keys(n).length>0));return r.length?{anyOf:r}:void 0};function X(e,t){if(["ZodString","ZodNumber","ZodBigInt","ZodBoolean","ZodNull"].includes(e.innerType._def.typeName)&&(!e.innerType._def.checks||!e.innerType._def.checks.length))return t.target==="openApi3"||t.nullableStrategy==="property"?{type:b[e.innerType._def.typeName],nullable:!0}:{type:[b[e.innerType._def.typeName],"null"]};if(t.target==="openApi3"){let n=i(e.innerType._def,{...t,currentPath:[...t.currentPath]});return n&&"$ref"in n?{allOf:[n],nullable:!0}:n&&{...n,nullable:!0}}let r=i(e.innerType._def,{...t,currentPath:[...t.currentPath,"anyOf","0"]});return r&&{anyOf:[r,{type:"null"}]}}function Y(e,t){let r={type:"number"};if(!e.checks)return r;for(let n of e.checks)switch(n.kind){case"int":r.type="integer",x(r,"type",n.message,t);break;case"min":t.target==="jsonSchema7"?n.inclusive?p(r,"minimum",n.value,n.message,t):p(r,"exclusiveMinimum",n.value,n.message,t):(n.inclusive||(r.exclusiveMinimum=!0),p(r,"minimum",n.value,n.message,t));break;case"max":t.target==="jsonSchema7"?n.inclusive?p(r,"maximum",n.value,n.message,t):p(r,"exclusiveMaximum",n.value,n.message,t):(n.inclusive||(r.exclusiveMaximum=!0),p(r,"maximum",n.value,n.message,t));break;case"multipleOf":p(r,"multipleOf",n.value,n.message,t);break}return r}function ye(e,t){return t.removeAdditionalStrategy==="strict"?e.catchall._def.typeName==="ZodNever"?e.unknownKeys!=="strict":i(e.catchall._def,{...t,currentPath:[...t.currentPath,"additionalProperties"]})??!0:e.catchall._def.typeName==="ZodNever"?e.unknownKeys==="passthrough":i(e.catchall._def,{...t,currentPath:[...t.currentPath,"additionalProperties"]})??!0}function ee(e,t){let r={type:"object",...Object.entries(e.shape()).reduce((n,[a,o])=>{if(o===void 0||o._def===void 0)return n;let s=i(o._def,{...t,currentPath:[...t.currentPath,"properties",a],propertyPath:[...t.currentPath,"properties",a]});return s===void 0?n:{properties:{...n.properties,[a]:s},required:o.isOptional()&&!t.openaiStrictMode?n.required:[...n.required,a]}},{properties:{},required:[]}),additionalProperties:ye(e,t)};return r.required.length||delete r.required,r}var te=(e,t)=>{if(t.currentPath.toString()===t.propertyPath?.toString())return i(e.innerType._def,t);let r=i(e.innerType._def,{...t,currentPath:[...t.currentPath,"anyOf","1"]});return r?{anyOf:[{not:{}},r]}:{}};var re=(e,t)=>{if(t.pipeStrategy==="input")return i(e.in._def,t);if(t.pipeStrategy==="output")return i(e.out._def,t);let r=i(e.in._def,{...t,currentPath:[...t.currentPath,"allOf","0"]}),n=i(e.out._def,{...t,currentPath:[...t.currentPath,"allOf",r?"1":"0"]});return{allOf:[r,n].filter(a=>a!==void 0)}};function ne(e,t){return i(e.type._def,t)}function ae(e,t){let n={type:"array",uniqueItems:!0,items:i(e.valueType._def,{...t,currentPath:[...t.currentPath,"items"]})};return e.minSize&&p(n,"minItems",e.minSize.value,e.minSize.message,t),e.maxSize&&p(n,"maxItems",e.maxSize.value,e.maxSize.message,t),n}function oe(e,t){return e.rest?{type:"array",minItems:e.items.length,items:e.items.map((r,n)=>i(r._def,{...t,currentPath:[...t.currentPath,"items",`${n}`]})).reduce((r,n)=>n===void 0?r:[...r,n],[]),additionalItems:i(e.rest._def,{...t,currentPath:[...t.currentPath,"additionalItems"]})}:{type:"array",minItems:e.items.length,maxItems:e.items.length,items:e.items.map((r,n)=>i(r._def,{...t,currentPath:[...t.currentPath,"items",`${n}`]})).reduce((r,n)=>n===void 0?r:[...r,n],[])}}function ie(){return{not:{}}}function se(){return{}}var ue=(e,t)=>i(e.innerType._def,t);function i(e,t,r=!1){let n=t.seen.get(e);if(t.override){let s=t.override?.(e,t,n,r);if(s!==j)return s}if(n&&!r){let s=he(n,t);if(s!==void 0)return"$ref"in s&&t.seenRefs.add(s.$ref),s}let a={def:e,path:t.currentPath,jsonSchema:void 0};t.seen.set(e,a);let o=Pe(e,e.typeName,t,r);return o&&ve(e,t,o),a.jsonSchema=o,o}var he=(e,t)=>{switch(t.$refStrategy){case"root":return{$ref:e.path.join("/")};case"extract-to-root":let r=e.path.slice(t.basePath.length+1).join("_");return r!==t.name&&t.nameStrategy==="duplicate-ref"&&(t.definitions[r]=e.def),{$ref:[...t.basePath,t.definitionPath,r].join("/")};case"relative":return{$ref:be(t.currentPath,e.path)};case"none":case"seen":return e.path.length<t.currentPath.length&&e.path.every((n,a)=>t.currentPath[a]===n)?(console.warn(`Recursive reference detected at ${t.currentPath.join("/")}! Defaulting to any`),{}):t.$refStrategy==="seen"?{}:void 0}},be=(e,t)=>{let r=0;for(;r<e.length&&r<t.length&&e[r]===t[r];r++);return[(e.length-r).toString(),...t.slice(r)].join("/")},Pe=(e,t,r,n)=>{switch(t){case u.ZodString:return P(e,r);case u.ZodNumber:return Y(e,r);case u.ZodObject:return ee(e,r);case u.ZodBigInt:return E(e,r);case u.ZodBoolean:return z();case u.ZodDate:return D(e,r);case u.ZodUndefined:return ie();case u.ZodNull:return G(r);case u.ZodArray:return N(e,r);case u.ZodUnion:case u.ZodDiscriminatedUnion:return Q(e,r);case u.ZodIntersection:return B(e,r);case u.ZodTuple:return oe(e,r);case u.ZodRecord:return v(e,r);case u.ZodLiteral:return J(e,r);case u.ZodEnum:return U(e);case u.ZodNativeEnum:return K(e);case u.ZodNullable:return X(e,r);case u.ZodOptional:return te(e,r);case u.ZodMap:return q(e,r);case u.ZodSet:return ae(e,r);case u.ZodLazy:return i(e.getter()._def,r);case u.ZodPromise:return ne(e,r);case u.ZodNaN:case u.ZodNever:return W();case u.ZodEffects:return C(e,r,n);case u.ZodAny:return R();case u.ZodUnknown:return se();case u.ZodDefault:return F(e,r);case u.ZodBranded:return L(e,r);case u.ZodReadonly:return ue(e,r);case u.ZodCatch:return I(e,r);case u.ZodPipeline:return re(e,r);case u.ZodFunction:case u.ZodVoid:case u.ZodSymbol:return;default:return(a=>{})(t)}},ve=(e,t,r)=>(e.description&&(r.description=e.description,t.markdownDescription&&(r.markdownDescription=e.description)),r);var pe=(e,t)=>{let r=w(t),n=typeof t=="string"?t:t?.nameStrategy==="title"?void 0:t?.name,a=i(e._def,n===void 0?r:{...r,currentPath:[...r.basePath,r.definitionPath,n]},!1)??{},o=typeof t=="object"&&t.name!==void 0&&t.nameStrategy==="title"?t.name:void 0;o!==void 0&&(a.title=o);let s=(()=>{if(M(r.definitions))return;let d={},m=new Set;for(let S=0;S<500;S++){let Z=Object.entries(r.definitions).filter(([y])=>!m.has(y));if(Z.length===0)break;for(let[y,ce]of Z)d[y]=i(h(ce),{...r,currentPath:[...r.basePath,r.definitionPath,y]},!0)??{},m.add(y)}return d})(),c=n===void 0?s?{...a,[r.definitionPath]:s}:a:r.nameStrategy==="duplicate-ref"?{...a,...s||r.seenRefs.size?{[r.definitionPath]:{...s,...r.seenRefs.size?{[n]:a}:void 0}}:void 0}:{$ref:[...r.$refStrategy==="relative"?[]:r.basePath,r.definitionPath,n].join("/"),[r.definitionPath]:{...s,[n]:a}};return r.target==="jsonSchema7"?c.$schema="http://json-schema.org/draft-07/schema#":r.target==="jsonSchema2019-09"&&(c.$schema="https://json-schema.org/draft/2019-09/schema#"),c};function me(e,t){return pe(e,{openaiStrictMode:!0,name:t.name,nameStrategy:"duplicate-ref",$refStrategy:"extract-to-root",nullableStrategy:"property"})}function hr(e,t,r){return O({type:"json_schema",json_schema:{...r,name:t,strict:!0,schema:me(e,{name:t})}},n=>e.parse(JSON.parse(n)))}function br(e){return $({type:"function",function:{name:e.name,parameters:me(e.parameters,{name:e.name}),strict:!0,...e.description?{description:e.description}:void 0}},{callback:e.function,parser:t=>e.parameters.parse(JSON.parse(t))})}export{br as zodFunction,hr as zodResponseFormat};
//# sourceMappingURL=zod.bundle.js.map