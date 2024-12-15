import { View,Alert} from "react-native"; 
import { useEffect, useState } from "react";

import { api } from "@/services/api";

import { Categories, CategoriesProps } from "@/components/categories";
import { PlaceProps } from "@/components/place";

type MarketsProps = PlaceProps 

export default function Home(){
const [categories, setCategories] = useState < CategoriesProps>([]); 
const [category, setCategory] = useState("");
const [markets, setMarkets] = useState < MarketsProps[]>(); 

    async function fetchCategories() {
         try {
            const { data } = await api.get("/categories")
            setCategories(data);
            setCategory(data[0].id);
         } catch (error) {
            console.log(error);
            Alert.alert("Categorias","Nao foi possivél carregar as categorias.")
         }
    }

    async function fetMarkets() {
      try {
       if(!category){
          return
       }
        const {data} = await api.get("/markets/category/" + category); 
        setMarkets(data);
        console.log(data)
      } catch (error) {
         console.log(error); 
         Alert.alert("Locais","Nao foi possivel carregar os locais.")
      }
    }
 
    useEffect(() => {
        fetchCategories(); 
    },[])

    useEffect(() => {
        fetMarkets();
    },[category])

    return <View style={{flex:1}}>
               <Categories 
                    data={categories} 
                    onSelect={setCategory} 
                    selected={category}/>
           </View>
    
}