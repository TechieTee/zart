

import { GET_SUBJECT_ID } from "./Storage";

export const checkValidity = (value, rules) =>{
    let isValid = true;
    let errorMsg = null;
   
    
    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
        if(!isValid){
            errorMsg="This field is required";
        }
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
        if(!isValid){
            errorMsg="Minimum length is "+rules.minLength;
        }
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
        if(!isValid){
            errorMsg="Minimum length is "+rules.maxLength;
        }
    }

    if(rules.email){
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        
        isValid = pattern.test(value) && isValid;
        if(!isValid){
            errorMsg="Email is invalid";
        }
    }

    return [errorMsg, isValid];
}

export const LOGGER = (key, value) => {
    console.log(key.toUpperCase(), value);
};


export const formatDate = (date) => {



    const newDate = new Date(date);
        console.log(`Date:`, newDate);
        let month = String(newDate.getMonth()+1).padStart(2, '0');
        let day = String(newDate.getDate()).padStart(2, '0');
        let year = newDate.getFullYear();
        let output = year+'-'+month+'-'+day;
        return output;
}


export const formatDate2 = (date) => {



    const newDate = new Date(date);
        console.log(`Date:`, newDate);
        //let month = String(newDate.getMonth()+1).padStart(2, '0');
        let monthName = newDate.toLocaleString('default', { month: 'long' });;
        let day = String(newDate.getDate()).padStart(2, '0');
        let dayName = newDate.toLocaleString('en-us', {weekday:'long'});
        let year = newDate.getFullYear();
        let output = dayName+', '+day+' '+monthName+' '+year;
        return output;
}

export const getCurrentDate = () => {



    const newDate = new Date();
        console.log(`Date:`, newDate);
        let month = String(newDate.getMonth()+1).padStart(2, '0');
        let day = String(newDate.getDate()).padStart(2, '0');
        let year = newDate.getFullYear();
        let output = year+'-'+month+'-'+day;
        return output;
}

export const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)



export const formatCurrency =(num)=> {
    var p = num.toFixed(2).split(".");
    var chars = p[0].split("").reverse();
    var newstr = '';
    var count = 0;
    for (let x in chars) {
        count++;
        if(count%3 === 1 && count !== 1) {
            newstr = chars[x] + ',' + newstr;
        } else {
            newstr = chars[x] + newstr;
        }
    }
    return newstr;
    //return newstr + "." + p[1];
}

export function paginator( arr, perPage )
{
	if ( perPage < 1 || !arr ) return () => [];
	
	return function( page ) {
		const basePage = (page - 1) * perPage;
	
		return page < 0 || basePage >= arr.length 
			? [] 
			: arr.slice( basePage,  basePage + perPage );
	};
}

export const generatePriceRange =() =>{
    for (let index = 0; index < 15; index++) {
        return index++
        
    }
}

export const isEmpty = (obj)=> {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export const extractSelectValue = (keyValue) => {
    keyValue.forEach(element => {
        return `${element} : values.${element}.value`
    });
}


export const findByTestAttr = (component, attr) => {
    const wrapper =  component.find(`[data-test='${attr}']`);
    return wrapper;
}

export const updateArrayOfObjects = (stateObject, keyIndex, attributes) => {
    return [stateObject.slice(0,keyIndex),
        Object.assign({}, stateObject[keyIndex], attributes) ]
    
}


export const extractEnpointURL = (url) => {
    var parts = url.split('/');
    var newUrl = parts.splice(3).join('/')
    return '/'+newUrl;
}
export const filterHateoasLinkArray = (linkArray, relKey)=>{
    const arr = linkArray.filter(x => x.rel === relKey);
    return arr[0].href;
}

export const compareObjectKeys = (obj1, tempObj) => {
    //values in tempObj replaces similar key values in obj1
    // for (const [key, val] of Object.entries(tempObj)) {
    //     if (key in obj1) {
    //       // get the previous value
    //       const oldVal = obj1[key]
    //       // update updatedDoc
    //       obj1[key] = val
          
    //       //store the change or do whatever
    //     //   changes.push({
    //     //     [key]: {
    //     //       new: val,
    //     //       old: oldVal
    //     //     }
    //     //   })
    //     }
    //   }

    //   return obj1;
}

export const getStatesByID = (id) => {

}
export const getLgaByID = (stateID, id) => {
    
}
export const returnValueByID = (data, fieldValue, id) => {
    const newArray = data.filter(x => x[fieldValue] === id);
    return newArray;
}
export function shallowEqual(objA, objB) {
    if (objA === objB) {
      return true;
    }
  
    if (typeof objA !== 'object' || objA === null ||
        typeof objB !== 'object' || objB === null) {
      return false;
    }
  
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
  
    if (keysA.length !== keysB.length) {
      return false;
    }
  
    // Test for A's keys different from B.
    var bHasOwnProperty = hasOwnProperty.bind(objB);
    for (var i = 0; i < keysA.length; i++) {
      if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
        return false;
      }
    }
  
    return true;
  }
  
export function shallowCompare(instance, nextProps, nextState) {
    return (
      !shallowEqual(instance.props, nextProps) ||
      !shallowEqual(instance.state, nextState)
    );
  }

export function filterValue(obj, key, value) {
    return obj.find(function(v){ return v[key] === value});
  }

  export function findindexObj(obj, key, value) {
    return obj.findIndex(function(v){ return v[key] === value});
  }


  

  export const IS_EXIST_SUBJECT_ID = () => {
      if (GET_SUBJECT_ID() === null || GET_SUBJECT_ID() === "")
      return true
  }


  export function appTypeParamChecker(urlParam){
      switch (urlParam) {
          case "enrollment":
              return {title:"Enrollment", slug:'enrollment'}
          case "admin-console":
              return {title:"Admin Console", slug:"admin-console"}
          case "incident-report":
              return {title:"Incident Report", slug:"incident-report"}
          case "background-check":
              return {title:"Background Check", slug:"background-check"}
          case "journals":
              return {title:"Journals", slug:"journals"}  
          default:
              return false;
      }
  }



 