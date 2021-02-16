import { useEffect, useState } from "react";
import { getListaNavicelle } from './api';
export interface Mission {
    name: string;
    flight: number;
}
export interface Capsule {
    capsule_serial: string;
    capsule_id: string;
    status: string;
    original_launch?: Date;
    original_launch_unix?: number;
    missions: Mission[];
    landings: number;
    type: string;
    details: string;
    reuse_count: number;
}

function Navicelle() {

    const [spaceData, setSpaceData] = useState<Capsule[]>();

    useEffect(() => {
        async function loadData(){
          //const resp = await fetch('https://api.spacexdata.com/v3/capsules');
          const resp = await getListaNavicelle();
          const data = await resp.json();
          if (data){
            setSpaceData(data);
          }
        }
        loadData()
    },[])
    
    return(
        <div className="container">
            <h2>Navicelle <em>(capsule)</em></h2>
            <br />
            <p>QUi ce piazzo un bottone che schiaccio e farà qualcosa...</p>
            
            {spaceData?.map((item: Capsule) => 
                <div key={item.capsule_serial}><strong>{item.capsule_serial}:</strong> {item.details}
                    <br /><span key={item.capsule_serial}> Data lancio: {item.original_launch ? item.original_launch : 'Non è mai partito!!!'}
                    <br />LANDING: {item.landings}</span>
                    <br />
                    <p>Missioni:&nbsp;<br />
                        {item.missions.map((m: Mission) =>
                            <span>&nbsp;&nbsp; - name: {m.name} (volo {m.flight})<br/></span>
                        )}
                    </p>
                </div>
            )}
        </div>
    )
}
export default Navicelle; 