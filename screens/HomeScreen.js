import { useState } from "react";
import React from 'react';
import { Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
function HomeScreen({ navigation }) {
    const [taskText, setTaskText] = useState("");
    const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);
    const addTask = (taskText) => {
      setTasks([...tasks, taskText]);
    };
    return (
        <MainLayout>
        <ToDoList tasks={tasks} />
      <ToDoForm
        addTask={addTask}
        setTaskText={setTaskText}
        taskText={taskText}
      />
      <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
        />
    </MainLayout>

        
      
        
    );
}
export default HomeScreen;