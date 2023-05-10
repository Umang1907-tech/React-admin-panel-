import React from "react";

export default function Add_product() {
  return (
    <div id="page-wrapper">
      <div className="row">
        {/* page header */}
        <div className="col-lg-12">
          <h1 className="page-header">Forms</h1>
        </div>
        {/*end page header */}
      </div>
      <div className="row">
        <div className="col-lg-12">
          {/* Form Elements */}
          <div className="panel panel-default">
            <div className="panel-heading">Basic Form Elements</div>
            <div className="panel-body">
              <div className="row">
                <div className="col-lg-12">
                  <form role="form">
                    <div className="form-group">
                      <label>Text Input</label>
                      <input className="form-control" />
                      <p className="help-block">
                        Example block-level help text here.
                      </p>
                    </div>
                    <div className="form-group">
                      <label>Text Input with Placeholder</label>
                      <input
                        className="form-control"
                        placeholder="Enter text"
                      />
                    </div>
                    <div className="form-group">
                      <label>Static Control</label>
                      <p className="form-control-static">email@example.com</p>
                    </div>
                    <div className="form-group">
                      <label>File input</label>
                      <input type="file" />
                    </div>
                    <div className="form-group">
                      <label>Text area</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group">
                      <label>Checkboxes</label>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" defaultValue />
                          Checkbox 1
                        </label>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" defaultValue />
                          Checkbox 2
                        </label>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" defaultValue />
                          Checkbox 3
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Inline Checkboxes</label>
                      <label className="checkbox-inline">
                        <input type="checkbox" />1
                      </label>
                      <label className="checkbox-inline">
                        <input type="checkbox" />2
                      </label>
                      <label className="checkbox-inline">
                        <input type="checkbox" />3
                      </label>
                    </div>
                    <div className="form-group">
                      <label>Radio Buttons</label>
                      <div className="radio">
                        <label>
                          <input
                            type="radio"
                            name="optionsRadios"
                            id="optionsRadios1"
                            defaultValue="option1"
                            defaultChecked
                          />
                          Radio 1
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input
                            type="radio"
                            name="optionsRadios"
                            id="optionsRadios2"
                            defaultValue="option2"
                          />
                          Radio 2
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input
                            type="radio"
                            name="optionsRadios"
                            id="optionsRadios3"
                            defaultValue="option3"
                          />
                          Radio 3
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Inline Radio Buttons</label>
                      <label className="radio-inline">
                        <input
                          type="radio"
                          name="optionsRadiosInline"
                          id="optionsRadiosInline1"
                          defaultValue="option1"
                          defaultChecked
                        />
                        1
                      </label>
                      <label className="radio-inline">
                        <input
                          type="radio"
                          name="optionsRadiosInline"
                          id="optionsRadiosInline2"
                          defaultValue="option2"
                        />
                        2
                      </label>
                      <label className="radio-inline">
                        <input
                          type="radio"
                          name="optionsRadiosInline"
                          id="optionsRadiosInline3"
                          defaultValue="option3"
                        />
                        3
                      </label>
                    </div>
                    <div className="form-group">
                      <label>Selects</label>
                      <select className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Multiple Selects</label>
                      <select multiple className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit Button
                    </button>
                    <button type="reset" className="btn btn-success">
                      Reset Button
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* End Form Elements */}
        </div>
      </div>
    </div>
  );
}
