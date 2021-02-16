import { useEffect, useState } from "react";
import { getListaNavicelle } from './api';


function Navicelle() {

    const [spaceData, setSpaceData] = useState<any>();

    useEffect(() => {
        async function loadData(){
          //const resp = await fetch('https://api.spacexdata.com/v3/capsules');
          const resp = await getListaNavicelle();
          const data = await resp.json()
          if (data){
            setSpaceData(data);
          }
        }
        loadData()
    },[])
    
    return(
        <div>
            <h2>Navicelle <em>(capsule)</em></h2>
            
            {spaceData?.map((item: any) => 
                <div key={item.capsule_serial}><strong>{item.capsule_serial}:</strong> {item.details}
                    <br />
                    <p>Missioni:&nbsp;<br />
                        {item.missions.map((m: any) =>
                            <span>&nbsp;&nbsp; - name: {m.name} (volo {m.flight})<br/></span>
                        )}
                    </p>
                </div>
            )}
        </div>
    )
}
export default Navicelle; 