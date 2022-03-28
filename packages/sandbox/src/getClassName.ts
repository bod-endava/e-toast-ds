const makeRegexp = (tok="&") => new RegExp(tok,"gi")


interface IGetClassName {
  base: string;
  token: string | undefined
  [key: string]: string | boolean | undefined
}

const preProcess = (obj:IGetClassName) => {
    if(obj.base){
        const { base, token="&", ...rest } = obj
        if(rest[token] === undefined){
            rest[token] = true
        }
        return Object.fromEntries(Object.entries(rest).map(([ key, val ]) => [ key.replace(makeRegexp(token),base), val]))
    } else {
        return obj
    }
}

const _getClassName = (obj: IGetClassName) => Object.entries(preProcess(obj)).map(([className,pred]) => {
    // @ts-ignore
  const shouldConcat = typeof(pred) === "function" ? pred() : pred;
    return shouldConcat ? className : undefined
}).filter(Boolean).join(" ")

const getClassName = (obj: IGetClassName) => {
    const __inner = _getClassName(obj)
    return (
      {
        token: obj?.token || "&",
        get base(){
          return obj?.base || __inner
        },
        extend(sub:string){
          return getClassName({
            base: sub.replace(makeRegexp(this.token), this.base || ""),
            token: undefined
          })
        },
        get(req: IGetClassName){
          return getClassName({
            ...req,
            base: req.base,
            token: req.token,
          })
        },
        toString: () => __inner,
        [Symbol.toPrimitive]: () => __inner,
      }
    )
}

export default getClassName
