var list=[["neelam","programmer","24","2400"],["komal","trainer","24","20000"],["anuradha","HR","25","40000"],["abhishek","manager","29","63000"]]
var dic={}
for (i of list){
    d={}
    var input=require("readline-sync")
    var user=input.question("enter your details ")
    d["Name"]=i[0]
    d["designation"]=i[1]
    d["age"]=i[2]
    d["salery"]=i[3]
    dic[user]=d

}
console.log(dic);
