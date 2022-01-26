var isImportant = false;
var isAsideVisble = true;

function toggleImportant(){
    let icon = $(".iImportant");
    if(isImportant){
        icon.removeClass("fas").addClass("far");
        isImportant = false;
    }else{
        icon.removeClass("far").addClass("fas");
        isImportant = true;
    }
    
}

function saveTask(){
    let text = $("#txtTitle").val();
    let dueDate = $("#txtDueDate").val();
    let location = $("txtLocation").val();
    let description = $("txtDescription").val();
    let participants = $("txtParticipants").val();
    console.log(text, dueDate, location, description, participants);
}


function toggleDetails() {
    let aside = $("aside");
    if(isAsideVisble){
        aside.hide();
        isAsideVisble = false;
    }else{
        aside.show();
        isAsideVisble = true;
    }
    
}

function init(){
    $("#btnSave").click(saveTask);

    $(".iImportant").click(toggleImportant);

    $("#btnToggleDetails").click(toggleDetails);
}


window.onload = init;

