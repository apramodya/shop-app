import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from '../../store/actions/cart';
import HeaderButton from '../../components/ui/HeaderButton';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';


const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();

    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={data =>
                <ProductItem image={data.item.imageUrl}
                             title={data.item.title}
                             price={data.item.price}
                             onViewDetail={() => {
                                 props.navigation.navigate(
                                     {
                                         routeName: 'ProductDetails',
                                         params: {productId: data.item.id, title: data.item.title}
                                     },
                                 );
                             }}
                             onAddToCart={() => {
                                 dispatch(cartActions.addToCart(data.item));
                             }}
                />
            }
        />
    );
};

ProductsOverviewScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Shop App',
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Cart"
                    iconName="ios-cart"
                    onPress={() => {
                        navData.navigation.navigate(
                            {
                                routeName: 'Cart',
                            }
                        );
                    }}/>
            </HeaderButtons>
        )
    }
};

const styles = StyleSheet.create({});

export default ProductsOverviewScreen;
