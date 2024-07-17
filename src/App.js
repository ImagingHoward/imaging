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
import Kelsey from "./mil/componets/page-components/people/person/kelsey.component";
import Donovan from "./mil/componets/page-components/people/person/donovan.component";
import Nzechari from "./mil/componets/page-components/people/person/nzechari.component";
import Oluwabukunmi from "./mil/componets/page-components/people/person/oluwabukunmi.component";
import Bria from "./mil/componets/page-components/people/person/bria.component";
import Russell from "./mil/componets/page-components/people/person/russell.component";
import Julianna from "./mil/componets/page-components/people/person/julianna.component";

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
            <Route exact path="/people/kelsey" element={<Kelsey />} />
            <Route exact path="/people/donovan" element={<Donovan />} />
            <Route exact path="/people/nzechari" element={<Nzechari />} />
            <Route exact path="/people/oluwabukunmi" element={<Oluwabukunmi />} />
            <Route exact path="/people/bria" element={<Bria />} />
            <Route exact path="/people/russell" element={<Russell />} />
            <Route exact path="/people/julianna" element={<Julianna />} />
            

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
