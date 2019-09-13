import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailsScreen from "../screens/shop/ProductDetailsScreen";
import CartScreen from "../screens/shop/CartScreen";
import colors from '../constants/colors';

const productNavigator = createStackNavigator(
    {
        ProductsOverview: ProductsOverviewScreen,
        ProductDetails: ProductDetailsScreen,
        Cart: CartScreen,
    }, {
        defaultNavigationOptions: {
            headerTintColor: colors.primary,
            headerTitleStyle: {
                fontFamily: 'open-sans-bold'
            },
            headerBackTitleStyle: {
                fontFamily: 'open-sans'
            }
        }
    }
);

export default createAppContainer(productNavigator);
