import PropTypes from 'prop-types';


export const Filter =({filterValue, changeFilter}) => {
    
        return (
                <label >Find contacts by name
                    <input type="text"
                        value={filterValue}
                        onChange={changeFilter} />
                </label>   
        )
    }
