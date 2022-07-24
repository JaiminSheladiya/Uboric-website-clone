import React from 'react'
import { RangeSlider , Select, Checkbox , RangeSliderTrack , RangeSliderFilledTrack , RangeSliderThumb, Heading } from "@chakra-ui/react";

export default function ProductFilter({setFilter , filter}) {
  return (
    <div>
        {/* Price slider */}

<Heading as='h2' size='md' textAlign='left'>Filter by Price</Heading>

{(filter && (<h1>Price : {filter[0]} - {filter[1]}</h1>) )}
<RangeSlider 
defaultValue={[0, 1300]} min={0} max={1300} step={60}
onChangeEnd={(val) => setFilter(val)}
>
  <RangeSliderTrack bg='red.100'>
    <RangeSliderFilledTrack bg='tomato' />
  </RangeSliderTrack>
  <RangeSliderThumb boxSize={6} index={0} />
  <RangeSliderThumb boxSize={6} index={1} />
  
</RangeSlider>

<Select variant='flushed' placeholder='Select By color'>
    <option value="">Green</option>
    <option value="">Yellow</option>
    <option value="">Blue</option>
    <option value="">Red</option>
    <option value="">Pink</option>
</Select>

</div>

  )
}
