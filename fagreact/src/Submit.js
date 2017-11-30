import React, {Component} from 'react';
import Client from './Client.js';
import Dropzone from 'react-dropzone';
import './resources/css/submit.css';

class Submit extends Component{
  constructor(props) {
    super(props);
    this.state = { inputs: ['input-0'] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  parseItemInputs(outfit){
  	var items = [];
	Object.keys(outfit).forEach(function(key,index) {
		let lastChar = key[key.length -1];
	    if(key.substring(0,9) === 'linkinput'){
	    	let item = {'url': outfit[key]};
	    	if(outfit['nameinput-' + lastChar]){
	    		item.name = outfit['nameinput-' + lastChar];
	    	}
	    	items.push(item);
	    }
	});
	return JSON.stringify(items);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  onImageDrop(files) {
    this.setState({
      image: files[0]
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    var outfit = this.state;
    outfit.items = this.parseItemInputs(this.state);

    console.log(this.state);
    Client.postOutfit(outfit);
  }

  appendInput(){
	var newInput = `input-${this.state.inputs.length}`;
    this.setState({ inputs: this.state.inputs.concat([newInput]) });
  }

  render() {
    return (
    <div className="Submit">
      <div className="container">
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <fieldset>

		<legend>Submit an Outfit</legend>

		<div id="dynamicItemInputs">
			{this.state.inputs.map(function(submission){
                return (
                <div className="dynamicItem" key={submission}>
			     <div className="form-group">
				  <label className="col-md-4 control-label" for="textinput">Item Name</label>  
				  <div className="col-md-4">
				  <input id={'name' + submission } name={'name' + submission } type="text" placeholder="" className="form-control input-md" onChange={this.handleChange} />
				  </div>
				</div>

				<div className="form-group">
				  <label className="col-md-4 control-label" for="textinput">Item Link</label>  
				  <div className="col-md-4">
				  <input id={'link' + submission } name={'link' + submission } type="text" placeholder="" className="form-control input-md" onChange={this.handleChange} />
				  </div>
				</div>
				</div>
                );
           }, this)}
		</div>

		<div className="form-group">
		  <div className="col-md-4 col-md-offset-4">
		    <button type="button" className="btn btn-primary" onClick={ () => this.appendInput() }>Add another item</button>
		  </div>
		</div>

		<div className="form-group">
		  <label className="col-md-4 control-label" for="textinput">Model Name</label>  
		  <div className="col-md-4">
		  <input id="modelName" name="modelName" type="text" placeholder="Jorga Smith" className="form-control input-md"onChange={this.handleChange} />
		    
		  </div>
		</div>

		<div className="form-group">
		  <label className="col-md-4 control-label" for="textinput">Model Link</label>  
		  <div className="col-md-4">
		  <input id="modelLink" name="modelLink" type="text" placeholder="https://www.instagram.com/jorjasmith_" className="form-control input-md" onChange={this.handleChange}/>
		    
		  </div>
		</div>

		<div className="form-group">
			<div className="col-md-8 col-md-offset-4">
		    <Dropzone
		      name="image"
		      multiple={false}
		      accept="image/*"
		      onDrop={this.onImageDrop.bind(this)}
		      >
		      <p>Drop an image or click to select a file to upload.</p>
		    </Dropzone>
		    </div>
	    </div>

		<div className="form-group">
		  <div className="col-md-4 col-md-offset-4">
		    <button type="submit" className="btn btn-primary">Submit</button>
		  </div>
		</div>

		</fieldset>
      </form>
      </div>
      </div>
    );
  }
}

export default Submit;