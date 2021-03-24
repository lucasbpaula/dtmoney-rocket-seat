import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable () {

    useEffect(() => {
        fetch('http://localhost:3000/api/transactions').then(response => response.json()).then(data=>console.log(`data`, data))
    }, [])

    return <Container>

        <table>
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Cafezinho</td>
                    <td className="withdraw">- R$ 2,00</td>
                    <td>Comida</td>
                    <td>03/02/2021</td>
                </tr>
                <tr>
                    <td>Desenvolvimento Web Site</td>
                    <td className="deposit">R$ 12.000,00</td>
                    <td>Desenvolvimento</td>
                    <td>23/05/2020</td>
                </tr>
                <tr>
                    <td>Academia</td>
                    <td className="withdraw">- R$ 120,00</td>
                    <td>Saude</td>
                    <td>23/05/2020</td>
                </tr>
            </tbody>
        </table>
    </Container>
}