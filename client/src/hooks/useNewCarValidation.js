import React from 'react'

export default function useNewCarValidation() {
    
    const [year, setYear] = React.useState(2021)

    return ({ year })

}
