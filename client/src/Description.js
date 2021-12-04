import React, { useState, useEffect } from 'react';
import ResponsiveAppBar from './components/NavigationBar/ResponsiveAppBar';
import './Description.css';
const Description = () => {
  return (
    <div>
        <ResponsiveAppBar />
        <div className = "petition_container">
            <div className = "petition_title" >
            Petiton Title 1
            </div>
            <div className = "userName">
            UserName
            </div>
            <div className = "petition_description">
            Lorem ipsum dolor sit amet, eam tale doctus iracundia id. In est altera lobortis explicari. Sale tamquam invidunt sed ad. Aliquid ullamcorper delicatissimi ne cum, eu cum justo scripta interesset, sea elit nonumy aperiam et. Ut rebum doctus deleniti usu, ei vis omnium integre maiorum. At sumo intellegam mea. Assum sanctus fierent ad eos, ei minimum consequat eum. Eum agam honestatis et. Ne option prodesset quo, duo ex vidit complectitur. Pro epicuri appetere ne. Et modo sonet feugait vel. Et timeam utroque sed, voluptatum conclusionemque sit ad. Has tota iudico deterruisset at.
            </div>
            <div className = "petition_create_date">
            Create Date:
            </div>
            <div className = "petition_Deadline">
            Deadline:
            </div>
            <div className = "petition_Votecount">
            Vote Count:
            </div>
            <div className = "petition_Status">
            Status:
            </div>
        </div>
    </div>
  );
};

export default Description;
