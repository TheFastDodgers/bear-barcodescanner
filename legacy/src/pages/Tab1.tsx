import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

import './Tab1.css';

import {useState} from "react";

import BarcodeScannerComponent from "react-webcam-barcode-scanner";

const Tab1: React.FC = () => {

    const [ data, setData ] = useState<any>('Not Found');

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tab 1</IonTitle>
                </IonToolbar>

            </IonHeader>
            <IonContent>

                <BarcodeScannerComponent
                    width={500}
                    height={500}
                    onUpdate={(err, result: any) => {
                        if (result) setData(result.text)
                        else setData('Not Found')
                    }}
                />
                <p>{data}</p>

            </IonContent>
        </IonPage>
    );
};

export default Tab1;
