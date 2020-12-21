test = {
    "names":["940", "941", "943", "944", "945", "946", "947", "948"],
    "metadata":[{"id": 940, "ethnicity": "Caucasian", "gender": "F", "age": 24.0, "location": "Beaufort/NC", "bbtype": "I", "wfreq": 2.0}, {"id": 941, "ethnicity": "Caucasian/Midleastern", "gender": "F", "age": 34.0, "location": "Chicago/IL", "bbtype": "I", "wfreq": 1.0}]
}


// Define a function that will create metadata for given sample
function buildMetadata(sample) {

    // Read the json data
    d3.json("../samples.json").then((data) => {
        
        //console.log(data);

        //console.log("next")
        
        // Parse and filter the data to get the sample's metadata
        //var parsedData = JSON.parse(sample); 
        var parsedData = data; 
        var metadata = parsedData.metadata; 
        //console.log(metadata); 

        // Specify the location of the metadata and update it
        var addingData = d3.select("#sample-metadata"); 

        metadata.forEach((id) => {
            Object.entries(id).forEach(([key, value]) => {
                addingData.append("p").text(`${key}: ${value}`); 
            }); 
        }); 

        //console.log("next again"); 
        //console.log(panelBody); 
    });  
}

//testing function 
buildMetadata(test); 

//Metadata: 
//id
//ethnicity
//gender
//age
//location
//bbtype
//wfreq

// Define a function that will create charts for given sample
function buildCharts(sample) {

    // Read the json data

        // Parse and filter the data to get the sample's OTU data
        // Pay attention to what data is required for each chart

        // Create bar chart in correct location

        // Create bubble chart in correct location
    
}

// Define function that will run on page load
function init() {

    // Read json data

        // Parse and filter data to get sample names

        // Add dropdown option for each sample

    // Use first sample to build metadata and initial plots

}

function optionChanged(newSample){

    // Update metadata with newly selected sample

    // Update charts with newly selected sample

}

// Initialize dashboard on page load
init();

