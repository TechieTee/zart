export default (rows,columnId,filterValue)=>{
    return rows.filter(row=>{      
           return    filterValue.test(row.values[columnId])
        })

  }