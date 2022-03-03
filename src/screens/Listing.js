import React, { useContext, useState, useEffect } from 'react'
import { SearchContext } from '../providers/SearchProvider'
import { ListingCard } from '../components/ListingCard'


export const ListingScreen = () => {
    const { listing, setListing } = useContext(SearchContext)

    const [ house, setHouse ] = useState({})

    useEffect(() => {
        setHouse(listing)
        setListing({})
    }, [])

    return (
        <ListingCard listing={house} />
    )
}