// //App.js in src dir is using the Login Form and Header to set up the main UI for index.js at root for the App
// import React, { Component } from "react";
// import { View } from "react-native";
// // import the firebase third party lib
// import firebase from "firebase";
// // Custom Components to be used in the app
// //import { Header } from "./components/common/Header";

// import { Header } from "./common/";
// // Import our LoginForm component to be displayed on the screen
// //import LoginForm from "./components/LoginForm";

// import LoginForm from "./LoginForm";

// class App extends Component {
//     //Life Cycle Method to init the firebase
//     componentWillMount(){
//         firebase.initializeApp({
//             apiKey: "AIzaSyCS4r5KFL-ZfFPUGp8BKreZIdO3HRU7zJg",
//             authDomain: "rnapp-auth-class.firebaseapp.com",
//             databaseURL: "https://rnapp-auth-class.firebaseio.com",
//             projectId: "rnapp-auth-class",
//             storageBucket: "rnapp-auth-class.appspot.com",
//             messagingSenderId: "738911042070"
//         });
//     }


// render() {
//     return (
//         <View>
//             <Header headerText="Authentication" />
//             <LoginForm />
//         </View>
//     );
// }

// }

// export default App ;


import React, { Component } from "react";
import { View } from "react-native";
// import the firebase third party lib
import firebase from "firebase";
// Custom Components to be used in the app
import {
Header,
CustomButton,
CardSection,
Card,
Spinner
} from "./components/common";
// Import our LoginForm component to be displayed on the screen
import LoginForm from "./components/LoginForm";

class App extends Component {
state = { loggedIn: null };
// Life cycle method to init the firebase
componentWillMount() {
firebase.initializeApp({
apiKey: "AIzaSyDV-EREF0SeH1iSM2DYNsaCpzjZayCGWNo",
authDomain: "rnapp-auth-class-mad.firebaseapp.com",
databaseURL: "https://rnapp-auth-class-mad.firebaseio.com",
projectId: "rnapp-auth-class-mad",
storageBucket: "rnapp-auth-class-mad.appspot.com",
messagingSenderId: "561918213506"
});

//Handle the Application when it's logged in or logged out
firebase.auth().onAuthStateChanged(user => {
if (user) {
this.setState({ loggedIn: true });
} else {
this.setState({ loggedIn: false });
}
});
}

renderContent() {
switch (this.state.loggedIn) {
case true:
return (
<Card>
<CardSection>
<CustomButton onPress={() => firebase.auth().signOut()}>
Logout
</CustomButton>
</CardSection>
</Card>
);
case false:
return <LoginForm />;
default:
return <Spinner size="large" />;
}
}
render() {
return (
<View>
<Header headerText="Authentication" />
{this.renderContent()}
{/* 
Before the renderContent Handling
<LoginForm /> */}
</View>
);
}
}

export default App;