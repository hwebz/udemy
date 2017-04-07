import { ListItem } from "../shopping-list/list-item";
import { PipeTransform, Pipe } from "angular2/core";

@Pipe({
    name: 'myFilter'
})

export class FilterPipe implements PipeTransform {
    transform(value: ListItem[], args: string[]):any { // if you want to pass myFilter:filter.value:ignore -> args: any[]
        if (value.length === 0) {
            return value;
        }

        let resultArray = [];
        let name, searchText;
        for (let item of value) {
            name = args[1] == 'ignore' ? item.name.toLowerCase() : item.name;
            searchText = args[1] == 'ignore' ? args[0].toLowerCase() : args[0];
    
            if (name.match('^.*' + searchText + '.*$')) {
                resultArray.push(item);
            }
        }
        return resultArray;
    }
}