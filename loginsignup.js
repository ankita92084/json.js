let fs =require("fs")
let input=require("readline-sync")
let file=fs.existsSync("loggedin_data.json")
// console.log( file);
if (file==false){
    let  login_signup=input.question("Select you want to signup or login:  ")
    if (login_signup==="signup"){
        let name=input.question("Enter your Name:  ")
        let phone=input.questionInt("Enter your mobile number: ")
        let age=input.questionInt("Enter your age:  ")
        let creat_password=input.question("Create your password:  ")
        if (creat_password.length>=6 && creat_password.length<=18){
            if (creat_password.match(/[A-Z]/m)&& (creat_password.match(/[a-z]/m))&& (creat_password.match(/[0-9]/m))&&(creat_password.match(/[@#$]/m))){
                console.log("***your password is strong***");
            }
            else{
                console.log("###Some condition is missing above please check it once###");
            }
        }
        else{
            console.log("...your password should contain letter between 6-18...");
        }
        let confirm_password=input.question("Confirm your password")
        let list=[]
        let details={}
        details["Name"]=name
        details["Phone"]=phone
        details["Age"]=age
        details["Password"]=creat_password
        list.push(details)
        if (creat_password==confirm_password){
            console.log("***You have successfully regitered***");
            data=JSON.stringify(list,null,2)
            fs.writeFileSync("loggedin_data.json",data)
        }
        else{
            console.log("Your registration is failed due to wrong password confirmation ,please try again");

        }
    }
    else{
        console.log("You have not signed up yet!");
    }
}
else if (file===true){
    let  login_signup=input.question("Select you want to signup or login:  ")
    if (login_signup==="signup"){
        let name=input.question("Enter your Name:  ")
        let phone=input.questionInt("Enter your mobile number: ")
        let age=input.questionInt("Enter your age:  ")
        let creat_password=input.question("Create your password:  ")
        if (creat_password.length>=6 && creat_password.length<=18){
            if (creat_password.match(/[A-Z]/m)&& (creat_password.match(/[a-z]/m))&& (creat_password.match(/[0-9]/m))&&(creat_password.match(/[@#$]/m))){
                console.log("***your password is strong***");
            }
            else{
                console.log("###Some condition is missing above please check it once###");
            }
        }
        else{
            console.log("...your password should contain letter between 6-18...");
        }
        let confirm_password=input.question("Confirm your password")
        let list=[]
        let details={}
        details["Name"]=name
        details["Phone"]=phone
        details["Age"]=age
        details["Password"]=creat_password
        list.push(details)
        if (creat_password==confirm_password){
            console.log("***You have successfully regitered***");
            data=JSON.stringify(list,null,2)
            fs.writeFileSync("loggedin_data.json",data)
        }
        else{
            console.log("Your registration is failed due to wrong password confirmation ,please try again");

        }
    }
    else if (login_signup=="login"){
        let username=input.question("Enter your name: ");
        let password=input.question("Enter your created password: ");
        if (password.length>=6 && password.length<=12){
            if(password.match(/[A-Z]/m) && (password.match(/[a-z]/m)) && (password.match(/[0-9]/m) && (password.match(/[#$@&]/m)))){
                console.log("...your password is valid...");
            }
            else{
                console.log("...something is missing please check ones...");
            }
        }
        else{
            console.log('password charector should be 6-12');
            let password=input.question("Enter your password again : ")
            if(password.match(/[A-Z]/m) && (password.match(/[a-z]/m)) && (password.match(/[0-9]/m) && (password.match(/[#$@&]/m)))){
                console.log("...your password is strong...");
            }
            else{
                console.log("you have to mention alpahabet,special charater, charater,number and capital letter ");
            }
        }
        let data=fs.readFileSync("loggedin_data.json")
        let d1=JSON.parse(data)
        let dic={}
        function login(d1,dic,password,username) {
            for(let i of d1){
                // console.log(i);
                if(i["Name"]===username && i["Password"]===password){
                    dic=i
                    for(let j in dic){
                        console.log(`${j} is - ${dic[j]}`);
                    }
                    console.log("login successfuly....");

                }
            }
        }
        login(d1,dic,password,username)
    }
    else{
        console.log("incorrect");
    }
}else{
    console.log("incorrect")
}
