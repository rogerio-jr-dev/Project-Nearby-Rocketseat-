import { View, Text } from "react-native"; 
import { Welcome } from "@/components/welcome";
import { Steps } from "@/components/steps";



export default function Index(){
    return (

        <View style={{ flex: 1, paddingTop:10, paddingLeft:40, gap:40}}>
          <Welcome/>
          <Steps/>
        </View>

    );
}