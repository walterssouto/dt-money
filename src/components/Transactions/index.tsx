import { Header } from "../Header";
import { Summary } from "../Summary";
import { SearchForm } from "./SearchForm";
import { PriceHGighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return(
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />

                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td><PriceHGighlight variant='income' >R$12.000,00</PriceHGighlight></td>
                            <td>Vendas</td>
                            <td>13/04/2022</td>
                        </tr>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td><PriceHGighlight variant='outcome'>R$12.000,00</PriceHGighlight></td>
                            <td>Vendas</td>
                            <td>13/04/2022</td>
                        </tr><tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td><PriceHGighlight variant='income' >R$12.000,00</PriceHGighlight></td>
                            <td>Vendas</td>
                            <td>13/04/2022</td>
                        </tr><tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td><PriceHGighlight variant='outcome'>R$12.000,00</PriceHGighlight></td>
                            <td>Vendas</td>
                            <td>13/04/2022</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}