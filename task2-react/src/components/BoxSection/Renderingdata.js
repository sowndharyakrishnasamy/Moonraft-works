import React, { Component} from 'react';

import Box from './Box/Box';
class Renderingdata extends Component {
    state ={
        details:[
            {
                title: "IDW_TD_TDL_SAM_SOC",
                sourceSystem: "Ericson",
                targetSystem: "Hive_Hadoop",
                pipelineno: "NA248C83C",
                date:"5/21/17",
                type: "Type 1",
                time:"09:21",
                owner: "Robert Stone",
                bar:"<p class='bar-class'></p>"
            },
            {
                title: "IDW_TD_TDL_SAM_SOC",
                sourceSystem: "Ericson",
                targetSystem: "Hive_Hadoop",
                pipelineno: "NA248C83C",
                date:"5/21/17",
                type: "Type 1",
                time:"09:21",
                owner: "Lauren Mie",
                bar:"<p class='bar-class'></p>"
            },{
                title: "IDW_TD_TDL_SAM_SOC",
                sourceSystem: "Ericson",
                targetSystem: "Hive_Hadoop",
                pipelineno: "NA248C83C",
                date:"5/21/17",
                type: "Type 1",
                time:"09:21",
                owner: "Scott Davidson",
                bar:"<p class='bar-red-class'></p>"
            }
            ,{
                title: "IDW_TD_TDL_SAM_SOC",
                sourceSystem: "Ericson",
                targetSystem: "Hive_Hadoop",
                pipelineno: "NA248C83C",
                date:"5/21/17",
                type: "Type 1",
                time:"09:21",
                owner: "Cheryl Carr",
                bar:"<p class='bar-class'></p>"
            }
            ,{
                title: "IDW_TD_TDL_SAM_SOC",
                sourceSystem: "Ericson",
                targetSystem: "Hive_Hadoop",
                pipelineno: "NA248C83C",
                date:"5/21/17",
                type: "Type 1",
                time:"09:21",
                owner: "Randy Vasquez",
                bar:"<p class='bar-red-class'></p>"
            }
            ,{
                title: "IDW_TD_TDL_SAM_SOC",
                sourceSystem: "Ericson",
                targetSystem: "Hive_Hadoop",
                pipelineno: "NA248C83C",
                date:"5/21/17",
                type: "Type 1",
                time:"08:21",
                owner: "Janice Williamson",
                bar:"<p class='bar-class'></p>"
            }
            ,{
                title: "IDW_TD_TDL_SAM_SOC",
                sourceSystem: "Ericson",
                targetSystem: "Hive_Hadoop",
                pipelineno: "NA248C83C",
                date:"5/21/17",
                type: "Type 1",
                time:"09:21",
                owner: "Brenda Palmer",
                bar:"<p class='bar-class'></p>"
            }
            ,{
                title: "IDW_TD_TDL_SAM_SOC",
                sourceSystem: "Ericson",
                targetSystem: "Hive_Hadoop",
                pipelineno: "NA248C83C",
                date:"5/21/17",
                type: "Type 1",
                time:"09:21",
                owner: "Virginia Watkins",
                bar:"<p class='bar-class'></p>"
            }
        ]
    }
   
render(){
    let data=null;
    data=(
    this.state.details.map(detail =>{
        return <Box 
        title={detail.title}
        sourceSystem={detail.sourceSystem}
        targetSystem={detail.targetSystem}
        pipelineno={detail.pipelineno}
        date={detail.date}
        type={detail.type}
        time={detail.time}
        owner={detail.owner}
        bar={detail.bar}/>
    })
);
return(data);
}
}

export default Renderingdata;