  let personObject = {name: "Jane", age:35, occupation:"Doctor"};

        window.alert(checkage());

         function checkage (){
             if (personObject.age >=20 && personObject.age<=40){
                 return "This Person is between 20 - 40 years old";
        }   
             else {
                return "This Person is not between 20 - 40 years old";
            }


        }