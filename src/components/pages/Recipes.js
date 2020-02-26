import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {connect} from "react-redux";
import Recipe from "../shared/Recipe";


const Recipes = ({recipes}) => {
    return (
        <View style={styles.mainView}>
            <FlatList
                data={recipes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <Recipe key={item.id} recipe={item}/>}
            />
        </View>
    )
};

Recipes.navigationOptions = {
    title: "My recipes"
};

const mapStateToProps = state => {
    return {
        recipes: state.recipeState.recipes,
    };
};
export default connect(mapStateToProps)(Recipes);
const styles = StyleSheet.create({
    mainView: {
        flex: 1
    }
});
