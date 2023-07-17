import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import samosa_png from './assets/samosa.png'


// function App() {
//   const [count, setCount] = useState(0)
//
//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

const App = () => {
    {/*total clicks*/}
    const [count, setCount] = useState(0);
    {/*current number of samosas per click*/}
    const [multiplier, setMultiplier] = useState(1);
    const updateCount = () => setCount(count + multiplier);

    const buyDoubleStuffed = () => {
        if (count >= 10) {
            setMultiplier(multiplier * 2);
            setCount(count - 10);
        }
    }

    const buyPartyPack = () => {
        if (count >= 100) {
            setMultiplier(multiplier * 5);
            setCount(count - 100);
        }
    }

    const buyFullFeast = () => {
        if (count >= 1000) {
            setMultiplier(multiplier * 10);
            setCount(count - 1000);
        }
    }

    return (
        <div className={"App"}>
            <div className={"header"}>
                <h1>Samosa Selector</h1>
                <h2>Count: {count}</h2>
                {/*by default, src loads externally using webkit, need to import it to load it locally*/}
                <img className={"samosa"} src={samosa_png} alt={"samosa.png"} onClick={updateCount} />
            </div>

            <div className={"container"}>
                <div className={"upgrade"}>
                    <h3>Double Stuffed👯</h3>
                    <p>2x per click</p>
                    <button onClick={buyDoubleStuffed}>10 samosas</button>
                </div>

                <div className={"upgrade"}>
                    <h3>Party Pack 🎉</h3>
                    <p>5x per click</p>
                    <button onClick={buyPartyPack}>100 samosas</button>
                </div>

                <div className={"upgrade"}>
                    <h3>Full Feast 👩🏽‍🍳</h3>
                    <p>10x per click</p>
                    <button onClick={buyFullFeast}>1000 samosas</button>
                </div>
            </div>

        </div>
    )
}

export default App
