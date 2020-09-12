import React from 'react'
import { Pagination } from 'react-bootstrap'

export default function JobPages({page, setPage, hasNextPage}) {

    function adjustPage(change) {
        setPage(pg => pg + change)
    }

    return (
        <Pagination>
            { page !== 1 && <Pagination.Prev onClick={()=> adjustPage(-1)} />}
            { page > 2 && <Pagination.Item>1</Pagination.Item>}
            { page > 2 && <Pagination.Ellipsis />}
            { page !== 1 && <Pagination.Item onClick={()=> setPage(-1)} >{page-1}</Pagination.Item>}
            <Pagination.Item>{page}</Pagination.Item>
            {hasNextPage && <Pagination.Item onClick={()=> adjustPage(1)} >{page+1}</Pagination.Item> }
            {hasNextPage && <Pagination.Next onClick={()=> adjustPage(1)} /> }

        </Pagination>
    )
}
