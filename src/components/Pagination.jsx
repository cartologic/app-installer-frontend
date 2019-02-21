import { Icon, Pagination } from 'semantic-ui-react'

import React from 'react'

const AppPagination = () => (
	<Pagination
		defaultActivePage={5}
		ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
		firstItem={{ content: <Icon name='angle double left' />, icon: true }}
		lastItem={{ content: <Icon name='angle double right' />, icon: true }}
		prevItem={{ content: <Icon name='angle left' />, icon: true }}
		nextItem={{ content: <Icon name='angle right' />, icon: true }}
		totalPages={10}
	/>
)

export default AppPagination