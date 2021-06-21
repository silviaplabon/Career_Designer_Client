import React, { useContext } from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import FeatureJobs from '../../Job/FeatureJobs/FeatureJobs';
import BrowseJobs from '../../Job/BrowseJobs/BrowseJobs';
import { SearchContext } from '../../../App';


const Home = () => {
    const [searchValue,setSearchValue]=useContext(SearchContext);
    return (
        <div className="">
            <HeaderMain></HeaderMain>
            {
                searchValue?.length>1 && <FeatureJobs state={false}></FeatureJobs>
            }
            {
                searchValue?.length<1 && <FeatureJobs state={true}></FeatureJobs>
            }
          
        </div>
    );
};

export default Home;