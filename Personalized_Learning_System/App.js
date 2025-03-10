import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import your screens
import SplashScreen from "./components/SplashScreen";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import ResetPass from "./components/ResetPass";
import EmailSignup from "./components/EmailSignup";
import LaunchScreen from "./components/LaunchScreen";
import ProfileCompletion from "./components/ProfileCompletion";
import HomePage from "./components/HomePage";
import AllCategories from "./components/AllCategories";
import CourseDetails from "./components/CourseDetails";
import Filter from "./components/Filter";
import LearningAssessmentForm from "./components/LearningAssessmentForm";
import MyCourses from "./components/MyCourses";
import MyCourseLessons from "./components/MyCourseLessons";
import OngoingCourses from "./components/OngoingCourses";
import OngoingLessons from "./components/OngoingLessons";
import Bookmark from "./components/Bookmark";
import Chat from "./components/Chat";
import ProfilePage from "./components/ProfilePage";
import MyProfile from "./components/MyProfile";
import { Settings } from "react-native";
import HelpCenter from "./components/HelpCenter";
import Privacy from "./components/Privacy";
import CategoryCourses from "./components/CategoryCourses";
import SearchResult from "./components/SearchResult";
import NotificationSettings from "./components/NotificationSettings";
import PasswordManager from "./components/PasswordManager";
import FilteredCourses from "./components/FilteredCourses";
import Quizzes from "./components/Quizzes";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Launch">
        <Stack.Screen
          name="Launch"
          component={LaunchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPass"
          component={ResetPass}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EmailSignup"
          component={EmailSignup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileCompletion"
          component={ProfileCompletion}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LearningAssessmentForm"
          component={LearningAssessmentForm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchResult"
          component={SearchResult}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AllCategories"
          component={AllCategories}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CategoryCourses"
          component={CategoryCourses}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CourseDetails"
          component={CourseDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Filter"
          component={Filter}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FilteredCourses"
          component={FilteredCourses}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="MyCourses"
          component={MyCourses}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Quizzes"
          component={Quizzes}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="MyCourseLessons"
          component={MyCourseLessons}
          options={{ headerShown: false }}
        />
       <Stack.Screen
          name="OngoingCourses"
          component={OngoingCourses}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OngoingLessons"
          component={OngoingLessons}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Bookmark"
          component={Bookmark}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{ headerShown: false }}
        />
       <Stack.Screen
          name="ProfilePage"
          component={ProfilePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyProfile"
          component={MyProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NotificationSettings"
          component={NotificationSettings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PasswordManager"
          component={PasswordManager}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HelpCenter"
          component={HelpCenter}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Privacy"
          component={Privacy}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
