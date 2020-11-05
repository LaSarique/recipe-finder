import React, { useState, useEffect } from 'react';

const FormChecklist = ({dietOptions, intolerance}) => {
  const [dropDown, setDropDown] = useState(null);
  const [isChecked,setisChecked] = useState(
    {Dairy: false, Egg: false, "Tree Nut": false, Peanut: false, Shellfish: false}
  );
  const selectHandler = e => {
    e.preventDefault(); 
    setDropDown(e.target.value)
  };

  const intoleranceList = ['Dairy', 'Egg', 'Tree Nut', 'Peanut', 'Shellfish'];
  const checkboxHandler = e => {
    //e.preventDefault();
    let temp = isChecked;
    temp[e.target.name] = !temp[e.target.name]; 
    setisChecked({...temp});
  }
useEffect(()=> {
  intolerance(isChecked);
  dietOptions(dropDown);
},[isChecked, dropDown]);
    return (
<>
<select key='dropdown' value= {dropDown} onChange={selectHandler}>
  <option key='1' value='' >No dietary preference</option>
  <option key='2' value= "Vegetarian">Vegetarian</option>
  <option key='3' value= "Vegan">Vegan</option>
  <option key='4' value= "Gluten Free">Gluten Free</option>
  <option key='5' value= "Ketogenic">High Protein</option>
</select>
<br/>
{intoleranceList.map(i => 
( <span key={"span"+i}>
  <input
  type="checkbox"
  name= {i}
  key={i}
  checked={isChecked[i]}
  onChange={checkboxHandler}
  />

  <label key={i + 1}>{i}</label>
  </span>)
)}
</>      
    );
}

export default FormChecklist;
