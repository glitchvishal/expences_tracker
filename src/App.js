import './App.css';
import {useState} from 'react' ;
import Transaction from './component/Transaction';

export default function App() {
  const [text,setText] = useState('');
  const [amount,setAmount] = useState(0);
  const [items, setItems] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items,{id: Math.random(36).toString(),text,amount: parseFloat(amount)}]);
    setText('')
    setAmount(0)
  }
  

  const amounts = items.map(item => item.amount)

  const credit = amounts.filter(a => a > 0).reduce((acc,item) => (acc += item),0)
  const debit = amounts.filter(a => a < 0).reduce((acc,item) => (acc += item),0)
  const balance = (credit + debit)

  return (
    <>
      <h2 className='header'>
        Expence Tracker
      </h2>
      <div className="container">
      <div>
        <h4 className='balance'>Your Balance</h4>
        <h1 className='balance' >{ balance }</h1>
       </div>
       <div className="inc-exp-container">
            <div>
              <h4>Income</h4>
              <p className="money plus">credit= {credit}</p>
            </div>
            <div>
              <h4>Expense</h4>
              <p className="money minus">debit={debit}</p>
            </div>
          </div>
          <ul className="list">
               { items.map(item => (<Transaction key={item.id} text={item.text} amount={item.amount} />))}
            </ul>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                        >Amount <br />
                    (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>  
      </div>
    </>
  );
}