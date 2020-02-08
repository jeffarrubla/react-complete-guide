import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
	const toggleBtnRef = useRef(null);	
	const authContext = useContext(AuthContext); // To get context on functional components

	console.log(authContext.authenticate);

	useEffect(() => {
		console.log('[Cockpit.js] useEffect');
		// Http request
		/*setTimeout(() => {
			alert('Saved date from cloud');
		}, 1000);*/
		toggleBtnRef.current.click();
		return () => {
			console.log('[Cockpit.js] clean up work with useEffect')
		}
	}, []); //only runs the 1st time

	// runs for every update cycle.
	useEffect(() => {
		console.log('[Cockpit.js] 2nd useEffect');
		return () => {
			console.log('[Cockpit.js] clean work in useEffect');
		};
	});

	const assignedClasses = [];
	let btnClass = '';
	if (props.showPersons){
		btnClass= classes.Red;	
	}	
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold); //classes = ['red','bold'] 
    }
	return (
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
	        <p className={assignedClasses.join(' ')}>This is really working!!!! </p>
	        <button  ref={toggleBtnRef}
	        	className={btnClass}
		        onClick={props.clicked}>
	            Toggle Persons        
	        </button>
	        
	        {<button onClick={authContext.login}>log in</button>}
	        
	    </div>
	);
};

export default React.memo(cockpit);