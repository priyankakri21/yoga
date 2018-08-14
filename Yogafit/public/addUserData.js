$(function(){
    let userEmail=$('#UserEmail')
    let userName=$('#UserName')
    let participant=$('#SelectParticipant')
    let password=$('#UserPassword')
    $('#btnSubmit').click(function(){
        addUserData(
            userEmail.val(),
            userName.val(),
            participant.val(),
            password.val(),
            function(addUser){
                window.alert("Thank you  for sign up ")
            }
        )
    })

})