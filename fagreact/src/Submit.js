import React, {Component} from 'react';
import Client from './Client.js';
import Dropzone from 'react-dropzone';
import './resources/css/submit.css';

class Submit extends Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('Submit form was submitted: ' + this.state.value);
    event.preventDefault();

    console.log(this.state);
    var outfit = this.state;
    Client.postOutfit(outfit);
  }

  onImageDrop(files) {
    this.setState({
      image: files[0]
    });
  }

  render() {
    return (
    <div className="Submit">
      <div className="container">
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <fieldset>

		<legend>Form Name</legend>

		<div className="form-group">
		  <label className="col-md-4 control-label" for="textinput">Item #1 Name</label>  
		  <div className="col-md-4">
		  <input id="name1" name="name1" type="text" placeholder="" className="form-control input-md" onChange={this.handleChange} />
		    
		  </div>
		</div>

		<div className="form-group">
		  <label className="col-md-4 control-label" for="textinput">Item #1 Link</label>  
		  <div className="col-md-4">
		  <input id="link1" name="link1" type="text" placeholder="" className="form-control input-md" onChange={this.handleChange} />
		    
		  </div>
		</div>

		<div className="form-group">
		  <label className="col-md-4 control-label" for="textinput">Item #2 Name</label>  
		  <div className="col-md-4">
		  <input id="name2" name="name2" type="text" placeholder="" className="form-control input-md" onChange={this.handleChange} />
		    
		  </div>
		</div>

		<div className="form-group">
		  <label className="col-md-4 control-label" for="textinput">Item #2 Link</label>  
		  <div className="col-md-4">
		  <input id="link2" name="link2" type="text" placeholder="" className="form-control input-md" onChange={this.handleChange} />
		    
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

	    <Dropzone
	      name="image"
	      multiple={false}
	      accept="image/*"
	      onDrop={this.onImageDrop.bind(this)}>
	      <p>Drop an image or click to select a file to upload.</p>
	    </Dropzone>

		<div className="form-group">
		  <div className="col-md-4 offset-md-4">
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