import React from 'react'

export default function Unit({setUnit, unit, item}) {
  return (
    <div className='unit'>
        <select onChange={(e) => setUnit(e.target.value)} value={unit}>
            <option value={item.serving_unit}>{item.serving_unit}</option>
            <option value="gram">g</option>
            <option value="tbsp">tbsp</option>
            <option value="tsp">tsp</option>
            <option value="oz">oz</option>
            <option value="lb">lb</option>
            <option value="kg">kg</option>
            <option value="ml">ml</option>
            <option value="l">L</option>
            <option value="qt">qt</option>
            <option value="pt">pt</option>
            <option value="sl">sl</option>
            <option value="pc">pc</option>
            <option value="whl">whl</option>
            <option value="pkg">pkg</option>
            <option value="can">can</option>
            <option value="jar">jar</option>
        </select>
    </div>
  )
}
