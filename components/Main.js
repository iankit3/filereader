import React from 'react'

import readerPromise from 'readerPromise';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state  = {
            data:{
                pan:'',cname:'',date:''
            }
        }
    }
    onChange() {
        var target = document.getElementById('target');
        var files = target.files;
        readerPromise.readFile(files).then((res) => {
            this.setState({ data:{pan:"pan",cname:"cname",date:"2015-12-21"} });
        })
    }

    handleDragOver(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        ev.dataTransfer.dropEffect = 'copy';
    }

    handleFileSelect(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        var files = ev.dataTransfer.files;
        readerPromise.readFile(files).then((res) => {
            this.setState({ data: res });
        })
    }
    render () {
        return (
            <div className="col-md-10" style={{ "padding": "0" }}>
                <div className="container-fluid main-top">
                    <div className="top-left col-md-6">
                        Suppliers > Onboarding
               </div>
                    <div className="top-right col-md-6">
                        <span><i className="glyphicon glyphicon-flash"></i> Support</span>
                        <span><i className="glyphicon glyphicon-log-out"></i> Logout</span>
                    </div>
                </div>
                <div className="container-fluid main-bottom">
                    <div className="col-md-10 col-md-offset-1 main-content">
                        <p className="content-header">
                            <span style={{ "color": "#000" }}><b>KYC Company</b></span>
                            <span className="glyphicon glyphicon-minus" style={{ "float": "right" }}></span>
                        </p>

                        <form className="container-fluid">
                            <div className="form-set col-md-12">
                                <div className="form-group col-md-6 form-left">
                                    <label>PAN Card</label>
                                    <input type="text"  value={this.state.data.pan} pattern="\w{1,}" title="Alphanumeric only" className="form-control" placeholder="PAN No." />
                                    <input type="text"  value={this.state.data.cname}  pattern="\w{1,}" title="Alphanumeric only" className="form-control" placeholder="Company Name." />
                                    <input type="date"  value={this.state.data.date}className="form-control" placeholder="Date of Incorporation" />
                                </div>

                                <div className="form-group col-md-6" style={{"marginTop": "4em"}}>
                                    <button className="btn btn-primary btn-file col-md-6 col-md-offset-3">
                                        Upload <input type="file" id="target"
                                                 onChange={this.onChange.bind(this)}/>
                                    </button>
                                    
                                    <div className="drop-zone col-md-12"
                                        onDragOver={this.handleDragOver.bind(this)}
                                        onDrop={this.handleFileSelect.bind(this)}>Or drag and drop file
                                </div>
                                </div>
                            </div>
                            
                            <div className="form-set col-md-12">
                               <div className="form-group col-md-6">
                                    <label>TIN</label>
                                    <input type="text" pattern="\w{1,}" title="Alphanumeric only" className="form-control" placeholder="TIN No." />
                                </div>
                            </div>

                            <div className="form-set col-md-12" style={{"paddingLeft":"1.2em"}}>
                                <label>Address Proof</label> <br/>
                                <label className="radio-inline">
                                    <input type="radio" name="radio"  value="option1" /> Electricity Bill
                                </label>
                                <label className="radio-inline">
                                    <input type="radio" name="radio"  value="option2" /> Water Bill
                                </label>
                                <label className="radio-inline">
                                    <input type="radio" name="radio"  value="option3" /> Telephone Bill
                                </label>
                            </div>
                            <button type="submit" className="btn btn-success" style={{"margin": "1.2em 0"}}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main