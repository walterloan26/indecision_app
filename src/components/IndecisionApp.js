import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    state = {
        options:[],
        SelectedOption: undefined
    };
    handleDeleteOptions =() => {
        this.setState(() => ({ options:[ ]}));
    };
    handleClearSelectedOption = () => {
        this.setState(() => ({SelectedOption:undefined}));
    };
    handleDeleteOption =(optionToRemove) => {
        this.setState((prevState) => ({ options:prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({SelectedOption:option}));
    };
    handleAddOption = (option) => {
        if (!option) {
            return 'Please enter a valid value to add an item!';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Sorry,this option already exists,Please pick a new one!'
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}));

    };

    componentDidMount() {
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        }catch (e) {
        }
    }
    componentDidUpdate(prevProps, prevState ) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        const Subtitle = "Put your life in the hands of a computer!";

        return(
            <div>
                <Header subtitle={Subtitle} />
                <div className='container'>
                    <Action
                        hasOptions = {this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions = {this.handleDeleteOptions}
                            handleDeleteOption = {this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>

                </div>
                <OptionModal
                    SelectedOption = {this.state.SelectedOption}
                    handleClearSelectedOption = {this.handleClearSelectedOption}
                />
            </div>
        );
    }
}

