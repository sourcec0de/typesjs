var types=(function(){var d={number:Number,string:String,Array:Array,Object:Object};var e=function(g,f){Object.defineProperty(g.prototype,"__type__",{value:f})};var c=function(g,f){g.prototype.__type__=f};var b=function(i){var h,g;var f=function(){var j;if(b.enabled&&h){b.verify(h,arguments,"parameter")}j=i.apply(this,arguments);if(b.enabled&&g){b.verify(g,j,"return")}return j};f.params=f.p=function(){h=arguments;return this};f.returns=f.r=function(){g=arguments;return this};return f};var a=function(f){if(typeof console==="object"&&console.error){console.error("Stacktrace @types")}throw new TypeError(f)};b.verify=function(j,f,h){var k,m;for(var g in f){if(!f.hasOwnProperty(g)){continue}k=j[g];m=f.length>0&&f.__type__!=="string"?f[g]:f;if(typeof k==="undefined"){return}if(!((m instanceof k)||(m.__type__===k.prototype.__type__))){var l="in "+h+".\n\nExpected -> "+k.toString().match(/function (.*) ?\(/)[1]+"\nActual -> "+m.constructor.toString().match(/function (.*) ?\(/)[1]+"\n\n@types";a(l)}}};b.setupTypes=function(j){var g,f;for(var h in j){if(!j.hasOwnProperty(h)){continue}f=j[h];g=h;if(typeof Object.defineProperty==="function"){e(f,g)}else{c(f,g)}}};b.setupTypes(d);b.enabled=true;return b})();