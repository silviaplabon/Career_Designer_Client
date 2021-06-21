import React from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import FeatureJobs from '../../Job/FeatureJobs/FeatureJobs';
import BrowseJobs from '../../Job/BrowseJobs/BrowseJobs';

const Home = () => {
    return (
        <div className="">
            <HeaderMain></HeaderMain>
           <FeatureJobs state={true}></FeatureJobs>
        </div>
    );
};

export default Home;