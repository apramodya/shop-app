import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, View, Text, TextInput, ScrollView} from 'react-native';
import HeaderButton, {HeaderButtons, Item} from "react-navigation-header-buttons";

const EditProductScreen = props => {
    const productId = props.navigation.getParam('productId');
    const editedProduct = useSelector(state => state.products.userProducts).find(p => p.id === productId);

    const [title, setTitle] = useState(editedProduct? editedProduct.title : '');
    const [imageUrl, setImageUrl] = useState(editedProduct? editedProduct.imageUrl : '');
    const [price, setPrice] = useState(editedProduct? editedProduct.price : '');
    const [description, setDescription] = useState(editedProduct? editedProduct.description : '');

    return(
        <ScrollView>
            <View style={styles.form}>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)}/>
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Image URL</Text>
                    <TextInput style={styles.input} value={imageUrl} onChangeText={text => setImageUrl(text)}/>
                </View>
                {editedProduct ? null : (
                    <View style={styles.formControl}>
                        <Text style={styles.label}>Price</Text>
                        <TextInput style={styles.input} value={price} onChangeText={text => setPrice(text)}/>
                    </View>
                )}
                <View style={styles.formControl}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput style={styles.input} value={description} onChangeText={text => setDescription(text)}/>
                </View>
            </View>
        </ScrollView>
    )
};

EditProductScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('productId') ? 'Edit Product' : 'Add Product',
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Save "
                    iconName="ios-checkmark"
                    onPress={() => {
                        navData.navigation.navigate('EditProduct');
                    }}
                />
            </HeaderButtons>
        ),
    }
};

const styles = StyleSheet.create({
    form: {
        margin: 20
    },
    formControl: {
        width: '100%',
    },
    label: {
        fontFamily: 'open-sans',
        marginVertical: 8
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
});

export default EditProductScreen;
