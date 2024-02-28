
import { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";



function Contacts() {
     const location = useLocation(); // React Hook
     const [hashValue, setHashValue] = useState(""); 
     const [searchParams] = useSearchParams();

      function SearchResults() {

        setHashValue(location.hash)
        console.log(location.hash)
    const q = searchParams.get('type');

    console.log(q)
}
   useEffect(() => {
    // Update the document title using the browser API
      SearchResults()
  });



  return (
    <div>
      Contacts
      {hashValue == "#noHardwareSupport" &&
         <div>fuck</div>
      
      }

    </div>
  
  )
}

export default Contacts


// const Contact = () => {

//     function SearchResults() {
//   const [searchParams] = useSearchParams();

//     const q = searchParams.get('#');

//     console.log(q)
// }
//    useEffect(() => {
//     // Update the document title using the browser API
//       SearchResults()
//   });


//   return <h1>Contact Me</h1>;
// };

// export default Contact;