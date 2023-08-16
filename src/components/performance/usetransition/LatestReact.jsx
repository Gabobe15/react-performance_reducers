import {useState, useTransition, lazy, Suspense} from 'react'

const SlowComponent = lazy(() => import('./SlowComponent'))

const LatestReact = () => {
    const [text, setText] = useState('');
    const [items, setItems] = useState([])
    const [isPending, startTransition] = useTransition()
    const [show, setShow] = useState(false)

    const handleChange = (e) => {
      setText(e.target.value);

      // slow down CPU

    //   use transiton enable these operation to take place in the background 
      startTransition(() => {
        const newItems = Array.from({ length: 5000 }, (_, index) => {
          return (
            <div key={index}>
              <img src="/vite.svg" alt="" />
            </div>
          );
        });
        setItems(newItems);
      });
    }

  return (
    <section>
      <form>
        <input
          type="text"
          value={text}
          className="form-input"
          onChange={handleChange}
        />
      </form>
      <h4>Items Below</h4>
      {isPending ? (
        <h4>Loading...</h4>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            marginTop: "2rem",
          }}
        >
          {items}
        </div>
      )}
      <button className="btn" onClick={() => setShow(!show)}>
        toggle
      </button> 
       {show && 
         <Suspense fallback={<div>Loading...</div>}>
             <SlowComponent />
         </Suspense>
       
       }
    </section>
  );
}

export default LatestReact