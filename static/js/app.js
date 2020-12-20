// Define a function that will create metadata for given sample
function buildMetadata(sample) {

    // Read the json data
    d3.json("../samples.json").then((data) => {
        
        console.log(data);

        // Parse and filter the data to get the sample's metadata
        var parsedData = JSON.parse(data); 
        var metadata = parsedData.metadata; 

        // Specify the location of the metadata and update it
        d3.select("#sample-metadata"); 

        data.forEach((metadata) => {
            var row = tbody.append("tr");
            Object.entries(metadata).forEach(([key, value]) => {
                var cell = row.append("td"); 
                cell.text(value); 
            }); 
        }); 
    });  
}

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

