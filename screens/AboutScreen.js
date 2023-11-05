import MainLayout from "../layouts/MainLayout";
import React from "react";
import { Button, View, Text } from "react-native";

function AboutScreen({ navigation }) {
    const date = new Date().toDateString();
    const name = "Will";
    return (
        <MainLayout>
      <View>
            
            <Text>by: {name}</Text>
            <Text>{date}</Text>
        <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
        />
        </View>
    </MainLayout>
        
    );

    }
export default AboutScreen;