console.log('The app.js is running!');

const app = {
    title:"Indecision App",
    Subtitle: "Put your life in the hands of a computer",
    options:[ ]
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderCounterApp()
    }
};

const onRemoveAll = () => {
    app.options = [ ];
    renderCounterApp()
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    renderCounterApp()
};

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.Subtitle && <p>{app.Subtitle}</p>}
                <p>{app.options.length > 0 ? "Here are your options:" :"Sorry there are no options available!"}</p>
                <p>{app.options.length}</p>
                <button onClick={onRemoveAll}>Remove All</button>
                <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
                <ol>
                    {
                        app.options.map((option) => <li key={option}>{option}</li>)

                    }
                </ol>
                <form onSubmit={onFormSubmit}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </p>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
renderCounterApp();
