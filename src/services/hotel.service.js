'use strict';


class HotelService {
	static listHotels = ({
		limit = 50,
		sort = 'createAt',
		page = 1,
		filter = '',
	}) => {
        return await dbInstance.query()

    };
}
