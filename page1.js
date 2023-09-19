

    function passValues() {
        // Get the input values
        const textValue = document.getElementById("inputField").value;
        const decimalValue = document.getElementById("decimal_input_send").value;
        const crop_type_value=document.getElementById("Crop_types").value;
        const crop_name_value=document.getElementById("Crop_names").value;
    
    //////////////////////////////////

    var landArea = parseFloat(document.getElementById("decimal_area_send").value);
    var moistureLevel = 50;
    

    // Check if inputs are valid numbers
    // if (isNaN(decimal_area_send) || isNaN(moistureLevel)) {
    //     alert("Please enter valid numeric values.");
    //     return;
    // }

    // Calculate water required in liters
    var waterRequired = (landArea * moistureLevel) / 100;

    waterRequired= waterRequired.toFixed(3);
    // document.getElementById("result").textContent =  waterRequired.toFixed(2) + " liters";
    ///////////////////////////////////
        // Encode values in the URL and navigate to page2.html
        window.location.href = `Dashboard.html?text=${encodeURIComponent(textValue)}&decimal=${encodeURIComponent(decimalValue)}&text1=${encodeURIComponent(crop_type_value)}&text2=${encodeURIComponent(crop_name_value)}&text3=${encodeURIComponent( waterRequired)}`;
    
      
       
    

    
    }
    
    

    

