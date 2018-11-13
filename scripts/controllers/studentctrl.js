app.controller("studentctrl",($scope, $firebaseArray, $firebaseObject)=>{
    $scope.student= {};
    $scope.message= "";
    var studentRef= firebase.database().ref("students");
    var students = $firebaseArray(studentRef);
    $scope.onsubmit = ()=>{
        if(!($scope.student.name) && !($scope.student.dept) && !($scope.student.year)){
            alert("Please fill in all the fields.")
      
        }
        else{
          
        
            if(($scope.student.name).length >10){
                alert("Length of name should not exceed more than 10 characters");
            }
            else{
                if(($scope.student.dept).length >10){
                    alert("Length of department should not exceed more than 10 characters");
                }
                else{
                    students.$add({
                        name: $scope.student.name,
                        dept: $scope.student.dept,
                        year: $scope.student.year
                    }).then(ref=>{
                        $scope.message = "Student added successfully!";
                        $scope.student.year = "";
                        $scope.student.dept = "";
                        $scope.student.name="";
                        window.setTimeout(function(){
                            $scope.$apply(function(){
                                $scope.message = "";
                            })
                        }, 3500)
                    })
                }
            }
        
        }
    }
   
})