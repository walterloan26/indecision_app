console.log("The App is running!")


let count = 0;
const className_1 ="btn btn-default";
const className_2 ="btn btn-danger btn-md active";
const className_3 ="btn btn-success btn-md active";
const type_button="button";

const addOne = () => {
    count ++;
    renderCounterApp();
};
const minusOne = () => {
    count --;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};


const appRoot = document.getElementById("app");

const renderCounterApp = () => {
    const template = (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
renderCounterApp();