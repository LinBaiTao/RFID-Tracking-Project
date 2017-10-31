////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function called on page load, and when resetting values that sets Checkpoint Names and Max Oxygen time to 
// their default values if they either dont have a value currently or if no value is entered into the prompt
////////////////////////////////////////////////////////////////////////////////////////////////////////////
function useDefaultValues(){
    var defMaxOxygen = 20; //Max Amount of Oxygen in minutes
    defMaxOxygen = defMaxOxygen*60 // Max Amount of Oxygen in seconds
    var defPoint1 = "Resource Control"; // Default Name for Checkpoint 1
    var defPoint2 = "Incident Staging"; // Default Name for Checkpoint 2

    // if value of maxOygen in storage = 0, sets maxOxygen to the default of 20 min
    if(window.localStorage.getItem("myMaxOxygen")==0){
        window.localStorage.setItem("myMaxOxygen", defMaxOxygen);
    }

    // if first checkpoint name is null or an empty string, sets it to default value above
    if(window.localStorage.getItem("firstCheckpoint")=="null" || window.localStorage.getItem("firstCheckpoint")==""){
        window.localStorage.setItem("firstCheckpoint", defPoint1);
    }

    // if second checkpoint name is null or an empty string, sets it to default value above
    if(window.localStorage.getItem("secondCheckpoint")=="null" || window.localStorage.getItem("secondCheckpoint")==""){
        window.localStorage.setItem("secondCheckpoint", defPoint2);
    }
}


////////////////////////////////////////////////////////////////////////////
// Prompts user to input the new CHeckpoint Name he wishes to use
// If nothing entered, keeps previous names
// If "default" entered, reverts back to Resource Control / Incident Staging
////////////////////////////////////////////////////////////////////////////
function setCheckpointNames(){
    previousPoint1 = point1 = window.localStorage.getItem("firstCheckpoint");
    previousPoint2 = window.localStorage.getItem("secondCheckpoint");
    point1 = prompt("What do you want to replace '" + previousPoint1 + "' with? \n *Enter 'default' to reset to default values*");
    point2 = prompt("What Do you want to replace '" + previousPoint2 + "' with? \n *Enter 'default' to reset to default values*");
    if(point1 == ""){
        point1 = previousPoint1;
    }
    else if(point1 == "default"){
        window.localStorage.setItem("firstCheckpoint", "null");
        useDefaultValues()
        point1 = window.localStorage.getItem("firstCheckpoint");
    }
    if(point2 == ""){
        point2 = previousPoint2;
    }
    else if(point2 == "default"){
        window.localStorage.setItem("secondCheckpoint", "null");
        useDefaultValues();
        point2 = window.localStorage.getItem("secondCheckpoint");
    }
    window.localStorage.setItem("firstCheckpoint", point1);
    window.localStorage.setItem("secondCheckpoint", point2);

    updateCheckpointNames(point1,point2);
}


///////////////////////////////////////////////////////////////////////////////////////
// Prompts User for the max amount of time a member can be in the heat zone(in minutes)
// If nothing entered: keeps previous value
// If negative number entered: resets to default value of 20 min
// If anything but #'s entered: will keep prompting user to enter only numbers
//////////////////////////////////////////////////////////////////////////////////////// 
function setMaxOxygen(){
    maxOxygen = Number(prompt("What is the maximum number of minutes a member can be in the Heat Zone? Please enter the number only:"));
    while(isNaN(maxOxygen)){
        maxOxygen = Number(prompt("Please enter numbers only for the maximum number of minutes a member can be in the Heat Zone:"))
    }
    if(maxOxygen > 0){
        maxOxygen = maxOxygen*60;
        window.localStorage.setItem("myMaxOxygen", maxOxygen);
    }
    else if(maxOxygen < 0){
        window.localStorage.setItem("myMaxOxygen", 0);
        useDefaultValues();
        maxOxygen = window.localStorage.getItem("myMaxOxygen");
    }
    else{
        maxOxygen = window.localStorage.getItem("myMaxOxygen");
    }
}

// Gets the current value of maxOxygen(in seconds)
function getMaxOxygen(){
    maxOxygen = window.localStorage.getItem("myMaxOxygen");
}

// Gets the current values of the Checkpoint names and displays them on the page 
function getCheckpointNames(){
    point1 = window.localStorage.getItem("firstCheckpoint");
    point2 = window.localStorage.getItem("secondCheckpoint");
    updateCheckpointNames(point1, point2);
}