import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4C3C6F",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    backgroundColor: "rgba(196,196,196,0.5)",
    margin: 10,
    height: 52,
    width: 360,
    borderRadius: 8,
    fontSize: 18
  },
  btnCadastrar: {
    backgroundColor: "rgba(72,210,127,0.7)",
    // backgroundOpacity: '17%',
    height: 50,
    width: 160,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40
  },
  textBtn: {
    // textAlign: "center",
    // padding: 5,
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default styles;
