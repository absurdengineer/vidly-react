import _ from 'lodash'

export const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize
    //? const newArray = _.slice(items, startIndex)
    //? const finalArray = _.take(newArray, pageSize)
    //* Above are two lodash methods to deal with arrays but with following approach 
    //* is much more convinient
    return _(items)                     //*   convert to lodash object
        .slice(startIndex)              //*   slice from startIndex
        .take(pageSize)                 //*   take pageSize no of items
        .value()                        //*   convert back to regular Array.
}