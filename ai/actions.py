from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
import psycopg2
import json

def get_conn():
    return psycopg2.connect(
        dbname="na_chapa",
        user="postgres",
        password="hirion",
        host="localhost"
    )

class ActionMostrarCardapio(Action):
    def name(self) -> Text:
        return "action_mostrar_cardapio"

    def run(self, dispatcher, tracker, domain):
        try:
            conn = get_conn()
            cur = conn.cursor()
            cur.execute('SELECT nome, preco FROM "Item" WHERE ativo = TRUE')
            rows = cur.fetchall()
            texto = "\n".join([f"{nome}: R$ {preco:.2f}" for nome, preco in rows])
            dispatcher.utter_message(text=f"Cardápio atual:\n{texto}")
        except Exception as e:
            dispatcher.utter_message(text=f"Erro ao consultar cardápio: {str(e)}")
        return []

class ActionRegistrarPedido(Action):
    def name(self) -> Text:
        return "action_registrar_pedido"

    def run(self, dispatcher, tracker, domain):
        item = tracker.get_slot("item")
        quantidade = tracker.get_slot("quantidade") or 1
        cliente = tracker.sender_id
        try:
            conn = get_conn()
            cur = conn.cursor()
            cur.execute('SELECT nome, preco, estoque FROM "Item" WHERE lower(nome) = %s AND ativo = TRUE', (item.lower(),))
            row = cur.fetchone()
            if row and row[2] >= quantidade:
                nome, preco, estoque = row
                itens = json.dumps([{"nome": nome, "quantidade": quantidade}])
                cur.execute(
                    '''INSERT INTO "Pedido" (cliente, canal, status, itens, pagamento, observacoes)
                       VALUES (%s, %s, %s, %s, %s, %s)''',
                    (cliente, 'whatsapp', 'preparacao', itens, '', '')
                )
                conn.commit()
                total = preco * quantidade
                dispatcher.utter_message(text=f"Pedido registrado: {nome} x{quantidade} — Total: R$ {total:.2f}")
            else:
                dispatcher.utter_message(response="utter_pedido_indisponivel")
        except Exception as e:
            dispatcher.utter_message(text=f"Erro ao registrar pedido: {str(e)}")
        return []

class ActionVerificarPagamento(Action):
    def name(self) -> Text:
        return "action_verificar_pagamento"

    def run(self, dispatcher, tracker, domain):
        pagamento = tracker.get_slot("pagamento")
        if pagamento and pagamento.lower() == "pix":
            dispatcher.utter_message(text="Por favor, envie o comprovante do PIX para liberar seu pedido.")
        elif pagamento:
            dispatcher.utter_message(text="Pagamento registrado!")
        else:
            dispatcher.utter_message(text="Qual a forma de pagamento?")
        return []

class ActionImprimirPedido(Action):
    def name(self) -> Text:
        return "action_imprimir_pedido"

    def run(self, dispatcher, tracker, domain):
        # Aqui pode acionar o backend (via API) para disparar a impressão
        dispatcher.utter_message(text="Imprimindo pedido! (Funcionalidade em desenvolvimento)")
        return []
