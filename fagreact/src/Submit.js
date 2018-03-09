import React, {Component} from 'react';
import Client from './Client.js';
import Dropzone from 'react-dropzone';
import { WithContext as ReactTags } from 'react-tag-input';
import './resources/css/submit.css';

class Submit extends Component{
  constructor(props) {
    super(props);
    console.log(props)
    this.state = { inputs: ['input-0'], images: [], tags: [], suggestions: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTagDelete = this.handleTagDelete.bind(this);
    this.handleTagAddition = this.handleTagAddition.bind(this);
    this.handleTagDrag = this.handleTagDrag.bind(this);
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

  parseTags(tags){
  	return JSON.stringify(tags);
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
    	images: this.state.images.concat(files)
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    var outfit = this.state;
    outfit.items = this.parseItemInputs(this.state);
    outfit.tags = this.parseTags(this.state.tags);
    outfit.userID = this.props.id;
    Client.postOutfit(outfit);
  }

  appendInput(){
	var newInput = `input-${this.state.inputs.length}`;
    this.setState({ inputs: this.state.inputs.concat([newInput]) });
  }

  handleTagDelete(i){
  	let tags = this.state.tags;
    tags.splice(i, 1);
    this.setState({tags: tags});
  }

  handleTagAddition(tag){
  	let tags = this.state.tags;
    tags.push({
        id: tags.length + 1,
        text: tag
    });
    this.setState({tags: tags});
  }

  handleTagDrag(tag, currPos, newPos){
  	 let tags = this.state.tags;
 
    // mutate array
    tags.splice(currPos, 1);
    tags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: tags });
  }

  render() {

  	const { tags, suggestions } = this.state;

  	let dropzoneStyle = {
  		'width': '100%',
  		'height': '200px',
  		'borderWidth': '2px',
  		'borderStyle': 'dashed',
  		'borderRadius': '5px',
  		'textAlign': 'center',
  		'paddingTop': '50px'
  	}

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
			     <label className="col-md-4 control-label" htmlFor="textinput">Item Name</label>  
				  <div className="col-md-4">
				  	<input id={'name' + submission } name={'name' + submission } type="text" placeholder="" className="form-control input-md" onChange={this.handleChange} />
				  </div>
				</div>

				<div className="form-group">
				<label className="col-md-4 control-label" htmlFor="textinput">Item Link</label>  
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
		  <label className="col-md-4 control-label" htmlFor="textinput">Model Name</label>  
		  <div className="col-md-4">
		  <input id="modelName" name="modelName" type="text" placeholder="Jorga Smith" className="form-control input-md"onChange={this.handleChange} />
		  </div>
		</div>

		<div className="form-group">
		  <label className="col-md-4 control-label" htmlFor="textinput">Model Link</label>  
		  <div className="col-md-4">
		  <input id="modelLink" name="modelLink" type="text" placeholder="https://www.instagram.com/jorjasmith_" className="form-control input-md" onChange={this.handleChange}/>
		  </div>
		</div>

		<div className="form-group">
			<div className="col-md-4 col-md-offset-4">
		    <Dropzone
		      name="image"
		      multiple={false}
		      accept="image/*"
		      style={dropzoneStyle}
		      onDrop={this.onImageDrop.bind(this)}
		    >
		      <p>Drop an image or click to select a file to upload.</p>
		    </Dropzone>
		    </div>
	    </div>

	    <div className="form-group">
	    	<label className="col-md-4 control-label" htmlFor="textinput">Tags</label> 
	    	<div className="col-md-4">
	    		<ReactTags 
            tags={tags}
            suggestions={suggestions}
            classNames={{ tagInputField: 'form-control input-md tag-input', tag: 'enteredTags', remove: 'removeTag'}}
            placeholder={'Type a Tag and Hit Enter to Confirm'}
            handleDelete={this.handleTagDelete}
            handleAddition={this.handleTagAddition}
            handleDrag={this.handleTagDrag} 
          />
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