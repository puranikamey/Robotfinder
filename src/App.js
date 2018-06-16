import React, {Component} from 'react';
import Cardlist from './Cardlist';
import {robots} from './robots';
import Searchbox from './Searchbox';


class App extends Component {

constructor() {
    super()
	this.state= {
    robots : robots,
     searchfield: ''

	}
}


onseacrhaction =(event) =>{

this.setState({searchfield : event.target.value})


}


render(){
	
const filteredrobots = this.state.robots.filter(robots => {
	return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
})	

return(
	<div className='tc'>

	<h1>Robot Friends</h1>

	<Searchbox  searchChange={this.onseacrhaction} />

   <Cardlist robots= {filteredrobots} />

   </div>
	);

}



}

export default App;