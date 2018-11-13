app.controller("mainctrl", ($scope, $firebaseArray, $firebaseObject, $location)=>{
    $scope.msg = false;
    var studentRef = firebase.database().ref("students");
    $scope.students = $firebaseArray(studentRef);
    $scope.onedit = (id)=>{
        sessionStorage.setItem("studentId",id );
        $location.path('/edit');
    }
    $scope.ondelete = (data)=>{
        $scope.students.$remove(data).then(data=>{
            $scope.msg = "Student deleted successfully..";
            window.setTimeout(function(){
                $scope.$apply(function(){
                    $scope.msg = false;
                })
            }, 3000)
        },error=>{
            console.log("error is ",error);
        }
        )
        
        
    }
})