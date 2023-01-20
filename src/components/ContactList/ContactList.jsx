import PropTypes from 'prop-types';

export const ContactList = ({listItems, onDelete}) => {
    return (
        <>
            <ul>
                {listItems.length > 0 && (listItems.map((listItem) => (
                    <li key={listItem.id}>{listItem.name}: {listItem.number}
                        <button type='button' onClick={() => onDelete(listItem.id)}>Delete</button>
                    </li>
            )))}
                </ul>
        </>
        
    )
}
