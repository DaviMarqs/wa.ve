import CountBtn from '@/components/CountBtn';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

function App() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-y-4">
          <Badge className='bg-green-600 hover:bg-green-700' >wa.ve</Badge>
          <Input className='bg-slate-500 ring-2 ring-gray-400 hover:bg-slate-700 ' />
        <CountBtn />
      </div>
    </main>
  );
}

export default App;
