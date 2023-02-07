import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginRight: 90,
  },

  name: {
    borderRadius: 5,
    backgroundColor: "#1f1e25",
    color: "#fff",
    flex: 1,
    fontSize: 16,
    paddingLeft: 16,
    height: 56,
    textAlignVertical: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 24,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#e23c44",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
  },
});
