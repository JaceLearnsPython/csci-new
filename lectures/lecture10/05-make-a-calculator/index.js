const addNumbers = (ev) => {
    // Your job: 
    // 1. Access the first number that the user typed in and store it
    //    as a variable.
    let input1 = document.querySelector("#num1").value;
    input1 = Number(input1);
    // 2. Access the first number that the user typed in and store it
    //    as a variable.
    let input2 = document.querySelector("#num2").value;
    input2 = Number(input2);

    // 3. Convert the values stored inside of the two variables to a 
    //    number (so that you can do math)!
    // 4. Add the two numbers together.
    let result = input1 + input2;
    // 5. Write the result to the #answer section
    document.querySelector("#answer").innerHTML = result
}

const subtractNumbers = (ev) => {
    // Same as above but subtract!
    let input1 = document.querySelector("#num1").value;
    input1 = Number(input1);

    let input2 = document.querySelector("#num2").value;
    input2 = Number(input2);

    let result = input1 - input2;
    document.querySelector("#answer").innerHTML = result

}

const multiplyNumbers = (ev) => {
    // Same as above but multiply!
    let input1 = document.querySelector("#num1").value;
    input1 = Number(input1);

    let input2 = document.querySelector("#num2").value;
    input2 = Number(input2);

    let result = input1 * input2;
    document.querySelector("#answer").innerHTML = result
}

const divideNumbers = (ev) => {
    // Same as above but divide!
    let input1 = document.querySelector("#num1").value;
    input1 = Number(input1);

    let input2 = document.querySelector("#num2").value;
    input2 = Number(input2);

    let result = input1 / input2;
    document.querySelector("#answer").innerHTML = result
}

