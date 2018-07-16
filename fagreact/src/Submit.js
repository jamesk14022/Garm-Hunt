import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import Client from './Client.js';
import Dropzone from 'react-dropzone';
import { WithContext as ReactTags } from 'react-tag-input';
import './resources/css/submit.css';

class Submit extends Component{
  constructor(props) {
    super(props);
    console.log(props)
    this.state = { errors: '', inputs: ['input-0'], images: [], tags: [], suggestions: [], items: [] };
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
	return items;
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

    console.log(files)
  }

  handleSubmit(event) {
    event.preventDefault();

    //deep copy
    var outfit = JSON.parse(JSON.stringify(this.state));

    outfit.items = JSON.parse(JSON.stringify(this.parseItemInputs(this.state)));
    console.log(outfit);

    if(!outfit.images.length || !outfit.items[0]){
        this.setState({ errors: 'Please fill in all fields marked with an asterisk.'});
    }else{
      if(outfit.items[0].url && outfit.items[0].name){
        outfit.tags = JSON.stringify(this.state.tags);
        outfit.items = JSON.stringify(outfit.items);
        outfit.userID = this.props.id;
        this.setState({ errors: ''});
        Client.postOutfit(outfit);
         this.props.history.push("/success");
      }else{
        this.setState({ errors: 'Please fill in all fields marked with an asterisk.'});
      }
    }
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
  		'paddingTop': '80px'
  	}

    return (
    <div className="Submit">
    <div className="container">
    <div className="row">
     <legend><h2>Submit an Outfit</h2></legend>
      <div className="col-md-8 col-sm-12 col-xs-12">
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
      <fieldset>

    <div id="dynamicItemInputs">
      {this.state.inputs.map(function(submission){
                return (
                <div className="dynamicItem" key={submission}>
           <div className="form-group">
           <label className="col-md-3 control-label" htmlFor="textinput">Item Name <sup>*</sup></label>  
          <div className="col-md-7">
            <input id={'name' + submission } name={'name' + submission } type="text" placeholder="Oki Tori Sweatshirt - Black Cotton" className="form-control input-md" onChange={this.handleChange} />
          </div>
        </div>

        <div className="form-group">
        <label className="col-md-3 control-label" htmlFor="textinput">Item Link <sup>*</sup></label>  
        <div className="col-md-7">
          <input id={'link' + submission } name={'link' + submission } type="text" placeholder="https://axelarigato.com/uk/men/clothing/sweaters/oki-tori-sweater-10115" className="form-control input-md" onChange={this.handleChange} />
          </div>
        </div>
        </div>
                );
           }, this)}
    </div>

    <div className="form-group">
      <div className="col-md-7 col-md-offset-3">
        <button type="button" className="btn btn-primary" onClick={ () => this.appendInput() }>Add another item</button>
      </div>
    </div>

    <div className="form-group">
      <label className="col-md-3 control-label" htmlFor="textinput">Model Name</label>  
      <div className="col-md-7">
      <input id="modelName" name="modelName" type="text" placeholder="Jorga Smith" className="form-control input-md"onChange={this.handleChange} />
      </div>
    </div>

    <div className="form-group">
      <label className="col-md-3 control-label" htmlFor="textinput">Model Link</label>  
      <div className="col-md-7">
      <input id="modelLink" name="modelLink" type="text" placeholder="https://www.instagram.com/jorjasmith_" className="form-control input-md" onChange={this.handleChange}/>
      </div>
    </div>

    <div className="form-group">
      <div className="col-md-7 col-md-offset-3">
        <Dropzone
          name="image"
          multiple={false}
          accept="image/*"
          style={dropzoneStyle}
          onDrop={this.onImageDrop.bind(this)}
        >
        <p className="dropzone-text" >Drop an image here or click to select images to upload. <sup>*</sup></p>
        <p>Images currently uploaded: {this.state.images.length}</p>
        </Dropzone>
        </div>
      </div>

      <div className="form-group">
        <label className="col-md-3 control-label" htmlFor="textinput">Tags</label> 
        <div className="col-md-7">
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
      <div className="col-md-7 col-md-offset-3">
        <p className="errors">{ this.state.errors }</p>
      </div>
    </div>

    <div className="form-group">
      <div className="col-md-7 col-md-offset-3">
        <button type="submit" className="btn btn-primary btn-lg btn-submit">Submit Item</button>
      </div>
    </div>

  </fieldset>
    </form>
      </div>
      <div className="col-md-4 hidden-sm hidden-xs">
        <div id="tips">
          <h3>Tips for Submitting an Outfit</h3>
          <ul>
            <li>Submit links for two or more items in your outfit.</li>
            <li>Try to link directly to a page where the item can be bought, preferrably in GBP Sterling.</li>
            <li>Add your corporate or personal instagram for added visability.</li>
            <li>Remember to credit the model if you know who they are.</li>
          </ul>
        </div>
      </div>

    </div>
    </div>
    </div>
    );
  }
}

export default Submit;