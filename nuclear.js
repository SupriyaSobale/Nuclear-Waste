form=document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let waste = document.querySelector("#waste");
    let quality = document.querySelector("#quality");
    let quantity = document.querySelector("#quantity");

    console.log(waste.value);
    console.log(quality.value);
    console.log(quantity.value);

alert(`Hi your entered data is : Waste = ${waste.value} and quality = ${quality.value}`);
});




