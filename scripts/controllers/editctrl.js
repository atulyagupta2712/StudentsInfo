app.controller("editctrl", ($scope, $firebaseObject)=>{
    $scope.message = "";
    var id= sessionStorage.getItem("studentId");
    var studentRef = firebase.database().ref("students/"+id);
  
    $scope.student = $firebaseObject(studentRef);
    $scope.editStudent = ()=>{
        
        studentRef.update({
            name: $scope.student.name,
            dept: $scope.student.dept,
            year: $scope.student.year
        }).then(()=>{
            console.log("hey use");
            // $scope.msg= true;
            $scope.message = "Student updated successfully!";
            window.setTimeout(function(){
                $scope.$apply(function(){
                    // $scope.message = "";
                })
            }, 20)
            // $scope.student.name="";
            // $scope.student.dept="";
            // $scope.student.year="";
            
           
        })
    }
})