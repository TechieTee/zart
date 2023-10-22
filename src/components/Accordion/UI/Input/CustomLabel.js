import React,{ memo } from 'react';


const CustomLabel = memo(props => {
  return (
    <label style={{fontSize:'14px',fontWeight:'500',color:'#2c2c2c',marginBottom:0}} {...props}>
      {props.children}
    </label>
  );
}
)

export default CustomLabel;