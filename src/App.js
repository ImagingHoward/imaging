import "./App.css";
import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./mil/page-components/home/home.component";
import Research from "./mil/page-components/research/research.component";
import FullPublications from "./mil/page-components/research/full-publications/full-publications.component";
import People from "./mil/page-components/people/people.component";
import Pwang from "./mil/page-components/people/person/pwang.component";
import Wtu from "./mil/page-components/people/person/wtu.component";
import NotFound from "./mil/page-components/not-found/not-found.component";

import NavBar from "./mil/base-components/navbar/nav-bar.component";
import Footer from "./mil/base-components/footer/footer.component";
import Slin from "./mil/page-components/people/person/slin.component";
import Hhsu from "./mil/page-components/people/person/hhsu.component";
import Swashington from "./mil/page-components/people/person/swashington.component";
import Aagaronyan from "./mil/page-components/people/person/aagaronyan.component";
import Facilities from "./mil/page-components/facilities/facilities.component";
import Events from "./mil/page-components/events/events.component";
import Contact from "./mil/page-components/contact/contact.component";
import Positions from "./mil/page-components/positions/positions.component";

import ReaserchHighlightsList from "./mil/data/reaserch-highlights-list";
import FacilitiesList from "./mil/data/facilities-list";

import HighLight from "./mil/page-components/research/research-highlights/highlight/highlight.component";
import Facility from "./mil/page-components/facilities/facility/facility.component";
import PathoRadi from "./mil/page-components/pathoradi/pathoradi";
import Ihc from "./mil/page-components/pathoradi/ihc/ihc.component";
import Upload from "./mil/page-components/pathoradi/upload/upload.component";
import Mandy from "./mil/page-components/people/person/mandy.component";
import Sunny from "./mil/page-components/people/person/sunny.component";

import { UploadForm } from "./mil/page-components/pathoradi/form/form.component";

import MorStainAI from "./mil/page-components/morstainai/home/morstainai.component";
import ImageUpload from "./mil/page-components/morstainai/upload/upload.component";
import SignUp from "./mil/page-components/morstainai/user/signup/signup.component";
import SignIn from "./mil/page-components/morstainai/user/signin/signin.component";
import SignUpForm from "./mil/page-components/morstainai/user/sign-form/signup-form.component";
import Reset from "./mil/page-components/morstainai/user/reset/reset.component";
import ForgetPassword from "./mil/page-components/morstainai/user/forget-password/forget-password.component";
import DashBoard from "./mil/page-components/morstainai/user/dashboard/dashboard.component";
import DashBoardUsers from "./mil/page-components/morstainai/user/dashboard/users.component";
import LearnMore from "./mil/page-components/morstainai/learn-more/learn-more.component";
import About from "./mil/page-components/morstainai/about/about.component";
import Services from "./mil/page-components/morstainai/services/services.component";
import Support from "./mil/page-components/morstainai/support/support.component";
import ContactUs from "./mil/page-components/morstainai/contact-us/contact-us.component";
import FeatureWork from "./mil/page-components/morstainai/feature-work/feature-work.component";

import StainAI from "./stainai/home/home.component";

export const UserContext = React.createContext(null);

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      {/* <NavBar /> */}
      <Router>
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
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

            <Route exact path="/morstainai" element={<MorStainAI />} />
            <Route
              exact
              path="/morstainai/learn-more"
              element={<LearnMore />}
            />
            <Route exact path="/morstainai/about" element={<About />} />
            <Route exact path="/morstainai/services" element={<Services />} />
            <Route exact path="/morstainai/support" element={<Support />} />
            <Route
              exact
              path="/morstainai/contact-us"
              element={<ContactUs />}
            />
            <Route
              exact
              path="/morstainai/feature-work"
              element={<FeatureWork />}
            />

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
            <Route
              exact
              path="/morstainai/user/dashboard/users"
              element={<DashBoardUsers />}
            />

            <Route exact path="/stainai" element={<StainAI />} />
            
          </Routes>
        </UserContext.Provider>
      </Router>
      {/* <Footer /> */}
    </>
  );
}

export default App;
