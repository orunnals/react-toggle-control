import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './scss/styles.scss';

const ReactToggleControl = (props) => {
	const { disabled, checked } = props;
	const { ...passThruProps } = props;
	const [toggleChecked, setToggleChecked] = useState(checked);
	useEffect(() => {
		if (toggleChecked != checked) setToggleChecked(checked);
	}, [checked]);
	return (
		<div className={`react-toggle-wrapper${disabled ? ' disabled' : ''}`}>
			<div className='react-toggle-background'>
				{toggleChecked && 'Checked'}
				{!toggleChecked && 'Unchecked'}
			</div>
			<div className='react-toggle-switch' />
			<input
				type='checkbox'
				role='switch'
				className='react-toggle-input'
				{...passThruProps}
			/>
		</div>
	);
};
export default ReactToggleControl;

ReactToggleControl.propTypes = {
	checked: PropTypes.bool.isRequired,
	disabled: PropTypes.bool,
};

ReactToggleControl.defaultProps = {};
