const makeRegexp = (tok="&") => new RegExp(tok,"gi")
const preProcess = obj => {
    if(obj.base){
        const { base, token="&", ...rest } = obj
        if(rest[token] === undefined){
            rest[token] = true
        };
        return Object.fromEntries(Object.entries(rest).map(([ key, val ]) => [ key.replace(makeRegexp(token),base), val]))
    } else {
        return obj
    }
}

const _getClassName = (obj) => Object.entries(preProcess(obj)).map(([className,pred]) => {
    const shouldConcat = typeof(pred) === "function" ? pred() : pred;
    return shouldConcat ? className : undefined
}).filter(Boolean).join(" ")

const getClassName = (obj) => {
    const __inner = _getClassName(obj)
    const res = {
        token: obj?.token || "&",
        get base(){
            return obj?.base || __inner
        },
        extend(sub){
            return getClassName({
                base: sub.replace(makeRegexp(this.token), this.base || "")
            })
        },
        get(obj){
            return getClassName({
                base: this.base,
                ...obj
            })
        },
        toString: () => __inner,
        [Symbol.toPrimitive]: () => __inner,
    };
    return res;
}

export default getClassName