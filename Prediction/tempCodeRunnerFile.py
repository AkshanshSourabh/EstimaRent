# from flask import Flask, render_template, request
# import numpy as np
# from keras.models import load_model

# app = Flask(__name)

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