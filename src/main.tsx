import React from 'react'
import ReactDOM from 'react-dom/client'
import { IonReactRouter } from '@ionic/react-router';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router-dom';
import App from './pages/App'
import './index.css'


const publicRoutes = [
  {
    path: '/',
    component: App,
  }
]


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet >
          {publicRoutes.map(({ path, component: Component }) => <Route path={path} element={<Component />} />)}
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  </React.StrictMode>
)
