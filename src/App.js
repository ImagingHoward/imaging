import "./App.css";
import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/page-components/home/home.component";
import Research from "./components/page-components/research/research.component";
import FullPublications from "./components/page-components/research/full-publications/full-publications.component";
import People from "./components/page-components/people/people.component";
import Pwang from "./components/page-components/people/person/pwang.component";
import Wtu from "./components/page-components/people/person/wtu.component";
import NotFound from "./components/page-components/not-found/not-found.component";

import NavBar from "./components/base-components/navbar/nav-bar.component";
import Footer from "./components/base-components/footer/footer.component";
import Slin from "./components/page-components/people/person/slin.component";
import Hhsu from "./components/page-components/people/person/hhsu.component";
import Swashington from "./components/page-components/people/person/swashington.component";
import Aagaronyan from "./components/page-components/people/person/aagaronyan.component";
import Facilities from "./components/page-components/facilities/facilities.component";
import Events from "./components/page-components/events/events.component";
import Contact from "./components/page-components/contact/contact.component";
import Positions from "./components/page-components/positions/positions.component";

import ReaserchHighlightsList from "./data/reaserch-highlights-list";
import FacilitiesList from "./data/facilities-list";

import HighLight from "./components/page-components/research/research-highlights/highlight/highlight.component";
import Facility from "./components/page-components/facilities/facility/facility.component";
import PathoRadi from "./components/page-components/pathoradi/pathoradi";
import Ihc from "./components/page-components/pathoradi/ihc/ihc.component";
import Upload from "./components/page-components/pathoradi/upload/upload.component";
import Mandy from "./components/page-components/people/person/mandy.component";
import Sunny from "./components/page-components/people/person/sunny.component";

import { UploadForm } from "./components/page-components/pathoradi/form/form.component";

import MorStainAI from "./components/page-components/morstainai/home/morstainai.component";
import ImageUpload from "./components/page-components/morstainai/upload/upload.component";
import SignUp from "./components/page-components/morstainai/user/signup/signup.component";
import SignIn from "./components/page-components/morstainai/user/signin/signin.component";
import SignUpForm from "./components/page-components/morstainai/user/sign-form/signup-form.component";
import Reset from "./components/page-components/morstainai/user/reset/reset.component";
import ForgetPassword from "./components/page-components/morstainai/user/forget-password/forget-password.component";
import DashBoard from "./components/page-components/morstainai/user/dashboard/dashboard.component";

// export const UserContext = React.createContext(null);

function App() {
  // const [user, setUser] = useState(null);

  return (
    <>
      {/* <NavBar /> */}
      <Router>
        {/* <UserContext.Provider value={{ user: user, setUser: setUser }}> */}
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route
              exact
              path="/research"
              element={
                <Research reaserchHighlightsList={ReaserchHighlightsList} />
              }
            />
            <Route exact path="/research/full" element={<FullPublications />} />
            <Route
              exact
              path="/research/petatlas"
              element={<HighLight research={ReaserchHighlightsList[0]} />}
            />
            <Route
              exact
              path="/research/tbi"
              element={<HighLight research={ReaserchHighlightsList[1]} />}
            />
            <Route
              exact
              path="/research/chd"
              element={<HighLight research={ReaserchHighlightsList[2]} />}
            />
            <Route
              exact
              path="/research/mrs"
              element={<HighLight research={ReaserchHighlightsList[3]} />}
            />

            <Route exact path="/people" element={<People />} />
            <Route exact path="/people/pwang" element={<Pwang />} />
            <Route exact path="/people/wtu" element={<Wtu />} />
            <Route exact path="/people/slin" element={<Slin />} />
            <Route exact path="/people/chhsu" element={<Hhsu />} />
            <Route exact path="/people/swashington" element={<Swashington />} />
            <Route exact path="/people/mandy" element={<Mandy />} />
            <Route exact path="/people/aagaronyan" element={<Aagaronyan />} />
            <Route exact path="/people/sunny" element={<Sunny />} />

            <Route exact path="/facilities" element={<Facilities />} />
            <Route
              exact
              path="/facility/mri"
              element={<Facility facility={FacilitiesList.mri} />}
            />
            <Route
              exact
              path="/facility/optical"
              element={<Facility facility={FacilitiesList.optical} />}
            />
            <Route
              exact
              path="/facility/pet"
              element={<Facility facility={FacilitiesList.pet} />}
            />

            <Route exact path="/events" element={<Events />} />
            <Route exact path="/positions" element={<Positions />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />

            {/* <Route exact path="/pathoradi" element={<PathoRadi />} />
          <Route exact path="/pathoradi/ihc" element={<Ihc />} />
          <Route exact path="/pathoradi/upload" element={<Upload />} />
          <Route exact path="/pathoradi/form" element={<UploadForm />} /> */}

            <Route exact path="/morstainai" element={<MorStainAI />} />
            <Route exact path="/morstainai/upload" element={<ImageUpload />} />

            <Route exact path="/morstainai/user" element={<SignIn />} />
            <Route exact path="/morstainai/user/singup" element={<SignUp />} />
            <Route
              exact
              path="/morstainai/user/register"
              element={<SignUpForm />}
            />
            <Route exact path="/morstainai/user/reset" element={<Reset />} />
            <Route
              exact
              path="/morstainai/user/forget-password"
              element={<ForgetPassword />}
            />
            <Route
              exact
              path="/morstainai/user/dashboard"
              element={<DashBoard />}
            />
          </Routes>
        {/* </UserContext.Provider> */}
      </Router>
      {/* <Footer /> */}
    </>
  );
}

export default App;
