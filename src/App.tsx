import React, {useEffect, useState} from 'react'
import Form from './components/Form';
import List from './components/List';
import Sub from './definitions/typeSub'

const INITIAL_STATE = [
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Dapelu hace de moderador a veces'
  },
  {
    nick: 'FranzN',
    subMonths: 7,
    avatar: 'https://i.pravatar.cc/150?u=franz',
  }
];
interface AppState {
  subs: Array<Sub>
}

const App = () => {
  const [subs, setSubs] = useState<AppState['subs']>([])

  const newSub = (newSubs : Sub) : void => {
    setSubs(subs => [...subs, newSubs])
  };

  useEffect(()=> {
    setSubs(INITIAL_STATE);
  }, []);
  return (
    <div className='App'>
      <h1>Midu Dev</h1>
      <List subs = {subs}/>
      <Form newSub={newSub} />
    </div>
  )
}

export default App