// Define a function that will create metadata for given sample
function buildMetadata(selection) {

    // Read the json data
    d3.json("../samples.json").then((sampleData) => {

        console.log(sampleData);

        // Parse and filter the data to get the sample's metadata
        var parsedData = sampleData.metadata;
        console.log("parsed data inside buildMetadata function")
        console.log(parsedData);

        var sample = parsedData.filter(item => item.id == selection);
        console.log("showing sample[0]:");
        console.log(sample[0]);

        // Specify the location of the metadata and update it
        var metadata = d3.select("#sample-metadata");

        Object.entries(sample[0]).forEach(([key, value]) => {
            metadata.append("p").text(`${key}: ${value}`);
        });

        console.log("next again");
        console.log(metadata);
    });
}

// Define a function that will create charts for given sample
function buildCharts(selection) {

    // Read the json data
    d3.json("../samples.json").then((sampleData) => {
    
        // Parse and filter the data to get the sample's OTU data
        // Pay attention to what data is required for each chart
        var parsedData = sampleData.samples; 
        console.log("parsed data inside buildCharts function")
        console.log(parsedData); 

        var barChartValues = parsedData[0].sample_values.slice(0, 10);
        console.log("sample_values")
        console.log(barChartValues);

        var barChartLabels = parsedData[0].otu_ids.slice(0, 10); 
        console.log("otu_ids");
        console.log(barChartLabels);

        var reformattedLabels = [];
        barChartLabels.forEach((label) => {
            reformattedLabels.push("OTU " + label); 
        });

        console.log("reformatted");
        console.log(reformattedLabels); 

        var barCharthovertext = parsedData[0].otu_labels.slice(0, 10); 
        console.log("otu_labels");
        console.log(barCharthovertext); 

        // Create bar chart in correct location

        // Create bubble chart in correct location

    });
}

// Define function that will run on page load
function init() {

    // Read json data
    d3.json("../samples.json").then((sampleData) => {

        // Parse and filter data to get sample names
        var parsedData = sampleData.names;
        console.log("parsed data inside init function")
        console.log(parsedData);

        // Add dropdown option for each sample
        var dropdownMenu = d3.select("#selDataset");

        parsedData.forEach((name) => {
            dropdownMenu.append("option").property("value", name).text(name);
        })

        // Use first sample to build metadata and initial plots
        buildMetadata(parsedData[0]);

        buildCharts(parsedData[0]);

    });
}

function optionChanged(newSelection) {

    // Update metadata with newly selected sample

    // Update charts with newly selected sample

}

// Initialize dashboard on page load
init();

