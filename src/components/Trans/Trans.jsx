import css from './Trans.module.css';
import datatrans from './Transactions.json';

export const Trans = () => {
    return (
        <div class={css.transConatiner}>
            <table class={css.transTable}>
                <thead class={css.transHeader}>
                    <tr>
                        <th>Type</th>
                        <th> fAmount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody class={css.transBody}>
                    <tr class={css.rowOdd}>
                        <td>{datatrans[0].type}</td>
                        <td>{datatrans[0].amount}</td>
                        <td>{datatrans[0].currency}</td>
                    </tr>
                    <tr class={css.rowEven}>
                        <td>{datatrans[1].type}</td>
                        <td>{datatrans[1].amount}</td>
                        <td>{datatrans[1].currency}</td>
                    </tr>
                    <tr class={css.rowOdd}>
                        <td>{datatrans[2].type}</td>
                        <td>{datatrans[2].amount}</td>
                        <td>{datatrans[2].currency}</td>
                    </tr>
                    <tr class={css.rowEven}>
                        <td>{datatrans[3].type}</td>
                        <td>{datatrans[3].amount}</td>
                        <td>{datatrans[3].currency}</td>
                    </tr>
                    <tr class={css.rowOdd}>
                        <td>{datatrans[4].type}</td>
                        <td>{datatrans[4].amount}</td>
                        <td>{datatrans[4].currency}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
}