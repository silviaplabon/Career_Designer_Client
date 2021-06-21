import React, { useContext } from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import FeatureJobs from '../../Job/FeatureJobs/FeatureJobs';
import { SearchContext } from '../../../App';
import Footer from '../../shared/Footer/Footer';


const Home = () => {
    const [searchValue,setSearchValue]=useContext(SearchContext);
    return (
        <div className="">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <FeatureJobs ></FeatureJobs>
            <Footer></Footer>
        </div>
    );
};

export default Home;