//array of hard-coded jsonData
var jsonData = [
    {  
        "id": 56787, "name": "Scott Huang", "location": "Incident Staging", "time" : "2017-07-20T11:47:00.000"
    },
    {  
        "id": 56787, "name": "Scott Huang", "location": "Heat", "time" : "2017-07-20T11:37:00.000"
    },
    {  
        "id": 76353, "name": "Martin Leigh", "location": "Heat", "time" : "2017-07-20T11:07:00.000"
    },
    {  
        "id": 53672, "name": "Itai de la Vega", "location": "Heat", "time" : "2017-07-20T11:06:00.000"
    },
    {  
        "id": 76353, "name": "Martin Leigh", "location": "Incident Staging", "time" : "2017-07-20T11:05:00.000"
    },
    {  
        "id": 56787, "name": "Scott Huang", "location": "Incident Staging", "time" : "2017-07-20T11:05:00.000"
    },
    {  
        "id": 53672, "name": "Itai de la Vega", "location": "Incident Staging", "time" : "2017-07-20T11:05:00.000"
    },
    {  
        "id": 76353, "name": "Martin Leigh", "location": "In Transit to Incident Staging", "time" : "2017-07-20T11:03:00.000"
    },
    {  
        "id": 53672, "name": "Itai de la Vega", "location": "Heat", "time" : "2017-07-20T11:02:00.000"
    },
    {  
        "id": 53672, "name": "Itai de la Vega", "location": "Incident Staging", "time" : "2017-07-20T11:00:00.000"
    },
    {  
        "id": 53672, "name": "Itai de la Vega", "location": "In Transit to Incident Staging", "time" : "2017-07-20T10:58:00.000"
    },
    {  
        "id": 76353, "name": "Martin Leigh", "location": "Resource Control", "time" : "2017-07-20T10:58:00.000"
    },
    {  
        "id": 53672, "name": "Itai de la Vega", "location": "Resource Control", "time" : "2017-07-20T10:55:00.000"
    },
    {  
        "id": 63728, "name": "Reid Zynecki", "location": "In Transit to Incident Staging", "time" : "2017-07-20T10:55:00.000"
    },
    {  
        "id": 435623, "name": "Mason Miller", "location": "In Transit to Resource Control", "time" : "2017-07-20T10:53:00.000"
    },
    {  
        "id": 45627, "name": "Andrew Cole-Goins", "location": "Heat", "time" : "2017-07-20T10:53:00.000"
    },
    {  
        "id": 76436, "name": "Troy Birdsall", "location": "Resource Control", "time" : "2017-07-20T10:52:00.000"
    },
    {  
        "id": 76436, "name": "Troy Birdsall", "location": "In Transit to Resource Control", "time" : "2017-07-20T10:49:00.000"
    },
    {  
        "id": 76436, "name": "Troy Birdsall", "location": "Incident Staging", "time" : "2017-07-20T10:47:00.000"
    },
    {  
        "id": 435623, "name": "Mason Miller", "location": "Incident Staging", "time" : "2017-07-20T10:47:00.000"
    },
    {  
        "id": 45627, "name": "Andrew Cole-Goins", "location": "Incident Staging", "time" : "2017-07-20T10:47:00.000"
    },
    {  
        "id": 435623, "name": "Mason Miller", "location": "In Transit to Incident Staging", "time" : "2017-07-20T10:43:00.000"
    },
    /*{  
        "id": 83746, "name": "Eric Jensen", "location": "Heat", "time" : "2017-07-20T11:49:25.000"
    },*/
    {  
        "id": 67235, "name": "Charles Barry", "location": "Incident Staging", "time" : "2017-07-20T10:42:25.000"
    }/*,
    {  
        "id": 53672, "name": "Itai de la Vega", "location": "In Transit to Resource Control", "time" : "2017-07-20T11:49:00.000"
    },
    {  
        "id": 53672, "name": "Itai de la Vega", "location": "Incident Staging", "time" : "2017-07-20T11:45:00.000"
    },
    {  
        "id": 53672, "name": "Itai de la Vega", "location": "In Transit to Incident Staging", "time" : "2017-07-20T11:38:00.000"
    },
    {  
        "id": 53672, "name": "Itai de la Vega", "location": "Resource Control", "time" : "2017-07-20T11:32:00.000"
    },
    {  
        "id": 53672, "name": "Itai de la Vega", "location": "In Transit to Resource Control", "time" : "2017-07-20T11:25:00.000"
    },
     {  
        "id": 53672, "name": "Itai de la Vega", "location": "Incident Staging", "time" : "2017-07-20T11:21:00.000"
    },
    {  
        "id": 53672, "name": "Itai de la Vega", "location": "In Transit to Incident Staging", "time" : "2017-07-20T11:19:00.000"
    },
    {  
        "id": 53672, "name": "Itai de la Vega", "location": "Resource Control", "time" : "2017-07-20T11:12:00.000"
    },
    {  
        "id": 53672, "name": "Itai de la Vega", "location": "In Transit to Resource Control", "time" : "2017-07-20T11:07:00.000"
    },*/
    /*{  
        "id": 89353, "name": "Husdon Carroll", "location": "Incident Staging", "time" : "01:20 PM"
    },
    {  
        "id": 76436, "name": "Troy Birdsall", "location": "Incident Staging", "time" : "01:20 PM"
    },
    
    {  
        "id": 35473, "name": "Callum Liddiard", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 56787, "name": "Scott Huang", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 53672, "name": "Itai de la Vega", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 45627, "name": "Andrew Cole-Goins", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 89353, "name": "Husdon Carroll", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 435623, "name": "Mason Miller", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 56787, "name": "Scott Huang", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 35473, "name": "Callum Liddiard", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 76436, "name": "Troy Birdsall", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 83746, "name": "Eric Jensen", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 76353, "name": "Martin Leigh", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 63728, "name": "Reid Zynecki", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 89353, "name": "Husdon Carroll", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 56787, "name": "Scott Huang", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 35473, "name": "Callum Liddiard", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 45627, "name": "Andrew Cole-Goins", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 67235, "name": "Charles Barry", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 435623, "name": "Mason Miller", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 53672, "name": "Itai de la Vega", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 83746, "name": "Eric Jensen", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 76436, "name": "Troy Birdsall", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 35473, "name": "Callum Liddiard", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 89353, "name": "Husdon Carroll", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 67235, "name": "Charles Barry", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 63728, "name": "Reid Zynecki", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 435623, "name": "Mason Miller", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 35473, "name": "Callum Liddiard", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 67235, "name": "Charles Barry", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 76436, "name": "Troy Birdsall", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 89353, "name": "Husdon Carroll", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 83746, "name": "Eric Jensen", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 89353, "name": "Husdon Carroll", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 63728, "name": "Reid Zynecki", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 45627, "name": "Andrew Cole-Goins", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 35473, "name": "Callum Liddiard", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 89353, "name": "Husdon Carroll", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 63728, "name": "Reid Zynecki", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 76436, "name": "Troy Birdsall", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 67235, "name": "Charles Barry", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 53672, "name": "Itai de la Vega", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 83746, "name": "Eric Jensen", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 45627, "name": "Andrew Cole-Goins", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 76436, "name": "Troy Birdsall", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 435623, "name": "Mason Miller", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 89353, "name": "Husdon Carroll", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 63728, "name": "Reid Zynecki", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 76436, "name": "Troy Birdsall", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 76353, "name": "Martin Leigh", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 63728, "name": "Reid Zynecki", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 45627, "name": "Andrew Cole-Goins", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 435623, "name": "Mason Miller", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 45627, "name": "Andrew Cole-Goins", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 35473, "name": "Callum Liddiard", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 83746, "name": "Eric Jensen", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 76353, "name": "Martin Leigh", "location": "Heat", "time" : "01:34 PM"
    },
    {  
        "id": 67235, "name": "Charles Barry", "location": "Heat", "time" : "01:34 PM"
    },*/
]