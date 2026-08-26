import { useState, useEffect } from "react";
import { FlatList, View, Text, Pressable } from "react-native";

export default function RequestComponent(props: any) {
  const [data, setData] = useState([]);

  async function request() {
    var response = await fetch(props.url);
    var json = await response.json();
    setData(json.planetas);
  }

  function showInfo(item: any) {
    alert(
      `Nombre: ${item.nombre}\nDiametro: ${item.diametro_km}\nDistancia al sol: ${item.distancia_al_sol_km}\nAnillos: ${item.tiene_anillos}\nLunas: ${item.lunas}`,
    );
  }

  useEffect(() => {
    request();
  }, []);

  return (
    <View>
      {data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item["nombre"]}
          renderItem={({ item }) => {
            return (
              <View>
                <Pressable onPress={() => showInfo(item)}>
                  <Text>{item["nombre"]}</Text>
                </Pressable>
              </View>
            );
          }}
        />
      ) : (
        <Text>Cargando...</Text>
      )}
    </View>
  );
}
