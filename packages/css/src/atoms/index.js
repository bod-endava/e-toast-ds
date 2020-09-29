import { default as Selects } from './selects/';
import { default as Icons } from './icon/';

const onInit = () => {
    Selects.onInit()
    // Icons.onInit()
}

const onMutation = (mutation,observer) => {
    Selects.onMutation(mutation,observer)
}

export default {
    onInit,
    onMutation
}