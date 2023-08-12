import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function App() {

  let [name,setname] = useState();
  let [email,setemail] = useState();
  let [pass,setpass] = useState();
  let [phone,setphone] = useState();
  let [date,setdate] = useState();
  let [city,setcity] = useState();
  let [address,setaddress] = useState();
  let [gen,setgen] = useState();
  let [hobby,sethobby] = useState([]);

  const passdata = () => {
    axios.post('http://localhost/phpapi/index.php',{
      name:name,
      email:email,
      pass:pass,
      phone:phone,
      date:date,
      city:city,
      address:address,
      gen:gen,
      hobby:hobby,
    })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  }

  return (
    <div classNameName="App">
      <section class="sec5">
        <div className="contact_bg ">
          <img src={require("./image/asset 12.png")} alt="" />
        </div>
        <div className="contact_bg2">
          <img src={require("./image/asset 13.png")} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-7 m-auto mt-5" style={{ zIndex: "100" }}>
              <div className="contact_bg3" >
                <div className="section_title">
                  <h2>Make Appointment</h2>
                  <span>
                    <img src={require("./image/asset 3.png")} alt="" />
                  </span>
                </div>
                <form >
                  <div className="row">
                    <div className="col-lg-6 pe-0">
                      <div className="contact_field">
                        <input type="text" name="name" placeholder="Name" required="" onChange={(e)=>{setname(e.target.value)}}/>
                      </div>
                    </div>
                    <div className="col-lg-6 pe-0">
                      <div className="contact_field">
                        <input type="text" name="email" placeholder="Email" required="" onChange={(e)=>{setemail(e.target.value)}}/>
                      </div>
                    </div>
                    <div class="col-lg-6 pe-0">
                      <div class="contact_field">
                        <input type="password" name="pass" placeholder="pass" required="" onChange={(e)=>{setpass(e.target.value)}}/>
                      </div>
                    </div>
                    <div className="col-lg-6 pe-0">
                      <div className="contact_field">
                        <input type="text" name="phone" placeholder="Phone no." required="" onChange={(e)=>{setphone(e.target.value)}}/>
                      </div>
                    </div>
                    <div class="col-lg-6 pe-0">
                      <div class="contact_field">
                        <input type="Date" name="date" placeholder="pass" required="" onChange={(e)=>{setdate(e.target.value)}}/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-field">
                        <select name="city" onChange={(e)=>{setcity(e.target.value)}}>
                          <option value="city">City</option>
                          <option value="suart">Suart</option>
                          <option value="juanagadh">Junagadh</option>
                          <option value="baroda">Baroda</option>
                          <option value="rajkot">Rajkot</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="contact">
                        <input type="text" name="address" id="message" cols="30" rows="10"
                          placeholder="Write Address"
                          style={{ height: "100px", margintop: "20px", marginbottom: "45px" }} onChange={(e)=>{setaddress(e.target.value)}}></input>
                      </div>
                    </div>
                    <div class="col-lg-12 d-flex gap-4 mt-3" onChange={(e)=>{setgen(e.target.value)}}>
                      <label className='ps-3'>Gender:</label>
                      <div class=" d-flex p-0  gen">
                        <label for="" class="pe-2">Male</label>
                        <input type="radio" name="gen" value="Male" class="form_in" />
                      </div>
                      <div class=" d-flex p-0  gen">
                        <label for="" class="px-2">Female</label>
                        <input type="radio" name="gen" value="Female" class="form_in" />
                      </div>
                    </div>
                    <div class="col-lg-12 d-flex my-3 ps-4">
                      <label>Hobby:</label>
                      <div class="d-flex ">
                        <label for="" class="px-2 '">Reading</label>
                        <input type="checkbox" name="hobby[]" class="form_in" value="Reading" onChange={(e)=> {sethobby ([...hobby,(e.target.value)])}}/>
                      </div>
                      <div class="d-flex mx-3">
                        <label for="" class="px-2">Cooking</label>
                        <input type="checkbox" name="hobby[]" class="form_in" value="Cooking" onChange={(e)=> {sethobby ([...hobby,(e.target.value)])}}/>

                      </div>
                      <div class="d-flex mx-3">
                        <label for="" class="px-2">Movie</label>
                        <input type="checkbox" name="hobby[]" class="form_in" value="Movie"onChange={(e)=> {sethobby ([...hobby,(e.target.value)])}}/>

                      </div>
                      <div class="d-flex ">
                        <label for="" class="px-2">Modeling</label>
                        <input type="checkbox" name="hobby[]" class="form_in" value="Modeling" onChange={(e)=> {sethobby ([...hobby,(e.target.value)])}}/>
                      </div>
                    </div>
                    <div className="slider-btn">
                      <input type='submit' className="btn ss-btn" onClick={passdata} value="Submit" /> 
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
