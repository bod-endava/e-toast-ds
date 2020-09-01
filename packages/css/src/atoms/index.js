import { default as Selects } from './selects/';

const onInit = () => {
    Selects.onInit()
}

const onMutation = (mutation,observer) => {
    Selects.onMutation(mutation,observer)
}

export default {
    onInit,
    onMutation
}