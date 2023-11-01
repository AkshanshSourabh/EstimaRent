# from flask import Flask, render_template, request
# import numpy as np
# from keras.models import load_model
# from flask_cors import CORS  # Import the CORS extension

# app = Flask(__name__)
# # CORS(app, resources={r"/predict": {"origins": "http://127.0.0.1:5173"}})  # Enable CORS for the /predict endpoint

# # Load the pre-trained model
# model = load_model('C:/Users/Akshansh Sourabh/projects/EstimaRent/Prediction/model.h5')  # Replace 'your_model.h5' with the actual path to your trained model

# @app.route('/')
# def index():
#     return render_template('index.html')

# @app.route('/predict', methods=['POST'])
# def predict():
#     if request.method == 'POST':
#         a = int(request.form['bhk'])
#         b = int(request.form['size'])
#         c = int(request.form['area_type'])
#         d = int(request.form['pin_code'])
#         e = int(request.form['furnishing_status'])
#         f = int(request.form['tenant_type'])
#         g = int(request.form['bathrooms'])
        
#         features = np.array([[a, b, c, d, e, f, g]])
        
#         prediction = model.predict(features)
        
#         return f"Predicted House Price = {prediction[0][0]}"

# if __name__ == '__main__':
#     app.run()
# from flask import Flask, request,render_template, jsonify
# import numpy as np
# from keras.models import load_model
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app, resources={r"/predict": {"origins": "http://127.0.0.1:5173"}})

# # Load the pre-trained model
# model = load_model('C:/Users/Akshansh Sourabh/projects/EstimaRent/Prediction/model.h5')  # Replace 'your_model.h5' with the actual path to your trained model


# @app.route('/')
# def index():
#     return render_template('C:/Users/Akshansh Sourabh/projects/EstimaRent/client/src/pages/Predict.jsx')

# # Change the route to /predict
# @app.route('/predict', methods=['POST'])
# def predict():
#     if request.method == 'POST':
#         data = request.get_json()  # Use request.get_json() to parse JSON data
#         a = int(data['bhk'])
#         b = int(data['size'])
#         c = int(data['area_type'])
#         d = int(data['pin_code'])
#         e = int(data['furnishing_status'])
#         f = int(data['tenant_type'])
#         g = int(data['bathrooms'])
#         features = np.array([[a, b, c, d, e, f, g]])

#         prediction = model.predict(features)
        
#         # Return a JSON response with the correct key
#         return jsonify({"predicted_price": prediction[0][0]})

# if __name__ == '__main__':
#     app.run()
from flask import Flask, render_template, request
import numpy as np
from keras.models import load_model

app = Flask(__name__)

# Load the pre-trained model
model = load_model('C:/Users/Akshansh Sourabh/projects/EstimaRent/Prediction/model.h5')  # Replace with your model path

@app.route('/', methods=['GET', 'POST'])
def index():
    prediction_result = None

    if request.method == 'POST':
        try:
            a = int(request.form['bhk'])
            b = int(request.form['size'])
            c = int(request.form['area_type'])
            d = int(request.form['pin_code'])
            e = int(request.form['furnishing_status'])
            f = int(request.form['tenant_type'])
            g = int(request.form['bathrooms'])

            features = np.array([[a, b, c, d, e, f, g]])

            prediction = model.predict(features)
            prediction_result = f"Predicted House Price = {prediction[0][0]}"

        except Exception as e:
            prediction_result = f"Error: {str(e)}"

    return render_template('index.html', prediction_result=prediction_result)

if __name__ == '__main__':
    app.run()
