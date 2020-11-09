import { useState } from 'react'

export const PageCounter = (initialState = 1) => {

    const [Page, setPage] = useState(initialState)

    const Siguiente = () => {
        setPage(Page + 1)
        window.scrollTo(0,0);
    }

    const Anterior = () => {
        if (Page < 1) return
        setPage(Page - 1)
        window.scrollTo(0,0);
    }

    return {
        Page,
        Siguiente,
        Anterior
    }
}
