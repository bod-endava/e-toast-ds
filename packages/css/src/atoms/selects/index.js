const selectClass = "eds-select"
const listClass = "eds-select__list"
const listOpenClass = "eds-select__list--open"
const selectedClass = "eds-select__selected"
const selectedContentClass = `${selectedClass}__content`
const arrowClass = `${selectedClass}__arrow`
const arrowIconClass = `${arrowClass}__icon`
const arrowOpenClass = `${arrowIconClass}--open`
const optionClass = "eds-select__option"
const firstClass = `${optionClass}--first`
const lastClass = `${optionClass}--last`
const optionHiddenClass = `${optionClass}--hidden`

const findByClass = (cl,node=document) => Array.from(node.getElementsByClassName(cl))
const findByTag = (tag,node=document) => Array.from(node.getElementsByTagName(tag))
const hasClass = (cl) => node => node.classList.contains(cl);
const isSelect = hasClass(selectClass)
const findFirstVisible = opts => opts.find(x => !hasClass(optionHiddenClass)(x))
const findDefaultValue = ($opts) => $opts.find(o => o.selected) || $opts[0]

const addFirstAndLastClasses = (opts) => {
    findFirstVisible(opts)?.classList.add(firstClass)
    opts.reverse();
    findFirstVisible(opts)?.classList.add(lastClass)
    opts.reverse();
}

const create = (element,attrs) => {
    const el = document.createElement(element);
    Object.entries(attrs).forEach(([ att, val ]) => {
        el.setAttribute(att,val)
    })
    return el
}
const span = (className) => create("span",{ class: className })
const div = (className) => create("div",{ class: className })

const fireEvent = (element,event) => {
    const evt = new Event(event,{
        bubbles: true,
    });
    element.dispatchEvent(evt)
}

const List = (arrow) => {
    const list = div(listClass)
    list.arrow = arrow
    list.isOpen = function(){
        return hasClass(listOpenClass)(list)
    }
    list.closeOtherSelects = function(){
        findByClass(listClass)
            .filter(x => x !== this)
            .forEach(l => l.close())
    }
    list.open = function(){
        if( !this.isOpen() ){
            this.classList.toggle(listOpenClass);
            this.arrow.classList.toggle(arrowOpenClass)
        }
    }
    list.close = function(){
        if( this.isOpen() ){
            this.classList.toggle(listOpenClass);
            this.arrow.classList.toggle(arrowOpenClass)
        }
    }
    list.toggle = function(){
        if( this.isOpen() ){
            this.close()
        } else {
            this.open()
        }
    }
    return list
}

const attachSelectBehavior = ($node) => {
    const $select = findByTag("select",$node)[0]
    
    const selectedItem = span(selectedContentClass)
    const selected = span(selectedClass)
    
    const arrow = span(arrowClass)
    const arrowIcon = span(arrowIconClass)
    arrow.appendChild(arrowIcon)
    
    const list = List(arrowIcon)

    const createOption = ($optionRef,idx) => {
        const opt = div(optionClass)
        if( $optionRef.hidden ){
            opt.classList.toggle(optionHiddenClass)
        }
        opt.innerHTML = $optionRef.innerHTML;
        opt.addEventListener("click",() => {
            $select.selectedIndex = idx
            selectedItem.innerHTML = $optionRef.innerHTML
            list.close();
            fireEvent($select,"change")
            fireEvent($optionRef,"click")
        });
        return opt;
    }
    const $opts = findByTag("option",$node);
    const opts = $opts.map(createOption);
    const defaultOpt = findDefaultValue($opts);
    selectedItem.innerHTML = defaultOpt?.innerHTML || "";

    addFirstAndLastClasses(opts)
    list.append(...opts);
    
    selected.addEventListener("click", () => {
        if(!$select.disabled && !$node.attributes.disabled){
            list.toggle()
        }
        list.closeOtherSelects()
    })
    selected.appendChild(selectedItem)
    selected.appendChild(arrow)
    $node.appendChild(selected)
    $node.appendChild(list);
}

const onInit = () => {
    window.addEventListener("click",(e) => {
        if( !e.target.className.includes(selectClass) ){
            findByClass(listClass).forEach(l => l.close())
        }
    })
    const selects = findByClass(selectClass)
    selects.forEach(attachSelectBehavior);
}

const onMutation = (mutation, observer) => {
    const selects = Array.from(mutation.addedNodes)
        .flatMap(n => {
            if( n.getElementsByClassName ){
                if( isSelect(n) ){
                    return n
                }
                return findByClass(selectClass,n)
            }
            return []
        })
    selects.forEach(attachSelectBehavior);
}

export default {
    onInit,
    onMutation
}