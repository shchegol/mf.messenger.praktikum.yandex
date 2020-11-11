declare var require: any
const pug = require('pug');

import Component from "../../components/Component.js";
import Button from "../../components/Button/Button.js"
import Input from "../../components/Input/Input.js"
import {setFormsValidation, setInputsValidation} from '../../utils/validation.js';
import {IAnyObject} from "../../utils/ts/interfaces.js";
import template from "./authTemplate.js";

export default class PageAuth extends Component {
    props: IAnyObject;

    constructor(tagName?: string, props?: IAnyObject) {
        super(tagName, {
            ...props,
            inputLogin: new Input({
                classes: "input_color_white mt-20",
                labelText: "Логин",
                type: "text",
                name: "login",
                placeholder: "Ваш логин",
                dataValidation: "text",
            }),
            inputPassword: new Input({
                classes: "input_color_white mt-20",
                labelText: "Пароль",
                type: "password",
                name: "password",
                placeholder: "Ваш пароль",
                dataValidation: "password"
            }),
            buttonSubmit: new Button({
                classes: 'btn_type_outline btn_color_white mt-40',
                type: 'submit',
                text: 'ВОЙТИ'
            }),
        });
    }

    componentDidRender() {
        setFormsValidation();
        setInputsValidation();
    }

    render(): string {
        return pug.render(template, {
            inputLogin: this.props.inputLogin.render(),
            inputPassword: this.props.inputPassword.render(),
            buttonSubmit: this.props.buttonSubmit.render()
        });
    }
}