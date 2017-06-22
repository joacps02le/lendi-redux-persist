import React from 'react';
/**
 * [focusComponent description]
 * @type {LndSmtButton}
 */
class LndSmtButton extends React.Component {
    /**
     * [constructor description]
     * @param  {Array} props [description]
     */
    constructor(props) {
        super(props);
        this.focus = this.focus.bind(this);
    }

    /**
     * focuses the component
     */
    focus() {
        // Explicitly focus the text input using the raw DOM API
        this.textInput.focus();
    }

    render() {
        const {
            onHandleBlur,
        } = this.props;
        return (
            <input
                type="button"
                className={this.props.classe}
                disabled={this.props.disabled}
                value={this.props.value}
                onClick={(e) => {
                    this.props.onHandleClick(e, this.props.onHandleClickParams);
                }}
                ref={(input) => {
                    this.textInput = input;
                }}
                onBlur={onHandleBlur}/>
        );
    }
}

export default LndSmtButton;
