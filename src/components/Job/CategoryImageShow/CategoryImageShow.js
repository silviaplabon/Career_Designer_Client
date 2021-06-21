import React from 'react';

const CategoryImageShow = ({ category }) => {

    let link;
    if (category == "IT Engineer") {
        link="https://i.ibb.co/NNfQxMG/it-removebg-preview.png";

    }

    else if (category == "Management") {
        link="https://i.ibb.co/kQGqmdS/management-removebg-preview.png";

    }
    else if (category == "Digital & Creative") {
        link="https://i.ibb.co/DVfsGcC/feature04.png";

    }
    else if(category=="Accounting"){
        link="https://i.ibb.co/3yjgB0H/accounting-removebg-preview.png";
      
    }
    else if(category=="Sales & Marketing"){
        link="https://i.ibb.co/BZ9pMW3/marketing-removebg-preview.png";
      
    }
    else if(category=="Writing & Translations"){
        link="https://i.ibb.co/fv4pyPZ/writing-removebg-preview.png";
      
    }
   else if(category=="Telecommunication"){
    link="https://i.ibb.co/VYbpkfG/tele-removebg-preview.png";
      
    }
    else if(category=="Design & Art"){
        link="https://i.ibb.co/BKLqJCd/design-removebg-preview.png";
      
    }
    return (
       <> <img src={link} style={{width:'100px',height:'80px'}}></img></>
       
    );
};

export default CategoryImageShow;