import { findByClass, findByTag, hasClass, fireEvent, span, div, BEM } from '../../utility'

const selectClass = "eds-select"
const listClass = BEM(selectClass).element("list");
const listOpenClass = BEM(listClass).modifier("open");
const selectedClass = BEM(selectClass).element("selected");
const selectedContentClass = BEM(selectedClass).element("content");
const arrowClass = BEM(selectedClass).element("arrow");
const arrowIconClass = BEM(arrowClass).element("icon");
const arrowOpenClass = BEM(arrowIconClass).modifier("open")
const optionClass = BEM(selectClass).element("option");
const optionHiddenClass = BEM(optionClass).modifier("hidden");

const isSelect = hasClass(selectClass)
const isPartOfSelect = node => Array.from(node.classList).some(cl => cl.includes("eds-select"))
const findDefaultValue = ($opts) => $opts.find(o => o.selected) || $opts[0]

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
            this.classList.toggle(listOpenClass.toString());
            this.arrow.classList.toggle(arrowOpenClass.toString());
        }
    }
    list.close = function(){
        if( this.isOpen() ){
            this.classList.toggle(listOpenClass.toString());
            this.arrow.classList.toggle(arrowOpenClass.toString());
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
            opt.classList.toggle(optionHiddenClass.toString())
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
        if( !isPartOfSelect(e.target) ){
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