import React from 'react';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailsScreen from "../screens/shop/ProductDetailsScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import colors from '../constants/colors';
import {Ionicons} from '@expo/vector-icons';
import UserProductScreen from "../screens/user/UserProductsScreen";
import EditProductScreen from "../screens/user/EditProductScreen";


const defNavOpt = {
    headerTintColor: colors.primary,
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    }
};

const productNavigator = createStackNavigator(
    {
        ProductsOverview: ProductsOverviewScreen,
        ProductDetails: ProductDetailsScreen,
        Cart: CartScreen,
    }, {
        navigationOptions: {
            drawerIcon: drawerConfig => <Ionicons name="ios-cart" size={23} color={drawerConfig.tintColor}/>
        },
        defaultNavigationOptions: defNavOpt
    }
);

const ordersNavigator = createStackNavigator(
    {
        Orders: OrdersScreen,
    }, {
        navigationOptions: {
            drawerIcon: drawerConfig => <Ionicons name="ios-list" size={23} color={drawerConfig.tintColor}/>
        },
        defaultNavigationOptions: defNavOpt
    }
);

const adminNavigator = createStackNavigator(
    {
        UserProducts: UserProductScreen,
        EditProduct: EditProductScreen
    }, {
        navigationOptions: {
            drawerIcon: drawerConfig => <Ionicons name="ios-create" size={23} color={drawerConfig.tintColor}/>
        },
        defaultNavigationOptions: defNavOpt
    }
);

const shopNavigator = createDrawerNavigator(
    {
        Products: productNavigator,
        Orders: ordersNavigator,
        Admin: adminNavigator
    }, {
        contentOptions: {
            activeTintColor: colors.primary
        }
    }
);

export default createAppContainer(shopNavigator);
