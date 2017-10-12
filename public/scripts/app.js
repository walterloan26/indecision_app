"use strict";

console.log('The app.js is running!');

var app = {
  title: "Indecision App",
  Subtitle: "Put your life in the hands of a computer",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderCounterApp();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  renderCounterApp();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
  renderCounterApp();
};

var appRoot = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    React.createElement(
      "p",
      null,
      app.Subtitle && React.createElement(
        "p",
        null,
        app.Subtitle
      ),
      React.createElement(
        "p",
        null,
        app.options.length > 0 ? "Here are your options:" : "Sorry there are no options available!"
      ),
      React.createElement(
        "p",
        null,
        app.options.length
      ),
      React.createElement(
        "button",
        { onClick: onRemoveAll },
        "Remove All"
      ),
      React.createElement(
        "button",
        { disabled: app.options.length === 0, onClick: onMakeDecision },
        "What should i do?"
      ),
      React.createElement(
        "ol",
        null,
        app.options.map(function (option) {
          return React.createElement(
            "li",
            { key: option },
            option
          );
        })
      ),
      React.createElement(
        "form",
        { onSubmit: onFormSubmit },
        React.createElement("input", { type: "text", name: "option" }),
        React.createElement(
          "button",
          null,
          "Add Option"
        )
      )
    )
  );
  ReactDOM.render(template, appRoot);
};
renderCounterApp();
