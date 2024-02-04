import React from 'react';
import { useLocation } from "react-router-dom";

function SearchPage () {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const message = queryParams.get('service');
    return (
        <div>
            {message}
        </div>
    );
};
export default SearchPage;