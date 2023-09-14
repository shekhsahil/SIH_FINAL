
    // Get the values from the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const textValue = urlParams.get("text");
    const decimalValue = urlParams.get("decimal");
    const crop_type_value=urlParams.get("text1");
    const crop_name_value=urlParams.get("text2");
    const water_amount=urlParams.get("text3");
    


    // Display the values on the page
    document.getElementById("pageTitle").textContent = ` ${textValue}`;
    document.getElementById("decimal_input_rec").textContent = ` ${decimalValue}`;
    document.getElementById("crop_type_rec").textContent = ` ${crop_type_value}`;
    document.getElementById("crop_name_rec").textContent = ` ${crop_name_value}`;
    document.getElementById("result").textContent = ` ${water_amount} Litres`;



