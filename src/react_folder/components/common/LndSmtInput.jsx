import React from 'react';
import {
    InputGroup,
    FormControl, ControlLabel,
    Glyphicon,
} from 'react-bootstrap';

/**
 * Standard Input
 * @type {React.Component}
 */
class LndSmtInput extends React.Component {
    /**
     * [constructor description]
     * @param  {Array} props [description]
     */
    constructor(props) {
        super(props);
        this.focusFunction = this.focusFunction.bind(this);
        this.blurFunction = this.blurFunction.bind(this);
        this.defaultBlurFunction = this.defaultBlurFunction.bind(this);
    }

    /**
     * [componentDidUpdate description]
     */
    // componentDidUpdate() {
    // con el navegador firefox e iexplorer, caracteristicamente no devuelve el foco
    // al componente actual y por consiguiente no efectua la validación de campos obligatorios.
    //  controller.focus.custom(this.props.component, this.props.form, {reactComponent: this.input});
    // }

    /**
     * stores the current component in focus
     * @param  {event} e [description]
     */
    focusFunction(e) {
        // if (utils.common.isSomething(this.props.onHandleFocus)) {
        //     e.preventDefault();
        //     this.props.onHandleFocus;
        // } else {
        //     e.preventDefault();
        //     let newForm = this.props.form;
        //     let previous = this.props.component;
        //     // controller.focus.set(previous, newForm);
        //     if (typeof this.props.handleFocus !== 'undefined') {
        //         this.props.handleFocus({
        //             form: newForm,
        //         });
        //     }
        // }
    }

    // choose the default focus or a custom one
    /**
     * focus the component again if has errors
     * @param  {event} e [description]
     */
    blurFunction(e) {
        // if (utils.common.isSomething(this.props.onHandleBlur)) {
        //     e.preventDefault();
        //     if (this.props.executeDefaultBlurBefore) {
        //         this.defaultBlurFunction(e);
        //     }
        //     this.props.onHandleBlur(e, this.props.onHandleBlurParams);
        //     if (this.props.executeDefaultBlurAfter) {
        //         this.defaultBlurFunction(e);
        //     }
        // } else {
        //     this.defaultBlurFunction(e, this.props.onHandleBlurParams);
        // }
    }

    /**
     *
     * @param {event} e
     */
    defaultBlurFunction(e) {
        e.preventDefault();
        let component = this.props.component;
        // if (utils.array.isNotEmpty(this.props.validators)) {
        //     // let validation = new LendismartValidationComponentClass();
        //     // validation.validators = this.props.validators;
        //     // component.validation = validation;
        // }
        let form = this.props.form;
        // let result = controller.validation.defaultValidateComponent(component,
        //     form);
        if (typeof this.props.handleErrors !== 'undefined') {
            this.props.handleErrors({
                // component: result.component,
                form: form,
            });
        }
    }

    /**
     * default
     * @param  {event} e [description]
     */
    defaultChangeFunction(e) {
        e.preventDefault();
        let value = e.target.value;
        let format = this.props.handleFormat;
        // if (utils.common.isSomething(format)) {
        //     value = format(value, this.props.formatParams);
        // }
        let component = this.props.component;
        let form = this.props.form;
        // controller.change.defaultChangeComponent(component, form, value,
        //     this.props.handleChange);
    }

    /**
     * React function
     *@return {Object} LndSmtInput
     */
    render() {
        const {
            component,
            onHandleChange,
        } = this.props;

        // value
        // let value = '';
        // if (utils.common.isSomething(component.value)) {
        //     value = component.value;
        // }
        // class of div which surrounds the component
        let disabled = '';
        // if (this.props.disabled) {
        //     disabled = 'disabled';
        // } else {
        //     disabled = '';
        // }
        // let rendered = true;
        // if (!utils.common.isSomething(rendered)) {
        //     rendered = component.rendered;
        // }
        // if (!utils.common.isSomething(rendered)) {
        //     rendered = true;
        // }
        //
        // if (utils.array.isNotEmpty(this.props.validation)) {
        //     component.validation = this.props.validation;
        // }

        // if (rendered) {
            // if (utils.array.isNotEmpty(component.errors.list)) {
            //     this.divClass = 'has-error';
            // } else {
            //     if (component.errors.isValidated) {
            //         this.divClass = 'has-success';
            //     } else {
            //         this.divClass = '';
            //     }
            // }

            // value
            let value = 'hola';
            // if (utils.common.isSomething(this.props.value)) {
            //     value = this.props.value;
            // }

            // tooltip
            let tooltip = null;
            // if (utils.common.isSomething(this.props.tooltip)) {
            //     tooltip = this.props.tooltip;
            // } else {
            //     if (utils.common.isSomething(component)) {
            //         if (utils.common.isSomething(component.tooltip)) {
            //             tooltip = this.props.component.tooltip;
            //         }
            //     }
            // }

            // icon
            let icon = this.props.icon;
            let iconAddon = null;
            // if (utils.string.isNotBlank(icon)) {
            //     icon = component.icon;
            //     iconAddon = (<InputGroup.Addon className={'inputadd'}><Glyphicon glyph={icon}/></InputGroup.Addon>);
            // }

            // type
            let type = this.props.type;
            console.log(type);
            console.log('jajaj');
            // if (!utils.common.isSomething(type)) {
            //     type = component.type;
            // }
            let isLabel = '';
            // if (!utils.common.isSomething(this.props.label) || this.props.label == '') {
            //     isLabel = 'hide';
            // }
            return (

                <div className={this.divClass + ' div_input_login text-left'}>
                    <ControlLabel className={'formlabel  text-left' + isLabel}>{this.props.label}</ControlLabel>
                    <InputGroup>
                        <FormControl value={value} disabled={disabled} className='form-control' type={type}
                                     onBlur={(e) => {
                                         this.blurFunction(e);
                                     }} onFocus={(e) => {
                            this.focusFunction(e);
                        }} onChange={(e) => {
                            // utils.common.isSomething(onHandleChange)
                            //     ? onHandleChange(e)
                            //     : this.defaultChangeFunction(e);
                        }} inputRef={(ref) => {
                            this.input = ref;
                        }}/>
                        {iconAddon}
                    </InputGroup>
                </div>
            );
        // } else {
        //     return null;
        // }
    }
}
export default LndSmtInput;
