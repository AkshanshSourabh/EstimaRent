import React, { useState } from 'react';

function Index() {
    const [bhk, setBhk] = useState('');
    const [size, setSize] = useState('');
    const [areaType, setAreaType] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [furnishingStatus, setFurnishingStatus] = useState('');
    const [tenantType, setTenantType] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [predictionResult, setPredictionResult] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    bhk: bhk,
                    size: size,
                    area_type: areaType,
                    pin_code: pinCode,
                    furnishing_status: furnishingStatus,
                    tenant_type: tenantType,
                    bathrooms: bathrooms,
                }),
            });

            if (response.status === 200) {
                const data = await response.json();
                setPredictionResult(`Predicted House Price = ${data.prediction}`);
            } else {
                setPredictionResult('Error in prediction.');
            }
        } catch (error) {
            setPredictionResult(`Error: ${error}`);
        }
    };

    return (
        <div>
            <h1>Enter House Details to Predict Rent</h1>
            <form onSubmit={handleSubmit}>
                <label for="bhk">Number of BHK:</label>
                <input
                    type="text"
                    name="bhk"
                    value={bhk}
                    onChange={(e) => setBhk(e.target.value)}
                /><br />

                <label for="size">Size of the House:</label>
                <input
                    type="text"
                    name="size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                /><br />

                <label for="area_type">Area Type (Super Area = 1, Carpet Area = 2, Built Area = 3):</label>
                <input
                    type="text"
                    name="area_type"
                    value={areaType}
                    onChange={(e) => setAreaType(e.target.value)}
                /><br />

                <label for="pin_code">Pin Code of the City:</label>
                <input
                    type="text"
                    name="pin_code"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                /><br />

                <label for="furnishing_status">Furnishing Status of the House (Unfurnished = 0, Semi-Furnished = 1, Furnished = 2):</label>
                <input
                    type="text"
                    name="furnishing_status"
                    value={furnishingStatus}
                    onChange={(e) => setFurnishingStatus(e.target.value)}
                /><br />

                <label for="tenant_type">Tenant Type (Bachelors = 1, Bachelors/Family = 2, Only Family = 3):</label>
                <input
                    type="text"
                    name="tenant_type"
                    value={tenantType}
                    onChange={(e) => setTenantType(e.target.value)}
                /><br />

                <label for="bathrooms">Number of bathrooms:</label>
                <input
                    type="text"
                    name="bathrooms"
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                /><br />

                <input type="submit" value="Predict" />
            </form>

            {predictionResult && (
                <div>
                    <h2>Predicted House Price:</h2>
                    <p>{predictionResult}</p>
                </div>
            )}
        </div>
    );
}

export default Index;