import "./App.css";
import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./mil/componets/page-components/home/home.component";
import Research from "./mil/componets/page-components/research/research.component";
import FullPublications from "./mil/componets/page-components/research/full-publications/full-publications.component";
import People from "./mil/componets/page-components/people/people.component";
import Pwang from "./mil/componets/page-components/people/person/pwang.component";
import Wtu from "./mil/componets/page-components/people/person/wtu.component";
import NotFound from "./mil/componets/page-components/not-found/not-found.component";

import NavBar from "./mil/componets/base-components/navbar/nav-bar.component";
import Footer from "./mil/componets/base-components/footer/footer.component";
import Slin from "./mil/componets/page-components/people/person/slin.component";
import Hhsu from "./mil/componets/page-components/people/person/hhsu.component";
import Swashington from "./mil/componets/page-components/people/person/swashington.component";
import Aagaronyan from "./mil/componets/page-components/people/person/aagaronyan.component";
import Facilities from "./mil/componets/page-components/facilities/facilities.component";
import Events from "./mil/componets/page-components/events/events.component";
import Contact from "./mil/componets/page-components/contact/contact.component";
import Positions from "./mil/componets/page-components/positions/positions.component";

import ReaserchHighlightsList from "./mil/componets/data/reaserch-highlights-list";
import FacilitiesList from "./mil/componets/data/facilities-list";

import HighLight from "./mil/componets/page-components/research/research-highlights/highlight/highlight.component";
import Facility from "./mil/componets/page-components/facilities/facility/facility.component";
import Mandy from "./mil/componets/page-components/people/person/mandy.component";
import Sunny from "./mil/componets/page-components/people/person/sunny.component";

// import MorStainAI from "./mil/componets/page-components/morstainai/home/morstainai.component";
// import ImageUpload from "./mil/componets/page-components/morstainai/upload/upload.component";
// import SignUp from "./mil/componets/page-components/morstainai/user/signup/signup.component";
// import SignIn from "./mil/componets/page-components/morstainai/user/signin/signin.component";
// import SignUpForm from "./mil/componets/page-components/morstainai/user/sign-form/signup-form.component";
// import Reset from "./mil/componets/page-components/morstainai/user/reset/reset.component";
// import ForgetPassword from "./mil/componets/page-components/morstainai/user/forget-password/forget-password.component";
// import DashBoard from "./mil/componets/page-components/morstainai/user/dashboard/dashboard.component";
// import DashBoardUsers from "./mil/componets/page-components/morstainai/user/dashboard/users.component";
// import LearnMore from "./mil/componets/page-components/morstainai/learn-more/learn-more.component";
// import About from "./mil/componets/page-components/morstainai/about/about.component";
// import Services from "./mil/componets/page-components/morstainai/services/services.component";
// import Support from "./mil/componets/page-components/morstainai/support/support.component";
// import ContactUs from "./mil/componets/page-components/morstainai/contact-us/contact-us.component";
// import FeatureWork from "./mil/componets/page-components/morstainai/feature-work/feature-work.component";

import StainAI from "./stainai/components/page-components/home/home.component";
import SignIn from "./stainai/components/page-components/user/signin/singin.component";
import SignUp from "./stainai/components/page-components/user/signup/signup.component";
import Register from "./stainai/components/page-components/user/register/register.component";
import ForgetPassword from "./stainai/components/page-components/user/forget-password/forget-password.component";
import ResetPasword from "./stainai/components/page-components/user/reset-password/reset-password.component";
import DashBoard from "./stainai/components/page-components/user/dashboard/dashboard.component";
import DashBoardUsers from "./stainai/components/page-components/user/dashboard/users.component";
import ContactUs from "./stainai/components/page-components/contact-us/contact-us.component";
import UploadImage from "./stainai/components/page-components/upload-image/upload-image.component";
import LearnMore from "./stainai/components/page-components/learn-more/learn-more";

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

            {/* <Route exact path="/morstainai" element={<MorStainAI />} />
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
            /> */}

            <Route exact path="/stainai" element={<StainAI />} />
            <Route exact path="/stainai/user/signin" element={<SignIn />} />
            <Route exact path="/stainai/user/singup" element={<SignUp />} />
            <Route exact path="/stainai/user/register" element={<Register />} />
            <Route exact path="/stainai/user/forget-password" element={<ForgetPassword />} />
            <Route exact path="/stainai/user/reset-password" element={<ResetPasword />} />
            <Route exact path="/stainai/user/dashboard" element={<DashBoard />} />
            <Route exact path="/stainai/user/dashboard/users" element={<DashBoardUsers />} />
            <Route exact path="/stainai/contact-us" element={<ContactUs />} />
            <Route exact path="/stainai/upload-image" element={<UploadImage />} />
            <Route exact path="/stainai/learn-more" element={<LearnMore />} />

          </Routes>
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
