import { createSelector } from 'reselect';
// import memoize from 'lodash.memoize';


const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

// نفس اللي فوقها لكن بطريقة تانية
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

// export const selectCollection = memoize((collectionUrlParam) =>
//     createSelector(
//     [selectCollections],
//     (collections) => collections[collectionUrlParam]
//     )
// );
// (مزبطتش) lodash.memoize نفس اللي فوقها لكن اللي فوق طريقة أسرع باستخدام مكتبة 
export const selectCollection = collectionUrlParam => 
    createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
    );