# RFID-Tracking-Project

A demo for the RFID Web-App I created as an Intern at Motorola Solutions 

## Dashbord Tab (oldDash.html)

When you open this page, you will see the following three sections: Heat Point Highlights, Rally Point Highlights, and the Activity Feed. 

#### Heat Point Highlights Section

The Heat Point Highlights section displays a red bar indicating how long members of your team have been in the fire for. The width of each red bar is constantly updated and calculated by dividing how long that team member has been in the heat, by the maximum amount of time a person can stay in the heat (40 min for this demo). In addition, once a member has been in the fire for 90% of the maximum time allowed, a red circle will appear beside the team-tracking tab and it will contain the number of firefighters over the 90% threshold.

#### Rally Point Highlights

The Rally Point Highlights section displays the total number of team members at the scene, and then below it, it show how many members are at each checkpoint. 

#### Activity Feed

Finally, the Activity Feed shows you the history of all check-ins and checkouts from all team members since arriving on scene. 


## Tracking Tab (oldTracking.html)

On this page, you have a list of all the team members at the scene. The list is in order of that member’s current location at the scene: Heat at the top, Incident Staging 2nd, In Transit 3rd, and Resource Control last. For this page a filled in circle, triangle, or a visible heat denotes where that team member currently is, and they have a running time that shows how long that team member has been at that checkpoint as well. You will also notice times underneath the empty circles, and that time denotes the last time that team member last checked out of that checkpoint.

## Team Members Tab (oldMember.html)

On this page, we once again have a list of all the team members at the scene. For this page however, the names are clickable, and once clicked a table appear on the right side and lists the history of all check-ins and checkouts of that team member since arriving on the scene.

## Scan In/Out Tab (oldScanning.html)

On this page, we just have a sample user interface that would be used to scan in a team members RFID data, and select if they are checking in or out, and then once hitting submit, it would send that data to the database and update the other pages and the activity feed to the right in real-time. 
