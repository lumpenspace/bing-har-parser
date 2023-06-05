
import { CssVarsProvider } from '@mui/joy/styles';
import Layout from 'components/Layout';

import './App.css';
import theme from 'theme';
import { DragDropProvider } from 'context/DragDropContext';
import ConversationListProvider from 'context/ConversationsContext';

const App = () => {
  return (
    <CssVarsProvider
      defaultMode='dark'
    >
      <ConversationListProvider>
        <DragDropProvider>
          <Layout.Root>
            <Layout.SidePane>SidePane</Layout.SidePane>
            <Layout.Main>Main</Layout.Main>
          </Layout.Root>
        </DragDropProvider>
      </ConversationListProvider>
    </CssVarsProvider>
  );
};

export default App;
