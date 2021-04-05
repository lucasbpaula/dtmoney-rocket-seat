import { createServer } from 'miragejs';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

createServer({
    routes() {
        this.namespace = 'api';

        this.get('/transactions', () => {
            return [
                {
                    id: 0,
                    title: 'Joguin',
                    category: 'Games',
                    createdAt: new Date(),
                    type: 'withdraw',
                },
                {
                    id: 1,
                    title: 'Cafezin',
                    category: 'Comida',
                    createdAt: new Date(),
                    type: 'withdraw',
                },
                {
                    id: 2,
                    title: 'Criacao Site',
                    category: 'Desenvolvimento',
                    createdAt: new Date(),
                    type: 'deposit',
                },
            ];
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

            <Modal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
            >
                <h2>Cadastrar transação</h2>
            </Modal>

            <GlobalStyle />
        </>
    );
}
