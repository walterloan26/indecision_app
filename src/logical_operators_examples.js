console.log("App.js is running");

const app ={
    Subtitle:'Great movie!',
    options:['one', 'five','ten','fifteen']
};

const template =(
    <div>
        {app.Subtitle && <p>{app.Subtitle}</p>}
        <p>{app.options && (app.options.length > 0 ?
            <div>
                <h3>Here are your options:</h3>
                <ol>
                    <li>{app.options[0]}</li>
                    <li>{app.options[1]}</li>
                    <li>{app.options[2]}</li>
                    <li>{app.options[3]}</li>
                </ol>
            </div>:
            'Sorry no options!')}</p>
    </div>);

const user = {
    Name:'Walter',
    Age:48,
    location:'Beijing'
};

const getLocation = (location) => {
    if (location) {
        return <p> The Location is in: {location}</p>;
    }
};
const templatetwo =(
    <div>
        <h1>{user.Name ? user.Name: 'Anonymous' }</h1>
        {user.Age && (user.Age>=18) && <p>{user.Age}</p>}
        {getLocation(user.location)}
    </div>);




const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);