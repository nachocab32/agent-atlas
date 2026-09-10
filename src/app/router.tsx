import { createBrowserRouter } from 'react-router'
import { CatalogoPage } from '@/pages/aceleradores/catalogo-page'
import { FichaPage } from '@/pages/aceleradores/ficha-page'
import { CencoflowPropuestaPage } from '@/pages/cencoflow/cencoflow-propuesta-page'
import { ChatPage } from '@/pages/chat/chat-page'
import { DocumentoPage } from '@/pages/guias/documento-page'
import { GuiasPage } from '@/pages/guias/guias-page'
import { PlataformaPage } from '@/pages/plataforma/plataforma-page'
import { AppLayout } from './app-layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <ChatPage /> },
      { path: 'aceleradores', element: <CatalogoPage /> },
      { path: 'aceleradores/:id', element: <FichaPage /> },
      { path: 'cencoflow', element: <CencoflowPropuestaPage /> },
      { path: 'guias', element: <GuiasPage /> },
      { path: 'guias/:documentoId/:paginaId?', element: <DocumentoPage /> },
      { path: 'plataforma', element: <PlataformaPage /> },
    ],
  },
])
