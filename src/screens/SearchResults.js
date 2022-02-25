import React, { useEffect, useContext } from 'react';
import {SafeAreaView, StyleSheet } from 'react-native';
import { SearchResultsList } from '../components/SearchResultsList';
import { SearchContext } from '../providers/SearchProvider'


const fakeListings= [
    {
        property_id: "1",
        address: {
            line: "main street 1"
        }
    },
    {
        property_id: "2",
        address: {
            line: "main street 2"
        }
    },
    {
        property_id: "3",
        address: {
            line: "main street 3"
        }
    },
    {
        property_id: "4",
        address: {
            line: "main street 4"
        }
    },
    {
        property_id: "5",
        address: {
            line: "main street 5"
        }
    },
    {
        property_id: "6",
        address: {
            line: "main street 6"
        }
    },
    {
        property_id: "7",
        address: {
            line: "main street 7"
        }
    },
    {
        property_id: "8",
        address: {
            line: "main street 8"
        }
    },
    {
        property_id: "9",
        address: {
            line: "main street 9"
        }
    },
    {
        property_id: "10",
        address: {
            line: "main street 10"
        }
    },
    {
        property_id: "11",
        address: {
            line: "main street 11"
        }
    },
    {
        property_id: "12",
        address: {
            line: "main street 12"
        }
    },
]

export const SearchResults = (props) => {

    const { houses, getHouses } = useContext(SearchContext)

    useEffect(() => {
        getHouses()
    }, [])

    // if (houses) {
    //     console.log(houses)
    // }

    return (
        <SafeAreaView style={styles.container}>
            <SearchResultsList
                data={houses}

            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
