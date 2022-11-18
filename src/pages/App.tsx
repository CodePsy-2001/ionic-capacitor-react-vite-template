import { useState } from "react";
import reactLogo from "./assets/react.svg";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  setupIonicReact,
  IonButton,
  useIonAlert,
} from "@ionic/react";
import "./App.scss";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

function App() {
  const [count, setCount] = useState(0);
  const [presentAlert] = useIonAlert();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Here is Title</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h1><code>ionic-capacitor-react-vite</code> Template</h1>
        <IonButton
          onClick={() =>
            presentAlert({
              header: "Alert",
              subHeader: "Important message",
              message: "This is an alert!",
              buttons: ["OK"],
            })
          }
        >
          알림창 띄우기
        </IonButton>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React + Capacitor + Ionic</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            카운터: {count}
          </button>
        </div>
        <p className="read-the-docs">
          vite나 react 로고를 누르면 해당 사이트로 이동합니다
        </p>
      </IonContent>
    </IonPage>
  );
}

export default App;
