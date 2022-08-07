// Q4.js dictionary(sort by key) object ko json data ::mai convert karne ka program likho?
var dic={
    '4': 5, 
    '6': 7, 
    '1': 3, 
    '2': 4}
var list=[]
for ( i in dic){
    list.push(i)
}
console.log(list);
var new_dic={}
for (i of list){
    for (j in dic){
        if (i==j){
            new_dic[i]=dic[j]
        }
    }
}
console.log(new_dic);


