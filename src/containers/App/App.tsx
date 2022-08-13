import React from 'react';
import './App.scss';
import Emoji from "../../components/Instagram/card/Emoji/Emoji";
import InstagramLogo from "../../components/Instagram/Instagram-Logo/Instagram-Logo";
import InstagramHeader from "../../components/Instagram/Instagram-Header/Instaram-Header";
import MediaType from "../../components/Instagram/card/MediaType/Media-Type";
import SocialMediaSearch from "../SocialMediaSearch/SocialMediaSearch";
import InstagramAvatar from "../../components/Instagram/Instagram-Avatar/Instagram-Avatar";
import Profaile from "../../components/Instagram/card/Profile/Profile";
import Follower from "../../components/Instagram/card/Follower/Follower";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Content from "../Content/Content";

function App() {

    return (
        <div className="App">
            {/*<Follower />*/}
            {/*<Profaile />*/}
            {/*<MediaType />*/}
            {/*<InstagramHeader type={'follower'} title={'Media Type'} modStyle={'grey'}/>*/}
            {/*<InstagramLogo modStyle={'follower'} title={'Follower Growth'} />*/}


          <Header />
          <Content />
          <Footer />
        </div>
    );
}

export default App;
