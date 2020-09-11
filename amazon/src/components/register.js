
import React,{Component} from 'react';
export class RegisterComponent extends Component {

  constructor() {

    super()

  }

  render() {

    return <div>

      <form>
      <div class="form-group">
            <label class="col-md-4 control-label" for="textinput">First Name</label>
            <div class="col-md-4">
              <input id="textinput" name="textinput" placeholder="Insert your first Name" class="form-control input-md" required="" type="text"></input>
                <span class="help-block"> </span>  
            </div>
            </div>


          <div class="form-group">
            <label class="col-md-4 control-label" for="textinput">Last Name</label>
            <div class="col-md-4">
              <input id="textinput" name="textinput" placeholder="Insert your Last Name" class="form-control input-md" required="" type="text"></input>
                <span class="help-block"> </span>  
            </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" for="textinput">Email</label>
              <div class="col-md-4">
                <input id="textinput" name="textinput" placeholder="Insert your Email" class="form-control input-md" required="" type="text"></input>
                  <span class="help-block"> </span>  
              </div>
              </div>


              <div class="form-group">
                <label class="col-md-4 control-label" for="textinput">Password</label>
                <div class="col-md-4">
                  <input id="textinput" name="textinput" placeholder="Insert your Password" class="form-control input-md" required="" type="text"></input>
                    <span class="help-block"> </span>  
                </div>
              </div>

    
    </form>



    </div>

}

}

