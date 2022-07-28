let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');

celsius.oninput = () =>{
    let output = (parseFloat(celsius.vaulue)*9/5 +32);
    fahrenheit.vaulue = parseFloat(output.toFixed(2));
};

fahrenheit.oninput = () =>{
    let output = ((parseFloat(fahrenheit.value)- 32)*5)/9;
    celsius .value = parseFloat(output.toFixed(2));
};
