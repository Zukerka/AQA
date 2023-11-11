export default function sortBySalary(array){

    let sortedArr = array.sort((a, b)=> {
        return a.salary - b.salary
    }); 

    sortedArr.sort((a,b)=> {
        if (a.salary === b.salary){
           return a.id - b.id
        } 
    })

    return sortedArr; 
}