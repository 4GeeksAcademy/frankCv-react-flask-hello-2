"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)
bcrypt = Bcrypt()
jwt = JWTManager()

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/register', methods=['POST'])
def handle_register():
    try:
        name = request.json.get("name")
        email = request.json.get("email")
        password = request.json.get("password")

        if not name or not email or not password:
            return jsonify({"msg":"All fields are required (name,email,password)"}),400
        
        existing_user = User.query.filter_by(email=email).first()
        if existing_user:
            return jsonify({"msg":"Another user is already using that email"}),404
        hash_password=bcrypt.generate_password_hash(password).decode("utf-8")
        user_created = User(name=name,email=email,password=hash_password)

        db.session.add(user_created)
        db.session.commit()
    
        return jsonify({"msg":"Succesfull register", "user":user_created.serialize()}), 201
    except Exception as e:
        return jsonify({"msg":"Internal Server Error","error":str(e)}),500
    
@api.route('/login',methods=['POST'])
def handle_login():
    try:
        email = request.json.get('email')
        password = request.json.get('password')
        if not email or not password:
            return jsonify({"msg":"All Fields are required (email,password)"}),400        
        current_user = User.query.filter_by(email=email).first()
        if not current_user:
            return jsonify({"msg":"Wrong credentials"}),404
        user_id = current_user.id
        access_token = create_access_token(identity=user_id)        
        return jsonify({"msg":"Successful Login","token":access_token,"email":current_user.email}),200
    except Exception as e:
        return jsonify({"msg":"Internal Server Error","error":str(e)}),500

@api.route('/users',methods=['GET'])
@jwt_required()
def show_users():
    try:
        # get_jwt_identity 
        current_user_id = get_jwt_identity()
        if(current_user_id):
            users = User.query.all()
            user_list = []
            for user in users:
                user_dict = {
                    "id":user.id,
                    "email":user.email,
                    "name":user.name
                }
                user_list.append(user_dict)
            return jsonify({"user_list":user_list,"amount":len(user_list)}),200

        
    except Exception as e:
        return jsonify({"msg":"Internal Server Error","error":str(e)}),500


    
