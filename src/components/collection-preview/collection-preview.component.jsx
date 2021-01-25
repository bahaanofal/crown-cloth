import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.style.scss';

const CollectionPreview = ({ title, items }) => (
    <div class='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                    .filter((items, index) => index < 4)
                    .map(({id, ...othetItemProps}) => (
                        <CollectionItem key={id} { ...othetItemProps } />
                    ))
            }
        </div>
    </div>
);

export default CollectionPreview;