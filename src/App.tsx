
import { CssVarsProvider } from '@mui/joy/styles';
import Layout from 'components/Layout';

import './App.css';
import theme from 'theme';
import { DragDropContextProvider } from 'context/DragDropContext';

const App = () => {
  return (
    <CssVarsProvider
      defaultMode='dark'
    >
      <DragDropContextProvider>
        <Layout.Root>
          <Layout.SidePane>SidePane</Layout.SidePane>
          <Layout.Main>Main</Layout.Main>
        </Layout.Root>
      </DragDropContextProvider>
    </CssVarsProvider>
  );
};

export default App;
