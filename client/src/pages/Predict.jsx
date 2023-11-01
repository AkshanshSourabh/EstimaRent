// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Predict() {
//     const [predictionResult, setPredictionResult] = useState(null);
//     const [inputData, setInputData] = useState({
//         bhk: 3,
//         size: 1500,
//         area_type: 2,
//         pin_code: 560001,
//         furnishing_status: 2,
//         tenant_type: 2,
//         bathrooms: 2,
//     });


//     useEffect(()=>{
//         axios.post('http://127.0.0.1:5000/predict', inputData) // Updated URL
//         .then(response => {
//             setPredictionResult(response.data);
//             console.log("It is working")
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });

//     }, [])
  
//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setInputData({
//             ...inputData,
//             [name]: value,
//         });
//     };

//     const handlePredict = () => {
//         // Send a POST request to the Flask API with the user-input data
//         axios.post('http://127.0.0.1:5000/predict', inputData) // Updated URL
//             .then(response => {
//                 setPredictionResult(response.data);
//                 console.log("hihihsishdishihs")
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//             });
//     };

//     return (
//         <div>
//         <h1>Enter House Details to Predict Rent</h1>
//         <form onSubmit={handlePredict}>
//             <label htmlFor="bhk">Number of BHK: </label>
//             <input type="text" name="bhk" value={inputData.bhk} onChange={handleInputChange} /><br />

//             <label htmlFor="size">Size of the House: </label>
//             <input type="text" name="size" value={inputData.size} onChange={handleInputChange} /><br />

//             <label htmlFor="area_type">Area Type (Super Area = 1, Carpet Area = 2, Built Area = 3): </label>
//             <input type="text" name="area_type" value={inputData.area_type} onChange={handleInputChange} /><br />

//             <label htmlFor="pin_code">Pin Code of the City: </label>
//             <input type="text" name="pin_code" value={inputData.pin_code} onChange={handleInputChange} /><br />

//             <label htmlFor="furnishing_status">Furnishing Status of the House (Unfurnished = 0, Semi-Furnished = 1, Furnished = 2): </label>
//             <input type="text" name="furnishing_status" value={inputData.furnishing_status} onChange={handleInputChange} /><br />

//             <label htmlFor="tenant_type">Tenant Type (Bachelors = 1, Bachelors/Family = 2, Only Family = 3): </label>
//             <input type="text" name="tenant_type" value={inputData.tenant_type} onChange={handleInputChange} /><br />

//             <label htmlFor="bathrooms">Number of bathrooms: </label>
//             <input type="text" name="bathrooms" value={inputData.bathrooms} onChange={handleInputChange} /><br />

//             <input type="submit" value="Predict" />
//         </form>
//         {predictionResult && <p>Predicted Rent: {predictionResult}</p>}
//         </div>
//     );
// }

// export default Predict;
// import React, { useState } from 'react';
// import axios from 'axios'; // Add this line to import axios

// function PredictForm() {
//     const [inputData, setInputData] = useState({
//         bhk: '',
//         size: '',
//         area_type: '',
//         pin_code: '',
//         furnishing_status: '',
//         tenant_type: '',
//         bathrooms: '',
//     });

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setInputData({
//             ...inputData,
//             [name]: value,
//         });
//     };
//     const handlePredict = () => {
//         axios.post('http://127.0.0.1:5000/', inputData) // Updated URL
//             .then(response => {
//                 setPredictionResult(response.data.predicted_price);
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//             });
//     };

//     return (
//         <div>
//             <h1>Enter House Details to Predict Rent</h1>
//             <form onSubmit={handlePredict}>
//                 <label htmlFor="bhk">Number of BHK: </label>
//                 <input type="text" name="bhk" value={inputData.bhk} onChange={handleInputChange} /><br />

//                 <label htmlFor="size">Size of the House: </label>
//                 <input type="text" name="size" value={inputData.size} onChange={handleInputChange} /><br />

//                 <label htmlFor="area_type">Area Type (Super Area = 1, Carpet Area = 2, Built Area = 3): </label>
//                 <input type="text" name="area_type" value={inputData.area_type} onChange={handleInputChange} /><br />

//                 <label htmlFor="pin_code">Pin Code of the City: </label>
//                 <input type="text" name="pin_code" value={inputData.pin_code} onChange={handleInputChange} /><br />

//                 <label htmlFor="furnishing_status">Furnishing Status of the House (Unfurnished = 0, Semi-Furnished = 1, Furnished = 2): </label>
//                 <input type="text" name="furnishing_status" value={inputData.furnishing_status} onChange={handleInputChange} /><br />

//                 <label htmlFor="tenant_type">Tenant Type (Bachelors = 1, Bachelors/Family = 2, Only Family = 3): </label>
//                 <input type="text" name="tenant_type" value={inputData.tenant_type} onChange={handleInputChange} /><br />

//                 <label htmlFor="bathrooms">Number of bathrooms: </label>
//                 <input type="text" name="bathrooms" value={inputData.bathrooms} onChange={handleInputChange} /><br />

//                 <button type="submit">Predict</button>
//             </form>
//         </div>
//     );
// }

// export default PredictForm;
// import React, { useState } from 'react';
// import axios from 'axios';

// function PredictForm() {
//     const [inputData, setInputData] = useState({
//         bhk: '',
//         size: '',
//         area_type: '',
//         pin_code: '',
//         furnishing_status: '',
//         tenant_type: '',
//         bathrooms: '',
//     });

//     const [predictionResult, setPredictionResult] = useState(null); // Define state for prediction result

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setInputData({
//             ...inputData,
//             [name]: value,
//         });
//     };

//     const handlePredict = () => {
//         axios.post('http://127.0.0.1:5000/predict', inputData) // Updated URL for prediction
//             .then(response => {
//                 setPredictionResult(response.data);
//                 console.log(a)
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//             });
//     };

//     return (
//         <div>
//             <h1>Enter House Details to Predict Rent</h1>
//             <form onSubmit={handlePredict}>
//             <label htmlFor="bhk">Number of BHK: </label>
//                 <input type="text" name="bhk" value={inputData.bhk} onChange={handleInputChange} /><br />

//                <label htmlFor="size">Size of the House: </label>
//                <input type="text" name="size" value={inputData.size} onChange={handleInputChange} /><br />

//                 <label htmlFor="area_type">Area Type (Super Area = 1, Carpet Area = 2, Built Area = 3): </label>
//                 <input type="text" name="area_type" value={inputData.area_type} onChange={handleInputChange} /><br />

//                 <label htmlFor="pin_code">Pin Code of the City: </label>
//                 <input type="text" name="pin_code" value={inputData.pin_code} onChange={handleInputChange} /><br />

//                 <label htmlFor="furnishing_status">Furnishing Status of the House (Unfurnished = 0, Semi-Furnished = 1, Furnished = 2): </label>
//                 <input type="text" name="furnishing_status" value={inputData.furnishing_status} onChange={handleInputChange} /><br />

//                 <label htmlFor="tenant_type">Tenant Type (Bachelors = 1, Bachelors/Family = 2, Only Family = 3): </label>
//                 <input type="text" name="tenant_type" value={inputData.tenant_type} onChange={handleInputChange} /><br />

//                  <label htmlFor="bathrooms">Number of bathrooms: </label>
//                <input type="text" name="bathrooms" value={inputData.bathrooms} onChange={handleInputChange} /><br />
//                 <button type="submit">Predict</button>
//             </form>
//             {predictionResult && <p>Predicted Rent: {predictionResult}</p>} 
//         </div>
//     );
// }

// export default PredictForm;
// Predict.jsx

// Import necessary libraries
import React, { useState } from 'react';

function Predict() {
    const [predictionResult, setPredictionResult] = useState(null);

    const handlePredict = () => {
        // Define the input data
        const inputData = {
            bhk: 2,
            size: 1100,
            area_type: 2,
            pin_code: 101,
            furnishing_status: 2,
            tenant_type: 2,
            bathrooms: 2
        };
        // Send a POST request to the Flask API
        fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputData)
        })
        .then(response => response.json())
        .then(data => {
            setPredictionResult(data);  // Corrected key
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div>
            <h1>Predict Rent</h1>
            <button onClick={handlePredict}>Predict</button>
            {predictionResult && <p>Predicted Rent: {predictionResult}</p>}
        </div>
    );
}

export default Predict;
