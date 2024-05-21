from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pymongo import MongoClient
from pymongo.errors import DuplicateKeyError
from bson.objectid import ObjectId

# INSTALAR PARA FUNCIONAR
# pip install bson --PRIMEIRO
# pip install pymongo -- CASO DE ERRO bson DESINSTALE E INSTALE DNV(pip uninstall pymongo)
# pip install fastapi
# PARA EXECUTAR "python -m uvicorn main:app --reload"

# JSON REQUISICAO
# {
#     "email_Usuario" : "EMILE",
#     "senha_Usuario" : "123"
# }

# Conexão com o MongoDB
client = MongoClient("mongodb://localhost:27017")
db = client["Teste"]
collection = db["User"]

# Collection Objeto
class User(BaseModel):
    email_Usuario: str
    senha_Usuario: str

app = FastAPI()

# Configurando o CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8081"],  # Permitindo solicitações do seu aplicativo React Native
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

# Hello world
@app.get("/hello")
async def read_hello():
    return {"message": "Hello, World!"}

# Buscar usuarios cadastrados no banco
@app.get("/usuario")
async def read_user():
    try:
        users = []
        for user in collection.find():
            user['_id'] = str(user['_id']) 
            users.append(user)
        return users
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro na aplicação: {str(e)}")

# Buscar usuarios por ObjectId
@app.get("/usuario/{id}")
async def read_user_by_id(id : str):
    try:
        user = collection.find_one({"_id": ObjectId(id)})
        if user:
            user['_id'] = str(user['_id'])  
            return user
        else:
            raise HTTPException(status_code=404, detail="Usuario não encontrado")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro na aplicação: {str(e)}")

# registrar usuarios
@app.post("/usuario")
async def register_user(user: User):
    try:
        collection.insert_one(user.dict())
        return {"message": "Usuario registrado com sucesso!"}
    except DuplicateKeyError:
        raise HTTPException(status_code=400, detail="Usuario já existe")
    
# Contraint de unicidade email
collection.create_index("email_Usuario", unique=True)
