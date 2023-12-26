import React, { useState } from 'react'
import MultiStepProgressBar from './forms/MultiStepProgressBar/MultiStepProgressBar'
 
import PageOne from './forms/PageOne/PageOne'
import PageTwo from './forms/PageTwo/PageTwo'
import PageThree from './forms/PageThree/PageThree'
import PageFour from './forms/PageFour/PageFour'


const CompleteDetails = () => {
  const [page, setPage] = useState("pageone");

  const nextPage = (page) => {
    setPage(page);
  };

  const nextPageNumber = (pageNumber) => {
    switch (pageNumber) {
      case "1":
        setPage("pageone");
        break;
      case "2":
        setPage("pagetwo");
        break;
      case "3":
        setPage("pagethree");
        break;
      case "4":
        alert("Ooops! Seems like you did not fill the form.");
        break;
      default:
        setPage("1");
    }
  };


  return (
    <>
    <div className=' flex-1 flex   justify-center items-center gap-6'>

           <div className="flex flex-col justify-center items-center">
      <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} />
      {
        {
          pageone: <PageOne onButtonClick={nextPage} />,
          pagetwo: <PageTwo onButtonClick={nextPage} />,
          pagethree: <PageThree onButtonClick={nextPage} />,
          pagefour: <PageFour />,
        }[page]
      }
      </div>
    </div>
      </>
        
       
  )
}

export default CompleteDetails