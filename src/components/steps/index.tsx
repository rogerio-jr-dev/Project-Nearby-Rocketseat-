import { View, Text } from "react-native";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native"; 

import {s} from "./styles";
import { Step } from "../step";

export function Steps(){
    return (
      <View style={s.container}>
        <Text style={s.title}>Veja como funciona:</Text>
        <Step
          icon={IconMapPin}
          title={"Encontre estabelecimentos"}
          description={"Veja locais perto de você que\nsão parceiros Nearby"}
        />
        <Step
          icon={IconQrcode}
          title={"Ative o cupom com QR Codencontre estabelecimentos"}
          description={
            "Escaneie o código no estabelecimento \npara usar o benefício"
          }
        />
        <Step
          icon={IconTicket}
          title={"Garanta vantagens perto de você"}
          description={
            "Ative cupons onde estiver, em\ndiferentes tipos de estabelecimento "
          }
        />
      </View>
    );
}; 