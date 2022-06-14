import React from 'react'
import jsonData from "../../assets/uiJson.json";
const JsonToUi = () => {
    const data = [jsonData];
    let workflowStructure =  data.map(record => {
        console.log(">>record",record.workflowStructure)
        let workflowStructure = record.workflowStructure;
        return (
        <div key={workflowStructure.currentStage} id={workflowStructure.case_request_id} className={workflowStructure.workflowName}>
            <h2>{workflowStructure.workflowName}</h2>
            {workflowStructure.stages.map(stagesData => {
                console.log(">>stages",stagesData)
                let stages = stagesData;
                return (
                <div>
                    <h2>{stages}</h2>
                    
                </div>);
            })}
        </div>);
    });
    return (
        <>
        {workflowStructure}
        </>
    )
}
export default JsonToUi;