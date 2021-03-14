import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

// const Tab1: React.FC = () => {
//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar>
//           <IonTitle>Tab 1</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent fullscreen>
//         <IonHeader collapse="condense">
//           <IonToolbar>
//             <IonTitle size="large">Tab 1</IonTitle>
//           </IonToolbar>
//         </IonHeader>
//         <ExploreContainer name="Tab 1 page" />
//       </IonContent>
//     </IonPage>
//   );
// };

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {useState} from "react";
import {Photo} from "../hooks/usePhotoGallery";

const Tab1: React.FC = () => {
    const [pointer, setPointer] = useState<string>('What');
    const [scanned, setScanned] = useState<string>('data test');
    const openScanner = async () => {
        setScanned('waiting');
        const data = await BarcodeScanner.scan().then((data)=>{
            setPointer('promise done');
            setScanned(data.text);
        });
        // setScanned(data.text);
        // console.log(`Barcode data: ${data.text}`);
    };
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tab 1</IonTitle>
                </IonToolbar>

            </IonHeader>
            <IonContent>
                Barcode
                <br/>
                {pointer}
                <br/>
                {scanned}
                <br/>
                <IonButton onClick={openScanner}>Scan barcode</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
