export const findByClass = (cl,node=document) => Array.from(node.getElementsByClassName(cl.toString()))
export const findByTag = (tag,node=document) => Array.from(node.getElementsByTagName(tag))
export const toggleClass = (cl,$node) => $node.classList.toggle(cl.toString());
export const addClass = (cl,$node) => $node.classList.add(cl.toString());
export const removeClass = (cl,$node) => $node.classList.remove(cl.toString());
export const hasClass = (cl) => node => node.classList.contains(cl.toString());
export const fireEvent = (element,event) => {
    const evt = new Event(event,{
        bubbles: true,
    });
    element.dispatchEvent(evt)
}
export const fireHtmlEvent = (element,eventName) => {
    event = document.createEvent('HTMLEvents');
    event.initEvent(eventName, true, false);
    element.dispatchEvent(event);
}
export const complement = fn => (...args) => !fn(...args)

export const create = (element,attrs) => {
    const el = document.createElement(element);
    Object.entries(attrs).forEach(([ att, val ]) => {
        el.setAttribute(att,val)
    })
    return el
}

export const span = (className) => create("span",{ class: className.toString() })
export const div = (className) => create("div",{ class: className.toString() })
export const text = (t) => document.createTextNode(t);
export const append = ($node,$child) => {
    $node.appendChild($child);
    return $node;
}
export const hasAttr = (attr,$node) => $node.attributes.getNamedItem(attr)

const _BEM = (base,current) => {
    if(!current){
        current = base;
    }
    return {
        toString: () => current.toString(),
        modifier: (mod) => BEM(`${base}--${mod}`,`${base}--${mod}`),
        element: (elem) => BEM(`${base}__${elem}`,`${base}__${elem}`),
        addModifer: (mod) => BEM(base,`${current} ${base}--${mod}`),
    }
}
_BEM.combine = (...cls) => cls.map(cl => cl.toString()).join(" ");
export const BEM = _BEM;

export const combine = (...fns) => (...args) => fns.map(fn => fn(...args));
export const and = (...fns) => (...args) => combine(...fns)(...args).reduce((acc,next) => acc && next,true)
