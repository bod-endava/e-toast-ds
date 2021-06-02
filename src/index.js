import { default as AtomBehaviors } from './atoms'

const observer = new MutationObserver((mutationList,observer) => {
    mutationList.forEach( mutation => {
        AtomBehaviors.onMutation(mutation,observer)
    })
})

window.addEventListener("load", () => {
    AtomBehaviors.onInit()
    observer.observe(document.body,{
        childList: true,
        subtree: true
    })
})