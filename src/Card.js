import React from 'react';


	const Card =(props) => {
    const { name, email, id } = props;
	return (
	       <div className='tc bg-light-green dib br3 pa3 ma2 grow bw shadow-3'>
		   <img  alt='Robots'  src= {`https://www.robohash.org/${id}?50x50`} />
		    <div>
		      
		      <h2> {name}</h2>
		      <p>{email}</p>
		    </div>

		   </div>

		);     

	}

	export default Card;