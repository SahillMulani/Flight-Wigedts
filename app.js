const tableBody = document.getElementById('table-body')

let flights = [
    {
        time : "08:10",
        destination : "DELHI",
        flight: "AX 203",
        gate: "A 01",
        remarks: "ON-TIME"
         
    },
    {
        time : "09:10",
        destination : "BOMBAY",
        flight: "BX 204",
        gate: "A 03",
        remarks: "DELAYED"
         
    },
    {
        time : "12:10",
        destination : "OMAN",
        flight: "VB 203",
        gate: "B 01",
        remarks: "ARRIVED"
         
    },
    {
        time : "08:10",
        destination : "DUBAI",
        flight: "KX 213",
        gate: "Z 23",
        remarks: "ON-TIME"
         
    },
    {
        time : "05:30",
        destination : "ZURICH",
        flight: "AX 203",
        gate: "A 01",
        remarks: "ON-TIME"
         
    }
]

function populateTable()
{
    for (const flight of flights)
    {
        const tableRow = document.createElement('tr')

        for (const flightDetail in flight)
        {
           const tableCell = document.createElement('td')
           const word = Array.from(flight[flightDetail])
           
           for(const letter of word)
           {
            const letterElement = document.createElement('div')
            letterElement.classList.add('flip')
            letterElement.textContent = letter
            tableCell.append(letterElement)
           }

           tableRow.append(tableCell)
        }

        tableBody.append(tableRow)

    }

}

populateTable()