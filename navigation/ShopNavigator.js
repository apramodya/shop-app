import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import colors from '../constants/colors';

const productNavigator = createStackNavigator(
    {
        ProductsOverview: ProductsOverviewScreen,
    }, {
        defaultNavigationOptions: {
            headerTintColor: colors.primary,
        }
    }
);

export default createAppContainer(productNavigator);
