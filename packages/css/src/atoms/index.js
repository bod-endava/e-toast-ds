import { default as Selects } from './selects/';
import { default as Icons } from './icon/';
import { default as Datepickers } from './datepicker/';
import { combine } from '../utility';

const onInit = combine(
    Selects.onInit,
    Icons.onInit,
    Datepickers.onInit
)

const onMutation = combine(
    Selects.onMutation,
    Datepickers.onMutation
)

export default {
    onInit,
    onMutation
}