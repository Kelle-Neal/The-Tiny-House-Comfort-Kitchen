import React from 'react';
import LandingPic from "../../img/stefan-johnson-xIFbDeGcy44-unsplash.jpg";
// import { withRouter } from 'react-router-dom';

const Parent = (props) => {
	return (
		<div style={{
			backgroundImage: `url(${LandingPic})`,
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			// width: '100vw',
			// height: '100vh',
			backgroundColor: 'black'
		}}>
			{props.children}
		</div>
	)
}

export default Parent;

// import React, {Fragment} from 'react'
// import LandingPic from "../../img/stefan-johnson-xIFbDeGcy44-unsplash.jpg";
// // import { withRouter } from 'react-router-dom';

// const Parent = (props) => {
// 	return (
// 	<Fragment>
// 		<div style={{
// 			backgroundImage: `url(${LandingPic})`,
// 			backgroundRepeat:'no-repeat',
// 			backgroundColor: 'black',
// 		}}>
// 			{props.children}
// 		</div>
// 		</Fragment>
// 	)
// }

// export default Parent;
