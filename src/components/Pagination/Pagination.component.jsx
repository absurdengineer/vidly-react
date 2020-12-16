import React from 'react'
import _ from 'lodash'

const Pagination = props => {
    const {pageSize, itemCount, currentPage, onPageChange } = props
    const pageCount = Math.ceil(itemCount/pageSize)
    if(pageCount === 1) return null 
    const pages = _.range(1, pageCount + 1)
    return (
        <nav aria-label="...">
          <ul className="pagination pagination-lg">
            {pages.map(page => 
                <li style={{cursor:'pointer'}} key={page} className={page=== currentPage ? 'page-item active' : 'page-item'}><p onClick={()=> {onPageChange(page)}} className="page-link">{page}</p></li>
            )}
          </ul>
        </nav>
     );
}

export default Pagination;