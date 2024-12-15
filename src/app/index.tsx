import { View, Text } from "react-native"; 
import { Welcome } from "@/components/welcome";
import { Steps } from "@/components/steps";
import { Button } from "@/components/button";

export default function Index(){
    return (

        <View style={{ flex: 1, paddingTop:10, padding:40, gap:40}}>
          <Welcome/>
          <Steps/>
          <Button>
            <Button.Title>Começar</Button.Title>
          </Button>
        </View>
    );
}