
import Card from './components/Card';
import NavigationBar from './components/NavigationBar';


function App() {
  return (
    <main className=''>
          <NavigationBar/>
          <section className='flex h-96 w-full' >
            <div className="  bg-[url('/assets/fundo.jpeg')] h-full w-full bg-cover bg-center">
              <div className='flex justify-between flex-wrap'>
              <p className='mt-20 p-10 text-4xl font-bold'>
                Torne sua empresa ainda mais relevante com a nossa ajuda.
              </p>
              <img className= "mr-40 mt-10"src="/assets/phonewave.png" alt="" />
              </div>
            </div>
          </section>
          <section>
            <div className='flex justify-evenly mt-40 mb-20'>
            <div>
              <Card image='/assets/mark.jpg' title='Marquinho zuk' text='Cara experiente na criaçao de zipzapson'/>
            </div>
            <div>
              <Card image='/assets/mark.jpg' title='Marquinho zuk' text='Cara experiente na criaçao de zipzapson'/>
            </div>
            <div>
              <Card image='/assets/mark.jpg' title='Marquinho zuk' text='Cara experiente na criaçao de zipzapson'/>
            </div>
            </div>
          </section>
    </main>
  );
}

export default App;
