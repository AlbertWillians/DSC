import { html } from 'lit-html';
import './index.js';

export default {
	title: 'Components/Button',
};

export const Button = ({ label, disabled, loading }) => {
	return html`
		<dsc-button ?disabled="${disabled}" ?loading="${loading}">
			${label}
		</dsc-button>
	`;
};

Button.args = {
	label: 'Button Primary',
	disabled: false,
	loading: false,
};

Button.argTypes = {
	label: {
		name: 'label',
		description: 'Define a label do botão',
		table: {
			category: 'Custom Inputs',
			type: { summary: 'string' },
			defaultValue: { summary: '' },
		},
	},
	disabled: {
		name: 'disabled',
		description: 'Define o status do botão como desabilitado',
		table: {
			category: 'Modifiers',
			type: { summary: 'boolean' },
			defaultValue: { summary: 'false' },
		},
	},
	loading: {
		name: 'loading',
		description: 'Define o status do botão como loading',
		table: {
			category: 'Modifiers',
			type: { summary: 'boolean' },
			defaultValue: { summary: 'false' },
		},
	},
};
