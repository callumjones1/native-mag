from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
import os

from routes.health import health_bp
# from routes.products import products_bp  # uncomment as we build
# from routes.orders import orders_bp
# from routes.payments import payments_bp

load_dotenv()

app = Flask(__name__)

CORS(app, origins=os.getenv('CORS_ORIGINS', 'http://localhost:5173').split(','))

app.register_blueprint(health_bp)
# app.register_blueprint(products_bp)
# app.register_blueprint(orders_bp)
# app.register_blueprint(payments_bp)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
