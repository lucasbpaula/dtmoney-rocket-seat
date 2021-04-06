import { createServer, Model } from 'miragejs';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import NewTransactionModal from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';

createServer({
    models: {
        transaction: Model,
    },

    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: 'Freela de WebSite',
                    type: 'deposit',
                    category: 'Dev',
                    amount: 5000,
                    createdAt: new Date('2021-01-11'),
                },
                {
                    id: 0,
                    title: 'Cafezin',
                    type: 'withdraw',
                    category: 'Food',
                    amount: 10,
                    createdAt: new Date('2021-02-14'),
                },
            ],
        });
    },

    routes() {
        this.namespace = 'api';

        this.get('/transactions', () => {
            return this.schema.all('transaction');
        });

        this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody);

            return schema.create('transaction', data);
        });
    },
});

Modal.setAppElement('#root'); // acessibilidade do react-modal

export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
        false,
    );

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return (
        <>
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

            <Dashboard />

            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
            />

            <GlobalStyle />
        </>
    );
}
