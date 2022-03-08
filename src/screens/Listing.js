import React, { useContext, useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native-paper'
import { SearchContext } from '../providers/SearchProvider'

import { ListingCard } from '../components/ListingCard'


export const ListingScreen = () => {
    const { listing, setListing, getListingDetail, listingDetail, thumbnail, setThumbnail } = useContext(SearchContext)

    const [ house, setHouse ] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        console.log(listing)
        getListingDetail(listing.property_id)
        .then((data) => setHouse(data))
        setThumbnail(listing.thumbnail ? listing.thumbnail : listing.photos[0].href)
        // setListing({})
        setIsLoading(false)
    }, [])

    return (
        isLoading ? <ActivityIndicator animating={true}/> : <ListingCard listingDetail={listingDetail} thumbnail={thumbnail} />
        
    )
}