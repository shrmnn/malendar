import React from "react";

const Day = (props) => {

    const handleClicked = () => {
        console.log('day is clicked!')
    }

    return (
        <div className='day' style={
            {background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, $base-color 105%), url("${props.ani ? props.ani.image : ''}") center center no-repeat`}
        }
             onClick={handleClicked}>
            <div className='dayNum'>{props.id}</div>
            <div>
                <div className='dayTitle'>
                    {props.ani ? props.ani.title : '男子高校生で売れっ子ライトノベル作家をしているけれど、年下のクラスメイトで声優の女の子に首を絞められている! The Animation 2nd Season'}
                </div>
                <div className='daySubtitle'>
                    {props.ani ? props.ani.studio[0]['name'] || 'хз' : 'Studio Kremlin'}
                </div>
            </div>

        </div>
    );
};

export default Day;