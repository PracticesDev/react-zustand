import { useShallow } from 'zustand/shallow';
import { WhiteCard } from '../../components';
import { useBearStore } from '../../stores';

export const BearPage = () => {

  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">

        <BlackBers />
        <PolarBers />
        <PandasBers />

        <BearDisplay />
      </div>
    </>
  );
};

export const BlackBers = () => {

  const backBears = useBearStore(state => state.backBears);
  const incrementBackBears = useBearStore(state => state.incrementBackBears);

  return (
    <>
      <WhiteCard centered>
        <h2>Osos Negros</h2>

        <div className="flex flex-col md:flex-row">
          <button onClick={() => incrementBackBears(+1)} > +1</button>
          <span className="text-3xl mx-2 lg:mx-10"> {backBears} </span>
          <button onClick={() => incrementBackBears(-1)}> -1</button>
        </div>

      </WhiteCard>
    </>
  )
}
export const PolarBers = () => {

  const polarBears = useBearStore(state => state.polarBears);
  const incrementPolarBears = useBearStore(state => state.incrementPolarBears);
  return (
    <>
      <WhiteCard centered>
        <h2>Osos Polares</h2>

        <div className="flex flex-col md:flex-row">
          <button onClick={() => incrementPolarBears(+1)}> +1</button>
          <span className="text-3xl mx-2 lg:mx-10"> {polarBears} </span>
          <button onClick={() => incrementPolarBears(-1)}> -1</button>

        </div>

      </WhiteCard >
    </>
  )
}
export const PandasBers = () => {

  const pandaBears = useBearStore(state => state.pandaBears);
  const incrementPandaBears = useBearStore(state => state.incrementPandaBears);
  return (
    <>
      <WhiteCard centered>
        <h2>Osos Pandas</h2>

        <div className="flex flex-col md:flex-row">
          <button onClick={() => incrementPandaBears(+ 1)} > +1</button>
          <span className="text-3xl mx-2 lg:mx-10"> {pandaBears} </span>
          <button onClick={() => incrementPandaBears(- 1)} >-1</button>
        </div>

      </WhiteCard>

    </>
  )
}

export const BearDisplay = () => {

  const bears = useBearStore(useShallow(state => state.bears));
  // const bears = useBearStore( state => state.bears);
  const doNothing = useBearStore(state => state.doNothing);
  const addBears = useBearStore(state => state.addBears);
  const clearBears = useBearStore(state => state.clearBears);


  return (
    <>
      <WhiteCard>
        <h1>Osos</h1>
        <button onClick={doNothing} >Do Nothing</button>
        <button className="mt-2" onClick={addBears} >Add Oso</button>
        <button className="mt-2" onClick={clearBears} >Borrar Oso</button>
        <pre>

          {
            JSON.stringify(bears, null, 2)
          }

        </pre>

      </WhiteCard>

    </>
  )
}
