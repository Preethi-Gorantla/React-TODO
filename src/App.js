import { Main, Card, Heading} from './styles';
import {useState } from 'react';
import sun from '../src/components/images/sun.svg';
import moon from '../src/components/images/moon.svg';
import { AddItem } from './components/AddItem/AddItem';

const App = () => {
  const[theme,setTheme] = useState(true);

  const handleTheme = () => {
    setTheme(!theme);
  }

  return (
        <Main  isTheme={theme}>
          <Card  isTheme={theme}>
              <Heading> To Do  </Heading>
              <img src={theme?sun:moon} alt="" onClick={handleTheme}/>
          </Card>
          <AddItem isTheme={theme}/>
        </Main>
  );
}

export default App;
