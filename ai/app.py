from flask import Flask, request, jsonify
import spacy

app = Flask(__name__)
nlp = spacy.load("pt_core_news_sm")

@app.route("/ia", methods=["POST"])
def ia():
    data = request.get_json()
    mensagem = data.get("mensagem", "")
    doc = nlp(mensagem)
    # exemplo simples: retorna entidades reconhecidas
    return jsonify({
        "resposta": "Você disse: " + mensagem,
        "entidades": [ent.text for ent in doc.ents]
    })

if __name__ == "__main__":
    app.run(port=5050)

