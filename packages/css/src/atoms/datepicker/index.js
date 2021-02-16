import { 
    hasClass, findByClass, div, append, 
    text, findByTag, hasAttr, BEM, fireEvent, 
    addClass, removeClass, and, complement 
} from '../../utility';

const datepickerClass = "eds-datepicker";
const containerClass = BEM(datepickerClass).element("container");
const iconClass = BEM(datepickerClass).element("icon");
const calendarClass = BEM(datepickerClass).element("calendar");
const calendarOffClass = BEM(calendarClass).modifier("off");
const calendarContentClass = BEM(calendarClass).element("content");
const calendarCellClass = BEM(calendarClass).element("cell");
const calendarCellOutClass = BEM(calendarCellClass).addModifer("grayed-out");
const calendarDayCellClass =  BEM(calendarCellClass).addModifer("weekday");
const calendarHeaderClass = BEM(calendarClass).element("header");
const calendarHeaderLabelClass = BEM(calendarHeaderClass).element("label");
const calendarHeaderLeftClass = BEM(calendarHeaderClass).element("button").addModifer("left");
const calendarHeaderRightClass = BEM(calendarHeaderClass).element("button").addModifer("right");

const isNumeric = (str) => {
    if (typeof str != "string") {
        return false
    } 
    return !isNaN(str) && !isNaN(parseFloat(str)) 
  }
const padded = n => n < 10 ? `0${n}` : n;
const clamp = (min,max) => val => {
    const n = Number(val)
    if( n < min ){
        return min
    } else if( n > max ){
        return max
    } else {
        return n
    }
}
const isLeap = (year) => {
    if(year % 4 === 0){
        if( year % 100 === 0 ){
            return year % 400 === 0;
        }
        return true;
    } 
    return false;
}
const limitDay = (day,month,year) => {
    switch(month){
        case 1:
            return isLeap(year) ? clamp(1,29)(day) : clamp(1,28)(day)
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
            return clamp(1,31)(day);
        case 3:
        case 5:
        case 8:
        case 10:
            return clamp(1,30)(day)
    }
}
const limitMonth = clamp(1,12);
const isPartOfDatepicker = node => Array.from(node.classList).some(cl => cl.includes("eds-datepicker"));
const isDatepicker = hasClass(datepickerClass)
const isValueCell = and(
    hasClass(calendarCellClass),
    complement(hasClass(calendarDayCellClass))
);

const genNumber = (start,amount,delta) => {
    const ns = []
    for(let i = start ; ns.length < amount ; i += delta){
        ns.push(i);
    }
    return ns
}
const genPrevious = (n,today) => {
    const lastDayOfPrev = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    return genNumber(lastDayOfPrev,n,-1).reverse();
}
const genNext = (n) => genNumber(1,n,1);

const Icon = () => append(div(iconClass),text("calendar"))
const GrayCell = (txt) => append(div(calendarCellOutClass),text(txt));
const markAs = mark => node => {node.__mark = mark; return node}
const isMarkedAs = (mark) => node => node.__mark === mark;
const Cell = (txt) => append(div(calendarCellClass),text(txt));
const DayCell = (txt) => append(div(calendarDayCellClass),text(txt))

const CalendarContent = (today) => {
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    const weekdays = ["Su","Mo","Tu","We","Th","Fr","Sa"].map(DayCell);
    const beforePadding = genPrevious(firstDayOfMonth.getDay(),today).map(GrayCell).map(markAs("prevMonth"));
    const days = genNumber(1,lastDayOfMonth.getDate(),1).map(Cell);
    const afterPadding = genNext(6 - lastDayOfMonth.getDay()).map(GrayCell).map(markAs("nextMonth"));

    const calendarDays = weekdays.concat(beforePadding).concat(days).concat(afterPadding);
    const calendarContent = div(calendarContentClass)
    calendarContent.append(...calendarDays);

    return calendarContent
}

const monthNames = [
    "January", "February", "March", "April", 
    "May", "June", "July", "August", "September", 
    "October", "November", "December"
];
const CalendarHeader = (today) => {
    const header = div(calendarHeaderClass);
    const monthLabel = div(calendarHeaderLabelClass);
    monthLabel.innerHTML = `${monthNames[today.getMonth()]} ${today.getFullYear()}`;
    const leftButton = markAs("prevMonth")(div(calendarHeaderLeftClass));
    leftButton.innerHTML = "chevron left";
    const rightButton = markAs("nextMonth")(div(calendarHeaderRightClass));
    rightButton.innerHTML = "chevron right";

    header.setMonth = (day) => {
        monthLabel.innerHTML = `${monthNames[day.getMonth()]} ${day.getFullYear()}`;
    }

    header.append(leftButton,monthLabel,rightButton);

    return header
}

const Calendar = ($input) => {
    const fullCl = BEM.combine(
        calendarClass,
        calendarOffClass
    )
    
    const $calendar = div(fullCl);
    const calendarContent = CalendarContent(new Date());
    const calendarHeader = CalendarHeader(new Date());
    $calendar.__input = $input;
    $calendar.__header = calendarHeader;
    $calendar.__content = calendarContent;
    $calendar.__day = new Date();

    $calendar.isOpen = () => !hasClass(calendarOffClass)($calendar);
    
    $calendar.toggle = () => {
        if($calendar.isOpen()){
            $calendar.close()
        } else {
            $calendar.open()
        }
    }

    $calendar.open = () => {
        removeClass(calendarOffClass,$calendar);
        findByClass(calendarClass)
            .filter(x => x !== $calendar)
            .forEach(cal => cal.close());
    }
    
    $calendar.close = () => {
        addClass(calendarOffClass,$calendar);
    }

    $calendar.nextMonth = () => {
        $calendar.__day.setDate(1);
        $calendar.__day.setMonth($calendar.__day.getMonth() + 1);
        $calendar.refresh();
    }

    $calendar.prevMonth = () => {
        $calendar.__day.setDate(1);
        $calendar.__day.setMonth($calendar.__day.getMonth() - 1);
        $calendar.refresh();
    }

    $calendar.refresh = () => {
        const newContent = CalendarContent($calendar.__day);
        $calendar.replaceChild(newContent,$calendar.__content);
        $calendar.__content = newContent;
        $calendar.__header.setMonth($calendar.__day);
    }

    $calendar.setDate = (day,month,fullYear) => {
        $calendar.__day.setFullYear(fullYear);
        $calendar.__day.setMonth(month);
        $calendar.__day.setDate(day);
        $calendar.refresh();
    }

    $calendar.addEventListener("click",(e) => {
        if(isMarkedAs("nextMonth")(e.target)){
            $calendar.nextMonth();
        }
        else if(isMarkedAs("prevMonth")(e.target)){
            $calendar.prevMonth();
        }
        else if(isValueCell(e.target)){
            const date = e.target.innerText;
            $calendar.__day.setDate(date);
            const day = $calendar.__day;
            const lastTwo = n => n % 100
            const value = `${padded(day.getDate())}/${padded(day.getMonth() + 1)}/${lastTwo(day.getFullYear())}`
            $calendar.__input.value = value;
            fireEvent($calendar.__input,'change');
            $calendar.close();
        }
    })

    $calendar.appendChild(calendarHeader)
    $calendar.appendChild(calendarContent)
    
    return $calendar;
}

const sanitizeInput = ($node,$input) => {
    if( hasAttr("disabled",$node) || $input.disabled ){
        $input.disabled = true;
        $node.disabled = true;
        $node.setAttribute("disabled",true)
    }
}

const attachDatepickerBehavior = ($node) => {
    const $cont = findByClass(containerClass,$node)[0]
    const $input = findByTag("input",$node)[0];
    sanitizeInput($node,$input);

    const calendarIcon = Icon();
    const $calendar = Calendar($input);

    calendarIcon.addEventListener("click", () => {
        if( !$input.disabled && !$node.disabled  ){
            $calendar.toggle()
        }
    })

    $node.addEventListener("input", function(e) {
        const isValid = x => x?.length == 2;
        const isValidYear = x => x?.length >= 2;
        
        const isValidDate = (d) => /\d{2}\/\d{2}\/\d\d+/gi.test(d);
        const [rawDay, rawMonth, rawYear] = e.target.value.split("/");
        if( isValid(rawDay) && isValid(rawMonth) && isValidYear(rawYear) && isValidDate(e.target.value) ){
            const padYear = y => y.length <= 2 ? `20${y}` : y.length === 3 ? `2${y}` : y
            const year = isNumeric(rawYear) ? Number(padYear(rawYear)) : $calendar.__day.getFullYear();
            const month = limitMonth(isNumeric(rawMonth) ? Number(rawMonth) : 1);
            const day = limitDay(isNumeric(rawDay) ? Number(rawDay) : 1, month-1, year);
            $calendar.setDate(day,month-1,year);
            $input.value = `${padded(day)}/${padded(month)}/${rawYear}`;
        } else {
            $input.value = e.target.value;
        }
        fireEvent($input,'change');
    })
    Object.defineProperty($node,'date',{
        get(){
            return $calendar.__day;
        }
    })
    Object.defineProperty($node,'nativeDate',{
        get(){
            const day = $calendar.__day.getDate();
            const month = $calendar.__day.getMonth();
            const year = $calendar.__day.getFullYear();
            return `${year}-${padded(month+1)}-${padded(day)}`;
        }
    })
    $cont.appendChild(calendarIcon);
    $node.appendChild($calendar);
}

const onInit = () => {
    window.addEventListener("click",(e) => {
        if( !isPartOfDatepicker(e.target) ){
            findByClass(calendarClass).forEach(l => l.close())
        }
    })
    const datepickers = findByClass(datepickerClass)
    datepickers.forEach(attachDatepickerBehavior);
}

const onMutation = (mutation, observer) => {
    const datepickers = Array.from(mutation.addedNodes)
        .flatMap(n => {
            if( n.getElementsByClassName ){
                return isDatepicker(n) ? n : findByClass(datepickerClass,n);
            }
            return []
        })
    datepickers.forEach(attachDatepickerBehavior);
}

export default {
    onInit,
    onMutation
}