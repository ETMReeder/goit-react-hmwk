import css from './Forms.module.css';
import React from 'react';
export const Form = () => {
    class NameForm extends React.Component {
        NameSubmit = evt => {
            evt.preventDefault();
            const form = evt.currentTarget;
            const name = form.elements.name.value;
            console.log(name);
            this.props.onSubmit({ name });
            form.reset();
        };

        render() {
            return (<form onSubmit={this.handleSubmit}>
                <input type="text" name="Name" />
                <button type="submit" >Enter</button>
            </form>);
        }
    }
}